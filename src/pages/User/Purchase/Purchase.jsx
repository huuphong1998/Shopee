import { unwrapResult } from '@reduxjs/toolkit'
import PurchaseSkeleton from 'components/Skeleton/PurchaseSkeleton'
import MenuHamburgerRed from 'components/MenuHamburgerRed/MenuHamburgerRed'
import { path } from 'constants/path'
import { purchaseStatus } from 'constants/status'
import useQuery from 'hooks/useQuery'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { formatMoney, generateNameId } from 'utils/helper'
import { getPurchases } from '../user.slice'
import * as S from './purchase.style'

Purchase.propTypes = {
    clicked: PropTypes.bool,
    handleClick: PropTypes.func
}

export default function Purchase({ clicked, handleClick }) {
    const [purchases, setPurchases] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const query = useQuery()
    const status = useMemo(() => query.status || purchaseStatus.all, [query])
    useEffect(() => {
        setLoading(true)
        dispatch(getPurchases(status))
            .then(unwrapResult)
            .then(res => {
                setPurchases(res.data)
                setLoading(false)
            })
    }, [status, dispatch])

    const handleActive = value => () => Number(value) === Number(status)

    const { t } = useTranslation()

    return (
        <div>
            <Helmet>
                <title>{t('purchase.title')}</title>
            </Helmet>
            <S.PurchaseTabs>
                <S.PurchaseTabItem to={path.purchase} isActive={handleActive(purchaseStatus.all)}>
                    {t('purchase.all')}
                </S.PurchaseTabItem>
                <S.PurchaseTabItem
                    to={{
                        pathname: path.purchase,
                        search: `?${queryString.stringify({ status: purchaseStatus.waitForConfirmation })}`
                    }}
                    isActive={handleActive(purchaseStatus.waitForConfirmation)}
                >
                    {t('purchase.toPay')}
                </S.PurchaseTabItem>
                <S.PurchaseTabItem
                    to={{
                        pathname: path.purchase,
                        search: `?${queryString.stringify({ status: purchaseStatus.waitForGetting })}`
                    }}
                    isActive={handleActive(purchaseStatus.waitForGetting)}
                >
                    {t('purchase.toShip')}
                </S.PurchaseTabItem>
                <S.PurchaseTabItem
                    to={{
                        pathname: path.purchase,
                        search: `?${queryString.stringify({ status: purchaseStatus.inProgress })}`
                    }}
                    isActive={handleActive(purchaseStatus.inProgress)}
                >
                    {t('purchase.toReceive')}
                </S.PurchaseTabItem>
                <S.PurchaseTabItem
                    to={{
                        pathname: path.purchase,
                        search: `?${queryString.stringify({ status: purchaseStatus.delivered })}`
                    }}
                    isActive={handleActive(purchaseStatus.delivered)}
                >
                    {t('purchase.completed')}
                </S.PurchaseTabItem>
                <S.PurchaseTabItem
                    to={{
                        pathname: path.purchase,
                        search: `?${queryString.stringify({ status: purchaseStatus.cancelled })}`
                    }}
                    isActive={handleActive(purchaseStatus.cancelled)}
                >
                    {t('purchase.cancelled')}
                </S.PurchaseTabItem>
                <S.PurchaseTabItemMenu>
                    <MenuHamburgerRed clicked={clicked} handleClick={handleClick} />
                </S.PurchaseTabItemMenu>
            </S.PurchaseTabs>
            <S.PurchaseList>
                {loading ? (
                    <PurchaseSkeleton />
                ) : (
                    purchases &&
                    purchases.map(purchase => (
                        <S.OrderCard key={purchase._id}>
                            <S.OrderCardContent>
                                <S.OrderCardDetail>
                                    <img src={purchase.product.image} alt="" />
                                    <S.OrderContent>
                                        <S.OrderName>{purchase.product.name}</S.OrderName>
                                        <S.OrderQuantity>{purchase.product.buy_count}</S.OrderQuantity>
                                    </S.OrderContent>
                                </S.OrderCardDetail>
                                <S.OrderCardPrice>{formatMoney(purchase.product.price)}</S.OrderCardPrice>
                            </S.OrderCardContent>
                            <S.OrderCardButtonsContainer>
                                <S.PurchaseButton to={path.product + `/${generateNameId(purchase.product)}`} light={1}>
                                    {t('purchase.viewProduct')}
                                </S.PurchaseButton>
                                <S.TotalPrice>
                                    <S.TotalPriceLabel>{t('purchase.totalPrice')}</S.TotalPriceLabel>
                                    <S.TotalPricePrice>
                                        {formatMoney(purchase.product.price * purchase.buy_count)}
                                    </S.TotalPricePrice>
                                </S.TotalPrice>
                            </S.OrderCardButtonsContainer>
                        </S.OrderCard>
                    ))
                )}
            </S.PurchaseList>
        </div>
    )
}
