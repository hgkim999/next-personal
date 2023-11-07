import { isNullish } from '@/lib/utils';
import { Skill } from '@/types/skill';
import { differenceInYears } from 'date-fns';

type Props = { skill: Skill };

const SkillListItem = ({ skill }: Props) => {
  const yoe =
    skill.yoe || !isNullish(skill.experienced_since)
      ? differenceInYears(Date.now(), new Date(skill.experienced_since!))
      : null;

  return (
    <div className="overflow-hidden rounded-full border border-foreground">
      <span className="py-2 pl-4 pr-2">{skill.name}</span>
      {yoe && (
        <span className=" bg-foreground px-2 py-1 text-background">{yoe}</span>
      )}
    </div>
  );
};

export default SkillListItem;
