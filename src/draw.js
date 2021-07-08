import React, { useEffect, useRef, useState } from 'react';

function  Draw() {


    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current;
        // for screen density- pixels
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext("2d")
        // for screen density 
        context.scale(2, 2)
        // line shape and color tb changed in state later?
        context.lineCap = "round"
        context.strokeStyle = "black"
        context.lineWidth = 2
        contextRef.current = context;
    }, [])

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
        console.log("hello world")
        if (!isDrawing) {
            return
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY)
        // draws the stroke
        contextRef.current.stroke()
        
    }

    return (
        <div>
            <canvas
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
