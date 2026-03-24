import { PrayerNode } from "../types";

export const monday: PrayerNode[] = [
  {
    id: "monday",
    title: "የሰኑይ ውዳሴ ማርያም",
    type: "category",
    children: [
      {
        id: "fekede-egzi",
        title: "ፈቀደ",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፩ ፈቀደ.m4a",
        segments: [
          { start: 0, end: 8, text: "ዉዳሴሃ<sup>ቂ</sup> ለእግዝእትነ<sup>ጣ</sup> ማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ወላዲተ-አምላክ<sup>ጣ</sup>" },
          { start: 8, end: 11, text: "ዘይትነበብ<sup>ፍ</sup> በዕለተ-ሰኑይ።<sup>ጣ</sup>" },
          { start: 12, end: 17, text: "ፈቀደ<sup>ተ</sup> እግዚእ<sup>ጣ</sup> ያግእዞ<sup>ተ</sup> ለአዳም<sup>ጣ</sup>" },
          { start: 17, end: 24, text: " ኅዙነ<sup>ተ</sup> ወትኩዘ-ልብ<sup>ጣ</sup> ወያግብኦ<sup>ተ</sup> ኀበ-ዘትካት<sup>ጣ</sup> መንበሩ።<sup>ቂ</sup>" },
          { start: 24, end: 28, text: "ሰአሊ<sup>ተ</sup> ለነ<sup>ጣ</sup> ተ ቅድስት።<sup>ጣ</sup>" },
        ],
        content: `
        ዉዳሴሃ<sup>ቂ</sup> ለእግዝእትነ<sup>ጣ</sup> ማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ወላዲተ-አምላክ<sup>ጣ</sup>
        ዘይትነበብ<sup>ፍ</sup> በዕለተ-ሰኑይ።<sup>ጣ</sup>
        ፈቀደ<sup>ተ</sup> እግዚእ<sup>ጣ</sup>
        ያግእዞ<sup>ተ</sup> ለአዳም<sup>ጣ</sup> ኅዙነ<sup>ተ</sup> ወትኩዘ-ልብ<sup>ጣ</sup> ወያግብኦ<sup>ተ</sup> ኀበ-ዘትካት<sup>ጣ</sup> መንበሩ።<sup>ቂ</sup>
        ሰአሊ<sup>ተ</sup> ለነ<sup>ጣ</sup> ተ ቅድስት።<sup>ጣ</sup>`,
      },
      {
        id: "sereke",
        title: "ለሔዋን",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፪ ለሔዋን.m4a",
        segments: [
          {start: 1, end: 8, text: "ሠረቀ<sup>ተ</sup> በሥጋ<sup>ቂ</sup> እምድንግል<sup>ጣ</sup> ዘእንበለ-ዘርአ-ብእሲ<sup>ቂ</sup> ወአድኀነነ<sup>ተ</sup>"},
          {start: 8, end: 12, text: "ለሔዋን<sup>ፍ</sup> እንተ-አስሐታ<sup>ቂ</sup> ከይሲ<sup>ቂ</sup>"},
          {start: 12, end: 17, text: "ፈትሐ<sup>ተ</sup> ላዕሌላ<sup>ቂ</sup> <strong><span class='red-word'>እግዚአብሔር<sup>ጣ</sup></span></strong> እንዘ ይብል<sup>ጣ</sup>" },
          {start: 17, end: 27, text: "ብዙኀ<sup>ተ</sup> አበዝኆ<sup>ቂ</sup> ለሕማምኪ<sup>ተ</sup> ወለፃዕርኪ<sup>ተ</sup> ሠምረ<sup>ተ</sup> ልቡ<sup>ጣ</sup> ኀበ-ፍቅረ-ሰብእ<sup>ጣ</sup> ወአግአዛ።<sup>ቂ</sup>" },
          {start: 27, end: 31, text: "ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።" },
        ],
        content: `
        ሠረቀ<sup>ተ</sup> በሥጋ<sup>ቂ</sup> እምድንግል<sup>ጣ</sup> ዘእንበለ-ዘርአ-ብእሲ<sup>ቂ</sup> ወአድኀነነ<sup>ተ</sup>
        ለሔዋን<sup>ፍ</sup> እንተ-አስሐታ<sup>ቂ</sup> ከይሲ<sup>ቂ</sup> ፈትሐ<sup>ተ</sup> ላዕሌላ<sup>ቂ</sup> <span class="red-word">እግዚአብሔር</span><sup>ጣ</sup> እንዘ ይብል<sup>ጣ</sup> ብዙኀ<sup>ተ</sup> አበዝኆ<sup>ቂ</sup> ለሕማምኪ<sup>ተ</sup> ወለፃዕርኪ<sup>ተ</sup> ሠምረ<sup>ተ</sup> ልቡ<sup>ጣ</sup> ኀበ-ፍቅረ-ሰብእ<sup>ጣ</sup> ወአግአዛ።ቂ
        ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።`,
      },
      {
        id: "eyesus-kristos",
        title: "ኢየሱስ ክርስቶስ",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፫ ኢየሱስ.m4a",
        segments: [
          {start: 1, end: 8, text: "<strong><span class='red-word'>ኢየሱስ<sup>ጣ</sup> ክርስቶስ<sup>ጣ</sup></span></strong> ቃል<sup>ጣ</sup> ዘተሰብአ<sup>ተ</sup> ወኀደረ<sup>ተ</sup> ላዕሌነ<sup>ተ</sup> ወርኢነ<sup>ተ</sup> ስብሐቲሁ<sup>ቂ</sup> ከመ-ስብሐተ-አሐዱ<sup>ቂ</sup> ዋሕድ<sup>ጣ</sup>" },
          {start: 8, end: 18, text: "ለአቡሁ<sup>ቂ</sup> ሠምረ<sup>ተ</sup> ይሣሃለነ<sup>ተ</sup>።" },
          {start: 18, end: 22, text: "ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።" },
        ],
        content: `ኢየሱስ<sup>ጣ</sup> ክርስቶስ<sup>ጣ</sup> ቃል<sup>ጣ</sup> ዘተሰብአ<sup>ተ</sup> ወኀደረ<sup>ተ</sup> ላዕሌነ<sup>ተ</sup>
        ወርኢነ<sup>ተ</sup> ስብሐቲሁ<sup>ቂ</sup> ከመ-ስብሐተ-አሐዱ<sup>ቂ</sup> ዋሕድ<sup>ጣ</sup> ለአቡሁ<sup>ቂ</sup> ሠምረ<sup>ተ</sup> ይሣሃለነ<sup>ተ</sup>።
        ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።`,
      },
      {
        id: "reye",
        title: "ርእየ",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፬ ርእየ.m4a",
        content: `
ርእየ
ተ ኢሳይያስ<sup>ተ</sup> ነቢይ<sup>ጣ</sup> በመንፈሰ-ትንቢት<sup>ቂ</sup> ምሥጢሮ<sup>ቂ</sup> ለአማኑኤል<sup>ፍ</sup> ወበእንተዝ<sup>ቂ</sup> ጸርሐ<sup>ተ</sup> እንዘ ይብል<sup>ጣ</sup> ሕፃን
ጣ ተወልደ<sup>ተ</sup> ለነ
ተ ወልድ<sup>ጣ</sup> ተዉህበ<sup>ተ</sup> ለነ።ተ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "tefesah",
        title: "ተፈሣሕ",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፭ ተፈሣሕ.m4a",
        content: `
ተፈሣሕ<sup>ፍ</sup> ወተኀሠይ<sup>ፍ</sup> ኦ<sup>ቂ</sup> ዘመደ-እጓለ-እመ-ሕያዉ<sup>ጣ</sup> እስመ-አፍቀሮ<sup>ቂ</sup> እግዚአብሔር<sup>ጣ</sup> ለዓለም<sup>ጣ</sup> ወመጠወ<sup>ተ</sup> ወልዶ<sup>ቂ</sup> ዋሕደ<sup>ተ</sup> ከመ ይሕየዉ<sup>ፍ</sup> ኵሉ<sup>ቂ</sup> ዘየአምን
ፍ ቦቱ<sup>ቂ</sup> እስከ-ለዓለም<sup>ጣ</sup> ፈነወ<sup>ተ</sup> ለነ
ተ መዝራዕቶ<sup>ቂ</sup> ልዑለ።ተ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "zehalo",
        title: "ዘሀሎ",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፮ ዘሀሎ.m4a",
        content: `
ዘሀሎ<sup>ቂ</sup> ወይሄሉ<sup>ተ</sup> ዘመጽአ<sup>ተ</sup> ወካዕበ<sup>ተ</sup> ይመጽእ<sup>ቂ</sup> ኢየሱስ ጣ ክርስቶስ<sup>ጣ</sup> ቃል<sup>ጣ</sup> ዘተሰብአ<sup>ተ</sup> እምኔኪ<sup>ተ</sup> ዘእንበለ ዉላጤ<sup>ቂ</sup> ኮነ
ተ ፍጹመ<sup>ተ</sup> ሰብአ<sup>ተ</sup> ኢተበዐደ<sup>ተ</sup> ወኢተፈለጠ<sup>ተ</sup> በኵሉ<sup>ቂ</sup> ግብሩ<sup>ቂ</sup> ወልድ<sup>ጣ</sup> ዋሕድ<sup>ጣ</sup> አላ<sup>ቂ</sup> አሐዱ<sup>ቂ</sup> ራእይ<sup>ጣ</sup> ወአሐዱ<sup>ቂ</sup> ህላዌ<sup>ቂ</sup> ወአሐዱ<sup>ቂ</sup> መለኮት<sup>ቂ</sup> ዘ
እግዚአብሔር<sup>ቂ</sup> ቃል።ጣ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "tefesahi-o-bete-lehem",
        title: "ተፈሥሒ ኦ ቤተ ልሔም",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፯ ተፈሥሒ አ ቤተ ልሔም.m4a",
        content: `
ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ቤተ-ልሔም<sup>ጣ</sup> ሀገሮሙ<sup>ተ</sup> ለነቢያት<sup>ቂ</sup> እስመ-በኀቤኪ<sup>ተ</sup> ተወልደ<sup>ተ</sup> ክርስቶስ<sup>ጣ</sup> ዳግማይ<sup>ጣ</sup> አዳም<sup>ጣ</sup> ከመ ያግብኦ<sup>ተ</sup> ለአዳም<sup>ጣ</sup> ቀዳሚ<sup>ቂ</sup> ብእሲ<sup>ቂ</sup> እምድር<sup>ጣ</sup> ዉስተ-ገነት<sup>ጣ</sup> ይስዐር<sup>ፍ</sup> ፍትሐ-ሞት።ጣ ኦ<sup>ቂ</sup> አዳም<sup>ጣ</sup> መሬት<sup>ጣ</sup> አንተ<sup>ተ</sup> ወትገብእ<sup>ፍ</sup> ዉስተ-መሬት።ጣ ኀበ ሀለወት<sup>ፍ</sup> ብዝኀት<sup>ጣ</sup> ኃጢአት<sup>ጣ</sup> በህየ
ቂ ትበዝኅ<sup>ተ</sup> ጸጋ-እግዚአብሔር።ጣ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "titfesah",
        title: "ትትፌሣሕ",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፰ ትትፌሣሕ.m4a",
        content: `
ትትፌሣሕ<sup>ፍ</sup> ወትትኀሠይ<sup>ፍ</sup> ኵሉ<sup>ቂ</sup> ነፍስተ-ሰብእ<sup>ጣ</sup> ምስለ መላእክት<sup>ጣ</sup> ይሴብሕዎ<sup>ተ</sup> ለክርስቶስ<sup>ጣ</sup> ንጉሥ<sup>ጣ</sup> ይጸርሑ<sup>ተ</sup> ወይብሉ<sup>ተ</sup> ስብሐት<sup>ጣ</sup> ለእግዚአብሔር<sup>ጣ</sup> በሰማያት<sup>ጣ</sup> ወሰላም<sup>ጣ</sup> በምድር<sup>ጣ</sup> ሥምረቱ<sup>ቂ</sup> ለሰብእ፣
ጣ እስመ-ሰዐረ<sup>ተ</sup> ዘትካት<sup>ጣ</sup> ወነሠተ<sup>ተ</sup> ምክሮ<sup>ቂ</sup> ለጸላዒ<sup>ቂ</sup> ወሠጠጠ<sup>ተ</sup> መጽሐፈ ዕዳሆሙ<sup>ተ</sup> ለአዳም<sup>ጣ</sup> ወለሔዋን
ፍ ወረሰዮሙ<sup>ተ</sup> አግዓዝያነ
ተ ዘተወልደ<sup>ተ</sup> ለነ
ተ በሀገረ-ዳዊት<sup>ጣ</sup> መድኃኒነ
ተ ኢየሱስ ጣ ክርስቶስ።ጣ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "berhan-zebeaman",
        title: "ብርሃን",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፱ ብርሃን.m4a",
        content: `
ብርሃን
ጣ ዘበአማን
ጣ ዘያበርህ<sup>ፍ</sup> ለኵሉ<sup>ቂ</sup> ሰብእ<sup>ጣ</sup> ለእለ-ይነብሩ<sup>ተ</sup> ዉስተ-ዓለም<sup>ጣ</sup> በእንተ-ፍቅረ-ሰብእ<sup>ጣ</sup> መጽአከ<sup>ተ</sup> ዉስ<sup>ተ</sup> ዓለም<sup>ጣ</sup> ወኵሉ<sup>ቂ</sup> ፍጥረት<sup>ጣ</sup> ተፈሥሐ<sup>ተ</sup> በምጽአትከ<sup>ተ</sup> እስመ-አድኀንኮ<sup>ቂ</sup> ለአዳም<sup>ጣ</sup> እምስሕተት<sup>ጣ</sup> ወረሰይካ<sup>ቂ</sup> ለሔዋን
ፍ አግአዚተ<sup>ተ</sup> እምጻዕረ ሞት<sup>ጣ</sup> ወወሀብከነ
ተ መንፈሰ-ልደት።ጣ ባረክናከ<sup>ተ</sup> ምስለ-መላእክቲከ።ተ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
    ],
  },
];