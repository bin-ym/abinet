import Link from "next/link";
import { prayerData } from "./data/prayers";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        አብነት ትምህርት ቤት
      </h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg leading-loose text-center mb-12">
          <strong className="text-black">ግዕዝ ንባብ ምልክት፦</strong>{" "}
          <sup className="text-sm">ተ</sup>(ተነሽ)፣{" "}
          <sup className="text-sm">ቂ</sup>(ወዳቂ)፣{" "}
          <sup className="text-sm">ጣ</sup>(ተጣይ)፣{" "}
          <sup className="text-sm">ፍ</sup>(ስያፍ-ተነሽ)፣ - (ተናባቢ)
          <br />
          <strong className="text-black">ምሳሌ፦</strong> ሰአሊተ
          <sup className="text-sm">ተ</sup>(ተነሽ)፣ ለነ
          <sup className="text-sm">ቂ</sup>(ወዳቂ) ድንግል
          <sup className="text-sm">ፍ</sup>(ተጣይ)፣ እሰግድፍ
          <sup className="text-sm">ፍ</sup>(ስያፍ-ተነሽ)፣
          <br />
          አኃዜ-ኩሉ<sup className="text-sm">ቂ</sup>(ተናባቢ ወዳቂ)፣ ለዓለመ-ዓለም።
          <sup className="text-sm">ጣ</sup>(ተናባቢ ተጣይ)፣ ሶበ-ትጸልዩ
          <sup className="text-sm">ተ</sup>(ተናባቢ ተነሽ)
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {prayerData.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="p-6 rounded-2xl bg-white shadow-md text-center text-xl font-semibold hover:shadow-lg transition border-t-4 border-blue-500 text-gray-800"
          >
            {cat.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
