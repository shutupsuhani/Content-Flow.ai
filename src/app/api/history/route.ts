import { NextResponse } from 'next/server';
import { db } from '../../../../utils/db'; // Adjust this path as needed
import { eq } from 'drizzle-orm';
import { AIOutput } from '../../../../utils/schema';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId'); // Fetch `userId` from query params

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId parameter' }, { status: 400 });
  }

  try {
    const result = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, userId)); // Adjust this based on your schema

    return NextResponse.json(result); // Return the fetched data
  } catch (error) {
    console.error('Error fetching history:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
