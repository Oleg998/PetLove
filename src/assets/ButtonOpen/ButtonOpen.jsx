import styles from "./button-open.module.css"


const ButtonOpen = ({ fill = "var(--dark-gray)" }) => {
  return (
    <svg className={styles.icon}>
      <use
        className={styles.icon_menu}
        href={`/img/sprite.svg#icon-burger`}
        style={{ stroke: fill, fill: "inherit" }}
      />
    </svg>
  );
};


export default ButtonOpen