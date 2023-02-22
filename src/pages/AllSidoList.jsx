import React from "react";
import ControlMenu from "../components/ControlMenu";
import DustItem from "../components/DustItem";
import { useSelector } from "react-redux";

export default function AllSidoList({ sido, setSido, sidos }) {
  const dustInfo = useSelector((state) => state.dusts);
  const filtered = getFilteredsido(dustInfo, sido);

  return (
    <main className="dust-info">
      <div className="menu">
        <ControlMenu list={sidos} value={sido} onChange={setSido} />
      </div>
      {filtered.length === 0 ? (
        <div className="loading-container">
          <p className="error-message">{`${sido} 데이터가 없습니다.`}</p>
        </div>
      ) : (
        <section>
          {filtered.map((dust) => (
            <DustItem key={`${dust.stationName}`} {...dust} />
          ))}
        </section>
      )}
    </main>
  );
}

function getFilteredsido(dusts, sido) {
  if (sido === "전국") return dusts;
  return dusts.filter((dust) => dust.sidoName === sido);
}
