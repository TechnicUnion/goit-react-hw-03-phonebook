import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem.js';

const ContactList = ({ itemList, onDeleteClick }) => (
  <ul>
    {itemList.map(item => (
      <ContactItem item={item} onDeleteClick={onDeleteClick} />
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  itemList: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
