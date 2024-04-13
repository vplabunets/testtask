export const gradientValue = (color: string) => {
  switch (color) {
    case 'green':
      return ['#86D694FF', '#2E7C07FF'];
    case 'orange':
      return ['#FDC830FF', '#F37335FF'];
    default:
      return ['#86D694FF', '#2E7C07FF'];
  }
};
