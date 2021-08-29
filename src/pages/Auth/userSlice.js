import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userApi from 'api/userApi'
import StorageKeys from 'constants/localStorage'

export const register = createAsyncThunk('user/register', async (data, thunkAPI) => {
    try {
        const res = await userApi.register(data)

        return res
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const login = createAsyncThunk('user/login', async (data, thunkAPI) => {
    try {
        const res = await userApi.login(data)

        return res
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const logout = createAsyncThunk('user/logout', async (data, thunkAPI) => {
    try {
        const res = await userApi.logout()

        return res
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const updateMe = createAsyncThunk('user/updateMe', async (data, thunkAPI) => {
    try {
        const res = await userApi.updateMe(data)

        return res
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const handleAuthFulfilled = (state, action) => {
    const { user, access_token } = action.payload.data
    state.profile = user
    localStorage.setItem(StorageKeys.USER, JSON.stringify(state.profile))
    localStorage.setItem(StorageKeys.TOKEN, access_token)
}

const handleUnauth = state => {
    localStorage.removeItem(StorageKeys.USER)
    localStorage.removeItem(StorageKeys.TOKEN)

    state.profile = {}
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {}
    },
    reducers: {
        unauthorize: handleUnauth
    },
    extraReducers: {
        [register.fulfilled]: handleAuthFulfilled,
        [login.fulfilled]: handleAuthFulfilled,
        [logout.fulfilled]: handleUnauth,
        [updateMe.fulfilled]: (state, action) => {
            state.profile = action.payload.data
            localStorage.setItem(StorageKeys.USER, JSON.stringify(state.profile))
        }
    }
})

const { reducer: userReducer, actions } = userSlice
export const { unauthorize } = actions
export default userReducer
