import React from 'react'
import * as S from 'pages/User/Purchase/purchase.style'
import { Skeleton } from '@material-ui/lab'

export default function PurchaseSkeleton() {
    return (
        <S.PurchaseList>
            {Array(5)
                .fill(0)
                .map((item, index) => (
                    <S.OrderCard key={index}>
                        <S.OrderCardContent>
                            <S.OrderCardDetail>
                                <S.SkeletonRect>
                                    <Skeleton variant="rect" width="8rem" height="8rem" />
                                    <S.SkeletonImage></S.SkeletonImage>
                                </S.SkeletonRect>
                                <S.OrderContent>
                                    <S.OrderName>
                                        <Skeleton variant="text" width="100%" />
                                        <Skeleton variant="text" width="60%" />
                                    </S.OrderName>
                                    <S.OrderQuantity></S.OrderQuantity>
                                </S.OrderContent>
                            </S.OrderCardDetail>
                            <S.OrderCardPrice></S.OrderCardPrice>
                        </S.OrderCardContent>
                        <S.OrderCardButtonsContainer>
                            <Skeleton variant="rect" width="11rem" height="3rem" />
                            <S.TotalPrice>
                                <S.TotalPriceLabel>
                                    <Skeleton variant="text" width="150px" height="50px" />
                                </S.TotalPriceLabel>
                                <S.TotalPricePrice></S.TotalPricePrice>
                            </S.TotalPrice>
                        </S.OrderCardButtonsContainer>
                    </S.OrderCard>
                ))}
        </S.PurchaseList>
    )
}
