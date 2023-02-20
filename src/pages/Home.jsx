import React from "react";
import { Outlet } from "react-router-dom";
import FooterTab from "../components/FooterTab";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterTab />
    </>
  );
}
