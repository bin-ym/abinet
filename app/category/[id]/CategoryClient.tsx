"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { findNodeById, getParentNode } from "@/app/lib/prayer-utils";

export default function CategoryClient({ id }: { id: string }) {
  const node = findNodeById(id);

  if (!node || !node.children) {
    notFound();
  }

  const parent = getParentNode(id);
  const backLink = parent ? `/category/${parent.id}` : "/";
  const parentName = parent ? parent.title : "ተመለስ";

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto text-center pb-32">
      {/* 🔙 Back Button */}
      <div className="flex justify-start mb-6">
        <Link
          href="/"
          className="px-4 py-2 text-sm font-medium bg-blue-200 hover:bg-blue-300 rounded-lg transition text-blue-900"
        >
          ← {parentName}
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-blue-900">{node.title}</h1>

      <div className="grid gap-4">
        {node.children?.map((child) => (
          <Link
            key={child.id}
            href={
              child.type === "category"
                ? `/category/${child.id}`
                : `/prayer/${child.id}`
            }
            className="block p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition border-l-4 border-blue-400 hover:border-blue-600 text-lg font-medium text-gray-800"
          >
            {child.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
