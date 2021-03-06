import PropTypes from 'prop-types'
import React from 'react'
import * as S from './menuHamburger.style'

MenuHamburger.propTypes = {
    clicked: PropTypes.bool,
    handleClick: PropTypes.func
}

export default function MenuHamburger({ clicked, handleClick }) {
    return (
        <S.BtnMenu clicked={clicked} onClick={handleClick}>
            <span></span>
        </S.BtnMenu>
    )
}
