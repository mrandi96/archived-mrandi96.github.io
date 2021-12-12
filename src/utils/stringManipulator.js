export const capitalize = (input) => {
  if (!!input && typeof input === 'string') {
    const lowercased = input.toLowerCase();
    return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
  }
  return input;
}
