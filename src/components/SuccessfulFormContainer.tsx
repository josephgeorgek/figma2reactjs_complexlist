import { FunctionComponent } from "react";
import styles from "./SuccessfulFormContainer.module.css";
const SuccessfulFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <img className={styles.groupChild} alt="" src="/group-841.svg" />
      <div className={styles.groupItem} />
      <div className={styles.labelCopy}>Submitted by ADRIANLIM</div>
      <div className={styles.fromOcbcBank}>Pending authorisation</div>
      <div className={styles.usd14512}>15 Nov 2021, 09:10:00 SGT</div>
      <div className={styles.groupInner} />
      <div className={styles.labelCopy1}>Authorised by JENNYTAN</div>
      <div className={styles.fromOcbcBank1}>Authorised</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.labelCopy2}>
        Payee bank is unable to process due to incorrect payee name. Please
        amend your transfer details.
      </div>
      <b className={styles.usd145121}>Requires amendment</b>
      <div className={styles.groupChild1} />
      <div className={styles.fromOcbcBank2}>In progress</div>
      <div className={styles.fromOcbcBank3}>Successful</div>
      <div className={styles.usd145122}>15 Nov 2021, 09:10:00 SGT</div>
    </div>
  );
};

export default SuccessfulFormContainer;
