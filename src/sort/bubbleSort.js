const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const time = list => {
  if (list.length < 15) {
    return 125;
  } else if (list.length >= 15 && list.length < 30) {
    return 75;
  } else if (list.length >= 30 && list.length < 50) {
    return 50;
  } else if (list.length >= 50 && list.length < 100) {
    return 20;
  } else return 7;
};

export const bubbleSort = async arr => {
  const newList = [...arr];

  for (let i = 0; i < newList.length - 1; i++) {
    let change = false;
    for (let j = 0; j < newList.length - (i + 1); j++) {
      // Slow down the function to see the transition of bars
      await sleep(time(newList));
      if (newList[j] > newList[j + 1]) {
        change = true;

        // Getting the svg attribute
        let elem1 = document.querySelector(`.color-${newList[j]}`)
          .parentElement;
        let elem1Data = elem1.attributes[1].value
          .replace(/\D/g, '')
          .replace(/(^0+)/g, '');

        let elem2 = document.querySelector(`.color-${newList[j + 1]}`)
          .parentElement;
        let elem2Data = elem2.attributes[1].value
          .replace(/\D/g, '')
          .replace(/(^0+)/g, '');

        // Setting switching the values if needed
        elem1.setAttribute(`transform`, `translate(0, ${elem2Data})`);
        elem2.setAttribute(`transform`, `translate(0, ${elem1Data})`);

        // Setting the new values
        [newList[j], newList[j + 1]] = [newList[j + 1], newList[j]];
      }
    }
    if (!change) break;
  }
  await sleep(1000);
  alert('sorting done 🥳! Check out your array');

  return newList;
};
