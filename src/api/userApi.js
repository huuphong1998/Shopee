import axiosClient from './axiosClient'

const url = 'user'

const userApi = {
    register(data) {
        return axiosClient.post('register', data)
    },

    login(data) {
        return axiosClient.post('login', data)
    },

    logout() {
        return axiosClient.post('logout')
    },
    updateMe(data) {
        return axiosClient.put(`${url}`, data)
    }
}

export default userApi
