import { unwrapResult } from '@reduxjs/toolkit'
import FilterPanel from 'components/FilterPanel/FilterPanel'
import FilterPanelToggle from 'components/FilterPanelToggle/FilterPanelToggle'
import SearchItemResult from 'components/SearchItemResult/SearchItemResult'
import useQuery from 'hooks/useQuery'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { getCategories, getProducts } from './home.slice'
import * as S from './home.style'

export default function Home() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [productList, setProductList] = useState({
        productList: [],
        pagination: {}
    })
    const [filters, setFilters] = useState({})
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()
    const query = useQuery()

    useEffect(() => {
        dispatch(getCategories())
            .then(unwrapResult)
            .then(res => {
                setCategories(res.data)
            })
    }, [dispatch])

    useEffect(() => {
        const _filters = {
            ...query,
            page: query.page || 1,
            limit: query.limit || 30,
            sortBy: query.sortBy || 'view'
        }
        setFilters(_filters)

        const params = {
            page: _filters.page,
            limit: _filters.limit,
            category: _filters.category,
            rating_filter: _filters.rating,
            price_max: _filters.maxPrice,
            price_min: _filters.minPrice,
            sort_by: _filters.sortBy,
            order: _filters.order,
            name: _filters.name
        }

        ;(async () => {
            setClicked(false)
            setLoading(true)
            const data = await dispatch(getProducts({ params }))
            const res = unwrapResult(data)
            setProductList(res.data)
            setLoading(false)
        })()
    }, [query, dispatch])

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <S.Home>
            <Helmet>
                <title>MyShop Việt Nam | Mua và bán trên ứng dụng di động hoặc wesbite</title>
            </Helmet>
            <FilterPanelToggle categories={categories} filters={filters} clicked={clicked} />
            <S.Container className="container container-home">
                <S.Side>
                    <FilterPanel categories={categories} filters={filters} />
                </S.Side>
                <S.Main>
                    <SearchItemResult
                        productList={productList}
                        filters={filters}
                        loading={loading}
                        clicked={clicked}
                        handleClick={handleClick}
                    />
                </S.Main>
            </S.Container>
        </S.Home>
    )
}
