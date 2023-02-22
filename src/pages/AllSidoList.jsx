import React, { useState } from "react";
import ControlMenu from "../components/ControlMenu";
import DustItem from "../components/DustItem";

export default function AllSidoList({
  sido,
  setSido,
  sidos,
  dusts,
  onAdd,
  onDelete,
}) {
  const filtered = getFilteredsido(dusts, sido);

  return (
    <main className="dust-info">
      <div className="menu">
        <ControlMenu list={sidos} value={sido} onChange={setSido} />
      </div>
      <section>
        {filtered.map((dust) => (
          <DustItem
            key={`${dust.stationName}`}
            {...dust}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        ))}
      </section>
    </main>
  );
}
function getFilteredsido(dusts, sido) {
  if (sido === "전국") return dusts;
  return dusts.filter((dust) => dust.sidoName === sido);
}
