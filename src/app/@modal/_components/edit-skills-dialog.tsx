'use client';

import EditSkillsForm from '@/app/edit/_components/edit-skills-form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

const EditSkillsDialog = () => {
  const router = useRouter();
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open={true} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>Skills</DialogHeader>
        <EditSkillsForm />
        <DialogFooter>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditSkillsDialog;
