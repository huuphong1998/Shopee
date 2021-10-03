import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`

export const ScrollToTop = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 4rem;
    animation: ${fadeIn} 0.2s ease-in-out 0.1s both;
    cursor: pointer;
    svg {
        width: 30px;
        height: 30px;
    }

    @media screen and (max-width: 991px) and (min-width: 500px) {
        bottom: 1rem;
        right: 2rem;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        bottom: 1rem;
        right: 1rem;
        svg {
            width: 30px;
            height: 30px;
        }
    }
`
