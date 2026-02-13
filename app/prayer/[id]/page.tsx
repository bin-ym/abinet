"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PrayerPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const router = useRouter();

  useEffect(() => {
    audioRef.current?.play().catch(() => {
      // autoplay may be blocked
    });
  }, []);

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto text-center">

      {/* 🔙 Back Button */}
      <div className="flex justify-start mb-4">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-lg transition"
        >
          ← Back
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-6">አዐትብ ገጽየ</h1>

      <div className="mb-8 flex justify-center">
        <Image
          src="/images/mary.png"
          alt="Virgin Mary"
          width={250}
          height={300}
          className="rounded-xl shadow-lg"
          priority
        />
      </div>

      <audio
        ref={audioRef}
        src="/audio/ዘወትር ጸሎት (2).amr"
        controls
        className="w-full mb-8"
      />

      <p className="text-xl leading-loose whitespace-pre-line">
        አዐትብ ገጽየ ወኩለንታየ በትእምርተ መስቀል። 
        በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ
        በቅድስት ሥላሴ እንዘ አአምን ወእትመኅፀን እክሕደከ ሰይጣን በቅድመ ዛቲ እምየ
        ቅድስት ቤተ ክርስትያን እንተ ይእቲ ስምዕየ ማርያም ጽዮን ለዓለም ዓለም፡፡
      </p>
    </main>
  );
}