export const randomIndex = (min, max) => {
  // let [min, max] = [min, max];
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};
