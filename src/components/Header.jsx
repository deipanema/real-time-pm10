import React from "react";

export default function Header({ headText }) {
  return (
    <header>
      <h1 className="head-text">지역 검색{headText}</h1>
    </header>
  );
}
