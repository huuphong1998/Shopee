import React from 'react'
import * as S from './loading.style'

export default function Loading() {
    return (
        <S.Container>
            <S.ContainerLoading>
                <S.Loading>
                    <S.LoadingDots />
                </S.Loading>
            </S.ContainerLoading>
        </S.Container>
    )
}
