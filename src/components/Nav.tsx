import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { FiX } from "react-icons/fi";

export const Nav = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };
  return (
    <>
      <button
        className="bg-color-accent-light m-4 p-4 rounded-xl absolute right-0 mt-0 text-xl"
        onClick={toggleNav}
      >
        <CiMenuBurger />
      </button>
      <div
        className={`bg-color-nav-dark w-40 h-full absolute top-0 right-0 transition-opacity ${
          isNavVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          className="bg-color-accent-light m-4 p-4 rounded-xl absolute right-0 text-xl"
          onClick={toggleNav}
        >
          <FiX />
        </button>
        <nav className={`${isNavVisible ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-3 p-4 mt-16">
            <NavLink
              className={
                "text-color-accent-light [&.active]:text-color-text-light"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={
                "text-color-accent-light [&.active]:text-color-text-light"
              }
              to="/budgetregister"
            >
              Budgetregister
            </NavLink>
            <NavLink
              className={
                "text-color-accent-light [&.active]:text-color-text-light"
              }
              to="/budgetentries"
            >
              Einträge
            </NavLink>
            <NavLink
              className={
                "text-color-accent-light [&.active]:text-color-text-light"
              }
              to="/budgettabelle"
            >
              Tabelle
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};
