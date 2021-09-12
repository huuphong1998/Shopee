import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Drawer } from '../Popover/popover.style'

export const Navbar = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 1.5rem 0;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    width: 100%;
    margin-bottom: 0;
    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding-left: initial;
        justify-content: space-between;
    }
`
export const MenuHamburger = styled.div`
    display: none;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: block;
    }
`
export const Auth = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    position: relative;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: initial;
    }
`
export const WrapIcon = styled.div`
    display: none;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: flex;
    }
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

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: initial;
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

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 0px 4px;
        top: -7px;
        right: -10px;
    }
`
export const NavLink = styled(Link)`
    color: #fff;
    margin-left: 1rem;
    margin-right: 1rem;
    &:hover {
        color: hsla(0, 0%, 100%, 0.7);
    }
`

export const User = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;
    margin-left: 1rem;
    margin-right: 1rem;
    ${Drawer} {
        width: 15rem;
        top: 135%;
    }
    svg {
        width: 2rem;
        height: 2rem;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        margin-left: initial;
        cursor: initial;
    }
`

export const UserImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
`

export const UserName = styled.div`
    padding-left: 5px;
    max-width: 15rem;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const UserLink = styled(Link)`
    color: rgba(0, 0, 0, 0.8);
    padding: 1rem 0 1rem 1.5rem;
    display: block;
    width: 100%;
    text-align: left;
    &:hover {
        background-color: #fafafa;
        color: #00bfa5;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 1rem;
`

export const UserButton = styled.button`
    color: rgba(0, 0, 0, 0.8);
    padding: 1rem 0 1rem 1.5rem;
    display: block;
    background: transparent;
    border: 0;
    width: 100%;
    text-align: left;
    &:hover {
        background-color: #fafafa;
        color: #00bfa5;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 1rem;
    }
`

export const Overlay = styled.div`
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: #000;
    opacity: 0.7;
    visibility: visible;
    z-index: 99;
    transition: all 0.4s;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: block;
    }
`
