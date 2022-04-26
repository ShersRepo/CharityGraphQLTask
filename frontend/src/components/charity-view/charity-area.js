import React from "react";
import { Badge } from "react-bootstrap";


const CharityAreas = (charity) => {
    return (
        <div>
            {charity &&
            charity.charity.areas.map(area => {
                <Badge bg="primary">{area.name}</Badge>
            })
            }
        </div>
    )
}

export default CharityAreas;