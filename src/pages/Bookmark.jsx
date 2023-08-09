import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DustCard from '../components/DustCard';
import { loadBookmarks } from '../store/bookmarkSlice';
import { updateBookmarks } from '../store/thunks';

export default function Bookmark() {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadBookmarks());
    dispatch(updateBookmarks());
  }, [dispatch]);

  return (
    <main className='dust-info'>
      <div className='title-container'>
        <h1>즐겨찾는 지역</h1>
      </div>
      <section>
        {bookmarks.length === 0 ? (
          <div className='status-container'>
            <p className='message'>즐겨찾기가 비어있습니다.</p>
          </div>
        ) : (
          <ul>
            {bookmarks.map((bookmark) => (
              <DustCard
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
