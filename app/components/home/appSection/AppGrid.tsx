import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import AppCard from './AppCard';
import { projectsData } from '../appSection/projects';

const AppGrid = () => {
  const [isGridView, setIsGridView] = useState(true);
  const gridRef = useScrollReveal(80);


  return (
    <section id="work" className="bg-[#0a0a0a] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* ── Section Header ──────────────────────────────────────────── */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Works</h2>
            <p className="mt-2 max-w-md text-sm text-muted leading-relaxed">
              A collection of applications that bridge the gap between complex backend logic and
              intuitive user interfaces.
            </p>
          </div>

          {/* Grid / List toggle
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setIsGridView(true)}
              aria-label="Grid view"
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-200 ${
                isGridView
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-white/10 text-muted hover:text-white'
              }`}
            >
              <i className="fa-solid fa-grip text-sm" />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              aria-label="List view"
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-200 ${
                !isGridView
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-white/10 text-muted hover:text-white'
              }`}
            >
              <i className="fa-solid fa-list text-sm" />
            </button>
          </div> */}
        </div>

        {/* ── Project Grid ────────────────────────────────────────────── */}
        <div
          ref={gridRef}
          className={`mt-10 ${
            isGridView
              ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
              : 'flex flex-col gap-4'
          }`}
        >
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              data-reveal
              data-reveal-index={index}
            >
              <AppCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppGrid