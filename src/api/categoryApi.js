import axiosClient from './axiosClient'

const url = 'categories'

const categoryApi = {
    getCategories() {
        return axiosClient.get(url)
    }
}

export default categoryApi
