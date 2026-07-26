export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];           // Tech-stack pill badges
  year: number;
  url?: string;             // Live demo or internal route
  github?: string;          // GitHub repo link
  isExternal?: boolean;     // Open url in new tab
  gradient: string;         // Tailwind gradient classes for the thumbnail
  thumbnail?: string;       // Path to thumbnail image in /public
}