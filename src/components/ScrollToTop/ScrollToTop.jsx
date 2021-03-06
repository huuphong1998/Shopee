import React, { useEffect, useState } from 'react'
import * as S from './scrollToTop.style'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', function () {
            toggleVisibility()
        })
    }, [])

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {visible && (
                <S.ScrollToTop onClick={scrollToTop}>
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 490.667 490.667"
                        style={{ enableBackground: 'new 0 0 490.667 490.667' }}
                        xmlSpace="preserve"
                    >
                        <path
                            style={{ fill: '#F44336' }}
                            d="M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333
	s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"
                        />
                        <path
                            style={{ fill: '#FAFAFA' }}
                            d="M254.485,111.851c-3.429-5.049-10.302-6.361-15.35-2.932c-1.154,0.784-2.149,1.779-2.932,2.932
	l-128,213.333c-3.028,5.053-1.386,11.604,3.667,14.632c1.651,0.989,3.539,1.513,5.464,1.517h256
	c5.891,0.001,10.668-4.773,10.669-10.664c0-1.932-0.524-3.828-1.517-5.485L254.485,111.851z"
                        />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                    </svg>
                </S.ScrollToTop>
            )}
        </>
    )
}
