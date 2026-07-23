import { useState } from 'react';
import './CaseStudies.css';

const cases = [
  {
    id: 'migration',
    tag: 'migration',
    title: 'Palantir → Snowflake Migration',
    period: 'Jan 2024 – Feb 2025',
    stack: ['Snowflake', 'dbt', 'PySpark', 'SQL', 'AWS Glue'],
    problem: 'Centene\'s Medicare, Medicaid, and Marketplace financial reporting ran on Palantir Foundry — a platform the org was sunsetting. Every downstream report, dashboard, and audit process depended on it.',
    approach: 'Led the migration end-to-end: redesigned data models for Snowflake\'s architecture, rewrote the dbt/PySpark/SQL pipeline layer, and ran table-level mapping against the legacy system to catch data gaps before they hit production reports.',
    impact: [
      'Cut reporting turnaround ~60% across 3 lines of business via automated Glue + stored procedure workflows.',
      'Reduced dataset sprawl 25% by consolidating Medicare/Medicaid pipelines into unified PySpark workflows.',
      'Zero missed monthly closes during the transition.',
    ],
  },
  {
    id: 'validation',
    tag: 'tooling',
    title: 'Financial Validation Dashboard',
    period: 'Production Team',
    stack: ['Python', 'Pandas', 'Excel/openpyxl'],
    problem: 'Month-end close required manually cross-checking a main financial statement against six supplemental Excel files — slow, error-prone, and blocking timely close.',
    approach: 'Built a solo Python validation tool in two weeks that ingests the main statement and all six supplemental files, reconciles line items programmatically, and flags discrepancies with source references instead of raw diffs.',
    impact: [
      'Removed a manual, multi-file reconciliation step from every close cycle.',
      'Became a recurring reference point in interviews as a self-directed build, from spec to shipped tool.',
    ],
  },
  {
    id: 'teensmart',
    tag: 'ml pipeline',
    title: 'TeenSmart Risk Prediction (Delta Analytics)',
    period: 'Feb 2023 – Jul 2023',
    stack: ['AWS SageMaker', 'PySpark', 'AWS DataBrew', 'QuickSight'],
    problem: 'TeenSmart International needed a way to flag high-risk behaviors — alcohol use, early sexual activity, obesity, fighting — among Latin American teens early enough for clinicians to intervene.',
    approach: 'Implemented the full ML lifecycle on AWS: DataBrew for extraction, PySpark for cleaning, SageMaker for experimentation and deployment. Paired the model with a QuickSight dashboard translating risk scores into concrete intervention recommendations.',
    impact: [
      'Deployed a production ML system, not just a notebook — SageMaker-hosted and dashboard-connected.',
      'Gave clinicians a direct, interpretable link from model output to recommended action.',
    ],
  },
];

export default function CaseStudies() {
  const [openId, setOpenId] = useState('migration');

  return (
    <section className="section" id="work">
      <div className="container">
        <p className="eyebrow">case_studies — 3 deep-dives</p>
        <h2 className="section-title">Selected work</h2>
        <p className="section-desc">
          The projects behind the metrics — problem, approach, and what shipped.
        </p>

        <div className="cases">
          {cases.map((c) => {
            const isOpen = openId === c.id;
            return (
              <div className={`case-card ${isOpen ? 'is-open' : ''}`} key={c.id}>
                <button
                  className="case-header"
                  onClick={() => setOpenId(isOpen ? null : c.id)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="case-tag">{c.tag}</span>
                    <h3 className="case-title">{c.title}</h3>
                    <p className="case-period">{c.period}</p>
                  </div>
                  <span className={`case-chevron ${isOpen ? 'is-open' : ''}`}>↓</span>
                </button>

                {isOpen && (
                  <div className="case-body">
                    <div className="case-stack">
                      {c.stack.map((s) => (
                        <span className="stack-chip" key={s}>{s}</span>
                      ))}
                    </div>
                    <div className="case-grid">
                      <div>
                        <p className="case-label">Problem</p>
                        <p className="case-text">{c.problem}</p>
                      </div>
                      <div>
                        <p className="case-label">Approach</p>
                        <p className="case-text">{c.approach}</p>
                      </div>
                    </div>
                    <p className="case-label">Impact</p>
                    <ul className="case-impact">
                      {c.impact.map((i, idx) => (
                        <li key={idx}>{i}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
