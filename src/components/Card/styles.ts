import {Colors, Dimens} from "@constants";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: Dimens.dimen_8,
    shadowColor: Colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 3
  }
});

export default styles;
