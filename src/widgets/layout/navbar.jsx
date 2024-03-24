import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IconButton, Navbar as MTNavbar, MobileNav, Typography } from "@material-tailwind/react";
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
    <ul className="mb-1 mt-1 flex flex-col gap-1 text-sm lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
      {routes.slice(1, 7).map(({ name, path, icon, href, target }, index) => (
        <Typography
          key={name}
          as="li"
          variant="medium"
          color="inherit"
          className={`capitalize ${index === 3 ? 'ml-4 lg:ml-8' : ''}`}
          style={{ fontSize: '0.9rem', fontFamily: "Lucida Sans" }}
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[14px] h-[14px] opacity-75 mr-1",
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
                  className: "w-[14px] h-[14px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="blue-gray">
      <div className="container mx-auto flex items-center justify-between text-[#1b1f1e]">
        <Link to="/" className="mt-1"> {/* Changed margin-top from mt-2 to mt-1 */}
          <Typography className="w-full text-lg font-bold text-[#1b1f1e]"> {/* Changed font-size from text-lg to text-lg */}
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block mt-1">{navList}</div> {/* Changed margin-top from mt-1 to mt-1 */}
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-4 w-4" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-4 w-4" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-1 pt-1 pb-1 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto mt-1">{navList}</div> {/* Changed margin-top from mt-1 to mt-1 */}
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
