import NewsSection from "./components/NewsSection";
import TeamsSection from "./components/TeamsSection";
import MatchesSection from "./components/MatchesSection";
import MatchByIdSection from "./components/MatchByIdSection";
import StandingsSection from "./components/StandingsSection";
import ReservationsSection from "./components/ReservationsSection";

export default function App() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1>CAN 2025 </h1>
        <p>Hello !</p>

        <div className="chips">
          <span>News </span>
          <span>Teams & Matches </span>
          <span>Standings </span>
          <span>Reservation </span>
        </div>

        <a href="#content" className="scrollHint">
          Scroll ↓
        </a>
      </section>

      {/* CONTENT */}
      <div id="content" className="container">
        <div className="section">
          <NewsSection />
        </div>

        <div className="section alt">
          <TeamsSection />
        </div>

        <div className="section">
          <MatchesSection />
        </div>

        <div className="section alt">
          <MatchByIdSection />
        </div>

        <div className="section">
          <StandingsSection />
        </div>

        <div className="section alt">
          <ReservationsSection />
        </div>
      </div>

      <footer className="footer">
        CAN 2025 
      </footer>
    </>
  );
}


