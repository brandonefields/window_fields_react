import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';


function  Draw() {
    const color = useSelector((store)=> store.color)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current;
        // for screen density- pixels
        canvas.width = 360;
        canvas.height = 360;
        const context = canvas.getContext("2d")
        // for screen density 
        
        // line shape and color tb changed in state later?
        context.lineCap = "square"
        // dispatch(color2())
        // " ${dispatch(color2())} "
        context.strokeStyle = color
        context.lineWidth = 1
        contextRef.current = context;
    }, [color],)

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
