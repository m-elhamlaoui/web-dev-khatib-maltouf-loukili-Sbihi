import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-1 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1  font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="bg-black rounded-lg">
      <MTNavbar color="transparent" className="py-2 px-4">
        <div className="container  flex items-center justify-between text-white">
          <Link to="/">
            <Typography className="mr-1 ml-2 cursor-pointer  font-bold">
              {brandName}
            </Typography>
          </Link>
          <div className="hidden lg:block">{navList}</div>
          <div className="hidden gap-2 lg:flex">
            <a href="/sign-up" target="_blank">
              <Button variant="text" size="sm" color="white" fullWidth>
                Sign Up
              </Button>
            </a>
            {React.cloneElement(action, {
              className: "hidden lg:inline-block",
            })}
          </div>
          <IconButton
            variant="text"
            size="sm"
            color="white"
            className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <MobileNav
          className="rounded-b-lg bg-white px-4 pt-2 pb-4 text-blue-gray-900"
          open={openNav}
        >
          <div className="container mx-1">
            {navList}
            <a href="/sign-up" target="_blank" className="mb-1 block">
              <Button variant="text" size="sm" fullWidth>
                Sign Up
              </Button>
            </a>
            {React.cloneElement(action, {
              className: "w-full block",
            })}
          </div>
        </MobileNav>
      </MTNavbar>
    </div>
  );
}

Navbar.defaultProps = {
  brandName: "RentalHub",
  action: (
    <a href="/sign-in" target="_blank">
      <Button variant="gradient" size="sm" fullWidth>
        Sign In
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
