import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Loading from "./loading";
const Home = React.lazy(() => import("./home"));
const Teams = React.lazy(() => import("./teams"));
const Players = React.lazy(() => import("./players"));
const TeamPage = React.lazy(() => import("./teampage"));
const Player = React.lazy(() => import("./player"));
const Team = React.lazy(() => import("./team"));
const Article = React.lazy(() => import("./article"));
const Articles = React.lazy(() => import("./articles"));

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />}>
              <Route path=":playerId" element={<Player />} />
              <Route
                path=""
                element={
                  <h className="flex h-full text-xl font-bold justify-center items-center">
                    Select a Player
                  </h>
                }
              />
            </Route>
            <Route path="/teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route
                path=""
                element={
                  <h className="w-full flex text-xl font-bold justify-center items-center">
                    Select a Team
                  </h>
                }
              />
            </Route>
            <Route path="/:teamId" element={<TeamPage />} />
            <Route path="/:teamId/articles" element={<Articles />}>
              <Route path=":articleId" element={<Article />} />
            </Route>
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;

// site demo: https://basketball-v6.ui.dev/
