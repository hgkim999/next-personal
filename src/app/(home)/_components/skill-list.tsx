import { getSkills } from '@/services/skill.service';
import SkillListItem from './skill-list-item';

export const dynamic = 'force-dynamic';

const SkillList = async () => {
  const skills = await getSkills();

  return (
    <div className="flex gap-2">
      {skills.map((skill) => (
        <SkillListItem skill={skill} key={skill.id} />
      ))}
    </div>
  );
};

export default SkillList;
