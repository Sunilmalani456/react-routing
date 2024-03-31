import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Teams from "./teams";
import Players from "./players";
import Navbar from "./navbar";
import TeamPage from "./teampage";
import Player from "./player";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />}>
            <Route path=":playerId" element={<Player />} />
          </Route>
          <Route path="/teams" element={<Teams />} />
          <Route path="/:teamId" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// site demo: https://basketball-v6.ui.dev/
