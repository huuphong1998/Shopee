import styled from 'styled-components'

export const Overlay = styled.div`
    display: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 2000px;
    position: absolute;
    background: #000;
    opacity: 0.8;
    visibility: visible;
    z-index: 99;
    transition: all 0.4s;

    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: block;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: block;
    }
`
