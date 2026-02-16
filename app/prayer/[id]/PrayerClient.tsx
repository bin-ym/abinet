"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, notFound } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  findNodeById,
  getParentNode,
  getPrayerSiblings,
} from "@/app/lib/prayer-utils";
import AudioPlayer from "@/app/components/AudioPlayer";

export default function PrayerClient({ id }: { id: string }) {
  const router = useRouter();
  const node = findNodeById(id);
  const [currentTime, setCurrentTime] = useState(0);
  const activeSegmentRef = useRef<HTMLDivElement>(null);

  if (!node || node.type !== "prayer") {
    notFound();
  }

  const parent = getParentNode(id);
  const backLink = parent ? `/category/${parent.id}` : "/";
  const parentName = parent ? parent.title : "Back";

  const { prev, next } = getPrayerSiblings(id);

  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
  };

  useEffect(() => {
    if (activeSegmentRef.current) {
      activeSegmentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentTime]);

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto text-center pb-32">
      {/* 🔙 Back Button */}
      <div className="flex justify-start mb-6">
        <Link
          href={backLink}
          className="px-4 py-2 text-sm font-medium bg-blue-100 hover:bg-blue-200 rounded-lg transition text-blue-900"
        >
          ← {parentName}
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-blue-900">{node.title}</h1>

      {/* Image */}
      <div className="mb-8 flex justify-center">
        <Image
          src="/images/mary.png"
          alt="Virgin Mary"
          width={200}
          height={240}
          className="rounded-xl shadow-lg border-4 border-blue-500/20"
          priority
        />
      </div>

      {/* 🎵 Audio Player */}
      {node.audio && (
        <div className="mb-8 w-full sticky top-4 z-50">
          <AudioPlayer
            src={node.audio}
            title={node.title}
            onNext={() => next && router.push(`/prayer/${next.id}`)}
            onPrev={() => prev && router.push(`/prayer/${prev.id}`)}
            hasNext={!!next}
            hasPrev={!!prev}
            onTimeUpdate={handleTimeUpdate}
          />
        </div>
      )}

      {/* 📜 Prayer Content */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 text-center">
        {node.segments ? (
          <div className="text-xl leading-relaxed font-serif text-gray-400">
            {node.segments.map((segment, index) => {
              const isActive =
                currentTime >= segment.start && currentTime < segment.end;
              const isPast = currentTime >= segment.end;

              return (
                <span
                  key={index}
                  ref={isActive ? activeSegmentRef : null}
                  className={`transition-colors duration-200 px-1 rounded mx-0.5 inline-block ${
                    isActive
                      ? "text-blue-900 bg-blue-100 font-bold scale-105 shadow-sm"
                      : isPast
                        ? "text-gray-800"
                        : "text-gray-400"
                  }`}
                  dangerouslySetInnerHTML={{ __html: segment.text }}
                />
              );
            })}
          </div>
        ) : (
          <div
            className="mx-auto text-xl leading-loose text-gray-800 font-serif whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: node.content ?? "" }}
          />
        )}
      </div>
    </main>
  );
}
