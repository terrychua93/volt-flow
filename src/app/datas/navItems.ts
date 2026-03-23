import type { NavItem } from "@/interfaces/navItem";

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About us' },
  {
    label: 'Services',
    children: [
      { id: 'plumber', label: 'Plumber' },
      { id: 'electrical', label: 'Electrical' },
      { id: 'interior', label: 'Interior Design' },
      { id: 'landscape', label: 'Landscape' }
    ]
  },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
];