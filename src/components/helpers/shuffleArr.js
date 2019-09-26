export const shuffleArr = function(array) {
  const newArr = [...array];
  let currentIndex = newArr.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = newArr[currentIndex];
    newArr[currentIndex] = newArr[randomIndex];
    newArr[randomIndex] = temporaryValue;
  }

  return newArr;
};
