import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import React, { Suspense } from 'react';

const UserPage = React.lazy(() => import('users/UserPage'));
const AlbumPage = React.lazy(() => import('albums/AlbumPage'));
const Loading = React.lazy(() => import('components/Loading'));
const PhotoPage = React.lazy(() => import('photos/PhotoPage'));

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
          path="/users/:userId"
          element={
            <Suspense fallback={<Loading />}>
              <AlbumPage />
            </Suspense>
          }
        />
        <Route
          path="/users/:userId/albums/:albumId"
          element={
            <Suspense fallback={<Loading />}>
              <PhotoPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
