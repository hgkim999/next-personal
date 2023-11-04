import { Skill } from '@/types/skill';

type Props = { skill: Skill };

const SkillListItem = ({ skill }: Props) => {
  return (
    <div className="overflow-hidden rounded-full border border-foreground">
      <span className="py-2 pl-4 pr-2">{skill.name}</span>
      {skill.yoe && (
        <span className=" bg-foreground px-2 py-1 text-background">
          {skill.yoe}
        </span>
      )}
    </div>
  );
};

export default SkillListItem;
