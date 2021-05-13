import { css } from "styled-components";

export const PRIMARY_COLOR = "#00bf71";
export const SECONDARY_COLOR = "#151a35";

export const button = css`
    background-color: ${PRIMARY_COLOR};
    color: white;
    padding: 20px;
    border: none;

    &:hover {
        background-color:${SECONDARY_COLOR};
    }

    :disabled {
        background-color: gray;
        cursor: not-allowed;
    }
`;