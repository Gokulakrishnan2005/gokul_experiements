/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Trending } from "./pages/Trending";
import { Watchlist } from "./pages/Watchlist";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="video/:id" element={<Detail />} />
          <Route path="trending" element={<Trending />} />
          <Route path="watchlist" element={<Watchlist />} />
          {/* Add basic catch-all for other menu items */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

