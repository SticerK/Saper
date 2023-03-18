export function mines() {
  const random = Math.floor(Math.random() * 20) + 1;
  if (random < 16) return false;
  return true;
}
