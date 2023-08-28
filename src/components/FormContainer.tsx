import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ButtonTypePrimarySecondar from "./ButtonTypePrimarySecondar";
import styles from "./FormContainer.module.css";
const FormContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSWIFTDetailsContainerClick = useCallback(() => {
    navigate("/tsi");
  }, [navigate]);

  return (
    <div className={styles.swiftDetails} onClick={onSWIFTDetailsContainerClick}>
      <div className={styles.rectangle} />
      <div className={styles.fill} />
      <div className={styles.inputTextParent}>
        <div className={styles.inputText}>
          <p className={styles.jpMorganChase}>JP Morgan Chase Bank</p>
          <p className={styles.parkAvenueNew}>
            270 Park Avenue, New York, NY 10017
          </p>
          <p className={styles.parkAvenueNew}>United States of America</p>
        </div>
        <div className={styles.inputText1}>CHASUS33</div>
        <div className={styles.label}>Payee bank</div>
        <div className={styles.label1}>Payee SWIFT code</div>
      </div>
      <div className={styles.inputTextGroup}>
        <div className={styles.inputText2}>Me (OUR)</div>
        <div className={styles.label2}>Charges paid by</div>
        <div className={styles.inputText3}>40.00 SGD</div>
        <div className={styles.label3}>Charges</div>
      </div>
      <div className={styles.inputTextContainer}>
        <div className={styles.inputText4}>OCBCFAST180604334301</div>
        <div className={styles.label2}>OCBC reference no.</div>
        <div className={styles.inputText5}>ahd32-fbk389-jhd50-df898y</div>
        <div className={styles.inputText6}>COPY</div>
        <div className={styles.inputText7}>COPY</div>
        <div className={styles.label5}>UETR reference no.</div>
        <div className={styles.inputText8}>Invoice #21345</div>
        <div className={styles.label6}>Transfer details</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.inputText3}>1.00 SGD = 1.54 USD</div>
        <div className={styles.label3}>Exchange rate</div>
        <div className={styles.inputText2}>3,785.00 SGD</div>
        <div className={styles.label2}>Amount debited</div>
      </div>
      <ButtonTypePrimarySecondar
        buttonLabel="Recall"
        buttonLabel1="Amend"
        buttonTypePrimarySecondarWidth="375px"
        buttonTypePrimarySecondarPosition="absolute"
        buttonTypePrimarySecondarTop="680px"
        buttonTypePrimarySecondarLeft="857px"
      />
    </div>
  );
};

export default FormContainer;
