import request from './request';

// 근접 측정소 목록을 조회하는 함수
export default async function getNearbyStation(tmX, tmY) {
  const URL = `http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${tmX}&tmY=${tmY}&returnType=json&serviceKey=${process.env.REACT_APP_AIRKOREA_API_KEY}`;
  const res = await request(URL);
  return res;
}
