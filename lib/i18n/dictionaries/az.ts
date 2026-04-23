import type { Dictionary } from "./types";

const az: Dictionary = {
  header: {
    nav: {
      home: "Əsas",
      about: "Haqqımızda",
      products: "Məhsullar",
      gallery: "Qalereya",
      contacts: "Əlaqələr",
    },
    localeSwitcherLabel: "Az",
  },
  hero: {
    subtitle: "Organik & Dadlı",
    description:
      "Biz həqiqətən yüksək keyfiyyətli tərəvəz yetişdirməyi və diqqətlə müştəriyə çatdırmağı bilirik",
    cta: "Sifariş verin",
  },
  about: {
    sectionLabel: "İdeal yer",
    text: "müasir texnologiyalara əsaslanan istixana təsərrüfatıdır və Abşeron yarımadasının Zirə qəsəbəsində yerləşir. Şirkətimiz yüksək keyfiyyətli pomidorların yetişdirilməsi üzrə ixtisaslaşıb. Zirə tərəvəzçilik üçün ideal iqlim şəraiti ilə seçilir və uzun illər ərzində regionu kənd təsərrüfatı məhsulları ilə təmin edən iri sovxozun yerləşdiyi ərazi olub.",
    subtitle: "Nə üçün məhsullarımız fərqlidir?",
    features: [
      "Xüsusi Abşeron iqlimi, dəniz havası və güclü günəş işığı;",
      "Yeraltı sulardan əldə edilən və osmos metodu ilə təmizlənən su;",
      "Fransız və Niderland mütəxəssislərinin nəzarəti ilə qurulmuş müasir istixana;",
      "GMO istifadə olunmur, yalnız sertifikatlı, ekoloji gübrələr tətbiq edilir;",
      "Bitkilərin təbii şəkildə arılar vasitəsilə tozlandırılması;",
      "İnsan sağlamlığı üçün təhlükəsiz bioloji mühafizə vasitələri.",
    ],
    cta: "Ətraflı oxu",
  },
  achievements: {
    sectionLabel: "Nailiyyətlər",
    items: [
      { number: "14", label: "partnyorlar", title: "Texnologiya & Etibarlılıq" },
      { number: "9+", label: "illər", title: "İş & Təcrübə" },
      { number: "10", label: "hektar", title: "Ümumi sahə" },
      { number: "∞", label: "", title: "İşinizə sevgi və sədaqət" },
    ],
  },
  products: {
    sectionLabel: "Məhsullar",
    slides: [
      {
        name: "Salxım\npomidorlar",
        description:
          "Meyvələr orta və iri ölçülü, adətən çəkisi 80-150 qr arasındadır və bir budaqda salxım şəklində böyüyür. Onlar şirin, bir az turş dadı və adi pomidorlardan daha zəngin ətirlidirlər. Bu pomidorlar təzə salatlar, sendviçlər, makaron və souslar və konservlər üçün idealdır. Meyvələr tədricən yetişir və salxımlar əmələ gətirir. Onların saxlanması və daşınması asandır və bir bitkidən çoxlu sayda meyvələr verir.",
      },
      {
        name: "Premium çəhrayı\npomidorlar",
        description:
          "Dərin çəhrayı və ya açıq tünd qırmızı rəngli meyvələri ilə xarakterizə edilən pomidor sort və hibridlər qrupu. Meyvələr adətən iri və ya orta ölçülü, 150-500 qr ağırlığında olur, ətli, şirin dadlı, şirəli ətli, nazik zərif qabıqlı və mükəmməl dadı ilə seçilir. Cəlbedici görünüşü, gözəl dadı və yüksək istehlak keyfiyyətləri sayəsində çəhrayı pomidorlar bazarda yüksək populyarlıq qazanıb.",
      },
      {
        name: "Mini pomidorlar\n(çeri)",
        description:
          "Kiçik meyvəli pomidor sortları qrupu, diametri təxminən 1,5-3 sm və çəkisi 10-30 qr olan kiçik, yumru və ya bir qədər uzunsov formalı meyvələri ilə xarakterizə olunur. Çerrilər şirin dadı, şirəliliyi və dekorativ görünüşü ilə qiymətləndirilir. Onlar adətən təzə şəkildə salatlarda, qəlyanaltılarda və yeməklərin təqdimində istifadə olunur. Yüksək məhsuldarlıq, yaxşı daşınma qabiliyyəti və uzun saxlama müddəti ilə xarakterizə olunur.",
      },
    ],
    prev: "Əvvəlki",
    next: "Növbəti",
  },
  advantages: {
    sectionLabel: "Üstünlüklər",
    items: [
      {
        title: "Texnologiyalar",
        description:
          "Biz istehsal proseslərini tamamilə avtomatlaşdırmışıq, istehsal prosesinin hər bir mərhələsində partnyorlarımızın qabaqcıl texnologiyalarını tətbiq etmişik. İqlim nəzarəti, avtomatlaşdırılmış suvarma və keyfiyyətə nəzarət sistemləri maksimum səmərəliliyi və sabit nəticələri təmin edir.",
      },
      {
        title: "Organik",
        description:
          "Biz ekoloji məsuliyyətli şəkildə sağlam, GMO-suz məhsullar istehsal edirik. Biz davamlı suvarma sistemlərindən, istixanamızda üzvi gübrələrdən istifadə edir və ətraf mühitə təsiri minimuma endirmək və təbii tarazlığı qorumaq üçün resurslarımızı diqqətlə idarə edirik.",
      },
      {
        title: "Nəzarət",
        description:
          "Bu, bizim işimizin əsasını təşkil edir. Biz toxumların əkilməsindən tutmuş məhsulların qablaşdırılmasına qədər istehsalın hər bir mərhələsinə ciddi nəzarət edirik. Bütün məhsullar beynəlxalq standartlara uyğunluq baxımından diqqətlə sınaqdan keçirilir ki, bu da pomidorlarımızın yüksək keyfiyyətinə, təravətinə və təhlükəsizliyinə zəmanət verir.",
      },
      {
        title: "Assortiment",
        description:
          "Aqronomlarımızın peşəkarlığı müştəri sifarişlərinə uyğun hər növ pomidor yetişdirməyə imkan verir. Dərin təcrübəmiz və ən müasir texnologiya sayəsində istehsalı sizin unikal tələblərinizə uyğunlaşdırırıq, gözləntilərinizə tam cavab verən məhsullar təklif edirik.",
      },
    ],
  },
  gallery: {
    sectionLabel: "Qalereya",
    dragHint: "Köçür",
    cta: "Daha çox foto",
  },
  galleryPage: {
    title: "qalereya",
    prev: "Əvvəlki foto",
    next: "Növbəti foto",
  },
  partners: {
    sectionLabel: "Partnyorlar",
    description:
      "Layihəmiz {growGroup} ilə sıx əməkdaşlıq çərçivəsində həyata keçirilmişdir. Şirkət Azərbaycanda yüksək texnologiyalı istixanaların qurulması üzrə liderdir və {richel} və {stolze} şirkətlərinin rəsmi distribyutorudur.",
    growGroup: "Grow Group Azerbaijan",
    richel: "RICHEL",
    stolze: "STOLZE",
  },
  aboutPage: {
    title: "haqqımızda",
    mission: {
      label: "Missiya",
      heading: "Biz yerli və beynəlxalq bazarları təmiz,",
      text: "yüksək keyfiyyətli pomidorlarla təmin edərək ölkənin ərzaq təhlükəsizliyinə töhfə verməyi hədəfləyirik. Məqsədimiz qlobal standartlara və müştəri gözləntilərinə cavab verən premium keyfiyyətli tərəvəzləri davamlı şəkildə yetişdirməkdir.",
    },
    greenhouse: {
      label: "İstixana",
      heading: "İstixanamız Avropanın iki aparıcı şirkəti — RICHEL (Fransa) və STOLZE (Niderland) tərəfindən inşa edilib.",
      details: "RICHEL isti və quraq iqlim şəraitində səmərəli işləyəcək müasir, yüksək həcmli istixana konstruksiyasını təqdim etdi.\nSTOLZE istilik, ventilyasiya və suvarma daxil olmaqla mühəndislik sistemlərini təchiz etdi.\nBütün proseslər PRIVA iqlim idarəetmə sistemi vasitəsilə tam avtomatlaşdırılıb — bu da ideal böyümə şəraiti və ilboyu maksimum məhsuldarlıq təmin edir.",
      richel: "RICHEL",
      stolze: "STOLZE",
      priva: "PRIVA",
    },
    products: {
      label: "Məhsullar",
      heading: "Biz pomidorun bir neçə kateqoriyasını yetişdiririk:",
      text: "bunlar salxım pomidorlar, premium çəhrayı pomidorlar, slivalı pomidorlar və mini-pomidorlardır (çeri). Bütün növlər daxili və ixrac bazarlarında yüksək tələbatla istifadə olunur. Planlaşdırılan genişlənmə ilə biz partnyor tələblərinə əsaslanaraq çeşidimizi və ixrac həcmlərimizi artırmağı planlaşdırırıq.",
      cards: [
        { name: "Salxım pomidorlar" },
        { name: "Çəhrayı pomidorlar" },
        { name: "Slivalı pomidorlar" },
        { name: "«Çeri» pomidorlar" },
      ],
    },
    experts: {
      label: "Mütəxəssislərimiz",
      heading: "Peşəkar yanaşma",
      text: "Aqronomlarımız uzun illik təcrübəyə malikdir və mütəmadi olaraq Niderland, İspaniya və digər Avropa ölkələrində təlimlər keçir. Beynəlxalq ekspertlər ildə bir neçə dəfə təsərrüfatımıza gələrək monitorinq, qiymətləndirmə və texniki məsləhət təmin edirlər.",
    },
  },
  contactsPage: {
    title: "İxrac ölkələri",
    address: "Azərbaycan, AZ0100, Bakı, Zirə Tərəvəz-süd sovxozu",
    countries: {
      russia: "Rusiya",
      poland: "Polşa",
      uae: "BƏƏ",
      belarus: "Belarus",
      ukraine: "Ukrayna",
    },
    russiaRegions: [
      "Astraxan vilayəti",
      "Başqırdıstan Respublikası",
      "Volqoqrad vilayəti",
      "Voronej vilayəti",
      "İvanovo vilayəti",
      "Kemerovo vilayəti",
      "Kirov vilayəti",
      "Krasnodar diyarı",
      "Kuban dairəsi",
      "Leninqrad vilayəti",
      "Moskva vilayəti",
      "Murmansk vilayəti",
      "Nijni Novqorod vilayəti",
      "Novqorod vilayəti",
      "Novosibirsk vilayəti",
      "Omsk vilayəti",
      "Orenburq vilayəti",
      "Oryol vilayəti",
      "Penza vilayəti",
      "Perm diyarı",
      "Rostov vilayəti",
      "Samara vilayəti",
      "Saratov vilayəti",
      "Sverdlovsk vilayəti",
      "Smolensk vilayəti",
      "Stavropol diyarı",
      "Tambov vilayəti",
      "Tatarıstan Respublikası",
      "Tula vilayəti",
      "Tümen vilayəti",
      "Udmurt Respublikası",
      "XMAO — Yuqra",
      "Çelyabinsk vilayəti",
      "Yaroslavl vilayəti",
    ],
    form: {
      forCustomers: "Müştərilər üçün",
      forSuppliers: "Təchizatçılar üçün",
      description: "Suallarınız, təklifləriniz varsa və ya sifariş vermək istəyirsinizsə, formanı doldurun. Əməkdaşlığa şad olarıq.",
      recipientLabel: "Müraciətlər üçün e-poçt",
      companyName: "şirkət adı",
      email: "e-poçt",
      message: "mesaj",
      agree: "Mən şərtləri qəbul edirəm",
      privacyPolicy: "məxfilik siyasəti",
      send: "Göndər",
      sending: "Göndərilir...",
      successMessage: "Mesajınız uğurla göndərildi!",
      spamBlockedMessage: "Sorğu antispam qorunması tərəfindən bloklandı. Şübhəli keçidləri və ya reklam mətnini silib yenidən cəhd edin.",
      errorMessage: "Xəta baş verdi. Yenidən cəhd edin.",
    },
    baku: "Bakı",
    zire: "Zirə",
  },
  notFound: {
    title: "404",
    heading: "Səhifə tapılmadı",
    description: "Bu səhifə mövcud deyil. Sayt menyusundan istifadə edə və ya əsas səhifəyə keçə bilərsiniz:",
    cta: "Əsas səhifə",
  },
  footer: {
    decorativeLines: ["Organik & Dadlı"],
    contactUs: "Bizə yazın",
    callAlt: "Zəng edin",
    labels: {
      mobile: "Mobil",
      office: "Baş ofis",
      email: "E-poçt",
      russia: "Rusiya nümayəndəliyi",
    },
    address: "Azərbaycan, Bakı",
    copyright: "Bütün hüquqlar qorunur.",
  },
};

export default az;
