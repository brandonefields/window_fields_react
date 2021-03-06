import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';


function Draw() {
    const color = useSelector((store) => store.color)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    
    useEffect(() => {
        var canvas1 = canvasRef.current;
        var context1 = canvas1.getContext("2d")
        canvas1.width = 360;
        canvas1.height = 360;
        context1.lineCap = "square"
        context1.lineWidth = 1
        contextRef.current = context1;
    },[])

    useEffect(() => {
        var canvas = canvasRef.current;
        var context = canvas.getContext("2d")
        context.strokeStyle = color
    }, [color]);


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
   
    const prepDownload = () => {
        if ( document.getElementById('downloader')) {
            document.getElementById('downloader').download = "image.png";
            document.getElementById('downloader').href = document.getElementById("canvas").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        }
    }

    return (
        <div>
            <a
                className="download-link"
                id="downloader"
                href= '...'
                onClick={prepDownload()} 
                download="image.png"
                >Download Artwork</a>
            <canvas
                id="canvas"
                className="canvas"
                onMouseDown={startDrawing}
                onMouseUp={finishedDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            ></canvas>
        </div>
    );
}

export default Draw;
