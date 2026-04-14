import { FrameworkCard } from "../framework-card";
import type { SlideProps } from "../types";

export default function AuthentikSlide(p: SlideProps) {
  return (
    <FrameworkCard
      index={p.index}
      total={p.total}
      kicker="03 · Framework · 2/6"
      name="Authentik"
      stack="Python · Django · Go"
      version="2026.2.3-rc1 (Şub 2026)"
      license="MIT + CC BY-SA 4.0 + EE"
      score={8}
      website="https://goauthentik.io/"
      repo="https://github.com/goauthentik/authentik"
      strengths={[
        "SDK'lar — Resmi birinci-taraf SDK yok (Keycloak gibi standart-first yaklaşım). Uygulamalar OAuth 2.0 / OIDC / SAML / LDAP / RADIUS üzerinden herhangi bir dilin native kütüphanesiyle bağlanır. authentik Agent endpoint device management için ayrı olarak sunulur",
        "Protokoller (Providers) — OAuth 2.0 + OIDC (device flow, M2M, WebFinger, GitHub compatibility, front/back-channel logout) · SAML 2.0 (Single Logout) · LDAP · RADIUS · SCIM · Proxy provider (reverse proxy SSO) · WS-Federation · RAC (Remote Access Control) · SSF (Shared Signals Framework, Enterprise)",
        "Görsel Flow Builder + 20+ Stage — Sürükle-bırak flow editörü: Authenticator (WebAuthn/Passkey, TOTP, SMS, Email, Duo, Static, Validate) · mTLS client cert · Captcha · Consent · Identification · Password · Prompt · Invitation · Email · Redirect · Source · Endpoint (Chrome Device Trust) · Deny · User (login/logout/write/delete)",
        "Outpost mimarisi — LDAP, RADIUS ve Proxy provider'ları Go ile yazılmış ayrı süreçler olarak çalışır. Embedded outpost ana sunucuya dahil; external outpost'lar Docker Compose / Kubernetes / manuel deploy edilebilir",
        "Sources (kimlik kaynakları) — Sosyal: Apple, Discord, Entra ID, Facebook, GitHub, Google, Keycloak, Mailcow, Okta, Plex, Shibboleth, Telegram, Twitch, X (Twitter), WeChat · Protokol: Kerberos, LDAP, OAuth 2.0, SAML 2.0, SCIM 2.0",
        "Enterprise özellikleri — Google Workspace sync · Microsoft Entra ID sync · Chrome Enterprise Device Trust · Shared Signals Framework (SSF) · mTLS stage · Password history compliance · Enhanced audit logging (maps, charts, CSV export) · Enterprise Plus: FIPS-compliant deployments (FedRAMP)",
        "Güvenlik denetimleri — 3 bağımsız audit: Cure53 (Haziran 2023) · Cobalt (Kasım 2024) · IncludeSec (Eylül 2025)",
      ]}
      weaknesses={[
        "Python / Django stack — TypeScript / Node.js ekipler için ekosistem uyumsuzluğu (ancak apps OIDC/SAML ile bağlanır, stack'ten bağımsız çalışır)",
        "Resmi birinci-taraf frontend SDK yok — Keycloak gibi standartlar üzerinden bağlanılır (Auth.js, next-auth providers kullanılabilir)",
        "Enterprise özellikleri (Google Workspace sync, Entra ID sync, SSF, Chrome Device Trust, mTLS stage, FIPS) yalnızca ücretli abonelik ile",
        "Resmi yönetilen bulut servisi yalnızca Enterprise tier'da — self-host Community sürümü serbest",
      ]}
      verdict="Görsel flow editörü ve Outpost mimarisi ile production-sınıfı IdP. En güçlü yanı: sürükle-bırak flow tasarımı, LDAP + RADIUS + Proxy için ayrı-süreç outpost'lar, 3 bağımsız güvenlik denetimi kanıtı. Enterprise tier Chrome Enterprise Device Trust, FIPS/FedRAMP uyumu, SSF (real-time security events) ve Workspace/Entra senkronizasyonu ekliyor. Homelab'den büyük production'a ölçeklenebilir."
      warn="Lisans: Kod MIT · docs CC BY-SA 4.0 · authentik/enterprise/ dizini kurumsal abonelik gerektirir."
    />
  );
}
