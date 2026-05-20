import Link from "next/link";
import Icon from "./Icon";

const directory = [
  { href: "/about", label: "Institutional Profile" },
  { href: "/capabilities", label: "Technical Capabilities" },
  { href: "/projects", label: "Project Matrix" },
  { href: "/materials", label: "Material Index" }
];

const resources = [
  { href: "/news", label: "Current Operations" },
  { href: "/contact", label: "Submission Framework" },
  { href: "/materials", label: "Specifications" },
  { href: "/capabilities", label: "Quality Protocols" }
];

export default function SiteFooter() {
  return (
    <footer className="elite-footer">
      <div className="elite-container elite-footer__grid" data-stagger="80">
        <div className="elite-footer__brand">
          <Link className="elite-brand elite-brand--footer" href="/" aria-label="Neelay Group home">
            <Icon name="precision_manufacturing" />
            <span>NEELAY GROUP</span>
          </Link>
          <p>
            Precision sheet metal fabrication, switchgear assemblies, control panel
            fabrication and CNC component manufacturing for industrial requirements.
          </p>
          <div className="elite-footer__icons" aria-label="Contact shortcuts">
            <Link href="/contact" aria-label="Contact Neelay Group">
              <Icon name="contact_mail" />
            </Link>
            <Link href="/capabilities" aria-label="View capabilities">
              <Icon name="settings_input_component" />
            </Link>
            <Link href="/projects" aria-label="View projects">
              <Icon name="apps" />
            </Link>
          </div>
        </div>

        <div className="elite-footer__column">
          <h3>Directory</h3>
          {directory.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="elite-footer__column">
          <h3>Technical Archive</h3>
          {resources.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="elite-footer__column">
          <h3>Signal Intercept</h3>
          <p>
            MIDC Satpur Industrial Area
            <br />
            Nashik, Maharashtra, India
          </p>
          <Link className="elite-footer__cta" href="/contact">
            Initialize Inquiry
          </Link>
        </div>
      </div>

      <div className="elite-container elite-footer__bottom" data-reveal>
        <span>(c) 2026 Neelay Group. Precision engineered infrastructure.</span>
        <span>System status: active</span>
      </div>
    </footer>
  );
}
