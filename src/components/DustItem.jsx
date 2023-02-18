import React, { useState } from "react";

export default function DustItem({
  stationName,
  sidoName,
  pm10Grade,
  pm10Value,
  dataTime,
  onAdd,
}) {
  const [star, setStar] = useState("star_outline");
  const [bookmarks, setBookmarks] = useState([]);
  let gradeKor;
  switch (pm10Grade) {
    case "1":
      gradeKor = "좋음";
      break;
    case "2":
      gradeKor = "보통";
      break;
    case "3":
      gradeKor = "한때나쁨";
      break;
    case "4":
      gradeKor = "나쁨";
      break;
    case "5":
      gradeKor = "매우나쁨";
      break;
    default:
      pm10Grade = "0";
      gradeKor = "알 수 없음";
  }

  const toggleStar = (event) => {
    setStar((prev) => (prev === "star" ? "star_outline" : "star"));
    onAdd({ stationName, sidoName, pm10Grade, pm10Value, dataTime });
    console.log(stationName);
    //addBookmark(event.target);
  };

  const addBookmark = (target) => {
    //onAdd({})
  };

  return (
    <article>
      <ul>
        <li className={["dust-item", `dust-item-color-${pm10Grade}`].join(" ")}>
          <div className="card-title">
            <div className="h2">{stationName}</div>
            <div className="h3">{sidoName}</div>
          </div>
          <div className="material-icons" onClick={toggleStar}>
            {star}
          </div>
          <div className="pm10-grade-container">
            <span className="pm10-grade">
              <span className={`pm10-grade-content-${pm10Grade}`}>
                {gradeKor}
              </span>
            </span>
          </div>
          <div className="content-container">
            <p className="pm10-value">미세먼지 수치: {pm10Value}</p>
            <p className="date-time">({dataTime} 기준)</p>
          </div>
        </li>
      </ul>
      {/* <span class="material-icons">star</span> */}
    </article>
  );
}
