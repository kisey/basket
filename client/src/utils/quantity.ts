export const parseQuantity = (quantity: string): number => {
  const parsed = parseFloat(quantity);
  return isNaN(parsed) ? 0 : parsed;
};
