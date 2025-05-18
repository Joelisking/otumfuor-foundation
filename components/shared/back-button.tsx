'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 cursor-pointer">
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Stories
    </div>
  );
}
