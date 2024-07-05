import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from '@/views/home';
import Discover from '@/views/discover';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/discover',
    element: <Discover />
  }
];

export default routes;
