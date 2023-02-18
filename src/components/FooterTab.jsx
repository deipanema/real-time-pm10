import React from "react";

export default function FooterTab() {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <div className="material-symbols-outlined">person_pin_circle</div>
        <div className="context">내 지역보기</div>
      </div>
      <div className="footer-item">
        <div className="material-symbols-outlined">public</div>
        <div className="context">전체 시도보기</div>
      </div>
      <div className="footer-item">
        <div className="material-symbols-outlined">bookmark</div>
        <div className="context">즐겨찾기</div>
      </div>
    </div>
  );
}
