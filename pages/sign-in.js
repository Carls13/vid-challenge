import { MyHead as Head } from "../components/Head/Head";
import { SignInView } from "../views/SignIn/SignIn";

export default function SignIn() {
    return (
        <>
            <Head title="Iniciar sesión" />
            <SignInView />
        </>
    );
};