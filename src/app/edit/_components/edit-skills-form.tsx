'use client';

import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { upsertSkill } from '@/services/skill.service';
import { Skill } from '@/types/skill';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { fromUnixTime } from 'date-fns';
import { FieldValues, useForm } from 'react-hook-form';
import * as z from 'zod';

const skillFormSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  experienced_since: z.coerce
    .number()
    .gte(1950, 'Experienced Since should be later than 1950')
    .lte(
      fromUnixTime(Date.now()).getUTCFullYear(),
      'Experienced Since should be earlier than the current year',
    )
    .optional(),
  yoe: z.coerce.number().positive().optional(),
});

const EditSkillsForm = () => {
  const queryClient = useQueryClient();
  const form = useForm({ resolver: zodResolver(skillFormSchema) });

  const handleSubmit =
    (type: 'add' | 'update') => async (data: FieldValues) => {
      const newData = { ...data } as Skill;
      if (type === 'add') {
        delete newData.id;
      }

      newData.experienced_since += '-01-01'; // append date

      await upsertSkill(newData as Skill);
      queryClient.fetchQuery({ queryKey: ['skills'] });
    };

  return (
    <div className="w-full">
      <Form {...form}>
        <form className="flex w-full flex-wrap justify-between gap-4">
          <FormField
            control={form.control}
            name="id"
            disabled={true}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-grow-[2]">
                <FormLabel>Skill Name</FormLabel>
                <FormControl>
                  <Input placeholder="i.e. React.js" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experienced_since"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Exp. Since</FormLabel>
                <FormControl>
                  <Input placeholder="i.e. 2015" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yoe"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>YoE</FormLabel>
                <FormControl>
                  <Input placeholder="i.e. 5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="w-full py-6">
            {form.getValues().id && (
              <Button onClick={form.handleSubmit(handleSubmit('update'))}>
                Update
              </Button>
            )}
            <Button onClick={form.handleSubmit(handleSubmit('add'))}>
              Add
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </div>
  );
};

export default EditSkillsForm;
