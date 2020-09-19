import React from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, deleteContact }) => (
  <section>
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          el={contact}
          delCont={() => deleteContact(contact.id)}
        />
      ))}
    </ul>
  </section>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
