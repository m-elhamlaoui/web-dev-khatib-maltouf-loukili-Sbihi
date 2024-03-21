import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export function ProductPage() {
  const mockApartmentDetails = {
    id: 1,
    name: 'Apartment A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 1000,
    images: ['/img/img1.jpg', '/img/img2.jpg', '/img/img3.jpg', '/img/img4.jpg'] // Example image URLs
  };

  return (
    <div>
      {/* Carousel */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={33.33} // Adjust percentage as needed
        className="custom-carousel"
      >
        {mockApartmentDetails.images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      {/* Display apartment details */}
      <div className="flex justify-end p-10 mr-40" >
      <div className="w-1/2 bg-gray-100 p-8 rounded-md text-center mr-40">
        {/* Add content for the second rectangle */}
        </div>
        <div className="w-80 bg-gray-100 p-8 rounded-md text-center mr-8 relative">
          <h2 className="text-lg font-bold">{mockApartmentDetails.name}</h2>
          <p className="text-gray-600">{mockApartmentDetails.description}</p>
          <p className="mt-8">
            <span className="text-4xl font-bold">{mockApartmentDetails.price}</span>
            <span className="text-lg font-normal relative top-[-0.7em] ml-1">DH</span>
          </p>
          <p className="block mt-2 text-lg">/NUIT</p>
          <div className="mt-8">
            <input type="date" placeholder="Start date" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            <input type="date" placeholder="End date" className="mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
          <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Reserve</button>
          <button className="mt-4 px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Ajoutez aux favoris</button>
        </div>

      </div>
    </div>
  );
}

export default ProductPage;


/*
  // Function to fetch apartment details based on selectedApartment
  const fetchApartmentDetails = async () => {
    if (!selectedApartment) return;

    try {
      const response = await axios.get(`/api/apartments/${selectedApartment}`);
      setApartmentDetails(response.data);
    } catch (error) {
      console.error('Error fetching apartment details:', error);
    }
  };

  // Fetch apartment details when selectedApartment changes
  useEffect(() => {
    fetchApartmentDetails();
  }, [selectedApartment]);

  // Function to handle apartment selection
  const handleApartmentSelect = () => {
    setSelectedApartment(mockApartmentDetails);
  }; 
*/
