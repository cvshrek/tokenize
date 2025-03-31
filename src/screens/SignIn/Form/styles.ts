import {Dimens} from "@constants";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 6,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1.5,
    width: Dimens.dimen_20,
    height: Dimens.dimen_20,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
