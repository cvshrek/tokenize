import React from "react";
import {View, ViewProps, ViewStyle} from "react-native";

interface ContainerProps extends ViewProps {
  containerStyle?: ViewStyle;
  flex?: number;
  padding?: number;
  margin?: number;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: number;
  backgroundColor?: string;
}

const createContainerStyle = (props: ContainerProps) => ({
  flex: props.flex,
  padding: props.padding,
  flexDirection: props.flexDirection,
  margin: props.margin,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  gap: props.gap,
  flexShrink: 1,
  backgroundColor: props.backgroundColor,
  ...(props.style && typeof props.style === "object" ? props.style : {})
});

const Container: React.FC<ContainerProps> = props => {
  return (
    <View style={createContainerStyle(props)} {...props}>
      {props.children}
    </View>
  );
};

export default React.memo(Container);
