import axios from 'axios';

export const promisifiedDataHelper = arr => {
  return arr.map(async endpoint => {
    const res = await axios.get(endpoint);
    return res.data;
  });
};
