export function randomIntLessThan(max: number): number {
  return Math.floor(Math.random() * max);
}

export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}
