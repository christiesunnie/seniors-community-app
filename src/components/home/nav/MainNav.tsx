import { NavLink } from "react-router-dom";
import Header from "../header/Header";

import styles from "../../home/Home.module.css";

const MainNav = () => {
  return (
    <div className={styles["home-section"]}>
      <Header />
      <nav className="ui inverted teal segment">
        <ul className="ui inverted secondary pointing menu">
          <li className="active item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="item">
            <NavLink to="/residents">Residents List</NavLink>
          </li>
          <li className="item">
            <NavLink to="/programs">Programs List</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
