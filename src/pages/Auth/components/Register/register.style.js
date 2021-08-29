import styled from 'styled-components'
import { Button } from 'assets/styles/utils'

export const StyledRegister = styled.div`
    background-color: rgb(238, 77, 45);
    min-width: max-content;
`

export const Banner = styled.div`
    background-image: url(https://cf.shopee.vn/file/5569eb9dc7e09e2dbed5315b8f2ea8ba);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 78rem;
    min-height: 37.5rem;
    height: 45rem;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const FormWrapper = styled.div`
    width: 300px;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
    border-radius: 0.4rem;
    background-color: #fff;
    padding: 0rem 2rem;
    height: max-content;
`
export const FormTitle = styled.div`
    font-size: 15px;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: #222;
    text-transform: capitalize;
`

export const Form = styled.form``

export const FormControl = styled.div`
    margin-bottom: 2rem;
`

export const FormButton = styled.div`
    margin-bottom: 2rem;
    ${Button} {
        width: 100%;
        height: 2.5rem;
        font-size: 11px;
        text-transform: uppercase;
    }
`

export const FormFooter = styled.div`
    text-align: center;
    font-size: 11px;
    margin-bottom: 3rem;
    span {
        margin-right: 0.5rem;
        color: rgba(0, 0, 0, 0.26);
    }
`
