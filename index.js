const sum = (fromN, toN) => {
  return fromN === toN ? fromN : fromN + sum(fromN + 1, toN);
};

module.exports = sum;
