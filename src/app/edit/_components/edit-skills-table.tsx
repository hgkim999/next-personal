import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skill } from '@/types/skill';
import { format } from 'date-fns';

type Props = { skills: Skill[] };

const EditSkillsTable = ({ skills }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead className="min-w-[120px]">Name</TableHead>
          <TableHead>Exp</TableHead>
          <TableHead>YOE</TableHead>
          <TableHead>Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {skills?.map((skill) => {
          const experiencedSince = skill.experienced_since
            ? skill.experienced_since.split('-')[0]
            : null;

          return (
            <TableRow key={skill.id}>
              <TableCell>{skill.id}</TableCell>
              <TableCell>{skill.name}</TableCell>
              <TableCell>{experiencedSince}</TableCell>
              <TableCell>{skill.yoe}</TableCell>
              <TableCell>
                {format(
                  new Date(skill.created_at.replace(' ', 'T')),
                  'MM-dd-yyyy',
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default EditSkillsTable;
