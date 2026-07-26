import { Project } from '@/app/types';
import Link from 'next/link';
import Image from 'next/image';

interface AppCardProps {
  project: Project;
}

const linkClass =
  'inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent hover:bg-accent hover:text-white transition-colors duration-200';

const AppCard = ({ project }: AppCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-white/8 shadow-xl shadow-black/30 transition-all duration-250 hover:-translate-y-1 hover:ring-accent/50 hover:shadow-2xl hover:shadow-accent/10">
      {/* ── Thumbnail ─────────────────────────────────────────────────── */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-contain"
          />
        )}

        {/* Inner shine overlay (skip for thumbnail cards) */}
        {!project.thumbnail && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        )}

        {/* Year badge */}
        <span className={`absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm ${project.thumbnail ? 'bg-white/70 text-gray-800' : 'bg-black/50 text-white/80'}`}>
          {project.year}
        </span>

        {/* Subtle project initial watermark */}
        {!project.thumbnail && (
          <span className="absolute bottom-4 left-4 text-4xl font-black text-white/10 select-none">
            {project.title.charAt(0)}
          </span>
        )}
      </div>

      {/* ── Body ──────────────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-white leading-snug">{project.title}</h3>

        <p className="flex-1 text-sm text-muted leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent2/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent2"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action links — render the row if at least one link exists */}
        {(project.url || project.github) && (
          <div className="mt-1 flex gap-2">
            {project.url && (
              project.isExternal ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                  Live Demo
                </a>
              ) : (
                <Link href={project.url} className={linkClass}>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                  View Project
                </Link>
              )
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-muted hover:border-white/30 hover:text-white transition-colors duration-200"
              >
                <i className="fa-brands fa-github text-[10px]" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AppCard