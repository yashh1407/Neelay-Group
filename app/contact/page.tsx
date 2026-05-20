import type { Metadata } from "next";
import Icon from "../../components/Icon";
import { companies, images } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Contact Neelay Group | Project Inquiry",
  description:
    "Contact Neelay Group for precision sheet metal fabrication, switchgear assembly, control panel and CNC component manufacturing inquiries."
};

const inquiryBlocks = [
  {
    icon: "hub",
    title: "General Inquiry",
    copy: "Standard correspondence regarding services, partnerships or corporate information."
  },
  {
    icon: "rocket_launch",
    title: "Technical Project Brief",
    copy: "Accelerated channel for project drawings, fabrication requirements and specification review."
  }
];

export default function ContactPage() {
  return (
    <main className="elite-page">
      <section className="elite-hero elite-hero--compact">
        <div className="elite-hero__image" data-reveal="image">
          <img src={images.bannerContact} alt="HD 3D banner of manufacturing inquiry and facility network" />
        </div>
        <div className="elite-hero__content">
          <span className="elite-kicker" data-reveal>
            Technical Inquiry Protocol
          </span>
          <h1 className="elite-title" data-reveal data-delay="80">
            Global deployment <span className="elite-red">network</span>.
          </h1>
          <p className="elite-lead elite-hero__copy" data-reveal data-delay="150">
            Streamlined communication for precision manufacturing partnerships,
            technical consultation and fabrication project submissions.
          </p>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container">
          <div className="elite-section-head">
            <div data-reveal>
              <span className="elite-kicker">Inquiry Matrix</span>
              <h2 className="elite-title-md">Choose the correct communication route.</h2>
            </div>
            <p className="elite-lead" data-reveal>
              Send general company questions or technical project details through
              the correct inquiry path.
            </p>
          </div>
          <div className="elite-card-grid" data-stagger="80">
            {inquiryBlocks.map((block) => (
              <article className="elite-card" key={block.title}>
                <span className="elite-card__icon">
                  <Icon name={block.icon} />
                </span>
                <h3>{block.title}</h3>
                <p>{block.copy}</p>
                <div className="elite-card__rule" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--panel">
        <div className="elite-container elite-feature-grid">
          <div data-reveal>
            <span className="elite-kicker">Submission Framework</span>
            <h2 className="elite-title-md">Send your requirement</h2>
            <p className="elite-copy" style={{ marginTop: 18 }}>
              Include drawings, application details, material expectations and
              production quantities wherever available. The team can confirm the
              next technical review step.
            </p>
          </div>
          <form className="elite-form" data-reveal>
            <div className="elite-field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" placeholder="Enter operator name" />
            </div>
            <div className="elite-field">
              <label htmlFor="email">Corporate email</label>
              <input id="email" name="email" type="email" placeholder="name@organization.com" />
            </div>
            <div className="elite-field">
              <label htmlFor="project">Project classification</label>
              <select id="project" name="project" defaultValue="">
                <option value="" disabled>
                  Select department
                </option>
                <option>Control panel fabrication</option>
                <option>Switchgear assembly</option>
                <option>Bus duct systems</option>
                <option>CNC machined components</option>
                <option>Materials inquiry</option>
              </select>
            </div>
            <div className="elite-field">
              <label htmlFor="message">Technical specifications</label>
              <textarea
                id="message"
                name="message"
                placeholder="Provide drawings, material requirements, quantities, tolerances and project context."
              />
            </div>
            <button className="elite-button elite-button--primary" type="submit">
              Initialize Protocol
              <Icon name="arrow_forward" />
            </button>
          </form>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container">
          <div className="elite-section-head">
            <div data-reveal>
              <span className="elite-kicker">Manufacturing Plants</span>
              <h2 className="elite-title-md">Global manufacturing plants</h2>
            </div>
            <p className="elite-copy" data-reveal>
              The manufacturing ecosystem includes Nashik and Amravati units with
              fabrication, machining, coating and assembly responsibilities.
            </p>
          </div>
          <div className="elite-card-grid" data-stagger="80">
            {companies.slice(0, 4).map((company) => (
              <article className="elite-card" key={company.name}>
                <div className="elite-image-panel" style={{ minHeight: 200, margin: "-34px -34px 24px" }}>
                  <img src={company.image} alt={`${company.name} manufacturing location`} />
                </div>
                <span className="elite-label">Active</span>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--panel">
        <div className="elite-container elite-feature-grid">
          <div className="elite-image-panel" data-reveal="image">
            <img src={images.map} alt="Neelay Group manufacturing network visual" />
          </div>
          <div data-reveal>
            <span className="elite-kicker">Signal Intercept</span>
            <h2 className="elite-title-md">Nashik, Maharashtra</h2>
            <p className="elite-copy" style={{ marginTop: 18 }}>
              MIDC Satpur Industrial Area, Nashik, Maharashtra, India.
            </p>
            <div className="elite-news-stack" style={{ marginTop: 26 }}>
              <span className="elite-label">Project drawings: attach in direct email workflow</span>
              <span className="elite-label">Response routing: capability specific</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
