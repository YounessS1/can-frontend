import { useEffect, useState } from "react";
import { getMatches } from "../services/api";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMatches()
      .then(setMatches)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>❌ {error}</p>;

  return (
    <div>
      <h2>⚽ Matchs – CAN 2025</h2>

      {matches.map((match) => (
        <div key={match.id} style={{ marginBottom: "1rem" }}>
          <strong>
            {match.homeTeam} vs {match.awayTeam}
          </strong>
          <p>Date : {match.date}</p>
          <p>Stade : {match.stadium}</p>
          {match.score && (
            <p>
              Score : {match.score.home} – {match.score.away}
            </p>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}
