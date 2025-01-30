'use client';

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Type for the history data
export interface History {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const HistoryPage: React.FC = () => {
  const [history, setHistory] = useState<History[]>([]); // State to store AI output history
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const { user } = useUser(); // Fetch the current authenticated user

  useEffect(() => {
    if (user) {
      // Fetch the user's history when the user is available
      console.log(user.primaryEmailAddress?.emailAddress);
      const fetchHistory = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/history?userId=${user.primaryEmailAddress?.emailAddress}`);
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          const data = await res.json();
          setHistory(data); // Set the received data to the history state
        } catch (error) {
          console.error("Error fetching history:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchHistory();
    }
  }, [user]);

  const truncateResponse = (response: string, wordLimit: number = 10): string => {
    const words = response.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "..."; // Truncate and append "..."
    }
    return response;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    ); // Display loading indicator
  }

  return (
    <div className="p-10 flex bg-white flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-4">AI Content History</h1>
      {history.length === 0 ? (
        <p>No history found.</p> // If no history exists
      ) : (
        <table className="table-auto shadow-sm w-full border-collapse border border-gray-300 p-5">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Template</th>
              <th className="border border-gray-300 px-4 py-2">AI Response</th>
              <th className="border border-gray-300 px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.templateSlug}</td>
                <td
                  className="border border-gray-300 px-4 py-2 text-sm overflow-hidden"
                  title={item.aiResponse}
                >
                  {truncateResponse(item.aiResponse)}{" "}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(item.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HistoryPage;
