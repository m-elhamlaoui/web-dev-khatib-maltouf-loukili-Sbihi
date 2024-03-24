import React, { useState } from 'react';

function BookingChatbot({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleUserMessage = () => {
    const userMessage = input.trim().toLowerCase();
    if (userMessage) {
      const newMessages = [...messages, { text: input, sender: 'user' }];

      setMessages(newMessages);
      setInput('');

      setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        const newBotMessage = { text: botResponse, sender: 'bot' };
        setMessages([...newMessages, newBotMessage]);
      }, 500); // Adjust delay time in milliseconds as needed
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerCaseUserMessage = userMessage.trim().toLowerCase();

    if (lowerCaseUserMessage.includes('bonjour')) {
      return 'Bonjour! Comment puis-je vous aider?';
    } else if (
      lowerCaseUserMessage.includes('réserver') ||
      lowerCaseUserMessage.includes('réservation') ||
      lowerCaseUserMessage.includes('reservation') ||
      lowerCaseUserMessage.includes('reserver')
    ) {
      return 'Bien sûr! Veuillez fournir la ville, les dates de séjour et le nombre de personnes.';
    } else if (lowerCaseUserMessage.includes('disponibilité')) {
      return 'Dans quelle ville souhaitez-vous vérifier la disponibilité?';
    } else if (lowerCaseUserMessage.includes('aide')) {
      return 'De quoi avez-vous besoin d\'aide? Vous pouvez poser des questions sur la réservation, la disponibilité des appartements, etc.';
    } else if (lowerCaseUserMessage.includes('appartement')) {
      return 'Nous avons une variété d\'appartements disponibles dans différentes villes. Pouvez-vous me dire dans quelle ville vous souhaitez séjourner?';
    } else if (lowerCaseUserMessage.includes('prix')) {
      return 'Les prix des appartements varient en fonction de la taille, de la localisation et des équipements. Pouvez-vous me donner plus de détails sur vos préférences?';
    } else if (lowerCaseUserMessage.includes('contact')) {
      return 'Vous pouvez nous contacter par email à contact@example.com ou par téléphone au +123456789.';
    } else if (
      lowerCaseUserMessage.includes('qui êtes-vous') ||
      lowerCaseUserMessage.includes('à qui je parle')
    ) {
      return 'Je suis un assistant virtuel de réservation. Comment puis-je vous aider?';
    } else if (
      lowerCaseUserMessage.includes('besoin d\'informations supplémentaires') ||
      lowerCaseUserMessage.includes('plus de détails')
    ) {
      return 'Bien sûr! N\'hésitez pas à poser vos questions sur nos services, nos tarifs ou toute autre demande.';
    } else if (
      lowerCaseUserMessage.includes('merci') ||
      lowerCaseUserMessage.includes('remercie')
    ) {
      return 'De rien! N\'hésitez pas si vous avez d\'autres questions.';
    } else if (
      lowerCaseUserMessage.includes('annulation') ||
      lowerCaseUserMessage.includes('annuler')
    ) {
      return 'Pour toute demande d\'annulation, veuillez nous contacter directement par email ou téléphone.';
    } else {
      return "Désolé, je ne comprends pas. Pouvez-vous reformuler votre question?";
    }
  };

  return (
    <div className="relative flex flex-col h-screen justify-center items-center top-12">
      <div className="border border-gray-300 rounded-lg w-full max-w-lg overflow-hidden shadow-lg relative">
        <div className="bg-white p-5 relative">
          <div className="absolute top-2 right-2">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col h-96 overflow-y-auto" style={{ width: '300px' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-start' : 'justify-end'
                } mb-2`}
              >
                <div
                  className={`p-2 max-w-md rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gray-200 self-start'
                      : 'bg-blue-500 text-white self-end'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              className="flex-grow p-2 mr-2 border rounded-lg outline-none"
              placeholder="Entrez votre message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleUserMessage();
                }
              }}
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={handleUserMessage}
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingChatbot;
