import { unwrapResult } from '@reduxjs/toolkit'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import InputPassword from 'components/InputPassword/InputPassword'
import { rules } from 'constants/rules'
import { useSnackbar } from 'notistack'
import { updateMe } from 'pages/Auth/userSlice'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as S from './password.style'
import { PasswordContent } from './password.style'

export default function Password() {
    const { enqueueSnackbar } = useSnackbar()

    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
        setError,
        reset
    } = useForm({
        defaultValues: {
            password: '',
            new_password: '',
            confirmed_new_password: ''
        }
    })
    const dispatch = useDispatch()

    const update = async data => {
        const body = {
            password: data.password,
            new_password: data.new_password
        }
        try {
            await dispatch(updateMe(body)).then(unwrapResult)
            reset()
            enqueueSnackbar('Đôi mật khẩu thành công', { variant: 'success' })
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
        <S.Profile>
            <Helmet>
                <title>Đổi mật khẩu</title>
            </Helmet>
            <S.ProfileHeader>
                <S.ProfileHeaderWrap>
                    <S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
                    <S.ProfileHeaderSubtitle>
                        Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
                    </S.ProfileHeaderSubtitle>
                </S.ProfileHeaderWrap>
                <PasswordContent onSubmit={handleSubmit(update)}>
                    <S.InputLabel>
                        <S.InputLabelLabel>Mật khẩu hiện tại</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <Controller
                                name="password"
                                control={control}
                                rules={rules.password}
                                render={({ field: { onChange } }) => (
                                    <InputPassword name="password" onChange={onChange} value={getValues('password')} />
                                )}
                            />
                            <ErrorMessage errors={errors} name="password" />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.InputLabel>
                        <S.InputLabelLabel>Mật khẩu mới</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <Controller
                                name="new_password"
                                control={control}
                                rules={rules.password}
                                render={({ field: { onChange } }) => (
                                    <InputPassword
                                        name="new_password"
                                        onChange={onChange}
                                        value={getValues('new_password')}
                                    />
                                )}
                            />
                            <ErrorMessage errors={errors} name="new_password" />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.InputLabel>
                        <S.InputLabelLabel>Xác nhận mật khẩu</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <Controller
                                name="confirmed_new_password"
                                control={control}
                                rules={{
                                    ...rules.password,
                                    validate: {
                                        samePssaword: v =>
                                            v === getValues('new_password') || 'Mật khẩu nhập lại không khớp'
                                    }
                                }}
                                render={({ field: { onChange } }) => (
                                    <InputPassword
                                        name="confirmed_new_password"
                                        onChange={onChange}
                                        value={getValues('confirmed_new_password')}
                                    />
                                )}
                            />
                            <ErrorMessage errors={errors} name="confirmed_new_password" />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.Submit>
                        <S.ButtonSubmit type="submit">xác nhận</S.ButtonSubmit>
                    </S.Submit>
                </PasswordContent>
            </S.ProfileHeader>
        </S.Profile>
    )
}
