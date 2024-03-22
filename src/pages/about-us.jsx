import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBuilding, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '@/widgets/layout';
export function AboutUs(){
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-40 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">À Propos de Nous</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-6">
              <FontAwesomeIcon icon={faUsers} className="text-3xl text-gray-600" />
            </div>
            <h2 className="text-xl font-semibold mb-4">Notre Équipe</h2>
            <p className="text-gray-700">
              Notre équipe dévouée est composée de professionnels expérimentés dans le domaine de la location, prêts à vous fournir un service exceptionnel et personnalisé.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-6">
              <FontAwesomeIcon icon={faBuilding} className="text-3xl text-gray-600" />
            </div>
            <h2 className="text-xl font-semibold mb-4">Notre Expertise</h2>
            <p className="text-gray-700">
              Forts de notre expérience dans le domaine, nous sommes en mesure de vous proposer une large gamme de biens immobiliers de qualité répondant à vos besoins spécifiques.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-6">
              <FontAwesomeIcon icon={faClipboardList} className="text-3xl text-gray-600" />
            </div>
            <h2 className="text-xl font-semibold mb-4">Notre Engagement</h2>
            <p className="text-gray-700">
              Nous nous engageons à offrir à nos clients un service transparent, éthique et professionnel à chaque étape du processus de location.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
