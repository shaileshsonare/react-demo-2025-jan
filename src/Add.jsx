import React, { useState } from 'react'

export default function Add() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const [output, setOutput] = useState('Output will appear here');

    function add() {
        setOutput(num1 + num2);
    }

    return (
        <div>

            Num1: <input type='text' onChange={(e) => { setNum1(Number(e.target.value)) }} />
            <br />
            Num2: <input type='text' onChange={(e) => { setNum2(Number(e.target.value)) }} />

            <br />

            <button onClick={add}>Add</button>

            {output}

        </div>
    )
}
