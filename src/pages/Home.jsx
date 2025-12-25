import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>🏆 CAN 2025 – Morocco</h1>
      <p>
        Application de démonstration multi-cloud (AWS + Azure) pour la Coupe
        d’Afrique des Nations 2025.
      </p>

      <ul>
        <li>
          <Link to="/matches">⚽ Voir les matchs</Link>
        </li>
        <li>
          <Link to="/standings">📊 Voir le classement</Link>
        </li>
      </ul>
    </div>
  );
}
