'use client';

import { usePostHog } from 'posthog-js/react';

export default function Home() {
  const posthog = usePostHog();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>PostHog Funnel Test</h1>
      <button onClick={() => posthog.capture('viewed_product')}>
        Step 1: View Product
      </button>
      <button onClick={() => posthog.capture('added_to_cart')}>
        Step 2: Add to Cart
      </button>
      <button onClick={() => posthog.capture('started_checkout')}>
        Step 3: Start Checkout
      </button>
      <button onClick={() => posthog.capture('completed_purchase')}>
        Step 4: Complete Purchase
      </button>
    </main>
  );
}
