import styles from "./button-close.module.css";

const ButtonClose = ({ fill = "var(--dark-gray)" }) => {
  return (
    <svg className={styles.icon}>
      <use
        className={styles.icon_menu}
        href={`/img/sprite.svg#icon-not`}
        style={{ stroke: fill, fill: "inherit" }}
      />
    </svg>
  );
};

export default ButtonClose;
