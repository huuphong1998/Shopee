import styled from 'styled-components'
import { Button } from 'assets/styles/utils'

export const PasswordContent = styled.form`
    padding-top: 2.5rem;
    padding-bottom: 60px;
`
export const Profile = styled.div`
    padding: 0 30px 20px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
    border-radius: 2px;
`
export const ProfileHeader = styled.div`
    padding: 22px 0;
    border-bottom: 1px solid #efefef;
`
export const ProfileHeaderWrap = styled.div`
    border-bottom: 0.0625rem solid #efefef;
    padding-bottom: 1.125rem;
`
export const ProfileHeaderTitle = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    color: #333;
    text-transform: capitalize;
`
export const ProfileHeaderSubtitle = styled.div`
    font-size: 1.4rem;
    color: #555;
    margin-top: 3px;
`
export const InputLabel = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
`
export const InputLabelLabel = styled.div`
    width: 20%;
    color: rgba(85, 85, 85, 0.8);
    text-transform: capitalize;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const InputLabelContent = styled.div`
    width: 45%;
    padding-left: 2rem;
`
export const Submit = styled.div`
    padding-left: calc(20% + 173px);
`
export const ButtonSubmit = styled(Button)`
    height: 3.5rem;
    min-width: 11rem;
    text-transform: uppercase;
`
