import Link from "next/link";
import { prayerData } from "./data/prayers";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-amber-900">
        አብነት ትምህርት ቤት
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {prayerData.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="p-6 rounded-2xl bg-white shadow-md text-center text-xl font-semibold hover:shadow-lg transition border-t-4 border-amber-500 text-gray-800"
          >
            {cat.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
