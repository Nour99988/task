import React from "react";
import style from "./propup.module.css";

const PropUp = ({ title, error, close }) => {
  return (
    <div>
      <div className={style.backdrop} onClick={() => close(false)}></div>
      <div className={style.overlay}>
        <div className={style.header}>{title}</div>
        <div className={style.content}>{error}</div>
        <div className={style.footer}>
          <button onClick={() => close(false)}>ok</button>
        </div>
      </div>
    </div>
  );
};

export default PropUp;
