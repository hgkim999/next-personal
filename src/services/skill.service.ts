'use server';

import { createServerClient } from '@/lib/supabase/server';
import { Skill } from '@/types/skill';
import { cookies } from 'next/headers';

export async function getSkills() {
  const supabase = createServerClient(cookies());

  const { data: skills, error } = await supabase.from('skills').select('*');
  if (error) {
    throw new Error('Could not fetch ');
  }

  return skills || [];
}

export async function upsertSkill(skillData: Skill) {
  const supabase = createServerClient(cookies());
  const { error, data } = await supabase.from('skills').upsert(skillData);

  if (error) {
    throw new Error('Could not update');
  }

  return data;
}

export async function deleteSkill(skillId: Pick<Skill, 'id'>) {
  const supabase = createServerClient(cookies());
  const { error, data } = await supabase
    .from('skills')
    .delete()
    .eq('id', skillId);

  if (error) {
    throw new Error('Could not delete');
  }

  return data;
}
