import { FC, ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType = BUTTON_TYPE_CLASSES.base,
  isLoading,
  ...otherProps
}) => {
  let CustomButton;

  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.google:
      CustomButton = GoogleSignInButton;
      break;
    case BUTTON_TYPE_CLASSES.inverted:
      CustomButton = InvertedButton;
      break;
    default:
      CustomButton = BaseButton;
  }

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;

