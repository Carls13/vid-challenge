import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import { UserContext } from "../../contexts/UserContext";
import { SignInForm } from "./SignInForm/SignInForm";
import { Container, Title } from "./styles";

export const SignInView = () => {
    const router = useRouter();

    const { auth } = useContext(UserContext);

    useEffect(() => {
        if (auth) router.push("/dashboard");
    }, []);

    return (
        <Layout>
            <Container>
                <Title>Iniciar Sesión</Title>
                <SignInForm />
            </Container>
        </Layout>
    );
};