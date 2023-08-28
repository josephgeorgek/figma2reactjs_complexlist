import { FunctionComponent } from "react";
import styles from "./ValueDateContainer.module.css";
const ValueDateContainer: FunctionComponent = () => {
  return (
    <div className={styles.valueDateParent}>
      <div className={styles.valueDate}>
        <b className={styles.transferMoney}>Value date</b>
        <b className={styles.transferMoney1}>Most Recent</b>
        <div className={styles.dividersTextFieldDefaul}>
          <div className={styles.fill} />
        </div>
        <img
          className={styles.iconsutilitycalendar}
          alt=""
          src="/iconsutilitycalendar1.svg"
        />
      </div>
      <div className={styles.search}>
        <div className={styles.rectangle} />
        <div className={styles.searchPayees}>
          Search for transaction type / payee name / amount / status
        </div>
        <img className={styles.searchIcon} alt="" src="/search.svg" />
      </div>
      <div className={styles.swiftUetr}>
        <div className={styles.yourAugustStatment}>Cheque Enquiry</div>
      </div>
      <div className={styles.swiftUetr1}>
        <div className={styles.yourAugustStatment}>SWIFT UETR Tracking</div>
      </div>
    </div>
  );
};

export default ValueDateContainer;
