import { useEffect, useMemo, useState } from "react";
import { getMatches, getTeams } from "../services/apii";

export default function MatchesSection() {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    Promise.all([getMatches(), getTeams()])
      .then(([m, t]) => {
        setMatches(m);
        setTeams(t);
      })
      .catch((e) => setErr(e.message));
  }, []);

  const teamMap = useMemo(() => {
    const map = {};
    teams.forEach((t) => (map[t.id] = t.name));
    return map;
  }, [teams]);

  return (
    <section className="section">
      <h2>⚽ Matches </h2>

      {err && <p className="error">❌ {err}</p>}
      {!err && matches.length === 0 && <p className="muted">Loading matches…</p>}

      <div className="grid">
        {matches.map((m) => (
          <div key={m.id} className="card">
            <h3>
              {teamMap[m.homeTeamId] ?? m.homeTeamId} vs{" "}
              {teamMap[m.awayTeamId] ?? m.awayTeamId}
            </h3>
            <p className="muted">ID: {m.id} • Group {m.group}</p>
            <p>📍 {m.stadium}</p>
            <p>🗓 {new Date(m.date).toLocaleString()}</p>
            <p className="meta">
              Score: {m.score?.home} – {m.score?.away}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
