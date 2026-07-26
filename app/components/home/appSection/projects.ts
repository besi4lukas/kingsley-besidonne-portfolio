import { Project } from "@/app/types";


export const projectsData: Project[] = [
  {
    id: 'jobric-ai',
    title: 'Jobric AI',
    description:
      'AI automated job application tracker for detecting Job applications within email inboxes. For Job seekers to keep track of their applications.',
    tech: ['TypeScript', 'Next.js', 'React 19', 'Cloudflare', 'Anthropic Claude', 'Clerk', 'Vercel'],
    year: 2026,
    url: 'https://jobric.vercel.app/',
    isExternal: true,
    github: 'https://github.com/besi4lukas/jobric',
    gradient: 'from-[#F2EBDD] via-[#F2EBDD] to-[#F2EBDD]',
    thumbnail: '/images/projects/jobric-ai.png',
  },
  {
    id: 'anchor-ai',
    title: 'Anchor AI',
    description:
      'The simplest private wellness chat. A private AI chat app that acts as a grounding guide. For high stress moments.',
    tech: ['React','TypeScript', 'Next.js', 'Fastify', 'Anthropic API', 'Claude Sonnet 3.5', 'RAG', 'Redis'],
    year: 2026,
    url: 'https://anchor-one-umber.vercel.app/',
    isExternal: true,
    github: 'https://github.com/besi4lukas/anchor',
    gradient: 'from-white via-white to-white',
    thumbnail: '/images/projects/anchor-ai.png',
  },
  {
    id: 'cloud-recommendation',
    title: 'Cloud Recommendation System',
    description:
      'Recommends the best cloud provider based on a customer\'s technical and cost requirements. For businesses to make informed decisions.',
    tech: ['AngularJs','HTML', 'CSS', 'JavaScript', 'Python', 'Google Cloud Platform'],
    year: 2021,
    url: 'https://cse546proj2.uc.r.appspot.com/',
    isExternal: true,
    gradient: 'from-sky-900/70 via-blue-900/50 to-slate-900',
  }
];