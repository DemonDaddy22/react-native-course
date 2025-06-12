export const getLocalFormattedDate = (date: string | number | Date): string => {
  const dateObj: Date | number = new Date(date);
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }
  return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
};
