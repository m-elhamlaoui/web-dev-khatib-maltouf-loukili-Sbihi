import axios from 'axios';
import { useEffect } from 'react';


const mockApartmentList = [
    {
        address: "Avenue Moulay Rachid, Martil, Morocco",
        bathroom: 1,
        bedrooms: 2,
        capacity: 4,
        description: "dc.",
        features: [
          { id: 5, name: 'Microwave' },
          { id: 6, name: 'Frigo' },
          { id: 7, name: 'Washing Machine' },
          { id: 8, name: 'clima' }
        ],
        images: [
          {imageUrl: '/img/img1.jpg' },
          {imageUrl: '/img/img2.jpg' },
        ],
        latitude: 35.61846778832157,
        longitude: -5.27324796877587,
        owner: {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            phoneNumber: null,
            userId: 1,
            userType: null
          },
        propertyType: 'APARTMENT',
        rentPrice: 1001,
        title: 'Apartment A1'
      },
      {
        address: "Tetouan, Morocco",
        bathroom: 5,
        bedrooms: 5,
        capacity: 5,
        description: "f.",
        features: [
          { id: 1, name: 'TV' },
          { id: 2, name: 'WiFi' },
          { id: 3, name: 'Lift' },
          { id: 4, name: 'Fridge' },
        ],
        images: [
          {imageUrl: '/img/img2-1.jpg' },
          {imageUrl: '/img/img2-2.jpg' },
        ],
        latitude: 35.61846778832157,
        longitude: -5.27324796877587,
        owner: {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            phoneNumber: null,
            userId: 1,
            userType: null
          },
        propertyType: 'APARTMENT',
        rentPrice: 10500,
        title: 'Apartment A2'
      },
      {
        address: "Tanger, Morocco",
        bathroom: 5,
        bedrooms: 5,
        capacity: 5,
        description: "g",
        features: [
          { id: 1, name: 'TV' },
          { id: 4, name: 'Fridge' },
        ],
        images: [
          {imageUrl: '/img/img3-2.jpg' },
          {imageUrl: '/img/img3-1.jpg' },
        ],
        latitude: 35.61846778832157,
        longitude: -5.27324796877587,
        owner: {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            phoneNumber: null,
            userId: 1,
            userType: null
          },
        propertyType: 'APARTMENT',
        rentPrice: 10500,
        title: 'Apartment A3'
      },
      
  ];



const DemoData = () => {
  useEffect(() => {
    const demoSubmit = async () => {
      try {
        // Loop through each apartment in the mockApartmentList
        for (const apartment of mockApartmentList) {
          // Send POST request using Axios for each apartment
          const response = await axios.post('http://localhost:9192/api/properties/add-property', apartment);
          
          console.log("Form submitted!");
          console.log(apartment);
          console.log('Response from server:', response.data);
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    };
    demoSubmit();
  }, []);

  return (
    <div>
    </div>
  );
};

export default DemoData;
