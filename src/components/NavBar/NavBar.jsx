import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Popover from 'components/Popover/Popover'
import { path } from 'constants/path'
import { logout } from 'pages/Auth/userSlice'
import { useAuthenticated } from 'hooks/useAuthenticated'
import usePopover from 'hooks/usePopover'
import * as S from './navbar.style'

export default function NavBar() {
    const dispatch = useDispatch()

    const authenticated = useAuthenticated()
    const profile = useSelector(state => state.user.profile)
    const { activePopover, showPopover, hidePopover } = usePopover()

    const handleLogoutClick = () => {
        const action = logout()
        dispatch(action)
    }

    return (
        <S.Navbar>
            <S.NavMenu>
                {authenticated && (
                    <li>
                        <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
                            <S.UserImage src="https://www.cfdtraining.vn/uploads/thumbnails/CFDtraining-47_1602773160-thumbnail-1-48x48.jpg" />
                            <S.UserName>{profile.name || profile.email}</S.UserName>
                            <Popover active={activePopover}>
                                <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                                <S.UserLink to={path.purchase}>Đơn mua</S.UserLink>
                                <S.UserButton onClick={handleLogoutClick}>Đăng xuất</S.UserButton>
                            </Popover>
                        </S.User>
                    </li>
                )}

                {!authenticated && (
                    <Fragment>
                        <li>
                            <S.NavLink to={path.register}>Đăng ký</S.NavLink>
                        </li>
                        <li>
                            <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
                        </li>
                    </Fragment>
                )}
            </S.NavMenu>
        </S.Navbar>
    )
}
