let videos = [
  {
    "url": "HSsqzzuGTPo",
    "start": 39,
    "end": 13120
  },
  {
    "url": "VPJW9X7Agsw",
    "start": 42,
    "end": 4408
  },
  {
    "url": "Lo9SOZr5aQU",
    "start": 37,
    "end": 5837
  },
  {
    "url": "VV9oVC5B8YY",
    "start": 48,
    "end": 4698
  },
  {
    "url": "W5ZxDYFMLFo",
    "start": 31,
    "end": 4324
  },
  {
    "url": "1jWCXJfxHQM",
    "start": 22,
    "end": 2976
  },
  {
    "url": "uZClGt1xS1A",
    "start": 36,
    "end": 4247
  },
  {
    "url": "52zmpRT5RFg",
    "start": 47,
    "end": 3062
  },
  {
    "url": "6_P8RUqGQbM",
    "start": 23,
    "end": 3911
  },
  {
    "url": "D6tC1pyrsTM",
    "start": 49,
    "end": 4856
  },
  {
    "url": "fW-mixqTTwE",
    "start": 22,
    "end": 10781
  },
  {
    "url": "WNCl-69POro",
    "start": 49,
    "end": 17918
  }
];

const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const videoArray = shuffle(videos);

export default videoArray;