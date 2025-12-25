import { useEffect, useState } from "react";
import { getMatches, getTeams } from "../services/api";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState({});

  useEffect(() => {
    getMatches().then(setMatches);
    getTeams().then((data) => {
      const map = {};
      data.forEach((t) => (map[t.id] = t.name));
      setTeams(map);
    });
  }, []);

  return (
    <div>
      <h2>⚽ Matches – CAN 2025</h2>

      {matches.map((m) => (
        <div
          key={m.id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <p>
            <strong>
              {teams[m.homeTeamId]} vs {teams[m.awayTeamId]}
            </strong>
          </p>
          <p>📍 {m.stadium}</p>
          <p>🗓 {new Date(m.date).toLocaleString()}</p>
          <p>
            Score : {m.score.home} – {m.score.away}
          </p>
        </div>
      ))}
    </div>
  );
}
