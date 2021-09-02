import { ButtonLink } from 'assets/styles/utils'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PurchaseTabs = styled.div`
    display: flex;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    border-radius: 2px;
    background: #fff;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    margin-bottom: 1.2rem;
`
export const PurchaseTabItem = styled(NavLink)`
    display: block;
    font-size: 1.4rem;
    padding: 1.7rem 0;
    cursor: pointer;
    user-select: none;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    &.active {
        color: #ee4d2d;
        border-bottom: 2px solid #ee4d2d;
    }
`
export const PurchaseList = styled.div``
export const OrderCard = styled.div`
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    border-radius: 2px;
    background-color: #fff;
    padding: 2rem;
    margin-bottom: 1.5rem;
`
export const OrderCardContent = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
`
export const OrderCardDetail = styled.div`
    flex-grow: 1;
    display: flex;
    > img {
        width: 8rem;
        height: 8rem;
    }
`
export const SkeletonRect = styled.div`
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e8e2e2;
    position: relative;
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
export const OrderCardPrice = styled.div`
    width: 12rem;
    padding-left: 5px;
    text-align: right;
`
export const OrderContent = styled.div`
    margin-left: 1rem;
    flex-grow: 1;
`
export const OrderName = styled.div`
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
`
export const OrderQuantity = styled.div``
export const OrderCardButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const PurchaseButton = styled(ButtonLink)`
    height: 4rem;
`
export const TotalPrice = styled.div`
    display: flex;
    align-items: flex-end;
`
export const TotalPriceLabel = styled.div`
    margin-right: 1rem;
`
export const TotalPricePrice = styled.div`
    color: #ee4d2d;
    font-size: 3rem;
`
