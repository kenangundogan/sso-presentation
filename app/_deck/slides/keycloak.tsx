import { FrameworkCard } from "../framework-card";
import type { SlideProps } from "../types";

export default function KeycloakSlide(p: SlideProps) {
  return (
    <FrameworkCard
      index={p.index}
      total={p.total}
      kicker="03 · Framework · 1/6"
      name="Keycloak"
      stack="Java · Quarkus"
      version="26.6.0 (May 2026)"
      license="Apache 2.0"
      score={8}
      website="https://www.keycloak.org/"
      repo="https://github.com/keycloak/keycloak"
      strengths={[
        "SDK'lar — Resmi: Java (server + SAML adapter + SPI extensions) · keycloak-js (browser / SPA JavaScript) · keycloak-nodejs-connect (Node.js adapter) · @keycloak/keycloak-admin-client (Node.js Admin API client) · mod_auth_openidc + mod_auth_mellon (Apache httpd modülleri) · Quickstart örnekleri: Spring Boot, Quarkus, JBoss/WildFly, Node.js, Angular, React, JavaScript, Python (Flask) · Standart temelli yaklaşım: OAuth 2.0 / OIDC / SAML 2.0 uyumlu herhangi bir dilin native kütüphanesi çalışır (Python, Go, PHP, Ruby, .NET, Rust, Elixir) — vendor lock-in önleme felsefesi",
        "CNCF Incubating · OpenSSF Best Practices + OpenSSF Scorecard + CLOMonitor — vakıf yönetişimi ve bağımsız güvenlik denetimi",
        "Sertifikasyonlar — OpenID Connect Certified (Core, Discovery, Dynamic Registration, Session, RP/Back/Front-Channel Logout, CIBA) · FAPI 1.0 Baseline + Advanced + JARM + CIBA Certified · FAPI 2.0 Security Profile + Message Signing Passed · FIPS 140-2 Certified (Bouncy Castle FIPS)",
        "Protokol kapsamı — OAuth 2.0 + 2.1 · PKCE · Token Exchange (RFC 8693) · mTLS Client Auth (RFC 8705) · Pushed Authorization Requests (RFC 9126) · DPoP (RFC 9449) · JAR (RFC 9101) · JWT Client Auth · Device Flow (RFC 8628) · Dynamic Client Registration (RFC 7591/7592) · Token Introspection/Revocation · UMA 2.0 · SAML 2.0 (tam aralık) · WebAuthn (Passkey) · MCP Authorization Server (2025-03-26 Supported · 2025-06-18/11-25 Partial) + VS Code desktop MCP entegrasyonu",
        "Federation & Identity Brokering — LDAP · Kerberos · SSSD · FreeIPA (Red Hat IdM) · OIDC + SAML identity brokering · fine-grained Authorization Services (UMA 2.0 Grant + Federated Authorization)",
        "Yerleşik kurumsal kullanıcılar — CERN · Hitachi · Hewlett-Packard Enterprise · UnitedHealthcare · Wayfair · Sportsbet · Accenture · Capgemini · Bundesagentur für Arbeit / Bundesversicherungsamt (Alman federal kurumlar) · Storebrand · PharmaPartners · AlmaLinux Foundation",
      ]}
      weaknesses={[
        "Java (Quarkus) stack — TypeScript / Node.js ekipler için öğrenme eğrisi var",
        "Geniş protokol kapsamı yüksek konfigürasyon yüzeyi getiriyor — tüm spec'leri anlamak zaman alır",
        "Resmi yönetilen bulut servisi yok — self-host veya Red Hat Build of Keycloak (ticari) alternatif",
        "Production RAM ihtiyacı: tipik 1–2 GB+",
      ]}
      verdict="Endüstri referans IAM — 2014'ten beri production, CNCF Incubating, OpenID Connect + FAPI + FIPS 140-2 sertifikalı. En geniş protokol kapsamı (OAuth 2.0/2.1, SAML 2.0, UMA 2.0, MCP) ve en derin federation desteği (LDAP, Kerberos, SSSD, FreeIPA). Enterprise ve kamu sektörü referansları (CERN, Hitachi, HP Enterprise, Alman federal kurumları). Lisans tamamen Apache 2.0 — ticari kullanım serbest."
    />
  );
}
