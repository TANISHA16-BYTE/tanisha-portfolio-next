import {
  ArrowDownRight,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Student Task Manager",
    category: "PYTHON / FLASK",
    description: "A student-focused application for organising tasks and everyday academic work.",
    link: "https://student-task-manager-a1q5.onrender.com/",
    mark: "01",
  },
  {
    number: "02",
    name: "QuizForge",
    category: "COMPUTER SCIENCE",
    description: "An interactive quiz project built around practising computer science concepts.",
    link: "https://tanisha16-byte.github.io/QuizForge-CS-Quiz/",
    mark: "QF",
  },
  {
    number: "03",
    name: "Weather Dashboard",
    category: "WEB DEVELOPMENT",
    description: "A web project exploring how useful information can be presented through a clean interface.",
    link: "https://tanisha16-byte.github.io/Weather-Dashboard/",
    mark: "WX",
  },
  {
    number: "04",
    name: "Expense Tracker",
    category: "APPLICATION",
    description: "A project focused on organising and understanding everyday expenses.",
    link: "https://tanisha16-byte.github.io/Expense-Tracker/",
    mark: "₹",
  },
  {
    number: "05",
    name: "Developer Portfolio",
    category: "PERSONAL WEBSITE",
    description: "A personal space to document my work, learning and development journey.",
    link: "https://tanishajain.cv/",
    mark: "TJ",
  },
];

