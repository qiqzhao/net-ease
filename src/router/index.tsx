import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '@/views/layout';

const Discover = React.lazy(() => import('@/views/discover'));
const Focus = React.lazy(() => import('@/views/focus'));
const Download = React.lazy(() => import('@/views/download'));
const My = React.lazy(() => import('@/views/my'));
const NotFound = React.lazy(() => import('@/views/not-found'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/discover" /> },
      {
        path: 'discover',
        element: <Discover />
      },
      {
        path: '/focus',
        element: <Focus />
      },
      {
        path: '/download',
        element: <Download />
      },
      {
        path: '/my',
        element: <My />
      }
    ]
  },
  {
    path: '/*',
    element: <NotFound />
  }
];

export default routes;
