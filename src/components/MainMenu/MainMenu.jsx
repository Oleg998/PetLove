import Loader from "../../assets/Loader/Loader";
import Logo from "../../assets/Logo/Logo";
import styles from "./main-menu.module.css";

import { useState, useEffect } from "react";

const MeinMenu = () => {
  const [bgImage, setBgImage] = useState("");
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    const updateBackground = () => {
      const isRetina = window.devicePixelRatio > 1;

      if (window.innerWidth >= 1280) {
        setBgImage(
          isRetina
            ? "/img/background/background-desktop@2x.jpg"
            : "/img/background/background-desktop.jpg"
        );
      } else if (window.innerWidth >= 768) {
        setBgImage(
          isRetina
            ? "/img/background/background-tablet@2x.jpg"
            : "/img/background/background-tablet.jpg"
        );
      } else {
        setBgImage(
          isRetina
            ? "/img/background/background-mobile@2x.jpg"
            : "/img/background/background-mobile.jpg"
        );
      }
    };

    updateBackground();

    const handleResize = () => {
      clearTimeout(window.bgTimeout);
      window.bgTimeout = setTimeout(updateBackground, 150);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("devicePixelRatioChange", updateBackground);

    const loaderTimeout = setTimeout(() => {
      setIsLoaderVisible(false);
    }, 3150);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("devicePixelRatioChange", updateBackground);
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <div
      className={styles.bgImage}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.container}>
        {isLoaderVisible && <Loader />}
        {!isLoaderVisible && (
          <Logo
            className={styles.logo}
            styleText="mainLogoText"
            size="big"
          />
        )}
      </div>
    </div>
  );
};

export default MeinMenu;
