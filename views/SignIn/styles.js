import styled from "styled-components";
import { PRIMARY_COLOR } from "../../theme/theme";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 75px 100px;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px - 60px);

    @media screen and (max-width: 800px) {
        padding: 15px 25px;
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
