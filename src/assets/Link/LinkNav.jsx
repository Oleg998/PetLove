import styles from "./link.module.css";
import { NavLink } from "react-router-dom";

const LinkNav = ({ linkName, navigation, customClass }) => {
  return (
    <NavLink
      to={navigation}
      className={`${styles.link} ${customClass}` }     >
      {linkName}
    </NavLink>
  );
};

export default LinkNav;
