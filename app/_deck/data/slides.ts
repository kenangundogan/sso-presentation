/**
 * Centralized slide content data.
 *
 * All text-based data from individual slides lives here.
 * Slides import and render — no inline data duplication.
 * Icon references stay in slide files (React components can't be serialized).
 */

/* ================================================================ *
 * Slide headers (kicker · title · subtitle)
 * ================================================================ */

export type SlideHeader = {
  kicker: string;
  title: string;
  subtitle: string;
};

export const SLIDE_HEADERS = {
  whatIsSso: {
    kicker: "Temel Kavram",
    title: "SSO Nedir?",
    subtitle: "Single Sign-On — tek kimlik doğrulamasıyla birçok uygulamaya erişim. Kullanıcıya tek hesap deneyimi, mimarın eline merkezi kimlik kaynağı verir.",
  },
  why: {
    kicker: "01 · İhtiyaç Analizi",
    title: "Neden SSO?",
    subtitle: "Parçalı yapıyı merkezi bir kimlik katmanına dönüştürmenin teknik ve operasyonel çıktıları.",
  },
  how: {
    kicker: "02 · Protokol",
    title: "SSO Nasıl Çalışır?",
    subtitle: "Modern kimlik protokolleri (OAuth 2.1 & OIDC) ile şifreler uygulamalara hiç ulaşmaz; tüm süreç güvenli dijital anahtarlar üzerinden yürütülür.",
  },
  frameworkOverview: {
    kicker: "03 · Pazar Araştırması",
    title: "Açık Kaynak Çözümler",
    subtitle: "Kendi sunucularımızda barındırabileceğimiz popüler kimlik yönetimi (IAM) çözümlerinin teknoloji, güncellik ve lisans bazlı karşılaştırması.",
  },
  decision: {
    kicker: "04 · Karar",
    title: "Karşılaştırma",
    subtitle: "Kurumsal mimarimize ve operasyonel yetkinliklerimize en yüksek uyumu sağlayan stratejik çözümün belirlenmesi.",
  },
  enterpriseAlternatives: {
    kicker: "03 · Pazar Karşılaştırması",
    title: "Ticari Alternatifler",
    subtitle: "Büyük ölçekli ticari kimlik platformları ile açık kaynak çözümlerin kontrol, esneklik ve bağımsızlık karşılaştırması.",
  },
  notFromScratch: {
    kicker: "04 · Build vs Buy",
    title: "Neden Sıfırdan Yazmıyoruz?",
    subtitle: "Kimlik yönetimi, yüzlerce kritik güvenlik senaryosu barındıran uzmanlık gerektiren bir alandır. Hazır bir yapı kullanmak, eforumuzu ürüne odaklamamızı sağlar.",
  },
  architecture: {
    kicker: "05 · Teknik Mimari",
    title: "Entegrasyon Planı",
    subtitle: "Merkezi kimlik sağlayıcı üzerinden tüm uygulamaların uçtan uca entegrasyonu. Veriler kendi altyapımızda barındırılarak tam denetim sağlanır.",
  },
  branding: {
    kicker: "05 · Marka Deneyimi",
    title: "Merkezi Yönetim, Özelleştirilmiş Kimlik",
    subtitle: "Tek bir altyapı üzerinden; her platform için özgün alan adları, logolar ve görsel diller tanımlanarak kişiselleştirilmiş bir deneyim sunulur.",
  },
  platforms: {
    kicker: "05 · Platform & SDK",
    title: "Uçtan Uca Entegrasyon Planı",
    subtitle: "Eko-sistemimizdeki tüm platformlar için hazır kütüphane ve protokol desteği sayesinde, entegrasyon süreçleri standartlaştırılmıştır.",
  },
  roadmap: {
    kicker: "06 · Yol Haritası",
    title: "8 Aşamalı Uygulama Planı",
    subtitle: "Analizden canlıya geçişe kadar 8 haftalık stratejik takvim. Her aşama bir öncekinin çıktısına dayanır — paralel iş kolları haftalar arası örtüşebilir.",
  },
  summary: {
    kicker: "07 · Özet & Strateji",
    title: "Yönetici Özeti",
    subtitle: "Mevcut teknoloji ve ekip yapımızla tam uyum. Düşük risk, yüksek hız ve sürdürülebilir bir kimlik ekosistemi.",
  },
  glossary: {
    kicker: "Ek · Sözlük",
    title: "Terimler Sözlüğü",
    subtitle: "Sunumda geçen teknik kısaltmaların açılımları ve Türkçe karşılıkları.",
  },
} as const satisfies Record<string, SlideHeader>;

