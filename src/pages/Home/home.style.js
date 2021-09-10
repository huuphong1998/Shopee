import styled from 'styled-components'

export const Home = styled.div`
    position: relative;
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Main = styled.div`
    flex: 1;
`

export const Side = styled.div`
    display: flex;
    flex: 0 0 19rem;
    margin-right: 2rem;

    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: none;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: none;
    }
`
