import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { InfoModal } from "../../../components/InfoModal/InfoModal";
import { UserContext } from "../../../contexts/UserContext";

import {
    Form,
    InputContainer,
    Label,
    Input,
    Button,
    ErrorSpan
} from './styles';

export const SignInForm = () => {
    const [error, setError] = useState();
    const router = useRouter();

    const { setIsLoggedIn } = useContext(UserContext);

    const [isLoading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {},
        criteriaMode: "firstError",
        shouldFocusError: true,
    });

    const onSubmit = ({ suscription, password }) => {
        setLoading(true);

        axios.get("https://pre-vidsignercloud.validatedid.com/api/devices", {
            headers: {
                Authorization: `Basic ${suscription}:${password}`
            }
        }).then(() => {
            setIsLoggedIn(true);
            setLoading(false);
        }).catch((e) => {
            const status = e?.response;

            if (status !== 403) {
                setIsLoggedIn(true);
                router.push("/dashboard");
            } else {
                setError("Error iniciando sesión. Por favor, revise sus datos");
            }
            setLoading(false);
        })
    }

    return (
        <>
            {error && <InfoModal isError text={error} onClick={() => setError(null)} />}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <Label htmlFor="subscription">Suscripción</Label>
                    <Input id="subscription"
                        type="text"
                        error={errors.suscription}
                        placeholder="Suscripción"
                        {...register("suscription", {
                            required: "Debes ingresar este campo"
                        })}
                    />
                    {errors.suscription && <ErrorSpan>{errors.suscription.message}</ErrorSpan>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password"
                        type="password"
                        error={errors.password}
                        placeholder="Contraseña"
                        {...register("password", {
                            required: "Debes ingresar este campo"
                        })}
                    />
                    {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="environment">Entorno</Label>
                    <Input id="environment"
                        type="text"
                        placeholder="Suscripción"
                        value="PRE"
                        disabled
                    />
                </InputContainer>
                <Button disabled={isLoading} type="submit">Entrar</Button>
            </Form>
        </>
    );
};