export const SCORE_EXPLANATION = {
  verdict: "Puan, 10 somut kriterin var/yok kontrolüyle hesaplanır: OAuth/OIDC · SAML 2.0 · LDAP · SCIM 2.0 · MFA/Passkey · SDK (Next.js/TS uyumlu) · Yerleşik Multi-tenancy · Bağımsız Güvenlik Denetimi/Sertifika · Self-hosted + Managed Cloud · AI/MCP Entegrasyonu. Her ✓ = 1 puan.",
  warn: "Puanlama yalnızca özellik varlığını ölçer — özellik kalitesi, topluluk büyüklüğü, güvenlik geçmişi ve ekosistem olgunluğu gibi nitel faktörler framework detay kartlarında ayrıca değerlendirilmiştir.",
} as const;

/* ================================================================ *
 * enterprise-alternatives
 * ================================================================ */

export type EnterprisePlatform = {
  name: string;
  website: string;
  differentiator: string;
  selfHosted: boolean;
  protocols: string;
  limitation: string;
};

export const ENTERPRISE_PLATFORMS: ReadonlyArray<EnterprisePlatform> = [
  {
    name: "Auth0 (Okta)",
    website: "auth0.com",
    differentiator: "En olgun geliştirici-odaklı kimlik platformu, Universal Login + Actions",
    selfHosted: false,
    protocols: "OIDC · SAML · LDAP",
    limitation: "Ölçekte maliyet patlaması — MAU fiyatlaması prohibitif",
  },
  {
    name: "Okta",
    website: "okta.com",
    differentiator: "Workforce IAM pazar lideri (Gartner Leader), en geniş entegrasyon kataloğu",
    selfHosted: false,
    protocols: "OIDC · SAML · LDAP · SCIM",
    limitation: "Pahalı koltuk-bazlı lisans, workforce/customer ayrı ürün",
  },
  {
    name: "Microsoft Entra ID",
    website: "microsoft.com/entra",
    differentiator: "700M+ kullanıcı, Microsoft 365/Azure/AD ekosistemi ile tam entegre",
    selfHosted: false,
    protocols: "OIDC · SAML · LDAP · WS-Fed · SCIM · Kerberos",
    limitation: "Karmaşık lisanslama, Microsoft dışı ortamlarda zayıf",
  },
  {
    name: "AWS Cognito",
    website: "aws.amazon.com/cognito",
    differentiator: "AWS-native IAM entegrasyonu, Lambda triggers, API Gateway bağlantısı",
    selfHosted: false,
    protocols: "OIDC · SAML",
    limitation: "Kötü DX, sınırlı UI özelleştirme, AWS vendor lock-in",
  },
  {
    name: "WorkOS",
    website: "workos.com",
    differentiator: "B2B SaaS için enterprise-readiness (SSO + SCIM + Directory Sync)",
    selfHosted: false,
    protocols: "OIDC · SAML · SCIM",
    limitation: "B2B SSO odaklı — tam CIAM çözümü değil",
  },
  {
    name: "Clerk",
    website: "clerk.com",
    differentiator: "React/Next.js drop-in UI bileşenleri, dakikalar içinde entegrasyon",
    selfHosted: false,
    protocols: "OIDC · SAML (ücretli tier)",
    limitation: "React/Next.js ekosistemi kilidi, SAML yalnızca üst katmanda",
  },
  {
    name: "Firebase Auth",
    website: "firebase.google.com",
    differentiator: "5 dakikada kurulum, mobil/web için en basit drop-in auth",
    selfHosted: false,
    protocols: "OIDC · SAML (Identity Platform)",
    limitation: "RBAC yok, tenant yönetimi yok, SCIM yok — enterprise-grade değil",
  },
  {
    name: "FusionAuth",
    website: "fusionauth.io",
    differentiator: "Self-host edilebilen ticari CIAM — MAU limiti yok (community)",
    selfHosted: true,
    protocols: "OIDC · SAML · LDAP",
    limitation: "Gelişmiş özellikler ücretli, Java stack kaynak yoğun",
  },
];

