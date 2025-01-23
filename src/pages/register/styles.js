import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
    margin: 30px 0;
`

export const Column = styled.div`
    flex:${({flex}) => flex};
    padding-right: 24px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
`

export const SubtitleRegister = styled.p`
    width: 80%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin: 8px 0;
`

export const LinkRegister = styled.p`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 14px;
    margin: 20px 0;
    
    a{
        color: #23DD7A;
        text-decoration: none;
    }
`