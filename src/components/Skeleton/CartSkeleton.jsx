import { Skeleton } from '@material-ui/lab'
import CheckBox from 'components/CheckBox/CheckBox'
import * as S from 'pages/Cart/cart.style'
import React from 'react'

export default function CartSkeleton() {
    return (
        <S.ProductSection>
            {Array(5)
                .fill(0)
                .map((item, index) => (
                    <S.CartItem key={index}>
                        <S.CartItemCheckbox>
                            <CheckBox />
                        </S.CartItemCheckbox>
                        <S.CartItemOverview>
                            <S.CartItemOverviewImage>
                                <S.SkeletonRect>
                                    <Skeleton variant="rect" width="100%" height="100%" />
                                    <S.SkeletonImage></S.SkeletonImage>
                                </S.SkeletonRect>
                            </S.CartItemOverviewImage>
                            <S.CartItemOverviewNameWrapper>
                                <S.CartItemOverviewName>
                                    <Skeleton variant="text" width="100%" />
                                    <Skeleton variant="text" width="60%" />
                                </S.CartItemOverviewName>
                            </S.CartItemOverviewNameWrapper>
                        </S.CartItemOverview>
                        <S.CartItemUnitPrice>
                            <span></span>
                            <Skeleton variant="text" width="80%" />
                        </S.CartItemUnitPrice>
                        <S.CartItemQuantity>
                            <span></span>
                            <Skeleton variant="rect" width="120px" height="30px" />
                        </S.CartItemQuantity>
                        <S.CartItemTotalPrice>
                            <span></span>
                            <Skeleton variant="text" width="80%" />
                        </S.CartItemTotalPrice>
                        <S.CartItemAction>
                            <S.CartItemActionButton>
                                <Skeleton variant="text" width="40px" />
                            </S.CartItemActionButton>
                        </S.CartItemAction>
                    </S.CartItem>
                ))}
        </S.ProductSection>
    )
}
