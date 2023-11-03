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
        'blur-[1.2px] transition duration-200 data-[active=true]:text-xl data-[active=true]:font-bold data-[active=true]:blur-none',
        className,
      )}
      href={href}
      {...otherProps}
      data-active={isActive}
    />
  );
};

export default NavLink;
