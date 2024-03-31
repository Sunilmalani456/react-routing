import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Teams from "./teams";
import Players from "./players";
import Navbar from "./navbar";
import TeamPage from "./teampage";
import Player from "./player";
import Team from "./team";
import Article from "./article";
import Articles from "./articles";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />}>
            <Route path=":playerId" element={<Player />} />
            <Route
              path=""
              element={
                <h className="flex h-full text-2xl font-bold justify-center items-center">
                  Select Player
                </h>
              }
            />
          </Route>
          <Route path="/teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
          </Route>
          <Route path="/:teamId" element={<TeamPage />} />
          <Route path="/:teamId/articles" element={<Articles />}>
            <Route path=":articleId" element={<Article />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// site demo: https://basketball-v6.ui.dev/
