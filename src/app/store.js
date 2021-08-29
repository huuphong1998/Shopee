import { configureStore } from '@reduxjs/toolkit'
import appReducer from 'app.slice'
import userReducer from 'pages/Auth/userSlice'
import cartReducer from 'pages/Cart/cart.slice'

const rootReducer = {
    user: userReducer,
    app: appReducer,
    cart: cartReducer
}

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware => [...getDefaultMiddleware({ serializableCheck: false })]
})

export default store
