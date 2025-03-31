import {ReactNode} from "react";
import {Pressable, View, ViewStyle} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import Icon from "@react-native-vector-icons/material-design-icons";
import {Colors, Dimens, FontSizes} from "@constants";
import {CustomTextProps, Text} from "@components/Text";
import {SafeAreaView} from "react-native-safe-area-context";
import {Container} from "@components/Container";

interface HeaderProps {
  title?: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  centerComponent?: ReactNode;
  onBackPress?: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
  titleAlign?: "left" | "center";
  hideBackButton?: boolean;
  titleProps?: CustomTextProps;
}

const Header: React.FC<HeaderProps> = props => {
  const navigation = useNavigation();
  const renderBackButton = () => {
    return navigation.canGoBack() && !props.hideBackButton ? (
      <Pressable
        onPress={props.onBackPress ?? navigation.goBack}
        style={styles.backButton}
        hitSlop={{
          top: Dimens.dimen_48,
          right: Dimens.dimen_48,
          left: Dimens.dimen_48,
          bottom: Dimens.dimen_48
        }}>
        <Icon name="chevron-left" size={32} color={Colors.darkGrey} />
      </Pressable>
    ) : null;
  };
  return (
    <SafeAreaView
      edges={["top"]}
      style={{backgroundColor: props.backgroundColor}}>
      <Container style={[styles.container, props.style]}>
        {props.leftComponent ?? renderBackButton()}
        <Container style={{flexGrow: 1}}>
          <Text
            align={props.titleAlign ?? "center"}
            color={Colors.darkGrey}
            fontWeight="sm-bold"
            fontSize={FontSizes.font_16}
            {...props.titleProps}>
            {props.title}
          </Text>
        </Container>
        <Container>{props.rightComponent}</Container>
      </Container>
    </SafeAreaView>
  );
};

export default Header;
