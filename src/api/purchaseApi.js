import { purchaseStatus } from 'constants/status'
import axiosClient from './axiosClient'

const url = 'purchases'

const purchaseApi = {
    addToCart(data) {
        return axiosClient.post(`${url}/add-to-cart`, data)
    },
    getCartPurchases() {
        return axiosClient.get(url, {
            params: {
                status: purchaseStatus.inCart
            }
        })
    },
    getPurchases(status) {
        return axiosClient.get(url, {
            params: {
                status
            }
        })
    },
    updatePurchase(data) {
        return axiosClient.put(`${url}/update-purchase`, data)
    },
    deletePurchases(data) {
        return axiosClient.delete(`${url}`, data)
    },
    buyPurchases(data) {
        return axiosClient.post(`${url}/buy-products`, data)
    }
}

export default purchaseApi