export const ENTERPRISE_VS_OPENSOURCE: ReadonlyArray<{ concern: string; commercial: string; openSource: string }> = [
  { concern: "Ölçeklenme", commercial: "Kullanıcı sayısına bağlı artan maliyet yapısı", openSource: "Sınırsız kullanıcı, sabit operasyonel maliyet" },
  { concern: "Vendor Lock-in", commercial: "Proprietery API, platform bağımlılığı", openSource: "Standart tabanlı (OIDC/SAML), taşınabilir" },
  { concern: "Self-Hosting", commercial: "Çoğu yalnızca bulut, altyapı kontrolü yok", openSource: "Tam kontrol, on-prem veya bulut" },
  { concern: "Veri Egemenliği", commercial: "Veri sağlayıcının altyapısında barınır", openSource: "Veri kendi altyapınızda (KVKK uyumlu)" },
  { concern: "Özelleştirme", commercial: "Sağlayıcının uzantı noktalarıyla sınırlı", openSource: "Tam kaynak kod erişimi" },
  { concern: "Protokol Desteği", commercial: "Bazı protokoller üst katmanlara özel", openSource: "OIDC/SAML/LDAP tam dahil" },
];

/* ================================================================ *
 * what-is-sso
 * ================================================================ */

export const PRODUCT_POINTS = [
  "Kullanıcı tek hesap, tek şifre, tek tıkla giriş yapar.",
  "Her yeni site için ayrı kayıt yok — kayıt sürtünmesi sıfıra iner.",
  "Profil, tercihler, abonelik merkezi ve tutarlı kalır.",
  '"Google ile giriş yap" mantığının kendi markanızdaki hali.',
] as const;

export const TECHNICAL_POINTS = [
  "Merkezi bir Identity Provider (IdP) tüm kimlik doğrulamayı üstlenir.",
  "IdP imzalı JWT token üretir; uygulamalar (client) bu token'ı doğrular.",
  "Standart protokol: OAuth 2.1 + OpenID Connect (OIDC) · veya SAML 2.0.",
  "Her uygulama kendi kullanıcı veritabanını tutmaz — ortak kaynağa güvenir.",
] as const;

export const SSO_EXAMPLES: ReadonlyArray<[string, string]> = [
  ["Google", "Gmail · YouTube · Drive · Maps"],
  ["Apple ID", "iCloud · App Store · iMessage"],
  ["Microsoft", "Office · Teams · OneDrive · Xbox"],
  ["Amazon", "Prime · Kindle · AWS · Alexa"],
  ["Meta", "Facebook · Instagram · WhatsApp"],
  ["Atlassian", "Jira · Confluence · Bitbucket · Trello"],
  ["Adobe", "Creative Cloud · Document Cloud · Behance"],
];

/* ================================================================ *
 * why
 * ================================================================ */

export type WhyRow = { area: string; now: string; sso: string };

export const WHY_ROWS: ReadonlyArray<WhyRow> = [
  { area: "Kimlik", now: "Her platform için bağımsız kayıt ve oturum", sso: "Tek hesapla tüm ekosisteme erişim" },
  { area: "Profil", now: "Dağınık ve senkronize olmayan kullanıcı verisi", sso: "Merkezi ve tekil kullanıcı profili" },
  { area: "Destek", now: "Platform bazlı yinelenen şifre problemler", sso: "Self-service hesap ve şifre yönetimi" },
  { area: "Güvenlik", now: "Farklı standartlarda, dağınık MFA yapıları", sso: "Merkezi MFA, Passkey ve güvenlik politikaları" },
  { area: "Veri & KVKK", now: "Kontrolü zor, parçalı veri depolama", sso: "Merkezi veri saklama ve tek noktadan denetim" },
  { area: "Paketleme", now: "Platformlar arası paket paylaşımı imkansız", sso: "Token tabanlı global yetki ve paket yönetimi" },
  { area: "Analitik", now: "Kullanıcı yolculuğu verisi parçasal", sso: "Uçtan uca kullanıcı davranış verisi" },
];

/** Icon key → slide maps to actual Lucide icon. "up" = ArrowUp, "down" = ArrowDown */
export const WHY_IMPACTS: ReadonlyArray<{ icon: "up" | "down"; label: string }> = [
  { icon: "up", label: "Platformlar Arası Geçiş Gücü" },
  { icon: "down", label: "Operasyonel Destek Yükü" },
  { icon: "up", label: "Veri ve Karar Tutarlılığı" },
  { icon: "down", label: "Güvenlik ve Denetim Riski" },
];

/* ================================================================ *
 * how
 * ================================================================ */

