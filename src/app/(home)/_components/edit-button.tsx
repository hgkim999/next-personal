import EditIcon from '@/assets/icons/edit.svg';
import IconLink from '@/components/icon-link';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof IconLink>, 'icon'>;

const EditButton = ({ className, ...rest }: Props) => {
  return (
    <IconLink
      className={cn('absolute right-0 top-0', className)}
      icon={EditIcon}
      {...rest}
    />
  );
};

export default EditButton;
