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
      {/* 📱 Top Navbar with Back + Title */}
      <header className="sticky top-0 z-40 -mx-6 mb-3 bg-blue-50/95 backdrop-blur-sm border-b border-blue-500">
        <div className="px-6 py-3 flex items-center gap-3">
          <Link
            href={backLink}
            className="px-4 py-2 text-sm font-medium bg-blue-100 hover:bg-blue-200 rounded-lg transition text-blue-900"
          >
            ← {parentName}
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-blue-900 text-center truncate">
            {node.title}
          </h1>
          {/* spacer to balance back button width on the right */}
          <div className="w-16" />
        </div>
      </header>

      <div className="grid gap-4 mt-6">
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
