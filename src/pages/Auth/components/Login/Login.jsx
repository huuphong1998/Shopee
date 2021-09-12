import { LinearProgress, makeStyles } from '@material-ui/core'
import { unwrapResult } from '@reduxjs/toolkit'
import { Button } from 'assets/styles/utils'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import InputPassword from 'components/InputPassword/InputPassword'
import InputText from 'components/InputText/InputText'
import { path } from 'constants/path'
import { rules } from 'constants/rules'
import { login } from 'pages/Auth/userSlice'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import * as S from '../Register/register.style'

const useStyles = makeStyles({
    linearProgress: {
        width: '300px',
        left: '-20px',
        borderRadius: '5px'
    }
})

export default function Login() {
    const classes = useStyles()

    const dispatch = useDispatch()
    const history = useHistory()

    const {
        control,
        getValues,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmitRegister = async data => {
        const body = {
            email: data.email,
            password: data.password
        }

        try {
            const res = await dispatch(login(body))
            unwrapResult(res)

            history.push(path.home)
        } catch (error) {
            if (error.status === 422) {
                for (const key in error.data) {
                    setError(key, {
                        type: 'server',
                        message: error.data[key]
                    })
                }
            }
        }
    }
    const { t } = useTranslation()

    return (
        <S.StyledRegister>
            <Helmet>
                <title>{t('routes.titleLogin')}</title>
            </Helmet>
            <S.Banner>
                <S.FormWrapper>
                    {isSubmitting && <LinearProgress className={classes.linearProgress} />}
                    <S.FormTitle>{t('login.login')}</S.FormTitle>
                    <S.Form onSubmit={handleSubmit(handleSubmitRegister)} noValidate>
                        <S.FormControl>
                            <Controller
                                name="email"
                                control={control}
                                rules={rules.email}
                                render={({ field: { onChange } }) => (
                                    <InputText
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={onChange}
                                        value={getValues('email')}
                                    />
                                )}
                            />
                            <ErrorMessage errors={errors} name="email" />
                        </S.FormControl>
                        <S.FormControl>
                            <Controller
                                name="password"
                                control={control}
                                rules={rules.password}
                                render={({ field: { onChange } }) => (
                                    <InputPassword
                                        name="password"
                                        placeholder={t('login.password')}
                                        onChange={onChange}
                                        value={getValues('password')}
                                    />
                                )}
                            />
                            <ErrorMessage errors={errors} name="password" />
                        </S.FormControl>

                        <S.FormButton>
                            <Button type="submit" disabled={isSubmitting}>
                                {t('login.loginSubmit')}
                            </Button>
                        </S.FormButton>
                    </S.Form>
                    <S.FormFooter>
                        <span>{t('login.newToMyShop')}</span>
                        <Link to={path.register} className="link">
                            {t('login.register')}
                        </Link>
                    </S.FormFooter>
                </S.FormWrapper>
            </S.Banner>
        </S.StyledRegister>
    )
}
