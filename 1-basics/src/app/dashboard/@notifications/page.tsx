import { delay } from '@/app/(auth)/signup/page';
import React from 'react';

export default async function Notification() {
  await delay(5000);

  return <div>Notification</div>;
}
