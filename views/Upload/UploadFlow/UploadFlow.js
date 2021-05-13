import { useContext, useEffect, useRef, useState } from "react";
import { SignatureContext } from "../../../contexts/SignatureContext";
import { DocumentCanvas } from "../DocumentCanvas/DocumentCanvas";

import { Container, Button, Instruction, PagesRow, FileName, FileSize } from './styles';

const BASE64_MARKER = ';base64,';

const convertDataURIToBinary = (dataURI) => {
    const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    const base64 = dataURI.substring(base64Index);
    const raw = window.atob(base64);
    const rawLength = raw.length;
    let array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }

    return array;
}

export const UploadFlow = () => {
    const {
        page,
        setPage,
        loadedFile,
        setLoadedFile,
        base64Data,
        setBase64Data,
        coordinates
    } = useContext(SignatureContext);
    const [totalPages, setTotalPages] = useState(0);
    const [pdfInstance, setPDFInstance] = useState(null);

    const inputFile = useRef(null);
    const canvasRef = useRef(null);

    const handleUploadClick = () => {
        inputFile.current.click();
    }

    const handleChange = () => {
        const file = inputFile.current.files[0];
        setLoadedFile(file);
    }

    const handlePrevClick = () => {
        if (page === 1) return;
        setPage(page - 1);
    }

    const handleNextClick = () => {
        if (page === totalPages) return;
        setPage(page + 1);
    }

    useEffect(() => {
        if (loadedFile) {
            let reader = new FileReader();
            reader.readAsDataURL(loadedFile);
            reader.onloadend = function () {
                var b64Data = reader.result;
                setBase64Data(b64Data);
            }
        }
    }, [loadedFile]);

    const drawDocument = async () => {
        // Convert base 64 data to bianry
        const pdfAsArray = convertDataURIToBinary(base64Data);

        if (pdfInstance) {
            pdfInstance.destroy();
        }

        const pdf = await pdfjsLib.getDocument(pdfAsArray).promise;

        setPDFInstance(pdf);

        // Load information from the desired page.
        setTotalPages(pdf.numPages);
        console.log(pdf);
        const pdfPage = await pdf.getPage(page);
        const scale = 0.5;

        const viewport = pdfPage.getViewport({
            scale,
            rotation: 0,
            dontFlip: false
        });

        // Get canvas context
        let context = canvasRef.current.getContext("2d");

        canvasRef.current.height = viewport?.height;
        canvasRef.current.width = viewport?.width;

        // Render PDF page into canvas context
        await pdfPage.render({ canvasContext: context, viewport });

        context.beginPath();
    }

    useEffect(() => {
        if (base64Data) drawDocument();
    }, [base64Data]);

    useEffect(() => {
        if (base64Data && !coordinates) drawDocument();
    }, [page]);

    return (
        <Container>
            <Instruction>Sube aquí tu documento</Instruction>
            <Button onClick={handleUploadClick}>Subir</Button>
            <input onChange={handleChange} type='file' ref={inputFile} style={{ display: 'none' }} />
            <DocumentCanvas canvasRef={canvasRef} drawDocument={drawDocument} />
            {
                loadedFile && <>
                    <span>(Haz click en un área para establecer la zona de firmado)</span>
                    <PagesRow page={page} totalPages={totalPages}>
                        <span onClick={() => handlePrevClick()}><i className="fa fa-arrow-left"></i></span>
                        <span>{page}</span>
                        <span onClick={() => handleNextClick()}><i className="fa fa-arrow-right"></i></span>
                    </PagesRow>
                    <span>Página</span>
                    <FileName>{loadedFile?.name}</FileName>
                    <FileSize>{loadedFile?.size / 1000} kB</FileSize>
                </>
            }
        </Container>
    )
}