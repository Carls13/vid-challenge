import { MyHead as Head } from "../components/Head/Head";
import { UploadView } from "../views/Upload/Upload";

export default function UploadDocument() {
    return (
        <>
            <Head title="Subir documento" />
            <UploadView />
        </>
    );
};