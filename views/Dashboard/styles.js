import styled from "styled-components";
import { PRIMARY_COLOR } from "../../theme/theme";

export const Container = styled.section`
    display: flex;
    padding: 75px 100px;
    height: calc(100vh - 80px - 60px);
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div:nth-child(1) {
        margin-right: 40px;
    }

    @media screen and (max-width: 800px) {
        padding: 15px 25px;
        flex-direction: column;
        align-items: center;

        div:nth-child(1) {
            margin-right: 0;
        }
    }
`;

export const Option = styled.div`
    cursor: pointer;
    width: 280px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 5px solid ${PRIMARY_COLOR};
    border-radius: 10px;
    text-align: center;
    gap: 15px;

    i {
        color: ${PRIMARY_COLOR};
        font-size: 70px;
    }

    &:hover {
        transform: scale(1.2);
        transition: linear 0.2s;
    }
`;

export const Title = styled.h1`
    color: ${PRIMARY_COLOR};
    font-size: 42px;
    font-weight: bold;
    line-height: 50px;
`;