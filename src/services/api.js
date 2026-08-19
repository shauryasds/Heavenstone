import axios from 'axios';
import { sampleProperties } from '../data/sampleProperties.js';

const API_BASE = 'http://localhost:2000/api';

const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProperties = async (filters = {}) => {
  try {
    const params = new URLSearchParams();
    if (filters.location && filters.location !== 'All') params.append('location', filters.location);
    if (filters.type && filters.type !== 'All') params.append('type', filters.type);
    if (filters.purpose && filters.purpose !== 'All') params.append('purpose', filters.purpose);
    if (filters.search) params.append('search', filters.search);

    const response = await apiClient.get(`/properties?${params.toString()}`);
    if (response.data && response.data.success) {
      return { success: true, data: response.data.data };
    }
  } catch (error) {
    console.warn('[API Warning]: Backend API unavailable or connection error. Utilizing client-side fallback store.', error.message);
  }

  // Client-side fallback filter
  let data = [...sampleProperties];

  if (filters.location && filters.location !== 'All') {
    const locLower = filters.location.toLowerCase();
    data = data.filter(p => p.location.toLowerCase().includes(locLower) || p.city.toLowerCase().includes(locLower));
  }

  if (filters.type && filters.type !== 'All') {
    const typeLower = filters.type.toLowerCase();
    data = data.filter(p => p.type.toLowerCase() === typeLower);
  }

  if (filters.purpose && filters.purpose !== 'All') {
    data = data.filter(p => p.purpose === filters.purpose);
  }

  if (filters.search) {
    const q = filters.search.toLowerCase();
    data = data.filter(p => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.type.toLowerCase().includes(q));
  }

  return { success: true, data, fallback: true };
};

export const submitContact = async (formData) => {
  try {
    const response = await apiClient.post('/contact', formData);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.warn('[API Warning]: Backend API unreachable during form submit. Using client feedback response.', error.message);
  }

  // Client fallback success response
  return {
    success: true,
    message: 'Thank you for reaching out! Our Havenstone Realty specialist will contact you shortly.',
    fallback: true
  };
};
