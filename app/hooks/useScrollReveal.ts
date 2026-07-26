'use client';

import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a container element and, when each
 * child with `data-reveal` enters the viewport, adds the `.revealed` class
 * after a staggered delay driven by the `data-reveal-index` attribute.
 *
 * Usage in JSX:
 *   const gridRef = useScrollReveal();
 *   <div ref={gridRef}>
 *     <div data-reveal data-reveal-index="0">…</div>
 *     <div data-reveal data-reveal-index="1">…</div>
 *   </div>
 *
 * The CSS in globals.css drives the actual animation:
 *   [data-reveal]         { opacity: 0; transform: translateY(28px); … }
 *   [data-reveal].revealed{ opacity: 1; transform: translateY(0);    … }
 */
export function useScrollReveal(staggerMs = 80, threshold = 0.08) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const index = parseInt(el.dataset.revealIndex ?? '0', 10);

          setTimeout(() => {
            el.classList.add('revealed');
          }, index * staggerMs);

          observer.unobserve(el);
        });
      },
      { threshold }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [staggerMs, threshold]);

  return containerRef;
}

