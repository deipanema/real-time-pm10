import React, { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bookmark from "./pages/Bookmark";
import Home from "./pages/Home";
import AllSidoList from "./pages/AllSidoList";
import MyRegion from "./pages/MyRegion";
import useDust from "./hooks/use-dust";
import NotFound from "./pages/NotFound";
import { dataActions } from "./store/index";
import { useDispatch } from "react-redux";

export default function App() {
  const [sido, setSido] = useState(sidos[0].value);
  const [loading, error, dusts] = useDust({ sidoName: sido });
  const dustData = dusts.map((dust) => {
    return {
      dataTime: dust.dataTime,
      pm10Grade: dust.pm10Grade,
      pm10Value: dust.pm10Value,
      sidoName: dust.sidoName,
      stationName: dust.stationName,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataActions.addDusts(dustData));
  }, [dispatch, dustData]);

  const emotions = ["(⊙x⊙;)", "＞﹏＜", "இ௰இ", "ᕦ(ò_óˇ)ᕤ"];

  if (error)
    return (
      <div className="loading-container">
        <p className="emotion">{emotions[Math.floor(Math.random() * 5)]}</p>
        <p className="error-message">{error}</p>
      </div>
    );

  if (loading)
    return (
      <div className="loading-container">
        <img
          className="loading-spinner"
          src="https://media.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt="Loading Spinner"
        />
      </div>
    );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <AllSidoList sido={sido} setSido={setSido} sidos={sidos} />,
        },
        { path: "region", element: <MyRegion /> },
        {
          path: "Bookmark",
          element: <Bookmark />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const sidos = [
  { name: "전국", value: "전국" },
  { name: "서울", value: "서울" },
  { name: "부산", value: "부산" },
  { name: "대구", value: "대구" },
  { name: "인천", value: "인천" },
  { name: "광주", value: "광주" },
  { name: "대전", value: "대전" },
  { name: "울산", value: "울산" },
  { name: "경기", value: "경기" },
  { name: "강원", value: "강원" },
  { name: "충북", value: "충북" },
  { name: "충남", value: "충남" },
  { name: "전북", value: "전북" },
  { name: "전남", value: "전남" },
  { name: "경북", value: "경북" },
  { name: "경남", value: "경남" },
  { name: "제주", value: "제주" },
  { name: "세종", value: "세종" },
];
