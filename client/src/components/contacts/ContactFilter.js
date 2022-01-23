import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');
  const { filtered, filterContacts, clearFilter } = contactContext;
  useEffect(() => {
    if (!filtered) text.current.value = '';
  });
  const onChange = (event) => {
    if (text.current.value !== '') {
      filterContacts(event.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
