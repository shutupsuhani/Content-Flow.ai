'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Script from 'next/script'; 
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Page = () => {
  const [loading, setLoading] = useState(false);

  const onPayment = () => {
    setLoading(true);
    axios
      .post('/api/subscription', {})
      .then((resp) => {
        console.log(resp);
        subPayment(resp.data.id);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const subPayment = (subId: string) => {
    if (!window.Razorpay) {
      console.error('Razorpay SDK not loaded');
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZOR_KEY_ID,
      subscription_id: subId,
      name: 'Content-Flow.AI',
      image: '/log.svg',
      description: 'Yearly Subscription',
      handler: async (resp: any) => {
        console.log('Payment successful:', resp);
        setLoading(false);
      },
      prefill: {
        name: 'Your Name', // Optional
        email: 'your-email@example.com', // Optional
        contact: '1234567890', // Optional
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => console.log('Razorpay SDK loaded')}
        onError={() => console.error('Failed to load Razorpay SDK')}
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Upgrade With Monthly Plan
      </h1>
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Free Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-xl font-bold text-center text-gray-800">Free</h2>
          <p className="text-center text-2xl font-bold text-gray-800 my-4">
            0$<span className="text-sm font-medium">/month</span>
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>✔ 10,000 Words/Month</li>
            <li>✔ 50+ Content Templates</li>
            <li>✔ Unlimited Download & Copy</li>
            <li>✔ 1 Month of History</li>
          </ul>
          <button
            className="mt-6 w-full py-3 text-lg font-semibold bg-gray-500 text-white rounded-md cursor-not-allowed"
            disabled
          >
            Currently Active Plan
          </button>
        </div>

        {/* Yearly Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm border-2 border-primary">
          <h2 className="text-xl font-bold text-center text-gray-800">Yearly</h2>
          <p className="text-center text-2xl font-bold text-gray-800 my-4">
            <span className="bg-blue-100 px-2 rounded-md">3$</span>
            <span className="text-sm font-medium">/Yearly</span>
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>✔ 1,00,000 Words/Month</li>
            <li>✔ 50+ Template Access</li>
            <li>✔ Unlimited Download & Copy</li>
            <li>✔ 1 Year of History</li>
          </ul>
          <button
            disabled={loading}
            onClick={onPayment}
            className="mt-6 w-full py-3 flex flex-col items-center justify-center text-lg font-semibold border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white rounded-3xl"
          >
            {loading && <Loader2 className="animate-spin" />}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
