import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React, { Suspense } from 'react';

const UserPage = React.lazy(() => import('users/UserPage'));
const AlbumPage = React.lazy(() => import('albums/AlbumPage'));
const Loading = React.lazy(() => import('components/Loading'));
// const PhotoPage = React.lazy(() => import('photos/PhotoPage'));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <UserPage />
            </Suspense>
          }
        />
        <Route
          path="/users/:id"
          element={
            <Suspense fallback={<Loading />}>
              <AlbumPage />
            </Suspense>
          }
        />
        {/* <Route
          path="/albums/:id"
          element={
            <Suspense fallback={<Loading />}>
              <PhotoPage />
            </Suspense>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
