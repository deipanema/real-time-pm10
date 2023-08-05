import { useEffect, useState } from 'react';
import getNearbyStation from '../apis/getNearbyStation';
import getRealTimeStation from '../apis/getRealTimeStation';
import getUserLocation from '../apis/getUserLocation';
import { networkErrorMessage } from '../utils/constants';

export default function useRealTime() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [localStation, setLocalStation] = useState('');
  const [pm10, setPM10] = useState({});

  const fetchData = async (position) => {
    try {
      setLoading(true);
      setError(null);
      const { latitude, longitude } = position.coords;

      const locationData = await getUserLocation(longitude, latitude);
      const { x, y } = locationData.documents[0];

      const nearbyStationData = await getNearbyStation(x, y);
      setLocalStation(nearbyStationData.response.body.items[0]);

      const realTimeData = await getRealTimeStation(
        nearbyStationData.response.body.items[0].stationName
      );
      setPM10(realTimeData.response.body.items[0]);
    } catch (error) {
      setError(`우리동네 ${networkErrorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const success = async (position) => {
      fetchData(position);
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

  return [loading, error, localStation, pm10];
}
