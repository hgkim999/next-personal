'server-only';

import { createServerClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

export async function getSkills() {
  const supabase = createServerClient(cookies());

  const { data, error, status, statusText } = await supabase
    .from('skills')
    .select();
  if (error) {
    throw new Error('Could not fetch ');
  }
  return data || [];
}

export type Skill = ArrayElement<Awaited<ReturnType<typeof getSkills>>>;
