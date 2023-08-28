import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateActiveOnDarkBGNo.module.css";

type StateActiveOnDarkBGNoType = {
  buttonLabel?: string;

  /** Style props */
  stateActiveOnDarkBGNoWidth?: CSSProperties["width"];
  stateActiveOnDarkBGNoPosition?: CSSProperties["position"];
  stateActiveOnDarkBGNoFlex?: CSSProperties["flex"];
};

const StateActiveOnDarkBGNo: FunctionComponent<StateActiveOnDarkBGNoType> = ({
  buttonLabel,
  stateActiveOnDarkBGNoWidth,
  stateActiveOnDarkBGNoPosition,
  stateActiveOnDarkBGNoFlex,
}) => {
  const stateActiveOnDarkBGNoStyle: CSSProperties = useMemo(() => {
    return {
      width: stateActiveOnDarkBGNoWidth,
      position: stateActiveOnDarkBGNoPosition,
      flex: stateActiveOnDarkBGNoFlex,
    };
  }, [
    stateActiveOnDarkBGNoWidth,
    stateActiveOnDarkBGNoPosition,
    stateActiveOnDarkBGNoFlex,
  ]);

  return (
    <div
      className={styles.stateactiveOnDarkBgno}
      style={stateActiveOnDarkBGNoStyle}
    >
      <div className={styles.buttonLabel}>{buttonLabel}</div>
    </div>
  );
};

export default StateActiveOnDarkBGNo;
