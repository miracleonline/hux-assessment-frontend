import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactsListPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts from the backend API
    // For example:
    // fetchContacts().then((data) => {
    //   setContacts(data);
    // });
  }, []);

  const handleDelete = (id) => {
    // Add logic to delete contact with the given ID from the backend API
    console.log('Deleting contact with ID:', id);
  };

  return (
    <div>
      <h2>Contacts List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>
              {contact.firstName} {contact.lastName}
            </Link>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsListPage;
