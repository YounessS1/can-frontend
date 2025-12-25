// src/services/api.js

export async function getMatches() {
  const res = await fetch("/data/matches.json");
  if (!res.ok) {
    throw new Error("Failed to load matches");
  }
  return res.json();
}

export async function getStandings() {
  const res = await fetch("/data/standings.json");
  if (!res.ok) {
    throw new Error("Failed to load standings");
  }
  return res.json();
}
