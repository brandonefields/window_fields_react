import React from 'react';

const CanvasDraw = () => {

    return (
        <div>
            <p>{"yo makin a drawing thing"}</p>
            <main className="container">
            <canvas id="canvas" className="canvas" ></canvas>
            </main>
        </div>
    );
}

export default CanvasDraw;
