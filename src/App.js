import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';
import AllSidoList from './pages/AllSidoList';
import MyRegion from './pages/MyRegion';
import useDust from './hooks/use-dust';
import NotFound from './pages/NotFound';
import { dataActions } from './store/index';
import { useDispatch } from 'react-redux';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            // <AllSidoList
            //  sido={selectedSido}
            //  setSido={setSelectedSido}
            //  sidos={sidos}
            // />
            <AllSidoList />
          ),
        },
        { path: 'region', element: <MyRegion /> },
        {
          path: 'Bookmark',
          element: <Bookmark />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
