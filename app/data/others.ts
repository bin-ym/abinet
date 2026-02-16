import { PrayerNode } from "./types";

export const otherPrayers: PrayerNode[] = [
  { id: "ankece", title: "አንቀጸ ብርሃን", type: "category", children: [] },
  {
    id: "yewedswa",
    title: "ይዌድስዋ መላእክት",
    type: "category",
    children: [
      {
        id: "yewedswa-melaekt",
        title: "ይዌድስዋ መላእክት",
        type: "prayer",
        audio: "/audio/ይዌድስዋ መላእክት.mp3",
        content: `
ይዌድስዋ<sup>ተ</sup> መላእክት<sup>ጣ</sup> ለማርያም<sup>ጣ</sup> በዉስተ-ውሳጤ<sup>ቂ</sup> መንጦላዕት<sup>ጣ</sup> ወይብልዋ<sup>ተ</sup> በሐኪ<sup>ተ</sup> ማርያም<sup>ጣ</sup> ሐዳስዩ<sup>ቂ</sup> ጣዕም<sup>ጣ</sup> ዘይብለኪ<sup>ተ</sup> አብ<sup>ጣ</sup> ወአሰሰለ<sup>ተ</sup> እምኔነ
ተ ኀዘነ
ተ በከመ-ይቤ<sup>ቂ</sup> ማርያም<sup>ጣ</sup> ናሁ<sup>ቂ</sup> እምይእዜሰ<sup>ተ</sup> ያስተበፅዑኒ
ተ ኵሉ<sup>ቂ</sup> ትዉልድ።ጣ ንዑ<sup>ተ</sup> ንስግድ<sup>ተ</sup> ላቲ<sup>ቂ</sup> ኄርኒ
ቂ ይቤላጥ
`,
      },
      {
        id: "webesadse-werh",
        title: "ወበሳድስ ወርኅ",
        type: "prayer",
        audio: "/audio/ወበሳድስ ወርኅ.mp3",
        content: `
ወበሳድስ<sup>ጣ</sup> ወርኅ<sup>ጣ</sup> ተፈነወ<sup>ተ</sup> ገብርኤል<sup>ተ</sup> መልአክ<sup>ጣ</sup> እምኀበ-እግዚአብሔር<sup>ጣ</sup> ኀበ-አሐቲ<sup>ቂ</sup> ሀገር<sup>ጣ</sup> ዘገሊላ<sup>ቂ</sup> እንተ-ስማ<sup>ቂ</sup> ናዝሬት።ጣ ኀበ-ድንግል<sup>ጣ</sup> እንተ-ትትኃጸን
ተ ለብእሲ<sup>ቂ</sup> ዘስሙ<sup>ቂ</sup> ዮሴፍ<sup>ተ</sup> ዘእምቤተ-ዳዊት<sup>ጣ</sup> ወስማ<sup>ቂ</sup> ለይእቲ<sup>ተ</sup> ድንግል<sup>ጣ</sup> ማርያም<sup>ጣ</sup> ወቦአ<sup>ተ</sup> መልአክ<sup>ጣ</sup> ኀቤሃ
ቂ ወይቤላ<sup>ቂ</sup> ተፈሥሒ<sup>ተ</sup> ፍሥሕት<sup>ጣ</sup> ኦ<sup>ቂ</sup> ምልእተ-ጸጋ<sup>ቂ</sup> እግዚአብሔር<sup>ጣ</sup> ምስሌኪ።ተ ቡርክት<sup>ጣ</sup> አንቲ<sup>ተ</sup> እምአንስት።ጣ ወሶበ-ርእየቶ<sup>ተ</sup> ደንገፀት<sup>ተ</sup> እምቃሉ<sup>ቂ</sup> ወኀለየት<sup>ተ</sup> ወትቤ<sup>ቂ</sup> ምኑ<sup>ተ</sup> እኑ<sup>ተ</sup> ዝንቱ<sup>ቂ</sup> ሰላም<sup>ጣ</sup> ወይቤላ<sup>ቂ</sup> መልአክ<sup>ጣ</sup> ኢትፍርሂ<sup>ተ</sup> ማርያም<sup>ጣ</sup> እስመ-ረከብኪ<sup>ተ</sup> ጸጋ<sup>ቂ</sup> በኀበ-እግዚአብሔር።ተ ወናሁ<sup>ቂ</sup> ትፀንሲ<sup>ተ</sup> ወትወልዲ<sup>ተ</sup> ወልደ<sup>ተ</sup> ወትሰምዪ<sup>ተ</sup> ስሞ<sup>ቂ</sup> ኢየሱስ።
ተ ዝንቱ<sup>ቂ</sup> ዐቢይ<sup>ጣ</sup> ወውእቱ<sup>ተ</sup> ወልደ-ልዑል<sup>ጣ</sup> ይሰመይ።
ተ ወይሁቦ<sup>ተ</sup> እግዚአብሔር<sup>ጣ</sup> አምላክ<sup>ጣ</sup> መንበረ-ዳዊት<sup>ጣ</sup> አቡሁ<sup>ቂ</sup> ወይንግሥ<sup>ተ</sup> ለቤተ-ያዕቆብ<sup>ተ</sup> ለዓለም<sup>ጣ</sup> ወአልቦ<sup>ቂ</sup> ማኅለቅት<sup>ጣ</sup> ለመንግሥቱ።
ተ ወትቤሎ<sup>ቂ</sup> ማርያም<sup>ጣ</sup> ለመልአክ<sup>ጣ</sup> እፎኑ<sup>ቂ</sup> ይከዉነኒ
ተ ዝንቱ<sup>ቂ</sup> እንዘ-ኢየአምር<sup>ተ</sup> ብእሴ።ተ ወአዉሥአ<sup>ተ</sup> መልአክ<sup>ጣ</sup> ወይቤላ<sup>ቂ</sup> መንፈስ-ቅዱስ<sup>ጣ</sup> ይመጽእ<sup>ተ</sup> ላዕሌኪ<sup>ተ</sup> ወኃይለ-ልዑል<sup>ጣ</sup> ይጸልለኪ፣
ተ ወዘኒ
ቂ ይትወለድ<sup>ተ</sup> እምኔኪ<sup>ተ</sup> ቅድስት<sup>ጣ</sup> ውእቱ<sup>ተ</sup> ወልደ-እግዚአብሔር<sup>ጣ</sup> ይሰመይ።
ተ ወናሁ<sup>ቂ</sup> ኤልሳቤጥ<sup>ጣ</sup> እንተ-እምአዝማድኪ<sup>ተ</sup> ይእቲኒ
ቂ ፀንሰት<sup>ተ</sup> ወልደ<sup>ተ</sup> በስብሐቲሃ
ቂ ወዝንቱ<sup>ቂ</sup> ሳድስ<sup>ጣ</sup> ወርኅ<sup>ጣ</sup> ይእቲ<sup>ተ</sup> ለእንተ-ይብልዋ<sup>ተ</sup> መካን፣
ጣ እስመ-አልቦ<sup>ቂ</sup> ነገር<sup>ጣ</sup> ዘይሰአኖ<sup>ተ</sup> ለእግዚአብሔር።ተ ወትቤ<sup>ቂ</sup> ማርያም<sup>ጣ</sup> ናሁ<sup>ቂ</sup> አመቱ<sup>ቂ</sup> ለእግዚአብሔር።ተ ይኩነኒ
ተ በከመ-ትቤ።ተ
`,
      },
      {
        id: "yibela-melak",
        title: "ይቤላ መልአክ",
        type: "prayer",
        audio: "/audio/ይቤላ መልአክ.mp3",
        content: `
ይቤላ<sup>ቂ</sup> መልአክ<sup>ጣ</sup> ለማርያም<sup>ጣ</sup> ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ወላዲተ-አምላክ።ጣ ካዕበ<sup>ተ</sup> ይቤላ<sup>ቂ</sup> ፍሥሕት<sup>ጣ</sup> አንቲ<sup>ተ</sup> ለብሲ<sup>ተ</sup> ብርሃን።
ጣ ካዕበ<sup>ተ</sup> ይቤላ<sup>ቂ</sup> ተፈሥሒ<sup>ተ</sup> ኦ<sup>ቂ</sup> ንጽሕት<sup>ጣ</sup> ቡርክት<sup>ጣ</sup> አንቲ<sup>ተ</sup> እምአንስት።ጣ ይቤላ<sup>ቂ</sup> መልአክ<sup>ጣ</sup> ስለ-ሕዝብኪ<sup>ተ</sup> ለክርስቶስ<sup>ጣ</sup> ስለ-ሕዝብኪ<sup>ተ</sup> ሰአሊ<sup>ተ</sup> ኪያኪ<sup>ተ</sup> ተማኅፀንነ።ተ ይቤላ<sup>ቂ</sup> መልአክ<sup>ጣ</sup> ቃለ-አብ<sup>ጣ</sup> ማኅደር<sup>ጣ</sup> ንስእለኪ<sup>ተ</sup> ድንግል<sup>ጣ</sup> ከመ<sup>ተ</sup> ታድኅንነ
ተ እመዓቱ።ቂ ይቤላ<sup>ቂ</sup> መልአክ<sup>ጣ</sup> ቡርክት<sup>ጣ</sup> አንቲ<sup>ተ</sup> ከብካብ<sup>ጣ</sup> ንጹሕ<sup>ጣ</sup> ታቦት<sup>ጣ</sup> ዘበወርቅ።ጣ ይቤላ<sup>ቂ</sup> መልአክ<sup>ጣ</sup> ማርያም<sup>ጣ</sup> እምነ
ተ ኃቤኪጸ ተማኅፀንነ
ተ ኢትግድፍነ
ተ ዉስተ-መከራ።ተ ይቤላ<sup>ቂ</sup> መልአክ<sup>ጣ</sup> ርግብ<sup>ጣ</sup> ሠናይት<sup>ጣ</sup> ሰአሊ<sup>ተ</sup> አስተምሕሪ<sup>ተ</sup> ኀበ-ወልድኪ<sup>ተ</sup> ኢየሱስ ጣ ክርስቶስ<sup>ጣ</sup> ከመ-ይሥረይ<sup>ተ</sup> ለነ
ተ ኃጢአተነ
ተ ወይደምስስ<sup>ፍ</sup> ጌጋየነ።ተ ይቤላ<sup>ቂ</sup> መልአክ<sup>ጣ</sup> ንዒ<sup>ተ</sup> ንስግድ<sup>ተ</sup> ለወላዲ<sup>ተ</sup> አምላክ።ጣ ንዒ<sup>ተ</sup> ንስግድ<sup>ተ</sup> ለድንግል<sup>ጣ</sup> ማርያም<sup>ጣ</sup> ንዒ<sup>ተ</sup> ንበላ<sup>ቂ</sup> ሐዳስዩ<sup>ቂ</sup> ጣዕም<sup>ጣ</sup> ይቤላ<sup>ቂ</sup> መልአክ<sup>ጣ</sup> ወአንቲኒ
ቂ ትብሊዮ<sup>ተ</sup> ለወልድኪ<sup>ተ</sup> ንዓ<sup>ተ</sup> ንግበር<sup>ተ</sup> ሰላመ<sup>ተ</sup> በምድር።ጣ
`,
      },
    ],
  },
  {
    id: "melka-mariam",
    title: "መልክአ ማርያም",
    type: "category",
    children: [
      {
        id: "melka-mariam-megbiya",
        title: "መግቢያ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lezikre-simki",
        title: "ለዝክረ ስምኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lesierte-reeski",
        title: "ለስእርተ ርእስኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lereeski",
        title: "ለርእስኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-legetski",
        title: "ለገጽኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lekeranibtki",
        title: "ለቀራንብትኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leeyintiki",
        title: "ለአእይንቲኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leezanki",
        title: "ለአእዛንኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lemelathki",
        title: "ለመላትህኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leenafki",
        title: "ለአእናፍኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lekenafirki",
        title: "ለከናፍርኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leafuki",
        title: "ለአፉኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leasnanki",
        title: "ለአስናንኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lelisanki",
        title: "ለልሳንኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lekalki",
        title: "ለቃልኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leistnfaski",
        title: "ለእስትንፋስኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-legurieki",
        title: "ለጉርኤኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lekisadeki",
        title: "ለክሳዴኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lemetakiftiki",
        title: "ለመታክፍትኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lezabanki",
        title: "ለዘባንኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leingdaki",
        title: "ለእንግዳኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lehitsinki",
        title: "ለህጽንኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leedawki",
        title: "ለአእዳውኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lemezarieki",
        title: "ለመዛርእኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lekurnaeki",
        title: "ለኩርናእኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leimetatki",
        title: "ለእመታትኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leirahitki",
        title: "ለእራህትኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leetsabki",
        title: "ለአእጻብኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leatsfarki",
        title: "ለአጽፋርኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leatbatki",
        title: "ለአጥባትኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-legaboki",
        title: "ለገቦኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lekerski",
        title: "ለከርስኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lelibki",
        title: "ለልብኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lekulyatki",
        title: "ለኩልያትኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lehilinaki",
        title: "ለህሊናኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leamaeutki",
        title: "ለአማዑትኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lenewaye-wistki-1",
        title: "ለነዋየ ውስጥኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lenewaye-wistki-2",
        title: "ለነዋየ ውስጥኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lehinbirtki",
        title: "ለህንብርትኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lemahitsenki-1",
        title: "ለማህጸንኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lemahitsenki-2",
        title: "ለማህጸንኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-ledingilnaki",
        title: "ለድንግልናኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lehakeyeki",
        title: "ለሃቈየኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leakeyatsiki",
        title: "ለአቈያጽኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leabrakki",
        title: "ለአብራክኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leegarki",
        title: "ለአእጋርኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lezeziyaki",
        title: "ለዘዝያኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lemekyedki",
        title: "ለመክየድኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leegarki-2",
        title: "ለአእጋርኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leatsfarki-2",
        title: "ለአጽፋርኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lekomki",
        title: "ለቆምኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lemelkki",
        title: "ለመልክኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-letsate-nefsiki",
        title: "ለጸአተ ነፍስኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lebedne-sigaki",
        title: "ለበድነ ሥጋኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-leginzete-sigaki",
        title: "ለግንዘተ ሥጋኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lemekabirkki-1",
        title: "ለመቃብርኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lemekabirkki-2",
        title: "ለመቃብርኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lefilsete-sigaki-1",
        title: "ለፍልሰተ ሥጋኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lefilsete-sigaki-2",
        title: "ለፍልሰተ ሥጋኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lefilsete-sigaki-3",
        title: "ለፍልሰተ ሥጋኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-bezintu-kale",
        title: "በዝንቱ ቃለ ማኅሌት",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-sibihat-leki",
        title: "ስብኀት ለኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-mariam-lezeyafekirki",
        title: "ለዘእያፈቅርኪ",
        type: "prayer",
        content: "",
      },
    ],
  },
  {
    id: "melka-jesus",
    title: "መልክአ ኢየሱስ",
    type: "category",
    children: [
      { id: "melka-jesus-megbiya", title: "መግቢያ", type: "prayer", content: "" },
      {
        id: "melka-jesus-lezikre-simke",
        title: "ለዝክረ ስምከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lesierte-reeske",
        title: "ለስእርተ ርእስከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lereeske",
        title: "ለርእስከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-legetske",
        title: "ለገጽከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lekeranibke",
        title: "ለቀራንብትከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leeyintike",
        title: "ለአእይንቲከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leezanke",
        title: "ለአእዛንከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lemelathke",
        title: "ለመላትህከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leenafke",
        title: "ለአእናፍከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lekenafrke",
        title: "ለከናፍርከ",
        type: "prayer",
        content: "",
      },
      { id: "melka-jesus-leafuke", title: "ለአፉከ", type: "prayer", content: "" },
      {
        id: "melka-jesus-leasnanke",
        title: "ለአስናንከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lelisanke",
        title: "ለልሳንከ",
        type: "prayer",
        content: "",
      },
      { id: "melka-jesus-lekalke", title: "ለቃልከ", type: "prayer", content: "" },
      {
        id: "melka-jesus-leistnfaske-1",
        title: "ለእስትንፋስከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leistnfaske-2",
        title: "ለእስትንፋስከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-legurieke",
        title: "ለጉርኤከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lekisadeke",
        title: "ለክሳዴከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lemetakiftike",
        title: "ለመታክፍትከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lezabanki",
        title: "ለዘባንኪ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leingdake",
        title: "ለእንግዳከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lehitsinke",
        title: "ለህጽንከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leedawike",
        title: "ለአእዳዊከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lemezarieke",
        title: "ለመዛርእከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lekurnaeke",
        title: "ለኩርናእከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leimetatke",
        title: "ለእመታትከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leirahitke",
        title: "ለእራህትከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leetsabke",
        title: "ለአእጻብከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leatsfar-edeke",
        title: "ለአጽፋረ እዴከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-legaboke",
        title: "ለገቦከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lekerske",
        title: "ለከርስከ",
        type: "prayer",
        content: "",
      },
      { id: "melka-jesus-lelibke", title: "ለልብከ", type: "prayer", content: "" },
      {
        id: "melka-jesus-lehilinake",
        title: "ለኅሊናከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lehinbirtke",
        title: "ለህንብርትከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lehakeyeke",
        title: "ለሃቈየከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leakeyatsike",
        title: "ለአቈያጺከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leabrakike",
        title: "ለአብራኪከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leegarike",
        title: "ለአእጋሪከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lesekonake",
        title: "ለሰኮናከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lemekyedke",
        title: "ለመክየድከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leatsabieke",
        title: "ለአጻቢእከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leatsfar-egerike",
        title: "ለአጽፋረ እገሪከ",
        type: "prayer",
        content: "",
      },
      { id: "melka-jesus-lekomke", title: "ለቆምከ", type: "prayer", content: "" },
      {
        id: "melka-jesus-lemelkeke",
        title: "ለመልክዕከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-letseatke",
        title: "ለጸአትከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lebedne-sigake",
        title: "ለበድነ ሥጋከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leginzete-sigake",
        title: "ለግንዘተ ሥጋከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lemekabirike",
        title: "ለመቃብሪከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-letinsaeke-1",
        title: "ለትንሳኤከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-letinsaeke-2",
        title: "ለትንሳኤከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-leirgetke",
        title: "ለእርገትከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-lemitseatke",
        title: "ለምጽአትከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-imsirake-tsehay",
        title: "እምስራቀ ፀሀይ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-sibihat-leke",
        title: "ስብሃት ለከ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-ikulu-yiheyis",
        title: "እኵሉ ይሄይስ",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-amlake-midir",
        title: "አምላከ ምድር ወሰማያት",
        type: "prayer",
        content: "",
      },
      {
        id: "melka-jesus-selam-selam",
        title: "ሰላም ሰላም ለኵሎን መልክእከ",
        type: "prayer",
        content: "",
      },
    ],
  },
];
