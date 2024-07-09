import { useAppSelector } from '@/store';
import React, { Suspense } from 'react';
import { shallowEqual } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqual
  );
  return (
    <div>
      <nav>
        <Link to="/">发现音乐</Link>
        <Link to="/my">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载</Link>
      </nav>

      <hr />
      <h2>当前计数：{count}</h2>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
