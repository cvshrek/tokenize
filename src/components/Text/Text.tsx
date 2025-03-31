import {Colors, Dimens, FontSizes, Fonts} from "@constants";
import React from "react";
import {Text, TextProps} from "react-native";

export interface CustomTextProps extends TextProps {
  fontSize?: number;
  color?: string;
  fontWeight?: "regular" | "bold" | "sm-bold";
  align?: "left" | "center" | "right";
}

const getFontFamily = (props: CustomTextProps): string => {
  if (props.fontWeight === "bold") return Fonts.PRIMARY_BOLD;
  if (props.fontWeight === "sm-bold") return Fonts.PRIMARY_SEMIBOLD;
  return Fonts.PRIMARY_REGULAR;
};

const createTextStyle = (props: CustomTextProps) => ({
  fontFamily: getFontFamily(props),
  fontSize: props.fontSize ?? FontSizes.font_16,
  textAlign: props.align,
  color: props.color ?? Colors.darkGrey,
  flexShrink: 1,
  lineHeight: props.fontSize
    ? props.fontSize + Dimens.dimen_4
    : FontSizes.font_16 + Dimens.dimen_4
});

const CustomText: React.FC<CustomTextProps> = props => {
  return (
    <Text {...props} style={[createTextStyle(props), props.style]}>
      {props.children}
    </Text>
  );
};

export default React.memo(CustomText);
