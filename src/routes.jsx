

import { AboutUs, ContactUs,Apartments, Home, ProductPage, Profile, SignIn, SignUp } from "@/pages";


export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
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
    name: "Apartments",
    path: "/apartments",
    element: <Apartments />
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
},
{
  name: "Apartment Page(temporary)",
  path: "/productPage",
  element: <ProductPage />
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
];

export default routes;
