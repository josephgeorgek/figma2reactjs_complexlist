import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateActiveOnDarkBGNo1.module.css";

type StateActiveOnDarkBGNo1Type = {
  buttonLabel?: string;

  /** Style props */
  stateActiveOnDarkBGNoWidth?: CSSProperties["width"];
  stateActiveOnDarkBGNoPosition?: CSSProperties["position"];
  stateActiveOnDarkBGNoFlex?: CSSProperties["flex"];
};

const StateActiveOnDarkBGNo1: FunctionComponent<StateActiveOnDarkBGNo1Type> = ({
  buttonLabel,
  stateActiveOnDarkBGNoWidth,
  stateActiveOnDarkBGNoPosition,
  stateActiveOnDarkBGNoFlex,
}) => {
  const stateActiveOnDarkBGNo1Style: CSSProperties = useMemo(() => {
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
      style={stateActiveOnDarkBGNo1Style}
    >
      <div className={styles.buttonLabel}>{buttonLabel}</div>
    </div>
  );
};

export default StateActiveOnDarkBGNo1;
