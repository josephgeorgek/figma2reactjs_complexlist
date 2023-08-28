import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Chip from "./Chip";
import styles from "./FilterTag.module.css";

type FilterTagType = {
  prop?: string;
  overseasTransfer?: string;
  showChip?: boolean;

  /** Style props */
  filterTagPosition?: CSSProperties["position"];
  filterTagBorder?: CSSProperties["border"];
};

const FilterTag: FunctionComponent<FilterTagType> = ({
  prop,
  overseasTransfer,
  showChip,
  filterTagPosition,
  filterTagBorder,
}) => {
  const filterTagStyle: CSSProperties = useMemo(() => {
    return {
      position: filterTagPosition,
      border: filterTagBorder,
    };
  }, [filterTagPosition, filterTagBorder]);

  return (
    <div className={styles.filterTag} style={filterTagStyle}>
      <Chip prop="8" chipPosition="unset" />
      <div className={styles.overseasTransfer}>{overseasTransfer}</div>
    </div>
  );
};

export default FilterTag;
