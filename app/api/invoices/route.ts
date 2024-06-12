import { fetchLatestInvoices } from '@/app/lib/data';

export async function GET() {
  try {
    const invoices = await fetchLatestInvoices();

    return Response.json({ invoices})
  } catch (error) {
    return Response.error();
  }
}
