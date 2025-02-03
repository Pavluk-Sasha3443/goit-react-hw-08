import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const buildNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div className={css.navContainer}>
      <nav className={css.nav}>
        <NavLink className={buildNavLinkClass} to="/login">
          Login
        </NavLink>
        <NavLink className={buildNavLinkClass} to="/register">
          Register
        </NavLink>
      </nav>
    </div>
  );
};
export default AuthNav;
