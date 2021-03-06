export function randomIntLessThan(max: number): number {
  return Math.floor(Math.random() * max);
}

export function randomIntInterval(min: number, max: number): number {
    // min inclus, max exclu
  return Math.floor(Math.random() * (max - min) + min);
}

export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}
