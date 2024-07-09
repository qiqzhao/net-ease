import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">发现音乐</Link>
        <Link to="/my">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载</Link>
      </nav>

      <hr />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
