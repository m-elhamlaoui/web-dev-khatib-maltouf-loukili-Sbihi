import React from 'react';
import { Footer } from '@/widgets/layout';

const PageTitle = ({ section, heading, children }) => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-800 mb-2">{section}</h1>
    <h2 className="text-2xl font-semibold text-gray-600 mb-8">{heading}</h2>
    <p className="text-gray-700">{children}</p>
  </div>
);

const Input = ({ variant, size, label }) => (
  <input
    type="text"
    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-300 ${
      variant === 'outlined' ? 'border-gray-300' : ''
    } ${size === 'lg' ? 'text-lg' : 'text-base'}`}
    placeholder={label}
  />
);

const Textarea = ({ variant, size, label, rows }) => (
  <textarea
    rows={rows}
    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-300 ${
      variant === 'outlined' ? 'border-gray-300' : ''
    } ${size === 'lg' ? 'text-lg' : 'text-base'}`}
    placeholder={label}
  />
);

const Checkbox = ({ label, containerProps }) => (
  <div {...containerProps}>
    <label className="inline-flex items-center">
      <input type="checkbox" className="form-checkbox text-orange-300" />
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

const Button = ({ variant, size, className, fullWidth, children }) => (
  <button
    className={`bg-orange-300 text-white px-6 py-2 rounded-md hover:bg-orange-300 transition duration-300 ${
      variant === 'gradient' ? 'bg-gradient-to-r from-orange-300 to-orange-300' : ''
    } ${size === 'lg' ? 'text-lg' : 'text-base'} ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    {children}
  </button>
);

export function ContactUs() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-40 px-4">
        <PageTitle section="Nous contacter" heading="Vous souhaitez travailler avec nous ?">
          Remplissez ce formulaire et nous vous répondrons dans les 24 heures.
        </PageTitle>
        <div className="max-w-3xl mx-auto border border-gray-300 rounded-lg p-8">
          <form className="w-full">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Nom complet" />
              <Input variant="outlined" size="lg" label="Adresse e-mail" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <span className="flex items-center font-normal">
                  J'accepte les
                  <a href="#" className="font-medium transition-colors hover:text-gray-900">
                    &nbsp;Conditions générales
                  </a>
                </span>
              }
              containerProps={{ className: '-ml-2.5' }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
