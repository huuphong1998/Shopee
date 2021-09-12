import styled from 'styled-components'
import { Button } from 'assets/styles/utils'

export const PasswordContent = styled.form`
    padding-top: 2.5rem;
    padding-bottom: 60px;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding-top: 1.5rem;
        padding-bottom: 10px;
    }
`
export const Profile = styled.div`
    padding: 0 30px 20px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
    border-radius: 2px;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 0 10px 10px;
    }
`
export const ProfileHeader = styled.div`
    padding: 22px 0;
    border-bottom: 1px solid #efefef;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 10px 0;
        border-bottom: initial;
    }
`
export const ProfileHeaderWrap = styled.div`
    border-bottom: 0.0625rem solid #efefef;
    padding-bottom: 1.125rem;
    display: flex;
    justify-content: space-between;
`
export const ProfileHeaderItem1 = styled.div``
export const ProfileHeaderItem2 = styled.div`
    display: none;

    @media screen and (max-width: 991px) and (min-width: 500px) {
        display: block;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        display: block;
    }
`
export const ProfileHeaderTitle = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    color: #333;
    text-transform: capitalize;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1.7rem;
    }
`
export const ProfileHeaderSubtitle = styled.div`
    font-size: 1.4rem;
    color: #555;
    margin-top: 3px;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1.3rem;
    }
`
export const InputLabel = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        justify-content: flex-start;
        margin-bottom: 15px;
    }
`
export const InputLabelLabel = styled.div`
    width: 20%;
    color: rgba(85, 85, 85, 0.8);
    text-transform: capitalize;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 37%;
        justify-content: flex-start;
        padding-bottom: 3px;
    }
`
export const InputLabelContent = styled.div`
    width: 45%;
    padding-left: 2rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
        padding-left: 1rem;
    }
`
export const Submit = styled.div`
    padding-left: calc(20% + 173px);

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding-left: 10px;
    }
`
export const ButtonSubmit = styled(Button)`
    height: 3.5rem;
    min-width: 11rem;
    text-transform: uppercase;
`
