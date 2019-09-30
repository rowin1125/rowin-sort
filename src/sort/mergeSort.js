export const mergeSort = list => {
  const newList = [...list];
  const len = newList.length;
  // an array of length == 1 is technically a sorted list
  if (len == 1) {
    return newList;
  }

  // get mid item
  const middleIndex = Math.ceil(len / 2);

  // split current list into two: left and right list
  let leftList = newList.slice(0, middleIndex);
  let rightList = newList.slice(middleIndex, len);

  leftList = mergeSort(leftList);
  rightList = mergeSort(rightList);

  return merge(leftList, rightList);
};

// Solve the sub-problems and merge them together
function merge(leftList, rightList) {
  const sorted = [];
  while (leftList.length > 0 && rightList.length > 0) {
    const leftItem = leftList[0];
    const rightItem = rightList[0];
    if (leftItem > rightItem) {
      sorted.push(rightItem);
      rightList.shift();
    } else {
      sorted.push(leftItem);
      leftList.shift();
    }
  }

  // if left list has items, add what is left to the results
  while (leftList.length !== 0) {
    sorted.push(leftList[0]);
    leftList.shift();
  }

  // if right list has items, add what is left to the results
  while (rightList.length !== 0) {
    sorted.push(rightList[0]);
    rightList.shift();
  }

  // merge the left and right list
  return sorted;
}
