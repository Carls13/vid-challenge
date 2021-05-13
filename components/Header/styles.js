import styled from 'styled-components';
import { button } from '../../theme/theme';

export const HeaderContainer = styled.header`
    height: 80px;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 2px solid black;

    @media screen and (max-width: 600px) {
        padding: 10px;
    }
`;

export const LogoContainer = styled.div`
    width: auto;
`;

export const Logo = styled.img`
    width: 150px;
    max-width: 150px;
    height: auto;
    cursor: pointer;
`;

export const OptionsContainer = styled.div`
    display: flex;
    gap: 20px;
    width: auto;
`;

export const Option = styled.span`
    cursor: pointer;
    width: auto;
    ${button};
`;