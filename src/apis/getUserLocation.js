import request from './request';

// 사용자의 위치 정보를 가져오는 함수
export default async function getUserLocation(x, y) {
  const URL = `https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${x}&y=${y}&input_coord=WGS84&output_coord=TM`;
  const res = await request(URL, {
    headers: {
      Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
    },
  });

  return res;
}