export type FlowStep = {
  num: string;
  title: string;
  actors: string;
  detail: string;
};

export const FLOW_STEPS: ReadonlyArray<FlowStep> = [
  { num: "01", title: "Yönlendirme", actors: "Uygulama → IdP", detail: "Uygulama, kullanıcıyı merkezi giriş ekranına yönlendirir. Arka planda güvenli bağlantı için bir doğrulama talebi oluşturulur." },
  { num: "02", title: "Kimlik Doğrulama", actors: "IdP ↔ Kullanıcı", detail: "Kullanıcı giriş yapar. Şifre ve 2. faktör (MFA) sadece merkezi sistemde kontrol edilir; şifre uygulamaya asla gitmez." },
  { num: "03", title: "Onay Kodu", actors: "IdP → Uygulama", detail: "Giriş başarılıysa sistem, kullanıcıyı tek kullanımlık bir 'onay kodu' ile güvenli bir şekilde uygulamaya geri döndürür." },
  { num: "04", title: "Anahtar Takası", actors: "Uygulama → IdP", detail: "Uygulama aldığı kodu kullanarak, arka planda (sunucu-sunucu) asıl yetki anahtarlarını (Token) sistemsel olarak teslim alır." },
  { num: "05", title: "Güvenli Erişim", actors: "Uygulama → Servis", detail: "Alınan anahtarlar ile verilere erişilir. Her istek dijital imza ile doğrulanır, veri güvenliği uçtan uca sağlanmış olur." },
];

export type TokenInfo = {
  name: string;
  tag: string;
  lifespan: string;
  format: string;
  note: string;
};

export const TOKEN_TYPES: ReadonlyArray<TokenInfo> = [
  { name: "Access Token", tag: "Erişim Anahtarı", lifespan: "Geçici · 5–15 dk", format: "JWT (Dijital İmza)", note: "Servislerden veri çekmek için kullanılır. Süresi dolduğunda yenilenmesi gerekir." },
  { name: "ID Token", tag: "Kimlik Bilgisi", lifespan: "Kısa Ömürlü", format: "JWT (OIDC)", note: "Kullanıcının adı, e-postası ve temel profil bilgilerini güvenli bir pakette taşır." },
  { name: "Refresh Token", tag: "Yenileme Anahtarı", lifespan: "Uzun Ömürlü", format: "Opaque (Kapalı)", note: "Kullanıcının sürekli giriş yapmasına gerek kalmadan, oturumun güvenle devamını sağlar." },
];

/* ================================================================ *
 * not-from-scratch
 * ================================================================ */

export const SCRATCH_ITEMS = [
  "Minimum 2–4 ay temel geliştirme süreci",
  "Kritik güvenlik senaryolarının (Edge case) yönetimi",
  "Şifreleme, saldırı önleme ve sürekli yama yükü",
  "Sürekli bakım ve operasyonel maliyet",
  "Bağımsız güvenlik denetimi ve sızma testi zorunluluğu",
  "Platformlar arası (Web/Mobil) entegrasyon karmaşası",
  "Global regülasyon uyumu (GDPR/KVKK) teknik yükü",
  "Kullanıcı göçü (Migration) ve veri taşıma zorlukları",
] as const;

export const FRAMEWORK_ITEMS = [
  "Birkaç günde kurulum ve temel entegrasyon",
  "Binlerce ekip tarafından test edilmiş güvenli yapı",
  "Tek tıkla MFA, Passkey ve Sosyal Giriş desteği",
  "Kendi sunucularımızda (Self-hosted) tam veri hakimiyeti",
  "Sıfır lisans maliyeti (MPL 2.0) ve özgür yapı",
  "Gelişmiş Dashboard üzerinden kolay kullanıcı yönetimi",
  "Hazır SDK'lar ile tüm platformlara anında uyum",
  "Yapay Zeka (AI/MCP) ile kullanıcı analitiği desteği",
] as const;

/* ================================================================ *
 * branding
 * ================================================================ */

export type BrandingFeature = { title: string; description: string };

