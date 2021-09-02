import { path } from 'constants/path'
import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { formatK, formatMoney, generateNameId } from 'utils/helper'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './productItem.style'

ProductItem.propTypes = {
    product: PropTypes.object
}

export default function ProductItem({ product }) {
    const { t } = useTranslation()

    return (
        <S.Product>
            <Link to={path.product + `/${generateNameId(product)}`}>
                <S.ProductItem>
                    <S.ProductItemImage>
                        <img src={product.image} alt={product.name} />
                    </S.ProductItemImage>
                    <S.ProductItemInfo>
                        <S.ProductItemTitle>{product.name}</S.ProductItemTitle>
                        <S.ProductItemPrice>
                            <S.ProductItemPriceOriginal>
                                {formatMoney(product.price_before_discount)}
                            </S.ProductItemPriceOriginal>
                            <S.ProductItemPriceSale>{formatMoney(product.price)}</S.ProductItemPriceSale>
                        </S.ProductItemPrice>
                        <S.ProductItemMeta>
                            <ProductRating rating={product.rating} />
                            <S.ProductItemSold>
                                <span>{formatK(product.sold)}</span>
                                <span>{t('searchItemResult.sold')}</span>
                            </S.ProductItemSold>
                        </S.ProductItemMeta>
                    </S.ProductItemInfo>
                </S.ProductItem>
            </Link>
        </S.Product>
    )
}
