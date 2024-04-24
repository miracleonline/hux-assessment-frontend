import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditContactPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  useEffect(() => {
    // Fetch contact details from the backend API using the contact ID
    // Update the form data with the fetched contact details
    // For example:
    // fetchContactDetails(id).then((contact) => {
    //   setFormData({
    //     firstName: contact.firstName,
    //     lastName: contact.lastName,
    //     phoneNumber: contact.phoneNumber
    //   });
    // });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit updated contact form data
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};

export default EditContactPage;
