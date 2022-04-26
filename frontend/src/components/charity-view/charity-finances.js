import React from "react";
import { Row, Card, Col } from "react-bootstrap";

const CharityFinances = (data) => {
    return (
        <div className="charity-view-finances-row">
            <Row>
                <Col >
                    <div className="charity-view-finances-col">
                    <Card.Title className="charity-view-card-title">Finances</Card.Title>
                        {data &&
                        data.Charity.finances.map((finances, index) => {
                            return (
                            <div key={index}>
                                <div>{finances.income ? 'Income : £' + finances.income : 'Income : Not available' }</div>
                                <div>{finances.spending ? 'Spending : £' + finances.spending : 'Spending : Not available'}</div>
                                <p>{finances.financialYear ? finances.financialYear : ''}</p>
                            </div>
                            )
                        })} 
                    </div> 
                </Col>
                <Col >
                    <div className="charity-view-finances-col">
                        <Card.Title className="charity-view-card-title"><p>Grants</p></Card.Title>
                        {data.Charity.funding.grants.map((grants) => {
                            return (
                            <div>
                                <div>{grants.funder ? 'Funded by ' + grants.funder : 'Funder not available' }</div>
                                <div>{grants.description ? grants.description : ''}</div>
                                <div>{grants.amountAwarded ? 'Amount: £' + grants.amountAwarded : ''}</div>
                                <p>{grants.awardDate ?  'Funded on ' + grants.awardDate: '' }</p>
                            </div>
                            )
                        })} 
                    </div> 
                </Col>
            </Row>
        </div>
    )
}

export default CharityFinances;