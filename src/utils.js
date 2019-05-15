const getRandomNum = (min, max) => {
  const newMax = max + 1;
  return Math.floor(Math.random() * (newMax - min)) + min;
};

export default getRandomNum;