const skills = [
  { group: "01", title: "Programming", items: ["C++", "Python", "JavaScript"] },
  { group: "02", title: "Web development", items: ["HTML", "CSS", "React", "Next.js", "TypeScript"] },
  { group: "03", title: "Backend & data", items: ["Flask", "Node.js", "SQLite"] },
  { group: "04", title: "Tools & workflow", items: ["Git", "GitHub", "VS Code"] },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="#home" className="brand">
          <span className="brand-symbol">TJ</span>
          <span>TANISHA JAIN<span className="red-dot">.</span></span>
        </a>
        <nav>
          <a href="#work">WORK <span>01</span></a>
          <a href="#about">ABOUT <span>02</span></a>
          <a href="#skills">SKILLS <span>03</span></a>
        </nav>
        <a className="nav-contact" href="#contact">GET IN TOUCH ↗</a>
      </header>

      {/* HERO — asymmetric personal introduction */}
      <section className="hero" id="home">
        <div className="hero-main">
          <div className="hero-meta">
            <span><i className="live-dot" /> OPEN TO LEARNING & COLLABORATION</span>
            <span>BASED IN INDIA · 2026</span>
          </div>
          <p className="hero-eyebrow">A DEVELOPER IN THE MAKING</p>
          <h1>Curious<br />by <em>nature.</em><br /><span>Builder</span><br />by choice<span className="hero-period">.</span></h1>
          <div className="hero-bottom">
            <p>
              I&apos;m <strong>Tanisha Jain</strong> — a B.Tech Computer Science
              student specialising in AI &amp; ML. I like turning ideas into
              useful digital experiences, learning through code and building
              things that solve actual problems.
            </p>
            <a href="#work" className="round-link" aria-label="Explore projects">
              <ArrowDownRight size={24} />
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="hero-aside-top">
            <span>PERSONAL INDEX</span>
            <span>001 — 026</span>
          </div>
          <div className="hero-monogram">
            <span className="monogram-t">T</span>
            <span className="monogram-j">J</span>
            <span className="monogram-caption">TANISHA<br />JAIN</span>
          </div>
          <div className="hero-facts">
            <div><span>STUDYING</span><strong>B.Tech · CSE (AI &amp; ML)</strong></div>
            <div><span>INSTITUTE</span><strong>Hitech Institute of Technology</strong></div>
            <div><span>GRADUATION</span><strong>2030</strong></div>
            <div><span>CURRENT INTERESTS</span><strong>Software / AI / Product</strong></div>
          </div>
          <div className="hero-aside-foot">
            <span>LEARN. BUILD. REPEAT.</span>
            <span>↘ SCROLL TO EXPLORE</span>
          </div>
        </aside>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>THINK</span><b>✳</b><span>MAKE</span><b>✳</b><span>BREAK</span><b>✳</b><span>LEARN</span><b>✳</b><span>REPEAT</span><b>✳</b>
          <span>THINK</span><b>✳</b><span>MAKE</span><b>✳</b><span>BREAK</span><b>✳</b><span>LEARN</span><b>✳</b><span>REPEAT</span><b>✳</b>
        </div>
      </div>

      {/* FEATURED WORK — dark visual product gallery */}
      <section className="featured" id="work">
        <div className="featured-head">
          <div>
            <span className="eyebrow light-eyebrow">01 / SELECTED WORK</span>
            <h2>Ideas, meet<br /><em>execution.</em></h2>
          </div>
          <p>Two larger product explorations that represent the kind of problems I enjoy thinking about.</p>
          <span className="featured-count">FEATURED<br />PROJECTS — 02</span>
        </div>

        <article className="feature-project red-project" id="red-pen">
          <div className="feature-number">01 <span>/ PRODUCT CONCEPT</span></div>
          <div className="redpen-art">
            <div className="redpen-topline">THE BRAND GOVERNANCE PROJECT</div>
            <div className="redpen-title">the <span>red</span><br />pen<span className="redpen-dot">.</span></div>
            <div className="redpen-stroke" />
            <div className="redpen-stamp">CHECKED<br />BEFORE<br />PUBLISHING</div>
            <div className="redpen-bottomline">CONSISTENCY IS NOT AN AFTERTHOUGHT.</div>
          </div>
          <div className="feature-description">
            <div>
              <span className="eyebrow">BRAND GOVERNANCE · CODETITANS</span>
              <h3>The Red Pen</h3>
              <p>A platform concept for checking content against approved brand guidelines, facts and assets before it goes public.</p>
            </div>
            <div className="feature-tags"><span>CONTENT REVIEW</span><span>BRAND CONSISTENCY</span><span>HUMAN APPROVAL</span></div>
            <a href="https://poetic-concha-796708.netlify.app" target="_blank" rel="noreferrer" className="feature-link">EXPLORE PROJECT <ArrowUpRight size={17} /></a>
          </div>
        </article>

        <article className="feature-project voice-project" id="truevoice">
          <div className="feature-number">02 <span>/ PRODUCT EXPLORATION</span></div>
          <div className="voice-art">
            <span className="voice-art-label">A DIFFERENT WAY TO THINK ABOUT TRUST</span>
            <div className="voice-rings"><span>TV</span></div>
            <div className="voice-word">TRUE<br /><em>VOICE</em><i>.</i></div>
            <div className="voice-art-foot"><span>TRACE THE SOURCE</span><span>VERIFY THE CONTENT</span></div>
          </div>
          <div className="feature-description">
            <div>
              <span className="eyebrow">CONTENT VERIFICATION</span>
              <h3>TrueVoice</h3>
              <p>A project exploring content verification, creator-reviewer workflows and transparent records of review.</p>
            </div>
            <div className="feature-tags"><span>VERIFICATION</span><span>WORKFLOWS</span><span>TRACEABILITY</span></div>
            <a href="https://www.thetruevoice.xyz/dashboard" target="_blank" rel="noreferrer" className="feature-link">EXPLORE PROJECT <ArrowUpRight size={17} /></a>
          </div>
        </article>
      </section>

      {/* PROJECT ARCHIVE — compact list, different visual language */}
      <section className="archive section-wrap">
        <div className="archive-intro">
          <span className="eyebrow">02 / THE PROJECT ARCHIVE</span>
          <h2>Small steps.<br /><em>Real practice.</em></h2>
          <p>Not every project needs to be a big product. Some are about learning one thing properly and putting it into practice.</p>
          <a href="https://github.com/TANISHA16-BYTE" target="_blank" rel="noreferrer" className="archive-github">BROWSE MY GITHUB ↗</a>
        </div>
        <div className="archive-list">
          {projects.map((project) => (
            <a href={project.link} target="_blank" rel="noreferrer" className="archive-row" key={project.number}>
              <span className="archive-num">{project.number}</span>
              <span className="archive-mark">{project.mark}</span>
              <span className="archive-details">
                <span className="archive-category">{project.category}</span>
                <strong>{project.name}</strong>
                <small>{project.description}</small>
              </span>
              <ArrowUpRight className="archive-arrow" size={19} />
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT — personal profile, not another project card */}
      <section className="about" id="about">
        <div className="about-side">
          <span className="eyebrow">03 / THE PERSON BEHIND THE CODE</span>
          <div className="about-big-type">HELLO<span>.</span><br />AGAIN<span>.</span></div>
          <div className="about-side-note">A WORK IN PROGRESS<br />IN THE BEST WAY.</div>
        </div>
        <div className="about-content">
          <span className="about-number">A LITTLE ABOUT ME — 2026</span>
          <h2>I&apos;m interested in<br />how things <em>work.</em></h2>
          <p className="about-lead">Technology is most exciting to me when it makes something complicated feel simple.</p>
          <p>I&apos;m pursuing a B.Tech in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning at Hitech Institute of Technology.</p>
          <p>I enjoy exploring ideas, understanding the problem behind them and learning by building. I&apos;m still at the beginning of my journey, and I see that as a reason to stay curious, strengthen my fundamentals and keep improving.</p>
          <div className="education-line">
            <GraduationCap size={22} />
            <div><strong>Hitech Institute of Technology</strong><span>B.Tech · CSE (AI &amp; ML) · 2026–2030</span></div>
            <span className="education-year">2030</span>
          </div>
        </div>
      </section>

      {/* SKILLS — structured technical index */}
      <section className="toolkit section-wrap" id="skills">
        <div className="toolkit-head">
          <div>
            <span className="eyebrow">04 / TECHNICAL TOOLKIT</span>
            <h2>What I work<br /><em>with.</em></h2>
          </div>
          <div className="toolkit-aside">
            <span className="toolkit-symbol">⌘</span>
            <p>A growing toolkit, shaped by coursework, experimentation and hands-on projects. These are technologies I have explored—not claims of expertise.</p>
          </div>
        </div>
        <div className="toolkit-grid">
          {skills.map((skill) => (
            <div className="toolkit-group" key={skill.group}>
              <span className="toolkit-group-no">{skill.group}</span>
              <h3>{skill.title}</h3>
              <div className="toolkit-items">
                {skill.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="toolkit-foot">
          <span>ALWAYS LEARNING</span>
          <span>THE TOOL IS ONLY PART OF THE WORK ↗</span>
        </div>
      </section>

      {/* CONTACT — dramatic closing */}
      <section className="contact" id="contact">
        <div className="contact-top">
          <span className="eyebrow light-eyebrow">05 / OPEN ENDING</span>
          <span className="contact-index">INDIA · 2026</span>
        </div>
        <h2>Good things<br />start with <em>hello.</em></h2>
        <div className="contact-bottom">
          <p>Interested in exchanging ideas, learning together or building something useful? Find me here.</p>
          <a href="https://github.com/TANISHA16-BYTE" target="_blank" rel="noreferrer">GITHUB PROFILE <ArrowUpRight size={18} /></a>
        </div>
        <div className="contact-watermark">TJ<span>.</span></div>
      </section>

      <footer className="footer">
        <a href="#home" className="footer-brand">TJ<span>.</span> TANISHA JAIN</a>
        <span>BUILT WITH CURIOSITY · © 2026</span>
        <a href="https://github.com/TANISHA16-BYTE" target="_blank" rel="noreferrer">GITHUB ↗</a>
      </footer>
    </main>
  );
}
