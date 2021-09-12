import { Button } from 'assets/styles/utils'
import Select from 'components/Select/Select'
import styled from 'styled-components'

export const Profile = styled.div`
    padding: 0 30px 20px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
    border-radius: 2px;

    @media screen and (max-width: 991px) and (min-width: 500px) {
        padding: 0 20px;
        box-shadow: initial;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 0 10px;
        box-shadow: initial;
    }
`
export const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 22px 0;
    border-bottom: 1px solid #efefef;

    @media screen and (max-width: 991px) and (min-width: 500px) {
        padding: 15px 0;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding: 10px 0;
    }
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
export const ProfileInfo = styled.div`
    display: flex;
    align-items: flex-start;
    padding-top: 30px;

    @media screen and (max-width: 991px) and (min-width: 500px) {
        flex-direction: column-reverse;
        padding-top: initial;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column-reverse;
        padding-top: initial;
    }
`
export const ProfileLeft = styled.form`
    padding-right: 50px;
    flex-grow: 1;

    @media screen and (max-width: 991px) and (min-width: 500px) {
        padding-right: initial;
        width: 100%;
        padding-top: 10px;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        padding-right: initial;
        width: 100%;
        padding-top: 10px;
    }
`
export const ProfileRight = styled.div`
    width: 28rem;
    border-left: 1px solid #efefef;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 991px) and (min-width: 500px) {
        width: 100%;
        border-left: initial;
        border-bottom: 1px solid #efefef;
        padding-bottom: 10px;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
        border-left: initial;
        border-bottom: 1px solid #efefef;
        padding-bottom: 5px;
    }
`
export const InputLabel = styled.div`
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        margin-bottom: 20px;
    }
`
export const InputLabelLabel = styled.div`
    width: 20%;
    text-align: right;
    color: rgba(85, 85, 85, 0.8);
    text-transform: capitalize;
    overflow: hidden;
`
export const InputLabelContent = styled.div`
    width: 80%;
    padding-left: 2rem;
`
export const DateSelect = styled.div`
    display: flex;
    justify-content: space-between;
`
export const SelectDate = styled(Select)`
    width: 32%;
`
export const InputLabelContentText = styled.div`
    font-size: 1.4rem;
    color: #333;
`
export const Submit = styled.div`
    margin-bottom: 60px;
    padding-left: calc(20% + 20px);

    @media screen and (min-width: 320px) and (max-width: 767px) {
        margin-bottom: 20px;
    }
`
export const ButtonSubmit = styled(Button)`
    height: 4rem;
    min-width: 7rem;
`
export const AvatarUploader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Avatar = styled.div`
    height: 100px;
    width: 100px;
    margin: 20px 0;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
    svg {
        width: 100%;
        height: 100%;
        fill: #ee4d2d;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        height: 80px;
        width: 80px;
        margin: 10px 0;
    }
`
export const InputFile = styled.input`
    display: none;
`
export const ButtonUpload = styled(Button)`
    height: 4rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;

    @media screen and (max-width: 991px) and (min-width: 500px) {
        height: 3.5rem;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        height: 3rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
`
export const AvatarUploaderTextContainer = styled.div`
    margin-top: 12px;
    > div {
        color: #999;
    }

    @media screen and (max-width: 991px) and (min-width: 500px) {
        > div {
            display: none;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        > div {
            display: none;
        }
    }
`
export const ErrorMessage = styled.div`
    width: 100%;
    padding-left: calc(20% + 2rem);
`
