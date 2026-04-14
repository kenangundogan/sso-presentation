/**
 * Single source of truth for all framework metadata.
 *
 * Every slide that references framework data (framework-overview, decision,
 * individual framework cards, architecture, platforms) imports from here.
 * This eliminates cross-slide inconsistencies — update once, reflected everywhere.
 */

/* ---------------------------------------------------------------- *
 * Types
 * ---------------------------------------------------------------- */

export type FrameworkId =
  | "keycloak"
  | "authentik"
  | "zitadel"
  | "logto"
  | "supertokens"
  | "casdoor";

/** Core metadata shown in framework cards and overview. */
export type FrameworkMeta = {
  id: FrameworkId;
  name: string;
  kicker: string;
  stack: string;
  license: string;
  version: string;
  release: string;
  releaseDate: string;
  firstRelease: string;
  website: string;
  repo: string;
  stars: string;
  contributors: string;
  score: number;
};

/** Boolean feature flags — maps to 10-criteria scoring system. */
export type FrameworkFeatures = {
  openSource: boolean;
  selfHosted: boolean;
  managedCloud: boolean;
  multiTenancy: boolean;
  oauth: boolean;
  saml: boolean;
  ldap: boolean;
  scim: boolean;
  mfa: boolean;
  sdkNextJs: boolean;
  securityAudit: boolean;
  mcp: boolean;
};

/** Row values for the decision comparison table. */
export type FrameworkComparison = {
  apiStyle: string;
  governance: string;
  cloud: string;
  ldap: string;
  radius: string;
  saml: string;
  mcp: string;
  multiTenancy: string;
  auditLog: string;
  adminUI: string;
  sdkCount: string;
  setupDifficulty: string;
};

/** Content for the framework deep-dive card. */
export type FrameworkContent = {
  strengths: readonly string[];
  weaknesses: readonly string[];
  verdict: string;
  warn?: string;
};

export type Framework = FrameworkMeta & {
  features: FrameworkFeatures;
  comparison: FrameworkComparison;
  content: FrameworkContent;
};

/* ---------------------------------------------------------------- *
 * Data
 * ---------------------------------------------------------------- */

