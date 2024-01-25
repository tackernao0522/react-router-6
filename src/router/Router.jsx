import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/page1/*"
        element={
          <Routes>
            {Page1Routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.children} />
            ))}
          </Routes>
        }
      />
      <Route
        path="/page2/*"
        element={
          <Routes>
            {Page2Routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.children} />
            ))}
          </Routes>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
