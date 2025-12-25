const AWS1 = import.meta.env.VITE_AWS_API_1_BASE;
const AWS2 = import.meta.env.VITE_AWS_API_2_BASE;
const VM = import.meta.env.VITE_AZURE_VM_BASE;

/* -------- AWS API #1 (Data) -------- */

export async function getTeams() {
  const res = await fetch(`${AWS1}/teams.json`);
  return res.json();
}

export async function getMatches() {
  const res = await fetch(`${AWS1}/matches.json`);
  return res.json();
}

/* -------- Azure VM (Standings) -------- */

export async function getStandings() {
  const res = await fetch(`${VM}/standings.json`);
  return res.json();
}

/* -------- AWS API #2 (future) -------- */

export async function getPredictions() {
  const res = await fetch(`${AWS2}/predictions`);
  return res.json();
}
