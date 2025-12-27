import { useState } from "react";
import { getMatchById } from "../services/apii";

export default function MatchByIdSection() {
  const [id, setId] = useState("M1");
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  const onFetch = async () => {
    setErr("");
    setData(null);
    try {
      const res = await getMatchById(id.trim());
      setData(res);
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <section className="section alt">
      <h2>🔎 Matches </h2>

      <div className="row">
        <input
          className="input"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Ex: M1"
        />
        <button className="btn" onClick={onFetch}>
          Fetch
        </button>
      </div>

      {err && <p className="error">❌ {err}</p>}
      {data && (
        <pre className="pre">{JSON.stringify(data, null, 2)}</pre>
      )}
      {!err && !data && <p className="muted">Try with: M1</p>}
    </section>
  );
}
