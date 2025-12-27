const NEWS_URL = import.meta.env.VITE_NEWS_URL;
const TEAMS_URL = import.meta.env.VITE_TEAMS_URL;
const MATCHES_URL = import.meta.env.VITE_MATCHES_URL;
const MATCH_BY_ID_BASE = import.meta.env.VITE_MATCH_BY_ID_BASE;
const STANDINGS_URL = import.meta.env.VITE_STANDINGS_URL;
const RESERVATION_API = import.meta.env.VITE_RESERVATION_API;

// -------- NEWS (AWS) ----------
export async function getNews() {
  const res = await fetch(NEWS_URL);
  if (!res.ok) throw new Error("News error");
  return res.json();
}

// -------- TEAMS ----------
export async function getTeams() {
  const res = await fetch(TEAMS_URL);
  if (!res.ok) throw new Error("Teams error");
  return res.json();
}

// -------- MATCHES ----------
export async function getMatches() {
  const res = await fetch(MATCHES_URL);
  if (!res.ok) throw new Error("Matches error");
  return res.json();
}

export async function getMatchById(id) {
  const res = await fetch(`${MATCH_BY_ID_BASE}/${id}`);
  if (!res.ok) throw new Error("MatchById error");
  return res.json();
}

// -------- STANDINGS (VM AZURE) ----------
export async function getStandings() {
  const res = await fetch(STANDINGS_URL);
  if (!res.ok) throw new Error("Standings error");
  return res.json();
}

// -------- RESERVATION (AWS POST) ----------
export async function reserveTransport(data) {
  const res = await fetch(RESERVATION_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Reservation failed");
  return res.json();
}






