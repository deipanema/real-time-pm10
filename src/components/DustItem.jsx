import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dataActions } from '../store';

export default function DustItem({
  stationName,
  sidoName,
  pm10Grade,
  pm10Value,
  pm10Flag,
  dataTime,
}) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);

  const addBookmarks = () => {
    dispatch(
      dataActions.addBookmarks({
        stationName,
        sidoName,
        pm10Grade,
        pm10Value,
        pm10Flag,
        dataTime,
      })
    );
  };

  const deleteBookmarks = () => {
    dispatch(dataActions.deleteBookmarks(stationName));
  };

  let gradeKor;
  switch (pm10Grade) {
    case '1':
      gradeKor = '좋음';
      break;
    case '2':
      gradeKor = '보통';
      break;
    case '3':
      gradeKor = '나쁨';
      break;
    case '4':
      gradeKor = '매우나쁨';
      break;
    default:
      pm10Grade = '0';
      gradeKor = pm10Flag ? pm10Flag : '알 수 없음';
  }

  return (
    <article>
      <ul>
        <li className={['dust-item', `dust-item-color-${pm10Grade}`].join(' ')}>
          <div className='card-title'>
            <div className='h2'>{stationName}</div>
            <div className='h3'>{sidoName}</div>
            <div>
              {bookmarks.some(
                (bookmark) => bookmark.stationName === stationName
              ) ? (
                <div className='material-icons' onClick={deleteBookmarks}>
                  star
                </div>
              ) : (
                <div className='material-icons' onClick={addBookmarks}>
                  star_outline
                </div>
              )}
            </div>
          </div>
          <div className='pm10-grade-container'>
            <span className='pm10-grade'>
              <span className={`pm10-grade-content-${pm10Grade}`}>
                {gradeKor}
              </span>
            </span>
          </div>
          <div className='content-container'>
            <p className='pm10-value'>
              {pm10Value === '-' || !pm10Value
                ? '측정소의 사정으로 미세먼지'
                : `미세먼지 수치: ${pm10Value}`}
            </p>
            <p className='date-time'>
              {pm10Value === '-' || !pm10Value
                ? '정보를 가져올 수 없습니다.'
                : `(${dataTime} 기준)`}
            </p>
          </div>
        </li>
      </ul>
    </article>
  );
}
