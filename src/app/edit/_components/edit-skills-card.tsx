'use client';

import { Skill } from '@/types/skill';
import { useQuery } from '@tanstack/react-query';
import EditSkillsForm from './edit-skills-form';

const EditSkillsCard = () => {
  const { data: skills } = useQuery<Skill[]>({
    queryKey: ['skills'],
    queryFn: () => fetch('/api/skills').then((res) => res.json()),
  });

  return <EditSkillsForm skills={skills} />;
};

export default EditSkillsCard;
