/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="video/:id" element={<Detail />} />
          {/* Add basic catch-all for other menu items */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

