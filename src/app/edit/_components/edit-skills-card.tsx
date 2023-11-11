'use client';

import { Skill } from '@/types/skill';
import { useQuery } from '@tanstack/react-query';
import EditSkillsForm from './edit-skills-form';
import EditSkillsTable from './edit-skills-table';

const EditSkillsCard = () => {
  const { data: skills } = useQuery<Skill[]>({
    queryKey: ['skills'],
    queryFn: () => fetch('/api/skills').then((res) => res.json()),
  });

  return (
    <div className="flex flex-col gap-4">
      <EditSkillsForm />
      <EditSkillsTable skills={skills as Skill[]} />
    </div>
  );
};

export default EditSkillsCard;
