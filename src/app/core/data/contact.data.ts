import { ContactEntry } from '../models/portfolio.models';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const EMAIL = 'anthonyarimalala@gmail.com';
export const PHONE_MOBILE = { display: '+261 34 61 83 296', href: 'tel:+261346183296' };
export const PHONE_SECONDARY = { display: '+261 38 00 74 018', href: 'tel:+261380074018' };
export const GITHUB = {
  display: 'github.com/anthonyarimalala',
  href: 'https://github.com/anthonyarimalala',
};
export const LINKEDIN = {
  display: 'linkedin.com/in/anthony-arimalala-7b0534329',
  href: 'https://www.linkedin.com/in/anthony-arimalala-7b0534329',
};
export const PORTFOLIO = {
  display: 'anthonyarimalala.github.io/portfolio',
  href: 'https://anthonyarimalala.github.io/portfolio/',
};

const GMAIL_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_(2020).svg';
const LINKEDIN_LOGO = `${DEVICON}/linkedin/linkedin-original.svg`;
const GITHUB_LOGO = `${DEVICON}/github/github-original.svg`;

/** Entrées du menu déroulant de l'onglet « Contact ». */
export const CONTACT_MENU: ContactEntry[] = [
  { label: 'Email', detail: EMAIL, href: `mailto:${EMAIL}`, logo: GMAIL_LOGO },
  {
    label: 'Téléphone (mobile)',
    detail: PHONE_MOBILE.display,
    href: PHONE_MOBILE.href,
    icon: 'phone',
    iconColor: '#34a853',
  },
  {
    label: 'Téléphone (secondaire)',
    detail: PHONE_SECONDARY.display,
    href: PHONE_SECONDARY.href,
    icon: 'phone',
    iconColor: '#34a853',
  },
  {
    label: 'LinkedIn',
    detail: 'anthony-arimalala',
    href: `${LINKEDIN.href}/`,
    external: true,
    logo: LINKEDIN_LOGO,
  },
  {
    label: 'GitHub',
    detail: 'anthonyarimalala',
    href: GITHUB.href,
    external: true,
    logo: GITHUB_LOGO,
  },
  {
    label: 'Portfolio',
    detail: PORTFOLIO.display,
    href: PORTFOLIO.href,
    external: true,
    icon: 'globe',
    iconColor: '#1a73e8',
  },
];

/** Icônes du bloc « Contact & profils » (avec bouton « copier »). */
export const CONTACT_PROFILES: ContactEntry[] = [
  {
    label: 'GitHub',
    detail: '',
    href: GITHUB.href,
    external: true,
    logo: GITHUB_LOGO,
    copyValue: GITHUB.href,
    copyLabel: "Copier l'URL GitHub",
  },
  {
    label: 'LinkedIn',
    detail: '',
    href: `${LINKEDIN.href}/`,
    external: true,
    logo: LINKEDIN_LOGO,
    copyValue: `${LINKEDIN.href}/`,
    copyLabel: "Copier l'URL LinkedIn",
  },
  {
    label: 'Email',
    detail: '',
    href: `mailto:${EMAIL}`,
    logo: GMAIL_LOGO,
    copyValue: EMAIL,
    copyLabel: "Copier l'adresse email",
  },
  {
    label: 'Téléphone',
    detail: '',
    href: PHONE_MOBILE.href,
    icon: 'phone',
    iconColor: '#34a853',
    copyValue: '+261346183296',
    copyLabel: 'Copier le numéro de téléphone',
  },
];
