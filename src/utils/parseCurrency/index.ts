export const parseCurrency = (value: string): number => {
  if (!value) {
    return 0;
  }

  const cleaned = value.replace(/[^\d,]/g, '');

  const normalized = cleaned.replace(',', '.');

  const result = parseFloat(normalized);
  return isNaN(result) ? 0 : result;
};
