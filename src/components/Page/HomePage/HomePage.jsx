import Navbar from "../../Navbar/Navbar";
import styles from "./home-page.module.css";

const HomePage = () => {
  const basePath = import.meta.env.BASE_URL; 

  return (
    <>
      <Navbar customClass={styles.whiteLink}  />
      <section className={styles.hero}>
        <div className={styles.hero_container}>
          <h1 className={styles.titel}>
            Take good <span className={styles.titel_span}>care</span> of your
            small pets
          </h1>
          <p className={styles.sub_titel}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
        <div className={styles.img_container}>
          <picture>
            <source
              srcSet={`${basePath}img/hero/heroMob.jpg 1x, ${basePath}img/hero/heroMob@2.jpg 2x`}
              media="(max-width: 768px)"
              loading="lazy"
            />
            <source
              srcSet={`${basePath}img/hero/heroTab.jpg 1x, ${basePath}img/hero/heroTab@2.jpg 2x`}
              media="(min-width: 769px) and (max-width: 1280px)"
              loading="lazy"
            />
            <source
              srcSet={`${basePath}img/hero/heroDesk.jpg 1x, ${basePath}img/hero/heroDesk@2.jpg 2x`}
              media="(min-width: 1281px)"
              loading="lazy"
            />
            <img
              src={`${basePath}img/hero/heroMob.jpg`}
              srcSet={`${basePath}img/hero/heroMob@2.jpg 2x`}
              alt="hero_img"
              loading="lazy"
            />
          </picture>
        </div>
      </section>
    </>
  );
};

export default HomePage;
