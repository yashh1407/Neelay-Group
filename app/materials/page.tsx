import type { Metadata } from "next";
import Link from "next/link";
import Icon from "../../components/Icon";
import { images, materialCards } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Materials | Neelay Group",
  description:
    "Material routes for Neelay Group fabrication work including sheet metal, copper, aluminum and machined engineering metals."
};

const indexRows = [
  {
    specification: "CRCA / Sheet Metal",
    use: "Electrical enclosures and IP-rated assemblies",
    status: "Project specific"
  },
  {
    specification: "Copper / Aluminum",
    use: "Busbars, bus duct and conductor assemblies",
    status: "Application specific"
  },
  {
    specification: "Machined Metals",
    use: "CNC and VMC component programs",
    status: "Drawing specific"
  }
];

const protocols = [
  {
    step: "01",
    title: "Material documentation",
    copy: "Material records are reviewed where customer or project documentation requires them."
  },
  {
    step: "02",
    title: "Process alignment",
    copy: "Fabrication, machining, coating and assembly routes are aligned to the selected material and application."
  },
  {
    step: "03",
    title: "Final release",
    copy: "Finished parts and assemblies are checked against drawing, fitment and dispatch requirements."
  }
];

export default function MaterialsPage() {
  return (
    <main className="elite-page">
      <section className="elite-hero elite-hero--compact">
        <div className="elite-hero__image" data-reveal="image">
          <img src={images.bannerMaterials} alt="HD 3D banner of material analysis and fabrication materials" />
        </div>
        <div className="elite-hero__content">
          <span className="elite-kicker" data-reveal>
            Precision Material Analysis
          </span>
          <h1 className="elite-title" data-reveal data-delay="80">
            Metallurgical lab <span className="elite-red">analysis</span>.
          </h1>
          <p className="elite-lead elite-hero__copy" data-reveal data-delay="150">
            Material selection, fabrication route and documentation are coordinated
            around each project requirement.
          </p>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container">
          <div className="elite-section-head">
            <div data-reveal>
              <span className="elite-kicker">Material Specifications</span>
              <h2 className="elite-title-md">Engineering material routes</h2>
            </div>
            <p className="elite-copy" data-reveal>
              The material portfolio is presented by application type. Final grade,
              thickness and finish must be verified against the customer drawing.
            </p>
          </div>
          <div className="elite-card-grid" data-stagger="80">
            {materialCards.map((card) => (
              <article className="elite-card" key={card.title}>
                <span className="elite-card__icon">
                  <Icon name="layers" />
                </span>
                <span className="elite-label">{card.grade}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <div className="elite-news-stack" style={{ marginTop: 24 }}>
                  {card.metrics.map((metric) => (
                    <span className="elite-label" key={metric}>
                      {metric}
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
            <span className="elite-kicker">Registry ID: M-04</span>
            <h2 className="elite-title-md">Material grade index</h2>
            <p className="elite-copy" style={{ marginTop: 18 }}>
              The index helps buyers map materials to common use cases before
              sending the final drawing and specification.
            </p>
          </div>
          <div style={{ overflowX: "auto" }} data-reveal>
            <table className="elite-table">
              <thead>
                <tr>
                  <th>Specification ID</th>
                  <th>Material Category</th>
                  <th>Verification Status</th>
                </tr>
              </thead>
              <tbody>
                {indexRows.map((row) => (
                  <tr key={row.specification}>
                    <td>{row.specification}</td>
                    <td>{row.use}</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--dark">
        <div className="elite-container elite-feature-grid">
          <div data-reveal>
            <span className="elite-kicker">Advanced Fabrication</span>
            <h2 className="elite-title-md">Fabrication protocols.</h2>
            <p className="elite-copy" style={{ marginTop: 18 }}>
              Material decisions support bend quality, coating quality, conductor
              performance and final assembly reliability.
            </p>
          </div>
          <div className="elite-news-stack" data-stagger="80">
            {protocols.map((item) => (
              <article className="elite-card" key={item.step}>
                <span className="elite-label">{item.step}</span>
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
            <img src={images.materialsAlchemist} alt="Material inspection and preparation process" />
          </div>
          <div data-reveal>
            <span className="elite-kicker">Technical Inquiry</span>
            <h2 className="elite-title-md">Confirm the material route before production.</h2>
            <p className="elite-copy" style={{ marginTop: 18 }}>
              Share application, drawing and material requirements so the team can
              identify the correct manufacturing process.
            </p>
            <div className="elite-hero__actions">
              <Link className="elite-button elite-button--primary" href="/contact">
                Send Specification
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
