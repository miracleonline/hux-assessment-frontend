import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ContactDetailsPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    // Fetch contact details from the backend API using the contact ID
    // For example:
    // fetchContactDetails(id).then((data) => {
    //   setContact(data);
    // });
  }, [id]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p><strong>First Name:</strong> {contact.firstName}</p>
      <p><strong>Last Name:</strong> {contact.lastName}</p>
      <p><strong>Phone Number:</strong> {contact.phoneNumber}</p>
    </div>
  );
};

export default ContactDetailsPage;
