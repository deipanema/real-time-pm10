import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Nationwide from './pages/Nationwide';
import Neighborhoods from './pages/Neighborhoods';
import Bookmark from './pages/Bookmark';
import store from './store/bookmarkStore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
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
