import Link from "next/link";
import Icon from "./Icon";

type CTAProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTA({
  eyebrow = "Discuss Manufacturing Scope",
  title,
  copy,
  primaryLabel = "Start a Conversation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/capabilities"
}: CTAProps) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner" data-stagger="90">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <div className="button-row">
          <Link className="button button--red" href={primaryHref}>
            {primaryLabel} <Icon name="arrow_forward" />
          </Link>
          {secondaryLabel ? (
            <Link className="button button--ghost-light" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
