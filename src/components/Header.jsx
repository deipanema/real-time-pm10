import React from "react";

export default function Header({ headText }) {
  return (
    <header>
      <h1 className="head-text">미세먼지 알리미{headText}</h1>
    </header>
  );
}
