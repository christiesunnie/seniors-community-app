import styles from "./Header.module.css";
const Header = () => {
  return (
    <h1 className={`${styles["heading-h1"]} ui header`}>
      Welcome to the senior community platform
    </h1>
  );
};

export default Header;
