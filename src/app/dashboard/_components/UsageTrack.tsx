'use client'
//UsageTrack.tsx
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../utils/db';
import { AIOutput } from '../../../../utils/schema';
import { eq } from 'drizzle-orm';  // Ensure this import is correct

interface History {
  aiResponse?: string | null ;
  createdBy: string  ;
}

const MAX_CREDITS = 20000;  

function UsageTrack() {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState<number>(0);  // State to store the total usage
  const [progressWidth, setProgressWidth] = useState<number>(0);  // State to store progress bar width
  const [loading, setLoading] = useState<boolean>(true);  // State to show loading state

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    setLoading(true);  // Start loading
    try {
      const result: History[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

      const usage = getTotalUsage(result);  // Calculate the total usage
      setTotalUsage(usage);
      setProgressWidth((usage / MAX_CREDITS) * 100);  // Calculate progress bar width
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  const getTotalUsage = (result: History[]): number => {
    let totalUsage = 0;
    result.forEach((e) => {
      if (e.aiResponse) {
        totalUsage += Number(e.aiResponse.length);  // Accumulate usage
      }
    });
    return totalUsage;
  };

  // Format usage for better readability
  const formatUsage = (usage: number): string => {
    return usage.toLocaleString();  // Formats the number with commas
  };

  // Determine progress bar color based on usage
  const getProgressBarColor = () => {
    if (progressWidth >= 100) return 'bg-red-500';  // Over limit
    if (progressWidth >= 75) return 'bg-yellow-500';  // Close to limit
    return 'bg-[#9981f9]';  // Normal state
  };

  return (
    <div className='m-5 mt-6'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>

        {/* Progress bar */}
        <div className='h-2 bg-gray-300 w-full rounded-full mt-3'>
          <div
            className={`rounded-full h-2 ${getProgressBarColor()}`}
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>

        {/* Total usage display */}
        <h2 className='text-sm my-2'>
          {formatUsage(totalUsage)}/{MAX_CREDITS.toLocaleString()} Credit Used
        </h2>

        {/* Loading state */}
        {loading && <p>Loading usage data...</p>}
      </div>

      {/* Upgrade button */}
      <div>
        <Button variant={'secondary'} className='w-full my-3'>
          Upgrade
        </Button>
      </div>
    </div>
  );
}

export default UsageTrack;