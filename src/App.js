import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import FooterTab from './components/FooterTab';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <FooterTab />
    </div>
  );
}
