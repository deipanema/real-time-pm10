import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Nationwide from './pages/Nationwide';
import Neighborhoods from './pages/Neighborhoods';
import Bookmark from './pages/Bookmark';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Nationwide />,
      },
      { path: 'neighborhoods', element: <Neighborhoods /> },
      {
        path: 'bookmark',
        element: <Bookmark />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
