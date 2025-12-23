const AWS_API = import.meta.env.VITE_AWS_API_URL;
const VM_API = import.meta.env.VITE_VM_API_URL;

export const getMatches = () =>
  fetch(`${AWS_API}/matches`).then((r) => r.json());

export const getMatchById = (id) =>
  fetch(`${AWS_API}/matches/${id}`).then((r) => r.json());

export const getStandings = () =>
  fetch(`${VM_API}/standings`).then((r) => r.json());
