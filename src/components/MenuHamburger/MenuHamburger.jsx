import React from 'react'
import * as S from './menuHamburger.style'

export default function MenuHamburger({ clicked, handleClick }) {
    return (
        <S.BtnMenu clicked={clicked} onClick={handleClick}>
            <span></span>
        </S.BtnMenu>
    )
}
