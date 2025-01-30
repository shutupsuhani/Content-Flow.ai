import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req) {
  try {
    // Initialize Razorpay instance
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Subscription creation payload
    const subscriptionPayload = {
      plan_id: process.env.SUBSCRIPTION_PLAN_ID, // Razorpay plan ID from environment variables
      customer_notify: 1, // Notify customer
      quantity: 1, // Number of subscriptions
      total_count: 12, // Number of billing cycles (e.g., 12 months for a yearly plan)
      addons: [],
      notes: {
        key1: 'Note', // Optional additional notes
      },
    };

    // Create subscription
    const result = await instance.subscriptions.create(subscriptionPayload);

    // Respond with subscription data
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error creating subscription:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
