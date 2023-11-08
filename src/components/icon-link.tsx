import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentPropsWithRef } from 'react';

type Props = {
  icon: SVGImportComponent;
  iconProps?: ComponentPropsWithRef<SVGImportComponent>;
  target?: '_blank';
} & ComponentPropsWithRef<typeof Link>;

const IconLink = ({
  icon: IconComponent,
  iconProps,
  ...restLinkProp
}: Props) => {
  const { className: iconClassName = {}, ...restIconProps } = iconProps || {
    className: '',
  };
  return (
    <Link {...restLinkProp}>
      <IconComponent
        className={cn('h-7 w-7 text-foreground', iconClassName)}
        {...restIconProps}
      />
    </Link>
  );
};

export default IconLink;
