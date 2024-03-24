import { useState } from 'react';
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
export function Apartments() {
const [userType, setUserType] = useState('admin'); // 'admin' or 'client'

  return (
    <div>
      {userType === 'client' ? (
        <ClientComponent />
      ) : (
        <AdminComponent />
      )}
    </div>
  );
  }




  const mockApartmentList = [
    {
      id: 1,
      name: 'Apartment A1',
      description: 'Situé au 5e étage d’un immeuble calme, cet appartement de 90 mètres carrés offre un espace de vie confortable. Le séjour et le salon sont baignés de lumière naturelle, offrant une vue agréable sur la cour intérieure. La cuisine équipée est idéale pour préparer vos repas, et la salle de bains dispose d’une douche et d’une baignoire. Les deux chambres sont dotées de placards pour un rangement pratique.',
      address: 'Avenue Moulay Rachid, Martil, Morocco',
      price: 1000,
      images: ['/img/img1.jpg', '/img/img2.jpg', '/img/img3.jpg', '/img/img4.jpg','/img/img5.jpg', '/img/img6.jpg', '/img/img7.jpg', '/img/img8.jpg','/img/img9.jpg', '/img/img10.jpg', '/img/img11.jpg', '/img/img12.jpg'],
      type: 'Apartement',
      capacity: 4,
      rooms: '2 Chambres (3 lits)',
      bathrooms: 1,
      features:['TV','WiFi','ascenseur','Sèche-Cheveux','Machine à laver','Frigo','Micro-onde','clima'],
      lat: 35.61846778832157,
      lng: -5.27324796877587,
      dateRanges: [
        { startDate: new Date(2024, 4, 15), endDate: new Date(2024, 4, 20) },
        { startDate: new Date(2024, 4, 23), endDate: new Date(2024, 4, 30) },
      ]
    },
    {
      id: 2,
      name: 'Apartment B',
      description: 'Description of Apartment B',
      address: 'Address of Apartment B',
      price: 1200,
      images: [
        '/img/img5-1.jpg',
        '/img/img5-2.jpg',
        '/img/img5-3.jpg',
        '/img/img5-4.jpg',
        '/img/img5-5.jpg',
        '/img/img5-6.jpg',
        '/img/img5-7.jpg',
        '/img/img5-8.jpg'
      ],
      type: 'Apartement',
      capacity: 3,
      rooms: '1 Bedroom (2 beds)',
      bathrooms: 1,
      features: ['WiFi', 'Air Conditioning', 'Swimming Pool'],
      lat: 35.61846778832157,
      lng: -5.27324796877587,
      dateRanges: [
        { startDate: new Date(2024, 6, 1), endDate: new Date(2024, 6, 5) },
        { startDate: new Date(2024, 7, 1), endDate: new Date(2024, 7, 5) },
      ]
    },
    {
      id: 3,
      name: 'Apartment C',
      description: 'Description of Apartment C',
      address: 'Address of Apartment C',
      price: 900,
      images: [
        '/img/img3-1.jpg',
        '/img/img3-2.jpg',
        '/img/img3-3.jpg',
        '/img/img3-4.jpg',
        '/img/img3-5.jpg',
        '/img/img3-6.jpg',
        '/img/img3-7.jpg',
        '/img/img3-8.jpg',
        '/img/img3-9.jpg',
        '/img/img3-10.jpg',
        '/img/img3-11.jpg'
      ],
      type: 'Apartement',
      capacity: 2,
      rooms: '1 Bedroom (1 bed)',
      bathrooms: 1,
      features: ['WiFi', 'Parking'],
      lat: 35.61846778832157,
      lng: -5.27324796877587,
      dateRanges: [
        { startDate: new Date(2024, 8, 10), endDate: new Date(2024, 8, 15) },
        { startDate: new Date(2024, 8, 20), endDate: new Date(2024, 8, 25) },
      ]
    },
    {
      id: 4,
      name: 'Apartment D',
      description: 'Description of Apartment D',
      address: 'Address of Apartment D',
      price: 1500,
      images: [
        '/img/img4-1.jpg',
        '/img/img4-2.jpg',
        '/img/img4-3.jpg',
        '/img/img4-4.jpg',
        '/img/img4-5.jpg',
        '/img/img4-6.jpg'
      ],
      type: 'Apartement',
      capacity: 5,
      rooms: '2 Bedrooms (4 beds)',
      bathrooms: 2, 
      features: ['WiFi', 'Gym', 'Jacuzzi'],
      lat: 35.61846778832157,
      lng: -5.27324796877587,
      dateRanges: [
        { startDate: new Date(2024, 9, 5), endDate: new Date(2024, 9, 10) },
        { startDate: new Date(2024, 9, 15), endDate: new Date(2024, 9, 20) },
      ]
    },
  ];


 function AdminComponent() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    const [formData, setFormData] = useState({
      name: '',
      description: '',
      address: '',
      price: '',
      rooms: '',
      bathrooms: '',
      capacity: '',
      latitude: '',
      longitude: '',
      owner: '',
      features: []
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
      const updatedFeatures = checked
        ? [...formData.features, value]
        : formData.features.filter((feature) => feature !== value);
  
      setFormData({
        ...formData,
        features: updatedFeatures
      });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted!");
      console.log(formData);
      //send data to server
    };
    
    const handleFileChange = (event) => {
      const selectedFiles = event.target.files;
      const selectedPhotos = Array.from(selectedFiles);
      setPhotos(selectedPhotos);
    };

    const features = [
      'éventail electrique',
      'TV',
      'WiFi',
      'ascenseur',
      'Sèche-Cheveux',
      'Machine à laver',
      'Frigo',
      'Micro-onde',
      'clima'
  ];

    return (
        <div style={{ backgroundColor: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>  
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={33.33}
          className="custom-carousel"
        >
          {mockApartmentList.map((apartment, apartmentIndex) => (
            <div key={apartmentIndex} className="relative" style={{ height: '490px' }}> 
              <img
                src={apartment.images[0]} //first image of each apartment
                alt={`Image 1 of Apartment ${apartmentIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openModal(apartment.images[0], apartmentIndex)}
              />
            </div>
          ))}
        </Carousel>
        
        <div className="w-5/6 bg-gray mt-8" style={{ fontFamily: 'Andale Mono, monospace' }}>
          <div className="pl-16 pt-6 pb-12">
            <div className='flex justify-between'>
              <h6 className="text-2xl font-bold ">Appartements</h6>
              <button className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleModal}>
                Add Apartments
              </button>
              {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Add Apartment</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="mb-4">
                        {/*FORMS*/ }
                        <label htmlFor="name" className="block text-sm font-bold mb-2">
                            Name
                          </label>
                          <input type="text" id="name" name="name" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="description" className="block text-sm font-bold mb-2">
                            Description
                          </label>
                          <textarea id="description" name="description" rows="3" className="form-textarea border border-gray-300 rounded-md" onChange={handleChange}></textarea>
                        </div>

                        <div className="mb-4">
                          <label htmlFor="address" className="block text-sm font-bold mb-2">
                            Address
                          </label>
                          <input type="text" id="address" name="address" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="price" className="block text-sm font-bold mb-2">
                            Price
                          </label>
                          <input type="number" id="price" name="price" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="rooms" className="block text-sm font-bold mb-2">
                            Rooms
                          </label>
                          <input type="number" id="rooms" name="rooms" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="bathrooms" className="block text-sm font-bold mb-2">
                            Bathrooms
                          </label>
                          <input type="number" id="bathrooms" name="bathrooms" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="capacity" className="block text-sm font-bold mb-2">
                            Capacity
                          </label>
                          <input type="number" id="capacity" name="capacity" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="latitude" className="block text-sm font-bold mb-2">
                            Latitude
                          </label>
                          <input type="number" id="latitude" name="latitude" step="any" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="longitude" className="block text-sm font-bold mb-2">
                            Longitude
                          </label>
                          <input type="number" id="longitude" name="longitude" step="any" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="owner" className="block text-sm font-bold mb-2">
                            Owner
                          </label>
                          <input type="text" id="owner" name="owner" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="photos" className="block text-sm font-bold mb-2">Photos</label>
                          <input type="file" id="photos" name="photos" multiple onChange={handleFileChange} className="form-input" />
                        </div>
                        <label className="block text-sm font-bold mb-2">Features</label>
                        <div className="grid grid-cols-2 gap-2">
                          {features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`feature${index}`}
                                name="features"
                                value={feature}
                                className="form-checkbox"
                                onChange={handleCheckboxChange}
                              />
                              <label htmlFor={`feature${index}`} className="ml-2">{feature}</label>
                            </div>
                          ))}
                        </div>


                      </div>


                      {/* Fields */}
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                          onClick={toggleModal}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 justify-center mt-10">
              {mockApartmentList.map((apartment, index) => (
                <div key={index} className="border border-gray-300 rounded-lg p-4">
                  <Link to={`/productPage?apartment=${encodeURIComponent(JSON.stringify(apartment.id))}`}>
                    <button className="w-full h-64 mb-4 rounded-t-lg focus:outline-none">
                      <img
                        src={apartment.images[0]}
                        alt={`Apartment ${index + 1}`}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </button>
                  </Link>
                  <div className="flex justify-between">
                    <div className="text-xl font-semibold focus:outline-none">
                      {apartment.name}
                    </div>
                    <span className="text-lg font-semibold">{apartment.price} DH</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600 mt-2">{apartment.address}</p>
                    <div>
                      <FaPen className="mt-3 ml-1" />
                      <MdDeleteForever className="mt-3 ml-1 text-xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    );
  }
  






  function ClientComponent() {

      return (
          <div style={{ backgroundColor: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>  
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={33.33}
            className="custom-carousel"
          >
            {mockApartmentList.map((apartment, apartmentIndex) => (
              <div key={apartmentIndex} className="relative" style={{ height: '490px' }}> 
                <img
                  src={apartment.images[0]} // Render the first image of each apartment
                  alt={`Image 1 of Apartment ${apartmentIndex + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openModal(apartment.images[0], apartmentIndex)}
                />
              </div>
            ))}
          </Carousel>
          
          <div className="w-5/6 bg-gray mt-8" style={{ fontFamily: 'Andale Mono, monospace' }}>
            <div className="pl-16 pt-6 pb-12">
              <h6 className="text-2xl font-bold ">Appartements</h6>
              <div className="grid grid-cols-3 gap-4 justify-center">
                {mockApartmentList.map((apartment, index) => (
                  <div key={index} className="border border-gray-300 rounded-lg p-4">
                    <Link to={`/productPage?apartment=${encodeURIComponent(JSON.stringify(apartment.id))}`}>
                      <button className="w-full h-64 mb-4 rounded-t-lg focus:outline-none">
                        <img
                          src={apartment.images[0]}
                          alt={`Apartment ${index + 1}`}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </button>
                    </Link>
                    <div className="flex justify-between">
                      <div className="text-xl font-semibold focus:outline-none">
                        {apartment.name}
                      </div>
                      <span className="text-lg font-semibold">{apartment.price} DH</span>
                    </div>
                    <p className="text-gray-600 mt-2">{apartment.address}</p>
                    {/* Add more apartment details here */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      );
    }





  export default Apartments;
  