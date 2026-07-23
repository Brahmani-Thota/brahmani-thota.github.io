import { useState } from 'react';
import './CareerDAG.css';

const nodes = [
  {
    id: 'ibm',
    task: 'python_developer_intern',
    org: 'IBM — Quantum Computing',
    period: 'Jun 2020 – May 2021',
    status: 'success',
    details: [
      'Built interactive Python learning platforms with Anvil + Qiskit for quantum computing education.',
      'Implemented hybrid classical/quantum optimization algorithms as reusable modules for IBM Quantum programs.',
      'Subject Matter Expert for the IBM Quantum Developer Certification — authored assessment content.',
    ],
  },
  {
    id: 'palantir',
    task: 'data_engineer_i',
    org: 'Centene — Palantir Team',
    period: 'Aug 2021 – Dec 2023',
    status: 'success',
    details: [
      'Engineered and validated 120–150GB/month of healthcare financial data in Palantir Foundry.',
      'Resolved recurring pipeline failures via Contour debugging — cut issue resolution to under a week.',
      'Built Teradata → REST API extraction pipelines with Python multiprocessing, cutting compute time ~80%.',
    ],
  },
  {
    id: 'snowflake',
    task: 'data_engineer_ii',
    org: 'Centene — Snowflake Transition Team',
    period: 'Jan 2024 – Feb 2025',
    status: 'success',
    details: [
      'Led the Palantir → Snowflake migration: redesigned data models, rewrote dbt/PySpark/SQL pipelines.',
      'Automated financial reporting with AWS Glue + stored procedures, cutting turnaround ~60% across 3 lines of business.',
      'Consolidated Medicare/Medicaid pipelines into optimized PySpark workflows, reducing dataset sprawl 25%.',
    ],
  },
  {
    id: 'production',
    task: 'data_engineer_ii',
    org: 'Centene — Production Team',
    period: 'Mar 2025 – Present',
    status: 'running',
    details: [
      'Own end-to-end monthly financial reporting pipelines (SQL, Snowflake, dbt) across 60–70 hospitals.',
      'Provisioned AWS Glue/S3 via Terraform; built ingestion pipelines cutting manual validation effort 60%.',
      'Shipped Power BI dashboards surfacing revenue leakage and duplicate claims — accelerated close cycles ~40%.',
    ],
  },
];

const branches = [
  {
    id: 'teensmart',
    task: 'fellowship/teensmart_ml',
    org: 'Delta Analytics — TeenSmart International',
    period: 'Feb 2023 – Jul 2023',
    status: 'branch',
    attachTo: 'palantir',
    details: [
      'Designed predictive models to assess high-risk behaviors among Latin American teens.',
      'Ran the ML lifecycle on AWS — DataBrew for extraction, PySpark for cleaning, SageMaker for training/deployment.',
      'Built a QuickSight dashboard recommending clinical interventions from predicted risk scores.',
    ],
  },
  {
    id: 'sanctuary',
    task: 'fellowship/project_sanctuary',
    org: 'Delta Analytics — Project Sanctuary',
    period: 'Feb 2025 – Jun 2025',
    status: 'branch',
    attachTo: 'snowflake',
    details: [
      'Analyzed longitudinal survey data to measure impact on veteran families.',
      'Built Power BI dashboards on retreat outcomes and US demographic reach, connected to Salesforce.',
    ],
  },
  {
    id: 'tazama',
    task: 'fellowship/tazama',
    org: 'Delta Analytics — Tazama Project',
    period: 'Feb 2026 – Jun 2026',
    status: 'branch',
    attachTo: 'production',
    details: [
      "Closed a visibility gap where flagged fraud transactions carried no link back to which of Tazama's 31 rules triggered them.",
      'Built a Jupyter notebook tracing each alert to its triggering rule and transaction context — giving investigators a direct path to root cause.',
    ],
  },
];

const allItems = [...nodes, ...branches];

export default function CareerDAG() {
  const [activeId, setActiveId] = useState('production');
  const active = allItems.find((n) => n.id === activeId);

  return (
    <section className="section dag-section" id="experience">
      <div className="container">
        <p className="eyebrow">career.dag — 4 tasks, 3 branches</p>
        <h2 className="section-title">The pipeline so far</h2>
        <p className="section-desc">
          Four years running end-to-end, from a quantum-computing internship to owning production
          financial reporting for Medicaid and Medicare. Select a node to inspect its run log.
        </p>

        <div className="dag">
          <div className="dag-track">
            {nodes.map((n, i) => (
              <div className="dag-node-wrap" key={n.id}>
                <button
                  className={`dag-node ${activeId === n.id ? 'is-active' : ''} status-${n.status}`}
                  onClick={() => setActiveId(n.id)}
                  aria-pressed={activeId === n.id}
                >
                  <span className={`node-dot dot-${n.status}`} />
                  <span className="node-task">{n.task}</span>
                  <span className="node-period">{n.period}</span>
                </button>
                {i < nodes.length - 1 && <span className="dag-edge" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <div className="dag-branches">
            {branches.map((b) => (
              <button
                key={b.id}
                className={`branch-node ${activeId === b.id ? 'is-active' : ''}`}
                onClick={() => setActiveId(b.id)}
              >
                <span className="branch-connector" />
                {b.task} <span className="branch-period">{b.period}</span>
              </button>
            ))}
          </div>

          <div className="dag-detail">
            {active && (
              <>
                <div className="dag-detail-head">
                  <span className={`node-dot dot-${active.status}`} />
                  <div>
                    <p className="dag-detail-org">{active.org}</p>
                    <p className="dag-detail-period">{active.period}</p>
                  </div>
                </div>
                <ul className="dag-detail-list">
                  {active.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
