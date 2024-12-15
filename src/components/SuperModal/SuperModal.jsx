import React from 'react'
import style from './SuperModal.module.scss'
const SuperModal = ({children,close}) => {
  return (
    <div className={style.modalContainer} onClick={() => {
        document.body.style.overflowY = "auto";
        close(false);
      }}>
      <div className={style.modalBody} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default SuperModal