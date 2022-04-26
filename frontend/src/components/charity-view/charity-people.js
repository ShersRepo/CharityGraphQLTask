import React from "react";
import { Row, Card, Col } from "react-bootstrap";

const CharityPeople = (data) => {
    return (
        <div className="charity-view-finances-row">
            <Row>
                <Col >
                    <div className="charity-view-finances-col">
                    <Card.Title className="charity-view-card-title">Trustees</Card.Title>
                        {data.Charity.trustees.map((trustee) => {
                            return (
                            <div key={trustee.id}>
                                <p>
                                    {trustee.name ? trustee.name : '' }<br></br>
                                    {trustee.trusteeships && trustee.name ? 'Trusteeships : ' + trustee.trusteeships : ''}
                                </p>
                            </div>
                            )
                        })} 
                    </div> 
                </Col>
                <Col >
                    <div className="charity-view-finances-col">
                    <Card.Title className="charity-view-card-title">Beneficiaries</Card.Title>
                        {data 
                        && data.Charity.beneficiaries.map((benefactor) => {
                            return (
                            <div key={benefactor.id}>
                                <Card.Text>
                                    <p>{benefactor.name ? benefactor.name : '' }</p>
                                </Card.Text> 
                            </div>
                            )
                        })} 
                    </div> 
                </Col>
            </Row>
        </div>
    )
}

export default CharityPeople;