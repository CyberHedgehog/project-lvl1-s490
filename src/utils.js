const getRandomNum = (min, max) => {
  const newMax = max + 1;
  return Math.floor(Math.random() * (newMax - min)) + min;
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export { getRandomNum, isEven };
