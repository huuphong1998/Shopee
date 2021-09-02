import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import CartLayout from 'components/layouts/CartLayout/CartLayout'
import Loading from 'components/Loading/Loading'
import React, { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()

    return (
        <Switch>
            <Route path={path.home} exact>
                <Suspense fallback={<Loading />}>
                    <MainLayout>
                        <ErrorBoundary>
                            <Home />
                        </ErrorBoundary>
                    </MainLayout>
                </Suspense>
            </Route>
            <Route path={path.productDetail} exact>
                <Suspense fallback={<Loading />}>
                    <MainLayout>
                        <ErrorBoundary>
                            <ProductDetail />
                        </ErrorBoundary>
                    </MainLayout>
                </Suspense>
            </Route>
            <Route path={path.login}>
                <UnAuthenticatedGuard>
                    <Suspense fallback={<Loading />}>
                        <RegisterLayout title={t('routes.titleLogin')}>
                            <ErrorBoundary>
                                <Login />
                            </ErrorBoundary>
                        </RegisterLayout>
                    </Suspense>
                </UnAuthenticatedGuard>
            </Route>
            <Route path={path.register}>
                <UnAuthenticatedGuard>
                    <Suspense fallback={<Loading />}>
                        <RegisterLayout title={t('routes.titleRegiter')}>
                            <ErrorBoundary>
                                <Register />
                            </ErrorBoundary>
                        </RegisterLayout>
                    </Suspense>
                </UnAuthenticatedGuard>
            </Route>
            <Route path={path.user}>
                <AuthenticatedGuard>
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <ErrorBoundary>
                                <User />
                            </ErrorBoundary>
                        </MainLayout>
                    </Suspense>
                </AuthenticatedGuard>
            </Route>
            <Route path={path.cart}>
                <AuthenticatedGuard>
                    <Suspense fallback={<Loading />}>
                        <CartLayout>
                            <ErrorBoundary>
                                <Cart />
                            </ErrorBoundary>
                        </CartLayout>
                    </Suspense>
                </AuthenticatedGuard>
            </Route>
            <Route path={path.notFound}>
                <Suspense fallback={<Loading />}>
                    <ErrorBoundary>
                        <NotFound />
                    </ErrorBoundary>
                </Suspense>
            </Route>
        </Switch>
    )
}
