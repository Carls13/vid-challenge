import { Layout } from "../../components/Layout/Layout";

import {
    Container,
    Column,
    Hero,
    Title,
    Text
} from './styles';

export const IndexView = () => {
    return (
        <Layout>
            <Container>
                <Column>
                    <Hero src="/hero.svg" alt="Validated ID" />
                </Column>
                <Column>
                    <Title>La forma más segura y fácil de firmar documentos en línea</Title>
                    <Text>Nuestros diferentes tipos de firma electrónica se adaptan a tus necesidades: ya sea una firma manuscrita sobre tablet, a distancia con un smartphone, mediante certificados o con comunicaciones fehacientes.</Text>
                </Column>
            </Container>
        </Layout>
    );
}