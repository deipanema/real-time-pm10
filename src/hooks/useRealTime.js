import { useEffect, useState } from 'react';
import getNearbyStation from '../apis/getNearbyStation';
import getRealTimeStation from '../apis/getRealTimeStation';
import getUserLocation from '../apis/getUserLocation';
import { DataFetchError } from '../constants/networkErrors';

export default function useRealTime() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nearbyStation, setNearbyStation] = useState('');
  const [pm10Data, setPM10Data] = useState({});

  // 근접 측정소와 실시간 측정 정보를 조회하는 함수
  const fetchRealTimeData = async (position) => {
    try {
      setError(null);
      const { latitude, longitude } = position.coords;

      const locationData = await getUserLocation(longitude, latitude);
      const { x, y } = locationData.documents[0];

      const nearbyStationData = await getNearbyStation(x, y);
      setNearbyStation(nearbyStationData.response.body.items[0]);

      const realTimeData = await getRealTimeStation(
        nearbyStationData.response.body.items[0].stationName
      );
      setPM10Data(realTimeData.response.body.items[0]);
    } catch (error) {
      setError(`우리동네 ${DataFetchError}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const success = async (position) => {
      await fetchRealTimeData(position);
    };

    const error = () => {
      setError('현재 위치 정보를 가져올 수 없습니다.');
      setLoading(false);
    };

    if (!navigator.geolocation) {
      setError('브라우저가 위치 정보를 지원하지 않음');
      setLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  return [loading, error, nearbyStation, pm10Data];
}
