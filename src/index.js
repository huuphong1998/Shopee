import 'bootstrap/dist/css/bootstrap.min.css'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './app/store'
import './i18n/i18n'
import reportWebVitals from './reportWebVitals'
import { HelmetProvider } from 'react-helmet-async'

// Phương thức này chạy 1 lần duy nhất và thường được implelement 1 lần
// Nhiệm vụ là render React Element lên DOM thật
// ReactDOM.render control các container truyên vào
// Nếu có bất kỳ sự thay dổi nào trong container nó sẽ dùng thuật toán diffing so sánh
// và cập nhật những element cần thiết vào DOM

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <HelmetProvider>
                        <App />
                    </HelmetProvider>
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
