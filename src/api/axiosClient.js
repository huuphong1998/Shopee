// import axios from 'axios'
// import StorageKeys from 'constants/localStorage'

// const axiosClient = axios.create({
//     baseURL: process.env.REACT_APP_API,
//     timeout: 10000,
//     headers: {
//         'Content-Type': 'application/json'
//     }
//     // paramsSerializer: params => queryString.stringify(params)
// })

// axiosClient.interceptors.request.use(
//     async config => {
//         const token = localStorage.getItem(StorageKeys.TOKEN)
//         if (token) {
//             config.headers.authorization = token
//         }

//         return config
//     },
//     error => {
//         return Promise.reject(error.response)
//     }
// )

// axiosClient.interceptors.response.use(
//     response => {
//         const result = { ...response.data, status: response.status }
//         return result
//     },

//     ({ response }) => {
//         const result = { ...response.data, status: response.status }
//         return Promise.reject(result)
//     }
// )

// export default axiosClient

import axios from 'axios'
import StorageKeys from 'constants/localStorage'

class Http {
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_API,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.instance.interceptors.response.use(
            response => {
                const result = { ...response.data, status: response.status }
                return result
            },
            ({ response }) => {
                const result = { ...response.data, status: response.status }
                return Promise.reject(result)
            }
        )
        this.instance.interceptors.request.use(
            config => {
                const token = localStorage.getItem(StorageKeys.TOKEN)
                if (token) {
                    config.headers.authorization = token
                }

                return config
            },
            error => {
                return Promise.reject(error.response)
            }
        )
    }
    get(url, config = null) {
        return this.instance.get(url, config)
    }
    post(url, data, config = null) {
        return this.instance.post(url, data, config)
    }
    put(url, data, config = null) {
        return this.instance.put(url, data, config)
    }
    delete(url, data, config = null) {
        return this.instance.delete(url, {
            data,
            ...config
        })
    }
}

const axiosClient = new Http()
export default axiosClient
