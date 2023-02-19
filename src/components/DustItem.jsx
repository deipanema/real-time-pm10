import React, { useState } from "react";

export default function DustItem({
  stationName,
  sidoName,
  pm10Grade,
  pm10Value,
  dataTime,
  booking,
  onAdd,
  onDelete,
}) {
  let target;
  const [star, setStar] = useState(false);
  // console.log(
  //   "😍",
  //   stationName,
  //   sidoName,
  //   pm10Grade,
  //   pm10Value,
  //   dataTime,
  //   booking
  // );

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
    setStar((prev) => !prev);

    console.log(star);
    console.log(event.target.value);

    if (booking) {
      target = event.target.previousSibling.previousSibling.innerHTML;
      onDelete(target);
      console.log("딜리투");
    }

    if (!star) {
      onAdd({
        booking: !star,
        dataTime,
        pm10Grade,
        pm10Value,
        sidoName,
        stationName,
      });
    }

    //const star = prev === "star" ? "star_outline" : "star";
    //console.log(star);
    //if (!star) {

    // if (booking) {
    //   target = event.target.previousSibling.previousSibling.innerHTML;
    //   onDelete(target);
    //   console.log("딜리투");
    // }

    // onAdd({
    //   booking: !star,
    //   dataTime,
    //   pm10Grade,
    //   pm10Value,
    //   sidoName,
    //   stationName,
    // });
    // return star;
    //}

    //const target = event.target;
    //console.log(event.target);

    // if (event.target === "star") {
    //   console.log("😀star");
    // }
    //else {
    //   console.log(
    //     JSON.parse(localStorage.getItem("bookmark")).find(
    //       (bookmark) => bookmark === target
    //     )
    //   );
    //onDelete(localStorage.removeItem());
    //}
  };

  return (
    <article>
      <ul>
        <li className={["dust-item", `dust-item-color-${pm10Grade}`].join(" ")}>
          <div className="card-title">
            <div className="h2">{stationName}</div>
            <div className="h3">{sidoName}</div>
            <div
              className={["material-icons", `${star}`].join(" ")}
              onClick={toggleStar}
            >
              {star || booking ? "star" : "star_outline"}
            </div>
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
