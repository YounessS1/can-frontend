import { useEffect, useState } from "react";
import { getStandings } from "../services/api";

export default function Standings() {
  const [groups, setGroups] = useState({});

  useEffect(() => {
    getStandings().then(setGroups).catch(console.error);
  }, []);

  return (
    <div>
      <h2>📊 Classements – CAN 2025</h2>

      {Object.keys(groups).map((group) => (
        <div key={group}>
          <h3>Groupe {group}</h3>

          <table border="1" cellPadding="6">
            <thead>
              <tr>
                <th>Équipe</th>
                <th>Pts</th>
                <th>J</th>
                <th>BP</th>
                <th>BC</th>
              </tr>
            </thead>
            <tbody>
              {groups[group].map((team) => (
                <tr key={team.team}>
                  <td>{team.team}</td>
                  <td>{team.pts}</td>
                  <td>{team.played}</td>
                  <td>{team.gf}</td>
                  <td>{team.ga}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
