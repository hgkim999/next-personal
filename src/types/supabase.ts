export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          created_at: string;
          id: number;
          logo_img: string | null;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          logo_img?: string | null;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          logo_img?: string | null;
          name?: string | null;
        };
        Relationships: [];
      };
      experiences: {
        Row: {
          company: number | null;
          created_at: string;
          description: string | null;
          end_date: string | null;
          id: number;
          job_title: string;
          location: string | null;
          start_date: string | null;
        };
        Insert: {
          company?: number | null;
          created_at?: string;
          description?: string | null;
          end_date?: string | null;
          id?: number;
          job_title: string;
          location?: string | null;
          start_date?: string | null;
        };
        Update: {
          company?: number | null;
          created_at?: string;
          description?: string | null;
          end_date?: string | null;
          id?: number;
          job_title?: string;
          location?: string | null;
          start_date?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'experiences_company_fkey';
            columns: ['company'];
            isOneToOne: false;
            referencedRelation: 'companies';
            referencedColumns: ['id'];
          },
        ];
      };
      skills: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          yoe: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          yoe?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          yoe?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
