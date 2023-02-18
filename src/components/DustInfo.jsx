import React, { useState, useEffect } from "react";
import DustItem from "./DustItem";

export default function DustInfo() {
  const [dusts, setDusts] = useState([]);

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
    <div className="dust-info">
      <ul>
        {dusts.map((dust) => (
          <DustItem {...dust} />
        ))}
      </ul>
    </div>
  );
}
