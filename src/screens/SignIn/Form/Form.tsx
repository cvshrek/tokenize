import {Button, Container, Input, Text} from "@components";
import {Colors, Dimens, FontSizes} from "@constants";
import Icon from "@react-native-vector-icons/material-design-icons";
import {IAuthenticationRequest} from "@services/dtos/auth";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Pressable} from "react-native";
import styles from "./styles";

interface SignInFormProps {
  submitting?: boolean;
  onSubmit: (values: IAuthenticationRequest) => void;
  onForgotPasswordPress?: () => void;
}

function SignInForm({
  submitting,
  onSubmit,
  onForgotPasswordPress
}: SignInFormProps): React.ReactElement {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleEyePress = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleCheckRemember = () => {
    setRememberMe(!rememberMe);
  };

  const {control, handleSubmit} = useForm<IAuthenticationRequest>({
    defaultValues: {
      email: "",
      password: "",
      captcha: "internal_testing_captcha"
    }
  });

  return (
    <Container gap={Dimens.dimen_72} padding={Dimens.dimen_16}>
      <Container gap={Dimens.dimen_16}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Required"
          }}
          render={({field, formState: {errors}}) => (
            <Input
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Email"
              keyboardType="email-address"
              leftContent={
                <Icon
                  name="account"
                  size={Dimens.dimen_20}
                  color={Colors.white}
                />
              }
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Required"
          }}
          render={({field, formState: {errors}}) => (
            <Input
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Password"
              secureTextEntry={!visiblePassword}
              leftContent={
                <Icon
                  name="lock-outline"
                  size={Dimens.dimen_20}
                  color={Colors.white}
                />
              }
              rightContent={
                <Pressable
                  onPress={handleEyePress}
                  hitSlop={{right: 48, left: 48}}>
                  <Icon
                    name={visiblePassword ? "eye-off-outline" : "eye-outline"}
                    size={Dimens.dimen_20}
                    color={Colors.white}
                  />
                </Pressable>
              }
            />
          )}
        />
        <Container
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Container
            flexDirection="row"
            alignItems="center"
            gap={Dimens.dimen_8}>
            <Pressable
              onPress={handleCheckRemember}
              hitSlop={{right: 48, left: 48}}
              style={styles.checkbox}>
              {rememberMe ? (
                <Icon
                  name="check-bold"
                  size={Dimens.dimen_16}
                  color={Colors.white}
                />
              ) : (
                <Container />
              )}
            </Pressable>
            <Text fontSize={FontSizes.font_14} color={Colors.white}>
              Remember me
            </Text>
          </Container>
          <Pressable>
            <Text fontSize={FontSizes.font_14} color={Colors.white}>
              Forgot your password
            </Text>
          </Pressable>
        </Container>
      </Container>
      <Button
        defaultRadius
        title="SIGN IN"
        onPress={handleSubmit(onSubmit)}
        loading={submitting}
      />
    </Container>
  );
}

export default SignInForm;
