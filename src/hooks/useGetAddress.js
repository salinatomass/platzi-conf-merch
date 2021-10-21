import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetAddress = (location) => {
  const [map, setMap] = useState({});

  const address =
    location.address && location.state
      ? `${location.address}, ${location.state}`
      : 'San Francisco';
  const API = `http://api.positionstack.com/v1/forward?query=${address}&access_key=dc2ca0283605bcb7e629e7ed3f1ef68b`;

  useEffect(() => {
    const getAddress = async () => {
      const { data: response } = await axios(API);
      setMap(response.data[0]);
    };
    getAddress();
  }, []);

  return map;
};

export default useGetAddress;