export const FRAMEWORKS: ReadonlyArray<Framework> = [
  {
    id: "keycloak",
    name: "Keycloak",
    kicker: "03 · Framework · 1/6",
    stack: "Java · Quarkus",
    license: "Apache 2.0",
    version: "26.6.0 (Nisan 2026)",
    release: "v26.6.0",
    releaseDate: "5 Nisan 2026",
    firstRelease: "2014",
    website: "https://www.keycloak.org/",
    repo: "https://github.com/keycloak/keycloak",
    stars: "33.9k",
    contributors: "1500+",
    score: 8,
    features: {
      openSource: true,
      selfHosted: true,
      managedCloud: true,
      multiTenancy: true,
      oauth: true,
      saml: true,
      ldap: true,
      scim: false,
      mfa: true,
      sdkNextJs: false,
      securityAudit: true,
      mcp: true,
    },
    comparison: {
      apiStyle: "REST",
      governance: "CNCF Incubating",
      cloud: "Red Hat (ticari)",
      ldap: "Yerleşik",
      radius: "Yok",
      saml: "Yerleşik",
      mcp: "Partial",
      multiTenancy: "Realm",
      auditLog: "Sınırlı",
      adminUI: "Karmaşık",
      sdkCount: "6",
      setupDifficulty: "Zor",
    },
    content: {
      strengths: [
        "SDK'lar — Resmi: Java (server + SAML adapter + SPI extensions) · keycloak-js (browser / SPA JavaScript) · keycloak-nodejs-connect (Node.js adapter) · @keycloak/keycloak-admin-client (Node.js Admin API client) · mod_auth_openidc + mod_auth_mellon (Apache httpd modülleri) · Quickstart örnekleri: Spring Boot, Quarkus, JBoss/WildFly, Node.js, Angular, React, JavaScript, Python (Flask) · Standart temelli yaklaşım: OAuth 2.0 / OIDC / SAML 2.0 uyumlu herhangi bir dilin native kütüphanesi çalışır (Python, Go, PHP, Ruby, .NET, Rust, Elixir) — vendor lock-in önleme felsefesi",
        "CNCF Incubating · OpenSSF Best Practices + OpenSSF Scorecard + CLOMonitor — vakıf yönetişimi ve bağımsız güvenlik denetimi",
        "Sertifikasyonlar — OpenID Connect Certified (Core, Discovery, Dynamic Registration, Session, RP/Back/Front-Channel Logout, CIBA) · FAPI 1.0 Baseline + Advanced + JARM + CIBA Certified · FAPI 2.0 Security Profile + Message Signing Passed · FIPS 140-2 Certified (Bouncy Castle FIPS)",
        "Protokol kapsamı — OAuth 2.0 + 2.1 · PKCE · Token Exchange (RFC 8693) · mTLS Client Auth (RFC 8705) · Pushed Authorization Requests (RFC 9126) · DPoP (RFC 9449) · JAR (RFC 9101) · JWT Client Auth · Device Flow (RFC 8628) · Dynamic Client Registration (RFC 7591/7592) · Token Introspection/Revocation · UMA 2.0 · SAML 2.0 (tam aralık) · WebAuthn (Passkey) · MCP Authorization Server (2025-03-26 Supported · 2025-06-18/11-25 Partial) + VS Code desktop MCP entegrasyonu",
        "Federation & Identity Brokering — LDAP · Kerberos · SSSD · FreeIPA (Red Hat IdM) · OIDC + SAML identity brokering · fine-grained Authorization Services (UMA 2.0 Grant + Federated Authorization)",
        "Yerleşik kurumsal kullanıcılar — CERN · Hitachi · Hewlett-Packard Enterprise · UnitedHealthcare · Wayfair · Sportsbet · Accenture · Capgemini · Bundesagentur für Arbeit / Bundesversicherungsamt (Alman federal kurumlar) · Storebrand · PharmaPartners · AlmaLinux Foundation",
      ],
      weaknesses: [
        "Java (Quarkus) stack — TypeScript / Node.js ekipler için öğrenme eğrisi var",
        "Geniş protokol kapsamı yüksek konfigürasyon yüzeyi getiriyor — tüm spec'leri anlamak zaman alır",
        "Resmi yönetilen bulut servisi yok — self-host veya Red Hat Build of Keycloak (ticari) alternatif",
        "Production RAM ihtiyacı: tipik 1–2 GB+",
      ],
      verdict: "Endüstri referans IAM — 2014'ten beri production, CNCF Incubating, OpenID Connect + FAPI + FIPS 140-2 sertifikalı. En geniş protokol kapsamı (OAuth 2.0/2.1, SAML 2.0, UMA 2.0, MCP) ve en derin federation desteği (LDAP, Kerberos, SSSD, FreeIPA). Enterprise ve kamu sektörü referansları (CERN, Hitachi, HP Enterprise, Alman federal kurumları). Lisans tamamen Apache 2.0 — ticari kullanım serbest.",
    },
  },
  {
    id: "authentik",
    name: "Authentik",
    kicker: "03 · Framework · 2/6",
    stack: "Python · Django · Go",
    license: "MIT + EE",
    version: "2026.2.3-rc1 (Şub 2026)",
    release: "2026.2.3-rc1",
    releaseDate: "10 Şub 2026",
    firstRelease: "2020",
    website: "https://goauthentik.io/",
    repo: "https://github.com/goauthentik/authentik",
    stars: "21.0k",
    contributors: "530+",
    score: 8,
    features: {
      openSource: true,
      selfHosted: true,
      managedCloud: true,
      multiTenancy: true,
      oauth: true,
      saml: true,
      ldap: true,
      scim: true,
      mfa: true,
      sdkNextJs: false,
      securityAudit: true,
      mcp: false,
    },
    comparison: {
      apiStyle: "REST",
      governance: "Bağımsız şirket",
      cloud: "Enterprise tier",
      ldap: "Outpost",
      radius: "Outpost",
      saml: "Yerleşik",
      mcp: "Yok",
      multiTenancy: "Policy",
      auditLog: "Var",
      adminUI: "Flow editor",
      sdkCount: "—",
      setupDifficulty: "Orta",
    },
    content: {
      strengths: [
        "SDK'lar — Resmi birinci-taraf SDK yok (Keycloak gibi standart-first yaklaşım). Uygulamalar OAuth 2.0 / OIDC / SAML / LDAP / RADIUS üzerinden herhangi bir dilin native kütüphanesiyle bağlanır. authentik Agent endpoint device management için ayrı olarak sunulur",
        "Protokoller (Providers) — OAuth 2.0 + OIDC (device flow, M2M, WebFinger, GitHub compatibility, front/back-channel logout) · SAML 2.0 (Single Logout) · LDAP · RADIUS · SCIM · Proxy provider (reverse proxy SSO) · WS-Federation · RAC (Remote Access Control) · SSF (Shared Signals Framework, Enterprise)",
        "Görsel Flow Builder + 20+ Stage — Sürükle-bırak flow editörü: Authenticator (WebAuthn/Passkey, TOTP, SMS, Email, Duo, Static, Validate) · mTLS client cert · Captcha · Consent · Identification · Password · Prompt · Invitation · Email · Redirect · Source · Endpoint (Chrome Device Trust) · Deny · User (login/logout/write/delete)",
        "Outpost mimarisi — LDAP, RADIUS ve Proxy provider'ları Go ile yazılmış ayrı süreçler olarak çalışır. Embedded outpost ana sunucuya dahil; external outpost'lar Docker Compose / Kubernetes / manuel deploy edilebilir",
        "Sources (kimlik kaynakları) — Sosyal: Apple, Discord, Entra ID, Facebook, GitHub, Google, Keycloak, Mailcow, Okta, Plex, Shibboleth, Telegram, Twitch, X (Twitter), WeChat · Protokol: Kerberos, LDAP, OAuth 2.0, SAML 2.0, SCIM 2.0",
        "Enterprise özellikleri — Google Workspace sync · Microsoft Entra ID sync · Chrome Enterprise Device Trust · Shared Signals Framework (SSF) · mTLS stage · Password history compliance · Enhanced audit logging (maps, charts, CSV export) · Enterprise Plus: FIPS-compliant deployments (FedRAMP)",
        "Güvenlik denetimleri — 3 bağımsız audit: Cure53 (Haziran 2023) · Cobalt (Kasım 2024) · IncludeSec (Eylül 2025)",
      ],
      weaknesses: [
        "Python / Django stack — TypeScript / Node.js ekipler için ekosistem uyumsuzluğu (ancak apps OIDC/SAML ile bağlanır, stack'ten bağımsız çalışır)",
        "Resmi birinci-taraf frontend SDK yok — Keycloak gibi standartlar üzerinden bağlanılır (Auth.js, next-auth providers kullanılabilir)",
        "Enterprise özellikleri (Google Workspace sync, Entra ID sync, SSF, Chrome Device Trust, mTLS stage, FIPS) yalnızca ücretli abonelik ile",
        "Resmi yönetilen bulut servisi yalnızca Enterprise tier'da — self-host Community sürümü serbest",
      ],
      verdict: "Görsel flow editörü ve Outpost mimarisi ile production-sınıfı IdP. En güçlü yanı: sürükle-bırak flow tasarımı, LDAP + RADIUS + Proxy için ayrı-süreç outpost'lar, 3 bağımsız güvenlik denetimi kanıtı. Enterprise tier Chrome Enterprise Device Trust, FIPS/FedRAMP uyumu, SSF (real-time security events) ve Workspace/Entra senkronizasyonu ekliyor. Homelab'den büyük production'a ölçeklenebilir.",
      warn: "Lisans: Kod MIT · docs CC BY-SA 4.0 · authentik/enterprise/ dizini kurumsal abonelik gerektirir.",
    },
  },
  {
    id: "zitadel",
    name: "Zitadel",
    kicker: "03 · Framework · 3/6",
    stack: "Go · PostgreSQL",
    license: "AGPL-3.0",
    version: "v4.13.1 (Nis 2026)",
    release: "v4.13.1",
    releaseDate: "1 Nis 2026",
    firstRelease: "2020",
    website: "https://zitadel.com/",
    repo: "https://github.com/zitadel/zitadel",
    stars: "13.5k",
    contributors: "260+",
    score: 9,
    features: {
      openSource: true,
      selfHosted: true,
      managedCloud: true,
      multiTenancy: true,
      oauth: true,
      saml: true,
      ldap: true,
      scim: true,
      mfa: true,
      sdkNextJs: true,
      securityAudit: true,
      mcp: false,
    },
    comparison: {
      apiStyle: "REST + gRPC + connectRPC",
      governance: "Bağımsız şirket",
      cloud: "zitadel.com",
      ldap: "Var",
      radius: "Yok",
      saml: "Yerleşik",
      mcp: "Yok",
      multiTenancy: "Instance → Org → Project",
      auditLog: "Event-sourced (tam akış)",
      adminUI: "Modern",
      sdkCount: "5",
      setupDifficulty: "Kolay",
    },
    content: {
      strengths: [
        "SDK'lar — Quick-start örnekleri (23 framework): Angular · Astro · Django · .NET · Express.js · FastAPI · Fastify · Flask · Flutter · Go · Hono · Java / Spring · Laravel · NestJS · Next.js · Nuxt.js · React · Qwik · SolidStart · Svelte / SvelteKit · Symfony · Vue.js · Resmi Client Libraries: Java · Node.js (@zitadel/client - MIT) · PHP · Python · Ruby · Herhangi bir OIDC uyumlu kütüphane doğal çalışır",
        "API-first tasarım — connectRPC + gRPC + HTTP/JSON REST (V1 ve V2 API) · Her kaynak ve eylem tüm transport'larda erişilebilir · OpenAPI schema · Typed code generation",
        "Event-sourced çekirdek — her mutation immutable event olarak yazılır · 'Relational core, event-driven soul' · Kapsamlı audit stream (yalnızca log değil, komple event akışı) · External SIEM'lere webhook streaming · Actions v2 ile custom code + token enrichment",
        "Native multi-tenancy — 3-katmanlı hiyerarşi: Instance → Organizations → Projects · Infrastructure-level tenants (realm'lerden yüksek ölçek) · Unlimited B2B Organizations · İzole data + multi-level policy scoping · Custom domain + branding per org",
        "Protokoller & Sertifikasyonlar — OpenID Connect Certified (OpenID Foundation) · SAML 2.0 · SCIM 2.0 (server) · OAuth 2.0/2.1 · Token Exchange + Impersonation · Token Introspection · Device Authorization · Passkeys (FIDO2/WebAuthn) · MFA: TOTP, OTP Email, OTP SMS, U2F · Machine-to-machine: JWT Profile, PAT, Client Credentials · LDAP (source)",
        "Production operations — SaaS + self-host **aynı codebase** (tam parity) · Zero-downtime updates · Horizontal scalability (external session store gerekmez) · Hosted Login V2 (self-service registration, email/phone verification) · Cloud bölgeleri: US · EU · AU · CH (İsviçre) · Pay-as-you-go (kredi kartı gerekmiyor) · PostgreSQL ≥ 14",
        "Lisans esnekliği — Core AGPL-3.0-only (server'i modify + dağıtımı için) · MIT istisnaları: apps/login/ + packages/zitadel-client/ + packages/zitadel-proto/ · Apache 2.0 istisnaları: proto/ + apps/docs/ · Yani @zitadel/client kullanan uygulama kodunuz AGPL'yi tetiklemez — MIT'te kalır",
      ],
      weaknesses: [
        "Core AGPL-3.0 — server kaynak kodunu değiştirip dağıtacak projeler için açık-kaynak yükümlülüğü (uygulama kodunuz @zitadel/client MIT kullanıyorsa etkilenmez, yine de hukuki inceleme önerilir)",
        "CockroachDB desteği kaldırıldı — yalnızca PostgreSQL ≥ 14",
        "Go + event-sourcing stack — TypeScript/Node.js ekipler için mimari öğrenme eğrisi (ancak uygulamalar OIDC + REST/gRPC ile stack'ten bağımsız bağlanır)",
      ],
      verdict: "API-first ve event-sourced mimariyle geliştirici-odaklı kurumsal IAM. Benzersiz Instance → Organizations → Projects 3-katmanlı multi-tenancy ile B2B SaaS için en sofistike teknik mimari. SaaS ve self-host aynı codebase'de (parity), zero-downtime update ve horizontal scale. OpenID Connect Certified. connectRPC + gRPC + REST tam API tipi esnekliği. Lisans yapısı: core AGPL-3.0 ama client kütüphaneleri (@zitadel/client) MIT — uygulama kodunuz etkilenmez.",
      warn: "AGPL-3.0 core: Zitadel server'ini modify edip dağıtacak projeler açık-kaynak yükümlülüğüne tabi. Sadece self-host + uygulamalarınızdan REST/gRPC ile bağlanıyorsanız — ki olağan senaryo — yük yok. @zitadel/client zaten MIT.",
    },
  },
  {
    id: "logto",
    name: "Logto",
    kicker: "03 · Framework · 4/6",
    stack: "TypeScript · Node.js",
    license: "MPL 2.0",
    version: "v1.38.0 (Mart 2026)",
    release: "v1.38.0",
    releaseDate: "31 Mart 2026",
    firstRelease: "2022",
    website: "https://logto.io/",
    repo: "https://github.com/logto-io/logto",
    stars: "11.9k",
    contributors: "94+",
    score: 8,
    features: {
      openSource: true,
      selfHosted: true,
      managedCloud: true,
      multiTenancy: true,
      oauth: true,
      saml: true,
      ldap: false,
      scim: false,
      mfa: true,
      sdkNextJs: true,
      securityAudit: true,
      mcp: true,
    },
    comparison: {
      apiStyle: "REST",
      governance: "Bağımsız şirket",
      cloud: "cloud.logto.io",
      ldap: "Sınırlı",
      radius: "Yok",
      saml: "Yerleşik",
      mcp: "Var",
      multiTenancy: "Organizations",
      auditLog: "Sınırlı",
      adminUI: "Çok Başarılı",
      sdkCount: "30+",
      setupDifficulty: "Çok Kolay",
    },
    content: {
      strengths: [
        "Resmi SDK'lar — Web: Next.js (App + Pages Router), React, Vue, Angular, Nuxt, SvelteKit, Vanilla JS, Auth.js · Mobil: iOS (Swift), Android (Kotlin/Java), Flutter, FlutterFlow, Expo (React Native), Capacitor JS, Chrome Extension · Backend: Go, Python, PHP, Ruby, Java Spring Boot, Express, Passport.js, .NET Core (MVC, Razor Pages, Blazor Server, Blazor WASM) · Platform: WordPress (+ plugin), Webflow, Hasura, Supabase · Generic: Device Flow, Machine-to-Machine, Traditional Web · MCP Server ile AI-asistent entegrasyon",
        "Protokoller — OAuth 2.1 · OpenID Connect · SAML 2.0 · Logto kendisi IdP olabilir (third-party app + consent flow + SAML app)",
        "Hazır connectorlar — Sosyal (29+): Google, Apple, Microsoft, GitHub (OAuth App + GitHub App), GitLab, Facebook, LinkedIn, Discord, Slack, X (Twitter), Kakao, Naver, Line, WeChat (Native + Web), WeCom, Alipay (Native + Web), Amazon, DingTalk, Feishu, Hugging Face, KOOK, Patreon, Xiaomi + generic OAuth 2.0 / OIDC · E-posta: SendGrid, Mailgun, Postmark, AWS SES, Aliyun Direct Mail, SMTP, HTTP · SMS: Twilio, Vonage, Tencent, Aliyun, GatewayAPI, SMS Aero, YunPian, HTTP · Enterprise SSO: Microsoft Entra ID (OIDC + SAML), Google Workspace, Okta, generic OIDC / SAML · Authorization: Permit.io",
        "Feature set — MFA (Passkey/WebAuthn, TOTP, backup codes) · M2M · Personal Access Token · Impersonation · Passwordless (email/SMS) · Multi-tenancy (Organizations) native · Organization RBAC · Secret Vault · Omni sign-in experience (tek kurulum çoklu app)",
        "SOC 2 Type II certified · Argon2 password hash · TLS everywhere · Cloud: EU / US / AU / JP · 50K MAU'ya kadar ücretsiz · self-hosted tamamen serbest (MPL 2.0)",
      ],
      weaknesses: [
        "2022'de kuruldu — Keycloak kadar uzun bir geçmişi yok",
        "MPL 2.0 — değiştirilen Logto dosyaları açık kaynak olmalı (kendi uygulama kodunuz bundan etkilenmez)",
        "Self-hosted tarafta enterprise-grade referans sayısı Keycloak'a göre daha az",
      ],
      verdict: "Modern auth infrastructure — SaaS ve AI uygulamaları için optimize, geliştirici deneyimi öncelikli. OAuth 2.1 / OIDC / SAML karmaşıklığını soyutlayıp 30+ framework için hazır entegrasyon ve Management API sunar. Token-based pay-as-you-go fiyatlandırma.",
      warn: "MPL 2.0: Yalnızca değiştirdiğiniz Logto dosyaları açık olmalı. Kendi uygulama kodunuz (Next.js, Laravel vs.) kapalı kaynak kalır.",
    },
  },
  {
    id: "supertokens",
    name: "SuperTokens",
    kicker: "03 · Framework · 5/6",
    stack: "Java · çok dilli SDK",
    license: "Apache 2.0 + EE",
    version: "v11.4.3 (Şub 2026)",
    release: "v11.4.3",
    releaseDate: "8 Şub 2026",
    firstRelease: "2020",
    website: "https://supertokens.com/",
    repo: "https://github.com/supertokens/supertokens-core",
    stars: "15.0k",
    contributors: "32+",
    score: 6,
    features: {
      openSource: true,
      selfHosted: true,
      managedCloud: true,
      multiTenancy: true,
      oauth: true,
      saml: true,
      ldap: false,
      scim: false,
      mfa: true,
      sdkNextJs: true,
      securityAudit: false,
      mcp: false,
    },
    comparison: {
      apiStyle: "REST (SDK)",
      governance: "Bağımsız şirket",
      cloud: "supertokens.com",
      ldap: "Yok",
      radius: "Yok",
      saml: "v11.3+",
      mcp: "Yok",
      multiTenancy: "App + Tenant",
      auditLog: "Sınırlı",
      adminUI: "Sade dashboard",
      sdkCount: "7",
      setupDifficulty: "Orta (3-parça)",
    },
    content: {
      strengths: [
        "SDK'lar — Frontend: React · React Native · Vanilla JS · Vue (widget + headless mod) · Backend: Node.js · Go · Python · Pre-built UI widget'ları hazır login/signup ekranları sağlar (opsiyonel, headless de kullanılabilir)",
        "Protokoller — OAuth 2.0 provider (tam endpoint seti: /auth, /token, /introspect, /revoke, /consent) · SAML 2.0 (v11.3+ eklendi: SAML clients, request signing, IdP-initiated logins) · Passwordless (email/SMS) · Social Login · Email/Password · Phone/Password · Android native origins desteği (Passkey/WebAuthn)",
        "Feature set — MFA · TOTP · WebAuthn / Passkey · User Roles · User Management Dashboard (built-in admin UI) · Microservice Authentication (M2M) · Account Linking · Bulk Migration APIs (user metadata, TOTP devices toplu taşıma)",
        "3-parça mimari — Frontend SDK (session token yönetimi + UI) + Backend SDK (API'ler, session refresh) + Core (Java HTTP service, auth logic + DB) · Session verification backend SDK içinde olur → core'a DB hit yok, **yüksek throughput** (tek core instance'ı 10'larca bin kullanıcıyı kaldırabilir) · Embedded Tomcat · GraalVM planı (%95 memory azalımı hedefleniyor)",
        "Multi-tenancy — Apps + Tenants hierarchy (app_id + tenant_id keys) · Per-tenant config: token lifetimes, policies, OAuth clients, SAML clients · Bulk migration API'si ile tenant'lar arası taşıma · Tenant-scoped identity provider konfigürasyonu",
        "Lisans — Core **Apache 2.0** (ticari kullanım tamamen serbest, kullanıcı limiti yok) · On-premise deployment + kendi veritabanınız (100% kullanıcı verisi kontrolü, vendor lock-in minimum) · Self-hosted production ücretsiz",
      ],
      weaknesses: [
        "Federation (LDAP / AD / Kerberos / SSSD) yok — kurumsal directory entegrasyonu için köprü gerekir",
        "SCIM 2.0 provisioning API yok — user provisioning standart arayüzü eksik",
        "\"ee/\" dizini SuperTokens Enterprise License ile korunuyor (ücretli abonelik production kullanımı için gerekir) — hangi özelliklerin bu tier'da olduğu README'de net değil, docs'tan teyit önerilir",
        "Keycloak / Zitadel kadar kurumsal adopter referansı yok — daha yeni proje, geniş ölçekli üretim örnekleri daha az",
        "MCP (Model Context Protocol) desteği yok — Logto ve Keycloak'ın aksine AI-auth flow için hazır altyapı yok",
      ],
      verdict: "Auth0 / Cognito'ya ticari bir open-core alternatif — 3-parça mimari (Frontend SDK + Backend SDK + Core) ile klasik IAM karmaşıklığını sadeleştirir. Passwordless, Social, Email/Password, Phone, WebAuthn, MFA ve OAuth 2.0 provider + SAML 2.0 (v11.3+) built-in. Session verification backend SDK'da core'a gitmeden çalıştığı için yüksek throughput. Federation (LDAP/AD) ve SCIM yok — 'klasik IAM' değil 'auth platformu' konumunda. SaaS'lar ve mobile app'ler için optimize.",
      warn: "Lisans: Core Apache 2.0 · ee/ dizini 'SuperTokens Enterprise License' (ücretli abonelik) ile korunuyor — test/dev kullanımı serbest ama production için subscription gerektiren özellikler olabilir. Feature listesi docs'tan teyit edilmeli.",
    },
  },
  {
    id: "casdoor",
    name: "Casdoor",
    kicker: "03 · Framework · 6/6",
    stack: "Go · React",
    license: "Apache 2.0",
    version: "v3.13.0 (Şub 2026)",
    release: "v3.13.0",
    releaseDate: "13 Şub 2026",
    firstRelease: "2021",
    website: "https://casdoor.ai/",
    repo: "https://github.com/casdoor/casdoor",
    stars: "13.3k",
    contributors: "284+",
    score: 8,
    features: {
      openSource: true,
      selfHosted: true,
      managedCloud: true,
      multiTenancy: true,
      oauth: true,
      saml: true,
      ldap: true,
      scim: true,
      mfa: true,
      sdkNextJs: false,
      securityAudit: false,
      mcp: true,
    },
    comparison: {
      apiStyle: "REST",
      governance: "Casbin ekosistemi",
      cloud: "casdoor.com",
      ldap: "Server + Client",
      radius: "Server",
      saml: "Yerleşik",
      mcp: "Var + A2A",
      multiTenancy: "Organization",
      auditLog: "Webhook events",
      adminUI: "Yoğun (dense)",
      sdkCount: "18+",
      setupDifficulty: "Kolay (tek binary)",
    },
    content: {
      strengths: [
        "Protokoller (en geniş set) — OAuth 2.0 / 2.1 · OpenID Connect (well-known discovery) · SAML 2.0 · **CAS** (Central Authentication Service, bu listede benzersiz) · LDAP (server + client) · Kerberos · RADIUS (server) · SCIM · WebAuthn / Passkey · TOTP / MFA · **Face ID (biyometrik)** · **Web3 / MetaMask** · Dynamic Client Registration (DCR) · MCP (AI auth gateway) · A2A (Agent-to-Agent)",
        "29 Identity Provider bağlayıcısı — Sosyal: Google · GitHub · GitLab · Gitee · Facebook · Twitter · LinkedIn · Telegram · Enterprise: Okta · Azure AD B2C · ADFS · Casdoor (self-federation) · Çin odaklı: Alipay · Baidu · Bilibili · DingTalk · Douyin · QQ · WeChat (Native + Miniprogram + Mobile) · Weibo · Kwai · Lark · Infoflow · WeCom · Web3: MetaMask · Web3Onboard · Custom + Goth (çoklu-provider library)",
        "Casbin tabanlı fine-grained authorization — Casdoor, Casbin ekosisteminden geliyor (authz engine'in yaratıcıları) · Organization + Group + Role + Permission + Rule hiyerarşisi · ACL / RBAC / ABAC / RESTful authz modelleri desteklenir",
        "**SaaS billing built-in** (bu listede benzersiz) — Plan + Pricing + Subscription + Order + Payment + Product yönetimi · 14 payment provider: Stripe · PayPal · Alipay · WeChat Pay · Adyen · Airwallex · Paddle · LemonSqueezy · Polar · FastSpring · Greengage · Balance · Dummy · Customer subscription + invoice akışları hazır",
        "Entegrasyon genişliği — 12 Storage backend (AWS S3, Azure, Google Cloud, Aliyun OSS, Tencent COS, MinIO, local FS, Synology NAS, Qiniu, CUCloud, Casdoor self) · 21 Notification channel (Slack, Discord, MS Teams, Matrix, DingTalk, Telegram, Lark, Line, Google Chat, Rocket.Chat, Viber, Reddit, Bark, Pushover, Pushbullet, Web Push, WeCom, webhook, vs.) · 6 Email (SendGrid, Resend, SMTP, Azure ACS, Aliyun, HTTP) · 7 Captcha (reCAPTCHA, hCaptcha, Turnstile, Geetest, Aliyun, default) · 2 Identity Verification (Jumio, Aliyun IDV)",
        "Enterprise ekstralar — 9 password hash algoritması (Argon2id, Bcrypt, PBKDF2, PBKDF2-Django, SHA256-salt, SHA512-salt, MD5-user-salt, plain) · Prometheus metrics · Webhook events · SCIM server · Kerberos controller · Syncer (cross-system data sync) · Ticket system · Certificate management (DNS, ECC) · Tek binary deploy (Go) · Docker + Kubernetes + Helm",
        "AI-first konumlanma — MCP Server + A2A protokolleri built-in · AI agent authorization için Model Context Protocol gateway olarak çalışır · Face ID biyometrik doğrulama entegrasyonu · Identity verification (Jumio) ile KYC akışları",
      ],
      weaknesses: [
        "Geçmiş güvenlik açıkları (CVE-2022-24124 SQL injection) — production öncesi bağımsız güvenlik denetimi önerilir; feature breadth yüksek olduğundan attack surface geniş",
        "README minimal (5-satır tagline + link'ler) — feature envanteri için casdoor.org dokümantasyonu veya repo yapısı incelemesi gerekir, dokümantasyon Batı standartlarına göre daha dağınık",
        "Ekosistem Çin odaklı — IdP bağlayıcılarının çoğu Çin sağlayıcıları (WeChat, Alipay, DingTalk, ...) · Avrupa/US kurumsal adopter referansı Keycloak/Zitadel seviyesinde değil",
        "Admin UI yoğun (dense) — çok özellik aynı arayüzde sıkışmış, yeni kullanıcı için başlangıçta steep learning curve",
        "Bağımsız güvenlik denetim raporu yayınlanmamış — Authentik'in Cure53/Cobalt/IncludeSec zinciri gibi bir audit izi yok",
      ],
      verdict: "Casbin ekosisteminden gelen özellik-yoğun IAM + SaaS platformu. OAuth/OIDC/SAML/CAS/LDAP/Kerberos/RADIUS/SCIM + MCP/A2A + Face ID + Web3 ile en geniş protokol seti (bu 6 framework içinde CAS ve Web3/Face ID yalnızca Casdoor'da var). Built-in billing/subscription, 29 social IdP (Çin + Batı), 12 storage + 21 notification entegrasyonu — benzer genişliği sunan tek framework. Go + React stack, tek binary deploy. En uygun kullanım: Çin pazarına hitap eden SaaS, biyometri gerektiren fintech / healthcare, AI-agent gateway ihtiyacı.",
      warn: "Production öncesi mutlaka bağımsız güvenlik denetimi yaptırılmalı — CVE geçmişi (2022) ve geniş feature yüzeyi nedeniyle. Casdoor/casbin ekosistemindeki aktif gelişmeleri takip etmek önemli.",
    },
  },
];

/* ---------------------------------------------------------------- *
 * Helpers
 * ---------------------------------------------------------------- */

/** Lookup a framework by id. */
export function getFramework(id: FrameworkId): Framework {
  const fw = FRAMEWORKS.find((f) => f.id === id);
  if (!fw) throw new Error(`Unknown framework: ${id}`);
  return fw;
}

/** All framework ids in slide order. */
export const FRAMEWORK_IDS: ReadonlyArray<FrameworkId> = FRAMEWORKS.map((f) => f.id);
