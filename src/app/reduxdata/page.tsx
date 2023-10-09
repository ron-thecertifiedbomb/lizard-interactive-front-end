"use client";
import styles from "../styles.module.css";
import ReduxStateCheckerComponent from "../components/reduxstatecheckercomponent/reduxstatecheckercomponent";

const ReduxData = () => {
  return (
    <div className={styles.page}>
      <ReduxStateCheckerComponent />
    </div>
  );
};

export default ReduxData;
