'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type Props = { partialMatch?: boolean } & ComponentProps<typeof Link>;

const NavLink = ({
  className,
  href,
  partialMatch = false,
  ...otherProps
}: Props) => {
  const pathname = usePathname();

  const isActive = partialMatch
    ? pathname.includes(href.toString())
    : pathname === href.toString();

  return (
    <Link
      className={cn(
        'flex items-center text-base blur-[1.2px] transition-all duration-200 hover:text-xl hover:blur-[0.5px] data-[active=true]:text-2xl data-[active=true]:font-bold data-[active=true]:blur-none',
        className,
      )}
      href={href}
      {...otherProps}
      data-active={isActive}
    />
  );
};

export default NavLink;
