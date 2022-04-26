import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_CHARITIES_INCOME_ASC } from '../../graphql';
import Search from "../shared/search";
import { Table, Button } from 'react-bootstrap';
import { convertToLocalCurrency } from '../shared/util/currency';
import { getPrimaryName } from '../shared/util/name-formatting';
import environment  from '../../environment.json'
import SpinnerComponent from "../shared/loading";
import ErrorComponent from "../shared/error";

const { skip, incomeValue } = environment.charitybase;

function CharityTable () {
    const { loading, error, data } = useQuery(GET_CHARITIES_INCOME_ASC, {
        variables: { "minIncome": incomeValue, "skip": skip }
    });

    if (loading) { return <SpinnerComponent message="Loading charities"/> }
    if (error) { return <ErrorComponent message={"Error loading charities... please contact " + environment.charitybase.adminUser}/> }

    return (
    <div className="charity-table-view-container">
        
        <h2 className="page-header">Charities with incomes of over £{convertToLocalCurrency(incomeValue)} </h2>
        <Search />
            
        <div className="charity-table">
            <Table hover size="l" borderless>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Charity</th>
                    <th>Activities</th>
                    <th>Income</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                { data && !loading &&
                data.CHC.getCharities.list.map((charity) => {
                    return (
                        <tr key = { charity.id } className="charity-table-row">
                            <td className="charity-table-column-cell charity-table-id-column-cell">{ charity.id }</td>
                            <td className="charity-table-column-cell">{ getPrimaryName(charity.names) }</td>
                            <td className="charity-table-column-cell">{ charity.activities }</td>
                            <td className="charity-table-column-cell">£{ convertToLocalCurrency(charity.finances[0].income) }</td>
                            <td className="charity-table-icon-column-cell">
                                <Button variant="primary" as={Link} to={`/charityview/${charity.id}`}>Details</Button>
                            </td>
                        </tr>
                    )
                })
                }
                </tbody>
            </Table>
        </div>
    </div>
    )
}

export default CharityTable;
