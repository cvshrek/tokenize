import {Text, CustomTextProps} from "@components/Text";
import {Colors, Dimens, FontSizes} from "@constants";
import {
  ActivityIndicator,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import styles from "./styles";
import {memo, ReactNode} from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "default" | "outline" | "clear";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  titleStyle?: TextStyle;
  size?: ButtonSize;
  buttonStyle?: TouchableOpacityProps["style"];
  defaultRadius?: boolean;
  type?: ButtonType;
  leftContent?: ReactNode;
  color?: string;
  titleProps?: CustomTextProps;
  loading?: boolean;
}

const getButtonHeight = (size?: ButtonSize): number => {
  if (size === "lg") return Dimens.dimen_56;
  if (size === "sm") return Dimens.dimen_40;
  return Dimens.dimen_48;
};

const getButtonBorder = (type?: ButtonType): number => {
  if (type === "outline") return 0.5;
  return 0;
};

const getButtonBackgroundColor = (color?: string): string =>
  color ?? Colors.secondary;

const createButtonStyle = (
  props: ButtonProps
): TouchableOpacityProps["style"] => ({
  height: getButtonHeight(props.size),
  backgroundColor: props.disabled
    ? Colors.grey
    : getButtonBackgroundColor(props.color),
  borderRadius: Dimens.dimen_6,
  borderWidth: getButtonBorder(props?.type),
  borderColor: props.color
});

const Button: React.FC<ButtonProps> = ({...props}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, createButtonStyle(props), props.buttonStyle]}>
      {props.leftContent}
      <Text
        color={props.disabled ? Colors.white : Colors.blue}
        fontSize={FontSizes.font_14}
        fontWeight="sm-bold"
        {...props.titleProps}>
        {props.title}
      </Text>
      {props.loading ? (
        <ActivityIndicator color={Colors.white} size="small" />
      ) : null}
    </TouchableOpacity>
  );
};

export default memo(Button);
