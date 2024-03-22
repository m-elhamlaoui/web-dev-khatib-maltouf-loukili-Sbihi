import axios from 'axios';
import { useEffect, useState } from 'react';

const ApartmentList = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get('http://localhost:9192/api/properties/available-properties');
        setApartments(response.data);
      } catch (error) {
        console.error('Error fetching apartments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApartments();
  }, []);

  return (
    <div>
      <h2>Apartment List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : apartments.length > 0 ? (
        <ul>
          {apartments.map(apartment => (
            <li key={apartment.id}>
              {apartment.name} - {apartment.address}
            </li>
          ))}
        </ul>
      ) : (
        <p>No apartments available.</p>
      )}
    </div>
  );
};

export default ApartmentList;
