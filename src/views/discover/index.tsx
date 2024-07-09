import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Discover = () => {
  return (
    <div>
      <nav>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/dj-radio">主播电台</Link>
        <Link to="/discover/artist">主播电台歌手</Link>
        <Link to="/discover/album">新歌上架</Link>
      </nav>

      <hr />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Discover;
