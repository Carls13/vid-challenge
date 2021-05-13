import { Layout } from "../../components/Layout/Layout";
import { SignInForm } from "./SignInForm/SignInForm";
import { Container, Title } from "./styles";

export const SignInView = () => {
    return (
        <Layout>
            <Container>
                <Title>Iniciar Sesión</Title>
                <SignInForm />
            </Container>
        </Layout>
    );
};