import { unwrapResult } from '@reduxjs/toolkit'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import InputPassword from 'components/InputPassword/InputPassword'
import MenuHamburger from 'components/MenuHamburger/MenuHamburger'
import { rules } from 'constants/rules'
import { useSnackbar } from 'notistack'
import { updateMe } from 'pages/Auth/userSlice'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import * as S from './password.style'
import { PasswordContent } from './password.style'

Password.propTypes = {
    clicked: PropTypes.bool,
    handleClick: PropTypes.func
}

export default function Password({ clicked, handleClick }) {
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

    const { t } = useTranslation()

    return (
        <S.Profile>
            <Helmet>
                <title>{t('password.title')}</title>
            </Helmet>
            <S.ProfileHeader>
                <S.ProfileHeaderWrap>
                    <S.ProfileHeaderItem1>
                        <S.ProfileHeaderTitle>{t('password.title')}</S.ProfileHeaderTitle>
                        <S.ProfileHeaderSubtitle>{t('password.security')}</S.ProfileHeaderSubtitle>
                    </S.ProfileHeaderItem1>
                    <S.ProfileHeaderItem2>
                        <MenuHamburger clicked={clicked} handleClick={handleClick} />
                    </S.ProfileHeaderItem2>
                </S.ProfileHeaderWrap>
                <PasswordContent onSubmit={handleSubmit(update)}>
                    <S.InputLabel>
                        <S.InputLabelLabel>{t('password.currentPassword')}</S.InputLabelLabel>
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
                        <S.InputLabelLabel>{t('password.newPassword')}</S.InputLabelLabel>
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
                        <S.InputLabelLabel>{t('password.confirmedPassword')}</S.InputLabelLabel>
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
                        <S.ButtonSubmit type="submit">{t('password.confirmed')}</S.ButtonSubmit>
                    </S.Submit>
                </PasswordContent>
            </S.ProfileHeader>
        </S.Profile>
    )
}
