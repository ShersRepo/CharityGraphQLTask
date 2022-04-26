import React from 'react';
import environment  from '../../environment.json'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHARITIES_INCOME_ASC } from '../../graphql';
import Search from '../shared/search';
import { Card, Button, Row, OverlayTrigger, ButtonGroup } from 'react-bootstrap';
import SpinnerComponent from '../shared/loading';
import ErrorComponent from '../shared/error';
import renderPopOver from '../shared/popover';
import { convertToDisplayFunding, convertToLocalCurrency, getFundRatioToIncome, getTotalCharityFunding } from '../shared/util/currency';
import { getPrimaryName } from '../shared/util/name-formatting';

const { skip, incomeValue } = environment.charitybase;

export default function CharityList () {
  const { loading, error, data } = useQuery(GET_CHARITIES_INCOME_ASC, {
      variables: { "minIncome": incomeValue, "skip": skip }
  });

  if (loading) { return <SpinnerComponent message="Loading charities"/> }
  if (error) { return <ErrorComponent message={"Error loading charities... please contact " + environment.charitybase.adminUser}/> }

  return (
    <div className="charity-card-container">
    <h2 className="page-header">Charities with incomes of over £{convertToLocalCurrency(incomeValue)} </h2>
    <Search />
    <Row md={3} className="g-5 charity-card-group-container">
    { data && !loading &&
      data.CHC.getCharities.list.map((charity) => {
        return (
          <div key = { charity.id } >
            <Card className="text-center charity-card">
              <Card.Body>
                <Card.Title className="charity-card-title">{ getPrimaryName(charity.names) }</Card.Title>
                <Card.Text className="charity-card-activities">{ charity.activities }</Card.Text>
              </Card.Body>
              <div className="charity-card-figures">
                  <span>Income : £{ convertToLocalCurrency(charity.finances[0].income) } </span>
                  <span>Outgoing : £{ convertToLocalCurrency(charity.finances[0].spending) }</span>
                  <p>Total funding : { convertToDisplayFunding(getTotalCharityFunding(charity.funding)) } 
                      { getTotalCharityFunding(charity.funding) > 0 ? 
                        ' ('+getFundRatioToIncome(getTotalCharityFunding(charity.funding), charity.finances[0].income) + '% of Income)' : 
                        ''
                      }
                  </p>
              </div>
              <Card.Footer className="text-muted">
                <ButtonGroup aria-label="Basic example">
                  <Button size="sm" variant="primary" as={Link} to={`/charityview/${charity.id}`}>Charity Details</Button>
                  <div className="charity-contact-details-popover">
                    <OverlayTrigger 
                      trigger="click" 
                      placement="auto" 
                      overlay={renderPopOver(charity.contact, getPrimaryName(charity.names))}
                    >
                      <Button variant="secondary" size="sm" id="contact-details-button">View Contact info</Button>
                    </OverlayTrigger>
                  </div>
                </ButtonGroup>
              </Card.Footer>
            </Card>
          </div>
        )
      })
    }
    </Row>
    </div> 
  );
}
