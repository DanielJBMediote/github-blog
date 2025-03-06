import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Issue } from "./pages/Issues";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/issue" element={<Issue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}