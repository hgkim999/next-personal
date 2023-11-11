export type Skill = Omit<Supabase.Row<'skills'>, 'id'> & { id?: number };
