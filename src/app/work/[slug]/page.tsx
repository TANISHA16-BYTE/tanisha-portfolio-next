import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";

const work = {
  "the-red-pen": {
    number: "01",
    name: "The Red Pen",
    type: "BRAND GOVERNANCE PLATFORM",
    intro: "A concept for catching brand inconsistencies before content reaches the public.",
    problem: "Content can be created by different employees, agencies and AI tools. Without a consistent review process, messaging, terminology and approved facts can drift.",
    approach: "The Red Pen is designed around a pre-publication review workflow: compare content with approved brand guidelines, facts and assets, then let a human reviewer make the final decision.",
    contribution: "Product concept and hackathon project development as part of SoloArc.",
    features: ["Pre-publication content review", "Brand guideline consistency", "Approved facts and assets as reference points", "Human review and approval"],
    stack: ["Project technologies to be confirmed"],
    repo: "https://github.com/TANISHA16-BYTE",
    repoLabel: "GitHub profile",
    style: "red",
    visual: "RED PEN",
    visualSub: "REVIEW BEFORE YOU PUBLISH",
  },
  "truevoice": {
    number: "02",
    name: "TrueVoice",
    type: "CONTENT VERIFICATION",
    intro: "An exploration of trust, verification and traceability in digital content workflows.",
    problem: "When content passes between creators and reviewers, it can be difficult to understand what has been checked and how the review process progressed.",
    approach: "TrueVoice explores creator-reviewer workflows, content verification and transparent records that make the review process easier to follow.",
    contribution: "Project development and backend-focused implementation. Specific shipped features and technologies should be confirmed against the current repository.",
    features: ["Creator-reviewer workflow exploration", "Content verification", "Review traceability", "Transparent review records"],
    stack: ["Project technologies to be confirmed"],
    repo: "https://github.com/TANISHA16-BYTE",
    repoLabel: "GitHub profile",
    style: "voice",
    visual: "TRUEVOICE",
    visualSub: "TRUST NEEDS A TRACE",
  },
  "student-task-manager": {
    number: "03",
    name: "Student Task Manager",
    type: "STUDENT PRODUCTIVITY · WEB APPLICATION",
    intro: "A student-focused application for organising tasks and everyday academic work.",
    problem: "Keeping track of academic tasks and day-to-day responsibilities can become difficult when everything is scattered.",
    approach: "A Flask-based project focused on bringing student task organisation into one application.",
    contribution: "Project implementation. The exact feature list and individual contributions can be expanded after reviewing the repository.",
    features: ["Student task organisation", "Task-management application", "Flask-based project"],
    stack: ["Python", "Flask"],
    repo: "https://github.com/TANISHA16-BYTE/Student-task-manager",
    repoLabel: "View source code",
    style: "student",
    visual: "DO THE WORK.",
    visualSub: "ONE TASK AT A TIME",
  },
  "quizforge": {
    number: "04",
    name: "QuizForge",
    type: "COMPUTER SCIENCE · QUIZ PROJECT",
    intro: "An interactive quiz project built around practising computer science concepts.",
    problem: "Learning technical concepts benefits from active practice, not just reading notes.",
    approach: "QuizForge is a computer science quiz project designed around interactive practice.",
    contribution: "Project development. Further feature and technology details should be confirmed from the project source.",
    features: ["Computer science quiz experience", "Interactive practice"],
    stack: ["Technologies to be confirmed"],
    repo: "https://github.com/TANISHA16-BYTE/QuizForge-CS-Quiz",
    repoLabel: "View source code",
    style: "quiz",
    visual: "QUIZ / FORGE",
    visualSub: "LEARN BY PRACTISING",
  },
  "weather-dashboard": {
    number: "05",
    name: "Weather Dashboard",
    type: "WEB DEVELOPMENT",
    intro: "A web project exploring how useful information can be presented through a clean interface.",
    problem: "Weather information is most useful when it is easy to scan and understand.",
    approach: "A dashboard-style web project focused on presenting weather information through an accessible interface.",
    contribution: "Project development. Specific data sources, features and stack need verification.",
    features: ["Weather dashboard concept", "Information-focused interface"],
    stack: ["Technologies to be confirmed"],
    repo: "https://github.com/TANISHA16-BYTE",
    repoLabel: "Browse GitHub profile",
    style: "weather",
    visual: "A CHANGE IN THE AIR",
    visualSub: "WEATHER DASHBOARD",
  },
  "expense-tracker": {
    number: "06",
    name: "Expense Tracker",
    type: "APPLICATION",
    intro: "A project focused on organising and understanding everyday expenses.",
    problem: "Tracking everyday spending is easier when information is organised in one place.",
    approach: "An expense-tracking project exploring the organisation of everyday financial records.",
    contribution: "Project development. Specific functionality and technology details need verification.",
    features: ["Expense organisation", "Everyday spending overview"],
    stack: ["Technologies to be confirmed"],
    repo: "https://github.com/TANISHA16-BYTE",
    repoLabel: "Browse GitHub profile",
    style: "expense",
    visual: "MAKE IT COUNT.",
    visualSub: "EXPENSE TRACKER",
  },
  "developer-portfolio": {
    number: "07",
    name: "Developer Portfolio",
    type: "PERSONAL WEBSITE",
    intro: "A personal space to document projects, learning and a developing technical identity.",
    problem: "A collection of projects is more meaningful when people can understand the thinking and work behind them.",
    approach: "A personal portfolio that brings together selected work, technical interests and the journey behind each project.",
    contribution: "Personal portfolio design and development.",
    features: ["Personal introduction", "Project showcase", "Skills and learning journey"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/TANISHA16-BYTE",
    repoLabel: "Browse GitHub profile",
    style: "portfolio",
    visual: "MADE WITH INTENTION.",
    visualSub: "A PERSONAL PORTFOLIO",
  },
};

type Project = (typeof work)[keyof typeof work];

function ProjectPage({ project }: { project: Project }) {
  return (
    <main className={`case-page case-${project.style}`}>
      <header className="case-nav">
        <Link href="/" className="case-brand">TJ<span>.</span> / PORTFOLIO</Link>
        <Link href="/#work" className="case-back"><ArrowLeft size={15} /> ALL WORK</Link>
      </header>

      <section className="case-hero">
        <div className="case-meta">
          <span>PROJECT {project.number} / 07</span>
          <span>{project.type}</span>
        </div>
        <div className="case-hero-title">
          <p>AN INDEPENDENT PROJECT STORY</p>
          <h1>{project.name}<span>.</span></h1>
          <p className="case-intro">{project.intro}</p>
        </div>
        <div className="case-art">
          <span className="case-art-index">TJ — SELECTED WORK</span>
          <div className="case-art-main">{project.visual}</div>
          <span className="case-art-sub">{project.visualSub}</span>
          <span className="case-art-mark">{project.number}</span>
        </div>
        <div className="case-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="case-story">
        <div className="case-story-label">
          <span>01 — THE THINKING</span>
          <span>CONTEXT / APPROACH</span>
        </div>
        <div className="case-story-content">
          <article>
            <span>THE PROBLEM</span>
            <h2>What needed<br />attention<span>?</span></h2>
            <p>{project.problem}</p>
          </article>
          <article>
            <span>THE APPROACH</span>
            <h2>From idea<br />to direction<span>.</span></h2>
            <p>{project.approach}</p>
          </article>
        </div>
      </section>

      <section className="case-details">
        <div className="case-details-heading">
          <span>02 — THE WORK</span>
          <h2>What went<br /><em>into it.</em></h2>
        </div>
        <div className="case-details-content">
          <div className="case-feature-list">
            <span className="case-small-label">PROJECT SCOPE</span>
            {project.features.map((feature, i) => (
              <div className="case-feature" key={feature}>
                <span>0{i + 1}</span>
                <strong>{feature}</strong>
                <span>↗</span>
              </div>
            ))}
          </div>
          <div className="case-contribution">
            <span className="case-small-label">MY CONTRIBUTION</span>
            <p>{project.contribution}</p>
            <span className="case-small-label case-stack-label">TECHNOLOGIES / NOTES</span>
            <div className="case-stack">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="case-next">
        <span>03 — CONTINUE EXPLORING</span>
        <h2>Curiosity<br /><em>continues.</em></h2>
        <p>This page is a project overview. A live demo can be added when a verified deployment is available.</p>
        <div className="case-actions">
          <a href={project.repo} target="_blank" rel="noreferrer">
            {project.repoLabel} <ArrowUpRight size={17} />
          </a>
          <Link href="/#work">BACK TO ALL WORK <ArrowLeft size={16} /></Link>
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/">TJ<span>.</span> TANISHA JAIN</Link>
        <span>BUILT WITH CURIOSITY · 2026</span>
        <Link href="/#contact">CONTACT ↗</Link>
      </footer>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(work).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = work[slug as keyof typeof work];

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${project.name} | Project Overview`,
    description: project.intro,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${project.name} | Tanisha Jain`,
      description: project.intro,
      type: "article",
      url: `https://tanishajain.cv/work/${slug}`,
    },
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = work[slug as keyof typeof work];
  if (!project) notFound();
  return <ProjectPage project={project} />;
}
