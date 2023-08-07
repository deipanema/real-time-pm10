import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DustItem from '../components/DustItem';
import { updateBookmarks } from '../store/bookmarkThunks';

export default function Bookmark() {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);

  useEffect(() => {
    dispatch(updateBookmarks());
  }, [dispatch]);

  return (
    <main className='dust-info'>
      <div className='title-container'>
        <h1>즐겨찾기 목록</h1>
      </div>
      <section>
        {bookmarks.length === 0 ? (
          <div className='status-container'>
            <p className='message'>즐겨찾기가 비어있습니다.</p>
          </div>
        ) : (
          <ul>
            {bookmarks.map((bookmark) => (
              <DustItem
                key={`bookmark-${bookmark.stationName}`}
                {...bookmark}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
