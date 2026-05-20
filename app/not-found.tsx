import Link from "next/link";
import Icon from "../components/Icon";

export default function NotFound() {
  return (
    <main className="elite-page">
      <section className="elite-section elite-section--white">
        <div className="elite-container" data-stagger="90">
          <p className="elite-kicker">404</p>
          <h1 className="elite-title">Page Not Found</h1>
          <p className="elite-lead" style={{ marginTop: 18 }}>
          The requested route is not part of the Neelay Group website structure.
          </p>
          <div className="elite-hero__actions">
            <Link className="elite-button elite-button--primary" href="/">
              Return Home <Icon name="arrow_forward" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
