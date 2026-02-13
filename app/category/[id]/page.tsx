"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findNodeById, getParentNode } from "@/app/lib/prayer-utils";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const node = findNodeById(id);

  if (!node || !node.children) {
    notFound();
  }

  const parent = getParentNode(id);
  const backLink = parent ? `/category/${parent.id}` : "/";
  const parentName = parent ? parent.title : "Back";

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      {/* 🔙 Back Button */}
      <div className="flex justify-start mb-6">
        <Link
          href={backLink}
          className="px-4 py-2 text-sm font-medium bg-amber-200 hover:bg-amber-300 rounded-lg transition text-amber-900"
        >
          ← {parentName}
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center mb-10 text-amber-900">
        {node.title}
      </h1>

      <div className="grid gap-4">
        {node.children.map((child) => (
          <Link
            key={child.id}
            href={
              child.type === "category"
                ? `/category/${child.id}`
                : `/prayer/${child.id}`
            }
            className="p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition border-l-4 border-amber-500 flex items-center justify-between group"
          >
            <span className="text-lg font-semibold text-gray-800 group-hover:text-amber-700">
              {child.title}
            </span>
            <span className="text-amber-400">
              {child.type === "category" ? "📂" : "🙏"}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
