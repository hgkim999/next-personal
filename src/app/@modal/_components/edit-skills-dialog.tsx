'use client';

import EditSkillsCard from '@/app/edit/_components/edit-skills-card';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
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
      <DialogContent className="flex max-h-[85vh] max-w-full flex-col pb-0 md:max-w-3xl">
        <DialogHeader>Skills</DialogHeader>
        <div className="min-h-0 w-full overflow-y-scroll pr-2 scrollbar scrollbar-track-transparent">
          <EditSkillsCard />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditSkillsDialog;
