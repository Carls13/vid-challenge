import styled from "styled-components";
import { button, SECONDARY_COLOR } from "../../../theme/theme";

export const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Label = styled.label`

`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    color: black;
    border: 1px solid ${props => props.error ? "red" : SECONDARY_COLOR};
`;

export const Button = styled.button`
    width: auto;
    display: block;
    margin: 15px auto;
    ${button};
    font-style: normal;
`;

export const ErrorSpan = styled.p`
    color: red;
    margin: 0;
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px;
    color: black;
    border: 1px solid ${props => props.error ? "red" : SECONDARY_COLOR};
`;

export const Option = styled.option`

`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    color: black;
    border: 1px solid ${props => props.error ? "red" : SECONDARY_COLOR};
    resize: none;
    height: ${props => props.height || "250px"}
`;