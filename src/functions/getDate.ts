export const gettingDate = (number: number) : string => {
  const date = new Date(number);
  return date.getDate() + "/" + (date.getMonth() + 1);
};
