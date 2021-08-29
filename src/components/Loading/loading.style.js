import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    height: 100%;
    background: #f5f5f5;
    font-size: 16px;
    overflow: auto;
`

export const ContainerLoading = styled.div`
    position: relative;
    height: 100vh;
    background: #f5f5f5;
    padding: 2rem 5%;
    box-shadow: 0 0.4rem 0.8rem -0.1rem rgba(0, 32, 128, 0.1), 0 0 0 1px #f0f2f7;
    border-radius: 0.25rem;
    &:before {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 5px;
        content: attr(data-title);
        font-size: 0.75rem;
        color: white;
        background-color: rgb(255, 25, 100);
        border-radius: 0.25rem 0 0.25rem 0;
    }
`

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2rem 0;
    margin: 0 -5%;
    overflow: hidden;
    align-items: center;
    height: 100%;
`
const dotPulse = keyframes`
    0% {
    box-shadow: 9999px 0 0 -5px #ee4d2d;
    }
    30% {
        box-shadow: 9999px 0 0 2px #ee4d2d;
    }
    60%,
    100% {
        box-shadow: 9999px 0 0 -5px #ee4d2d;
    }
`

const dotPulseBefore = keyframes`
     0% {
    box-shadow: 9984px 0 0 -5px #ee4d2d;
    }
    30% {
        box-shadow: 9984px 0 0 2px #ee4d2d;
    }
    60%,
    100% {
        box-shadow: 9984px 0 0 -5px #ee4d2d;
    }
`

const dotPulseAfter = keyframes`
    0% {
    box-shadow: 10014px 0 0 -5px #ee4d2d;
    }
    30% {
        box-shadow: 10014px 0 0 2px #ee4d2d;
    }
    60%,
    100% {
        box-shadow: 10014px 0 0 -5px #ee4d2d;
    }
`

export const LoadingDots = styled.div`
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ee4d2d;
    color: #ee4d2d;
    box-shadow: 9999px 0 0 -5px #ee4d2d;
    animation: ${dotPulse} 1.5s infinite linear;
    animation-delay: 0.25s;
    &:before,
    &:after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #ee4d2d;
        color: #ee4d2d;
    }
    &:before {
        box-shadow: 9984px 0 0 -5px #ee4d2d;
        animation: ${dotPulseBefore} 1.5s infinite linear;
        animation-delay: 0s;
    }
    &:after {
        box-shadow: 10014px 0 0 -5px #ee4d2d;
        animation: ${dotPulseAfter} 1.5s infinite linear;
        animation-delay: 0.5s;
    }
`
