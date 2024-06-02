import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

/**
 * React hook for fetching resources using the provided API client.
 *
 * @param {string} param - API endpoint parameter (optional).
 * @returns {Object} - An object containing data, loading state, and error state.
 * @property {Array} data - The fetched data from the API (initially empty array).
 * @property {boolean} isLoading - Indicates if data is currently being fetched (initially false).
 * @property {string} error - Error message in case of failed fetch (initially empty string).
 */
export const useResources = param => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get(param, { signal: controller.signal })
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { data, isLoading, error };
};
