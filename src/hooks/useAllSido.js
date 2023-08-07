import { useState, useEffect } from 'react';
import { DataFetchError } from '../constants/networkErrors';

export default function useAllSido(sidoName) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dusts, setDusts] = useState([]);

  // 시도별 실시간 측정정보 목록을 조회하는 함수
  const fetchDustData = async (sidoName) => {
    const url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${process.env.REACT_APP_AIRKOREA_API_KEY}&returnType=json&numOfRows=5&sidoName=${sidoName}`;
    //const url = `/data/dust.json`;

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      const data = await response.json();
      setDusts(data.response.body.items || []);
    } catch (error) {
      setError(`${sidoName} ${DataFetchError}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDustData(sidoName);
  }, [sidoName]);

  return [loading, error, dusts];
}
