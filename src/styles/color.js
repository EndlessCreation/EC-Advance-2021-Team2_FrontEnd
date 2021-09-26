const colorData = {
  background: {
    1: '#F6F6F6',
  },
  brand: {
    1: '#30541A',
    2: '#45712B',
    3: '#55962E',
    4: '#55962E',
    5: '#A2EA7A',
  },
  font: {
    white: '#FCFCFC',
    correct: '#138700',
    error: '#E70000',
    placeholder: '#A8A8A8',
    1: '#151515',
    2: '#282828',
    3: '#494949',
    4: '#A8A8A8',
  },

  grey: {
    // index: 0,
    1: '#A9A9A9',
    2: '#D2D2D2',
    3: '#EAEAEA',
    4: '#F1F1F1',
  },
  red: {
    // index: 1,
    1: '#DE4E47',
    2: '#FF9F9C',
    3: '#FFB9B7',
    4: '#FFDEDD',
  },

  pink: {
    // index: 2,
    1: '#C5426D',
    2: '#C5426D',
    3: '#FFB8D0',
    4: '#FFE4EB',
  },
  orange: {
    // index: 3,
    1: '#ED8537',
    2: '#FFB869',
    3: '#FFCC94',
    4: '#FFECD1',
  },
  yellow: {
    // index: 4,
    1: '#F1C300',
    2: '#FFE05F',
    3: '#FFEE97',
    4: '#FDF3C5',
  },
  blue: {
    // index: 5,
    1: '#4589DF',
    2: '#73B5FC',
    3: '#A7D1FF',
    4: '#DBEDFF',
  },
  indigo: {
    // index: 6,
    1: '#4962E3',
    2: '#8E9FEF',
    3: '#BECAFF',
    4: '#E3E9FF',
  },
  violet: {
    // index: 7,
    1: '#7352E9',
    2: '#B19AFF',
    3: '#CDBEFF',
    4: '#EFEAFF',
  },
  rime: {
    // index: 8,
    1: '#75A635',
    2: '#ADE05A',
    3: '#D0EE9F',
    4: '#ECFACD',
  },
  teal: {
    // index: 9,
    1: '#26AE74',
    2: '#8BF0C7',
    3: '#BDFFE4',
    4: '#D7FFF1',
  },
};

export const TIM_Color = (type, choice) => {
  const color = colorData[`${type}`][`${choice}`];
  console.log(color);
  if (!color) {
    return '#FFFFFF';
  } else {
    return color;
  }
};
