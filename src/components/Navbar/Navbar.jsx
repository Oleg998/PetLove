import styles from "./navbar.module.css";
import { useState } from "react";
// import UserLogo from "../../assets/UserLogo/UserLogo";
import ButtonOpen from "../../assets/ButtonOpen/ButtonOpen";
import Logo from "../../assets/Logo/Logo";
import ButtonClose from "../../assets/ButtonClose/ButtonClose"
import MobMenu from "../MobMenu/Mobmenu";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navlist}>
          <div className={styles.logo_img}>
            <Logo
              color="var(--white) "
              styleText="logoHeaderText"
            />
          </div>

          <MobMenu activeMenu={openMenu} />
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className={styles.menuBtn}
          >
            {openMenu ? <ButtonClose /> : <ButtonOpen fill="var(--white)" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
