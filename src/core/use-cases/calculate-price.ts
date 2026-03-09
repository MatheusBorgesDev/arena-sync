export interface CalculatePriceInput {
  durationMinutes: number;
  pricePerHourCents: number;
}

export function calculatePrice(input: CalculatePriceInput): number {
  const hours = input.durationMinutes / 60;
  return Math.round(hours * input.pricePerHourCents);
}
