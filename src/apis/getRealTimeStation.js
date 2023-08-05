import request from './request';

// 측정소별 실시간 측정정보를 조회하는 함수
export default async function getRealTimeStation(stationName) {
  const URL = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${stationName}&dataTerm=daily&numOfRows=1&pageNo=1&returnType=json&serviceKey=${process.env.REACT_APP_AIRKOREA_API_KEY}`;
  const res = await request(URL);
  return res;
}
