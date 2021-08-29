import { createAsyncThunk } from '@reduxjs/toolkit'
import categoryApi from 'api/categoryApi'
import productApi from 'api/productApi'

export const getCategories = createAsyncThunk('home/getCategories', async (payload, thunkAPI) => {
    try {
        const category = await categoryApi.getCategories()

        return category
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getProducts = createAsyncThunk('home/getProduct', async (params, thunkAPI) => {
    try {
        const productList = await productApi.getProducts(params)

        return productList
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
