import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


export function Apartments() {


const [userType, setUserType] = useState('admin'); // 'admin' or 'client'

  return (
    <div>
      {/*< DemoData />*/}
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
      bedrooms: '2 Chambres (3 lits)',
      bathroom: 1,
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
      description : "Niché au cœur du quartier historique, cet appartement de 75 mètres carrés vous offre un véritable havre de paix. Son ambiance chaleureuse et ses éléments architecturaux d'époque ajoutent du caractère à cet espace de vie. La cuisine moderne et entièrement équipée vous invite à concocter de délicieux repas, tandis que la chambre principale spacieuse vous promet des nuits paisibles. Profitez également de la terrasse ensoleillée pour des moments de détente.",
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
      bedrooms: '1 Bedroom (2 beds)',
      bathroom: 1,
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
      description : "Situé dans un quartier animé et branché, cet appartement de 80 mètres carrés incarne le style de vie urbain moderne. Ses grandes fenêtres laissent entrer la lumière naturelle, créant une atmosphère lumineuse et aérée. La cuisine ouverte sur le salon offre un espace convivial pour recevoir vos amis et votre famille. La chambre principale avec son dressing attenant vous offre un espace de rangement pratique, tandis que le balcon offre une vue imprenable sur la skyline de la ville.",
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
      bedrooms: '1 Bedroom (1 bed)',
      bathroom: 1,
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
      description : "Cet appartemdnt de 65 mètres carrés, situé dans un quartier résidentiel paisible, est parfait pour ceux qui recherchent tranquillité et confort. La décoration moderne et épurée crée une ambiance apaisante dans chaque pièce. La cuisine entièrement équipée avec son îlot central est idéale pour les amateurs de cuisine, tandis que le salon spacieux offre un espace de détente confortable. La chambre lumineuse avec son bureau intégré est parfaite pour le télétravail ou la lecture relaxante.",
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
      bedrooms: '2 Bedrooms (4 beds)',
      bathroom: 2, 
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


    const [isOpen2, setIsOpen2] = useState(false);
  
    const handleIconClick = () => {
      setIsOpen2(true);
    };
  
    const handleCloseForm = () => {
      setIsOpen2(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    const [formData, setFormData] = useState({
      title: '',
      description: '',
      address: '',
      price: '',
      bedrooms: '',
      bathroom: '',
      capacity: '',
      latitude: '',
      longitude: '',
      propertyType: '',
      owner: '',
      features: [],
      images: []
    });
    

    const handleChange = (e) => {
      const { name, value } = e.target;
      let updatedValue;
    
      if (name === 'owner') {
        const ownerId = parseInt(value);
        setFormData(prevFormData => ({
          ...prevFormData,
          owner: {
            userId: ownerId
          }
        }));
      } else {
        updatedValue = name === 'bedrooms' || name === 'bathroom' || name === 'price' || name === 'capacity' || name === 'longitude' || name === 'latitude' ? parseInt(value) : value;
    
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: updatedValue
        }));
      }
    };

    
    
    const handleChangePropertyType = (e) => {
      const propertyType = e.target.value;
      setFormData(prevFormData => ({
        ...prevFormData,
        propertyType: propertyType
      }));
    };


    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
      const featureId = parseInt(value);
      
      const updatedFeatures = checked
        ? [...formData.features, featureId]
        : formData.features.filter((feature) => feature !== featureId);
    
      setFormData({
        ...formData,
        features: updatedFeatures
      });
    };
    
    const clearFormData = () => {
      setFormData({
        title: '',
        description: '',
        address: '',
        price: '',
        bedrooms: '',
        bathroom: '',
        capacity: '',
        latitude: '',
        longitude: '',
        propertyType: '',
        owner: '',
        features: [],
        images: []
      });
    };
    
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formattedFeatures = formData.features.map(id => ({ id }));

      const updatedFormData = { ...formData, features: formattedFeatures };

      console.log("Form submittedmmm!");
      console.log(updatedFormData);
      //////
      
      try {
        // Send POST request using Axios
        const response = await axios.post('http://localhost:9192/api/properties/add-property', updatedFormData);
    
        // Handle response
        console.log('Response from server:', response.data);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }

      

    };
    
    const handleFileChange = (event) => {
      const selectedFiles = event.target.files;
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    
      const selectedPhotos = Array.from(selectedFiles).filter(file =>
        allowedTypes.includes(file.type)
      );
    
      const selectedUrls = selectedPhotos.map(photo => {
        const fileName = photo.name.split('.').slice(0, -1).join('.');
        return `/img/${fileName}.jpg`;
      });
    
      const uniqueUrls = [...new Set(selectedUrls)];
      const filteredUrls = uniqueUrls.filter(url => {
        return !formData.images.some(image => image.imageUrl === url);
      });
    
      const updatedImages = filteredUrls.map(imageUrl => ({ imageUrl }));
      setFormData(prevFormData => ({
        ...prevFormData,
        images: [...prevFormData.images, ...updatedImages]
      }));
    };
    

    const handleSubmit2 = async (e) => {
      e.preventDefault();
      const formattedFeatures = formData.features.map(id => ({ id }));

      const updatedFormData = { 
        ...formData, 
        propertyType: 'APARTMENT', 
        owner: { userId: 1 }, 
        latitude: 123.456, 
        longitude: 789.012,
      };

      console.log("Form submitted!");
      console.log(updatedFormData);
      //////
      
      try {
        // Send POST request using Axios
        const response = await axios.put('http://localhost:9192/api/properties/update/1', updatedFormData);
    
        // Handle response
        console.log('Response from server:', response.data);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }

      

    };

    const features = [
      { id: 9, name: 'Fan' },
      { id: 1, name: 'TV' },
      { id: 2, name: 'WiFi' },
      { id: 3, name: 'Lift' },
      { id: 8, name: 'Hair Dryer' },
      { id: 6, name: 'Washing Machine' },
      { id: 4, name: 'Fridge' },
      { id: 5, name: 'Microwave' },
      { id: 7, name: 'clima' }
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
                src={apartment.images[0]}
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
                        <label htmlFor="title" className="block text-sm font-bold mb-2">
                            Title
                          </label>
                          <input type="text" id="title" name="title" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
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
                          <label htmlFor="rentPrice" className="block text-sm font-bold mb-2">
                            Price
                          </label>
                          <input type="number" id="rentPrice" name="rentPrice" className="form-input border border-gray-300 rounded-md" onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="bedrooms" className="block text-sm font-bold mb-2">
                            bedrooms
                          </label>
                          <input type="number" id="bedrooms" name="bedrooms" className="form-input border border-gray-300 rounded-md"value={parseInt(formData.bedrooms)} onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="bathroom" className="block text-sm font-bold mb-2">
                            Bathrooms
                          </label>
                          <input type="number" id="bathroom" name="bathroom" className="form-input border border-gray-300 rounded-md"value={parseInt(formData.bathroom)} onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="capacity" className="block text-sm font-bold mb-2">
                            Capacity
                          </label>
                          <input type="number" id="capacity" name="capacity" className="form-input border border-gray-300 rounded-md" value={parseInt(formData.capacity)} onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="latitude" className="block text-sm font-bold mb-2">
                            Latitude
                          </label>
                          <input type="number" id="latitude" name="latitude" step="any" className="form-input border border-gray-300 rounded-md" value={parseInt(formData.latitude)} onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="longitude" className="block text-sm font-bold mb-2">
                            Longitude
                          </label>
                          <input type="number" id="longitude" name="longitude" step="any" className="form-input border border-gray-300 rounded-md"value={parseInt(formData.longitude)} onChange={handleChange} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="owner" className="block text-sm font-bold mb-2">
                            Owner ID
                          </label>
                          <input 
                            type="text"
                            id="owner"
                            name="owner"
                            className="form-input border border-gray-300 rounded-md"
                            onChange={handleChange}
                            pattern="[0-9]*"  // Allow only numerical input
                            inputMode="numeric" // Set input mode to numeric for better mobile support
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="photos" className="block text-sm font-bold mb-2">Photos</label>
                          <input type="file" id="photos" name="photos" accept="image/*" multiple onChange={handleFileChange} className="form-input" />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="propertyType" className="block text-sm font-bold mb-2">
                            Property Type
                          </label>
                          <select
                            id="propertyType"
                            name="propertyType"
                            className="form-select border border-gray-300 rounded-md"
                            onChange={handleChangePropertyType}
                          >
                            <option value="APARTMENT">Choose Type</option>
                            <option value="APARTMENT">APARTMENT</option>
                            <option value="HOUSE">HOUSE</option>
                            <option value="COMMERCIAL">COMMERCIAL</option>
                            <option value="STUDIO">STUDIO</option>
                          </select>
                        </div>
                        <label className="block text-sm font-bold mb-2">Features</label>
                        <div className="grid grid-cols-2 gap-2">
                        {features.map((feature) => (
                          <div key={feature.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`feature${feature.id}`}
                              name="features"
                              value={feature.id} // Assign feature ID as the value
                              className="form-checkbox"
                              onChange={handleCheckboxChange}
                            />
                            <label htmlFor={`feature${feature.id}`} className="ml-2">{feature.name}</label>
                          </div>
                        ))}
                        </div>


                      </div>


                      {/* Fields */}
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                          onClick={() => {
                            toggleModal();
                            clearFormData(); 
                          }}
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
                    <span className="text-lg font-semibold">{apartment.rentPrice} DH</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600 mt-2">{apartment.address}</p>
                    <div>
                    <div>
                      <FaPen className="mt-3 ml-1" onClick={handleIconClick} style={{ cursor: 'pointer' }} />
                      <MdDeleteForever className="mt-3 ml-1 text-xl" />
                      {isOpen2 && (
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                          <div className="bg-white p-6 rounded shadow-lg ">

                            <form onSubmit={handleSubmit}>
                              <div className='grid grid-cols-2 gap-4'>

                              {/* Additional form fields for editing property details */}
                              <h2 className="text-xl font-bold mb-4">Edit Property details</h2>
                              <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-bold mb-2">
                                  Description
                                </label>
                                <input
                                  type="text"
                                  id="description"
                                  name="description"
                                  className="form-input border border-gray-300 rounded-md"
                                  value={formData.description}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-bold mb-2">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  id="address"
                                  name="address"
                                  className="form-input border border-gray-300 rounded-md"
                                  value={formData.address}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-bold mb-2">
                                  Title
                                </label>
                                <input
                                  type="text"
                                  id="title"
                                  name="title"
                                  className="form-input border border-gray-300 rounded-md"
                                  value={formData.title}
                                  onChange={handleChange}
                                />
                              </div>
                              {/* Price */}
                              <div className="mb-4">
                                <label htmlFor="price" className="block text-sm font-bold mb-2">
                                  Price
                                </label>
                                <input
                                  type="number"
                                  id="price"
                                  name="price"
                                  className="form-input border border-gray-300 rounded-md"
                                  value={formData.price}
                                  onChange={handleChange}
                                />
                              </div>
                              {/* Capacity */}
                              <div className="mb-4">
                                <label htmlFor="capacity" className="block text-sm font-bold mb-2">
                                  Capacity
                                </label>
                                <input
                                  type="number"
                                  id="capacity"
                                  name="capacity"
                                  className="form-input border border-gray-300 rounded-md"
                                  value={formData.capacity}
                                  onChange={handleChange}
                                />
                              </div>
                              {/* Bedrooms */}
                              <div className="mb-4">
                                <label htmlFor="bedrooms" className="block text-sm font-bold mb-2">
                                  Bedrooms
                                </label>
                                <input
                                  type="number"
                                  id="bedrooms"
                                  name="bedrooms"
                                  className="form-input border border-gray-300 rounded-md"
                                  value={formData.bedrooms}
                                  onChange={handleChange}
                                />
                              </div>
                              {/* Bathrooms */}
                              <div className="mb-4">
                                <label htmlFor="bathroom" className="block text-sm font-bold mb-2">
                                  Bathrooms
                                </label>
                                <input
                                  type="number"
                                  id="bathroom"
                                  name="bathroom"
                                  className="form-input border border-gray-300 rounded-md"
                                  value={formData.bathroom}
                                  onChange={handleChange}
                                />
                              </div>
                              <button type="submit" onClick={handleSubmit2} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Submit
                              </button>
                              <button type="button" onClick={handleCloseForm} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                Cancel
                              </button>
                              </div>
                            </form>
                            
                          </div>
                        </div>
                      )}
                    </div>
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
  