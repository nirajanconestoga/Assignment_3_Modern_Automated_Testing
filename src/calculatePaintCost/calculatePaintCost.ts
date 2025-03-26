export default function calculatePaintCost(paintRequired: number, costPerLiter: number): number {
  if (paintRequired < 0 || costPerLiter < 0) {
    return 0;
  }
  return paintRequired * costPerLiter;
}