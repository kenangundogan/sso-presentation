import { Table } from "../components/table";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import type { SlideProps } from "../types";

/* ---------------------------------------------------------------- *
 * Terms — curated from all slides, grouped by category
 * ---------------------------------------------------------------- */

type Term = { abbr: string; full: string; tr: string };

const TERMS: ReadonlyArray<{ group: string; items: ReadonlyArray<Term> }> = [
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

/* ---------------------------------------------------------------- *
 * Slide
 * ---------------------------------------------------------------- */

export default function GlossarySlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="Ek · Sözlük"
      title="Terimler Sözlüğü"
      subtitle="Sunumda geçen teknik kısaltmaların açılımları ve Türkçe karşılıkları."
    >
      <Table minWidth="700px" stickyFirstCol={false}>
        <Table.Header>
          <Table.Row divider={false}>
            {["Kısaltma", "Açılım", "Türkçe Karşılık"].map((h) => (
              <Table.Cell key={h} isHead>
                <Typography size="sm" font="mono" transform="uppercase" tracking="widest" weight="medium">
                  {h}
                </Typography>
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {TERMS.flatMap(({ group, items }) => [
            <Table.Row key={`g-${group}`} divider={false}>
              <Table.Cell className="pt-4 pb-1">
                <Typography size="xs" font="mono" transform="uppercase" tracking="widest" weight="bold" emphasis="faded">
                  {group}
                </Typography>
              </Table.Cell>
              <Table.Cell className="pt-4 pb-1">{""}</Table.Cell>
              <Table.Cell className="pt-4 pb-1">{""}</Table.Cell>
            </Table.Row>,
            ...items.map((t) => (
              <Table.Row key={t.abbr}>
                <Table.Cell>
                  <Typography size="md" font="mono" weight="bold">
                    {t.abbr}
                  </Typography>
                </Table.Cell>
                <Table.Cell>
                  <Typography size="md" emphasis="muted">
                    {t.full}
                  </Typography>
                </Table.Cell>
                <Table.Cell>
                  <Typography size="md">
                    {t.tr}
                  </Typography>
                </Table.Cell>
              </Table.Row>
            )),
          ])}
        </Table.Body>
      </Table>
    </SlideShell>
  );
}
