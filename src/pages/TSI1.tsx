import { FunctionComponent, useCallback } from "react";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import { useNavigate } from "react-router-dom";
import RejectedFormContainer1 from "../components/RejectedFormContainer1";
import ValueDateContainer from "../components/ValueDateContainer";
import FilterTag from "../components/FilterTag";
import styles from "./TSI1.module.css";
const TSI1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.tsi}>
      <div className={styles.blueBg} />
      <b className={styles.transferMoney}>Transaction Status</b>
      <img className={styles.clearIcon} alt="" src="/clear.svg" />
      <ContainerCardFormFilter
        status1="Successful"
        payrollStatus="Payroll"
        transactionDate="14 Sep 2021"
        employeeName="Catherine Tay"
        salaryDocumentTitle="123 495096 002    Salary AUG 2021"
        transactionAmount="-3,294.00 SGD"
        transactionDescription="/iconutilitychev-rightthickon-dark.svg"
        andrewTang1234567Top="29.42%"
        andrewTang1234567Bottom="66.69%"
        andrewTang1234567Top1="35.82%"
        andrewTang1234567Color="#319988"
        andrewTang1234567LineHeight="unset"
        iconUtilityChevRightThickColor="#000"
        propTop="35.82%"
        propTop1="43.28%"
        propBottom="47.76%"
      />
      <ContainerCardFormFilter
        status1="Pending authorisation"
        payrollStatus="Payroll"
        transactionDate="14 Sep 2021"
        employeeName="Catherine Tay"
        salaryDocumentTitle="123 495096 002     Salary AUG 2021"
        transactionAmount="-3,294.00 SGD"
        transactionDescription="/iconutilitychev-rightthickon-dark.svg"
        andrewTang1234567Top="34.3%"
        andrewTang1234567Bottom="61.8%"
        andrewTang1234567Top1="22.39%"
        andrewTang1234567Color="rgba(47, 60, 84, 0.8)"
        andrewTang1234567LineHeight="unset"
        iconUtilityChevRightThickColor="#000"
        propTop="40.3%"
        propTop1="47.76%"
        propBottom="43.28%"
      />
      <div className={styles.rectangleParent} onClick={onGroupContainer2Click}>
        <div className={styles.rectangle} />
        <div className={styles.div}>123 495096 002</div>
        <b className={styles.andrewTang1234567}>Requires amendment</b>
        <div className={styles.andrewTang12345671}>{` `}</div>
        <div className={styles.andrewTang12345672}>Overseas TT</div>
        <div className={styles.andrewTang12345673}>11 Sep 2021</div>
        <div className={styles.andrewTang12345674}>
          Paradise Group Holdings Pte Ltd
        </div>
        <div className={styles.div1}>230 940 34980</div>
        <div className={styles.andrewTang12345675}>
          ESOLUTIONS ALPHA PTE LTD
        </div>
        <b className={styles.andrewTang12345676}>-2,290.00 USD</b>
        <img
          className={styles.iconutilitychevRightthick}
          alt=""
          src="/iconutilitychev-rightthickon-dark.svg"
        />
      </div>
      <RejectedFormContainer1 />
      <div className={styles.transferMoneyParent}>
        <b className={styles.transferMoney1}>Administration</b>
        <b className={styles.transferMoney2}>Trade Finance</b>
        <b className={styles.transferMoney3}>Maintenance</b>
        <div className={styles.transferMoneyGroup}>
          <b className={styles.transferMoney4}>Transactions</b>
          <div className={styles.groupChild} />
        </div>
      </div>
      <ValueDateContainer />
      <div className={styles.filterTagParent}>
        <FilterTag
          prop="99+"
          overseasTransfer="All"
          showChip
          filterTagPosition="unset"
          filterTagBorder="1px solid var(--functional-yellow-900)"
        />
        <FilterTag
          prop="14"
          overseasTransfer="Pending authorisation"
          showChip
          filterTagPosition="unset"
          filterTagBorder="1px solid var(--neutrals-grey-100-100)"
        />
        <FilterTag
          prop="88"
          overseasTransfer="In progress"
          showChip
          filterTagPosition="unset"
          filterTagBorder="1px solid var(--neutrals-grey-100-100)"
        />
        <FilterTag
          prop="25"
          overseasTransfer="Successful"
          showChip
          filterTagPosition="unset"
          filterTagBorder="1px solid var(--neutrals-grey-100-100)"
        />
        <FilterTag
          prop="4"
          overseasTransfer="Rejected"
          showChip
          filterTagPosition="unset"
          filterTagBorder="1px solid var(--neutrals-grey-100-100)"
        />
        <FilterTag
          prop="5"
          overseasTransfer="Saved"
          showChip
          filterTagPosition="unset"
          filterTagBorder="1px solid var(--neutrals-grey-100-100)"
        />
        <FilterTag
          prop="+"
          overseasTransfer="+"
          showChip={false}
          filterTagPosition="unset"
          filterTagBorder="1px solid var(--neutrals-grey-100-100)"
        />
      </div>
      <div className={styles.allPayeesParent}>
        <b className={styles.allPayees}>Your Account</b>
        <b className={styles.allPayees1}>Status</b>
        <b className={styles.allPayees2}>Type</b>
        <b className={styles.allPayees3}>Value Date</b>
        <b className={styles.allPayees4}>Payee/Payer Details</b>
        <b className={styles.allPayees5}>Amount</b>
        <img className={styles.infoIcon} alt="" src="/on-dark-bgno.svg" />
        <img className={styles.groupItem} alt="" src="/group-825.svg" />
        <img className={styles.groupInner} alt="" src="/group-825.svg" />
      </div>
    </div>
  );
};

export default TSI1;
