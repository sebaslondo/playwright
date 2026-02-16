export function pickRandom(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Cannot pick random item from empty array");
  }
  return array[Math.floor(Math.random() * array.length)];
}
