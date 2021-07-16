import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';


function Draw() {
    const color = useSelector((store) => store.color)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    
    
    var canvas1 = useRef(null)

    useEffect(() => {
        canvas1 = canvasRef.current;
        var context1 = canvas1.getContext("2d")
        canvas1.width = 360;
        canvas1.height = 360;

        context1.lineCap = "square"
        // dispatch(color2())
        // " ${dispatch(color2())} "
        context1.strokeStyle = color
        context1.lineWidth = 1
        contextRef.current = context1;
    },[])

    useEffect(() => {
        var canvas = canvasRef.current;
        var context = canvas.getContext("2d")
        context.strokeStyle = color
    }, [color]);

    // const handleColorChange = () => {


    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }

    const finishedDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY)
        // draws the stroke
        contextRef.current.stroke()

    }
    const saveCanvas = () => {
        var dataURL = canvas1.toDataURL();
        console.log(dataURL)
    }

    const prepDownload = () => {
        document.getElementById("downloader").download = "image.png";
        document.getElementById("downloader").href = document.getElementById("canvas").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    }
    
    console.log();

    return (
        <div>
            <canvas
                id="canvas"
                className="canvas"
                onMouseDown={startDrawing}
                onMouseUp={finishedDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            ></canvas>
            <a
                id="downloader"
                href="#"
                onClick={prepDownload()} 
                download="image.png">Download Artwork</a>
        </div>
    );
}

export default Draw;
