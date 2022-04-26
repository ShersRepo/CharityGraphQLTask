import React from "react";
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';


const Search = (props) => {
    const type = 'charity';
    const placeholderText = 'Type ' + type + ' here';

    function submitHandler(e) {
        e.preventDefault();
        const charity = e.target.elements[0].value;
        props.GetCharityBySearchName(charity);
    }

    return (

        <Form onSubmit={submitHandler}>
            <InputGroup className="mb-3 charity-search-bar" name="charityName">
                <FormControl
                    placeholder={placeholderText}
                    aria-label="Charity name"
                    aria-describedby="Search bar"
                />
                <Button variant="outline-secondary" id="charity-search-button" size="sm" type="submit"> 
                    Search
                </Button>
            </InputGroup>
        </Form>
    )
}

export default Search;