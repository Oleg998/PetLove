import styles from "./button-close.module.css";

const ButtonClose = ({ fill = "var(--dark-gray)" }) => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <svg className={styles.icon}>
      <use
        className={styles.icon_menu}
        href={`${basePath}img/sprite.svg#icon-not`} 
        style={{ stroke: fill, fill: "inherit" }}
      />
    </svg>
  );
};

export default ButtonClose;

