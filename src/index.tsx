import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./router";

const App = (
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
ReactDOM.render(App, document.getElementById("root"));
