import style from "./link.module.css"
import { NavLink } from "react-router"


const LinkNav = ({ linkName, navigation }) => {
  return <NavLink to={navigation} className={style.link}>{linkName}</NavLink>;
};

export default LinkNav;