import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";
import {SignInScreen} from "@screens";

export type AuthNavigationParamList = {
  SignInScreen: undefined;
};

export type AuthNavigationProp =
  NativeStackNavigationProp<AuthNavigationParamList>;

const AuthStack = createNativeStackNavigator<AuthNavigationParamList>();

function AuthNavigator(): React.ReactElement {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SignInScreen">
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
