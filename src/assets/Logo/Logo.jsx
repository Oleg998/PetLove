import styles from "./logo.module.css";

const Logo = ({ color = "var(--accent)", styleText, size }) => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className={styles.logoContainer}>
      <span className={`${styles.text} ${styles[styleText]}`}>petl</span>
      <svg className={`${styles.icon} ${styles[size]}`}>
        <use
          href={`${basePath}img/sprite.svg#icon-logo`}
          style={{ stroke: "inherit", fill: color }}
        />
      </svg>
      <span className={`${styles.text} ${styles[styleText]}`}>ve</span>
    </div>
  );
};

export default Logo;

