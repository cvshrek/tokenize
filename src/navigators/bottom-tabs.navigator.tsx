import {Colors, Dimens, Fonts, FontSizes} from "@constants";
import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
  BottomTabNavigationOptions
} from "@react-navigation/bottom-tabs";
import {HomeScreen, MarketScreen} from "@screens";
import React, {ReactNode} from "react";
import HomeLogo from "@assets/icons/home.svg";
import MarketIcon from "@assets/icons/market.svg";
import WalletIcon from "@assets/icons/wallet.svg";
import PortfolioIcon from "@assets/icons/portfolio.svg";
import MoreIcon from "@assets/icons/more.svg";

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
  focused: boolean;
};
interface TabOption {
  label?: string;
  icon: (props: TabIconProps) => ReactNode;
  button?: (props: BottomTabBarButtonProps) => ReactNode;
}

const setTabOptions = (options: TabOption): BottomTabNavigationOptions => ({
  tabBarLabel: options.label,
  tabBarIcon: options.icon,
  tabBarActiveTintColor: Colors.primary,
  tabBarStyle: {
    backgroundColor: Colors.white,
    paddingVertical: Dimens.dimen_8
  },
  tabBarLabelStyle: {
    fontFamily: Fonts.PRIMARY_REGULAR,
    fontSize: FontSizes.font_13
  },
  tabBarShowLabel: true
});

const BottomTabStack = createBottomTabNavigator<BottomTabParamList>();

const getIconColor = (isFocused: boolean): string =>
  isFocused ? Colors.primary : Colors.grey_500;

function BottomNavigatior(): React.ReactElement {
  return (
    <BottomTabStack.Navigator
      initialRouteName="MarketScreen"
      screenOptions={{
        headerShown: false
      }}>
      <BottomTabStack.Screen
        name="HomeScreen"
        options={setTabOptions({
          icon: ({focused}) => <HomeLogo stroke={getIconColor(focused)} />,
          label: "Home"
        })}
        component={HomeScreen}
      />
      <BottomTabStack.Screen
        name="MarketScreen"
        options={setTabOptions({
          icon: ({focused}) => <MarketIcon stroke={getIconColor(focused)} />,
          label: "Markets"
        })}
        component={MarketScreen}
      />
      <BottomTabStack.Screen
        name="WalletScreen"
        options={setTabOptions({
          icon: ({focused}) => <WalletIcon stroke={getIconColor(focused)} />,
          label: "Wallet"
        })}
        component={MarketScreen}
      />
      <BottomTabStack.Screen
        name="PortfolioScreen"
        options={setTabOptions({
          icon: ({focused}) => <PortfolioIcon stroke={getIconColor(focused)} />,
          label: "Portfolio"
        })}
        component={MarketScreen}
      />
      <BottomTabStack.Screen
        name="MoreScreen"
        options={setTabOptions({
          icon: ({focused}) => <MoreIcon stroke={getIconColor(focused)} />,
          label: "More"
        })}
        component={MarketScreen}
      />
    </BottomTabStack.Navigator>
  );
}

export default BottomNavigatior;
