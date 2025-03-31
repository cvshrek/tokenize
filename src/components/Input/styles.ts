import {Colors, Dimens, Fonts, FontSizes} from "@constants";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1.5,
    height: Dimens.dimen_48,
    paddingHorizontal: Dimens.dimen_8,
    borderRadius: 6
  },
  input: {
    paddingHorizontal: Dimens.dimen_8,
    fontSize: FontSizes.font_16,
    fontFamily: Fonts.PRIMARY_REGULAR,
    flexGrow: 1,
    color: Colors.darkGrey
  }
});
export default styles;
