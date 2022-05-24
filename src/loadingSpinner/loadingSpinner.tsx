import React from "react";
import styles from "./loadingSpinner.module.css";

interface ILoadingSpinner {
  loading: boolean;
  text?: string;
}

const LoadingSpinner: React.FC<ILoadingSpinner> = (props) => {
  return (
    <div aria-live="polite">
      {props.loading ? (
        <>
          <div aria-label={props.text} className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p aria-hidden={true}>{props.text}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

LoadingSpinner.defaultProps = {
  loading: false,
  // text: "Loading...",
};

export default LoadingSpinner;
