import { Button } from 'assets/styles/utils'
import styled from 'styled-components'
import { RatingStarWrapper, RatingStarPercent } from 'components/ProductRating/productRating.style'

export const ProductBriefing = styled.div`
    display: flex;
    background: #fff;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: initial;
    }
`

export const ProductImages = styled.div`
    width: 480px;
    padding: 1.5rem;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        width: 100%;
        padding: 1.5rem 1.5rem 0 1.5rem;
    }
`

export const ProductImageActive = styled.div`
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    position: relative;
    background: #e8e2e2;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        height: 350px;
        background: #fff;
    }
`

export const Image1 = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: none;
    }
`
export const Image2 = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: none;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: block;
    }
`

export const SkeletonImage = styled.div`
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 54 61' fill='%23e5e4e4'%3E%3Cpath d='M51.2 16.9H38.7C38.7 11.6 36 .6 27 .5 17.4.4 15.2 12.4 15.2 16.9H2.8c-3.4 0-2.7 3.4-2.7 3.4l2.4 33s-.1 7.3 6.3 7.5h36.5c6.2-.4 6.3-7.5 6.3-7.5l2.4-33c0-.1.5-3.5-2.8-3.4zM27.1 4.2c7.1.2 7.9 11.7 7.7 12.6H19.1c-.1-.9.4-12.4 8-12.6zm9.1 44.6c-1 1.7-2.7 3-5 3.7-1.2.4-2.4.5-3.6.5-3.2 0-6.5-1.1-9.3-3.3-.8-.6-1-1.5-.5-2.3.2-.4.7-.7 1.2-.8.4-.1.9 0 1.2.3 3.2 2.4 8.3 4 11.9 1.6 1.4-.9 2.1-2.7 1.6-4.3-.5-1.6-2.2-2.7-3.5-3.4-1-.6-2.1-1-3.3-1.4-.9-.3-1.9-.7-2.9-1.2-2.4-1.2-4-2.6-4.8-4.2-1.2-2.3-.6-5.4 1.4-7.5 3.6-3.8 10-3.2 14-.4.9.6.9 1.7.4 2.5s-1.4.9-2.2.4c-2-1.4-4.4-2-6.4-1.7-2 .3-4.7 2-4.4 4.6.2 1.5 2 2.6 3.3 3.3.8.4 1.5.7 2.3.9 4.3 1.3 7.2 3.3 8.6 5.7 1.2 2.1 1.2 4.9 0 7z'/%3E%3C/svg%3E");
    max-width: 100%;
    max-height: 100%;
    height: 100px;
    width: 100px;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
`

export const ProductImageSlider = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: none;
    }
`

const ProductIconButton = styled.button`
    position: absolute;
    width: 2rem;
    height: 4rem;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    svg {
        width: 2rem;
        height: 2rem;
        fill: currentColor;
    }
`

export const ProductIconButonPrev = styled(ProductIconButton)`
    left: 0;
`
export const ProductIconPrev = styled(ProductIconButton)`
    display: none;
    left: 0;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: block;
    }
`

export const ProductImage = styled.div`
    padding: 0.5rem;
    height: 92px;
    width: 92px;
    flex-shrink: 0;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
        max-width: 100%;
        max-height: 100%;
        border: 2px solid ${({ active }) => (active ? '#ee4d2d' : 'transparent')};
    }
`

export const ProductIconButtonNext = styled(ProductIconButton)`
    right: 0;
`
export const ProductIconNext = styled(ProductIconButton)`
    display: none;
    right: 0;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: block;
    }
`

export const ProductMeta = styled.div`
    flex: 1;
    padding: 1.5rem;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        padding: 0 1.5rem 1.5rem;
    }
`

export const ProductTitle = styled.h1`
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 1.5rem;
`

export const ProductMeta1 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`

const ProductMeta1Item = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-right: 1px solid rgba(0, 0, 0, 0.14);
    &:first-child {
        padding-left: 0;
    }
    &:last-child {
        padding-right: 0;
        border-right: 0;
    }
`

export const ProductRating = styled(ProductMeta1Item)`
    span {
        color: #ee4d2d;
        border-bottom: 1px solid #ee4d2d;
        font-size: 1.6rem;
        margin-right: 0.5rem;
    }
    ${RatingStarWrapper} svg {
        width: 1.4rem;
        height: 1.4rem;
    }
    ${RatingStarPercent} svg {
        color: #ee4d2d;
        fill: #ee4d2d;
    }
`

export const ProductSold = styled(ProductMeta1Item)`
    span:first-child {
        font-size: 1.6rem;
        color: #222;
        margin-right: 5px;
        padding-bottom: 1px;
    }
    span:last-child {
        font-size: 1.4rem;
        color: #767676;
        text-transform: capitalize;
    }
`

export const ProductPrice = styled.div`
    padding: 1.5rem 2rem;
    background: #fafafa;
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
`

export const ProductPriceOriginal = styled.div`
    font-size: 1.6rem;
    text-decoration: line-through;
    color: #929292;
    margin-right: 10px;
`

export const ProductPriceSale = styled.div`
    font-size: 3rem;
    font-weight: 500;
    color: #ee4d2d;
`

export const ProductPriceSalePercent = styled.div`
    font-size: 1.2rem;
    color: #fff;
    text-transform: uppercase;
    background: #ee4d2d;
    border-radius: 2px;
    padding: 2px 4px;
    font-weight: 600;
    line-height: 1;
    margin-left: 15px;
    white-space: nowrap;
`

export const ProductBuyQuantity = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`

export const ProductBuyQuantityTitle = styled.div`
    color: #757575;
    text-transform: capitalize;
    flex: 0 0 110px;
    max-width: 110px;
`

export const ProductBuyQuantityController = styled.div`
    margin-right: 1.2rem;
`

export const ProductBuyQuantityQuantity = styled.div``

export const ProductButtons = styled(Button)`
    background: rgba(255, 87, 34, 0.1);
    border: 1px solid #ee4d2d;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
    color: #ee4d2d;
    margin-right: 15px;
    padding: 0 1.2rem;
    font-size: 14px;
    height: 48px;
    svg {
        margin-right: 10px;
        color: #ee4d2d;
        stroke: #ee4d2d;
        width: 2rem;
        height: 2rem;
    }
    &:hover {
        background: rgba(255, 87, 34, 0.15);
    }
`

export const ProductContent = styled.div`
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    border-radius: 0.2rem;
    overflow: hidden;
    background: #fff;
    margin-top: 3rem;
    padding: 2rem;
`

export const ProductContentHeading = styled.div`
    background: rgba(0, 0, 0, 0.02);
    color: rgba(0, 0, 0, 0.87);
    font-size: 1.8rem;
    padding: 1.4rem;
    text-transform: capitalize;
`

export const ProductContentDetail = styled.div`
    margin: 3rem 1.5rem 1.5rem;
    font-size: 1.4rem;
    line-height: 2.2;
`
