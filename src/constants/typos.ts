import { horizontalScale } from '@utils/mixins.util';

export const FontSizes = {
  font_10:horizontalScale(10),
  font_12:horizontalScale(12),
  font_14:horizontalScale(14),
  font_16:horizontalScale(16),
  font_18:horizontalScale(18),
  font_20:horizontalScale(20),
  font_24:horizontalScale(24),
  font_32:horizontalScale(32),
  font_48:horizontalScale(48),
} as const;

export const Fonts = {
  PRIMARY_BOLD: 'PTSans-Bold',
  PRIMARY_REGULAR: 'PTSans-Regular',
  PRIMARY_ITALIC:'PTSans-Italic',
  PRIMARY_BOLD_ITALIC:'PTSans-BoldItalic',
} as const;
