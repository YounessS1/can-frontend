import { useEffect, useState } from "react";
import { getTeams } from "../services/apii";

export default function TeamsSection() {
  const [teams, setTeams] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    getTeams()
      .then(setTeams)
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <section className="section alt">
      <h2>🏳️ Teams </h2>

      {err && <p className="error">❌ {err}</p>}
      {!err && teams.length === 0 && <p className="muted">Loading teams…</p>}

      <div className="grid">
        {teams.map((t) => (
          <div key={t.id} className="card">
            <h3>{t.name}</h3>
            <p className="muted">ID: {t.id}</p>
            <span className="meta">Group {t.group}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
