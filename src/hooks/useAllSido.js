import { useState, useEffect } from 'react';
import { DataFetchError } from '../constants/networkErrors';

export default function useAllSido(sidoName, pageNo) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dusts, setDusts] = useState({
    totalCount: 1,
    items: [],
    pageNo: 1,
    numOfRows: DUSTS_PER_PAGE,
  });

  // 시도별 실시간 측정정보 목록을 조회하는 함수
  const fetchDustData = async (sidoName, pageNo) => {
    const url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${process.env.REACT_APP_AIRKOREA_API_KEY}&returnType=json&numOfRows=${DUSTS_PER_PAGE}&sidoName=${sidoName}&pageNo=${pageNo}`;

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      const data = await response.json();

      const { totalCount, items, pageNo, numOfRows } = data.response.body;
      if (pageNo === 1) {
        setDusts({
          totalCount,
          items,
          pageNo,
          numOfRows,
        });
      } else {
        setDusts((prevDusts) => ({
          totalCount,
          items: [...prevDusts.items, ...items],
          pageNo,
          numOfRows,
        }));
      }
    } catch (error) {
      setError(`${sidoName} ${DataFetchError}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDustData(sidoName, pageNo);
  }, [sidoName, pageNo]);

  return [loading, error, dusts];
}

const DUSTS_PER_PAGE = 10;
