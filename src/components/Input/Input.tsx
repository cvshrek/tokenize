import {Container} from "@components/Container";
import {TextInput, TextInputProps, ViewStyle} from "react-native";
import styles from "./styles";
import {Colors} from "@constants";
import {ReactNode} from "react";

interface TextFieldProps extends TextInputProps {
  wraperStyle?: ViewStyle;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

const Input: React.FC<TextFieldProps> = props => (
  <Container
    style={[styles.wrapper, props.wraperStyle]}
    flexDirection="row"
    alignItems="center"
    justifyContent="center">
    {props.leftContent}
    <TextInput
      style={[styles.input]}
      underlineColorAndroid="transparent"
      placeholderTextColor={Colors.white}
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
    />
    {props.rightContent}
  </Container>
);

export default Input;
