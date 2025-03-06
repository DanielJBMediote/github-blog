import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Issues } from "./pages/Issues";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/issues" element={<Issues />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}