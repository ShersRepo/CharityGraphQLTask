import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHARITY_BY_ID } from '../../graphql';
import { Card, Button, Row, Tab, Tabs } from "react-bootstrap";
import SpinnerComponent from "../shared/loading";
import ErrorComponent from "../shared/error";
import CharityAbout from  "./charity-about";
import CharityFinances from "./charity-finances";
import CharityPeople from "./charity-people";
import CharitySocials from "./charity-socials";
import CharityAreas from "./charity-area";
import environment from '../../environment.json';

export default function CharityView() {
    const charityId = useParams().id;
    
    //Need a routing guard for catching errors with invalid URL params
    const { loading, error, data } = useQuery(GET_CHARITY_BY_ID, {
        variables: { charityId }
    });

    if (loading) { return <SpinnerComponent message='Loading charity details'/> }
    if (error) { return <ErrorComponent message={"Error loading charities... please contact " + environment.charitybase.adminUser}/> }

    return (
        <div className="charity-view-container">
            <Card>
                {
                data && (
                    data.CHC.getCharities.list.map(charity => (
                        <div key={charity.id}>
                            <Card.Body key={charity.id}>
                            <CharityAreas charity={charity} />
                            <Row md={2}>
                                <Button variant="primary" size="sm" as={Link} to="/charities" id="charity-view-back-button">Back</Button>
                                <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-2 charity-view-tabs">

                                    <Tab eventKey="about" title="About" className="charity-card-tab">
                                        <CharityAbout Charity={charity} />
                                    </Tab>
                                    <Tab eventKey="finances" title="Finances" className="charity-card-tab">
                                        <CharityFinances Charity={charity} />
                                    </Tab>
                                    <Tab eventKey="people" title="People" className="charity-card-tab">
                                        <CharityPeople Charity={charity} />
                                    </Tab>
                                    <Tab eventKey="socials" title="Social Media" className="charity-card-tab">
                                        <CharitySocials Charity={charity} />
                                    </Tab>
                                </Tabs>
                            </Row>
                            </Card.Body>
                        </div>
                    )
                ))
                }
            </Card>
        </div>
    )
}