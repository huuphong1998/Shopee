import { path } from 'constants/path'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Password from 'pages/User/Password/Password'
import Profile from 'pages/User/Profile/Profile'
import Purchase from 'pages/User/Purchase/Purchase'
import * as S from './user.style'

export default function User() {
    return (
        <div>
            <S.Container className="container">
                <S.Sidebar>
                    <S.Brief>
                        <S.BriefAvatar to={path.profile}>
                            <img
                                src="https://www.cfdtraining.vn/uploads/thumbnails/CFDtraining-47_1602773160-thumbnail-1-48x48.jpg"
                                alt=""
                            />
                        </S.BriefAvatar>
                        <S.BriefRight>
                            <S.BriefUsername>Huu Phong</S.BriefUsername>
                            <S.BriefEdit to={path.profile}>
                                <svg
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ marginRight: 4 }}
                                >
                                    <path
                                        d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                                        fill="#9B9B9B"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                Sửa hồ sơ
                            </S.BriefEdit>
                        </S.BriefRight>
                    </S.Brief>
                    <S.SidebarMenu>
                        <S.SidebarMenuEntry to={path.profile}>
                            <S.SidebarMenuEntryIcon>
                                <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="" />
                            </S.SidebarMenuEntryIcon>
                            Tài khoản của tôi
                        </S.SidebarMenuEntry>
                        <S.SidebarMenuEntry to={path.password}>
                            <S.SidebarMenuEntryIcon>
                                <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="" />
                            </S.SidebarMenuEntryIcon>
                            Đổi mật khẩu
                        </S.SidebarMenuEntry>
                        <S.SidebarMenuEntry to={path.purchase}>
                            <S.SidebarMenuEntryIcon>
                                <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078" alt="" />
                            </S.SidebarMenuEntryIcon>
                            Đơn Mua
                        </S.SidebarMenuEntry>
                    </S.SidebarMenu>
                </S.Sidebar>
                <S.Main>
                    <Switch>
                        <Route path={path.user} exact>
                            <Redirect to={path.profile} />
                        </Route>
                        <Route path={path.profile}>
                            <Profile />
                        </Route>
                        <Route path={path.password}>
                            <Password />
                        </Route>
                        <Route path={path.purchase}>
                            <Purchase />
                        </Route>
                    </Switch>
                </S.Main>
            </S.Container>
        </div>
    )
}
