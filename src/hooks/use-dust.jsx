import { useState, useEffect } from 'react';

export default function useDust({ sidoName }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dusts, setDusts] = useState([]);

  const fetchData = async (sidoName) => {
    //const apiKey ='wMsbZliJBe7k0zf8bAGfpRo3d06Nx8DW4mfmLN907kMnrusJCzrAtYv9SY8Va6AJhj9uLTxmOjwq0cx%2BBwV2%2FQ%3D%3D';
    //const apiKey = process.env.REACT_APP_AIRKOREA_API_KEY;
    const url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${process.env.REACT_APP_AIRKOREA_API_KEY}&returnType=json&numOfRows=5&sidoName=${sidoName}&ver=1.0`;
    console.log(url);

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      const data = await response.json();
      setDusts(data.response.body?.items || []);
    } catch (error) {
      setError('데이터 전송 시 에러가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(sidoName);
  }, [sidoName]);

  return [loading, error, dusts];
}

/**
 * useDust 훅 리팩토링
API 호출 로직과 관련된 기능들을 함수로 분리하여 가독성을 높입니다.
비동기 코드를 async/await으로 변경하여 더 깔끔하게 작성합니다.
API 호출에 필요한 sidoName 값이 변경되지 않으면 데이터를 다시 불러오지 않도록 useEffect를 최적화합니다.
 */
