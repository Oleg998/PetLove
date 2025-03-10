import Navbar from "../../Navbar/Navbar";
import style from "./home-page.module.css";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className={style.hero}>
        <div className={style.hero_container}>
          <h1 className={style.titel}>
            Take good <span className={style.titel_span}>care</span> of your
            small pets
          </h1>
          <p className={style.sub_titel}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
        <div className={style.img_container} >
          <picture>
            <source
              srcSet="/img/hero/heroMob.jpg 1x, /img/hero/heroMob@2.jpg 2x"
              media="(max-width: 768px)"
              loading="lazy"
            />
            <source
              srcSet="/img/hero/heroTab.jpg 1x, /img/hero/heroTab@2.jpg 2x"
              media="(min-width: 769px) and (max-width: 1280px)"
              loading="lazy"
            />
            <source
              srcSet="/img/hero/heroDesk.jpg 1x, /img/hero/heroDesk@2.jpg 2x"
              media="(min-width: 1281px)"
              loading="lazy"
            />
            <img
              src="/img/hero/heroMob.jpg"
              srcSet="/img/hero/heroMob@2.jpg 2x"
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
