import React from 'react';

const ContactListItem = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>
          {name}: {number}{' '}
        </span>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </>
);

export default ContactListItem;
