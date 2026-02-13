import { PrayerNode } from "./types";

export const wedasePart1: PrayerNode[] = [
  {
    id: "monday",
    title: "የሰኑይ ውዳሴ ማርያም",
    type: "category",
    children: [
      {
        id: "fekede-egzi",
        title: "1. ፈቀደ እግዚእ",
        type: "prayer",
        audio: "/audio/ፈቀደ እግዚእ.mp3",
        content: `
ውዳሴሃኒ
ቂ ለእግዝእትነ
ተ ማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ወላዲተ-አምላክ<sup>ጣ</sup> ዘይትነበብ<sup>ፍ</sup> በዕለተ-ሰኑይ።ጣ
ፈቀደ<sup>ተ</sup> እግዚእ<sup>ጣ</sup> ያግእዞ
ተ ለአዳም<sup>ጣ</sup> ኅዙነ
ተ ወትኩዘ-ልብ<sup>ጣ</sup> ወያግብኦ<sup>ተ</sup> ኀበ-ዘትካት<sup>ጣ</sup> መንበሩ።ቂ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "sereke",
        title: "2. ሠረቀ",
        type: "prayer",
        audio: "/audio/ሠረቀ.mp3",
        content: `
ሠረቀ<sup>ተ</sup> በሥጋ<sup>ቂ</sup> እምድንግል<sup>ጣ</sup> ዘእንበለ-ዘርአ-ብእሲ<sup>ቂ</sup> ወአድኀነነ
ተ ለሔዋን
ፍ እንተ-አስሐታ<sup>ቂ</sup> ከይሲ<sup>ቂ</sup> ፈትሐ<sup>ተ</sup> ላዕሌላ<sup>ቂ</sup> እግዚአብሔር<sup>ጣ</sup> እንዘ ይብል<sup>ጣ</sup> ብዙኀ<sup>ተ</sup> አበዝኆ<sup>ቂ</sup> ለሕማምኪ<sup>ተ</sup> ወለፃዕርኪ<sup>ተ</sup> ሠምረ<sup>ተ</sup> ልቡ<sup>ጣ</sup> ኀበ-ፍቅረ-ሰብእ<sup>ጣ</sup> ወአግአዛ።ቂ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "eyesus-kristos",
        title: "3. ኢየሱስ ክርስቶስ",
        type: "prayer",
        audio: "/audio/ኢየሱስ ክርስቶስ.mp3",
        content: `
ኢየሱስ ጣ ክርስቶስ<sup>ጣ</sup> ቃል<sup>ጣ</sup> ዘተሰብአ<sup>ተ</sup> ወኀደረ<sup>ተ</sup> ላዕሌነ
ተ ወርኢነ
ተ ስብሐቲሁ<sup>ቂ</sup> ከመ-ስብሐተ-አሐዱ<sup>ቂ</sup> ዋሕድ<sup>ጣ</sup> ለአቡሁ<sup>ቂ</sup> ሠምረ<sup>ተ</sup> ይሣሃለነ።
ተ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "reye",
        title: "4. ርእየ",
        type: "prayer",
        audio: "/audio/ርእየ.mp3",
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
        title: "5. ተፈሣሕ",
        type: "prayer",
        audio: "/audio/ተፈሣሕ.mp3",
        content: `
ተፈሣሕ<sup>ፍ</sup> ወተኀሠይ<sup>ፍ</sup> ኦ<sup>ቂ</sup> ዘመደ-እጓለ-እመ-ሕያዉ<sup>ጣ</sup> እስመ-አፍቀሮ<sup>ቂ</sup> እግዚአብሔር<sup>ጣ</sup> ለዓለም<sup>ጣ</sup> ወመጠወ<sup>ተ</sup> ወልዶ<sup>ቂ</sup> ዋሕደ<sup>ተ</sup> ከመ ይሕየዉ<sup>ፍ</sup> ኵሉ<sup>ቂ</sup> ዘየአምን
ፍ ቦቱ<sup>ቂ</sup> እስከ-ለዓለም<sup>ጣ</sup> ፈነወ<sup>ተ</sup> ለነ
ተ መዝራዕቶ<sup>ቂ</sup> ልዑለ።ተ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "zehalo",
        title: "6. ዘሀሎ",
        type: "prayer",
        audio: "/audio/ዘሀሎ.mp3",
        content: `
ዘሀሎ<sup>ቂ</sup> ወይሄሉ<sup>ተ</sup> ዘመጽአ<sup>ተ</sup> ወካዕበ<sup>ተ</sup> ይመጽእ<sup>ቂ</sup> ኢየሱስ ጣ ክርስቶስ<sup>ጣ</sup> ቃል<sup>ጣ</sup> ዘተሰብአ<sup>ተ</sup> እምኔኪ<sup>ተ</sup> ዘእንበለ ዉላጤ<sup>ቂ</sup> ኮነ
ተ ፍጹመ<sup>ተ</sup> ሰብአ<sup>ተ</sup> ኢተበዐደ<sup>ተ</sup> ወኢተፈለጠ<sup>ተ</sup> በኵሉ<sup>ቂ</sup> ግብሩ<sup>ቂ</sup> ወልድ<sup>ጣ</sup> ዋሕድ<sup>ጣ</sup> አላ<sup>ቂ</sup> አሐዱ<sup>ቂ</sup> ራእይ<sup>ጣ</sup> ወአሐዱ<sup>ቂ</sup> ህላዌ<sup>ቂ</sup> ወአሐዱ<sup>ቂ</sup> መለኮት<sup>ቂ</sup> ዘ
እግዚአብሔር<sup>ቂ</sup> ቃል።ጣ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "tefesahi-o-bete-lehem",
        title: "7. ተፈሥሒ ኦ ቤተ ልሔም",
        type: "prayer",
        audio: "/audio/ተፈሥሒ ኦ ቤተ ልሔም.mp3",
        content: `
ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ቤተ-ልሔም<sup>ጣ</sup> ሀገሮሙ<sup>ተ</sup> ለነቢያት<sup>ቂ</sup> እስመ-በኀቤኪ<sup>ተ</sup> ተወልደ<sup>ተ</sup> ክርስቶስ<sup>ጣ</sup> ዳግማይ<sup>ጣ</sup> አዳም<sup>ጣ</sup> ከመ ያግብኦ<sup>ተ</sup> ለአዳም<sup>ጣ</sup> ቀዳሚ<sup>ቂ</sup> ብእሲ<sup>ቂ</sup> እምድር<sup>ጣ</sup> ዉስተ-ገነት<sup>ጣ</sup> ይስዐር<sup>ፍ</sup> ፍትሐ-ሞት።ጣ ኦ<sup>ቂ</sup> አዳም<sup>ጣ</sup> መሬት<sup>ጣ</sup> አንተ<sup>ተ</sup> ወትገብእ<sup>ፍ</sup> ዉስተ-መሬት።ጣ ኀበ ሀለወት<sup>ፍ</sup> ብዝኀት<sup>ጣ</sup> ኃጢአት<sup>ጣ</sup> በህየ
ቂ ትበዝኅ<sup>ተ</sup> ጸጋ-እግዚአብሔር።ጣ ሰአሊ<sup>ተ</sup> ለነ
ተ ቅድስት።ጣ
`,
      },
      {
        id: "titfesah",
        title: "8. ትትፌሣሕ",
        type: "prayer",
        audio: "/audio/ትትፌሣሕ.mp3",
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
        title: "9. ብርሃን ዘበአማን",
        type: "prayer",
        audio: "/audio/ብርሃን ዘበአማን.mp3",
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
  {
    id: "tuesday",
    title: "የማክሰኞ ውዳሴ ማርያም",
    type: "category",
    children: [
      {
        id: "aklile-mkihne",
        title: "አክሊለ ምክሕነ",
        type: "prayer",
        audio: "/audio/አክሊለ ምክሕነ.mp3",
        content: `
አክሊለ-ምክሕነ<sup>ተ</sup> ወቀዳሚተ-መድኃኒትነ<sup>ተ</sup> ወመሠረተ-ንጽሕነ<sup>ተ</sup> ኮነ<sup>ተ</sup> በማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> እንተ-ወለደት<sup>ተ</sup> ለነ<sup>ተ</sup> ዘእግዚአብሔር<sup>ተ</sup> ቃለ አብ<sup>ጣ</sup> ዘኮነ<sup>ተ</sup> ሰብአ<sup>ተ</sup> በእንተ-መድኃኒትነ።ተ እምድኅረ-ኮነ<sup>ተ</sup> ሰብአ<sup>ተ</sup> ጥዩቀ<sup>ተ</sup> አምላክ<sup>ጣ</sup> ፍጹም<sup>ጣ</sup> ዉእቱ<sup>ተ</sup> ወበእንተዝ<sup>ቂ</sup> ወለደቶ<sup>ተ</sup> እንዘ-ድንግል<sup>ጣ</sup> ይእቲ።ተ መንክር<sup>ጣ</sup> ኃይለ-ወሊዶታ<sup>ጣ</sup> ዘኢይትነገር።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "abiy-wietu",
        title: "ዐቢይ ውእቱ",
        type: "prayer",
        audio: "/audio/ዐቢይ ውእቱ.mp3",
        content: `
እስመ-በፈቃዱ<sup>ቂ</sup> ወበሥምረተ-አቡሁ<sup>ቂ</sup> ወመንፈስ-ቅዱስ<sup>ጣ</sup> መጽአ<sup>ተ</sup> ወአድኀነነ<sup>ተ</sup> ዐቢይ<sup>ጣ</sup> ዉእቱ<sup>ተ</sup> ስብሐ<sup>ተ</sup> ድንግልናኪ<sup>ተ</sup> ኦ<sup>ቂ</sup> ማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ፍጽምት<sup>ጣ</sup> ረከብኪ<sup>ተ</sup> ሞገሰ<sup>ተ</sup> እግዚአብሔር<sup>ጣ</sup> ምስሌኪ<sup>ተ</sup> አንቲ<sup>ተ</sup> ዉእቱ<sup>ተ</sup> ሰዋስዉ<sup>ጣ</sup> ዘርእየ<sup>ተ</sup> ያዕቆብ<sup>ተ</sup> እምድር<sup>ጣ</sup> ዘይበጽሕ<sup>ተ</sup> እስከ<sup>ቂ</sup> ሰማይ<sup>ጣ</sup> ወመላእክተ-እግዚአብሔር<sup>ቂ</sup> የዐርጉ<sup>ተ</sup> ወይወርዱ<sup>ተ</sup> ዉስቴታ።ቂ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "anti-wietu-ets",
        title: "አንቲ ውእቱ ዕፅ",
        type: "prayer",
        audio: "/audio/አንቲ ውእቱ ዕፅ.mp3",
        content: `
አንቲ<sup>ተ</sup> ዉእቱ<sup>ተ</sup> ዕፅ<sup>ጣ</sup> ዘርእየ<sup>ተ</sup> ሙሴ<sup>ቂ</sup> በነደ<sup>ቂ</sup> እሳት<sup>ጣ</sup> ወኢትዉዒ<sup>ተ</sup> ዘዉእቱ<sup>ተ</sup> ወልደ-እግዚአብሔር<sup>ጣ</sup> መጽአ<sup>ተ</sup> ወኀደረ<sup>ተ</sup> ዉስተ-ከርሥኪ<sup>ተ</sup> ወእሳ<sup>ተ</sup> መለኮቱ<sup>ቂ</sup> ኢያዉዓየ<sup>ተ</sup> ሥጋኪ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "anti-wietu-geraht",
        title: "አንቲ ውእቱ ገራህት",
        type: "prayer",
        audio: "/audio/አንቲ ውእቱ ገራህት.mp3",
        content: `
አንቲ<sup>ተ</sup> ዉእቱ<sup>ተ</sup> ገራህት<sup>ቂ</sup> ዘኢተዘርአ<sup>ተ</sup> ዉስቴታ<sup>ቂ</sup> ዘርእ<sup>ቂ</sup> ወጽአ<sup>ተ</sup> እምኔኪ<sup>ተ</sup> ፍሬ ሕይወት<sup>ጣ</sup> አንቲ<sup>ተ</sup> ዉእቱ<sup>ተ</sup> መዝገብ<sup>ጣ</sup> ዘተሣየጠ<sup>ተ</sup> ዮሴፍ<sup>ተ</sup> ወረከበ<sup>ተ</sup> በዉስቴታ<sup>ቂ</sup> ባሕርየ<sup>ተ</sup> ዕንቈ<sup>ተ</sup> ክቡረ<sup>ተ</sup> ዘዉእቱ<sup>ተ</sup> መድኃኒነ<sup>ተ</sup> ኢየሱስ ጣ ክርስቶስ<sup>ጣ</sup> ተጸዉረ<sup>ተ</sup> በከርሥኪ<sup>ተ</sup> ወወለድኪዮ<sup>ተ</sup> ዉስተ-ዓለም።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "tefesahi-o-weladiyet-egzi",
        title: "ተፈሥሒ ኦ ወላዲ<sup>ተ</sup> እግዚእ",
        type: "prayer",
        audio: "/audio/ተፈሥሒ ኦ ወላዲ<sup>ተ</sup> እግዚእ.mp3",
        content: `
ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ወላዲተ-እግዚእ<sup>ጣ</sup> ኃሤቶሙ<sup>ተ</sup> ለመላእክት<sup>ጣ</sup> ተፈሥኢ<sup>ተ</sup> ኦ<sup>ቂ</sup> ንጽሕት<sup>ጣ</sup> ዜናሆሙ<sup>ተ</sup> ለነቢያት።ጣ ተፈሥሒ<sup>ተ</sup> እስመ ረከብኪ<sup>ተ</sup> ሞገሰ<sup>ተ</sup> እግዚአብሔር<sup>ጣ</sup> ምስሌኪ።ተ ተፈሥሒ<sup>ተ</sup> እስመ-ተወቀፍኪ<sup>ተ</sup> ቃሎ<sup>ቂ</sup> ለመልአክ<sup>ጣ</sup> ፍሥሐ-ኵሉ<sup>ቂ</sup> ዓለም።ጣ ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ወላዲተ-ፈጣሬ-ኵሉ<sup>ቂ</sup> ዓለም።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "tefesahi-esme-delwe",
        title: "ተፈሥሒ እስመ ድልወ",
        type: "prayer",
        audio: "/audio/ተፈሥሒ እስመ ድልወ.mp3",
        content: `
ተፈሥሒ<sup>ተ</sup> እስመ-ድልወ<sup>ተ</sup> ተሰመይኪ<sup>ተ</sup> ኦ<sup>ቂ</sup> ወላዲተ-አምላክ<sup>ጣ</sup> ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> መድኃኒታ<sup>ቂ</sup> ለሔዋን።ተ ተፈሥሒ<sup>ተ</sup> እን<sup>ተ</sup> አጥበዉኪ<sup>ተ</sup> ሐሊበ<sup>ተ</sup> ለዘይሴስዮ<sup>ተ</sup> ለኵሉ<sup>ቂ</sup> ፍጥረት<sup>ጣ</sup> ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ቅድስት<sup>ጣ</sup> እሞሙ<sup>ተ</sup> ለኵሎሙ<sup>ተ</sup> ሕያዋን<sup>ጣ</sup> ናንቀዐዱ<sup>ተ</sup> ኀቤኪ<sup>ተ</sup> ትስአሊ<sup>ተ</sup> በእንቲአነ<sup>ተ</sup> ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "o-dengel-o-kidst",
        title: "ኦ ድንግል ኦ ቅድስት",
        type: "prayer",
        audio: "/audio/ኦ ድንግል ኦ ቅድስት.mp3",
        content: `
ኦ<sup>ቂ</sup> ድንግል<sup>ቂ</sup> ኦ<sup>ቂ</sup> ቅድስት<sup>ጣ</sup> ኦ<sup>ቂ</sup> ወላዲተ-እግዚእ<sup>ጣ</sup> እስመ-ወለድኪ<sup>ተ</sup> ለነ<sup>ተ</sup> ንጉሠ<sup>ቂ</sup> መንክር<sup>ጣ</sup> ምሥጢር<sup>ጣ</sup> ኀደረ<sup>ተ</sup> ላዕሌኪ<sup>ተ</sup> ለመድኃኒ<sup>ተ</sup> ዚአነ<sup>ተ</sup> ናርምም<sup>ተ</sup> እስመ-ኢንክል<sup>ጣ</sup> ፈጽሞ<sup>ቂ</sup> ጥንቁቀ<sup>ተ</sup> ነጊረ<sup>ቂ</sup> በእንተ-ዕበዮ<sup>ጣ</sup> ለዉእቱ<sup>ተ</sup> ገባሬ-ሠናያት<sup>ጣ</sup> በብዙኅ<sup>ቂ</sup> መንክር<sup>ጣ</sup> ራእይ።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "kale-ab-hiaw",
        title: "ቃለ አብ ሕያው",
        type: "prayer",
        audio: "/audio/ቃለ አብ ሕያው.mp3",
        content: `
ቃለ-አብ<sup>ጣ</sup> ሕያዉ<sup>ጣ</sup> ዘወረደ<sup>ተ</sup> ዉስተ-ደብረ-ሲና<sup>ቂ</sup> ወወሀበ<sup>ተ</sup> ሕገ<sup>ተ</sup> ለሙሴ<sup>ቂ</sup> ወከደነ<sup>ተ</sup> ርእሰ-ደብር<sup>ጣ</sup> በጊሜ<sup>ቂ</sup> ወጢስ<sup>ጣ</sup> በጽልመት<sup>ጣ</sup> ወነፋስ<sup>ጣ</sup> ወበድምፀ-ቃለ አቅርንት<sup>ጣ</sup> ይጌሥፅ<sup>ተ</sup> ለእለ-ይቀዉሙ<sup>ተ</sup> በፍርሃት።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "wietuke-zewerede-habeki",
        title: "ውእቱኬ ዘወረደ ኀቤኪ",
        type: "prayer",
        audio: "/audio/ውእቱኬ ዘወረደ ኀቤኪ.mp3",
        content: `
ዉእቱኬ<sup>ቂ</sup> ዘወረደ<sup>ተ</sup> ኀቤኪ<sup>ተ</sup> ኦ<sup>ቂ</sup> ደብር<sup>ጣ</sup> ነባቢት<sup>ጣ</sup> በትሕትና<sup>ቂ</sup> መፍቀሬ-ሰብእ<sup>ጣ</sup> ተሰብአ<sup>ተ</sup> እምኔኪ<sup>ተ</sup> ዘእንበለ-ዉላጤ<sup>ቂ</sup> ፍጹመ ሥጋ<sup>ቂ</sup> ነባቢ<sup>ጣ</sup> ዘከማነ<sup>ተ</sup> በመንፈሰ-ጥበብ<sup>ቂ</sup> አምላክ<sup>ጣ</sup> ኀደረ<sup>ተ</sup> ላዕሌሃ<sup>ጣ</sup> ኮነ<sup>ተ</sup> ሰብአ<sup>ተ</sup> ከመ-ያድኅኖ<sup>ተ</sup> ወይሥረይ<sup>ተ</sup> ኃጢአቶ<sup>ቂ</sup> ለአዳም<sup>ጣ</sup> ወያንብሮ<sup>ተ</sup> ዉስ<sup>ተ</sup> ሰማያት<sup>ጣ</sup> ወያግብኦ<sup>ተ</sup> ኀበ-ዘትካት<sup>ጣ</sup> መንበሩ<sup>ቂ</sup> በዕበየ-ሣህሉ<sup>ቂ</sup> ወምሕረቱ።ቂ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "ebaya-ledengel",
        title: "ዕበያ ለድንግል",
        type: "prayer",
        audio: "/audio/ዕበያ ለድንግል.mp3",
        content: `
ዕበያ<sup>ቂ</sup> ለድንግል<sup>ጣ</sup> ኢይትከሃል<sup>ተ</sup> ለተነግሮ<sup>ጣ</sup> እስመ-እግዚእ<sup>ጣ</sup> ኀረያ<sup>ቂ</sup> መጽአ<sup>ተ</sup> ወኀደረ<sup>ተ</sup> ላዕሌሃ<sup>ጣ</sup> ዘየኀድር<sup>ተ</sup> ዉስተ-ብርሃን<sup>ጣ</sup> ኀበ አልቦ<sup>ጣ</sup> ዘይቀርቦ<sup>ቂ</sup> ተጸዉረ<sup>ተ</sup> በከርሣ<sup>ቂ</sup> ፱ተ-(ተሰዓተ)<sup>ተ</sup> አዉራኃ<sup>ተ</sup> ዘኢይትረአይ<sup>ተ</sup> ወዘኢይትዐወቅ<sup>ተ</sup> ወለደቶ<sup>ተ</sup> ማርያም<sup>ጣ</sup> እንዘ<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ይእቲ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "zewietu-ebn-zereya-daniel",
        title: "ዘውእቱ እብን ዘርእያ ዳንኤል ነቢይ",
        type: "prayer",
        audio: "/audio/ዘውእቱ እብን.mp3",
        content: `
ዘዉእቱ<sup>ተ</sup> ዕብን<sup>ጣ</sup> ዘርእየ<sup>ተ</sup> ዳንኤል<sup>ተ</sup> ነቢይ<sup>ጣ</sup> ዘተበትከ<sup>ተ</sup> እምደብር<sup>ጣ</sup> ነዋኅ<sup>ቂ</sup> ዘእንበለ-እድ<sup>ጣ</sup> ዘዉእቱ<sup>ተ</sup> ቃል<sup>ጣ</sup> ዘወጽአ<sup>ተ</sup> እምኀበ አብ<sup>ጣ</sup> መጽአ<sup>ተ</sup> ወተሰብአ<sup>ተ</sup> እምድንግል<sup>ጣ</sup> ዘእንበለ-ዘርዐ-ብእሲ<sup>ቂ</sup> ወአድኀነነ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "konki-atske-ntsuh-wemudaye-amin",
        title: "ኮንኪ ዓፅቀ ንጹሐ ወሙዳየ አሚን",
        type: "prayer",
        audio: "/audio/ኮንኪ ዓፅቀ ንጹሐ.mp3",
        content: `
ኮንኪ<sup>ተ</sup> አጽቀ<sup>ተ</sup> ንጹሐ<sup>ጣ</sup> ወሙዳየ-አሚን።ጣ ርትዕት<sup>ጣ</sup> ሃይማኖቶሙ<sup>ተ</sup> ለቅዱሳን<sup>ጣ</sup> አበዊነ።ተ ኦ<sup>ቂ</sup> ንጽሕት<sup>ጣ</sup> ወላዲ<sup>ተ</sup> አምላክ<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ኅትምት<sup>ቂ</sup> ወለድኪ<sup>ተ</sup> ለነ<sup>ተ</sup> ቃለ-አብ<sup>ጣ</sup> ኢየሱስ ጣ ክርስቶስ<sup>ጣ</sup> መጽአ<sup>ተ</sup> ለመድኃኒትነ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "anti-emu-leberhan",
        title: "አንቲ እሙ ለብርሃን",
        type: "prayer",
        audio: "/audio/አንቲ እሙ ለብርሃን.mp3",
        content: `
አንቲ<sup>ተ</sup> እሙ<sup>ቂ</sup> ለብርሃን<sup>ጣ</sup> ክብርት<sup>ጣ</sup> ወላዲተ-እግዚእ<sup>ጣ</sup> እንተ-ፆርኪዮ<sup>ተ</sup> ለቃል<sup>ጣ</sup> ዘኢይትረአይ<sup>ተ</sup> እምድኅረ ወለድኪ<sup>ተ</sup> ኪያሁ<sup>ቂ</sup> ነበርኪ<sup>ተ</sup> በድንግልና<sup>ቂ</sup> በስብሐት<sup>ጣ</sup> ወበባርኮት<sup>ጣ</sup> ያዐብዮኪ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "ay-lisan-zeykl-nebibe",
        title: "አይ ልሳን ዘይክል ነቢበ",
        type: "prayer",
        audio: "/audio/አይ ልሳን ዘይክል.mp3",
        content: `
አይ<sup>ተ</sup> ልሳን<sup>ጣ</sup> ዘይክል<sup>ቂ</sup> ነቢበ<sup>ተ</sup> ዘይትናገር<sup>ተ</sup> በእንቲአኪ<sup>ተ</sup> ኦ<sup>ቂ</sup> ድንግል<sup>ቂ</sup> ንጽሕት<sup>ጣ</sup> እሙ<sup>ቂ</sup> ለቃለ አብ<sup>ጣ</sup> ኮንኪ<sup>ተ</sup> መንበሮ<sup>ቂ</sup> ለንጉሥ<sup>ቂ</sup> ለዘይፀዉርዎ<sup>ተ</sup> ኪሩቤል<sup>ፍ</sup> ናስተበፅዐኪ<sup>ተ</sup> ኦ<sup>ቂ</sup> ቡርክት<sup>ጣ</sup> ወንዘክር<sup>ተ</sup> ስመኪ<sup>ተ</sup> በኵሉ<sup>ቂ</sup> ትዉልደ ትዉልድ<sup>ጣ</sup> ኦ<sup>ቂ</sup> ርግብ<sup>ጣ</sup> ሠናይት<sup>ጣ</sup> እሙ<sup>ቂ</sup> ለእግዚአብሔር<sup>ተ</sup> ኢየሱስ ጣ ክርስቶስ።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
      {
        id: "tefesahi-o-mariam-em",
        title: "ተፈሥሒ ኦ ማርያም እም",
        type: "prayer",
        audio: "/audio/ተፈሥሒ ኦ ማርያም እም.mp3",
        content: `
ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ማርያም<sup>ጣ</sup> እም<sup>ቂ</sup> ወአመት<sup>ጣ</sup> እስመ-ለዘዉስ<sup>ተ</sup> ሕፅንኪ<sup>ተ</sup> ይሴብሕዎ<sup>ተ</sup> መላእክት<sup>ጣ</sup> ወኪሩቤል<sup>ፍ</sup> ይሰግዱ<sup>ተ</sup> ሎቱ<sup>ቂ</sup> በፍርሃት<sup>ጣ</sup> ወሱራፌል<sup>ቂ</sup> ዘእንበለ-ጽርሐት።ጣ ይሰፍሑ<sup>ተ</sup> ክነፊሆሙ<sup>ተ</sup> ወይብሉ<sup>ተ</sup> ዝንቱ<sup>ቂ</sup> ዉእቱ<sup>ተ</sup> ንጉሠ-ስብሐት።ጣ መጽአ<sup>ተ</sup> ይሥረይ<sup>ተ</sup> ኃጢአተ-ዓለም<sup>ጣ</sup> በዕበየ-ሣህሉ።ቂ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
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
ኵሉ<sup>ቂ</sup> ሠራዊተ-ሰማያት<sup>ጣ</sup> ይብሉ<sup>ተ</sup> ብፅዕት<sup>ጣ</sup> አንቲ<sup>ተ</sup> ሰማይ<sup>ጣ</sup> ዳግሚት ዲበ<sup>ጣ</sup> ምድር<sup>ጣ</sup> ኆኅተ<sup>ተ</sup> ምሥራቅ<sup>ጣ</sup> ማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ክቡካብ<sup>ጣ</sup> ንጹሕ<sup>ጣ</sup> ወመርዓ<sup>ጣ</sup> ቅዱስ<sup>ጣ</sup> ነጸረ<sup>ተ</sup> አብ<sup>ጣ</sup> እምሰማይ<sup>ጣ</sup> ወኢረከበ<sup>ተ</sup> ዘከማኪ<sup>ተ</sup> ፈነወ<sup>ተ</sup> ዋሕዶ<sup>ቂ</sup> ወተሰብአ<sup>ተ</sup> እምኔኪ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
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
።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
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
ተ ወአብሠርካ<sup>ቂ</sup> ለማርያም<sup>ጣ</sup> ድንግል<sup>ቂ</sup> ዘእንበለ-ርስሐት<sup>ጣ</sup> ወትቤላ<sup>ቂ</sup> ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ምልእ<sup>ተ</sup> ጸጋ<sup>ቂ</sup> እግዚአብሔር<sup>ጣ</sup> ምስሌኪ።ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
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
ተ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
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
ጣ በፍሥሓ<sup>ቂ</sup> ወበሐሤት<sup>ጣ</sup> ወንበል<sup>ፍ</sup> ስብሐት<sup>ጣ</sup> ለእግዚአብሔር<sup>ጣ</sup> በሰማያት<sup>ጣ</sup> ወሰላም<sup>ጣ</sup> በምድር<sup>ጣ</sup> ሥምረቱ<sup>ቂ</sup> ለሰብእ<sup>ጣ</sup> እስመ ኪያኪ<sup>ተ</sup> ሠምረ<sup>ተ</sup> ዘሎቱ<sup>ቂ</sup> ክብር<sup>ጣ</sup> ወስብሐት።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
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
ተ ሰብአ<sup>ተ</sup> ኢየሱስ ጣ ክርስቶስ<sup>ጣ</sup> ዘትማልም<sup>ጣ</sup> ወዮም<sup>ጣ</sup> ወከመ<sup>ተ</sup> ዉእቱ<sup>ተ</sup> እስከ ለዓለም<sup>ጣ</sup> አሐዱ<sup>ቂ</sup> ህላዌ<sup>ቂ</sup> ሎቱ<sup>ቂ</sup> ንሰግድ<sup>ቂ</sup> ወንሰብሕ<sup>ተ</sup> ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
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
ጣ ቦአ<sup>ተ</sup> ዉስቴታ<sup>ቂ</sup> ወወጽአ<sup>ተ</sup> ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
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
ተ በምጽአቱ<sup>ቂ</sup> ቅዱስ።ጣ ሰአሊ<sup>ተ</sup> ለነ<sup>ተ</sup> ቅድስት።ጣ
`,
      },
    ],
  },
];
