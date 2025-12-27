import { useEffect, useState } from "react";
import { getNews } from "../services/apii";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    getNews()
      .then(setNews)
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <section className="section">
      <h2>📰 News </h2>

      {err && <p className="error">❌ {err}</p>}
      {!err && news.length === 0 && <p className="muted">Loading news…</p>}

      <div className="grid">
        {news.map((n) => (
          <article key={n.id} className="card">
            <h3>{n.title}</h3>
            <p>{n.content}</p>
            <span className="meta">{n.date}</span>
          </article>
        ))}
      </div>
    </section>
  );
}


