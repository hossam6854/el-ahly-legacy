import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TimelinePage from "./pages/TimelinePage";
import ChampionshipsPage from "./pages/ChampionshipsPage";
import LegendsPage from "./pages/LegendsPage";
import CurrentSquadPage from "./pages/CurrentSquadPage";
import MatchesPage from "./pages/MatchesPage";
import MatchModal from "./pages/MatchModal";
import PlayerDetails from "./pages/playerDetails";
import AhlyMoments from "./pages/AhlyMoments";
import QuizPage from "./pages/QuizPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


// باقي الصفحات سنضيفها لاحقًا

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/championships" element={<ChampionshipsPage />} />
        <Route path="/legends" element={<LegendsPage />} />
        <Route path="/current-squad" element={<CurrentSquadPage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/ahlymoments" element={<AhlyMoments />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/match/:id" element={<MatchModal />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
        <Route path="*" element={<div className="text-center text-xl mt-20">الصفحة غير موجودة</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}
