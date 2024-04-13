export const formattedCurrency = (number: number, currency: string): string => {
  switch (currency) {
    case 'USD':
      return number.toLocaleString('en-US', {
        style: 'currency',
        currency: currency,
      });
    case 'EUR':
      return number.toLocaleString('en-US', {
        style: 'currency',
        currency: currency,
      });
    default:
      return number.toLocaleString('en-US', {
        style: 'currency',
        currency: currency,
      });
  }
};
