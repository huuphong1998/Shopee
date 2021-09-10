import React, { Fragment } from 'react'
import * as S from './popoverToggle.style'
import PropTypes from 'prop-types'

export default function PopoverToggle({ children, clicked }) {
    return (
        <Fragment>
            <S.Drawer clicked={clicked}>
                <S.PopoverContent>{children}</S.PopoverContent>
            </S.Drawer>
        </Fragment>
    )
}

PopoverToggle.propTypes = {
    clicked: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
