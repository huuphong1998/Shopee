import CartLayout from 'components/layouts/CartLayout/CartLayout'
import Loading from 'components/Loading/Loading'
import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout/MainLayout'
import RegisterLayout from './components/layouts/RegisterLayout/RegisterLayout'
import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnAuthenticatedGuard from './guards/UnAuthenticatedGuard'
const Home = lazy(() => import('./pages/Home/Home'))
const ProductDetail = lazy(() => import('pages/ProductDetail/ProductDetail'))
const User = lazy(() => import('./pages/User/User'))
const Cart = lazy(() => import('pages/Cart/Cart'))
const Register = lazy(() => import('./pages/Auth/components/Register/Register'))
const Login = lazy(() => import('./pages/Auth/components/Login/Login'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

export default function Routes() {
    return (
        <Switch>
            <Route path={path.home} exact>
                <Suspense fallback={<Loading />}>
                    <MainLayout>
                        <Home />
                    </MainLayout>
                </Suspense>
            </Route>
            <Route path={path.productDetail} exact>
                <MainLayout>
                    <Suspense fallback={<Loading />}>
                        <ProductDetail />
                    </Suspense>
                </MainLayout>
            </Route>
            <Route path={path.login}>
                <UnAuthenticatedGuard>
                    <Suspense fallback={<Loading />}>
                        <RegisterLayout title="Đăng nhập">
                            <Login />
                        </RegisterLayout>
                    </Suspense>
                </UnAuthenticatedGuard>
            </Route>
            <Route path={path.register}>
                <UnAuthenticatedGuard>
                    <Suspense fallback={<Loading />}>
                        <RegisterLayout title="Đăng ký">
                            <Register />
                        </RegisterLayout>
                    </Suspense>
                </UnAuthenticatedGuard>
            </Route>
            <Route path={path.user}>
                <AuthenticatedGuard>
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <User />
                        </MainLayout>
                    </Suspense>
                </AuthenticatedGuard>
            </Route>
            <Route path={path.cart}>
                <AuthenticatedGuard>
                    <Suspense fallback={<Loading />}>
                        <CartLayout>
                            <Cart />
                        </CartLayout>
                    </Suspense>
                </AuthenticatedGuard>
            </Route>
            <Route path={path.notFound}>
                <Suspense fallback={<Loading />}>
                    <NotFound />
                </Suspense>
            </Route>
        </Switch>
    )
}
