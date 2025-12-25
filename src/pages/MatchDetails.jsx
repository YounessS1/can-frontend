import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMatchById } from "../services/api";

export default function MatchDetails() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    getMatchById(id).then(setMatch);
  }, [id]);

  if (!match) return <p>Chargement...</p>;

  return (
    <div>
      <h2>📄 Match {match.id}</h2>

      <p>
        <strong>{match.homeTeamId}</strong> vs{" "}
        <strong>{match.awayTeamId}</strong>
      </p>

      <p>Date : {new Date(match.date).toLocaleString()}</p>
      <p>Stadium : {match.stadium}</p>
      <p>
        Score : {match.score.home} - {match.score.away}
      </p>
    </div>
  );
}
