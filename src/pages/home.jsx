import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; 
import { PageTitle, Footer} from "@/widgets/layout";
import { FeatureCard,TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import BookingBar from "@/widgets/layout/bookingBar";
import ApartmentCard from "@/widgets/cards/apartmentcard";
import BookingChatbot from "@/pages/bookingchatbot";
import ChatbotToggleButton from "./togglebutton";


const mockApartmentDetails = [
  {
    id: 1,
    name: 'Apartment A',
    description: 'Situé au 5e étage d’un immeuble calme, cet appartement de 90 mètres carrés offre un espace de vie confortable. Le séjour et le salon sont baignés de lumière naturelle, offrant une vue agréable sur la cour intérieure. La cuisine équipée est idéale pour préparer vos repas, et la salle de bains dispose d’une douche et d’une baignoire. ',
    address: 'Avenue Moulay Rachid, Martil, Morocco',
    price: 700,
    images: ['/img/aprt1.JPG','/img/aprt3.JPG'],
    type: 'Appartement',
    capacity: 4,
    rooms: '2 Chambres (3 lits)',
    bathrooms: 1,
    features:['TV','WiFi','Ascenseur','Sèche-Cheveux','Machine à laver','Frigo','Micro-onde'],
    lat: 35.61846778832157,
    lng: -5.27324796877587
  },
  {
    id: 1,
    name: 'Apartment B',
    description: 'Situé au 5e étage d’un immeuble calme, cet appartement de 90 mètres carrés offre un espace de vie confortable. Le séjour et le salon sont baignés de lumière naturelle, offrant une vue agréable sur la cour intérieure. La cuisine équipée est idéale pour préparer vos repas, et la salle de bains dispose d’une douche et d’une baignoire.',
    address: 'Avenue Moulay Rachid, Martil, Morocco',
    price: 1000,
    images: ['/img/aprt2.JPG','/img/aprt1.JPG'],
    type: 'Appartement',
    capacity: 4,
    rooms: '2 Chambres (3 lits)',
    bathrooms: 1,
    features:['TV','WiFi','Ascenseur','Sèche-Cheveux','Machine à laver','Frigo','Micro-onde'],
    lat: 35.61846778832157,
    lng: -5.27324796877587
  },{
    id: 1,
    name: 'Apartment C',
    description: 'Situé au 5e étage d’un immeuble calme, cet appartement de 90 mètres carrés offre un espace de vie confortable. Le séjour et le salon sont baignés de lumière naturelle, offrant une vue agréable sur la cour intérieure. La cuisine équipée est idéale pour préparer vos repas, et la salle de bains dispose d’une douche et d’une baignoire.',
    address: 'Avenue Moulay Rachid, Martil, Morocco',
    price: 850,
    images: ['/img/aprt3.JPG','/img/aprt1.JPG'],
    type: 'Appartement',
    capacity: 4,
    rooms: '2 Chambres (3 lits)',
    bathrooms: 1,
    features:['TV','WiFi','Ascenseur','Sèche-Cheveux','Machine à laver','Frigo','Micro-onde'],
    lat: 35.61846778832157,
    lng: -5.27324796877587
  },];


export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Votre prochaine aventure commence ici.
              </Typography>
              <div className=" rounded-lg w-full md:w-1500">
                <BookingBar />
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <PageTitle title="Appartements disponibles" />
          <div className="flex flex-wrap justify-center">
            {mockApartmentDetails.slice(0, 3).map((apartment) => (
              <div key={apartment.id} className="w-full md:w-1/3 p-4">
                <ApartmentCard apartment={apartment} />
              </div>
            ))}
          </div>
        </div>
      </section>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <ChatBubbleBottomCenterIcon  className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Quelques Retour-Clients
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              "J'ai eu une expérience incroyable avec cette agence de location! Le processus de réservation était simple et rapide, et le personnel était très serviable et réactif à toutes mes questions.
                <br />
                <br />
                La propriété elle-même était impeccablement propre et bien entretenue, et l'emplacement était parfait pour explorer la région. Je recommande vivement cette agence à tous ceux qui recherchent des locations de vacances de qualité!"
              </Typography>
              <Button variant="filled">Lire plus</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/team-4.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal"></Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Meryeme Maarod
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Casablanca
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/profil2.JPG"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal"></Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Karim mahmood
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Rabat
                  </Typography>
                </CardBody>
              </Card>
            </div>

            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <ChatBubbleBottomCenterIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Quelques Retour-Clients
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              "Ma famille et moi avons passé un séjour fantastique dans cet appartement! Le processus de réservation était simple et l'équipe de gestion était très professionnelle et courtoise. L'appartement était spacieux, propre et bien équipé avec tout ce dont nous avions besoin pour notre séjour.
                <br />
                <br />
                De plus, l'emplacement était idéal, à proximité des attractions touristiques et des transports en commun."
              </Typography>
              <Button variant="filled">Lire plus</Button>
            </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <div >
      <ChatbotToggleButton  />
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
