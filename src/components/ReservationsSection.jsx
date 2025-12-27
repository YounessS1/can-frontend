import { useState } from "react";
import { reserveTransport } from "../services/apii";

export default function ReservationsSection() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      const res = await reserveTransport({ name, date });
      setResult(res);
      setError("");
    } catch {
      setError("Reservation failed");
    }
  };

  return (
    <>
      <h2>🚌 Transport Reservation</h2>

      <div className="row">
        <input className="input" placeholder="Name" onChange={e => setName(e.target.value)} />
        <input className="input" type="date" onChange={e => setDate(e.target.value)} />
        <button className="btn" onClick={submit}>Reserve</button>
      </div>

      {error && <div className="error">{error}</div>}
      {result && <pre className="pre">{JSON.stringify(result, null, 2)}</pre>}
    </>
  );
}