export const BRANDING_FEATURES: ReadonlyArray<BrandingFeature> = [
  { title: "Kurumsal Kimlik", description: "Logo, renk paleti ve tipografi yönetimi. Her organizasyon veya platformun kendi görsel diline tam uyum." },
  { title: "Özel Alan Adı", description: "auth.platform.com gibi adres desteği. Kullanıcılar her zaman güvendikleri ana adres yapısında kalır." },
  { title: "Esnek Tasarım", description: "Web, tablet ve mobil cihazlarda tutarlı oranlar. Her ekran boyutuna uygun, yüksek okunurluk sunan arayüz." },
  { title: "Dinamik Özelleştirme", description: "Yazılım güncellemesi (deploy) gerektirmeyen anlık görsel değişimler. Yönetim panelinden tam kontrol noktası." },
];

/* ================================================================ *
 * platforms
 * ================================================================ */

export type PlatformRow = {
  type: string;
  scope: string;
  tech: string;
  sdk: string;
  time: string;
};

export const PLATFORM_DATA: ReadonlyArray<PlatformRow> = [
  { type: "WEB",   scope: "Sunucu Render Portalları (SSR)", tech: "Laravel",       sdk: "PHP SDK + OIDC",               time: "2–3 Gün / Portal" },
  { type: "WEB",   scope: "Modern Web Uygulamaları",        tech: "Next.js",       sdk: "@logto/next",                  time: "1–2 Gün / Uygulama" },
  { type: "WEB",   scope: "CMS ve Yönetim Panelleri",       tech: "Next.js",       sdk: "@logto/next",                  time: "1–2 Gün / Proje" },
  { type: "MOBİL", scope: "iOS & Android Uygulamaları",     tech: "React Native",  sdk: "@logto/rn",                    time: "2–3 Gün / Versiyon" },
  { type: "TV",    scope: "Samsung Tizen & LG WebOS",       tech: "JavaScript",    sdk: "@logto/browser + Device Flow", time: "3–5 Gün / OS" },
  { type: "TV",    scope: "Android TV & Google TV",         tech: "Kotlin (Native)", sdk: "io.logto.sdk:android (Maven)", time: "2–3 Gün" },
  { type: "TV",    scope: "Apple TV (tvOS)",                tech: "Swift",         sdk: "logto-io/swift (SPM)",         time: "2–3 Gün" },
];

/* ================================================================ *
 * roadmap
 * ================================================================ */

export type RoadmapPhase = {
  n: string;
  title: string;
  days: string;
  items: readonly string[];
};

export const ROADMAP_PHASES: ReadonlyArray<RoadmapPhase> = [
  { n: "01", title: "Analiz & Keşif", days: "1. HAFTA", items: ["Mevcut sistem envanteri ve kullanıcı akışlarının haritalanması", "Platform bazlı entegrasyon noktalarının belirlenmesi", "Kimlik veri modeli ve kullanıcı göçü gereksinimlerinin çıkarılması", "Teknik gereksinim dokümanının hazırlanması"] },
  { n: "02", title: "Mimari Tasarım", days: "2. HAFTA", items: ["IdP mimari kararları ve protokol seçimi (OIDC / SAML)", "Multi-tenancy yapısı ve organizasyon hiyerarşisi tasarımı", "Güvenlik politikaları, MFA stratejisi ve KVKK uyum planı", "Entegrasyon mimarisi dokümanı ve onay süreci"] },
  { n: "03", title: "Altyapı Kurulumu", days: "3. HAFTA", items: ["Merkezi kimlik sağlayıcı (IdP) deploy ve konfigürasyon", "Kurumsal alan adı (auth.domain.com) ve SSL yapılandırması", "Google, Apple ve sosyal giriş entegrasyonları", "Temel organizasyon, rol ve yetki profili tanımları"] },
  { n: "04", title: "Web Entegrasyonları", days: "4. HAFTA", items: ["Next.js SDK entegrasyonu ve pilot proje (web portalları)", "Laravel backend SSO entegrasyonu (PHP SDK + OIDC)", "CMS ve yönetim paneli entegrasyonları", "Web platformlarında SSO akışlarının fonksiyonel testi"] },
  { n: "05", title: "Backend & Mobil", days: "5. HAFTA", items: ["Backend API servis entegrasyonları ve token yönetimi", "iOS ve Android uygulamaları için SSO geçişi", "Paket ve abonelik bazlı yetkilendirme kurgusu", "Sistemler arası güvenli token trafiği doğrulaması"] },
  { n: "06", title: "KVKK & Smart TV", days: "6. HAFTA", items: ["KVKK onay metinleri ve açık rıza akış yönetimi", "Smart TV entegrasyonları (Tizen, WebOS, Android TV, tvOS)", "Kullanıcı verisi ihraç, anonimleştirme ve silme API'leri", "Mevcut kullanıcı verisi göçü (migration) planı ve testi"] },
  { n: "07", title: "Test & Güvenlik", days: "7. HAFTA", items: ["Uçtan uca entegrasyon testleri (tüm platformlar)", "Bağımsız güvenlik review ve sızma testi (penetration test)", "Yük ve performans testleri, darboğaz optimizasyonu", "Kullanıcı kabul testleri (UAT) ve geri bildirim döngüsü"] },
  { n: "08", title: "Canlıya Geçiş", days: "8. HAFTA", items: ["Kontrollü yayına alma (staged rollout — %10 → %50 → %100)", "Gerçek zamanlı izleme ve hata müdahale süreci", "Destek ekibi eğitimi ve operasyon el kitabı teslimi", "Proje kapanış raporu ve sürekli iyileştirme planı"] },
];

