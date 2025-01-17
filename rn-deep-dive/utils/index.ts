export const generateRandomNumber = (min: number, max: number, excludeNum: number): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber === excludeNum ? generateRandomNumber(min, max, excludeNum) : randomNumber;
};
