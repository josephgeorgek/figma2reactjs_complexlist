import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContainerCardFormFilter.module.css";

type ContainerCardFormFilterType = {
  status1?: string;
  payrollStatus?: string;
  transactionDate?: string;
  employeeName?: string;
  salaryDocumentTitle?: string;
  transactionAmount?: string;
  transactionDescription?: string;

  /** Style props */
  andrewTang1234567Top?: CSSProperties["top"];
  andrewTang1234567Bottom?: CSSProperties["bottom"];
  andrewTang1234567Top1?: CSSProperties["top"];
  andrewTang1234567Color?: CSSProperties["color"];
  andrewTang1234567LineHeight?: CSSProperties["lineHeight"];
  iconUtilityChevRightThickColor?: CSSProperties["color"];
  propTop?: CSSProperties["top"];
  propTop1?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
};

const ContainerCardFormFilter: FunctionComponent<
  ContainerCardFormFilterType
> = ({
  status1,
  payrollStatus,
  transactionDate,
  employeeName,
  salaryDocumentTitle,
  transactionAmount,
  transactionDescription,
  andrewTang1234567Top,
  andrewTang1234567Bottom,
  andrewTang1234567Top1,
  andrewTang1234567Color,
  andrewTang1234567LineHeight,
  iconUtilityChevRightThickColor,
  propTop,
  propTop1,
  propBottom,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: andrewTang1234567Top,
      bottom: andrewTang1234567Bottom,
    };
  }, [andrewTang1234567Top, andrewTang1234567Bottom]);

  const andrewTang1234567Style: CSSProperties = useMemo(() => {
    return {
      top: andrewTang1234567Top1,
      color: andrewTang1234567Color,
      lineHeight: andrewTang1234567LineHeight,
    };
  }, [
    andrewTang1234567Top1,
    andrewTang1234567Color,
    andrewTang1234567LineHeight,
  ]);

  const salaryAUG2021Style: CSSProperties = useMemo(() => {
    return {
      color: iconUtilityChevRightThickColor,
    };
  }, [iconUtilityChevRightThickColor]);

  const andrewTang12345671Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const iconUtilityChevRightThickStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
      bottom: propBottom,
    };
  }, [propTop1, propBottom]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.rectangle} />
      <b className={styles.andrewTang1234567} style={andrewTang1234567Style}>
        {status1}
      </b>
      <div className={styles.andrewTang12345671}>{` `}</div>
      <div className={styles.andrewTang12345672}>{payrollStatus}</div>
      <div className={styles.andrewTang12345673}>{transactionDate}</div>
      <div className={styles.andrewTang12345674}>{employeeName}</div>
      <div className={styles.salaryAug2021} style={salaryAUG2021Style}>
        {salaryDocumentTitle}
      </div>
      <div className={styles.andrewTang12345675}>ESOLUTIONS ALPHA PTE LTD</div>
      <div className={styles.div}>123 495096 002</div>
      <b className={styles.andrewTang12345676} style={andrewTang12345671Style}>
        {transactionAmount}
      </b>
      <img
        className={styles.iconutilitychevRightthick}
        alt=""
        src={transactionDescription}
        style={iconUtilityChevRightThickStyle}
      />
    </div>
  );
};

export default ContainerCardFormFilter;
