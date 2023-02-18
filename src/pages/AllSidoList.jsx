import React, { useState, useEffect } from "react";
import ControlMenu from "../components/ControlMenu";
import DustItem from "../components/DustItem";

export default function AllSidoList() {
  const [dusts, setDusts] = useState([]);
  const [sido, setSido] = useState(sidos[0].value);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("data/dust.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("json 받아");
        setDusts(data.response.body.items);
      });
    return () => console.log("데이터 잘 받아왔수");
  }, []);

  const filtered = getFilteredsido(dusts, sido);

  const addBookmark = (bookmark) => {
    setBookmarks([...bookmarks, bookmark]);
    console.log(bookmark);
  };

  return (
    <main className="dust-info">
      <div className="menu">
        <ControlMenu list={sidos} value={sido} onChange={setSido} />
      </div>
      <section>
        {filtered.map((dust) => (
          <DustItem {...dust} onAdd={addBookmark} />
        ))}
      </section>
    </main>
  );
}

function getFilteredsido(dusts, sido) {
  if (sido === "전국") return dusts;
  return dusts.filter((dust) => dust.sidoName === sido);
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
