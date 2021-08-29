import { createAsyncThunk } from '@reduxjs/toolkit'
import purchaseApi from 'api/purchaseApi'

export const getPurchases = createAsyncThunk('user/getPurchases', async (data, thunkAPI) => {
    try {
        const res = await purchaseApi.getPurchases(data)

        return res
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
