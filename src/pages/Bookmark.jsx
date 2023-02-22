import React from "react";
import DustItem from "../components/DustItem";

export default function Bookmark({ bookmarks, onDelete }) {
  console.log(bookmarks.length);

  return bookmarks.length === 0 ? (
    "즐겨찾기가 비어있습니다."
  ) : (
    <div>
      {bookmarks.map((bookmark) => (
        <DustItem {...bookmark} onDelete={onDelete} />
      ))}
    </div>
  );
}
