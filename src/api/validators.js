export function isValidEmail(email) {
  // simple pragmatic validation for test purposes
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isIntBetween(value, min, max) {
  return Number.isInteger(value) && value >= min && value <= max;
}
