import NavLink from './nav-link';

const MainNav = () => {
  return (
    <header className="sticky top-0 flex h-20 w-full items-center justify-center p-4">
      <div className="flex gap-4">
        <NavLink href="/experiences">experiences</NavLink>
        <NavLink href="/">home</NavLink>
        <NavLink href="/projects">project</NavLink>
      </div>
    </header>
  );
};

export default MainNav;
