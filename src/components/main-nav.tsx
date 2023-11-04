import Link from 'next/link';

import GithubIcon from 'public/icons/github.svg';
import NavLink from './nav-link';

const MainNav = () => {
  return (
    <header className="sticky top-0 flex h-20 w-full items-center justify-between p-4">
      <div className="flex" />
      <div className="flex gap-4">
        <NavLink href="/experiences">experiences</NavLink>
        <NavLink href="/">home</NavLink>
        <NavLink href="/projects">projects</NavLink>
      </div>
      <div className="flex">
        <Link href="https://github.com/hgkim999/next-personal" target="_blank">
          <GithubIcon className="h-10 w-10 text-foreground" alt="Github Icon" />
        </Link>
      </div>
    </header>
  );
};

export default MainNav;
