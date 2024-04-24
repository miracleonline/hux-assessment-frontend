import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your backend API base URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers here, such as authorization token
  },
});

const api = {
  // Function to fetch all contacts
  getAllContacts: async () => {
    const response = await axiosInstance.get('/contacts');
    return response.data;
  },
  
  // Function to fetch a single contact by ID
  getContactById: async (id) => {
    const response = await axiosInstance.get(`/contacts/${id}`);
    return response.data;
  },

  // Function to create a new contact
  createContact: async (contactData
