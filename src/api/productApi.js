import axiosClient from './axiosClient'

const url = 'products'

const productApi = {
    getProducts(config) {
        return axiosClient.get(url, config)
    },

    getProductDetail(id) {
        return axiosClient.get(`${url}/${id}`)
    }
}

export default productApi
