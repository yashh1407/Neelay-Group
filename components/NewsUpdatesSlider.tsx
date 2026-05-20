export type NewsUpdate = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
};

type NewsUpdatesSliderProps = {
  updates: NewsUpdate[];
};

export default function NewsUpdatesSlider({ updates }: NewsUpdatesSliderProps) {
  const marqueeItems = [...updates, ...updates];

  return (
    <section className="news-marquee" aria-label="Company update marquee">
      <div className="news-marquee__top">
        <p className="eyebrow">Latest Notes</p>
        <h2>Recent milestones and capability updates</h2>
      </div>

      <div className="news-marquee__viewport">
        <div className="news-marquee__track">
          {marqueeItems.map((update, index) => (
            <article
              className="news-tile news-marquee__slide"
              key={`${update.title}-${index}`}
              aria-hidden={index >= updates.length}
            >
              <img src={update.image} alt={index < updates.length ? update.title : ""} />
              <div>
                <p className="eyebrow">{update.eyebrow}</p>
                <h3>{update.title}</h3>
                <p>{update.copy}</p>
              </div>
              <span className="news-marquee__number">0{(index % updates.length) + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
