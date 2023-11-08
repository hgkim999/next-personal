import GithubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import IconLink from './icon-link';
import NavLink from './nav-link';

const MainNav = () => {
  return (
    <header className="sticky top-0 flex w-full items-center justify-center">
      <div className="flex h-20 w-full max-w-7xl items-center justify-between p-4">
        <div className="flex" />
        <div className="flex gap-4">
          <NavLink href="/experiences">experiences</NavLink>
          <NavLink href="/">home</NavLink>
          <NavLink href="/projects">projects</NavLink>
        </div>
        <div className="flex gap-2">
          <IconLink
            icon={GithubIcon}
            href="https://github.com/hgkim999/next-personal/"
            target="_blank"
          />
          <IconLink
            icon={LinkedInIcon}
            href="https://www.linkedin.com/in/samuelhgkim/"
            target="_blank"
          />
        </div>
      </div>
    </header>
  );
};

export default MainNav;
