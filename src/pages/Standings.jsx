import { useEffect, useState } from "react";
import { getStandings, getTeams } from "../services/api";

export default function Standings() {
  const [standings, setStandings] = useState([]);
  const [teams, setTeams] = useState({});

  useEffect(() => {
    getStandings().then(setStandings);
    getTeams().then((data) => {
      const map = {};
      data.forEach((t) => (map[t.id] = t.name));
      setTeams(map);
    });
  }, []);

  return (
    <div>
      <h2>📊 Classement – CAN 2025</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Groupe</th>
            <th>Équipe</th>
            <th>J</th>
            <th>Pts</th>
            <th>GF</th>
            <th>GA</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((s, i) => (
            <tr key={i}>
              <td>{s.group}</td>
              <td>{teams[s.teamId]}</td>
              <td>{s.played}</td>
              <td>{s.points}</td>
              <td>{s.gf}</td>
              <td>{s.ga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
