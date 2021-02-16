/**
 * Conversor de numero comum para valor.
 * @constructor
 * @param {number} value - Valor a ser convertido.
 * @param {string} moeda - Para qual moeda converter.
 */
export function formatPrice(number: number, currency: string) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(number);
}
