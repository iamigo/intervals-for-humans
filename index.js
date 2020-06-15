const multiplier = {
  ms: 1,
  s: 1000,
  m: 1000 * 60,
  h: 1000 * 60 * 60,
  d: 1000 * 60 * 60 * 24,
  w: 1000 * 60 * 60 * 24 * 7,
};

const intervalRegex = /^(\d+)(ms|[smhdw])$/;

module.exports = (str) => {
  if (!str || typeof str !== 'string' || str.length < 2) return false;

  const matched = intervalRegex.exec(str.trim().toLowerCase());

  // must be positive number
  if (matched && matched.length > 1 && matched[1] > 0) {
    return matched[1] * multiplier[matched[2]];
  }

  return false;
}
