import type { Metadata } from "next";
import Link from "next/link";
import { companies, images } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "About Neelay Group | Precision Manufacturing Company",
  description:
    "Learn about Neelay Group of Companies, a precision sheet metal fabrication and industrial manufacturing group based in Maharashtra."
};

const milestones = [
  {
    year: "1995",
    title: "Manufacturing foundation",
    copy: "Neelay Industries Plant 1 began operations in Satpur MIDC, Nashik."
  },
  {
    year: "2008",
    title: "Group expansion",
    copy: "Enam Castings added punching and panel assembly support for switchgear requirements."
  },
  {
    year: "2023",
    title: "Amravati capacity",
    copy: "Neelay Industries Plant 2 expanded punching, bending, powder coating and assembly capacity."
  },
  {
    year: "2025",
    title: "Special process addition",
    copy: "Plant 3 added silver coating capability for specialized industrial work."
  }
];

const integrity = [
  {
    number: "01",
    title: "Precision",
    copy: "Manufacturing decisions are aligned to drawing, fitment and assembly requirements."
  },
  {
    number: "02",
    title: "Efficiency",
    copy: "Multi-plant production routing supports practical timelines and repeatable output."
  },
  {
    number: "03",
    title: "Accountability",
    copy: "Documentation and internal checks support handover from material to finished assembly."
  }
];

export default function AboutPage() {
  return (
    <main className="elite-page">
      <section className="elite-hero elite-hero--compact">
        <div className="elite-hero__image" data-reveal="image">
          <img src={images.bannerAbout} alt="HD 3D banner of modern industrial headquarters and manufacturing facility" />
        </div>
        <div className="elite-hero__content">
          <span className="elite-kicker" data-reveal>
            Institutional Profile
          </span>
          <h1 className="elite-title" data-reveal data-delay="80">
            Pioneering the architecture of <span className="elite-red">modern industry.</span>
          </h1>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container elite-feature-grid">
          <div data-reveal>
            <span className="elite-kicker">Our Core Foundation</span>
            <h2 className="elite-title-md">Neelay Group of Companies</h2>
          </div>
          <div data-reveal>
            <p className="elite-lead">
              Neelay Group operates across precision sheet metal fabrication,
              switchgear assemblies, electrical enclosures, machined components,
              powder coating and related industrial manufacturing support.
            </p>
            <p className="elite-copy" style={{ marginTop: 20 }}>
              The group network includes multiple manufacturing units in Nashik and
              Amravati, serving customers that require dependable fabricated
              assemblies and engineered component programs.
            </p>
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--panel">
        <div className="elite-container elite-feature-grid">
          <div className="elite-image-panel" data-reveal="image">
            <img src={images.panels} alt="Neelay Group sheet metal and fabrication work" />
            <div className="elite-image-panel__tag">
              <span className="elite-meta">Precision manufacturing</span>
            </div>
          </div>
          <div data-reveal>
            <span className="elite-kicker">Linear Evolution</span>
            <h2 className="elite-title-md">The trajectory of innovation</h2>
            <div className="elite-news-stack" style={{ marginTop: 34 }}>
              {milestones.map((item) => (
                <article className="elite-card" key={item.year}>
                  <span className="elite-label">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="elite-card__rule" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container">
          <div className="elite-section-head">
            <div data-reveal>
              <span className="elite-kicker">Global Footprint</span>
              <h2 className="elite-title">Strategic fabrication hubs.</h2>
            </div>
            <p className="elite-copy" data-reveal>
              A practical network of facilities supports punching, bending, CNC,
              VMC, coating, busbar, panel assembly and specialized process work.
            </p>
          </div>
          <div className="elite-card-grid" data-stagger="80">
            {companies.map((company) => (
              <article className="elite-card" key={company.name}>
                <div className="elite-image-panel" style={{ minHeight: 180, margin: "-34px -34px 24px" }}>
                  <img src={company.image} alt={`${company.name} facility`} />
                </div>
                <span className="elite-label">Est. {company.est}</span>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--panel">
        <div className="elite-container">
          <span className="elite-kicker" data-reveal>
            System Code
          </span>
          <h2 className="elite-title" data-reveal>
            Operational integrity.
          </h2>
          <div className="elite-process" style={{ marginTop: 42 }} data-stagger="80">
            {integrity.map((item) => (
              <article className="elite-process__item" key={item.title}>
                <span className="elite-label">{item.number}</span>
                <strong>{item.title}</strong>
                <p className="elite-copy">{item.copy}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 34 }} data-reveal>
            <Link className="elite-button elite-button--primary" href="/contact">
              Start Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
