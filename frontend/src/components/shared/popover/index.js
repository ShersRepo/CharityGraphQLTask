import React from "react";
import { Popover } from "react-bootstrap";
import { reformatAddress } from '../util/reformat-address.js';

export default function renderPopOver(contact, charityName) {
  const address = reformatAddress(contact.address);
  return (
    <Popover id="popover-charity-contact-details">
      <Popover.Header as="h3">{charityName}</Popover.Header>
      <Popover.Body id="contact-details">
        <div className='popover-contact-header'>Address</div>
        <span>{address}</span>
        <p>{contact.postcode}</p>

        <div className='popover-contact-header'>Contact Details</div>
        <span>{contact.email}</span>
        <p>{contact.phone}</p>
      </Popover.Body>
    </Popover>
  )
};