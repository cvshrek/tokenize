import {horizontalScale} from "@utils/mixins.util";

export const FontSizes = {
  font_10: horizontalScale(10),
  font_12: horizontalScale(12),
  font_13: horizontalScale(13),
  font_14: horizontalScale(14),
  font_16: horizontalScale(16),
  font_18: horizontalScale(18),
  font_20: horizontalScale(20),
  font_23: horizontalScale(23),
  font_32: horizontalScale(32),
  font_48: horizontalScale(48)
} as const;

export const Fonts = {
  PRIMARY_BOLD: "Roboto-Bold",
  PRIMARY_REGULAR: "Roboto-Regular",
  PRIMARY_SEMIBOLD: "Roboto-SemiBold"
} as const;
