import { Technology } from '../models/portfolio.models';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const TECHNOLOGIES: Technology[] = [
  { name: 'Java', href: 'https://www.java.com/', logo: `${DEVICON}/java/java-original.svg` },
  { name: 'Python', href: 'https://www.python.org/', logo: `${DEVICON}/python/python-original.svg` },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    logo: `${DEVICON}/typescript/typescript-original.svg`,
  },
  { name: 'PHP', href: 'https://www.php.net/', logo: `${DEVICON}/php/php-original.svg` },
  { name: 'Laravel', href: 'https://laravel.com/', logo: `${DEVICON}/laravel/laravel-original.svg` },
  {
    name: 'Spring Boot',
    href: 'https://spring.io/projects/spring-boot',
    logo: `${DEVICON}/spring/spring-original.svg`,
  },
  {
    name: 'Angular',
    href: 'https://angular.dev/',
    logo: `${DEVICON}/angularjs/angularjs-original.svg`,
  },
  {
    name: 'Express.js',
    href: 'https://expressjs.com/',
    logo: `${DEVICON}/express/express-original.svg`,
  },
  {
    name: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    logo: `${DEVICON}/postgresql/postgresql-original.svg`,
  },
  { name: 'MySQL', href: 'https://www.mysql.com/', logo: `${DEVICON}/mysql/mysql-original.svg` },
  {
    name: 'MongoDB',
    href: 'https://www.mongodb.com/',
    logo: `${DEVICON}/mongodb/mongodb-original.svg`,
  },
  { name: 'Claude', href: 'https://claude.ai/', logo: 'https://cdn.simpleicons.org/claude/D97757' },
  {
    name: 'GitHub Copilot',
    href: 'https://github.com/features/copilot',
    logo: 'https://cdn.simpleicons.org/githubcopilot/000000',
  },
  {
    name: 'OpenAI Codex',
    href: 'https://openai.com/codex/',
    logo: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/chatgpt.svg',
  },
  { name: 'Git', href: 'https://git-scm.com/', logo: `${DEVICON}/git/git-original.svg` },
];
