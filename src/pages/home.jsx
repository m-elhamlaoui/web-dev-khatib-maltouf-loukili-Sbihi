import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography
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
          <section className="bg-gray-100 pt-12 pb-5 rounded-xl">
        <div className="container mx-auto">
          <PageTitle title="Appartements disponibles" />
          <div className="flex flex-wrap justify-center">
            {mockApartmentList.slice(0, 3).map((apartment) => (
              <div key={apartment.id} className="w-full md:w-1/3 p-4">
                <ApartmentCard apartment={apartment} />
              </div>

            ))}
          </div>
          <a href="/apartments">
            <div className="ml-5 ">
              <Button variant="filled">Voir plus</Button>
            </div>
          </a>
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
