import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterTab() {
  return (
    <nav className='footer-container'>
      <Link className='footer-item' to='/region'>
        <div className='material-icons'>account_circle</div>
        <div className='context'>우리 동네 미세먼지</div>
      </Link>
      <Link className='footer-item' to='/'>
        <div className='material-icons'>language</div>
        <div className='context'>전국 미세먼지</div>
      </Link>
      <Link className='footer-item' to='/bookmark'>
        <div className='material-icons'>bookmarks</div>
        <div className='context'>즐겨찾기</div>
      </Link>
    </nav>
  );
}
