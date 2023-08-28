import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Chip.module.css";

type ChipType = {
  prop?: string;

  /** Style props */
  chipPosition?: CSSProperties["position"];
};

const Chip: FunctionComponent<ChipType> = ({ prop, chipPosition }) => {
  const chipStyle: CSSProperties = useMemo(() => {
    return {
      position: chipPosition,
    };
  }, [chipPosition]);

  return (
    <div className={styles.chip} style={chipStyle}>
      <b className={styles.b}>{prop}</b>
    </div>
  );
};

export default Chip;
