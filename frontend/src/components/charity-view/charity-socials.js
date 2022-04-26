import React from "react";
import { Row, Card, Col } from "react-bootstrap";

const CharitySocials = (data) => {
    return (
        <div className="charity-view-finances-row">
            <Row>
                <Col md={5} >
                    <div className="charity-view-finances-col">
                        <Card.Title className="charity-view-card-title">Online</Card.Title>
                        <p>{data.Charity.website ? data.Charity.website : 'No website registered' }</p>
                    </div> 
                </Col>
                <Col xl={7}>
                    <div className="charity-view-finances-col">
                    <Card.Title className="charity-view-card-title">Topics</Card.Title>
                        {data 
                        && data.Charity.topics.map((topic) => {
                            return (
                            <div key={topic.id}>
                                <span>{topic.name ? topic.name : '' }</span>
                                <p>{topic.score && topic.name ? 'Topic score : ' + topic.score : '' }</p>
                            </div>
                            )
                        })} 
                    </div> 
                </Col>
            </Row>
        </div>
    )
}

export default CharitySocials;