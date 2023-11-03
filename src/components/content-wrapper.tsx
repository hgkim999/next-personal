import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const ContentWrapper = ({ className, children, ...otherProps }: Props) => {
  return (
    <div
      className={cn(
        'flex max-h-full min-h-0 w-full min-w-full flex-1 overflow-auto',
        className,
      )}
      {...otherProps}
    >
      <ScrollArea>{children}</ScrollArea>
    </div>
  );
};

export default ContentWrapper;
