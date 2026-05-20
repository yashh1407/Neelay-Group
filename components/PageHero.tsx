type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  copy: string;
  image?: string;
  imageAlt?: string;
  dark?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  accent,
  copy,
  image,
  imageAlt,
  dark = false
}: PageHeroProps) {
  return (
    <section className={`page-hero ${image ? "page-hero--image" : ""} ${dark ? "page-hero--dark" : ""}`}>
      {image ? (
        <>
          <img className="page-hero__image" src={image} alt={imageAlt ?? ""} aria-hidden={imageAlt ? undefined : true} data-reveal="fade" />
          <div className="page-hero__shade" />
        </>
      ) : null}
      <div className="container page-hero__content">
        <p className="eyebrow" data-reveal="fade-up">
          {eyebrow}
        </p>
        <h1 data-reveal="fade-up" data-delay="80">
          {title}
          {accent ? (
            <>
              <br />
              <span>{accent}</span>
            </>
          ) : null}
        </h1>
        <p className="lead" data-reveal="fade-up" data-delay="140">
          {copy}
        </p>
        <div className="rule" data-reveal="clip" data-delay="220" />
      </div>
    </section>
  );
}
