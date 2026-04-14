import { FrameworkCard } from "../framework-card";
import type { SlideProps } from "../types";

export default function SuperTokensSlide(p: SlideProps) {
  return (
    <FrameworkCard
      index={p.index}
      total={p.total}
      kicker="03 · Framework · 5/6"
      name="SuperTokens"
      stack="Java (core) · Backend + Frontend SDK"
      version="v11.4.3 (Şub 2026)"
      license="Apache 2.0 + ee/ (Enterprise)"
      score={6}
      website="https://supertokens.com/"
      repo="https://github.com/supertokens/supertokens-core"
      strengths={[
        "SDK'lar — Frontend: React · React Native · Vanilla JS · Vue (widget + headless mod) · Backend: Node.js · Go · Python · Pre-built UI widget'ları hazır login/signup ekranları sağlar (opsiyonel, headless de kullanılabilir)",
        "Protokoller — OAuth 2.0 provider (tam endpoint seti: /auth, /token, /introspect, /revoke, /consent) · SAML 2.0 (v11.3+ eklendi: SAML clients, request signing, IdP-initiated logins) · Passwordless (email/SMS) · Social Login · Email/Password · Phone/Password · Android native origins desteği (Passkey/WebAuthn)",
        "Feature set — MFA · TOTP · WebAuthn / Passkey · User Roles · User Management Dashboard (built-in admin UI) · Microservice Authentication (M2M) · Account Linking · Bulk Migration APIs (user metadata, TOTP devices toplu taşıma)",
        "3-parça mimari — Frontend SDK (session token yönetimi + UI) + Backend SDK (API'ler, session refresh) + Core (Java HTTP service, auth logic + DB) · Session verification backend SDK içinde olur → core'a DB hit yok, **yüksek throughput** (tek core instance'ı 10'larca bin kullanıcıyı kaldırabilir) · Embedded Tomcat · GraalVM planı (%95 memory azalımı hedefleniyor)",
        "Multi-tenancy — Apps + Tenants hierarchy (app_id + tenant_id keys) · Per-tenant config: token lifetimes, policies, OAuth clients, SAML clients · Bulk migration API'si ile tenant'lar arası taşıma · Tenant-scoped identity provider konfigürasyonu",
        "Lisans — Core **Apache 2.0** (ticari kullanım tamamen serbest, kullanıcı limiti yok) · On-premise deployment + kendi veritabanınız (100% kullanıcı verisi kontrolü, vendor lock-in minimum) · Self-hosted production ücretsiz",
      ]}
      weaknesses={[
        "Federation (LDAP / AD / Kerberos / SSSD) yok — kurumsal directory entegrasyonu için köprü gerekir",
        "SCIM 2.0 provisioning API yok — user provisioning standart arayüzü eksik",
        "\"ee/\" dizini SuperTokens Enterprise License ile korunuyor (ücretli abonelik production kullanımı için gerekir) — hangi özelliklerin bu tier'da olduğu README'de net değil, docs'tan teyit önerilir",
        "Keycloak / Zitadel kadar kurumsal adopter referansı yok — daha yeni proje, geniş ölçekli üretim örnekleri daha az",
        "MCP (Model Context Protocol) desteği yok — Logto ve Keycloak'ın aksine AI-auth flow için hazır altyapı yok",
      ]}
      verdict="Auth0 / Cognito'ya ticari bir open-core alternatif — 3-parça mimari (Frontend SDK + Backend SDK + Core) ile klasik IAM karmaşıklığını sadeleştirir. Passwordless, Social, Email/Password, Phone, WebAuthn, MFA ve OAuth 2.0 provider + SAML 2.0 (v11.3+) built-in. Session verification backend SDK'da core'a gitmeden çalıştığı için yüksek throughput. Federation (LDAP/AD) ve SCIM yok — 'klasik IAM' değil 'auth platformu' konumunda. SaaS'lar ve mobile app'ler için optimize."
      warn="Lisans: Core Apache 2.0 · ee/ dizini 'SuperTokens Enterprise License' (ücretli abonelik) ile korunuyor — test/dev kullanımı serbest ama production için subscription gerektiren özellikler olabilir. Feature listesi docs'tan teyit edilmeli."
    />
  );
}
