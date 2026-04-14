import { FrameworkCard } from "../framework-card";
import type { SlideProps } from "../types";

export default function ZitadelSlide(p: SlideProps) {
  return (
    <FrameworkCard
      index={p.index}
      total={p.total}
      kicker="03 · Framework · 3/6"
      name="Zitadel"
      stack="Go · PostgreSQL"
      version="v4.13.1 (Nis 2026)"
      license="AGPL-3.0 (MIT/Apache istisnalarla)"
      score={9}
      website="https://zitadel.com/"
      repo="https://github.com/zitadel/zitadel"
      strengths={[
        "SDK'lar — Quick-start örnekleri (23 framework): Angular · Astro · Django · .NET · Express.js · FastAPI · Fastify · Flask · Flutter · Go · Hono · Java / Spring · Laravel · NestJS · Next.js · Nuxt.js · React · Qwik · SolidStart · Svelte / SvelteKit · Symfony · Vue.js · Resmi Client Libraries: Java · Node.js (@zitadel/client - MIT) · PHP · Python · Ruby · Herhangi bir OIDC uyumlu kütüphane doğal çalışır",
        "API-first tasarım — connectRPC + gRPC + HTTP/JSON REST (V1 ve V2 API) · Her kaynak ve eylem tüm transport'larda erişilebilir · OpenAPI schema · Typed code generation",
        "Event-sourced çekirdek — her mutation immutable event olarak yazılır · 'Relational core, event-driven soul' · Kapsamlı audit stream (yalnızca log değil, komple event akışı) · External SIEM'lere webhook streaming · Actions v2 ile custom code + token enrichment",
        "Native multi-tenancy — 3-katmanlı hiyerarşi: Instance → Organizations → Projects · Infrastructure-level tenants (realm'lerden yüksek ölçek) · Unlimited B2B Organizations · İzole data + multi-level policy scoping · Custom domain + branding per org",
        "Protokoller & Sertifikasyonlar — OpenID Connect Certified (OpenID Foundation) · SAML 2.0 · SCIM 2.0 (server) · OAuth 2.0/2.1 · Token Exchange + Impersonation · Token Introspection · Device Authorization · Passkeys (FIDO2/WebAuthn) · MFA: TOTP, OTP Email, OTP SMS, U2F · Machine-to-machine: JWT Profile, PAT, Client Credentials · LDAP (source)",
        "Production operations — SaaS + self-host **aynı codebase** (tam parity) · Zero-downtime updates · Horizontal scalability (external session store gerekmez) · Hosted Login V2 (self-service registration, email/phone verification) · Cloud bölgeleri: US · EU · AU · CH (İsviçre) · Pay-as-you-go (kredi kartı gerekmiyor) · PostgreSQL ≥ 14",
        "Lisans esnekliği — Core AGPL-3.0-only (server'i modify + dağıtımı için) · MIT istisnaları: apps/login/ + packages/zitadel-client/ + packages/zitadel-proto/ · Apache 2.0 istisnaları: proto/ + apps/docs/ · Yani @zitadel/client kullanan uygulama kodunuz AGPL'yi tetiklemez — MIT'te kalır",
      ]}
      weaknesses={[
        "Core AGPL-3.0 — server kaynak kodunu değiştirip dağıtacak projeler için açık-kaynak yükümlülüğü (uygulama kodunuz @zitadel/client MIT kullanıyorsa etkilenmez, yine de hukuki inceleme önerilir)",
        "CockroachDB desteği kaldırıldı — yalnızca PostgreSQL ≥ 14",
        "Go + event-sourcing stack — TypeScript/Node.js ekipler için mimari öğrenme eğrisi (ancak uygulamalar OIDC + REST/gRPC ile stack'ten bağımsız bağlanır)",
      ]}
      verdict="API-first ve event-sourced mimariyle geliştirici-odaklı kurumsal IAM. Benzersiz Instance → Organizations → Projects 3-katmanlı multi-tenancy ile B2B SaaS için en sofistike teknik mimari. SaaS ve self-host aynı codebase'de (parity), zero-downtime update ve horizontal scale. OpenID Connect Certified. connectRPC + gRPC + REST tam API tipi esnekliği. Lisans yapısı: core AGPL-3.0 ama client kütüphaneleri (@zitadel/client) MIT — uygulama kodunuz etkilenmez."
      warn="AGPL-3.0 core: Zitadel server'ini modify edip dağıtacak projeler açık-kaynak yükümlülüğüne tabi. Sadece self-host + uygulamalarınızdan REST/gRPC ile bağlanıyorsanız — ki olağan senaryo — yük yok. @zitadel/client zaten MIT."
    />
  );
}
