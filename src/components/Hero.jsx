import headshot from '../assets/headshot.jpg';
import './Hero.css';

const metrics = [
  { value: '5+', label: 'yrs experience' },
  { value: '60–70', label: 'hospitals served' },
  { value: '4.0', label: 'GPA, UMBC' },
];

export default function Hero() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York' });

  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="hero-statusbar">
          <span className="status-dot" />
          <span>open to opportunities</span>
          <span className="statusbar-sep">/</span>
          <span>{timeStr} ET</span>
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow">data_engineer.production_pipeline</p>
            <h1 className="hero-title">
              Brahmani Thota
            </h1>
            <p className="hero-role">Senior Data Engineer — Healthcare Financial Platforms</p>
            <p className="hero-desc">
              I build and troubleshoot the pipelines that Medicaid and Medicare financial
              reporting runs on — Snowflake, dbt, AWS Glue, PySpark — across a network of
              60–70 hospitals at Centene. Previously: Palantir Foundry, quantum computing at IBM.
            </p>
            <div className="hero-actions">
              <a href="#experience" className="btn btn-primary">View the pipeline →</a>
              <a href="/Brahmani-Thota-Resume.pdf" download className="btn btn-ghost">Download resume</a>
              <a href="#contact" className="btn btn-ghost">Get in touch</a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-frame">
              <img src={headshot} alt="Brahmani Thota" className="hero-photo" />
            </div>
          </div>
        </div>

        <dl className="hero-metrics">
          {metrics.map((m) => (
            <div className="hero-metric" key={m.label}>
              <dt>{m.value}</dt>
              <dd>{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
