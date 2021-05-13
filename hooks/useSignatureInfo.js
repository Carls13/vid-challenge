import { useState } from "react";

export const useSignatureInfo = () => {
    const [page, setPage] = useState(1);
    const [loadedFile, setLoadedFile] = useState(null);
    const [base64Data, setBase64Data] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    return { page, setPage, loadedFile, setLoadedFile, base64Data, setBase64Data, coordinates, setCoordinates };
};