import { useEffect } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import FooterTab from './components/FooterTab';
import { useDispatch } from 'react-redux';
import { loadBookmarks } from './store/bookmarkSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookmarks());
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <Outlet />
      <FooterTab />
    </div>
  );
}
