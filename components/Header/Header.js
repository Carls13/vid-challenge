import {
    HeaderContainer,
    LogoContainer,
    Logo,
    OptionsContainer,
    Option,
} from './styles';

import Link from 'next/link';
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';

export const Header = () => {
    const { auth } = useContext(UserContext);

    return (
        <HeaderContainer>
            <LogoContainer>
                <Link href="/">
                    <Logo src="/logo.svg" alt="ValidatedID Logo" />
                </Link>
            </LogoContainer>
            <OptionsContainer>
                <Option>
                    {
                        auth ?
                            <Link prefetch href="/dashboard">Dashboard</Link>
                            :
                            <Link prefetch href="/sign-in">Entrar</Link>
                    }
                </Option>
            </OptionsContainer>
        </HeaderContainer>
    )
};