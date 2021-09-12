import { Link } from 'react-router-dom'
import { Button, ButtonLink } from 'assets/styles/utils'
import styled from 'styled-components'

export const StyledHeader = styled.header`
    background: linear-gradient(-180deg, #f53d2d, #f63);
    margin-bottom: 3rem;
    width: 100%;
    min-width: max-content;

    @media screen and (max-width: 991px) and (min-width: 500px) {
        margin-bottom: initial;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        margin-bottom: initial;
    }
`
export const SearchWrap = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
`

export const Logo = styled(Link)`
    margin-right: 4rem;
    svg {
        width: 162px;
        height: 50px;
        fill: #fff;
    }
    @media screen and (max-width: 991px) and (min-width: 500px) {
        margin-right: 3rem;
        svg {
            width: 140px;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        margin-right: 0.5rem;
        svg {
            width: 108px;
        }
    }
`

export const StyledForm = styled.form`
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    padding: 4px;
    background: #fff;
    border-radius: 2px;
    height: 4rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        height: 3rem;
        flex-grow: initial;
    }
`

export const StyledInput = styled.input`
    flex-grow: 1;
    border: 0;
    padding-left: 1rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding-left: 0.5rem;
    }
`

export const StyledButton = styled(Button)`
    padding-left: 20px;
    padding-right: 20px;
    height: auto;
    svg {
        color: #fff;
        fill: currentColor;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`

export const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 5rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: none;
    }
`

export const CartContainer = styled.div`
    position: relative;
`

export const CartIcon = styled(Link)`
    padding: 10px;
    display: inline-block;
    position: relative;
    svg {
        color: #fff;
        stroke: #fff;
        fill: currentColor;
        width: 26px;
        height: 26px;
    }
`

export const CartNumberBadge = styled.div`
    position: absolute;
    border-radius: 4rem;
    min-width: 11px;
    padding: 0px 5px;
    text-align: center;
    border: 2px solid #ee4d2d;
    color: #ee4d2d;
    background-color: #fff;
    line-height: 1;
    top: 2px;
    right: 2px;
`

export const PopoverContent = styled.div`
    box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 / 20%);
    border-radius: 0.125rem;
    overflow: hidden;
    background-color: #fff;
    width: 40rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        box-shadow: initial;
        width: initial;
    }
`

export const PopoverTitle = styled.div`
    padding: 1.5rem 0 2rem 1rem;
    text-transform: capitalize;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: flex;
        justify-content: space-between;
    }
`

export const AddProduct = styled.div`
    color: rgba(0, 0, 0, 0.26);
`
export const Close = styled.div`
    display: none;
    padding-right: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        color: blue;
        transition: all 0.3s ease;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: block;
    }
`

export const MiniProductCart = styled.div`
    display: flex;
    padding: 1rem;
`

export const MiniProductCartImg = styled.img`
    flex-shrink: 1;
    width: 4rem;
    height: 4rem;
    border: 1px solid rgba(0, 0, 0, 0.09);
`

export const MiniProductCartTitle = styled.div`
    flex-grow: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 1rem;
`

export const MiniProductCartPrice = styled.div`
    margin-left: 4rem;
    flex-shrink: 1;
    color: #ee4d2d;
`

export const PopoverFooter = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
`

export const MoreProduct = styled.div`
    flex-grow: 1;
    text-transform: capitalize;
`

export const ButtonShowCart = styled(ButtonLink)`
    height: 3.5rem;
    padding: 1px 15px;
    text-transform: capitalize;
    flex-shrink: 0;
`

export const Overlay = styled.div`
    display: block;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    background: #000;
    opacity: 0.8;
    visibility: visible;
    z-index: 99;
    transition: all 0.4s;
`
