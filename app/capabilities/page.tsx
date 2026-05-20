import type { Metadata } from "next";
import Link from "next/link";
import Icon from "../../components/Icon";
import { capabilityCards, images } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Capabilities | Neelay Group",
  description:
    "Explore Neelay Group capabilities including control panel fabrication, switchgear assemblies, bus duct systems and CNC machined components."
};

const pipeline = [
  {
    phase: "Phase_01",
    title: "Technical Review",
    copy: "Drawing, material, tolerance and assembly requirements are reviewed before production routing."
  },
  {
    phase: "Phase_02",
    title: "Fabrication Route",
    copy: "Punching, bending, CNC or VMC process steps are aligned to the component or enclosure requirement."
  },
  {
    phase: "Phase_03",
    title: "Coating and Assembly",
    copy: "Powder coating, silver coating and assembly support are scheduled where required."
  },
  {
    phase: "Phase_04",
    title: "Dispatch Readiness",
    copy: "Internal checks support release of components, panels and assemblies for customer delivery."
  }
];

const metrics = [
  { id: "SYS-01", area: "Control panel fabrication", metric: "Configured", latency: "Project based" },
  { id: "SYS-02", area: "RMU assemblies", metric: "11kV / 33kV", latency: "Assembly route" },
  { id: "SYS-03", area: "Bus duct systems", metric: "Copper / Aluminum", latency: "Application based" }
];

export default function CapabilitiesPage() {
  return (
    <main className="elite-page">
      <section className="elite-hero elite-hero--compact">
        <div className="elite-hero__image" data-reveal="image">
          <img src={images.bannerCapabilities} alt="HD 3D banner of precision manufacturing capabilities" />
        </div>
        <div className="elite-hero__content">
          <span className="elite-kicker" data-reveal>
            Infrastructure Capabilities
          </span>
          <h1 className="elite-title" data-reveal data-delay="80">
            Infrastructure <span className="elite-red">capabilities</span>.
          </h1>
          <p className="elite-lead elite-hero__copy" data-reveal data-delay="150">
            Practical manufacturing capabilities for sheet metal fabrication,
            electrical infrastructure assemblies and precision component work.
          </p>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container">
          <div className="elite-section-head">
            <div data-reveal>
              <span className="elite-kicker">Module_01 / 04</span>
              <h2 className="elite-title-md">Technical domains</h2>
            </div>
            <p className="elite-copy" data-reveal>
              Capabilities are organized around the real work customers source
              from Neelay Group across enclosures, switchgear, bus duct and CNC
              component programs.
            </p>
          </div>
          <div className="elite-card-grid elite-card-grid--four" data-stagger="70">
            {capabilityCards.map((card, index) => (
              <article className="elite-card" key={card.title}>
                <span className="elite-card__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="elite-card__icon">
                  <Icon name={card.icon} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <div className="elite-card__rule" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--panel">
        <div className="elite-container elite-feature-grid">
          <div data-reveal>
            <span className="elite-kicker">Execution Protocol</span>
            <h2 className="elite-title-md">Technical execution pipeline</h2>
            <p className="elite-copy" style={{ marginTop: 18 }}>
              The workflow advances from technical review to fabrication,
              coating, assembly and dispatch readiness.
            </p>
          </div>
          <div className="elite-news-stack" data-stagger="75">
            {pipeline.map((item) => (
              <article className="elite-card" key={item.phase}>
                <span className="elite-label">{item.phase}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container elite-feature-grid">
          <div className="elite-image-panel" data-reveal="image">
            <img src={images.capabilitiesTechnology} alt="Technical manufacturing process and component inspection" />
            <div className="elite-image-panel__tag">
              <span className="elite-meta">Capability validation</span>
            </div>
          </div>
          <div data-reveal>
            <span className="elite-kicker">Real-time telemetry</span>
            <h2 className="elite-title-md">System efficiency metrics</h2>
            <div style={{ marginTop: 28, overflowX: "auto" }}>
              <table className="elite-table">
                <thead>
                  <tr>
                    <th>Metric ID</th>
                    <th>Capability Domain</th>
                    <th>Status</th>
                    <th>Route</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((metric) => (
                    <tr key={metric.id}>
                      <td>{metric.id}</td>
                      <td>{metric.area}</td>
                      <td>{metric.metric}</td>
                      <td>{metric.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="elite-hero__actions">
              <Link className="elite-button elite-button--primary" href="/contact">
                Submit Requirement
              </Link>
              <Link className="elite-button elite-button--secondary" href="/projects">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
