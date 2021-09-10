import { Skeleton } from '@material-ui/lab'
import ProductRating from 'components/ProductRating/ProductRating'
import * as S from 'pages/ProductDetail/productDetail.style'
import React from 'react'

export default function ProductDetailSkeleton() {
    return (
        <div className="container">
            <S.ProductBriefing>
                <S.ProductImages>
                    <S.ProductImageActive>
                        <Skeleton variant="rect" width="100%" height="100%" />
                        <S.SkeletonImage></S.SkeletonImage>
                    </S.ProductImageActive>
                    <S.ProductImageSlider>
                        <S.ProductImage>
                            <Skeleton variant="rect" width="100%" height="100%" />
                        </S.ProductImage>
                        <S.ProductImage>
                            <Skeleton variant="rect" width="100%" height="100%" />
                        </S.ProductImage>
                        <S.ProductImage>
                            <Skeleton variant="rect" width="100%" height="100%" />
                        </S.ProductImage>
                        <S.ProductImage>
                            <Skeleton variant="rect" width="100%" height="100%" />
                        </S.ProductImage>
                        <S.ProductImage>
                            <Skeleton variant="rect" width="100%" height="100%" />
                        </S.ProductImage>
                    </S.ProductImageSlider>
                </S.ProductImages>
                <S.ProductMeta>
                    <S.ProductTitle>
                        <Skeleton variant="text" width="100%" />
                        <Skeleton variant="text" width="70%" />
                        <Skeleton variant="text" width="30%" />
                    </S.ProductTitle>
                    <S.ProductMeta1>
                        <S.ProductRating>
                            <ProductRating />
                        </S.ProductRating>
                        <S.ProductSold>
                            <span>
                                <Skeleton variant="text" width="100px" />
                            </span>
                        </S.ProductSold>
                    </S.ProductMeta1>
                    <Skeleton variant="text" width="300px" height="70px" />
                    <S.ProductBuyQuantity>
                        <Skeleton variant="text" width="400px" />
                    </S.ProductBuyQuantity>
                    <Skeleton variant="text" width="180px" height="70px" />
                </S.ProductMeta>
            </S.ProductBriefing>
        </div>
    )
}
