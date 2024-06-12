import { fetchCardData } from '@/app/lib/data';

export async function GET() {
  try {
    const details = await fetchCardData();

    return Response.json({ details })
  } catch (error) {
    return Response.error();
  }
}
