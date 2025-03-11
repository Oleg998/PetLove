import styles from "./button-open.module.css";

const ButtonOpen = ({ fill = "var(--dark-gray)" }) => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <svg className={styles.icon}>
      <use
        className={styles.icon_menu}
        href={`${basePath}img/sprite.svg#icon-burger`} 
        style={{ stroke: fill, fill: "inherit" }}
      />
    </svg>
  );
};

export default ButtonOpen;
