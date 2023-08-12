import { useSelector, useDispatch } from 'react-redux';
import { addBookmark, removeBookmark } from '../store/bookmarkSlice';

export default function DustCard({
  stationName,
  sidoName,
  pm10Grade,
  pm10Value,
  pm10Flag,
  dataTime,
}) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state);
  const gradeContent = getGradeContent(pm10Grade, pm10Flag);
  const isBookmarked = bookmarks.find(
    (bookmark) => bookmark.stationName === stationName
  );

  const handleBookmarkToggle = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(stationName));
    } else {
      dispatch(
        addBookmark({
          stationName,
          sidoName,
          pm10Grade,
          pm10Value,
          pm10Flag,
          dataTime,
        })
      );
    }
  };

  return (
    <li
      className={[
        'dust-card',
        pm10Grade ? `dust-card-color-${pm10Grade}` : 'dust-card-color-0',
      ].join(' ')}
    >
      <div className='title'>
        <div className='stationName'>{stationName}</div>
        <div className='sidoName'>{sidoName}</div>
        <div>
          <span
            className='material-icons'
            onClick={handleBookmarkToggle}
            aria-label={isBookmarked ? '즐겨찾기 제거' : '즐겨찾기 추가'}
          >
            {isBookmarked ? 'star' : 'star_outline'}
          </span>
        </div>
      </div>
      <div className='pm10-grade-container'>
        <span className='pm10-grade'>
          <span
            className={
              pm10Grade
                ? `pm10-grade-content-${pm10Grade}`
                : 'pm10-grade-content-0'
            }
            aria-label={`미세먼지 등급: ${gradeContent}`}
          >
            {gradeContent}
          </span>
        </span>
      </div>
      <div className='pm10-grade-Info'>
        <p className='pm10-value'>
          {pm10Value === '-' || !pm10Value
            ? '측정소의 사정으로 미세먼지'
            : `미세먼지 수치: ${pm10Value}`}
        </p>
        <p className='date-time'>
          {pm10Value === '-' || !pm10Value
            ? '정보를 가져올 수 없음'
            : `(${dataTime} 기준)`}
        </p>
      </div>
    </li>
  );
}

function getGradeContent(pm10Grade, pm10Flag) {
  switch (pm10Grade) {
    case '1':
      return '좋음';
    case '2':
      return '보통';
    case '3':
      return '나쁨';
    case '4':
      return '매우나쁨';
    default:
      return pm10Flag ? pm10Flag : '알 수 없음';
  }
}
