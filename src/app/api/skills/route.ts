import { getSkills } from '@/services/skill.service';
import { NextResponse } from 'next/server';

export async function GET() {
  const skills = await getSkills();
  return NextResponse.json(skills);
}
