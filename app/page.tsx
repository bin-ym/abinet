import Link from "next/link";

const categories = [
  { id: "yezewetr", title: "የዘወትር ጸሎት" },
  { id: "wedase", title: "የዕለቱ ውዳሴ ማርያም" },
  { id: "ankece", title: "አንቀጸ ብርሃን" },
  { id: "yewedswa", title: "ይዌድስዋ መላዕክት" },
  { id: "melka-mariam", title: "መልክአ ማርያም" },
  { id: "melka-jesus", title: "መልክአ ኢየሱስ" },
];

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        አብነት ትምህርት ቤት
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="p-6 rounded-2xl bg-white shadow-md text-center text-xl font-semibold hover:shadow-lg transition"
          >
            {cat.title}
          </Link>
        ))}
      </div>
    </main>
  );
}