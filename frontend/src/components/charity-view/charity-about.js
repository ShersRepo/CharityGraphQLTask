import React from "react";
import { Row, Card } from "react-bootstrap";

const CharityAbout = (data) => {
    return (
        <div className="charity-view-about-container">
            <Row md={1}>
                <div className="charity-view-about-row">
                <Card.Title><p>{data.Charity.names[0].value}</p></Card.Title>
                    <h5>Activities</h5>
                    <p>{data && data.Charity.activities} </p>
                        
                    <h5>Objectives</h5> 
                    <p>{data.Charity.objectives}</p>
                </div> 
            </Row>
        </div>
    )
}

export default CharityAbout;