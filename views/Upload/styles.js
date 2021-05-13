import styled from "styled-components";

import { button, PRIMARY_COLOR } from "../../theme/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 75px 100px;
    justify-content: center;

    @media screen and (max-width: 800px) {
        padding: 15px;
    }
`;

export const Title = styled.h1`
    color: ${PRIMARY_COLOR};
    font-size: 56px;
    font-weight: bold;
    line-height: 55px;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (max-width: 600px) {
        font-size: 40px;
        line-height: 41px;
    }
`;

export const Row = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 15px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 15px;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 650px) {
        width: 100%;
    }
    `;

export const Button = styled.button`
    width: auto;
    display: block;
    margin: 15px auto;
    ${button};
    font-style: normal;
`;