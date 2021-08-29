import { path } from 'constants/path'
import { useAuthenticated } from 'hooks/useAuthenticated'
import { unauthorize } from 'pages/Auth/userSlice'
import { getCartPurchases } from 'pages/Cart/cart.slice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Authorization() {
    const status = useSelector(state => state.app.status)
    const dispatch = useDispatch()
    const history = useHistory()
    const authenticated = useAuthenticated()

    useEffect(() => {
        if (status === 401) {
            dispatch(unauthorize())
            history.push(path.login)
        }
    }, [dispatch, history, status])

    useEffect(() => {
        if (authenticated) {
            dispatch(getCartPurchases())
        }
    }, [dispatch, authenticated])

    return null
}
