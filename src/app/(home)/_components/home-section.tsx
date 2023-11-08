import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = { children: ReactNode; title?: string; className?: string };

const HomeSection = ({ children, title, className }: Props) => {
  return (
    <section className={cn('relative w-full px-8 py-10', className)}>
      {title && <h2 className="mb-6 text-3xl">{title}</h2>}
      {children}
    </section>
  );
};

export default HomeSection;
