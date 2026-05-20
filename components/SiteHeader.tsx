"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Icon from "./Icon";

const navItems = [
  { href: "/", label: "Home", icon: "precision_manufacturing" },
  { href: "/about", label: "About", icon: "domain" },
  { href: "/capabilities", label: "Capabilities", icon: "settings_input_component" },
  { href: "/projects", label: "Projects", icon: "apps" },
  { href: "/materials", label: "Materials", icon: "inventory_2" },
  { href: "/news", label: "News", icon: "article" },
  { href: "/contact", label: "Contact", icon: "contact_mail" }
];

const quickItems = [
  { href: "/", label: "Home", icon: "precision_manufacturing" },
  { href: "/about", label: "About", icon: "domain" },
  { href: "/capabilities", label: "Capability", icon: "settings_input_component" },
  { href: "/contact", label: "Contact", icon: "contact_mail" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="elite-header">
        <Link className="elite-brand" href="/" aria-label="Neelay Group home" scroll={false}>
          <Icon name="precision_manufacturing" />
          <span>NEELAY GROUP</span>
        </Link>

        <nav className="elite-header__nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={false}
              className={pathname === item.href ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="elite-header__actions">
          <Link className="elite-start" href="/contact" scroll={false}>
            Start Project
          </Link>
          <button
            className="elite-menu-toggle"
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <div className={`elite-drawer-backdrop ${open ? "is-open" : ""}`} onClick={() => setOpen(false)}>
        <aside className="elite-drawer" onClick={(event) => event.stopPropagation()}>
          <div className="elite-drawer__top">
            <span>Navigation Matrix</span>
            <button className="elite-menu-toggle" type="button" aria-label="Close navigation" onClick={() => setOpen(false)}>
              <Icon name="close" />
            </button>
          </div>
          <nav className="elite-drawer__links" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                scroll={false}
                className={pathname === item.href ? "is-active" : ""}
                style={{ "--item-index": index } as CSSProperties}
              >
                <span>{item.label}</span>
                <Icon name="arrow_forward" />
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      <nav className="elite-mobile-dock" aria-label="Quick mobile navigation">
        {quickItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            scroll={false}
            className={pathname === item.href ? "is-active" : ""}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
