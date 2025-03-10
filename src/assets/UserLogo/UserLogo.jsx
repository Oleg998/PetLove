import styles from "./user-logo.module.css"

const UserLogo = () => {
    return (
      <svg className={styles.icon}>
        <use
          className={styles.icon_menu}
          href={`/img/sprite.svg#icon-user`}
        />
      </svg>
    );
}

export default UserLogo