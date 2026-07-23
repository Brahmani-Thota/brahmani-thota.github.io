import './Recommendations.css';

const recommendation = {
  paragraphs: [
    'I was privileged enough to have the opportunity to invite Brahmani to join Centene and my team. As a candidate, she outshined other suitors with more experience. I had strong feeling, after her interviews, that she would be a great asset.',
    'She helped deliver a high profile project to market, the resulting program supports medical enrollment and the automation of assignments of new and unaffiliated members to high performing providers.',
    'Unfortunately, she is no longer on my team. But she is still contributing to Centene on another team in my organization. Her continued efforts has earned her an FTE conversion recently, and she continues to be a key contributer to her new team.',
    'Brahmani is an incredible teammate and has boundless energy. I am proud of her for what she has accomplished in a short time at Centene. I am also honored to be one of her first leads in the professional realm in her post college career.',
    "I don't think she even fully realizes the positive impacts of her efforts to my team and the Centene enrollment process. I couldn't have brought my project to production without her contributions!",
    'I will enthusiastically serve as a personal reference should she ever need one and will be eternally grateful to her for helping me deliver a very successful project!',
  ],
  name: 'John Heidbrink',
  title: 'Sr. Application Software Engineer, Centene',
  linkedin: 'https://www.linkedin.com/in/john-heidbrink-09160614/',
};

export default function Recommendations() {
  return (
    <section className="section" id="recommendations">
      <div className="container">
        <p className="eyebrow">reviews.log</p>
        <h2 className="section-title">What people say</h2>
        <div className="rec-single">
          <span className="rec-mark">&ldquo;</span>
          <div className="rec-body">
            {recommendation.paragraphs.map((p, i) => (
              <p className="rec-quote" key={i}>{p}</p>
            ))}
          </div>
          <div className="rec-author">
            <a
              href={recommendation.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rec-name rec-name-link"
            >
              {recommendation.name} ↗
            </a>
            <p className="rec-title">{recommendation.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
