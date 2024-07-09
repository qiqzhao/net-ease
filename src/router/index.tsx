import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '@/views/layout';

const Discover = React.lazy(() => import('@/views/discover'));
const Focus = React.lazy(() => import('@/views/focus'));
const Download = React.lazy(() => import('@/views/download'));
const My = React.lazy(() => import('@/views/my'));
const NotFound = React.lazy(() => import('@/views/not-found'));

const Album = React.lazy(() => import('@/views/discover/child-views/album'));
const Artist = React.lazy(() => import('@/views/discover/child-views/artist'));
const DJRadio = React.lazy(() => import('@/views/discover/child-views/dj-radio'));
const Ranking = React.lazy(
  () => import('@/views/discover/child-views/ranking')
);
const Recomment = React.lazy(
  () => import('@/views/discover/child-views/recommend')
);
const Songs = React.lazy(() => import('@/views/discover/child-views/songs'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/discover" /> },
      {
        path: 'discover',
        element: <Discover />,
        children: [
          { index: true, element: <Navigate to="/discover/recommend" /> },
          {
            path: 'album',
            element: <Album />
          },
          {
            path: 'artist',
            element: <Artist />
          },
          {
            path: 'dj-radio',
            element: <DJRadio />
          },
          {
            path: 'ranking',
            element: <Ranking />
          },
          {
            path: 'recommend',
            element: <Recomment />
          },
          {
            path: 'songs',
            element: <Songs />
          }
        ]
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
