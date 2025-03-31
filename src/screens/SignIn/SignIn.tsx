import {Container, Text} from "@components";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import styles from "./styles";
import {Colors, Dimens, FontSizes} from "@constants";
import {SignInForm} from "./Form";
import {useAuthStore, useAuthStoreActions} from "@stores";

function SignInScreen(): React.ReactElement {
  const {submitting} = useAuthStore();
  const {submitSignIn} = useAuthStoreActions();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("@assets/images/sign_in_bg.png")}
        style={styles.background}
      />

      <Container
        alignItems="center"
        padding={Dimens.dimen_48}
        gap={Dimens.dimen_16}>
        <Image source={require("@assets/images/logo.png")} />
        <Text
          fontWeight="bold"
          fontSize={FontSizes.font_23}
          color={Colors.white}>
          Sign in
        </Text>
        <Text color={Colors.white}>Please sign in to continue</Text>
      </Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({
            ios: "padding",
            android: undefined
          })}>
          <SignInForm submitting={submitting} onSubmit={submitSignIn} />
        </KeyboardAvoidingView>
      </ScrollView>
      <Container
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        gap={Dimens.dimen_4}>
        <Text color={Colors.white} fontSize={FontSizes.font_14}>
          Don't have account yet?
        </Text>
        <Pressable>
          <Text
            fontWeight="sm-bold"
            color={Colors.white}
            fontSize={FontSizes.font_14}>
            SIGN UP
          </Text>
        </Pressable>
      </Container>
    </SafeAreaView>
  );
}

export default SignInScreen;
