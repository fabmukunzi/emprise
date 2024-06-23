export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Emprise',
  description: 'Just for testing Ui',
  navItems: [
    {
      label: 'Destination',
      href: '/',
    },
    {
      label: 'Specials',
      href: '/docs',
    },
    {
      label: 'Activities',
      href: '/pricing',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
};
