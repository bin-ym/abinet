"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  findNodeById,
  getParentNode,
  getPrayerSiblings,
} from "@/app/lib/prayer-utils";
import AudioPlayer from "@/app/components/AudioPlayer";

export default function PrayerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const node = findNodeById(id);

  if (!node || node.type !== "prayer") {
    notFound();
  }

  const parent = getParentNode(id);
  const backLink = parent ? `/category/${parent.id}` : "/";
  const parentName = parent ? parent.title : "Back";

  const { prev, next } = getPrayerSiblings(id);

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto text-center pb-32">
      {/* 🔙 Back Button */}
      <div className="flex justify-start mb-6">
        <Link
          href={backLink}
          className="px-4 py-2 text-sm font-medium bg-amber-200 hover:bg-amber-300 rounded-lg transition text-amber-900"
        >
          ← {parentName}
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-amber-900">{node.title}</h1>

      {/* Image */}
      <div className="mb-8 flex justify-center">
        <Image
          src="/images/mary.png"
          alt="Virgin Mary"
          width={200}
          height={240}
          className="rounded-xl shadow-lg border-4 border-amber-500/20"
          priority
        />
      </div>

      {/* 🎵 Audio Player */}
      {node.audio && (
        <div className="mb-8 w-full">
          <AudioPlayer
            src={node.audio}
            title={node.title}
            onNext={() => next && router.push(`/prayer/${next.id}`)}
            onPrev={() => prev && router.push(`/prayer/${prev.id}`)}
            hasNext={!!next}
            hasPrev={!!prev}
          />
        </div>
      )}

      {/* 📜 Prayer Content */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 text-center">
        <div
          className="mx-auto text-xl leading-loose text-gray-800 font-serif whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: node.content ?? "" }}
        />
      </div>
    </main>
  );
}
