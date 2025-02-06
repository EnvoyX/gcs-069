import vansData from '../utility/vans';

export const getDataVans = (id) => {
  const datas = vansData;

  const filteredDatas = id ? datas.filter((data) => data.id === id) : datas;

  console.log(filteredDatas);
  return filteredDatas;
};
