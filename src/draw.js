import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';


function Draw() {
    const color = useSelector((store) => store.color)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    
    

    useEffect(() => {
        var canvas = canvasRef.current;
        var context = canvas.getContext("2d")
        canvas.width = 360;
        canvas.height = 360;

        context.lineCap = "square"
        // dispatch(color2())
        // " ${dispatch(color2())} "
        context.strokeStyle = color
        context.lineWidth = 1
        contextRef.current = context;
    }, [])

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
