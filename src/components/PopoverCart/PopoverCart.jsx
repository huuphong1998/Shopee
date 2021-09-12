import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import * as S from './popoverCart.style'

export default function PopoverCart({ children, clickCart }) {
    return (
        <Fragment>
            <S.Drawer clickCart={clickCart}>
                <S.PopoverContent>{children}</S.PopoverContent>
            </S.Drawer>
        </Fragment>
    )
}

PopoverCart.propTypes = {
    clickCart: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