/* ================================================================ *
 * summary
 * ================================================================ */

export const SUMMARY_BULLETS = [
  "Açık Kaynak (MPL 2.0) — Sıfır lisans maliyeti ve özgür altyapı",
  "8 Haftalık Uygulama Planı — Analiz · Tasarım · Kurulum · Entegrasyon · Test · Canlıya Geçiş",
  "KVKK & Yerel Veri Uyumu — Tüm veriler kendi sunucularımızda",
  "Geniş Kimlik Kaynağı — 29+ sosyal sağlayıcı · E-posta · SMS · Passkey · Enterprise SSO",
  "Bütünleşik Deneyim — Web, Mobil ve Smart TV'de tekil kimlik",
  "Esnek & Modüler Yapı — Bağımsız uygulamalar arası kolay entegrasyon",
  "SOC 2 Type II Sertifikalı — Argon2 hash · Aktif geliştirme · Geniş topluluk",
] as const;

/* ================================================================ *
 * glossary
 * ================================================================ */

export type GlossaryTerm = { abbr: string; full: string; tr: string };
export type GlossaryGroup = { group: string; items: ReadonlyArray<GlossaryTerm> };

export const GLOSSARY_TERMS: ReadonlyArray<GlossaryGroup> = [
  {
    group: "Protokol & Standart",
    items: [
      { abbr: "SSO", full: "Single Sign-On", tr: "Tekli Oturum Açma" },
      { abbr: "OAuth 2.0", full: "Open Authorization 2.0", tr: "Açık Yetkilendirme Protokolü" },
      { abbr: "OIDC", full: "OpenID Connect", tr: "Açık Kimlik Bağlantısı" },
      { abbr: "SAML 2.0", full: "Security Assertion Markup Language", tr: "Güvenlik Onay İşaretleme Dili" },
      { abbr: "LDAP", full: "Lightweight Directory Access Protocol", tr: "Hafif Dizin Erişim Protokolü" },
      { abbr: "RADIUS", full: "Remote Authentication Dial-In User Service", tr: "Uzaktan Kimlik Doğrulama Servisi" },
      { abbr: "SCIM", full: "System for Cross-domain Identity Management", tr: "Çapraz Alan Kimlik Yönetimi" },
      { abbr: "CAS", full: "Central Authentication Service", tr: "Merkezi Kimlik Doğrulama Servisi" },
      { abbr: "WS-Fed", full: "Web Services Federation", tr: "Web Servisleri Federasyonu" },
      { abbr: "Kerberos", full: "Kerberos Network Authentication", tr: "Ağ Kimlik Doğrulama Protokolü" },
      { abbr: "UMA 2.0", full: "User-Managed Access 2.0", tr: "Kullanıcı Yönetimli Erişim Protokolü" },
      { abbr: "Device Flow", full: "OAuth 2.0 Device Authorization Grant", tr: "Cihaz Yetkilendirme Akışı (TV, IoT)" },
      { abbr: "DPoP", full: "Demonstration of Proof-of-Possession", tr: "Sahiplik Kanıtı Gösterimi (token hırsızlığını önler)" },
      { abbr: "JAR", full: "JWT Secured Authorization Request", tr: "JWT ile Güvenli Yetkilendirme Talebi" },
    ],
  },
  {
    group: "Kimlik & Güvenlik",
    items: [
      { abbr: "IdP", full: "Identity Provider", tr: "Kimlik Sağlayıcı" },
      { abbr: "IAM", full: "Identity & Access Management", tr: "Kimlik ve Erişim Yönetimi" },
      { abbr: "MFA", full: "Multi-Factor Authentication", tr: "Çok Faktörlü Kimlik Doğrulama" },
      { abbr: "TOTP", full: "Time-based One-Time Password", tr: "Zamana Dayalı Tek Kullanımlık Parola" },
      { abbr: "OTP", full: "One-Time Password", tr: "Tek Kullanımlık Parola" },
      { abbr: "WebAuthn", full: "Web Authentication API", tr: "Web Kimlik Doğrulama Arayüzü" },
      { abbr: "Passkey", full: "FIDO2 Cryptographic Credential", tr: "Şifresiz Biyometrik Giriş Anahtarı" },
      { abbr: "FIDO2", full: "Fast Identity Online 2.0", tr: "Hızlı Çevrimiçi Kimlik Standardı (Passkey altyapısı)" },
      { abbr: "KYC", full: "Know Your Customer", tr: "Müşterini Tanı (finans kimlik doğrulama)" },
      { abbr: "Passwordless", full: "Passwordless Authentication", tr: "Şifresiz Kimlik Doğrulama (e-posta, SMS, biyometri)" },
      { abbr: "Impersonation", full: "User Impersonation", tr: "Yöneticinin kullanıcı adına oturum açması" },
      { abbr: "PKCE", full: "Proof Key for Code Exchange", tr: "Kod Değişimi Kanıt Anahtarı" },
      { abbr: "mTLS", full: "Mutual Transport Layer Security", tr: "Karşılıklı İletişim Güvenliği" },
      { abbr: "Face ID", full: "Facial Recognition Biometrics", tr: "Yüz Tanıma ile Biyometrik Kimlik Doğrulama" },
      { abbr: "Web3", full: "Decentralized Web (Blockchain)", tr: "Merkezi Olmayan Web (cüzdan tabanlı kimlik)" },
    ],
  },
  {
    group: "Token & Yetkilendirme",
    items: [
      { abbr: "JWT", full: "JSON Web Token", tr: "Dijital imzalı veri paketi (kimlik + yetki taşır)" },
      { abbr: "Access Token", full: "Access Token (JWT)", tr: "Erişim Anahtarı — servislere veri çekmek için (kısa ömürlü)" },
      { abbr: "ID Token", full: "ID Token (OIDC JWT)", tr: "Kimlik Bilgisi — kullanıcı adı, e-posta gibi profil taşır" },
      { abbr: "Refresh Token", full: "Refresh Token (Opaque)", tr: "Yenileme Anahtarı — oturumu uzatır, tekrar giriş gerektirmez" },
      { abbr: "Opaque Token", full: "Opaque (Non-JWT) Token", tr: "İçeriği dışarıdan okunamayan kapalı jeton" },
      { abbr: "M2M", full: "Machine-to-Machine", tr: "Makineler Arası İletişim" },
      { abbr: "PAT", full: "Personal Access Token", tr: "Kişisel Erişim Jetonu" },
      { abbr: "RBAC", full: "Role-Based Access Control", tr: "Rol Tabanlı Erişim Kontrolü" },
      { abbr: "ABAC", full: "Attribute-Based Access Control", tr: "Öznitelik Tabanlı Erişim Kontrolü" },
      { abbr: "ACL", full: "Access Control List", tr: "Erişim Kontrol Listesi (izin ver / reddet)" },
      { abbr: "Token Exchange", full: "OAuth 2.0 Token Exchange (RFC 8693)", tr: "Farklı token türleri arası güvenli dönüşüm" },
    ],
  },
  {
    group: "Yapay Zeka & Gelecek",
    items: [
      { abbr: "MCP", full: "Model Context Protocol", tr: "Model Bağlam Protokolü" },
      { abbr: "A2A", full: "Agent-to-Agent", tr: "Ajan-Ajan İletişim Protokolü" },
    ],
  },
  {
    group: "Lisans & Yönetişim",
    items: [
      { abbr: "Apache 2.0", full: "Apache License 2.0", tr: "Serbest kullanım — değişiklik kapalı kalabilir" },
      { abbr: "MIT", full: "MIT License", tr: "Serbest kullanım — en az kısıtlayıcı lisans" },
      { abbr: "AGPL-3.0", full: "Affero General Public License 3.0", tr: "Değiştirip dağıtırsan kaynak açık olmalı" },
      { abbr: "MPL 2.0", full: "Mozilla Public License 2.0", tr: "Yalnızca değiştirilen dosyalar açık olmalı" },
      { abbr: "EE", full: "Enterprise Edition", tr: "Ücretli kurumsal eklenti katmanı" },
      { abbr: "CNCF", full: "Cloud Native Computing Foundation", tr: "Bulut Yerel Bilişim Vakfı (Linux Foundation)" },
      { abbr: "OpenSSF", full: "Open Source Security Foundation", tr: "Açık Kaynak Güvenlik Vakfı" },
    ],
  },
  {
    group: "Uyumluluk & Denetim",
    items: [
      { abbr: "KVKK", full: "Kişisel Verilerin Korunması Kanunu", tr: "Türkiye Veri Koruma Kanunu" },
      { abbr: "GDPR", full: "General Data Protection Regulation", tr: "AB Genel Veri Koruma Yönetmeliği" },
      { abbr: "SOC 2", full: "Service Organization Control 2", tr: "Servis Organizasyonu Denetim Standardı" },
      { abbr: "FIPS", full: "Federal Information Processing Standards", tr: "Federal Bilgi İşleme Standartları (ABD)" },
      { abbr: "FAPI", full: "Financial-grade API", tr: "Finansal Sınıf API Güvenlik Profili" },
      { abbr: "CVE", full: "Common Vulnerabilities and Exposures", tr: "Bilinen Güvenlik Açıkları Veritabanı" },
      { abbr: "FedRAMP", full: "Federal Risk and Authorization Management Program", tr: "Federal Risk Yönetim Programı (ABD)" },
    ],
  },
  {
    group: "Mimari & Kavram",
    items: [
      { abbr: "Webhook", full: "HTTP Callback", tr: "Olay tetiklemeli HTTP geri çağrısı" },
      { abbr: "Event-sourced", full: "Event Sourcing Pattern", tr: "Her değişikliğin kalıcı olay olarak kaydedilmesi" },
      { abbr: "Federation", full: "Identity Federation", tr: "Farklı sistemler arası kimlik güven köprüsü" },
      { abbr: "Realm", full: "Keycloak Isolation Unit", tr: "Keycloak'ta bağımsız kimlik alanı (tenant)" },
      { abbr: "Outpost", full: "Authentik External Service", tr: "Authentik'te ayrı süreç olarak çalışan servis" },
      { abbr: "Tenant", full: "Multi-tenancy Unit", tr: "Çok kiracılı yapıda bağımsız organizasyon birimi" },
      { abbr: "B2B", full: "Business-to-Business", tr: "İşletmeler Arası" },
      { abbr: "SIEM", full: "Security Information and Event Management", tr: "Güvenlik Bilgi ve Olay Yönetimi" },
      { abbr: "ADFS", full: "Active Directory Federation Services", tr: "Active Directory Federasyon Servisleri" },
      { abbr: "SSSD", full: "System Security Services Daemon", tr: "Linux Sistem Güvenlik Servisleri" },
      { abbr: "FreeIPA", full: "Free Identity, Policy and Audit", tr: "Red Hat Kimlik Yönetim Sistemi (LDAP + Kerberos)" },
      { abbr: "Middleware", full: "Middleware Layer", tr: "Uygulama ile kimlik doğrulama arası yazılım katmanı" },
    ],
  },
  {
    group: "Teknik & Genel",
    items: [
      { abbr: "SDK", full: "Software Development Kit", tr: "Yazılım Geliştirme Kiti" },
      { abbr: "API", full: "Application Programming Interface", tr: "Uygulama Programlama Arayüzü" },
      { abbr: "REST", full: "Representational State Transfer", tr: "Temsili Durum Aktarımı" },
      { abbr: "gRPC", full: "Google Remote Procedure Call", tr: "Google Uzak Prosedür Çağrısı" },
      { abbr: "connectRPC", full: "Connect RPC Protocol", tr: "gRPC uyumlu hafif RPC çerçevesi" },
      { abbr: "SaaS", full: "Software as a Service", tr: "Hizmet Olarak Yazılım" },
      { abbr: "TLS / SSL", full: "Transport Layer Security", tr: "İletişim Katmanı Güvenliği (şifreli bağlantı)" },
      { abbr: "Argon2", full: "Argon2id Password Hash Algorithm", tr: "Modern şifre karma algoritması" },
      { abbr: "MAU", full: "Monthly Active Users", tr: "Aylık Aktif Kullanıcı (fiyatlandırma birimi)" },
    ],
  },
];
