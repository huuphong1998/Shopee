import { LinearProgress } from '@material-ui/core'
import { unwrapResult } from '@reduxjs/toolkit'
import { Button } from 'assets/styles/utils'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import InputPassword from 'components/InputPassword/InputPassword'
import InputText from 'components/InputText/InputText'
import { path } from 'constants/path'
import { rules } from 'constants/rules'
import { register } from 'pages/Auth/userSlice'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import * as S from './register.style'

export default function Register() {
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
            password: '',
            confirmedPassword: ''
        }
    })

    const handleSubmitRegister = async data => {
        const body = {
            email: data.email,
            password: data.password
        }

        try {
            const res = await dispatch(register(body))
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

    return (
        <S.StyledRegister>
            <Helmet>
                <title>Đăng ký</title>
            </Helmet>
            <S.Banner>
                <S.FormWrapper>
                    {isSubmitting && <LinearProgress />}
                    <S.FormTitle>Đăng ký</S.FormTitle>
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
                                        placeholder="Mật khẩu"
                                        onChange={onChange}
                                        value={getValues('password')}
                                    />
                                )}
                            />
                            <ErrorMessage errors={errors} name="password" />
                        </S.FormControl>
                        <S.FormControl>
                            <Controller
                                name="confirmedPassword"
                                control={control}
                                rules={{
                                    ...rules.confirmedPassword,
                                    validate: {
                                        samePassword: v => v === getValues('password') || 'Mật khẩu không khớp'
                                    }
                                }}
                                render={({ field: { onChange } }) => (
                                    <InputPassword
                                        name="confirmedPassword"
                                        placeholder="Nhập lại mật khẩu"
                                        onChange={onChange}
                                        value={getValues('confirmedPassword')}
                                    />
                                )}
                            />
                            <ErrorMessage errors={errors} name="confirmedPassword" />
                        </S.FormControl>
                        <S.FormButton>
                            <Button type="submit" disabled={isSubmitting}>
                                Đăng ký
                            </Button>
                        </S.FormButton>
                    </S.Form>
                    <S.FormFooter>
                        <span>Bạn đã có tài khoản?</span>
                        <Link to={path.login} className="link">
                            Đăng nhập
                        </Link>
                    </S.FormFooter>
                </S.FormWrapper>
            </S.Banner>
        </S.StyledRegister>
    )
}
