import React from 'react'

export default function Sqr(props) {

    const num = props.num;
    const sq = num * num;

    function handleClick() {
        alert("Button Clicked");
    }

    return (
        <div>
            Square of {num} is {sq}

            <br />

            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
