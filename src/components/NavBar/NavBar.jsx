import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuHamburger from 'components/MenuHamburger/MenuHamburger'
import Popover from 'components/Popover/Popover'
import PopoverToggle from 'components/PopoverToggle/PopoverToggle'
import { path } from 'constants/path'
import { useAuthenticated } from 'hooks/useAuthenticated'
import usePopover from 'hooks/usePopover'
import { logout } from 'pages/Auth/userSlice'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './navbar.style'

NavBar.propTypes = {
    clicked: PropTypes.bool,
    handleClick: PropTypes.func,
    handleClickCart: PropTypes.func
}

export default function NavBar({ clicked, handleClick, handleClickCart }) {
    const dispatch = useDispatch()

    const authenticated = useAuthenticated()
    const profile = useSelector(state => state.user.profile)
    const { activePopover, showPopover, hidePopover } = usePopover()
    const purchases = useSelector(state => state.cart.purchases)

    const handleLogoutClick = () => {
        handleClick()
        const action = logout()
        dispatch(action)
    }

    const { t } = useTranslation()

    return (
        <>
            <PopoverToggle clicked={clicked}>
                <S.UserLink to={path.user} onClick={handleClick}>
                    {t('navBar.account')}
                </S.UserLink>
                <S.UserLink to={path.purchase} onClick={handleClick}>
                    {t('navBar.purchase')}
                </S.UserLink>
                <S.UserButton onClick={handleLogoutClick}>{t('navBar.logout')}</S.UserButton>
            </PopoverToggle>
            <S.Navbar>
                <S.NavMenu>
                    <S.Auth>
                        {authenticated && (
                            <li>
                                <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
                                    {profile._id === '60f682ac4b93c866d27f1bf0' ? (
                                        <S.UserImage src="https://www.cfdtraining.vn/uploads/thumbnails/CFDtraining-47_1602773160-thumbnail-1-48x48.jpg" />
                                    ) : (
                                        <AccountCircle />
                                    )}
                                    <S.UserName>{profile.name || profile.email}</S.UserName>
                                    <Popover active={activePopover}>
                                        <S.UserLink to={path.user}>{t('navBar.account')}</S.UserLink>
                                        <S.UserLink to={path.purchase}>{t('navBar.purchase')}</S.UserLink>
                                        <S.UserButton onClick={handleLogoutClick}>{t('navBar.logout')}</S.UserButton>
                                    </Popover>
                                </S.User>
                            </li>
                        )}

                        {!authenticated && (
                            <Fragment>
                                <li>
                                    <S.NavLink to={path.register}>{t('navBar.register')}</S.NavLink>
                                </li>
                                <li>
                                    <S.NavLink to={path.login}>{t('navBar.login')}</S.NavLink>
                                </li>
                            </Fragment>
                        )}
                    </S.Auth>
                    <S.WrapIcon>
                        <S.CartIcon onClick={handleClickCart}>
                            <svg
                                viewBox="0 0 26.6 25.6"
                                className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2"
                            >
                                <polyline
                                    fill="none"
                                    points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={10}
                                    strokeWidth="2.5"
                                />
                                <circle cx="10.7" cy={23} r="2.2" stroke="none" />
                                <circle cx="19.7" cy={23} r="2.2" stroke="none" />
                            </svg>
                            {purchases.length > 0 && <S.CartNumberBadge>{purchases.length}</S.CartNumberBadge>}
                        </S.CartIcon>
                        <S.MenuHamburger>
                            <MenuHamburger clicked={clicked} handleClick={handleClick} />
                        </S.MenuHamburger>
                    </S.WrapIcon>
                </S.NavMenu>
            </S.Navbar>
            {clicked && <S.Overlay />}
        </>
    )
}
