export interface BlogSection {
  type: "paragraph" | "heading2" | "heading3" | "list" | "cta" | "highlight";
  content: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: BlogSection[];
  date: string;
  dateISO: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "yozgat-kaliteli-kum-nerede-bulunur-2026",
    title: "Yozgat'ta Kaliteli Kum Nerede Bulunur? 2026 Rehberi",
    metaTitle: "Yozgat'ta Kaliteli Kum Nerede Bulunur? 2026 Rehberi | Emrebaş İnşaat",
    metaDescription:
      "Yozgat'ta en kaliteli kum ve çakıl için nereden alışveriş yapmalısınız? 0-3mm ince kum, 7-15mm çakıl fiyatları ve güvenilir tedarikçiler hakkında detaylı rehber.",
    excerpt:
      "Yozgat'ta inşaat veya tadilat projesi mi planlıyorsunuz? Kaliteli kum ve çakıl tedarikçisini seçerken dikkat etmeniz gereken kriterleri, kum çeşitlerini ve en iyi tedarikçileri bu rehberde derledik.",
    date: "10 Şubat 2026",
    dateISO: "2026-02-10",
    author: "Emrebaş İnşaat Ekibi",
    category: "Kum",
    image: "/images/products/0-3-kum.png",
    imageAlt: "Yozgat kum ocağı 0-3mm ince kum - Emrebaş İnşaat",
    keywords: [
      "Yozgat kum",
      "Yerköy kum",
      "kum ocağı",
      "Yozgat çakıl",
      "kum fiyatları",
      "kaliteli kum",
    ],
    readingTime: 6,
    content: [
      {
        type: "paragraph",
        content:
          "Yozgat'ta inşaat, tadilat veya peyzaj projesi mi planlıyorsunuz? Doğru kum ve çakıl tedarikçisini bulmak projenizin başarısı için kritik öneme sahiptir. Yozgat ve Yerköy bölgesinde faaliyet gösteren onlarca kum ocağı arasından kaliteli, uygun fiyatlı ve güvenilir bir tedarikçi seçmek ilk bakışta zor olabilir. Yozgat kum piyasasında uzun yıllardır faaliyet gösteren firmalar arasında doğru tercih yapmak, projenizin hem kalitesini hem de maliyetini doğrudan etkiler. Bu kapsamlı rehberde, Yozgat'ta kum alırken dikkat etmeniz gereken kriterleri, kum çeşitlerini, kullanım alanlarını ve en iyi tedarikçileri sizler için derledik. İster küçük bir tadilat projesi olsun, ister büyük ölçekli bir inşaat çalışması, Yozgat kum tedarikinde bilinçli bir karar vermenize yardımcı olacağız.",
      },
      {
        type: "heading2",
        content: "Yozgat'ta Kum Çeşitleri ve Kullanım Alanları",
      },
      {
        type: "paragraph",
        content:
          "Yozgat kum ocaklarından çıkarılan kum ve çakıl ürünleri, tane boyutuna göre farklı kategorilere ayrılır. Her bir kum çeşidinin kendine özgü kullanım alanları ve kalite standartları vardır. Yozgat'ta kum alırken projenize uygun tane boyutunu seçmeniz, hem işçilik kalitesini artırır hem de malzeme israfını önler.",
      },
      {
        type: "heading3",
        content: "0-3mm İnce Kum: Sıva ve Derz İşlerinin Vazgeçilmezi",
      },
      {
        type: "paragraph",
        content:
          "Yozgat kum ocaklarından üretilen 0-3mm ince kum, inşaat sektöründe en çok tercih edilen kum türüdür. İnce kum, özellikle iç ve dış sıva işleri, derz dolgusu, ince beton dökümü ve harç yapımında kullanılır. Yozgat'ta kaliteli ince kum arayanlar için en önemli kriter, kumun kil ve toprak karışımından arınmış olmasıdır. Yerköy kum ocaklarından çıkarılan 0-3mm kum, doğal yapısı gereği düşük kil oranına sahiptir ve bu özelliği ile Yozgat inşaat sektöründe büyük talep görmektedir. İnce kum alırken tane dağılımının homojen olmasına dikkat edilmelidir. Kaliteli Yozgat kumu, elinizde sıktığınızda topaklanmaz ve parmaklar arasından serbestçe akar. Bu basit test bile kum kalitesi hakkında fikir verebilir.",
      },
      {
        type: "heading3",
        content: "7-15mm Orta Çakıl: Beton Üretiminin Temel Taşı",
      },
      {
        type: "paragraph",
        content:
          "Yozgat çakıl üretiminde önemli bir yere sahip olan 7-15mm orta çakıl, beton üretiminin en kritik bileşenlerinden biridir. Bu boyuttaki Yozgat çakılı, zemin dolgusu, drenaj sistemleri ve beton karışımlarında yaygın olarak kullanılır. Yozgat inşaat sektöründe kaliteli çakıl tedariki, betonun dayanım gücünü doğrudan etkiler. Yerköy kum ocaklarından elde edilen çakıl, yüksek basınç dayanımı ile öne çıkar. Yozgat'ta çakıl alırken taşların kırık yüzeylerinin düzgün olmasına ve organik madde içermemesine dikkat edilmelidir.",
      },
      {
        type: "heading3",
        content: "15-30mm İri Çakıl: Ağır İşlerin Güçlü Malzemesi",
      },
      {
        type: "paragraph",
        content:
          "Yozgat çakıl ürünleri arasında 15-30mm iri çakıl, ağır beton dökümü, temel işleri, yol yapımı ve stabilize çalışmalarında tercih edilir. Bu boyuttaki çakıl, Yozgat'ta özellikle büyük ölçekli altyapı projelerinde, köprü ve viyadük inşaatlarında ve endüstriyel yapı temellerinde kullanılmaktadır. Yozgat kum ocaklarından temin edilen iri çakılın mukavemet değerleri, bölgedeki kayaç yapısı sayesinde oldukça yüksektir. İri çakıl alırken Yozgat'ta dikkat edilmesi gereken en önemli nokta, taşların kırılma oranı ve aşınma direncidir.",
      },
      {
        type: "heading2",
        content: "Kaliteli Kum Nasıl Anlaşılır?",
      },
      {
        type: "highlight",
        content:
          "Yozgat'ta kum alırken kaliteyi anlamanın en önemli yolu, kumun fiziksel özelliklerini kontrol etmektir. Kaliteli kum; temiz, homojen tane boyutuna sahip ve organik maddeden arınmış olmalıdır.",
      },
      {
        type: "paragraph",
        content:
          "Yozgat kum kalitesini belirleyen temel faktörler şunlardır: İlk olarak temizlik kontrolü yapılmalıdır. Kaliteli Yozgat kumu, kil, toprak ve organik madde karışımı içermemelidir. Kumun rengine bakıldığında aşırı koyu veya kırmızımsı tonlar yüksek kil içeriğine işaret eder. İkinci olarak tane boyutu homojenliği önemlidir. Yozgat kum ocağından alınan kum, belirtilen boyut aralığında tutarlı olmalıdır. Üçüncü olarak nem oranı kontrol edilmelidir. Aşırı nemli kum, tartıda fazla çıkarak maliyeti artırır. Yozgat'ta güvenilir kum ocakları nem oranını kontrol altında tutar. Son olarak kum numunesi su içinde karıştırıldığında suyun berraklığı kalite göstergesidir. Yerköy kum ocaklarından temin edilen kaliteli kum, suyu bulandırmaz.",
      },
      {
        type: "heading2",
        content: "Yozgat'ta En İyi Kum Tedarikçileri",
      },
      {
        type: "paragraph",
        content:
          "Yozgat kum piyasasında faaliyet gösteren firmalar arasında seçim yaparken deneyim, referanslar ve lisans durumu kritik öneme sahiptir. Yozgat'ta kum ocağı işletmeleri arasında Emrebaş İnşaat ve Madencilik, 20 yılı aşkın sektör tecrübesi ve Yerköy'deki modern kum ocağı tesisleriyle öne çıkmaktadır.",
      },
      {
        type: "paragraph",
        content:
          "Emrebaş Kum Ocağı, Yerköy Kızıl Gedik mevkiindeki tesislerinde 0-3mm ince kum, 7-15mm ve 15-30mm çakıl ile kırma taş üretimi gerçekleştirmektedir. Yozgat kum sektöründe güvenilirliğiyle bilinen firmamız, Yozgat Havalimanı, Ankara-Sivas YHT hattı ve çok sayıda kamu projesi gibi büyük ölçekli referanslarla hizmet vermektedir. Yozgat'ta kaliteli kum arayan müşterilerimize hızlı teslimat, uygun fiyat ve kalite garantisi sunuyoruz. Yerköy kum ocağımız, lisanslı olarak faaliyet göstermekte ve tüm ürünler kalite kontrol süreçlerinden geçmektedir.",
      },
      {
        type: "paragraph",
        content:
          "Yozgat kum tedarikçisi seçerken dikkat edilmesi gereken diğer kriterler arasında lisanslı kum ocağı olması, düzenli kalite kontrol yapması, yeterli araç filosuna sahip olması ve müşteri referanslarının güçlü olması sayılabilir.",
      },
      {
        type: "heading2",
        content: "Yozgat Kum Fiyatları - 2026",
      },
      {
        type: "paragraph",
        content:
          "Yozgat kum fiyatları, kum çeşidine, miktarına ve nakliye mesafesine göre değişiklik göstermektedir. 2026 yılında Yozgat kum fiyatlarını etkileyen başlıca faktörler; akaryakıt maliyetleri, kum ocağı işletme giderleri, talep yoğunluğu ve mevsimsel değişimlerdir. Yozgat'ta toplu kum alımlarında genellikle önemli indirimler uygulanmaktadır. Yerköy kum ocaklarından temin edilen kum, nakliye mesafesine bağlı olarak şehir merkezine kıyasla daha uygun fiyatlarla sunulabilmektedir. Yozgat kum fiyatları hakkında güncel bilgi almak ve projenize özel teklif almak için doğrudan tedarikçi ile iletişime geçmeniz en doğru yöntemdir.",
      },
      {
        type: "cta",
        content:
          "Yozgat'ta kaliteli kum ve çakıl arayanlar için Emrebaş İnşaat güvenilir çözüm ortağınızdır. Projenize özel fiyat teklifi almak için hemen bizi arayın.",
      },
      {
        type: "paragraph",
        content:
          "Sonuç olarak, Yozgat'ta kum alırken kalite, fiyat ve güvenilirlik dengesini en iyi şekilde sağlayan tedarikçiyi tercih etmek, projenizin başarısını doğrudan etkileyecektir. Yozgat kum ocağı olarak Emrebaş İnşaat, 20 yılı aşkın tecrübesiyle Yozgat ve çevre illerde kum, çakıl ve hafriyat hizmetlerinde yanınızda. Teklif almak için 0543 593 35 66 numaramızdan bize ulaşabilirsiniz.",
      },
    ],
  },
  {
    slug: "yozgat-hafriyat-hizmeti-rehberi",
    title: "Yozgat Hafriyat Hizmeti Alırken Nelere Dikkat Edilmeli?",
    metaTitle: "Yozgat Hafriyat Hizmeti Rehberi | Emrebaş İnşaat",
    metaDescription:
      "Yozgat'ta profesyonel hafriyat hizmeti mi arıyorsunuz? Makine parkuru, fiyatlar, güvenilir firmalar ve dikkat edilmesi gerekenler hakkında detaylı bilgi.",
    excerpt:
      "Yozgat'ta hafriyat hizmeti alırken doğru firmayı seçmek projenizin başarısı için kritiktir. Makine parkuru, deneyim, fiyatlar ve yasal izinler hakkında bilmeniz gereken her şey bu rehberde.",
    date: "7 Şubat 2026",
    dateISO: "2026-02-07",
    author: "Emrebaş İnşaat Ekibi",
    category: "Hafriyat",
    image: "/images/services/kepcekamyon.jpg",
    imageAlt: "Yozgat hafriyat hizmeti ekskavatör - Emrebaş İnşaat",
    keywords: [
      "Yozgat hafriyat",
      "Yerköy hafriyat",
      "hafriyat firması",
      "hafriyat fiyatları",
      "ekskavatör kiralama",
    ],
    readingTime: 5,
    content: [
      {
        type: "paragraph",
        content:
          "Yozgat'ta bir inşaat projesi başlatmak istiyorsanız, ilk adım genellikle hafriyat çalışmasıdır. Yozgat hafriyat hizmeti, arazi hazırlığından temel kazısına, yol yapımından altyapı projelerine kadar geniş bir alanı kapsar. Ancak Yozgat hafriyat firması seçerken dikkat edilmesi gereken pek çok önemli kriter vardır. Yanlış bir tercih, projenizin hem süresini hem de bütçesini olumsuz etkileyebilir. Bu rehberde, Yozgat'ta hafriyat hizmeti alırken bilmeniz gereken tüm detayları paylaşıyoruz.",
      },
      {
        type: "heading2",
        content: "Hafriyat Nedir ve Neden Önemlidir?",
      },
      {
        type: "paragraph",
        content:
          "Hafriyat, bir inşaat veya altyapı projesi öncesinde arazinin kazılması, düzenlenmesi, dolgu yapılması ve moloz kaldırılması işlemlerinin tümünü kapsayan bir mühendislik hizmetidir. Yozgat hafriyat hizmetleri, bölgenin coğrafi yapısı nedeniyle özellikle önem taşımaktadır. Yozgat'ın kayalık ve engebeli arazileri, profesyonel hafriyat ekipmanı ve deneyimli operatörler gerektirir. Doğru hafriyat çalışması yapılmadan temeli atılan bir yapı, ileride ciddi sorunlarla karşılaşabilir. Bu nedenle Yozgat'ta hafriyat işlerinde uzman bir firma ile çalışmak, projenizin sağlam temeller üzerine oturmasını sağlar.",
      },
      {
        type: "heading2",
        content: "Yozgat'ta Hafriyat Firması Seçerken Dikkat Edilmesi Gerekenler",
      },
      {
        type: "heading3",
        content: "1. Makine Parkuru ve Ekipman Kalitesi",
      },
      {
        type: "paragraph",
        content:
          "Yozgat hafriyat firması seçerken ilk bakılması gereken kriter, firmanın makine parkurudur. Profesyonel bir Yozgat hafriyat firmasının ekskavatör, loder, kamyon ve gerektiğinde lowbed gibi özel araçlara sahip olması gerekir. Emrebaş İnşaat olarak Yozgat hafriyat hizmetlerimizde 3 adet ekskavatör, 2 adet loder, 3 adet kamyon, 1 adet tır, 1 adet havuz dorse ve 1 adet lowbed ile geniş bir araç filosuna sahibiz. Yozgat'ta hafriyat ihtiyacınız için yeterli ekipmana sahip olmayan firmalarla çalışmak, projenizin aksamasına neden olabilir.",
      },
      {
        type: "heading3",
        content: "2. Deneyim ve Referanslar",
      },
      {
        type: "paragraph",
        content:
          "Yozgat hafriyat sektöründe deneyim çok önemlidir. Bölgenin zemin yapısını, kayaç türlerini ve iklim koşullarını bilen bir Yozgat hafriyat firması, projenizi daha verimli ve sorunsuz tamamlar. Emrebaş İnşaat olarak Yozgat'ta 20 yılı aşkın hafriyat tecrübemizle Yozgat Havalimanı, Ankara-Sivas YHT, MYSİLO tesisleri ve çok sayıda belediye projesi gibi büyük referanslara sahibiz. Yozgat hafriyat hizmeti alırken firmanın geçmiş projelerini incelemek, doğru karar vermenize yardımcı olacaktır.",
      },
      {
        type: "heading3",
        content: "3. Yasal İzinler ve Sigorta",
      },
      {
        type: "paragraph",
        content:
          "Yozgat'ta hafriyat çalışması yapacak firmanın gerekli yasal izinlere sahip olması zorunludur. Hafriyat toprağı döküm izni, çevre izinleri ve iş güvenliği belgeleri, profesyonel bir Yozgat hafriyat firmasında bulunması gereken temel belgelerdir. Ayrıca Yozgat hafriyat hizmeti sırasında oluşabilecek olası hasarlar için firmanın sigorta kapsamı önemlidir. Lisanssız hafriyat firmaları ile çalışmak, hem yasal sorunlara hem de güvenlik risklerine yol açabilir.",
      },
      {
        type: "heading3",
        content: "4. Profesyonel Ekip ve Operatör Kalitesi",
      },
      {
        type: "paragraph",
        content:
          "Yozgat hafriyat işlerinde makinenin kalitesi kadar operatörün deneyimi de önemlidir. Tecrübeli operatörler, Yozgat'ın zorlu arazi koşullarında güvenli ve verimli çalışır. Yozgat hafriyat hizmeti alırken firmanın operatörlerinin sertifikalı ve deneyimli olmasına dikkat edilmelidir. Emrebaş İnşaat olarak Yozgat hafriyat ekibimiz, yılların tecrübesiyle her türlü arazi koşulunda profesyonel hafriyat hizmeti sunmaktadır.",
      },
      {
        type: "heading2",
        content: "Yozgat Hafriyat Fiyatları 2026",
      },
      {
        type: "paragraph",
        content:
          "Yozgat hafriyat fiyatları, projenin kapsamına, arazi koşullarına, kazı derinliğine ve nakliye mesafesine göre değişiklik gösterir. 2026 yılında Yozgat hafriyat fiyatlarını etkileyen başlıca faktörler şunlardır: arazi tipi ve zemin sertliği, kazı miktarı (metreküp), kullanılacak makine türü ve sayısı, hafriyat toprağının nakliye mesafesi ve projenin süresidir. Yerköy hafriyat hizmetlerinde fiyatlar, şehir merkezine göre daha uygun olabilmektedir. Yozgat'ta hafriyat fiyat teklifi alırken birden fazla firmadan teklif karşılaştırması yapmanız önerilir.",
      },
      {
        type: "highlight",
        content:
          "Yozgat hafriyat hizmeti alırken en ucuz fiyat yerine kalite-fiyat dengesine dikkat edin. Ucuz hafriyat hizmeti, uzun vadede daha maliyetli sonuçlar doğurabilir.",
      },
      {
        type: "heading2",
        content: "Yozgat'ta Hafriyat Hizmet Türleri",
      },
      {
        type: "list",
        content: "Yozgat hafriyat hizmeti kapsamında sunulan başlıca işler:",
        items: [
          "Temel kazı ve hafriyat işleri - Yozgat'ta bina ve yapı temelleri için",
          "Arazi düzenleme ve hafriyat tesviye - Engebeli Yozgat arazilerinin düzleştirilmesi",
          "Yol yapım hafriyatı - Yozgat ve Yerköy'de yol altyapı kazıları",
          "GES tesis alanı hafriyat hazırlama - Güneş enerjisi santralleri için arazi hazırlığı",
          "Kanal açma ve boru döşeme hafriyatı - Su ve kanalizasyon altyapıları",
          "Yıkım hafriyatı ve moloz kaldırma - Eski yapıların yıkılması ve temizlenmesi",
        ],
      },
      {
        type: "cta",
        content:
          "Yozgat'ta profesyonel hafriyat hizmeti için Emrebaş İnşaat'ı tercih edin. 20 yıllık tecrübe ve güçlü makine parkuruyla yanınızdayız.",
      },
      {
        type: "paragraph",
        content:
          "Yozgat'ta hafriyat hizmeti alırken doğru firma seçimi, projenizin sorunsuz ilerlemesi için en kritik adımdır. Yozgat hafriyat firması olarak Emrebaş İnşaat, geniş makine parkuru, deneyimli ekibi ve güçlü referanslarıyla Yozgat ve Yerköy'de hafriyat hizmetlerinde güvenilir çözüm ortağınızdır. Ücretsiz keşif ve fiyat teklifi için 0543 593 35 66 numaramızdan bize ulaşabilirsiniz.",
      },
    ],
  },
  {
    slug: "0-3mm-kum-7-15mm-cakil-farklari",
    title: "0-3mm Kum mu, 7-15mm Çakıl mı? Farkları ve Kullanım Alanları",
    metaTitle: "0-3mm Kum vs 7-15mm Çakıl: Farkları ve Kullanım Alanları | Emrebaş İnşaat",
    metaDescription:
      "0-3mm ince kum ile 7-15mm çakıl arasındaki farklar nelerdir? Hangi projede hangisini kullanmalısınız? Detaylı karşılaştırma ve öneriler.",
    excerpt:
      "İnşaat malzemesi seçiminde kum ve çakıl arasındaki farkları bilmek, projenizin kalitesini doğrudan etkiler. 0-3mm ince kum ile 7-15mm çakılın detaylı karşılaştırması.",
    date: "3 Şubat 2026",
    dateISO: "2026-02-03",
    author: "Emrebaş İnşaat Ekibi",
    category: "Çakıl",
    image: "/images/products/7-15-cakil.png",
    imageAlt: "0-3mm kum ve 7-15mm çakıl karşılaştırması - Emrebaş İnşaat Yozgat",
    keywords: [
      "kum çakıl farkı",
      "0-3mm kum",
      "7-15mm çakıl",
      "Yozgat",
      "inşaat malzemesi",
      "kum kullanım alanları",
    ],
    readingTime: 5,
    content: [
      {
        type: "paragraph",
        content:
          "İnşaat projelerinde doğru malzeme seçimi, yapının kalitesini ve dayanıklılığını doğrudan belirler. Yozgat'ta kum ve çakıl alırken en sık karşılaşılan sorulardan biri, 0-3mm ince kum ile 7-15mm çakıl arasındaki farkın ne olduğu ve hangi projede hangisinin kullanılması gerektiğidir. Bu iki inşaat malzemesi birbirinden farklı amaçlara hizmet eder ve yanlış malzeme seçimi projenizde ciddi sorunlara yol açabilir. Bu rehberde, kum ve çakıl arasındaki farkları detaylı olarak inceliyor, Yozgat'ta doğru malzeme seçimi yapmanıza yardımcı oluyoruz.",
      },
      {
        type: "heading2",
        content: "Tane Boyutu Farkları: Kum ve Çakıl Nedir?",
      },
      {
        type: "paragraph",
        content:
          "Kum ve çakıl, tane boyutlarına göre sınıflandırılan agrega ürünleridir. 0-3mm ince kum, adından da anlaşılacağı üzere 0 ile 3 milimetre arasında tane boyutuna sahip ince bir inşaat malzemesidir. Yozgat kum ocaklarından elde edilen ince kum, dokunulduğunda yumuşak ve akıcı bir yapıya sahiptir. 7-15mm çakıl ise 7 ile 15 milimetre arasında tane boyutuna sahip, kumdan belirgin şekilde iri olan bir agrega türüdür. Yozgat'ta üretilen çakıl, sert ve köşeli yapısıyla bilinir. İki malzeme arasındaki temel fark, tane boyutudur ve bu fark kullanım alanlarını doğrudan belirler.",
      },
      {
        type: "heading2",
        content: "Kullanım Alanları Karşılaştırması",
      },
      {
        type: "heading3",
        content: "0-3mm İnce Kum Nerelerde Kullanılır?",
      },
      {
        type: "list",
        content: "Yozgat'ta 0-3mm ince kumun başlıca kullanım alanları:",
        items: [
          "İç ve dış sıva işleri - Kumun ince yapısı pürüzsüz yüzey sağlar",
          "Derz dolgusu - Fayans ve seramik arasındaki boşlukların doldurulması",
          "İnce beton dökümü - Kaldırım, bordür ve ince yapı elemanları",
          "Harç yapımı - Tuğla örme ve duvar işleri için bağlayıcı karışım",
          "Şap dökümü - Zemin düzleştirme ve kaplama altı hazırlığı",
        ],
      },
      {
        type: "heading3",
        content: "7-15mm Çakıl Nerelerde Kullanılır?",
      },
      {
        type: "list",
        content: "Yozgat'ta 7-15mm çakılın başlıca kullanım alanları:",
        items: [
          "Beton üretimi - Yapısal beton karışımlarının temel bileşeni",
          "Temel dolgusu - Bina temeli altında dayanıklı zemin oluşturma",
          "Drenaj sistemleri - Su tahliye kanalları ve filtrasyon katmanları",
          "Zemin güçlendirme - Zayıf zeminlerin taşıma kapasitesini artırma",
          "Peyzaj düzenlemesi - Bahçe yolları ve dekoratif zemin kaplamaları",
        ],
      },
      {
        type: "highlight",
        content:
          "Temel kural: İnce işler için kum, kaba işler için çakıl kullanılır. Kum pürüzsüz yüzey sağlar, çakıl dayanıklılık ve taşıma gücü kazandırır.",
      },
      {
        type: "heading2",
        content: "Fiyat Farklılıkları",
      },
      {
        type: "paragraph",
        content:
          "Yozgat'ta kum ve çakıl fiyatları, üretim süreçlerindeki farklılıklar nedeniyle değişiklik gösterir. Genel olarak 0-3mm ince kum, eleme ve yıkama süreçleri gerektirdiğinden çakıla göre biraz daha yüksek fiyatlanabilir. Ancak Yozgat kum ocaklarında her iki ürün de aynı tesiste üretildiğinden fiyat farkı makul düzeydedir. Toplu alımlarda Yozgat'ta hem kum hem çakıl için önemli indirimler uygulanmaktadır. Projenizde her iki inşaat malzemesine de ihtiyaç duyuyorsanız, aynı tedarikçiden toplu alım yaparak nakliye maliyetlerinden tasarruf edebilirsiniz.",
      },
      {
        type: "heading2",
        content: "Proje Örnekleri: Hangi Projede Hangisi?",
      },
      {
        type: "paragraph",
        content:
          "Yozgat'ta gerçekleştirilen inşaat projelerinden örneklerle kum ve çakıl kullanımını somutlaştıralım. Bir konut inşaatında hem kum hem çakıl gereklidir: Temel kazısından sonra zemin güçlendirme için 7-15mm çakıl kullanılır, ardından beton dökümü için yine çakıl ve kum karışımı hazırlanır. Duvar örme aşamasında harç için 0-3mm ince kum tercih edilir. Son olarak sıva işlerinde yine ince kum kullanılır. Yozgat'taki bir yol yapım projesinde ise alt zemin hazırlığı için iri çakıl, asfalt altı stabilize için kırma taş ve bordür yapımı için ince kum ve çakıl karışımı kullanılır.",
      },
      {
        type: "heading2",
        content: "Yozgat'ta Kum ve Çakıl Nereden Tedarik Edilir?",
      },
      {
        type: "paragraph",
        content:
          "Yozgat'ta kum ve çakıl tedariki için güvenilir bir kum ocağı ile çalışmak önemlidir. Emrebaş İnşaat, Yozgat Yerköy'deki kum ocağı ve taş kırma tesislerinde 0-3mm ince kum, 7-15mm orta çakıl, 15-30mm iri çakıl ve kırma taş üretimi gerçekleştirmektedir. Yozgat kum ocağımızda üretilen tüm ürünler kalite kontrol süreçlerinden geçirilmektedir. Projenize özel kum ve çakıl ihtiyacınız için toptan ve perakende satış yapılmaktadır.",
      },
      {
        type: "cta",
        content:
          "Yozgat'ta kum ve çakıl ihtiyacınız için Emrebaş İnşaat'tan teklif alın. Projenize uygun malzeme seçiminde size yardımcı olalım.",
      },
      {
        type: "paragraph",
        content:
          "Sonuç olarak, 0-3mm ince kum ve 7-15mm çakıl, inşaat projelerinin farklı aşamalarında kullanılan, birbirini tamamlayan iki temel inşaat malzemesidir. Yozgat'ta doğru malzeme seçimi yapabilmek için projenizin ihtiyaçlarını iyi analiz etmeli ve güvenilir bir Yozgat kum ocağından tedarik sağlamalısınız. Her iki ürün için de Emrebaş İnşaat, Yozgat ve çevresinde kaliteli kum ve çakıl ile hizmetinizde. Detaylı bilgi ve fiyat teklifi için 0543 593 35 66 numaramızdan ulaşabilirsiniz.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "Tümü") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export const blogCategories = ["Tümü", "Kum", "Çakıl", "Hafriyat", "Genel"];
