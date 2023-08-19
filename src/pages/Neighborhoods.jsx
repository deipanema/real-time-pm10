import useRealTime from '../hooks/useRealTime';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Pm10GradeImage from '../components/Pm10GradeImage';

export default function Neighborhoods() {
  const [loading, error, nearestStation, pm10Data] = useRealTime();

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  const { dataTime, pm10Grade, pm10Value, pm10Flag } = pm10Data;
  const [gradeContent, gradeDescription] = getGradeContent(pm10Grade, pm10Flag);

  return (
    <main className='neighborhoods-container'>
      <div className='title-container'>
        <span className='material-icons' aria-hidden='true'>
          location_pin
        </span>
        <h1>{nearestStation.stationName} 측정소</h1>
      </div>
      <p className='neighborhoods-dataTime'>
        {dataTime ? `${dataTime} 업데이트` : ''}
      </p>
      <div className='neighborhoods-description-container'>
        <p className='neighborhoods-description'>{gradeDescription}</p>
      </div>
      <div className='neighborhoods-pm10-grade-image'>
        <Pm10GradeImage grade={pm10Grade} />
      </div>
      <div
        className={[
          'neighborhoods-pm10-info-container',
          pm10Grade
            ? `pm10-grade-content-${pm10Grade}`
            : 'pm10-grade-content-0',
        ].join(' ')}
      >
        <span className='neighborhoods-pm10-value' title='수치'>
          {pm10Value !== '-' ? pm10Value : ''}
        </span>
        <span className='neighborhoods-pm10-grade' title='등급'>
          {pm10Grade ? gradeContent : '알 수 없음'}
        </span>
      </div>
    </main>
  );
}

function getGradeContent(pm10Grade, pm10Flag) {
  switch (pm10Grade) {
    case '1':
      return [
        '좋음',
        '미세먼지가 좋아요! 맑은 하늘을 보며 햇살 쬐는 시간을 가져보세요. 실내외 활동이 쾌적할 거예요.',
      ];
    case '2':
      return [
        '보통',
        '미세먼지가 보통 수준이네요. 미세먼지에 노출될 가능성이 높거나 민감한 분들은 외출 시 마스크를 착용하고 건강을 유지해주세요!',
      ];
    case '3':
      return [
        '나쁨',
        '미세먼지가 나쁜 날이에요. 외출 시에는 마스크를 꼭 착용하고, 실내에서도 공기청정기를 사용해보세요.',
      ];
    case '4':
      return [
        '매우나쁨',
        '미세먼지가 매우 나쁜 상태라 조심해야 해요. 외출을 자제하고, 실내에서는 창문을 닫고 공기청정기를 사용해주세요.',
      ];
    default:
      return [
        pm10Flag || '측정소 통신장애',
        '측정소의 사정으로 미세먼지 정보를 가져올 수 없습니다. 이용에 불편을 드려 죄송합니다.',
      ];
  }
}
