'server-only';

import { createServerClient } from '@/lib/supabase/server';
import { Skill } from '@/types/skill';
import { cookies } from 'next/headers';

export async function getSkills(): Promise<Skill[]> {
  const supabase = createServerClient(cookies());

  const { data: skills, error } = await supabase.from('skills').select('*');
  if (error) {
    throw new Error('Could not fetch ');
  }

  return skills || [];
}
