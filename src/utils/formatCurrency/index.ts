export const formatCurrency = (value: string | number): string => {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'number') {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  }

  const numericOnly = String(value).replace(/\D/g, '');
  if (numericOnly === '') {
    return '';
  }

  const padded = numericOnly.padStart(3, '0');
  const integerPart = padded.slice(0, -2);
  const decimalPart = padded.slice(-2);

  const amount = parseFloat(`${integerPart}.${decimalPart}`);
  if (isNaN(amount)) {
    return '';
  }

  return amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
};
