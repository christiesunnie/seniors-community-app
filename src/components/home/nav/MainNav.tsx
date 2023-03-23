import { NavLink } from "react-router-dom";
import Header from "../header/Header";

const MainNav = () => {
  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>
            <NavLink to="/residents">Residents List</NavLink>
          </li>
          <li>
            <NavLink to="/programs">Programs List</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
