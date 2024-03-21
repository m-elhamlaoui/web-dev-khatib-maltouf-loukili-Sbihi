import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  IconButton,
  Navbar as MTNavbar,
  MobileNav,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export function Navbar({ brandName, routes }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.slice(0, 6).map(({ name, path, icon, href, target }, index) => (
        <Typography
        key={name}
        as="li"
        variant="medium"
        color="inherit"
        className={`capitalize ${index == 3 ? 'ml-16' : ''}`}
        style={{ fontSize: '1.2rem', fontFamily: "Lucida Sans" }}
      >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
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
    <MTNavbar color="" className="p-3">
  <div className="container mx-auto flex items-center justify-between text-white">
    <Link to="/" className="mt-4">
      <Typography className="w-full text-3xl font-bold text-[#e0fff5]">
        {brandName}
      </Typography>
    </Link>
    <div className="hidden lg:block mt-4">{navList}</div>
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
    className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
    open={openNav}
  >
    <div className="container mx-auto mt-4">{navList}</div>
  </MobileNav>
</MTNavbar>

  );
}

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
