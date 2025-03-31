import {Container, Text} from "@components";
import {Colors, Fonts, FontSizes} from "@constants";
import Icon from "@react-native-vector-icons/material-design-icons";
import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
  BottomTabNavigationOptions
} from "@react-navigation/bottom-tabs";
import {MarketScreen} from "@screens";
import React, {ReactNode} from "react";

export type BottomTabParamList = {
  HomeScreen: undefined;
  MarketScreen: undefined;
  WalletScreen: undefined;
  PortfolioScreen: undefined;
  MoreScreen: undefined;
};

type TabIconProps = {
  color: string;
  size: number;
};
interface TabOption {
  label?: string;
  icon: (props: TabIconProps) => ReactNode;
  button?: (props: BottomTabBarButtonProps) => ReactNode;
}

const renderTabIcon = (
  icon:
    | "home"
    | "chart-line"
    | "wallet"
    | "briefcase"
    | "dots-horizontal-circle"
) => {
  const TabIcon = (props: TabIconProps) => (
    <Icon size={props.size} name={icon} color={props.color} />
  );
  return TabIcon;
};

const setTabOptions = (options: TabOption): BottomTabNavigationOptions => ({
  tabBarLabel: options.label,
  tabBarIcon: options.icon,
  tabBarActiveTintColor: Colors.primary,
  tabBarStyle: {
    backgroundColor: Colors.white
  },
  tabBarLabelStyle: {
    fontFamily: Fonts.PRIMARY_REGULAR,
    fontSize: FontSizes.font_13
  },
  tabBarShowLabel: true
});

const BottomTabStack = createBottomTabNavigator<BottomTabParamList>();

function BottomNavigatior(): React.ReactElement {
  return (
    <BottomTabStack.Navigator
      initialRouteName="MarketScreen"
      screenOptions={{
        headerShown: false
      }}>
      <BottomTabStack.Screen
        name="HomeScreen"
        options={setTabOptions({icon: renderTabIcon("home"), label: "Home"})}
        component={MarketScreen}
      />
      <BottomTabStack.Screen
        name="MarketScreen"
        options={setTabOptions({
          icon: renderTabIcon("chart-line"),
          label: "Markets"
        })}
        component={MarketScreen}
      />
      <BottomTabStack.Screen
        name="WalletScreen"
        options={setTabOptions({
          icon: renderTabIcon("wallet"),
          label: "Wallet"
        })}
        component={MarketScreen}
      />
      <BottomTabStack.Screen
        name="PortfolioScreen"
        options={setTabOptions({
          icon: renderTabIcon("briefcase"),
          label: "Portfolio"
        })}
        component={MarketScreen}
      />
      <BottomTabStack.Screen
        name="MoreScreen"
        options={setTabOptions({
          icon: renderTabIcon("dots-horizontal-circle"),
          label: "More"
        })}
        component={MarketScreen}
      />
    </BottomTabStack.Navigator>
  );
}

export default BottomNavigatior;
