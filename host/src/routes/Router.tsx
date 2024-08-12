import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React, { Suspense } from 'react';

const HomePage = React.lazy(() => import('@pages/Home/Home'));
const UserPage = React.lazy(() => import('users/UserPage'));
// const AlbumPage = React.lazy(() => import('albums/AlbumPage'));
// const PhotoPage = React.lazy(() => import('photos/PhotoPage'));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={'Loading'}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/users"
          element={
            <Suspense fallback={'Loading'}>
              <UserPage />
            </Suspense>
          }
        />
        {/* <Route
          path="/albums"
          element={
            <Suspense fallback={'Loading'}>
              <AlbumPage />
            </Suspense>
          }
        />
        <Route
          path="/photos"
          element={
            <Suspense fallback={'Loading'}>
              <PhotoPage />
            </Suspense>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
