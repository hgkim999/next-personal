import { Database } from './supabase';

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

declare global {
  namespace Supabase {
    export type Row<T extends keyof Database['public']['Tables']> =
      Database['public']['Tables'][T]['Row'];
    export type InsertDto<T extends keyof Database['public']['Tables']> =
      Database['public']['Tables'][T]['Insert'];
    export type UpdateDto<T extends keyof Database['public']['Tables']> =
      Database['public']['Tables'][T]['Update'];
  }
}

export {};
