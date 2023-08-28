import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateActiveOnDarkBGNo1 from "./StateActiveOnDarkBGNo1";
import StateActiveOnDarkBGNo from "./StateActiveOnDarkBGNo";
import styles from "./ButtonTypePrimarySecondar.module.css";

type ButtonTypePrimarySecondarType = {
  buttonLabel?: string;
  buttonLabel1?: string;

  /** Style props */
  buttonTypePrimarySecondarWidth?: CSSProperties["width"];
  buttonTypePrimarySecondarPosition?: CSSProperties["position"];
  buttonTypePrimarySecondarTop?: CSSProperties["top"];
  buttonTypePrimarySecondarLeft?: CSSProperties["left"];
};

const ButtonTypePrimarySecondar: FunctionComponent<
  ButtonTypePrimarySecondarType
> = ({
  buttonLabel,
  buttonLabel1,
  buttonTypePrimarySecondarWidth,
  buttonTypePrimarySecondarPosition,
  buttonTypePrimarySecondarTop,
  buttonTypePrimarySecondarLeft,
}) => {
  const buttonTypePrimarySecondarStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonTypePrimarySecondarWidth,
      position: buttonTypePrimarySecondarPosition,
      top: buttonTypePrimarySecondarTop,
      left: buttonTypePrimarySecondarLeft,
    };
  }, [
    buttonTypePrimarySecondarWidth,
    buttonTypePrimarySecondarPosition,
    buttonTypePrimarySecondarTop,
    buttonTypePrimarySecondarLeft,
  ]);

  return (
    <div
      className={styles.buttonTypeprimarySecondar}
      style={buttonTypePrimarySecondarStyle}
    >
      <div className={styles.secondaryButtonParent}>
        <StateActiveOnDarkBGNo1
          buttonLabel="Button label"
          stateActiveOnDarkBGNoWidth="unset"
          stateActiveOnDarkBGNoPosition="unset"
          stateActiveOnDarkBGNoFlex="1"
        />
        <StateActiveOnDarkBGNo
          buttonLabel="Button label"
          stateActiveOnDarkBGNoWidth="unset"
          stateActiveOnDarkBGNoPosition="unset"
          stateActiveOnDarkBGNoFlex="1"
        />
      </div>
    </div>
  );
};

export default ButtonTypePrimarySecondar;
