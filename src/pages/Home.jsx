import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>🏆 CAN 2025 Hub</h1>
      <p>Bienvenue sur la plateforme officielle de la CAN 2025.</p>

      <ul>
        <li>
          <Link to="/matches">📅 Voir les matchs</Link>
        </li>
        <li>
          <Link to="/standings">📊 Classements</Link>
        </li>
      </ul>
    </div>
  );
}
