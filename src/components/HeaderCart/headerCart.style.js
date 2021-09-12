import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'assets/styles/utils'

export const Header = styled.header`
    margin-bottom: 3rem;
    width: 100%;
    min-width: max-content;
    background: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);

    @media screen and (max-width: 991px) and (min-width: 500px) {
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        position: relative;
        margin-bottom: 2rem;
    }
`

export const Navbar = styled.div`
    background: linear-gradient(-180deg, #f53d2d, #f63);
    color: #fff;
`

export const SearchWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        height: 6.2rem;
    }
`

export const Logo = styled(Link)`
    padding-left: 1.8rem;
    flex-shrink: 1;
    display: flex;
    align-items: center;
    svg {
        width: 13rem;
        height: auto;
        cursor: pointer;
        fill: #ee4d2d;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding-left: initial;
        svg {
            width: 12rem;
        }
    }
`

export const LogoPageName = styled.div`
    margin-left: 1.5rem;
    margin-top: 1rem;
    border-left: 1px solid #ee4d2d;
    color: #ee4d2d;
    font-size: 2rem;
    line-height: 1.5;
    padding-left: 1.5rem;
    text-transform: capitalize;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: none;
    }
`

export const Form = styled.form`
    flex: 0 0 50%;
    display: flex;
    align-items: stretch;
    border: 2px solid #ee4d2d;
    height: 3.6rem;
    border-radius: 2px;
    background: #fff;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex: initial;
        height: 3rem;
    }
`

export const Input = styled.input`
    flex-grow: 1;
    border: 0;
    padding: 0 1rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 0 0.5rem;
        max-width: 180px;
    }
`

export const ButtonSearch = styled(Button)`
    height: unset;
    width: 8rem;
    border-radius: 0;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 4rem;
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
