import React from "react";
import { Link } from "react-router-dom";

export default function FooterTab() {
  return (
    <nav className="footer-container">
      <Link className="footer-item" to="/region">
        <div className="material-icons">location_pin</div>
        <div className="context">내 지역보기</div>
      </Link>
      <Link className="footer-item" to="/">
        <div className="material-icons">public</div>
        <div className="context">전체 시도보기</div>
      </Link>
      <Link className="footer-item" to="/bookmark">
        <div className="material-icons">bookmarks</div>
        <div className="context">즐겨찾기</div>
      </Link>
    </nav>
  );
}
