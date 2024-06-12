import {  fetchRevenue } from '@/app/lib/data';
import { revenue } from '@/app/lib/placeholder-data';

export async function GET() {
  try {
    const invoices = await fetchRevenue();

    return Response.json({ revenue })
  } catch (error) {
    return Response.error();
  }
}
