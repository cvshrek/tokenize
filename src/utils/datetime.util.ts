import dayjs from 'dayjs';

export const formatDateTime = (
  date?: string | Date,
  format?: string,
): string => {
  if (!date) { return '';}
  return dayjs(date).format(format);
};
