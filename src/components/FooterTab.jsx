import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterTab() {
  return (
    <nav className='footer-container'>
      <Link className='footer-item' to='/neighborhoods'>
        <div className='material-icons'>account_circle</div>
        <div className='context'>우리 동네</div>
      </Link>
      <Link className='footer-item' to='/'>
        <div className='material-icons'>language</div>
        <div className='context'>동네별</div>
      </Link>
      <Link className='footer-item' to='/bookmark'>
        <div className='material-icons'>bookmarks</div>
        <div className='context'>즐겨찾기</div>
      </Link>
    </nav>
  );
}
