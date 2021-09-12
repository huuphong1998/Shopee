import PropTypes from 'prop-types'
import React from 'react'
import * as S from './menuHamburgerRed.style'

MenuHamburgerRed.propTypes = {
    clicked: PropTypes.bool,
    handleClick: PropTypes.func
}

export default function MenuHamburgerRed({ clicked, handleClick }) {
    return (
        <S.BtnMenu clicked={clicked} onClick={handleClick}>
            <span></span>
        </S.BtnMenu>
    )
}
