const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/besi4lukas',
      icon: 'fa-brands fa-github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kingsleybesidonne',
      icon: 'fa-brands fa-linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:kingsley.besidonne@gmail.com',
      icon: 'fa-regular fa-envelope',
    },
  ];

  return (
    <footer className="bg-hero-bg border-t border-white/5 py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-muted">
          &copy; <span suppressHydrationWarning>{year}</span> Kingsley Besidonne.{' '}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-white transition-colors duration-200 text-lg"
            >
              <i className={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer