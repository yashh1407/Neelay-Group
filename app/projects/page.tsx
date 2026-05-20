import type { Metadata } from "next";
import Link from "next/link";
import Icon from "../../components/Icon";
import { images } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Projects | Neelay Group",
  description:
    "Review Neelay Group project work across switchgear assemblies, control panel fabrication, bus duct systems and industrial infrastructure."
};

const projects = [
  {
    title: "Control Panel Fabrication",
    category: "Electrical Infrastructure",
    image: images.controlPanels,
    copy: "Custom electrical control panels and enclosures for industrial power and automation requirements.",
    tags: ["Enclosures", "MCC", "PCC"]
  },
  {
    title: "Switchgear Assembly Support",
    category: "RMU Systems",
    image: images.switchgear,
    copy: "Mechanical assemblies and enclosures for 11kV and 33kV ring main unit applications.",
    tags: ["11kV", "33kV", "Assembly"]
  },
  {
    title: "Bus Duct Components",
    category: "Power Distribution",
    image: images.busDuct,
    copy: "High-current conductor fabrication, GIS bus duct assemblies and busbar component support.",
    tags: ["Copper", "Aluminum", "Busbar"]
  },
  {
    title: "CNC Machined Components",
    category: "Precision Components",
    image: images.parts,
    copy: "Machined engineering components for pump, transmission and circuit breaker mechanism applications.",
    tags: ["CNC", "VMC", "Repeatability"]
  }
];

export default function ProjectsPage() {
  return (
    <main className="elite-page">
      <section className="elite-hero elite-hero--compact">
        <div className="elite-hero__image" data-reveal="image">
          <img src={images.bannerProjects} alt="HD 3D banner of industrial project portfolio and electrical infrastructure" />
        </div>
        <div className="elite-hero__content">
          <span className="elite-kicker" data-reveal>
            Portfolio Excellence
          </span>
          <h1 className="elite-title" data-reveal data-delay="80">
            Industrial manufacturing <span className="elite-red">at scale</span>.
          </h1>
          <p className="elite-lead elite-hero__copy" data-reveal data-delay="150">
            A project matrix covering fabricated enclosures, switchgear assembly
            work, bus duct components and precision machined parts.
          </p>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container">
          <div className="elite-section-head">
            <div data-reveal>
              <span className="elite-kicker">Project Matrix</span>
              <h2 className="elite-title-md">Representative manufacturing work</h2>
            </div>
            <p className="elite-copy" data-reveal>
              Project descriptions are written by capability type so they remain
              accurate without naming unverified customers or confidential program
              details.
            </p>
          </div>
          <div className="elite-bento" data-stagger="80">
            {projects.map((project, index) => (
              <article className={`elite-card ${index === 0 ? "wide" : ""}`} key={project.title}>
                <div className="elite-image-panel" style={{ minHeight: index === 0 ? 320 : 220, margin: "-34px -34px 28px" }}>
                  <img src={project.image} alt={project.title} />
                </div>
                <span className="elite-label">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <div className="elite-hero__actions" style={{ marginTop: 24 }}>
                  {project.tags.map((tag) => (
                    <span className="elite-label" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="elite-card__rule" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--panel">
        <div className="elite-container elite-feature-grid">
          <div data-reveal>
            <span className="elite-kicker">Technical Catalog</span>
            <h2 className="elite-title-md">Precision metrics</h2>
            <p className="elite-copy" style={{ marginTop: 18 }}>
              Neelay Group keeps the project conversation focused on drawings,
              material route, process sequence, coating needs and assembly
              readiness.
            </p>
          </div>
          <div className="elite-card-grid" data-stagger="80">
            {["Quality Process", "Material Route", "Drawing Review"].map((item) => (
              <article className="elite-card" key={item}>
                <span className="elite-card__icon">
                  <Icon name={item === "Material Route" ? "inventory_2" : item === "Drawing Review" ? "draw" : "verified"} />
                </span>
                <h3>{item}</h3>
                <p>
                  Needs verification against the customer drawing, application
                  requirement and production route before release.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container">
          <div className="elite-cta" data-reveal>
            <span className="elite-kicker">Submission Protocol</span>
            <h2 className="elite-title-md">Share a drawing or project brief.</h2>
            <p className="elite-copy" style={{ marginTop: 18 }}>
              Send project information to begin technical review for fabrication,
              switchgear assembly, bus duct or CNC component requirements.
            </p>
            <div className="elite-hero__actions">
              <Link className="elite-button elite-button--primary" href="/contact">
                Initialize Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
