import styled from 'styled-components'

export const SortBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: rgba(0, 0, 0, 0.03);
    padding: 1.25rem 1.5rem;
    border-radius: 2px;
    margin-bottom: 1.5rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 1.25rem 1.25rem;
    }
`

export const SortBarLabel = styled.span`
    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: none;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: none;
    }
`

export const SortByOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-grow: 1;
`

export const SortByOptionsOption = styled.div`
    flex: 0 0 auto;
    cursor: pointer;
    background: #fff;
    margin-left: 1rem;
    height: 3.25rem;
    padding: 0 1.5rem;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    &.active {
        color: #fff;
        background: #ee4d2d;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        height: 5.25rem;
        width: 57px;
        text-align: center;
        padding: 0 0.5rem;
    }
`

export const SortByPrice = styled.select`
    flex: 0 0 auto;
    margin-left: 1rem;
    height: 3.25rem;
    border: 0;
    padding: 0 1.5rem;
    &.active {
        color: #ee4d2d;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 0 0.5rem;
        width: 60px;
        height: 5.25rem;
    }
`

export const MiniPageController = styled.div`
    display: flex;
    align-items: center;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: none;
    }
`

export const MiniPageControllerState = styled.div`
    display: flex;
`

export const MiniPageControllerCurrentState = styled.div`
    color: #ee4d2d;
`

export const MiniPageControllerTotalState = styled.div``

export const ButtonController = styled.button`
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    width: 3.6rem;
    height: 3.4rem;
    border-radius: 2px;
    border: 0;
    background: ${({ disabled }) => (disabled ? '#f9f9f9' : '#fff')};
    svg {
        width: 0.625rem;
        height: 0.625rem;
        fill: ${({ disabled }) => (disabled ? '#ccc' : '#555')};
        margin-top: 0.125rem;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 3rem;
        height: 3rem;
    }
`

export const ButtonControllerPrev = styled(ButtonController)`
    margin-left: 2rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid #f2f2f2;
    @media screen and (max-width: 991px) and (min-width: 500px) {
        margin-left: 1rem;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        margin-left: 1rem;
    }
`

export const ButtonControllerNext = styled(ButtonController)`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`

export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
`
