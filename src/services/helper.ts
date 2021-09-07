export const toCurrency = (num: string) => {
  return parseInt(num)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
