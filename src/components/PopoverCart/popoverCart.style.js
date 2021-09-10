import styled from 'styled-components'

// Popover

export const Drawer = styled.div`
    width: 100%;
    top: 100%;
    left: 0;
    position: absolute;
    will-change: transform;
    opacity: 1;
    z-index: 400;
    transform: ${({ clickCart }) => (clickCart ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.5s ease;
    display: none;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: block;
    }
`

export const PopoverContent = styled.div`
    border-radius: 0.125rem;
    overflow: hidden;
    background-color: #fff;
`
