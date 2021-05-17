import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "../../components/Layout/Layout";
import { InfoModal } from "../../components/InfoModal/InfoModal";
import { SignatureContext } from "../../contexts/SignatureContext";
import { UserContext } from "../../contexts/UserContext";
import { useSignatureInfo } from "../../hooks/useSignatureInfo";
import { SignatureForm } from "./SignatureForm/SignatureForm";
import { Container, Title, Row, FormContainer, UploadContainer, Button } from "./styles";
import { UploadFlow } from "./UploadFlow/UploadFlow";

export const UploadView = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isLoading, setLoading] = useState(false);
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
                setLoading(false);
                setSuccess(true);
            })
            .catch((e) => {
                console.error(e);
                setLoading(false);
                setError("Error enviando el documento. Por favor, intente en un momento");
            })
    }

    return (
        <Layout>
            {error && <InfoModal isError text={error} onClick={() => setError(null)} />}
            {success && <InfoModal text={"Su documento ha sido firmado con éxito. Será redirigido al Dashboard"} onClick={() => {
                setSuccess(false);
                router.push("/dashboard");
            }} />}
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
                    <Button disabled={isLoading} onClick={handleSubmit(onSubmit)} disabled={isButtonDisabled()}>Enviar</Button>
                </Container>
            </SignatureContext.Provider>
        </Layout>
    );
};