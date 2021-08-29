import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import purchaseApi from 'api/purchaseApi'
import { logout } from 'pages/Auth/userSlice'

export const getCartPurchases = createAsyncThunk('cart/getCartPurchases', async (params, thunkAPI) => {
    try {
        const res = await purchaseApi.getCartPurchases()
        return res
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const updatePurchase = createAsyncThunk('cart/updatePurchase', async (params, thunkAPI) => {
    try {
        const res = await purchaseApi.updatePurchase(params)
        return res
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const deletePurchases = createAsyncThunk('cart/deletePurchases', async (params, thunkAPI) => {
    try {
        const res = await purchaseApi.deletePurchases(params)
        return res
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const buyPurchases = createAsyncThunk('cart/buyPurchases', async (params, thunkAPI) => {
    try {
        const res = await purchaseApi.buyPurchases(params)
        return res
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        purchases: []
    },
    reducers: {},
    extraReducers: {
        [getCartPurchases.fulfilled]: (state, action) => {
            state.purchases = action.payload.data
        },
        [logout.fulfilled]: state => {
            state.purchases = []
        }
    }
})

const { reducer: cartReducer } = cartSlice
export default cartReducer
