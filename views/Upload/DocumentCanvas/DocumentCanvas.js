import { useContext, useEffect } from "react";
import styled from "styled-components";
import { SignatureContext } from "../../../contexts/SignatureContext";
import { PRIMARY_COLOR } from "../../../theme/theme";

const Canvas = styled.canvas`
    margin: 20px auto;
`;

const BOX_WIDTH = 100;
const BOX_HEIGHT = 50;

export const DocumentCanvas = ({ canvasRef, drawDocument }) => {
    const { coordinates, setCoordinates, page } = useContext(SignatureContext);

    useEffect(() => {
        if (coordinates) {
            const context = canvasRef.current.getContext("2d");

            const { x, y } = coordinates;
            drawBoxOn(x, y, context);
        }
    }, [page]);

    const handleClick = async (e) => {
        const context = canvasRef.current.getContext("2d");
        const { offsetX, offsetY } = e.nativeEvent;
        drawBoxOn(offsetX, offsetY, context);

        setCoordinates({
            x: offsetX,
            y: offsetY,
            width: BOX_WIDTH,
            height: BOX_HEIGHT
        });
    }

    const drawBoxOn = (x, y, context) => {
        drawDocument();
        setTimeout(() => {
            context.beginPath();
            context.rect(x, y, BOX_WIDTH, BOX_HEIGHT);
            context.lineWidth = 2;
            context.strokeStyle = PRIMARY_COLOR;
            context.stroke();
            context.beginPath();
        }, 200);
    }

    return <Canvas
        ref={canvasRef}
        width={0}
        height={0}
        onClick={handleClick}
    />;
}