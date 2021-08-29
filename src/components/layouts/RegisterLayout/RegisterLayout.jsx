import React from 'react'
import HeaderRegister from 'components/HeaderRegister/HeaderRegister'
import Footer from 'components/Footer/Footer'
import PropTypes from 'prop-types'

export default function RegisterLayout({ children, title }) {
    return (
        <div>
            <HeaderRegister title={title} />
            {children}
            <Footer />
        </div>
    )
}

RegisterLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
