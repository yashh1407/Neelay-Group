"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CounterStatProps = {
  value: string;
  label: string;
  index: number;
};

function parseStatValue(value: string) {
  const match = value.trim().match(/^([\d,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, "")) : 0;

  return {
    target: Number.isFinite(target) ? target : 0,
    suffix: match?.[2] ?? ""
  };
}

export default function CounterStat({ value, label, index }: CounterStatProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const hasStarted = useRef(false);
  const { target, suffix } = useMemo(() => parseStatValue(value), [value]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) {
      return;
    }

    let frame = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const startCounter = () => {
      if (hasStarted.current) {
        return;
      }

      hasStarted.current = true;

      if (reduceMotion) {
        setCount(target);
        return;
      }

      const duration = 1200 + Math.min(index * 90, 270);
      const start = performance.now();

      const tick = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCount(Math.round(target * eased));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          setCount(target);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      startCounter();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [index, target]);

  return (
    <article ref={cardRef} className="stat-card" aria-label={`${value} ${label}`}>
      <span className="stat-card__index" aria-hidden="true">
        0{index + 1}
      </span>
      <strong className="stat-card__number" aria-hidden="true">
        {new Intl.NumberFormat("en-IN").format(count)}
        {suffix ? <span>{suffix}</span> : null}
      </strong>
      <p>{label}</p>
    </article>
  );
}
