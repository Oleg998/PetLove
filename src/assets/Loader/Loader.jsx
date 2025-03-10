import styles from "./loader.module.css";
import { Oval } from "react-loader-spinner";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useState, useEffect } from "react";
const Loader = () => {
  const [size, setSize] = useState();

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 768) {
        setSize(396);
      } else {
        setSize(270);
      }
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className={styles.conteiner}>
      <Oval
        strokeWidth={0.4}
        visible={true}
        height={size}
        width={size}
        color="rgba(255, 255, 255, 0.3)"
        secondaryColor="rgba(0, 0, 0, 0)"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <ProgressBar />
    </div>
  );
};

export default Loader;
