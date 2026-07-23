import './Skills.css';

const groups = [
  { label: 'languages', items: ['Python', 'SQL', 'PySpark', 'Scala', 'Java', 'Shell'] },
  { label: 'pipelines', items: ['Apache Spark', 'Airflow', 'dbt', 'ETL/ELT', 'Star & Snowflake Schema'] },
  { label: 'cloud', items: ['AWS Glue', 'S3', 'Athena', 'Lambda', 'EC2', 'DynamoDB', 'Snowflake', 'Palantir Foundry', 'Teradata'] },
  { label: 'analytics', items: ['Power BI', 'Tableau', 'QuickSight', 'Advanced Excel'] },
  { label: 'ops', items: ['CI/CD', 'GitHub', 'Terraform (IaC basics)', 'Query Tuning', 'Cost Optimization'] },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="eyebrow">stack.yaml</p>
        <h2 className="section-title">Tools I run in production</h2>
        <div className="skills-grid">
          {groups.map((g) => (
            <div className="skills-group" key={g.label}>
              <p className="skills-group-label">{g.label}:</p>
              <div className="skills-chips">
                {g.items.map((item) => (
                  <span className="skill-chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
