import { useState, useEffect } from 'react';
import { networkErrorMessage } from '../utils/constants';

export default function useAllSido({ sidoName }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dusts, setDusts] = useState([]);

  const fetchData = async (sidoName) => {
    const url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${process.env.REACT_APP_AIRKOREA_API_KEY}&returnType=json&numOfRows=5&sidoName=${sidoName}&ver=1.0`;
    //const url = `/data/dust.json`;

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      const data = await response.json();
      setDusts(data.response.body?.items || []);
    } catch (error) {
      setError(`${sidoName} ${networkErrorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(sidoName);
  }, [sidoName]);

  return [loading, error, dusts];
}
