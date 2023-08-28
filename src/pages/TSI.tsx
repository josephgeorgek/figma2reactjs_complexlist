import { FunctionComponent } from "react";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import RejectedFormContainer from "../components/RejectedFormContainer";
import FormContainer from "../components/FormContainer";
import SuccessfulFormContainer from "../components/SuccessfulFormContainer";
import ValueDateContainer from "../components/ValueDateContainer";
import FilterTag from "../components/FilterTag";
import styles from "./TSI.module.css";
const TSI: FunctionComponent = () => {
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
        salaryDocumentTitle="123 495096 002   •  Salary AUG 2021"
        transactionAmount="-3,294.00 SGD"
        transactionDescription="/iconutilitychev-rightthickon-dark.svg"
      />
      <ContainerCardFormFilter
        status1="Pending authorisation"
        payrollStatus="Payroll"
        transactionDate="14 Sep 2021"
        employeeName="Catherine Tay"
        salaryDocumentTitle="123 495096 002   •  Salary AUG 2021"
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
      <RejectedFormContainer />
      <FormContainer />
      <ContainerCardFormFilter
        status1="Requires amendment"
        payrollStatus="Overseas TT"
        transactionDate="11 Sep 2021"
        employeeName="Paradise Group Holdings Pte Ltd"
        salaryDocumentTitle="230 940 34980"
        transactionAmount="-2,290.00 USD"
        transactionDescription="/iconutilitychev-rightthickon-dark1.svg"
        andrewTang1234567Top="39.13%"
        andrewTang1234567Bottom="56.98%"
        andrewTang1234567Top1="25.37%"
        andrewTang1234567Color="#f5a623"
        andrewTang1234567LineHeight="15px"
        iconUtilityChevRightThickColor="rgba(47, 60, 84, 0.6)"
        propTop="40.3%"
        propTop1="44.78%"
        propBottom="46.27%"
      />
      <div className={styles.transferMoneyParent}>
        <b className={styles.transferMoney1}>Administration</b>
        <b className={styles.transferMoney2}>Trade Finance</b>
        <b className={styles.transferMoney3}>Maintenance</b>
        <div className={styles.transferMoneyGroup}>
          <b className={styles.transferMoney4}>Transactions</b>
          <div className={styles.groupChild} />
        </div>
      </div>
      <SuccessfulFormContainer />
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

export default TSI;
