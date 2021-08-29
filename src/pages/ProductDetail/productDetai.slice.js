import { createAsyncThunk } from '@reduxjs/toolkit'
import productApi from 'api/productApi'
import purchaseApi from 'api/purchaseApi'

export const getProductDetail = createAsyncThunk('productDetail/getProductDetail', async (params, thunkAPI) => {
    try {
        const data = await productApi.getProductDetail(params)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const addToCart = createAsyncThunk('productDetail/addToCart', async (params, thunkAPI) => {
    try {
        const data = await purchaseApi.addToCart(params)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
