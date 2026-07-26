import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

const HeroSection = () => {
    const rootRef = useRef<HTMLElement | null>(null);
    const [pos, setPos] = useState({ x: 720, y: 450 });
    const [active, setActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        const onMove = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
            setActive(true);
        };
        const onLeave = () => setActive(false);
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        return () => {
            el.removeEventListener('mousemove', onMove);
            el.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 40) setScrolled(true);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const spotlightMask = `radial-gradient(circle 280px at ${pos.x}px ${pos.y}px, black 30%, transparent 75%)`;
    const monoFont = { fontFamily: '"JetBrains Mono", monospace' };
    const displayFont = { fontFamily: '"Space Grotesk", sans-serif' };


    return (
        <section
            ref={rootRef}
            data-hybrid-root
            className="relative h-screen overflow-hidden bg-[#0a0a0a] text-[#fafafa] flex flex-col cursor-crosshair"
            style={displayFont}
        >
            {/* base grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                }}
            />

            {/* lit grid revealed by spotlight */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                style={{
                backgroundImage:
                    'linear-gradient(to right, rgba(255,59,59,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,59,59,0.5) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                WebkitMaskImage: spotlightMask,
                maskImage: spotlightMask,
                opacity: active ? 1 : 0,
                }}
            />

            {/* spotlight glow */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                background: `radial-gradient(circle 380px at ${pos.x}px ${pos.y}px, rgba(255,59,59,0.18), transparent 70%)`,
                opacity: active ? 1 : 0,
                }}
            />

            {/* crosshair */}
            {active && (
                <>
                <div
                    className="absolute left-0 right-0 h-px pointer-events-none z-[2]"
                    style={{
                    top: pos.y,
                    background:
                        'linear-gradient(to right, transparent, rgba(255,59,59,0.35), transparent)',
                    }}
                />
                <div
                    className="absolute top-0 bottom-0 w-px pointer-events-none z-[2]"
                    style={{
                    left: pos.x,
                    background:
                        'linear-gradient(to bottom, transparent, rgba(255,59,59,0.35), transparent)',
                    }}
                />
                </>
            )}

            {/* hero content */}
            <div className="relative z-[4] flex-1 grid grid-cols-1 md:grid-cols-[180px_1fr_240px] gap-8 px-6 pt-24 md:px-8 md:pt-28 min-h-0">
                {/* left meta */}
                <div className="hidden md:flex flex-col gap-5" style={monoFont}>
                <MetaItem
                    label="FOCUS"
                    value={
                    <>
                        Product Engineering
                    </>
                    }
                />
                <MetaItem
                    label="STACK"
                    value={
                    <>
                        React · TS · Next.js
                        <br />
                        Node.js · TailwindCSS
                        <br />
                        Spring Boot · Python
                    </>
                    }
                />
                <MetaItem
                    label="SHIPPED"
                    value={
                    <span
                        className="font-bold tracking-[-0.03em] text-[#ff3b3b]"
                        style={{ ...displayFont, fontSize: 30 }}
                    >
                        03{' '}
                        <span className="text-xs text-[#7a7a7a] tracking-[0.16em]">PRJ</span>
                    </span>
                    }
                />
                </div>

                {/* center title */}
                <div className="flex flex-col justify-center gap-5 min-w-0">
                <h1 className="m-0">
                    <div className="flex flex-wrap gap-x-6 items-baseline">
                    <SpotlightWord pos={pos} active={active}>
                        SOFT
                    </SpotlightWord>
                    <span className="hero-outline">WARE</span>
                    </div>
                    <div className="flex flex-wrap gap-x-6 items-baseline">
                    <span className="hero-outline">DEV</span>
                    <SpotlightWord pos={pos} active={active}>
                        ELOPER
                    </SpotlightWord>
                    </div>
                    <div className="flex flex-wrap gap-x-6 items-baseline mt-2">
                    <span className="hero-dash">—</span>
                    <span className="hero-name">KINGSLEY</span>
                    <span className="hero-dot">.</span>
                    </div>
                </h1>

                <div
                    className="pt-3 border-t border-[#1c1c1c] text-[13px] text-[#c8c8c8] tracking-[0.04em]"
                    style={monoFont}
                >
                    <span className="text-[#ff3b3b]">(</span>
                    &nbsp;move your cursor — interfaces should react&nbsp;
                    <span className="text-[#ff3b3b]">)</span>
                </div>
                </div>
            </div>

            {/* scroll prompt */}
            <div
                className={`absolute bottom-24 left-0 right-0 z-10 flex flex-col items-center gap-2 transition-opacity duration-500 ${
                scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
                <span
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70"
                    style={monoFont}
                >
                    Scroll to Explore
                </span>
                <i className="fa-solid fa-chevron-down animate-bounce-down text-sm text-white/40" />
            </div>
        </section>
    )
}

const MetaItem = ({ label, value}: { label: string, value: ReactNode}) => {
    return (
      <div className="border-t border-[#1c1c1c] pt-3">
          <div className="text-[10px] text-[#5a5a5a] tracking-[0.16em] mb-2">{label}</div>
          <div className="text-[13px] leading-[1.5] text-[#e5e5e5]">{value}</div>
      </div>
    )
}

const SpotlightWord = ({
  pos,
  active,
  children,
}: {
  pos: { x: number; y: number };
  active: boolean;
  children: ReactNode;
}) => {
      const ref = useRef<HTMLSpanElement | null>(null);
  const [rect, setRect] = useState<{ cx: number; cy: number; r: number } | null>(null);

  // Measure the word's centre + radius relative to the hero root only when
  // layout actually changes (mount, resize, font load). `pos` is not a dep —
  // we derive `over` inline from props instead of mirroring it into state.
  useLayoutEffect(() => {
    const update = () => {
      const node = ref.current;
      if (!node) return;
      const root = node.closest('[data-hybrid-root]') as HTMLElement | null;
      if (!root) return;
      const rRoot = root.getBoundingClientRect();
      const rN = node.getBoundingClientRect();
      setRect({
        cx: rN.left - rRoot.left + rN.width / 2,
        cy: rN.top - rRoot.top + rN.height / 2,
        r: Math.max(rN.width, rN.height) * 0.7,
      });
    };
    update();
    window.addEventListener('resize', update);
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(update).catch(() => {});
    }
    return () => window.removeEventListener('resize', update);
  }, []);

  let over = 0;
  if (active && rect) {
    const dx = pos.x - rect.cx;
    const dy = pos.y - rect.cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    over = Math.max(0, 1 - dist / rect.r);
  }

  return (
    <span
      ref={ref}
      className="hero-display transition-[color,transform] duration-200"
      style={{
        color: `color-mix(in oklab, #fafafa, #ff3b3b ${Math.round(over * 100)}%)`,
        transform: `translateY(${-over * 4}px)`,
      }}
    >
      {children}
    </span>
  );
}

export default HeroSection