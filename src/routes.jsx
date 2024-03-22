import { Home, Profile, SignIn, AboutUs, ContactUs, SignUp } from "@/pages";


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
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
    
  },
  
];

export default routes;
