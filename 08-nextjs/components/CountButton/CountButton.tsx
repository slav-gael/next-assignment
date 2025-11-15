'use client';

import "./CountButton.css";
import { useState, useEffect } from "react";

type CountButtonProps = {
    incrementBy: number;
    buttonColor: string;
    borderRadius: string;
}

const CountButton = ({ incrementBy, buttonColor, borderRadius }: CountButtonProps) => {
    const [currentCount, setCurrentCount] = useState(0);


    const handleClick = () => {
        setCurrentCount(currentCount + incrementBy)
    };

    // Empty array: called after everything returned has been rendered (component has been mounted)
    // Calls when currentCount is updated
    useEffect(() => {
        if(currentCount > 10){
            setCurrentCount(0)
        }
    }, [currentCount])

    const buttonStyles = {
        background: buttonColor,
        borderRadius: borderRadius,
    };

    return (
        <div>
            <button style={buttonStyles} onClick={handleClick}>+{incrementBy}</button>
            <div className={"count-display"}>{currentCount}</div>
        </div>
    );
};

export default CountButton;