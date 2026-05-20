import type { Metadata } from "next";
import Link from "next/link";
import Icon from "../components/Icon";
import { capabilityCards, companies, images, stats } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Neelay Group | Precision Sheet Metal Manufacturing",
  description:
    "Neelay Group provides precision sheet metal fabrication, switchgear assemblies, control panel fabrication, bus duct systems and CNC components."
};

const operations = [
  {
    icon: "terminal",
    title: "Fabrication Logic",
    copy: "Structured manufacturing routes for electrical enclosures, control panels and engineered sheet metal assemblies."
  },
  {
    icon: "settings_input_component",
    title: "Assembly Synthesis",
    copy: "Integrated support for RMU switchgear assemblies, bus duct systems and power distribution components."
  },
  {
    icon: "factory",
    title: "Plant Network",
    copy: "A multi-location manufacturing ecosystem across Nashik and Amravati for fabrication, machining and assembly."
  }
];

export default function HomePage() {
  return (
    <main className="elite-page">
      <section className="elite-hero">
        <div className="elite-hero__image" data-reveal="image">
          <img src={images.bannerHome} alt="HD 3D banner of precision industrial manufacturing facility" />
        </div>
        <div className="elite-hero__content">
          <span className="elite-kicker" data-reveal>
            ID: NG-SYS-1995
          </span>
          <h1 className="elite-title-xl" data-reveal data-delay="80">
            The Architecture of <span className="elite-red">Engineered Precision.</span>
          </h1>
          <p className="elite-lead elite-hero__copy" data-reveal data-delay="150">
            Precision sheet metal fabrication, switchgear assemblies, control panel
            fabrication and CNC components for industrial customers.
          </p>
          <div className="elite-hero__actions" data-reveal data-delay="220">
            <Link className="elite-button elite-button--primary" href="/capabilities">
              Explore Capabilities
            </Link>
            <Link className="elite-button elite-button--secondary" href="/contact">
              Contact Lead Engineer
            </Link>
          </div>
        </div>
        <div className="elite-hero__metrics" data-stagger="70">
          {stats.slice(0, 3).map((stat) => (
            <div className="elite-hero__metric" key={stat.label}>
              <span className="elite-meta">{stat.label}</span>
              <strong
                data-count-target={stat.value.replace(/\D/g, "")}
                data-count-suffix={stat.value.includes("+") ? "+" : ""}
              >
                {stat.value}
              </strong>
            </div>
          ))}
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container elite-feature-grid">
          <div data-reveal>
            <span className="elite-kicker">01 / Operations</span>
            <h2 className="elite-title-md">Technical Synthesis</h2>
            <div className="elite-hairline" style={{ marginTop: 28, maxWidth: 84 }} />
          </div>
          <div>
            <p className="elite-lead" data-reveal>
              Neelay Group connects material preparation, precision fabrication,
              machining, coating and final assembly into dependable industrial
              manufacturing programs.
            </p>
            <div className="elite-card-grid" style={{ marginTop: 42 }} data-stagger="90">
              {operations.map((item) => (
                <article className="elite-card" key={item.title}>
                  <span className="elite-card__icon">
                    <Icon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="elite-card__rule" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--panel">
        <div className="elite-container">
          <div className="elite-section-head">
            <div data-reveal>
              <span className="elite-kicker">02 / Capabilities</span>
              <h2 className="elite-title">Precision domains customers source from us.</h2>
            </div>
            <p className="elite-copy" data-reveal>
              The capability portfolio is focused on industrial fabrication work
              with practical assembly support for electrical infrastructure and
              engineered component requirements.
            </p>
          </div>
          <div className="elite-card-grid elite-card-grid--four" data-stagger="80">
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

      <section className="elite-section elite-section--white">
        <div className="elite-container elite-feature-grid">
          <div data-reveal>
            <span className="elite-kicker">03 / Global Reach</span>
            <h2 className="elite-title">Manufacturing network anchored in India.</h2>
            <p className="elite-copy" style={{ marginTop: 22 }}>
              Plants across Nashik and Amravati support fabrication, machining,
              powder coating, silver coating and assembly requirements.
            </p>
          </div>
          <div className="elite-image-panel" data-reveal="image">
            <img src={images.facility} alt="Neelay Group manufacturing facility" />
            <div className="elite-image-panel__tag">
              <span className="elite-meta">Operational footprint</span>
            </div>
          </div>
        </div>
        <div className="elite-container" style={{ marginTop: 34 }}>
          <div className="elite-card-grid" data-stagger="70">
            {companies.slice(0, 3).map((company) => (
              <article className="elite-card" key={company.name}>
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
          <div className="elite-stat-row" data-stagger="80">
            {stats.map((stat) => (
              <div className="elite-stat" key={stat.label}>
                <strong
                  data-count-target={stat.value.replace(/\D/g, "")}
                  data-count-suffix={stat.value.includes("+") ? "+" : ""}
                >
                  {stat.value}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container">
          <div className="elite-cta" data-reveal>
            <span className="elite-kicker">04 / Engagement</span>
            <h2 className="elite-title-md">Strategic Initialization</h2>
            <p className="elite-copy" style={{ marginTop: 18, maxWidth: 640 }}>
              Share your fabrication, enclosure, switchgear or CNC component
              requirement and the team will route it to the right manufacturing desk.
            </p>
            <div className="elite-hero__actions">
              <Link className="elite-button elite-button--primary" href="/contact">
                Request Specifications
              </Link>
              <Link className="elite-button elite-button--light" href="/projects">
                Review Project Matrix
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
