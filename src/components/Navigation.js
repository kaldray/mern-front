import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink
          className={(navLink) => (navLink.isActive ? "active" : "")}
          to="/addmovies"
        >
          Ajouter des films
        </NavLink>
        <NavLink
          className={(navLink) => (navLink.isActive ? "active" : "")}
          to="/"
        >
          Liste de film à voir
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
