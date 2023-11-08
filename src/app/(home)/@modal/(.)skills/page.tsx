import {
  Dialog,
  DialogFooter,
  DialogHeader,
} from '@/components/shadcn-ui/dialog';
import { DialogContent } from '@radix-ui/react-dialog';

type Props = {};

const SkillModal = (props: Props) => {
  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>Skills</DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SkillModal;
