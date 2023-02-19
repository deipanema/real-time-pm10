import React from "react";
import DustItem from "../components/DustItem";

export default function Bookmark({ bookmarks, onDelete }) {
  console.log(bookmarks);
  return (
    <div>
      {bookmarks.map((bookmark) => (
        <DustItem {...bookmark} onDelete={onDelete} />
      ))}
    </div>
  );
}
