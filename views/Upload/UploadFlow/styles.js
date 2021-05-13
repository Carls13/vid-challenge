import styled, { css } from "styled-components";
import { button, PRIMARY_COLOR, SECONDARY_COLOR } from "../../../theme/theme";

const disabledArrow = css`
    color: gray;
    cursor: unset;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        text-align: center;
    }
`;

export const Instruction = styled.span`
    font-size: 22px;
    font-weight: bold;
`;

export const Button = styled.button`
    ${button};
    display: block;
    margin: 15px auto;
`;

export const FileName = styled.span`
    font-size: 22px;
    font-weight: bold;
    color: ${SECONDARY_COLOR};
    margin-top: 20px;
`;

export const FileSize = styled.span`
    font-size: 20px;
    color: black;
`;

export const PagesRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;

    i {
        font-size: 18px;
        color: ${PRIMARY_COLOR};
        cursor: pointer;
    }

    span:nth-child(1) i {
        ${props => props.page === 1 ?
        disabledArrow
        : null}
    }
    span:nth-child(3) i {
        ${props => props.page === props.totalPages ?
        disabledArrow
        : null}
    }
`;