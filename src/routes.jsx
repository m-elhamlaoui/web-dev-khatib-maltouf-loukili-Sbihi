

import { AboutUs, ContactUs,Apartments, Home, ProductPage, Profile, SignIn, SignUp } from "@/pages";
import BookingChatbot from "@/pages/bookingchatbot";


export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Apartments",
    path: "/apartments",
    element: <Apartments />
  },
  
  {
    name: "Contact Us",
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    name: "About Us",
    path: "/about-us",
    element: <AboutUs />,
    
  },
  
   
  
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
},

  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Apartment Page(temporary)",
    path: "/productPage",
    element: <ProductPage />
  },
  {
    name: "Chatbot",
    path: "/bookingchatbot",
    element: <BookingChatbot />
  },
];

export default routes;
