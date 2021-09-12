import styled from 'styled-components'

export const BtnMenu = styled.div`
    display: none;
    width: 40px;
    height: 22px;
    position: relative;
    margin-left: 20px;
    z-index: 300;
    cursor: pointer;
    &:before,
    &:after,
    span {
        content: '';
        width: 100%;
        height: 2px;
        display: block;
        background: #ee4d2d;
        transform: rotate(0deg) translateY(0px);
        transition: transform 0.3s;
    }
    span {
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
    }
    &:after {
        position: absolute;
        bottom: 0;
    }
    &:before {
        ${({ clicked }) => {
            if (clicked) {
                return `
                    transform: rotate(45deg) translate(6px, 8px);
                    transition: transform 0.3s;
                `
            }
        }}
    }
    span {
        ${({ clicked }) => {
            if (clicked) {
                return `
                    opacity: 0;
                    transition: 0.3s;
                `
            }
        }}
    }
    &:after {
        ${({ clicked }) => {
            if (clicked) {
                return `
                    transform: rotate(-45deg) translate(6px, -8px);
                    transition: transform 0.3s;
                `
            }
        }}
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: block;
    }
`
