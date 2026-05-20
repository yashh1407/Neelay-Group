"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function animateCounter(element: HTMLElement) {
  if (element.dataset.countDone === "true") {
    return;
  }

  const target = Number(element.dataset.countTarget);

  if (!Number.isFinite(target)) {
    return;
  }

  const prefix = element.dataset.countPrefix || "";
  const suffix = element.dataset.countSuffix || "";
  const duration = Number(element.dataset.countDuration || 1100);

  if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
    element.textContent = `${prefix}${target.toLocaleString("en-IN")}${suffix}`;
    element.dataset.countDone = "true";
    return;
  }

  const startTime = performance.now();

  element.dataset.countDone = "true";

  const frame = (time: number) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);

    element.textContent = `${prefix}${value.toLocaleString("en-IN")}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
}

function revealElement(element: HTMLElement) {
  element.classList.add("is-visible");
  animateCounter(element);

  element.querySelectorAll<HTMLElement>("[data-count-target]").forEach((counter) => {
    animateCounter(counter);
  });
}

export default function MotionProvider() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const isRouteChange = previousPathname.current !== pathname;

    root.classList.add("route-scroll-reset");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (isRouteChange && !prefersReducedMotion) {
      root.classList.add("route-entering");
    }

    previousPathname.current = pathname;

    const scrollTimer = window.setTimeout(() => {
      root.classList.remove("route-scroll-reset");
    }, 80);

    const transitionTimer = window.setTimeout(() => {
      root.classList.remove("route-entering");
    }, 120);

    return () => {
      window.clearTimeout(scrollTimer);
      window.clearTimeout(transitionTimer);
      root.classList.remove("route-scroll-reset");
      root.classList.remove("route-entering");
    };
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    const autoRevealSelectors = [
      ".elite-section-head > *",
      ".elite-feature-grid > *",
      ".elite-card",
      ".elite-image-panel",
      ".elite-stat",
      ".elite-process__item",
      ".elite-news-card",
      ".elite-table",
      ".elite-form",
      ".elite-cta",
      ".elite-footer__grid > *",
      ".elite-footer__bottom",
      ".elite-hero__metrics"
    ];

    Array.from(document.querySelectorAll<HTMLElement>(autoRevealSelectors.join(","))).forEach((element) => {
      if (!element.dataset.reveal) {
        element.dataset.reveal = element.classList.contains("elite-image-panel") ? "image" : "fade-up";
      }
    });

    const staggerGroups = Array.from(document.querySelectorAll<HTMLElement>("[data-stagger]"));

    staggerGroups.forEach((group) => {
      const step = Number(group.dataset.stagger || 70);
      const reveal = group.dataset.staggerReveal || "fade-up";

      Array.from(group.children).forEach((child, index) => {
        if (!(child instanceof HTMLElement)) {
          return;
        }

        if (!child.dataset.reveal) {
          child.dataset.reveal = reveal;
        }

        child.style.setProperty("--reveal-delay", `${Math.min(index * step, 420)}ms`);
      });
    });

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count-target]"));

    counters.forEach((counter) => {
      counter.dataset.countDone = "false";

      if (!prefersReducedMotion) {
        const prefix = counter.dataset.countPrefix || "";
        const suffix = counter.dataset.countSuffix || "";
        counter.textContent = `${prefix}0${suffix}`;
      }
    });

    revealElements.forEach((element) => {
      element.classList.remove("is-visible");

      if (element.dataset.delay) {
        element.style.setProperty("--reveal-delay", `${element.dataset.delay}ms`);
      }
    });

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach(revealElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          revealElement(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
