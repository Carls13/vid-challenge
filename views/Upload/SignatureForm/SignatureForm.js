import {
    Form,
    InputContainer,
    Label,
    Input,
    ErrorSpan,
    Select,
    Option,
    TextArea
} from './styles';

export const SignatureForm = ({ register, errors }) => {
    return (
        <Form>
            <InputContainer>
                <Label for="subscription">Tipo de canal de firma</Label>
                <Input id="subscription"
                    type="text"
                    value="Remote"
                    disabled
                />
            </InputContainer>
            <InputContainer>
                <Label for="issuerName">Nombre del emisor</Label>
                <Input id="issuerName"
                    type="text"
                    error={errors.issuerName}
                    placeholder="Nombre del emisor"
                    {...register("issuerName", {
                        required: "Debes ingresar este campo",
                        maxLength: {
                            value: 60,
                            message: 'Máximo 60 caracteres'
                        }
                    })}
                />
                {errors.issuerName && <ErrorSpan>{errors.issuerName.message}</ErrorSpan>}
            </InputContainer>
            <InputContainer>
                <Label for="signerName">Nombre del firmante</Label>
                <Input id="signerName"
                    type="text"
                    error={errors.signerName}
                    placeholder="Nombre del firmante"
                    {...register("signerName", {
                        required: "Debes ingresar este campo",
                        maxLength: {
                            value: 60,
                            message: 'Máximo 60 caracteres'
                        }
                    })}
                />
                {errors.signerName && <ErrorSpan>{errors.signerName.message}</ErrorSpan>}
            </InputContainer>
            <InputContainer>
                <Label for="idType">Tipo de ID</Label>
                <Input id="idType"
                    type="text"
                    error={errors.idType}
                    placeholder="Tipo de ID"
                    {...register("idType", {
                        required: "Debes ingresar este campo",
                        maxLength: {
                            value: 10,
                            message: 'Máximo 10 caracteres'
                        }
                    })}
                />
                {errors.idType && <ErrorSpan>{errors.idType.message}</ErrorSpan>}
            </InputContainer>
            <InputContainer>
                <Label for="signerID">ID del firmante</Label>
                <Input id="signerID"
                    type="text"
                    error={errors.signerID}
                    placeholder="ID del firmante"
                    {...register("signerID", {
                        required: "Debes ingresar este campo",
                        maxLength: {
                            value: 20,
                            message: 'Máximo 20 caracteres'
                        }
                    })}
                />
                {errors.signerID && <ErrorSpan>{errors.signerID.message}</ErrorSpan>}
            </InputContainer>
            <InputContainer>
                <Label for="signerEmail">Email del firmante</Label>
                <Input id="signerEmail"
                    type="email"
                    error={errors.signerEmail}
                    placeholder="Email del firmante"
                    {...register("signerEmail", {
                        required: "Debes ingresar este campo",
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'Debes ingresar un correo válido'
                        }
                    })}
                />
                {errors.signerEmail && <ErrorSpan>{errors.signerEmail.message}</ErrorSpan>}
            </InputContainer>
            <InputContainer>
                <Label for="language">Idioma</Label>
                <Select id="language"
                    error={errors.language}
                    placeholder="Idioma"
                    {...register("language", {
                        required: "Debes ingresar este campo",
                    })}
                >
                    <Option value="">Selecciona uno</Option>
                    <Option value="es">Español</Option>
                    <Option value="en">Inglés</Option>
                    <Option value="fr">Francés</Option>
                    <Option value="de">Alemán</Option>
                </Select>
                {errors.language && <ErrorSpan>{errors.language.message}</ErrorSpan>}
            </InputContainer>
            <InputContainer>
                <Label for="subject">Asunto</Label>
                <TextArea id="subject"
                    height="120px"
                    error={errors.subject}
                    placeholder="Asunto"
                    {...register("subject", {
                        required: "Debes ingresar este campo",
                        maxLength: {
                            value: 255,
                            message: 'Máximo 255 caracteres'
                        }
                    })}
                />
                {errors.subject && <ErrorSpan>{errors.subject.message}</ErrorSpan>}
            </InputContainer>
            <InputContainer>
                <Label for="message">Mensaje</Label>
                <TextArea id="message"
                    height="240px"
                    error={errors.message}
                    placeholder="Mensaje"
                    {...register("message", {
                        required: "Debes ingresar este campo",
                        maxLength: {
                            value: 500,
                            message: 'Máximo 500 caracteres'
                        }
                    })}
                />
                {errors.message && <ErrorSpan>{errors.message.message}</ErrorSpan>}
            </InputContainer>
            <InputContainer>
                <Label for="phoneNumber">Número de teléfono (opcional)</Label>
                <Input id="phoneNumber"
                    type="text"
                    error={errors.phoneNumber}
                    placeholder="Número de teléfono"
                    {...register("phoneNumber")}
                />
                {errors.phoneNumber && <ErrorSpan>{errors.phoneNumber.message}</ErrorSpan>}
            </InputContainer>
        </Form>
    );
};