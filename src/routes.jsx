import { Home, Profile, SignIn, SignUp } from "@/pages";

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
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "About Us",
    path: "/sign-up",
    element: <SignUp />,
  },
  
];

export default routes;
