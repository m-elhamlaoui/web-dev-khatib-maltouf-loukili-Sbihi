
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CiStar } from "react-icons/ci";
import { FaDotCircle } from "react-icons/fa";
import { FaBed, FaPeopleGroup, FaShower } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Popup from '../widgets/cards/Popup';
import MyMap from '../widgets/cards/googlemaps';
import MyCalendar from '../widgets/cards/reactcalendar';

export function ProductPage() {
  const mockApartmentDetails = {
    id: 1,
    name: 'Apartment A',
    description: 'Situé au 5e étage d’un immeuble calme, cet appartement de 90 mètres carrés offre un espace de vie confortable. Le séjour et le salon sont baignés de lumière naturelle, offrant une vue agréable sur la cour intérieure. La cuisine équipée est idéale pour préparer vos repas, et la salle de bains dispose d’une douche et d’une baignoire. Les deux chambres sont dotées de placards pour un rangement pratique.',
    address: 'Avenue Moulay Rachid, Martil, Morocco',
    price: 1000,
    images: ['/img/img1.jpg', '/img/img2.jpg', '/img/img3.jpg', '/img/img4.jpg','/img/img5.jpg', '/img/img6.jpg', '/img/img7.jpg', '/img/img8.jpg','/img/img9.jpg', '/img/img10.jpg', '/img/img11.jpg', '/img/img12.jpg'],
    type: 'Apartement',
    capacity: 4,
    rooms: '2 Chambres (3 lits)',
    bathrooms: 1,
    features:['TV','WiFi','ascenseur','Sèche-Cheveux','Machine à laver','Frigo','Micro-onde',],
    lat: 35.61846778832157,
    lng: -5.27324796877587,
    dateRanges: [
      { startDate: new Date(2024, 4, 15), endDate: new Date(2024, 4, 20) },//month 4 is may, day 20 is day 19 !!!!
      { startDate: new Date(2024, 4, 23), endDate: new Date(2024, 4, 30) },
    ]
  };
  const [properties, setProperties] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fixed, setfixed] = useState(false);
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  //
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost:9192/api/properties/all-properties');
      setProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };
  //
  const closeModal = () => {
    setModalImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % mockApartmentDetails.images.length;
    setModalImage(mockApartmentDetails.images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? mockApartmentDetails.images.length - 1 : currentImageIndex - 1;
    setModalImage(mockApartmentDetails.images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };
  const excessImagesCount = Math.max(0, mockApartmentDetails.images.length - 8);

  window.addEventListener('scroll', handleScroll);
  function handleScroll(){
    if(window.scrollY >= 530){
      setfixed(true)
    }else{
      setfixed(false)
    }
  }
///////Reservation Date Picker//////////


    const [selectedStartDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedEndDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');



  const handleReservation = () => {
    // Check if the selected dates fall within any of the date ranges
    const isValidSelection = selectedStartDate <= selectedEndDate;

    if (isValidSelection) {
      // Check if the selected dates fall within any of the date ranges
      const isAvailable = mockApartmentDetails.dateRanges.every(range => {
        const rangeStartDate = range.startDate.toISOString().split('T')[0];
        const rangeEndDate = range.endDate.toISOString().split('T')[0];
        const result = (
          (selectedStartDate < rangeStartDate && selectedEndDate < rangeStartDate) ||
          (selectedStartDate > rangeEndDate && selectedEndDate > rangeEndDate)
        );
  
        console.log(`Range: ${rangeStartDate} to ${rangeEndDate}, Result: ${result}`);
  
        return result;
      });
  
      if (isAvailable) {
        setPopupContent('Reservation successful!');
      } else {
        setPopupContent('Selected dates are not available. Please consult the calendar down below and choose different dates.');
      }
    } else {
      setPopupContent('Selected end date must be after the selected start date.');
    }
    //PopUp
    setShowPopup(true);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
///////////////////
const [favouriteAdded, setfavouriteAdded] = useState(false);
const handleFavourite = () => {

  if(!favouriteAdded) {setfavouriteAdded(true);}
  else setfavouriteAdded(false);
};


///////////////////

  return (
    <div style={{ backgroundColor: '#f3f4f6' }}>
      {/* Carousel */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={33.33}
        className="custom-carousel"
      >
        {mockApartmentDetails.images.slice(0, 4).map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className=" relative p-10 " style={{ fontFamily: 'Andale Mono, monospace' }} >
        <div className="w-2/3 bg-white pt-10 rounded-md ml-10   " >
          <div className="pl-16 ">
          <h2 className="text-3xl font-bold pb-3" >{mockApartmentDetails.name}</h2>
          <div className="flex items-center ">
            <IoMdPin />
            <p className="text-gray-600 text-xl">{mockApartmentDetails.address}</p>
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 pt-10 pb-10">
            <div className="border border-grey p-20">
              <div className="flex flex-col items-center ">
                <IoHome className="mb-2 text-2xl" />
                <p className="text-gray-600 px-10" style={{ whiteSpace: 'nowrap' }}>Type de logement</p>
                <p className="text-black px-10 mt-4 font-bold" style={{ whiteSpace: 'nowrap' }}>{mockApartmentDetails.type}</p>
              </div>
            </div>
            <div className="border border-grey p-20">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center ">
                  <FaPeopleGroup className="mb-2 text-2xl" />
                  <p className="text-gray-600 px-10" style={{ whiteSpace: 'nowrap' }}>Capacité</p>
                  <p className="text-black px-10 mt-4 font-bold" style={{ whiteSpace: 'nowrap' }}>{mockApartmentDetails.capacity}</p>
              </div>
            </div>
            </div>
            <div className="border border-grey p-20">
              <div className="flex flex-col items-center">
                <FaBed className="mb-2 text-2xl" />
                <p className="text-gray-600 px-10" style={{ whiteSpace: 'nowrap' }}>Chambres</p>
                <p className="text-black px-10 mt-4 font-bold" style={{ whiteSpace: 'nowrap' }}>{mockApartmentDetails.rooms}</p>
              </div>
            </div>
          <div className="border border-grey p-20">
              <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <FaShower  className="mb-2 text-2xl" />
                <p className="text-gray-600 px-10" style={{ whiteSpace: 'nowrap' }}>Salle de Bains</p>
                <p className="text-black px-10 mt-4 font-bold" style={{ whiteSpace: 'nowrap' }}>{mockApartmentDetails.bathrooms}</p>
              </div>
              </div>
          </div>
          </div>
          <div>
          <div className="pl-16">
            <h6 className="text-2xl font-bold pb-6" >À propos du logement</h6>
            <p className="text-gray-600 text-xl pb-10 pr-16" >{mockApartmentDetails.description}</p>
          </div>
          <gallery>
            <div style={{ backgroundColor: '#f3f4f6' }}>
            <div className="grid grid-cols-4 grid-rows-2 gap-0.5 w-full h-full">
          {mockApartmentDetails.images.slice(0, 8).map((imageUrl, index) => (
            <div key={index} className="relative" style={{ height: `${277}px` }}> 
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openModal(imageUrl, index)}
              />
              {index === 7 && excessImagesCount > 0 && (
                <div className="absolute bottom-0 right-0 bg-black text-white p-2">
                  + {excessImagesCount}
                </div>
              )}
            </div>
          ))}
        </div>

        {modalImage && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">

          <button
              className="absolute top-0 left-0 m-4 text-white text-xl cursor-pointer"
              onClick={closeModal}
            >
              &#x2715;
            </button>
          <button
            className="absolute top-1/2 left-4 text-white text-xl cursor-pointer"
            onClick={prevImage}
          >
            &#x2039;
          </button>
          <button
            className="absolute top-1/2 right-4 text-white text-xl cursor-pointer"
            onClick={nextImage}
          >
            &#x203A;
          </button>
          <div className="max-w-4xl mx-auto relative">
            <img src={modalImage} alt="Modal" className="max-w-full max-h-full" />
          </div>
        </div>
        )}
      </div>
          </gallery>
          </div>
          <div className="pl-16">
              <h6 className="text-2xl font-bold pb-6 pt-10">Fonctionalités</h6>
              <div className="grid grid-cols-3 gap-4">
                {mockApartmentDetails.features.map((feature, index) => (
                  <div key={index} className={(index + 1) % 3 === 0 ? "col-span-1" : ""}>
                    <FaDotCircle className="inline mr-2"/>{feature}
                  </div>
                ))}
              </div>
          </div>
          <div className="pt-10 pl-16">
          <h6 className="text-2xl font-bold pb-6 pt-10">Localisation</h6>
          <MyMap latitude={mockApartmentDetails.lat} longitude={mockApartmentDetails.lng} />
          </div>
          <div className="pt-10 pl-16">
          <h6 className="text-2xl font-bold pb-6 pt-10">Disponibilité</h6>
          <div className="flex justify-center pb-11">
            <MyCalendar dateRanges={mockApartmentDetails.dateRanges} />
          </div>
          </div>
          <div>
            {}
          </div>
        </div>
        <div>
        <div className={`w-160 bg-white p-8 rounded-md text-center mr-6  ${fixed? 'fixed top-0 right-10' : 'absolute top-10 right-10'}`}>
          <div className="bg-indigo-600 text-white rounded-md">
          <p className="">
            <span className="text-4xl font-bold">{mockApartmentDetails.price}</span>
            <span className="text-lg font-normal relative top-[-0.7em] ml-1">DH</span>
          </p>
          <p className="block mt-2 text-lg">/NUIT</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-2">
            <label htmlFor="start-date" className="text-gray-600">Date d'arrivée</label>
            <input id="start-date" type="date" value={selectedStartDate} onChange={handleStartDateChange} placeholder="Start date" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            <label htmlFor="end-date" className="text-gray-600">Date de départ</label>
            <input id="end-date" type="date" value={selectedEndDate} onChange={handleEndDateChange} placeholder="End date" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
            <div className="mt-8 ">
            <button onClick={handleReservation}  className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Reserve</button>
            <button onClick={handleFavourite} className="flex mt-12 px-6 py-3 bg-white text-gray-700 border border-gray-700 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white">
            <CiStar style={{ color: favouriteAdded ? 'gold' : 'inherit' }} className="text-2xl" />
                <p className=" px-5" style={{ whiteSpace: 'nowrap' }}>Ajoutez aux favouris</p>
            </button>
          </div>
          </div>
          {showPopup && <Popup content={popupContent} onClose={() => setShowPopup(false)} />}

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
