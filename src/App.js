import React, { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bookmark from "./pages/Bookmark";
import Home from "./pages/Home";
import AllSidoList from "./pages/AllSidoList";
import MyRegion from "./pages/MyRegion";

export default function App() {
  const [dusts, setDusts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  //let storage = [];
  console.log(bookmarks);
  localStorage.setItem("bookmark", JSON.stringify(bookmarks));

  const addBookmark = (bookmark) => {
    setBookmarks([...bookmarks, bookmark]);
  };

  const deleteBookmark = (target) => {
    console.log(target);
    setBookmarks(
      bookmarks.filter((bookmark) => bookmark.stationName !== target)
    );
  };

  // const deleteBookmark = (bookmarks) => {
  //   return bookmarks.filter(bookmark => bookmarks.)
  // }

  const storage = JSON.parse(localStorage.getItem("bookmark"));
  //console.log(storageBookmarks[0]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: (
            <AllSidoList
              dusts={dusts}
              onAdd={addBookmark}
              onDelete={deleteBookmark}
            />
          ),
        },
        { path: "region", element: <MyRegion /> },
        {
          path: "Bookmark",
          element: <Bookmark bookmarks={storage} onDelete={deleteBookmark} />,
        },
      ],
    },
  ]);

  useEffect(() => {
    fetch("data/dust.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("json 받아");
        setDusts(data.response.body.items);
      });
    return () => console.log("데이터 잘 받아왔수");
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
