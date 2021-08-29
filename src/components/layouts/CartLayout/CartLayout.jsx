import Footer from 'components/Footer/Footer'
import HeaderCart from 'components/HeaderCart/HeaderCart'
import PropTypes from 'prop-types'
import React from 'react'

export default function CartLayout({ children }) {
    return (
        <div>
            <HeaderCart />
            {children}
            <Footer />
        </div>
    )
}

CartLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
