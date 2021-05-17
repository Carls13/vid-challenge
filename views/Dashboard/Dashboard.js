import { useContext, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";

import {
    Container,
    Option,
    Title
} from './styles';

import { useRouter } from 'next/router';
import { UserContext } from "../../contexts/UserContext";

export const DashboardView = () => {
    const { auth } = useContext(UserContext);

    const router = useRouter();

    useEffect(() => {
        if (!auth) router.push("/");
    }, []);

    return (
        <Layout>
            <Container>
                <Option onClick={() => router.push("/upload-document")}>
                    <i className="fas fa-upload"></i>
                    <Title>Subir Documento</Title>
                </Option>
            </Container>
        </Layout>
    );
}