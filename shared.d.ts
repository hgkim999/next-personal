import { Database } from './src/types/supabase';

declare global {
  export type ArrayElement<ArrayType extends readonly unknown[]> =
    ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
  export type SVGImportComponent = React.FC<React.SVGProps<SVGSVGElement>>;

  namespace Supabase {
    export type Row<T extends keyof Database['public']['Tables']> =
      Database['public']['Tables'][T]['Row'];
    export type InsertDto<T extends keyof Database['public']['Tables']> =
      Database['public']['Tables'][T]['Insert'];
    export type UpdateDto<T extends keyof Database['public']['Tables']> =
      Database['public']['Tables'][T]['Update'];
  }

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
      PROJECT_REF: string;
      SUPABASE_SERVICE_ROLE_KEY: string;
      VERCEL_GIT_COMMIT_SHA: string;
    }
  }

  declare module '*.svg' {
    const SVG: SVGImportComponent;
    export default SVG;
  }
}
