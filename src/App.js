import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import FooterTab from "./components/FooterTab";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterTab />
    </>
  );
}
