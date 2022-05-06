import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './router';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          const Component = route.component;
          return (
            <Route key={route.path} path={route.path} element={<Component />} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
