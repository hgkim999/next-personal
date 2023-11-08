import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

const HomeSection = ({ children, className }: Props) => {
  return (
    <section className={cn('relative w-full px-8 py-10', className)}>
      {children}
    </section>
  );
};

export default HomeSection;
