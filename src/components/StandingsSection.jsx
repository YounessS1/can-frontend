import { useEffect, useState } from "react";
import { getStandings } from "../services/apii";

export default function StandingsSection() {
  const [rows, setRows] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    getStandings()
      .then(setRows)
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <section className="section">
      <h2>📊 Standings </h2>

      {err && <p className="error">❌ {err}</p>}
      {!err && rows.length === 0 && <p className="muted">Loading standings…</p>}

      {rows.length > 0 && (
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Group</th>
                <th>Team</th>
                <th>Played</th>
                <th>Points</th>
                <th>GF</th>
                <th>GA</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.group}</td>
                  <td>{r.name ?? r.teamId}</td>
                  <td>{r.played}</td>
                  <td>{r.points}</td>
                  <td>{r.gf}</td>
                  <td>{r.ga}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

