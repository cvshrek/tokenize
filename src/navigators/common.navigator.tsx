import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainNavigatior from "./main.navigator";
import AuthNavigator from "./auth.navigator";
import {useAuthStore, useAuthStoreActions} from "@stores";
import {useEffect} from "react";
import {ActivityIndicator, DeviceEventEmitter} from "react-native";
import {Colors, Keys} from "@constants";
import {Container} from "@components";

const Stack = createNativeStackNavigator();

function CommonNavigator(): React.ReactElement {
  const {authenticated, authenticating} = useAuthStore();
  const {authorizeUser, logout} = useAuthStoreActions();

  useEffect(() => {
    authorizeUser();
    DeviceEventEmitter.addListener(Keys.user_unauthorized, () => {
      logout();
    });
  }, []);

  if (authenticating) {
    return (
      <Container
        flex={1}
        backgroundColor={Colors.primary}
        justifyContent="center">
        <ActivityIndicator color={Colors.white} />
      </Container>
    );
  }

  return (
    <NavigationContainer>
      {authenticated ? <MainNavigatior /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default CommonNavigator;
