import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const ApartmentCard = ({ apartment }) => {
  const { name, description, address, price, images, id } = apartment;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
      <Card>
        <CardHeader>
          <div className="relative h-56">
          <Link to={`/productPage?apartment=${encodeURIComponent(JSON.stringify(id))}`}>
              <img
                src={images[currentImageIndex]}
                alt={name}
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                style={{ opacity: 1 }}
              />
          </Link>
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                >
                  &lt;
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                >
                  &gt;
                </button>
              </>
            )}
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
            {name}
          </Typography>
          <Typography className="mb-2 font-normal text-blue-gray-500">{address}</Typography>
          <Typography className="mb-2 font-normal text-blue-gray-500">{description}</Typography>
          <Typography className="mb-4 font-bold">Prix par nuit: {price}DH</Typography>
          
        </CardBody>
      </Card>
  );
};

export default ApartmentCard;
