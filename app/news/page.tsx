import type { Metadata } from "next";
import Link from "next/link";
import { images } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "News | Neelay Group",
  description:
    "Company updates from Neelay Group covering recognition, sustainability, expansion and manufacturing capability news."
};

const updates = [
  {
    category: "Sustainability",
    date: "July 15, 2025",
    title: "Neelay Industries implements 622 kWp solar power system",
    copy: "Rooftop solar infrastructure at the Nashik manufacturing unit is expected to lower annual energy costs and reduce carbon footprint.",
    image: images.solar
  },
  {
    category: "Market Expansion",
    date: "March 20, 2025",
    title: "Neelay Agro celebrates first container export to Europe and Middle East",
    copy: "Neelay Agro Infra ships its first container of agricultural products to European and Middle Eastern markets.",
    image: images.agro
  },
  {
    category: "Company News",
    date: "February 10, 2025",
    title: "Neelay Industries expands precision manufacturing capabilities",
    copy: "Investment in advanced machinery strengthens CRCA sheet work for complex IP65-rated enclosures.",
    image: images.parts
  },
  {
    category: "Infrastructure",
    date: "November 18, 2024",
    title: "Neelay Agro strengthens cold storage and packhouse infrastructure",
    copy: "Expanded cold storage and packhouse operations support growing export demand for fresh produce and IQF products.",
    image: images.coldStorage
  }
];

export default function NewsPage() {
  return (
    <main className="elite-page">
      <section className="elite-hero elite-hero--compact">
        <div className="elite-hero__image" data-reveal="image">
          <img src={images.bannerNews} alt="HD 3D banner of corporate industrial updates and manufacturing milestones" />
        </div>
        <div className="elite-hero__content">
          <span className="elite-kicker" data-reveal>
            Official Recognition // 2026.01
          </span>
          <h1 className="elite-title" data-reveal data-delay="80">
            Global impact <span className="elite-red">recognition</span>.
          </h1>
          <p className="elite-lead elite-hero__copy" data-reveal data-delay="150">
            Updates from across Neelay Group covering recognition,
            sustainability, expansion and manufacturing capability milestones.
          </p>
        </div>
      </section>

      <section className="elite-section elite-section--white">
        <div className="elite-container">
          <div className="elite-section-head">
            <div data-reveal>
              <span className="elite-kicker">Featured Brief</span>
              <h2 className="elite-title-md">Company updates from Neelay Group</h2>
            </div>
            <div className="elite-card" data-reveal>
              <span className="elite-label">Featured Brief</span>
              <h3>Neelay Group MD Sagar Girase honored as Young Industrialist at WEF Davos</h3>
              <p>
                Nashik-based manufacturing leadership recognized on the global
                stage during WEF 2026.
              </p>
            </div>
          </div>
          <div className="elite-news-card" data-reveal="image">
            <img src={images.wefDavos} alt="WEF Davos recognition for Neelay Group" />
            <div className="elite-news-card__body">
              <span className="elite-label">Recognition / January 2026</span>
              <h2 className="elite-title-md" style={{ marginTop: 16 }}>
                Neelay Group MD Sagar Girase honored as Young Industrialist at WEF Davos
              </h2>
              <p className="elite-copy" style={{ marginTop: 20 }}>
                Nashik-based manufacturing leadership recognized on the global
                stage during WEF 2026, as Maharashtra highlighted the state's
                industrial growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="elite-section elite-section--panel">
        <div className="elite-container elite-news-layout">
          <div>
            <div className="elite-section-head" style={{ gridTemplateColumns: "1fr", marginBottom: 30 }}>
              <div data-reveal>
                <span className="elite-kicker">Current Operations</span>
                <h2 className="elite-title-md">News archive</h2>
              </div>
            </div>
            <div className="elite-news-stack" data-stagger="80">
              {updates.map((item) => (
                <article className="elite-news-card" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <div className="elite-news-card__body">
                    <span className="elite-label">
                      {item.category} / {item.date}
                    </span>
                    <h3 style={{ marginTop: 16 }}>{item.title}</h3>
                    <p className="elite-copy" style={{ marginTop: 14 }}>
                      {item.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="elite-news-stack">
            <section className="elite-card" data-reveal>
              <span className="elite-label">Intelligence Feed</span>
              <h3>Subscribe to strategic insights.</h3>
              <p>
                Receive company updates and manufacturing capability news from
                Neelay Group.
              </p>
              <form className="elite-form" style={{ marginTop: 22 }}>
                <div className="elite-field">
                  <label htmlFor="news-email">Corporate email</label>
                  <input id="news-email" type="email" placeholder="name@organization.com" />
                </div>
                <button className="elite-button elite-button--primary" type="submit">
                  Initialize Subscription
                </button>
              </form>
            </section>
            <section className="elite-card" data-reveal>
              <span className="elite-label">Technical Archive</span>
              <h3>Company records</h3>
              <p>
                For confirmed press details, project records or media requests,
                contact the Neelay Group team directly.
              </p>
              <div className="elite-hero__actions">
                <Link className="elite-button elite-button--secondary" href="/contact">
                  Contact Team
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
