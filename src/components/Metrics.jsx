import './Metrics.css';

const metrics = [
  { value: '80%', label: 'faster computation', detail: 'Teradata → REST API extraction via Python multiprocessing' },
  { value: '60%', label: 'faster reporting turnaround', detail: 'Palantir → Snowflake migration, across 3 lines of business' },
  { value: '60%', label: 'less manual validation', detail: 'Metadata-driven AWS Glue + S3 ingestion for Medicaid/Marketplace' },
  { value: '50%', label: 'faster report deploys', detail: 'SQL, Snowflake, and dbt reporting pipeline overhaul' },
  { value: '40%', label: 'faster month-end close', detail: 'Power BI dashboards surfacing revenue leakage & duplicate claims' },
  { value: '25%', label: 'less dataset sprawl', detail: 'Consolidated Medicare/Medicaid into optimized PySpark workflows' },
  { value: '20%', label: 'fewer data incidents', detail: 'Auditable data logic + production readiness documentation' },
  { value: '<24h', label: 'report generation', detail: 'Down from multiple days, via Snowflake stored procedures' },
];

export default function Metrics() {
  return (
    <section className="section" id="impact">
      <div className="container">
        <p className="eyebrow">metrics.dashboard — live</p>
        <h2 className="section-title">Impact, quantified</h2>
        <p className="section-desc">
          Every pipeline change gets measured against the reporting cycle it feeds.
          These are the numbers from four years of production financial data work.
        </p>
        <div className="metrics-grid">
          {metrics.map((m) => (
            <div className="metric-card" key={m.label}>
              <p className="metric-value">{m.value}</p>
              <p className="metric-label">{m.label}</p>
              <p className="metric-detail">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
