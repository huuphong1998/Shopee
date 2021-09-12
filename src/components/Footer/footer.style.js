import styled from 'styled-components'

export const Footer = styled.footer`
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.65);
    padding: 4.2rem 0 3.7rem;
    background: #f5f5f5;
    width: 100%;
    min-width: max-content;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        min-width: initial;
        padding: 2rem 0 3.7rem;
    }
`

export const Footer1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: initial;
        margin-bottom: 2rem;
        text-align: center;
    }
`

export const Language = styled.div`
    display: flex;
    span {
        padding: 0 0.3125rem;
        cursor: pointer;
        &:not(:last-child) {
            border-right: 1px solid rgba(0, 0, 0, 0.2);
        }
        &.active {
            color: #ee4d2d;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 10px 0;
        justify-content: center;
    }
`

export const Footer2 = styled.div`
    font-size: 1.2rem;
    text-align: center;
    div {
        line-height: 2;
        :first-child {
            margin-bottom: 1.5rem;
        }
    }
`
