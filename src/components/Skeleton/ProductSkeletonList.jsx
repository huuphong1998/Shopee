import { Skeleton } from '@material-ui/lab'
import PropTypes from 'prop-types'
import React from 'react'
import * as S from './skeleton.style'

function ProductSkeletonList({ length }) {
    return (
        <S.Skeletons>
            {Array.from(new Array(length)).map((x, index) => (
                <S.SkeletonItem key={index}>
                    <S.SkeletonRect>
                        <S.SkeletonImage></S.SkeletonImage>
                    </S.SkeletonRect>
                    <S.SkeletonText>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </S.SkeletonText>
                </S.SkeletonItem>
            ))}
        </S.Skeletons>
    )
}

ProductSkeletonList.propTypes = {
    length: PropTypes.number
}

ProductSkeletonList.defaultProps = {
    length: 30
}

export default ProductSkeletonList
