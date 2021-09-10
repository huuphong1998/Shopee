import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'assets/styles/utils'

export const ProductHeader = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    overflow: hidden;
    border-radius: 3px;
    height: 5.5rem;
    font-size: 1.4rem;
    background: #fff;
    text-transform: capitalize;
    margin-bottom: 12px;
    color: #888;
    padding: 0 20px;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: none;
    }
`

export const ProductHeaderCheckbox = styled.div`
    display: flex;
    align-items: center;
    padding: 0 12px 0 20px;
    min-width: 58px;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: inline-flex;
    }
`

export const ProductHeaderName = styled.div`
    width: 45%;
    color: rgba(0, 0, 0, 0.8);
`

export const ProductHeaderUnitPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12%;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        width: 75%;
    }
`

export const ProductHeaderQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        width: 71%;
        padding: 15px 0;
    }
`

export const ProductHeaderTotalPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12%;
`

export const ProductHeaderAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: none;
    }
`

export const ProductSection = styled.div`
    padding: 20px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    border-radius: 3px;
    background: #fff;
    margin-bottom: 2.5rem;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        padding: 10px;
    }
`

export const CartItem = styled.div`
    display: flex;
    padding: 2rem 0;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.09);
    margin-bottom: 2.2rem;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: inherit;
    }
`

export const CartItemCheckbox = styled(ProductHeaderCheckbox)``

export const CartItemOverview = styled(ProductHeaderName)`
    display: flex;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: inline-flex;
        width: calc(100% - 115px);
    }
`
export const CartItemEdit = styled.div`
    display: none;
    cursor: pointer;
    &:hover {
        color: #0a58ca;
    }
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: inline-flex;
    }
`
export const SkeletonRect = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e8e2e2;
    position: relative;
`
export const CartItemOverviewImage = styled(Link)`
    width: 8rem;
    height: 8rem;
    flex-shrink: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`
export const SkeletonImage = styled.div`
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 54 61' fill='%23e5e4e4'%3E%3Cpath d='M51.2 16.9H38.7C38.7 11.6 36 .6 27 .5 17.4.4 15.2 12.4 15.2 16.9H2.8c-3.4 0-2.7 3.4-2.7 3.4l2.4 33s-.1 7.3 6.3 7.5h36.5c6.2-.4 6.3-7.5 6.3-7.5l2.4-33c0-.1.5-3.5-2.8-3.4zM27.1 4.2c7.1.2 7.9 11.7 7.7 12.6H19.1c-.1-.9.4-12.4 8-12.6zm9.1 44.6c-1 1.7-2.7 3-5 3.7-1.2.4-2.4.5-3.6.5-3.2 0-6.5-1.1-9.3-3.3-.8-.6-1-1.5-.5-2.3.2-.4.7-.7 1.2-.8.4-.1.9 0 1.2.3 3.2 2.4 8.3 4 11.9 1.6 1.4-.9 2.1-2.7 1.6-4.3-.5-1.6-2.2-2.7-3.5-3.4-1-.6-2.1-1-3.3-1.4-.9-.3-1.9-.7-2.9-1.2-2.4-1.2-4-2.6-4.8-4.2-1.2-2.3-.6-5.4 1.4-7.5 3.6-3.8 10-3.2 14-.4.9.6.9 1.7.4 2.5s-1.4.9-2.2.4c-2-1.4-4.4-2-6.4-1.7-2 .3-4.7 2-4.4 4.6.2 1.5 2 2.6 3.3 3.3.8.4 1.5.7 2.3.9 4.3 1.3 7.2 3.3 8.6 5.7 1.2 2.1 1.2 4.9 0 7z'/%3E%3C/svg%3E");
    max-width: 100%;
    max-height: 100%;
    height: 30px;
    width: 30px;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
`

export const CartItemOverviewNameWrapper = styled.div`
    overflow: hidden;
    flex-grow: 1;
    padding: 0.5rem 2rem 0 1rem;
`

export const CartItemOverviewName = styled(Link)`
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 0.3125rem;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`

export const CartItemUnitPrice = styled(ProductHeaderUnitPrice)`
    span:nth-child(1) {
        font-weight: bold;
        margin-right: 10px;
        display: none;
    }

    span:nth-child(2) {
        color: rgba(0, 0, 0, 0.54);
        text-decoration: line-through;
        margin-right: 1rem;
    }
    @media screen and (max-width: 991px) and (min-width: 500px) {
        span:nth-child(1) {
            display: block;
        }
    }
`

export const CartItemQuantity = styled(ProductHeaderQuantity)`
    span:nth-child(1) {
        font-weight: bold;
        margin-right: 10px;
        display: none;
    }
    @media screen and (max-width: 991px) and (min-width: 500px) {
        span:nth-child(1) {
            display: block;
        }
    }
`

export const CartItemTotalPrice = styled(ProductHeaderUnitPrice)`
    span:nth-child(1) {
        font-weight: bold;
        margin-right: 10px;
        display: none;
    }

    span:nth-child(2) {
        text-align: right;
        color: #ee4d2d;
    }
    @media screen and (max-width: 991px) and (min-width: 500px) {
        span:nth-child(1) {
            display: block;
            margin-left: -87px;
        }
    }
`

export const CartItemAction = styled(ProductHeaderAction)``

export const CartItemActionButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    transition: color 0.1s ease;
    :hover {
        color: #ee4d2d;
    }
`

export const CartFooter = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 3px;
    font-size: 1.6rem;
    position: sticky;
    bottom: 0;
    z-index: 2;
    :before {
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.06));
        content: '';
        position: absolute;
        top: -1rem;
        left: 0;
        height: 1rem;
        width: 100%;
    }
    @media screen and (max-width: 991px) and (min-width: 500px) {
        font-size: 1.3rem;
    }
`

export const CartFooterCheckbox = styled(ProductHeaderCheckbox)``

export const CartFooterButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    margin: 0 1rem;
`

export const CartFooterSpaceBetween = styled.div`
    flex-grow: 1;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: none;
    }
`

export const CartFooterPrice = styled.div`
    margin-left: 1rem;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        margin-right: 3rem;
        margin-left: 2rem;
    }
`

export const CartFooterPriceTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    div {
        :first-child {
            color: #222;
        }
        :last-child {
            font-size: 2.4rem;
            margin-left: 5px;
            color: #ee4d2d;
        }
    }
`

export const CartFooterPriceBot = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    div {
        :first-child {
            font-size: 1.4rem;
        }
        :last-child {
            padding-left: 2.4rem;
            color: #ee4d2d;
        }
    }
`

export const CartFooterCheckout = styled(Button)`
    text-transform: capitalize;
    height: 4rem;
    font-size: 1.4rem;
    width: 21rem;
    font-weight: 300;
    margin: 0 2rem;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        width: 16rem;
    }
`
