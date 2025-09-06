export function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return re.test(String(email).toLowerCase());
}

export function isValidPhone(phone) {
  // allows only digits and must be exactly 10
  return /^\d{10}$/.test(String(phone).trim());
}
