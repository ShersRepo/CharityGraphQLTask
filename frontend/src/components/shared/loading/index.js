import React from "react";
import { Spinner } from "react-bootstrap";


export const SpinnerComponent = (prop) => {
    let outputMessage = 'loading';

    if (prop.message) {
        outputMessage = prop.message;
    }

    return (
        <div className="spinner-container">
            <Spinner animation="grow" variant="secondary" />
            <p>{outputMessage}</p>
        </div>
    )
}

export default SpinnerComponent;