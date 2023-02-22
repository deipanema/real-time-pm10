import React from "react";
import { useSelector } from "react-redux";
import DustItem from "../components/DustItem";

export default function Bookmark() {
  const bookmarks = useSelector((state) => state.bookmarks);

  return bookmarks.length === 0 ? (
    <div className="loading-container">
      <p className="error-message">즐겨찾기가 비어있습니다.</p>
    </div>
  ) : (
    <main className="dust-info">
      {bookmarks.map((bookmark) => (
        <DustItem key={`${bookmark.stationName}mark`} {...bookmark} />
      ))}
    </main>
  );
}
