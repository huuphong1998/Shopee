import 'assets/styles/global.scss'
import Authorization from 'components/Authorization/Authorization'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import 'normalize.css'
import React from 'react'
import Routes from './Routes'

export default function App() {
    return (
        <div className="App">
            <Routes />
            <Authorization />
            <ScrollToTop />
        </div>
    )
}
