import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "../../components/Layout/Layout";
import { SignatureContext } from "../../contexts/SignatureContext";
import { UserContext } from "../../contexts/UserContext";
import { useSignatureInfo } from "../../hooks/useSignatureInfo";
import { SignatureForm } from "./SignatureForm/SignatureForm";
import { Container, Title, Row, FormContainer, UploadContainer, Button } from "./styles";
import { UploadFlow } from "./UploadFlow/UploadFlow";

export const UploadView = () => {
    const { isLoggedIn } = useContext(UserContext);

    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) router.push("/");
    }, []);

    const signatureInfo = useSignatureInfo();
    const { coordinates, page, loadedFile, base64Data } = signatureInfo;
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {},
        criteriaMode: "firstError",
        shouldFocusError: true,
    });

    const isButtonDisabled = () => {

        return !coordinates || !page || !loadedFile || !base64Data;
    }

    const onSubmit = (data) => {
        const {
            issuerName,
            signerName,
            idType,
            signerID,
            signerEmail,
            language,
            subject,
            message,
            phoneNumber
        } = data;
        console.log(data);

        const { x, y, width, height } = coordinates;

        const requestData = {
            DocContent: base64Data,
            FileName: loadedFile.name,
            IssuerName: issuerName,
            Signers: [
                {
                    SignerName: signerName,
                    TypeOfID: idType,
                    NumberID: signerID,
                    eMail: signerEmail,
                    SignatureType: "emailandsms",
                    PhoneNumber: phoneNumber,
                    Language: language,
                    Visible: {
                        Page: page,
                        PosX: x,
                        PosY: y,
                        SizeX: width,
                        SizeY: height,
                        anchor: null
                    },
                    NotificationEmailMessage: {
                        eMailBody: message,
                        eMailSubject: subject

                    }
                }
            ]
        };

        axios.post("https://pre-vidsignercloud.validatedid.com/api/documents", requestData, {
            headers: {
                Authorization: `Basic SandboxYG:1234`
            }
        })
            .then(() => {
                console.log("Done!")
            })
            .catch((e) => {
                console.error(e);
            })
    }

    return (
        <Layout>
            <SignatureContext.Provider value={signatureInfo}>
                <Container>
                    <Title>Subir Documento</Title>
                    <Row>
                        <FormContainer>
                            <SignatureForm register={register} errors={errors} />
                        </FormContainer>
                        <UploadContainer>
                            <UploadFlow />
                        </UploadContainer>
                    </Row>
                    <Button onClick={handleSubmit(onSubmit)} disabled={isButtonDisabled()}>Enviar</Button>
                </Container>
            </SignatureContext.Provider>
        </Layout>
    );
};