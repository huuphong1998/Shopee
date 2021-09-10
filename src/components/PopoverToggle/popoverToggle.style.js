import styled from 'styled-components'

// Popover

export const Drawer = styled.div`
    top: 0;
    position: absolute;
    will-change: transform;
    opacity: 1;
    z-index: 400;
    right: ${({ clicked }) => (clicked ? '0' : '-100%')};
    transition: right 0.5s ease;
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
