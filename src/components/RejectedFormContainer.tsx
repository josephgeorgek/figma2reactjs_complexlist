import { FunctionComponent } from "react";
import styles from "./RejectedFormContainer.module.css";
const RejectedFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.andrewTang1234567Parent}>
      <b className={styles.andrewTang1234567}>Successful</b>
      <div className={styles.rectangle} />
      <div className={styles.andrewTang12345671}>{` `}</div>
      <div className={styles.andrewTang12345672}>FAST</div>
      <div className={styles.andrewTang12345673}>11 Sep 2021</div>
      <div className={styles.andrewTang1234567Container}>
        <p className={styles.michaelTan}>{`Michael Tan `}</p>
        <p className={styles.fastTransferPaynow}>
          FAST Transfer PayNow UEN • PayNow name: Michael Tan
        </p>
      </div>
      <div className={styles.andrewTang1234567Container1}>
        <p className={styles.michaelTan}>ESOLUTIONS ALPHA PTE LTD</p>
        <p className={styles.fastTransferPaynow}>123 495096 002</p>
      </div>
      <b className={styles.andrewTang12345674}>-3,294.00 SGD</b>
      <img
        className={styles.iconutilitychevRightthick}
        alt=""
        src="/iconutilitychev-rightthickon-dark.svg"
      />
      <b className={styles.andrewTang12345675}>Rejected</b>
    </div>
  );
};

export default RejectedFormContainer;
