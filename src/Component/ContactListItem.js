import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ el, delCont }) => (
  <li>
    {el.name}: {el.number}
    <button onClick={delCont}>Delete</button>
  </li>
);

export default ContactListItem;

ContactListItem.propTypes = {
  el: PropTypes.object.isRequired,
  delCont: PropTypes.func,
};
