import AccountCircle from '@material-ui/icons/AccountCircle'
import { unwrapResult } from '@reduxjs/toolkit'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import InputText from 'components/InputText/InputText'
import MenuHamburgerRed from 'components/MenuHamburgerRed/MenuHamburgerRed'
import { rules } from 'constants/rules'
import { getDate, getMonth, getYear, isExists } from 'date-fns'
import range from 'lodash/range'
import { useSnackbar } from 'notistack'
import { updateMe } from 'pages/Auth/userSlice'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './profile.style'

Profile.propTypes = {
    clicked: PropTypes.bool,
    handleClick: PropTypes.func
}

export default function Profile({ clicked, handleClick }) {
    const { enqueueSnackbar } = useSnackbar()
    const profile = useSelector(state => state.user.profile)
    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
        setError
    } = useForm({
        defaultValues: {
            name: profile.name || '',
            phone: profile.phone || '',
            address: profile.address || '',
            date: profile.date_of_birth ? getDate(new Date(profile.date_of_birth)) : '',
            month: profile.date_of_birth ? getMonth(new Date(profile.date_of_birth)) : '',
            year: profile.date_of_birth ? getYear(new Date(profile.date_of_birth)) : ''
        }
    })
    const dispatch = useDispatch()

    const update = async data => {
        const body = {
            name: data.name,
            phone: data.phone,
            address: data.address,
            date_of_birth: new Date(data.year, data.month, data.date).toISOString()
        }
        try {
            const res = await dispatch(updateMe(body)).then(unwrapResult)
            enqueueSnackbar(res.message, { variant: 'success' })
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

    const validateDate = () =>
        isExists(Number(getValues('year')), Number(getValues('month')), Number(getValues('date'))) ||
        'Ngày sinh không đúng'

    const { t } = useTranslation()

    return (
        <S.Profile>
            <Helmet>
                <title>{t('profile.title')}</title>
            </Helmet>
            <S.ProfileHeader>
                <S.ProfileHeaderItem1>
                    <S.ProfileHeaderTitle>{t('profile.title')}</S.ProfileHeaderTitle>
                    <S.ProfileHeaderSubtitle>{t('profile.manageAccount')}</S.ProfileHeaderSubtitle>
                </S.ProfileHeaderItem1>
                <S.ProfileHeaderItem2>
                    <MenuHamburgerRed clicked={clicked} handleClick={handleClick} />
                </S.ProfileHeaderItem2>
            </S.ProfileHeader>
            <S.ProfileInfo>
                <S.ProfileLeft onSubmit={handleSubmit(update)}>
                    <S.InputLabel>
                        <S.InputLabelLabel>Email</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <S.InputLabelContentText>{profile.email}</S.InputLabelContentText>
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.InputLabel>
                        <S.InputLabelLabel>{t('profile.name')}</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <Controller
                                name="name"
                                control={control}
                                rules={rules.name}
                                render={({ field: { onChange } }) => (
                                    <InputText name="name" type="text" onChange={onChange} value={getValues('name')} />
                                )}
                            />
                            <ErrorMessage name="name" errors={errors} />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.InputLabel>
                        <S.InputLabelLabel>{t('profile.phone')}</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <Controller
                                name="phone"
                                control={control}
                                rules={rules.phone}
                                render={({ field: { onChange } }) => (
                                    <InputText
                                        name="phone"
                                        type="text"
                                        onChange={onChange}
                                        value={getValues('phone')}
                                    />
                                )}
                            />
                            <ErrorMessage name="phone" errors={errors} />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.InputLabel>
                        <S.InputLabelLabel>{t('profile.address')}</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <Controller
                                name="address"
                                control={control}
                                rules={rules.address}
                                render={({ field: { onChange } }) => (
                                    <InputText
                                        name="address"
                                        type="text"
                                        onChange={onChange}
                                        value={getValues('address')}
                                    />
                                )}
                            />
                            <ErrorMessage name="address" errors={errors} />
                        </S.InputLabelContent>
                    </S.InputLabel>
                    <S.InputLabel>
                        <S.InputLabelLabel>{t('profile.dateOfBirth')}</S.InputLabelLabel>
                        <S.InputLabelContent>
                            <S.DateSelect>
                                <Controller
                                    name="date"
                                    control={control}
                                    rules={{
                                        validate: {
                                            date: validateDate
                                        }
                                    }}
                                    render={({ field: { onChange } }) => (
                                        <S.SelectDate
                                            title={t('profile.date')}
                                            options={range(1, 32).map(item => ({
                                                name: item,
                                                value: item
                                            }))}
                                            onChange={onChange}
                                            value={getValues('date')}
                                        />
                                    )}
                                />
                                <Controller
                                    name="month"
                                    control={control}
                                    rules={{
                                        validate: {
                                            date: validateDate
                                        }
                                    }}
                                    render={({ field: { onChange } }) => (
                                        <S.SelectDate
                                            title={t('profile.month')}
                                            options={range(0, 12).map(item => ({
                                                name: item + 1,
                                                value: item
                                            }))}
                                            onChange={onChange}
                                            value={getValues('month')}
                                        />
                                    )}
                                />
                                <Controller
                                    name="year"
                                    control={control}
                                    rules={{
                                        validate: {
                                            date: validateDate
                                        }
                                    }}
                                    render={({ field: { onChange } }) => (
                                        <S.SelectDate
                                            title={t('profile.year')}
                                            options={range(1900, 2021).map(item => ({
                                                name: item,
                                                value: item
                                            }))}
                                            onChange={onChange}
                                            value={getValues('year')}
                                        />
                                    )}
                                />
                            </S.DateSelect>
                        </S.InputLabelContent>
                        <S.ErrorMessage>
                            <ErrorMessage name="date" errors={errors} />
                        </S.ErrorMessage>
                    </S.InputLabel>
                    <S.Submit>
                        <S.ButtonSubmit type="submit">{t('profile.save')}</S.ButtonSubmit>
                    </S.Submit>
                </S.ProfileLeft>
                <S.ProfileRight>
                    <S.AvatarUploader>
                        {profile._id === '60f682ac4b93c866d27f1bf0' ? (
                            <S.Avatar>
                                <img src="https://cf.shopee.vn/file/58d680c8e4d37fa89f5401fd6443081e" alt="" />
                            </S.Avatar>
                        ) : (
                            <S.Avatar>
                                <AccountCircle />
                            </S.Avatar>
                        )}
                        <S.InputFile type="file" accept=".jpg,.jpeg,.png" />
                        <S.ButtonUpload light={1}>{t('profile.selectImage')}</S.ButtonUpload>
                        <S.AvatarUploaderTextContainer>
                            <div>{t('profile.size')}</div>
                            <div>{t('profile.extension')}</div>
                        </S.AvatarUploaderTextContainer>
                    </S.AvatarUploader>
                </S.ProfileRight>
            </S.ProfileInfo>
        </S.Profile>
    )
}
