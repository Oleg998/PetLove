import style from "./mobmenu.module.css";
import LinkNav from "../../assets/Link/LinkNav";

const MobMenu = ({ activeMenu, customClass  }) => {
  console.log(activeMenu);
  const links = [
    { name: "News", path: "/news" },
    { name: "Find pet", path: "/find" },
    { name: "Our friends", path: "/friends" },
  ];

  const authLinks = [
    { name: "Log In", path: "/login" },
    { name: "Registration", path: "/registration" },
  ];

  return (
    <div
      className={`${style.menu} ${activeMenu ? style.active : ""}`}
      aria-hidden={!activeMenu}
    >
      <nav
        className={style.navList}
        role="navigation"
      >
        <ul className={style.linkList}>
          {links.map(({ name, path }) => (
            <li key={path}>
              <LinkNav
                customClass={customClass}
                linkName={name}
                navigation={path}
              />
            </li>
          ))}
        </ul>
      </nav>
      <ul className={style.login}>
        {authLinks.map(({ name, path }) => (
          <li key={path}>
            <LinkNav
              customClass={customClass}
              linkName={name}
              navigation={path}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobMenu;
