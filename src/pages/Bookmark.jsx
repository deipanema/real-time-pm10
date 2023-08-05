import React from 'react';
import { useSelector } from 'react-redux';
import DustItem from '../components/DustItem';

export default function Bookmark() {
  const bookmarks = useSelector((state) => {
    return state.bookmarks;
  });

  return bookmarks.length === 0 ? (
    <div className='status-container'>
      <p className='message'>즐겨찾기가 비어있습니다.</p>
    </div>
  ) : (
    <main className='dust-info'>
      <ul>
        {bookmarks.map((bookmark) => (
          <DustItem key={`mark-${bookmark.stationName}`} {...bookmark} />
        ))}
      </ul>
    </main>
  );
}
