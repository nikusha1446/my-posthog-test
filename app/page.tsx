'use client';

import { usePostHog } from 'posthog-js/react';

export default function Home() {
  const posthog = usePostHog();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>PostHog Test App</h1>
      <button
        onClick={() => posthog.capture('button_clicked', { label: 'test' })}
      >
        Click me to send event
      </button>
    </main>
  );
}
