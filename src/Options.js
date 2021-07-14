import { useDispatch } from 'react-redux';
import React from 'react';

export default function Options(){

    const dispatch = useDispatch();
    
    function colorChoice(color){
        return {type:'SET_COLOR', payload: color}
    }

    

        return (
        <div className="options-container">
            <form>
                <label>color</label>
                <select
                    className="color-drop-down"
                    onChange={(e) => dispatch(colorChoice(e.target.value))}>
                    <option value="black">black</option>
                    <option value="eraser">eraser</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="purple">purple</option>
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="yellow">yellow</option>
                </select>
            </form>
        </div>
    );
}


