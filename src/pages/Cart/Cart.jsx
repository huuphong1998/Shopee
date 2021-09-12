import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import CheckBox from 'components/CheckBox/CheckBox'
import ProductQuantityController from 'components/ProductQuantityController/ProductQuantityController'
import CartSkeleton from 'components/Skeleton/CartSkeleton'
import { path } from 'constants/path'
import keyBy from 'lodash/keyBy'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { formatMoney, generateNameId } from 'utils/helper'
import { buyPurchases, deletePurchases, getCartPurchases, updatePurchase } from './cart.slice'
import * as S from './cart.style'

export default function Cart() {
    const { enqueueSnackbar } = useSnackbar()
    const purchases = useSelector(state => state.cart.purchases)
    const [localPurchases, setLocalPurchases] = useState(() =>
        createNextState(purchases, draft => {
            draft.forEach(purchase => {
                purchase.disable = false
                purchase.checked = false
            })
        })
    )
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const isCheckedAll = localPurchases.every(purchase => purchase.checked)
    const checkedPurchases = localPurchases.filter(purchase => purchase.checked)
    const totalCheckedPurchases = checkedPurchases.length
    const totalCheckedPurchasesPrice = checkedPurchases.reduce((result, current) => {
        return result + current.product.price * current.buy_count
    }, 0)
    const totalCheckedPurchasesSavingPrice = checkedPurchases.reduce((result, current) => {
        return result + (current.product.price_before_discount - current.product.price) * current.buy_count
    }, 0)

    useEffect(() => {
        setLocalPurchases(localPurchases => {
            const localPurchasesObject = keyBy(localPurchases, '_id')
            return createNextState(purchases, draft => {
                draft.forEach(purchase => {
                    purchase.disabled = false
                    purchase.checked = Boolean(localPurchasesObject[purchase._id]?.checked)
                })
            })
        })
        setLoading(false)
    }, [purchases])

    const handleInputQuantity = indexPurchase => value => {
        const newLocalPurchases = createNextState(localPurchases, draft => {
            draft[indexPurchase].buy_count = value
        })
        setLocalPurchases(newLocalPurchases)
    }

    const handleBlurQuantity = indexPurchase => async value => {
        const purchase = localPurchases[indexPurchase]
        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft[indexPurchase].disabled = true
            })
        )
        await dispatch(
            updatePurchase({
                product_id: purchase.product._id,
                buy_count: value
            })
        ).then(unwrapResult)
        await dispatch(getCartPurchases()).then(unwrapResult)
        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft[indexPurchase].disabled = false
            })
        )
    }

    const handleIncreaseAndDecrease = indexPurchase => async value => {
        const purchase = localPurchases[indexPurchase]
        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft[indexPurchase].disabled = true
                draft[indexPurchase].buy_count = value
            })
        )

        await dispatch(
            updatePurchase({
                product_id: purchase.product._id,
                buy_count: value
            })
        ).then(unwrapResult)
        await dispatch(getCartPurchases()).then(unwrapResult)
        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft[indexPurchase].disabled = false
            })
        )
    }

    const handleCheck = indexPurchase => value => {
        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft[indexPurchase].checked = value
            })
        )
    }

    const handleCheckAll = () => {
        setLocalPurchases(localPurchases =>
            createNextState(localPurchases, draft => {
                draft.forEach(purchase => {
                    purchase.checked = !isCheckedAll
                })
            })
        )
    }

    const handleRemove = indexPurchase => async () => {
        const purchase_id = localPurchases[indexPurchase]._id
        await dispatch(deletePurchases([purchase_id])).then(unwrapResult)
        await dispatch(getCartPurchases()).then(unwrapResult)
        enqueueSnackbar('Xóa đơn thành công', { variant: 'success' })
    }

    const handleRemoveManyPurchase = async () => {
        const purchase_ids = checkedPurchases.map(purchase => purchase._id)
        await dispatch(deletePurchases(purchase_ids)).then(unwrapResult)
        await dispatch(getCartPurchases()).then(unwrapResult)
        enqueueSnackbar('Xóa đơn thành công', { variant: 'success' })
    }

    const handleBuyPurchases = async () => {
        if (checkedPurchases.length > 0) {
            const body = checkedPurchases.map(purchase => ({
                product_id: purchase.product._id,
                buy_count: purchase.buy_count
            }))
            await dispatch(buyPurchases(body)).then(unwrapResult)
            await dispatch(getCartPurchases()).then(unwrapResult)
            enqueueSnackbar('Đặt đơn hàng thành công', { variant: 'success' })
        }
    }

    const { t } = useTranslation()

    return (
        <div className="container container-header">
            <Helmet>
                <title>{t('headerCart.title')}</title>
            </Helmet>
            <div>
                <S.ProductHeader>
                    <S.ProductHeaderCheckbox>
                        <CheckBox onChange={handleCheckAll} checked={isCheckedAll} />
                    </S.ProductHeaderCheckbox>
                    <S.ProductHeaderName>{t('cart.product')}</S.ProductHeaderName>
                    <S.ProductHeaderUnitPrice>{t('cart.unitPrice')}</S.ProductHeaderUnitPrice>
                    <S.ProductHeaderQuantity>{t('cart.quantity')}</S.ProductHeaderQuantity>
                    <S.ProductHeaderTotalPrice>{t('cart.totalPrice')}</S.ProductHeaderTotalPrice>
                    <S.ProductHeaderAction>{t('cart.actions')}</S.ProductHeaderAction>
                </S.ProductHeader>
                <S.ProductSection>
                    {loading ? (
                        <CartSkeleton />
                    ) : (
                        localPurchases &&
                        localPurchases.map((purchase, index) => (
                            <S.CartItem key={purchase._id}>
                                <S.CartItemCheckbox>
                                    <CheckBox checked={purchase.checked} onChange={handleCheck(index)} />
                                </S.CartItemCheckbox>
                                <S.CartItemOverview>
                                    <S.CartItemOverviewImage to={path.product + `/${generateNameId(purchase.product)}`}>
                                        <img src={purchase.product.image} alt={purchase.product.name} />
                                    </S.CartItemOverviewImage>
                                    <S.CartItemOverviewNameWrapper>
                                        <S.CartItemOverviewName
                                            to={path.product + `/${generateNameId(purchase.product)}`}
                                        >
                                            {purchase.product.name}
                                        </S.CartItemOverviewName>
                                    </S.CartItemOverviewNameWrapper>
                                </S.CartItemOverview>
                                <S.CartItemEdit onClick={handleRemove(index)}>{t('cart.delete')}</S.CartItemEdit>
                                <S.CartItemUnitPrice>
                                    <span>{t('cart.unitPrice')}: </span>
                                    <span>{formatMoney(purchase.product.price_before_discount)}</span>
                                    <span>{formatMoney(purchase.product.price)}</span>
                                </S.CartItemUnitPrice>
                                <S.CartItemQuantity>
                                    <span>{t('cart.quantity')}: </span>
                                    <ProductQuantityController
                                        max={purchase.product.quantity}
                                        value={purchase.buy_count}
                                        disabled={purchase.disabled}
                                        onInput={handleInputQuantity(index)}
                                        onBlur={handleBlurQuantity(index)}
                                        onIncrease={handleIncreaseAndDecrease(index)}
                                        onDecrease={handleIncreaseAndDecrease(index)}
                                    />
                                </S.CartItemQuantity>
                                <S.CartItemTotalPrice>
                                    <span>{t('cart.totalPrice')}: </span>
                                    <span>{formatMoney(purchase.product.price * purchase.buy_count)}</span>
                                </S.CartItemTotalPrice>
                                <S.CartItemAction>
                                    <S.CartItemActionButton onClick={handleRemove(index)}>
                                        {t('cart.delete')}
                                    </S.CartItemActionButton>
                                </S.CartItemAction>
                            </S.CartItem>
                        ))
                    )}
                </S.ProductSection>
            </div>
            <S.CartFooter>
                <S.CartFooterCheckbox>
                    <CheckBox onChange={handleCheckAll} checked={isCheckedAll} />
                </S.CartFooterCheckbox>
                <S.CartFooterButton onClick={handleCheckAll}>
                    {t('cart.selectAll')} ({purchases.length})
                </S.CartFooterButton>
                <S.CartFooterButton onClick={handleRemoveManyPurchase}>{t('cart.delete')}</S.CartFooterButton>
                <S.CartFooterSpaceBetween />
                <S.CartFooterPrice>
                    <S.CartFooterPriceTop>
                        <div>
                            {t('cart.total')} ({totalCheckedPurchases} {t('cart.products')}):{' '}
                        </div>
                        <div>{formatMoney(totalCheckedPurchasesPrice)}</div>
                    </S.CartFooterPriceTop>
                    <S.CartFooterPriceBot>
                        <div>{t('cart.economical')}</div>
                        <div>{formatMoney(totalCheckedPurchasesSavingPrice)}</div>
                    </S.CartFooterPriceBot>
                </S.CartFooterPrice>
                <S.CartFooterCheckout onClick={handleBuyPurchases}>{t('cart.buy')}</S.CartFooterCheckout>
            </S.CartFooter>
        </div>
    )
}
