import { PrayerNode } from "./types";

export const wedasePart1: PrayerNode[] = [
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
          {
            start: 0,
            end: 7,
            text: "ዉዳሴሃ<sup>ቂ</sup> ለእግዝእትነ<sup>ጣ</sup> ማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ወላዲተ-አምላክ<sup>ጣ</sup> ዘይትነበብ<sup>ፍ</sup> በዕለተ-ሰኑይ።<sup>ጣ</sup>",
          },
          { start: 7, end: 9, text: "ፈቀደ<sup>ተ</sup> እግዚእ<sup>ጣ</sup>" },
          {
            start: 9,
            end: 18,
            text: "ያግእዞ<sup>ተ</sup> ለአዳም<sup>ጣ</sup> ኅዙነ<sup>ተ</sup> ወትኩዘ-ልብ<sup>ጣ</sup> ወያግብኦ<sup>ተ</sup> ኀበ-ዘትካት<sup>ጣ</sup> መንበሩ።<sup>ቂ</sup> ሰአሊ<sup>ተ</sup> ለነ<sup>ጣ</sup> ተ ቅድስት።<sup>ጣ</sup>",
          },
        ],
        content: `
ዉዳሴሃ<sup>ቂ</sup> ለእግዝእትነ<sup>ጣ</sup> ማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ወላዲተ-አምላክ<sup>ጣ</sup> ዘይትነበብ<sup>ፍ</sup> በዕለተ-ሰኑይ።<sup>ጣ</sup>
ፈቀደ<sup>ተ</sup> እግዚእ<sup>ጣ</sup>
ያግእዞ<sup>ተ</sup> ለአዳም<sup>ጣ</sup> ኅዙነ<sup>ተ</sup> ወትኩዘ-ልብ<sup>ጣ</sup> ወያግብኦ<sup>ተ</sup> ኀበ-ዘትካት<sup>ጣ</sup> መንበሩ።<sup>ቂ</sup> ሰአሊ<sup>ተ</sup> ለነ<sup>ጣ</sup> ተ ቅድስት።<sup>ጣ</sup>
`,
      },
      {
        id: "sereke",
        title: "ለሔዋን",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፪ ለሔዋን.m4a",
        content: `
ሠረቀ<sup>ተ</sup> በሥጋ<sup>ቂ</sup> እምድንግል<sup>ጣ</sup> ዘእንበለ-ዘርአ-ብእሲ<sup>ቂ</sup> ወአድኀነነ
ተ ለሔዋን
ፍ እንተ-አስሐታ<sup>ቂ</sup> ከይሲ<sup>ቂ</sup> ፈትሐ<sup>ተ</sup> ላዕሌላ<sup>ቂ</sup> እግዚአብሔር<sup>ጣ</sup> እንዘ ይብል<sup>ጣ</sup> ብዙኀ<sup>ተ</sup> አበዝኆ<sup>ቂ</sup> ለሕማምኪ<sup>ተ</sup> ወለፃዕርኪ<sup>ተ</sup> ሠምረ<sup>ተ</sup> ልቡ<sup>ጣ</sup> ኀበ-ፍቅረ-ሰብእ<sup>ጣ</sup> ወአግአዛ።ቂ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
      {
        id: "eyesus-kristos",
        title: "ኢየሱስ ክርስቶስ",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፫ ኢየሱስ.m4a",
        content: `
ኢየሱስ ጣ ክርስቶስ<sup>ጣ</sup> ቃል<sup>ጣ</sup> ዘተሰብአ<sup>ተ</sup> ወኀደረ<sup>ተ</sup> ላዕሌነ
ተ ወርኢነ
ተ ስብሐቲሁ<sup>ቂ</sup> ከመ-ስብሐተ-አሐዱ<sup>ቂ</sup> ዋሕድ<sup>ጣ</sup> ለአቡሁ<sup>ቂ</sup> ሠምረ<sup>ተ</sup> ይሣሃለነ።
ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
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
ተ ወልድ<sup>ጣ</sup> ተዉህበ<sup>ተ</sup> ለነ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
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
ተ መዝራዕቶ<sup>ቂ</sup> ልዑለ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
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
እግዚአብሔር<sup>ቂ</sup> ቃል።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
      {
        id: "tefesahi-o-bete-lehem",
        title: "ተፈሥሒ ኦ ቤተ ልሔም",
        type: "prayer",
        audio: "/audio/ውዳሴ ማርያም/ውዳሴ ማርያም/ዘሰኑይ/፯ ተፈሥሒ አ ቤተ ልሔም.m4a",
        content: `
ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ቤተ-ልሔም<sup>ጣ</sup> ሀገሮሙ<sup>ተ</sup> ለነቢያት<sup>ቂ</sup> እስመ-በኀቤኪ<sup>ተ</sup> ተወልደ<sup>ተ</sup> ክርስቶስ<sup>ጣ</sup> ዳግማይ<sup>ጣ</sup> አዳም<sup>ጣ</sup> ከመ ያግብኦ<sup>ተ</sup> ለአዳም<sup>ጣ</sup> ቀዳሚ<sup>ቂ</sup> ብእሲ<sup>ቂ</sup> እምድር<sup>ጣ</sup> ዉስተ-ገነት<sup>ጣ</sup> ይስዐር<sup>ፍ</sup> ፍትሐ-ሞት።ጣ ኦ<sup>ቂ</sup> አዳም<sup>ጣ</sup> መሬት<sup>ጣ</sup> አንተ<sup>ተ</sup> ወትገብእ<sup>ፍ</sup> ዉስተ-መሬት።ጣ ኀበ ሀለወት<sup>ፍ</sup> ብዝኀት<sup>ጣ</sup> ኃጢአት<sup>ጣ</sup> በህየ
ቂ ትበዝኅ<sup>ተ</sup> ጸጋ-እግዚአብሔር።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
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
ተ ኢየሱስ ጣ ክርስቶስ።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
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
ተ መንፈሰ-ልደት።ጣ ባረክናከ<sup>ተ</sup> ምስለ-መላእክቲከ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
    ],
  },
  {
    id: "wednesday",
    title: "የረቡዕ ውዳሴ ማርያም",
    type: "category",
    children: [
      {
        id: "kulu-serawite-semayat",
        title: "ኵሉ ሠራዊ<sup>ተ</sup> ሰማያት",
        type: "prayer",
        audio: "/audio/ኵሉ ሠራዊ<sup>ተ</sup> ሰማያት.mp3",
        content: `
ኵሉ<sup>ቂ</sup> ሠራዊተ-ሰማያት<sup>ጣ</sup> ይብሉ<sup>ተ</sup> ብፅዕት<sup>ጣ</sup> አንቲ<sup>ተ</sup> ሰማይ<sup>ጣ</sup> ዳግሚት ዲበ<sup>ጣ</sup> ምድር<sup>ጣ</sup> ኆኅተ<sup>ተ</sup> ምሥራቅ<sup>ጣ</sup> ማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ክቡካብ<sup>ጣ</sup> ንጹሕ<sup>ጣ</sup> ወመርዓ<sup>ጣ</sup> ቅዱስ<sup>ጣ</sup> ነጸረ<sup>ተ</sup> አብ<sup>ጣ</sup> እምሰማይ<sup>ጣ</sup> ወኢረከበ<sup>ተ</sup> ዘከማኪ<sup>ተ</sup> ፈነወ<sup>ተ</sup> ዋሕዶ<sup>ቂ</sup> ወተሰብአ<sup>ተ</sup> እምኔኪ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
      {
        id: "tenebeyu-laleki",
        title: "ተነበዩ ላዕሌኪ",
        type: "prayer",
        audio: "/audio/ተነበዩ ላዕሌኪ.mp3",
        content: `
ኵሉ<sup>ቂ</sup> ትዉልድ<sup>ጣ</sup> ያስተበፅዑኪ<sup>ተ</sup> ለኪ<sup>ተ</sup> ለባሕቲትኪ<sup>ተ</sup> ኦ<sup>ቂ</sup> እግዝእትነ
ተ ወላዲተ-አምላክ<sup>ጣ</sup> ተነበዩ<sup>ተ</sup> ላዕሌኪ<sup>ተ</sup> ዐቢያተ<sup>ተ</sup> ወመንክራተ<sup>ተ</sup> ኦ<sup>ቂ</sup> ሀገረ እግዚአብሔር<sup>ጣ</sup> እስመ-ኮንኪ<sup>ተ</sup> አንቲ<sup>ተ</sup> ማኀደረ<sup>ተ</sup> ለፍሡሓን
ጣ ኵሉሙ<sup>ተ</sup> ነገሥ<sup>ተ</sup> ምድር<sup>ቂ</sup> የሐዉሩ<sup>ተ</sup> በብርሃንኪ<sup>ተ</sup> ወአሕዛብኒ
ቂ በጸዳልኪ<sup>ተ</sup> ኦ<sup>ቂ</sup> ማርያም<sup>ጣ</sup> ኵሉ<sup>ቂ</sup> ትዉልድ<sup>ጣ</sup> ያስተበፅዑኪ<sup>ተ</sup> ወይሰግዱ<sup>ተ</sup> ለዘተወልደ<sup>ተ</sup> እምኔኪ<sup>ተ</sup> ወያዐብይዎ
።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
      {
        id: "anti-zebeaman-demena",
        title: "3. አንቲ ዘበአማን ደመና",
        type: "prayer",
        audio: "/audio/አንቲ ዘበአማን ደመና.mp3",
        content: `
አንቲ<sup>ተ</sup> ዘበአማን
ጣ ደመና<sup>ጣ</sup> እንተ-አስተርአይኪ<sup>ተ</sup> ለነ
ተ ማየ-ዝናም<sup>ጣ</sup> ትአምርተ-ዋሕዱ<sup>ቂ</sup> ረሰየኪ<sup>ተ</sup> አብ<sup>ጣ</sup> መንፈስ-ቅዱስ<sup>ጣ</sup> ኀደረ<sup>ተ</sup> ላዕሌኪ<sup>ተ</sup> ወኃይለ ልዑል<sup>ጣ</sup> ጸለለኪ<sup>ተ</sup> ኦ<sup>ቂ</sup> ማርያም<sup>ጣ</sup> አማን
ተ ወለድኪ<sup>ተ</sup> ቃለ<sup>ተ</sup> ወልደ አብ<sup>ጣ</sup> ዘይነብር<sup>ተ</sup> ለዓለም<sup>ጣ</sup> መጽአ<sup>ተ</sup> ወአድኀነነ
ተ እምኃጢአት<sup>ጣ</sup> ዐቢይ<sup>ጣ</sup> ዉእቱ<sup>ተ</sup> ክብር<sup>ጣ</sup> ዘተዉህበ<sup>ተ</sup> ለነ<sup>ተ</sup> ኦ<sup>ቂ</sup> ገብርኤል<sup>ተ</sup> መልአክ<sup>ጣ</sup> ዜናዊ<sup>ቂ</sup> ፍሡሐ ገጽ<sup>ጣ</sup> ሰበከ<sup>ተ</sup> ለነ
ተ ልደተ<sup>ጣ</sup> እግዚአብሔር<sup>ጣ</sup> ዘመጽአ<sup>ተ</sup> ኀቤነ
ተ ወአብሠርካ<sup>ቂ</sup> ለማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ዘእንበለ-ርስሐት<sup>ጣ</sup> ወትቤላ<sup>ቂ</sup> ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ምልእ<sup>ተ</sup> ጸጋ<sup>ቂ</sup> እግዚአብሔር<sup>ጣ</sup> ምስሌኪ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
      {
        id: "rekebki-tsega-menfes-kidus",
        title: "ረከብኪ ጸጋ መንፈስ ቅዱስ ኀደረ ላዕሌኪ",
        type: "prayer",
        audio: "/audio/ረከብኪ ጸጋ.mp3",
        content: `
ረከብኪ<sup>ተ</sup> ጸጋ<sup>ቂ</sup> መንፈስ ቅዱስ<sup>ጣ</sup> ኀደረ<sup>ተ</sup> ላዕሌኪ<sup>ተ</sup> ወኃይለ<sup>ጣ</sup> ልዑል<sup>ጣ</sup> ጸለለኪ<sup>ተ</sup> ኦ<sup>ቂ</sup> ማርያም<sup>ጣ</sup> አማን
ተ ወለድኪ<sup>ተ</sup> ቅዱሰ<sup>ተ</sup> መድኅኑ<sup>ጣ</sup> ለኵሉ<sup>ቂ</sup> ዓለም<sup>ጣ</sup> መጽአ<sup>ተ</sup> ወአድኀነነ።
ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
      {
        id: "gebre-dengel-yisebih-lisane",
        title: "ግብረ ድንግል ይሴብሕ ልሳንነ",
        type: "prayer",
        audio: "/audio/ግብረ ድንግል.mp3",
        content: `
ግብረ-ድንግል<sup>ጣ</sup> ይሴብሕ<sup>ተ</sup> ልሳንነ
ተ ዮም<sup>ጣ</sup> ንወድሳ<sup>ተ</sup> ለማርያም<sup>ጣ</sup> ወላዲተ-አምላክ<sup>ጣ</sup> በእንተ-ዘተወልደ<sup>ተ</sup> እምኔሃ
ቂ በሀገረ ዳዊት<sup>ቂ</sup> እግዚአብሔር
ተ ወመድኃኒነ
ተ ኢየሱስ ጣ ክርስቶስ<sup>ጣ</sup> ንዑ<sup>ተ</sup> ኵልክሙ<sup>ተ</sup> አሕዛብ<sup>ቂ</sup> ናስተብፅዓ<sup>ተ</sup> ለማርያም<sup>ጣ</sup> እስመ-ኮነት<sup>ተ</sup> እመ<sup>ጣ</sup> ድንግለ<sup>ተ</sup> ወጽሙረ።
ተ ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ድንግል<sup>ቂ</sup> ንጽሕት<sup>ጣ</sup> እንተ-አልባቲ<sup>ቂ</sup> ርኵስ<sup>ጣ</sup> ዘመጽአ<sup>ተ</sup> ቃለ-አብ<sup>ጣ</sup> ተወሰብአ<sup>ተ</sup> እምኔሃ
ቂ ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ሙዳይ<sup>ጣ</sup> እን<sup>ተ</sup> አልባቲ<sup>ጣ</sup> ነዉር<sup>ቂ</sup> ፍጽምት<sup>ጣ</sup> ዘአልቦ<sup>ቂ</sup> ርስሐት።ጣ ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ገነት<sup>ጣ</sup> ነባቢት<sup>ጣ</sup> ማኅደሩ<sup>ቂ</sup> ለክርስቶስ<sup>ጣ</sup> ዘኮነ
ተ ዳግማይ<sup>ጣ</sup> አዳም<sup>ጣ</sup> በእን<sup>ተ</sup> አዳም<sup>ጣ</sup> ቀዳሚ<sup>ቂ</sup> ብእሲ<sup>ቂ</sup> ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ፀዋሪቱ<sup>ቂ</sup> ለዋሕድ<sup>ጣ</sup> ለዘኢተፈልጠ<sup>ተ</sup> እምኅፅነ
ቂ አቡሁ<sup>ቂ</sup> ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ከብካብ<sup>ጣ</sup> ንጹሕ<sup>ጣ</sup> ሥርግዉ<sup>ጣ</sup> በኵሉ<sup>ቂ</sup> ስነ ስብሐት<sup>ጣ</sup> መጽአ<sup>ተ</sup> ወተሰብአ<sup>ተ</sup> አምኔኪ<sup>ተ</sup> ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ዕፀ-ጳጦስ<sup>ጣ</sup> እንተ-ኢያዉዓያ<sup>ቂ</sup> እሳ<sup>ተ</sup> መለኮት<sup>ጣ</sup> ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> አመት<sup>ጣ</sup> ወእም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ወሰማይ<sup>ጣ</sup> ሰማያዊ<sup>ጣ</sup> እንተ-ፆረት<sup>ተ</sup> በሥጋ<sup>ቂ</sup> ዘይጼዐን
ተ ዲበ ኪሩቤል<sup>ተ</sup> ወበእንተዝ<sup>ቂ</sup> ንትፈሣሕ<sup>ተ</sup> ወንዘምር<sup>ተ</sup> ምስለ መላእክት<sup>ጣ</sup> ቅዱሳን
ጣ በፍሥሓ<sup>ቂ</sup> ወበሐሤት<sup>ጣ</sup> ወንበል<sup>ፍ</sup> ስብሐት<sup>ጣ</sup> ለእግዚአብሔር<sup>ጣ</sup> በሰማያት<sup>ጣ</sup> ወሰላም<sup>ጣ</sup> በምድር<sup>ጣ</sup> ሥምረቱ<sup>ቂ</sup> ለሰብእ<sup>ጣ</sup> እስመ ኪያኪ<sup>ተ</sup> ሠምረ<sup>ተ</sup> ዘሎቱ<sup>ቂ</sup> ክብር<sup>ጣ</sup> ወስብሐት።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
      {
        id: "yeabi-kibra-lemariam",
        title: "የዐቢ ክብራ ለማርያም",
        type: "prayer",
        audio: "/audio/የዐቢ ክብራ.mp3",
        content: `
የዐቢ<sup>ተ</sup> ክብራ<sup>ቂ</sup> ለማርያም<sup>ጣ</sup> እምኵሎሙ<sup>ተ</sup> ቅዱሳን
ጣ እስመ-ድልወ<sup>ተ</sup> ኮነት<sup>ፍ</sup> ለተወክፎ-ቃለ አብ<sup>ጣ</sup> ዘይፈርህዎ<sup>ተ</sup> መላእክት<sup>ጣ</sup> ወየአኵትዎ<sup>ተ</sup> ትጉሃን
ቂ በሰማያት<sup>ጣ</sup> ፆረቶ<sup>ተ</sup> ማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> በከርሣ<sup>ቂ</sup> ይእቲ<sup>ተ</sup> ተዐቢ<sup>ተ</sup> እምኪሩቤል<sup>ተ</sup> ወትፈደፍድ<sup>ተ</sup> አም
ሱራፌል<sup>ቂ</sup> እስመ-ኮነት<sup>ተ</sup> ታቦተ<sup>ተ</sup> ለአሐዱ<sup>ቂ</sup> ዘእምቅድስት<sup>ጣ</sup> ሥላሴ<sup>ቂ</sup> ዛቲ<sup>ቂ</sup> ይእቲ<sup>ተ</sup> ኢየሩሳሌም<sup>ቂ</sup> ሀገሮሙ<sup>ተ</sup> ለነቢያት<sup>ጣ</sup> ወማኅደረ ፍሥሓሆሙ<sup>ተ</sup> ለኵሎሙ<sup>ተ</sup> ቅዱሳን፣
ጣ ሕዝብ<sup>ጣ</sup> ዘይነብር<sup>ተ</sup> ዉስተ-ጽልመት<sup>ጣ</sup> ወጽላሎ<sup>ተ</sup> ሞት<sup>ጣ</sup> ብርሃን
ጣ ዐቢይ<sup>ጣ</sup> ሠረቀ<sup>ተ</sup> ላዕሌሆሙ<sup>ተ</sup> እግዚአብሔር<sup>ጣ</sup> ዘየዐርፍ<sup>ፍ</sup> በቅዱሳኒሁ<sup>ቂ</sup> ተሰብአ<sup>ተ</sup> እምድንግል<sup>ጣ</sup> መድኃኒ<sup>ተ</sup> ዚአነ
ፍ ንዑ<sup>ተ</sup> ርእዮ<sup>ተ</sup> ዘንተ<sup>ተ</sup> መንክረ<sup>ተ</sup> ወዘምሮ<sup>ቂ</sup> ዘምሩ<sup>ተ</sup> በእንተ-ምሥጢር<sup>ቂ</sup> ዘተከሥተ<sup>ተ</sup> ለነ
ተ እስመ ዘኢይሰባእ<sup>ተ</sup> ተሰብአ<sup>ተ</sup> ቃል<sup>ጣ</sup> ተደመረ<sup>ተ</sup> ወዘአልቦ<sup>ቂ</sup> ጥንት<sup>ጣ</sup> ኮነ
ተ ቅድመ<sup>ቂ</sup> ወለዘአልቦ<sup>ቂ</sup> መዋዕል<sup>ጣ</sup> ኮነ
ተ ሎቱ<sup>ቂ</sup> መዋዕል<sup>ጣ</sup> ዘኢይትዐወቅ<sup>ተ</sup> ተከሥተ<sup>ተ</sup> ወዘኢይ
ትረአይ<sup>ተ</sup> ተርእየ
ተ ወልደ-እግዚአብሔር<sup>ጣ</sup> ሕያዉ<sup>ጣ</sup> ጥዩቀ<sup>ተ</sup> ኮነ
ተ ሰብአ<sup>ተ</sup> ኢየሱስ ጣ ክርስቶስ<sup>ጣ</sup> ዘትማልም<sup>ጣ</sup> ወዮም<sup>ጣ</sup> ወከመ<sup>ተ</sup> ዉእቱ<sup>ተ</sup> እስከ ለዓለም<sup>ጣ</sup> አሐዱ<sup>ቂ</sup> ህላዌ<sup>ቂ</sup> ሎቱ<sup>ቂ</sup> ንሰግድ<sup>ቂ</sup> ወንሰብሕ<sup>ተ</sup> ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
      {
        id: "hezkiel-nebiy",
        title: "ሕዝቅኤል ነቢይ",
        type: "prayer",
        audio: "/audio/ሕዝቅኤል ነቢይ.mp3",
        content: `
ሕዝቅኤል<sup>ፍ</sup> ነቢይ<sup>ጣ</sup> ኮነ
ተ ስምዐ<sup>ተ</sup> በእንቲአሃ
ጣ ወይቤ<sup>ቂ</sup> ርኢኩ<sup>ተ</sup> ኆኀተ<sup>ተ</sup> በምሥራቅ<sup>ቂ</sup> ኅቱም<sup>ቂ</sup> በዐቢይ<sup>ተ</sup> መንክር<sup>ጣ</sup> ማኅተም<sup>ጣ</sup> አልቦ<sup>ቂ</sup> ዘቦአ<sup>ተ</sup> ዘእንበለ እግዚአ-ኃያላን
ጣ ቦአ<sup>ተ</sup> ዉስቴታ<sup>ቂ</sup> ወወጽአ<sup>ተ</sup> ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
      {
        id: "hohtse-dengel",
        title: "ኆኅትሰ ድንግል",
        type: "prayer",
        audio: "/audio/ኆኅትሰ ድንግል.mp3",
        content: `
ኆኅትሰ<sup>ቂ</sup> ድንግል<sup>ቂ</sup> ይእቲ<sup>ተ</sup> እንተ-ወለደት<sup>ፍ</sup> ለነ
ተ መድኅነ
ተ እምድኅረ-ወለደት<sup>ተ</sup> ኪያሁ<sup>ቂ</sup> ነበረት<sup>ተ</sup> በድንግልና<sup>ቂ</sup> ከመ-ትካት።ጣ ቡሩክ<sup>ጣ</sup> ዉእቱ<sup>ተ</sup> ፍሬ ከርሥኪ<sup>ተ</sup> ኦ<sup>ቂ</sup> ወላዲተ-እግዚአብሔር<sup>ጣ</sup> ዘመጽአ<sup>ተ</sup> ወአድኀነነ
ተ እምእደ-ጸላኢ<sup>ቂ</sup> ዘአልቦ<sup>ጣ</sup> ምሕረት<sup>ጣ</sup> አንቲ<sup>ተ</sup> ፍጽምት<sup>ጣ</sup> ወቡርክት<sup>ጣ</sup> ረከብኪ<sup>ተ</sup> ሞገሰ<sup>ተ</sup> በኀበ-ንጉሠ ስብሐት<sup>ጣ</sup> አምላክ<sup>ጣ</sup> ዘበአማን
ጣ ለኪ<sup>ተ</sup> ይደሉ<sup>ተ</sup> ዕበይ<sup>ጣ</sup> ወክብር<sup>ጣ</sup> እምኵሎሙ<sup>ተ</sup> እለ-ይነብሩ<sup>ተ</sup> ዲበ-ምድር<sup>ጣ</sup> ቃለ አብ<sup>ጣ</sup> መጽአ<sup>ተ</sup> ወተሰብአ<sup>ተ</sup> እምኔኪ<sup>ተ</sup> ወአንሶሰወ<sup>ተ</sup> ምስለ-ሰብእ<sup>ጣ</sup> እስመ-መሐሪ<sup>ቂ</sup> ዉእቱ<sup>ተ</sup> ወመፍቀሬ ሰብእ<sup>ጣ</sup> ሰብእ<sup>ጣ</sup> አድኃነ
ተ ነፍሳቲነ
ተ በምጽአቱ<sup>ቂ</sup> ቅዱስ።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት<sup>ጣ</sup>።
`,
      },
    ],
  },
];
