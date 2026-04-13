import { FrameworkCard } from "../framework-card";
import type { SlideProps } from "../types";

export default function CasdoorSlide(p: SlideProps) {
  return (
    <FrameworkCard
      index={p.index}
      total={p.total}
      kicker="03 · Framework · 6/6"
      name="Casdoor"
      stack="Go · React"
      version="v3.13.0 (Şub 2026)"
      license="Apache 2.0"
      score={3}
      website="https://casdoor.ai/"
      repo="https://github.com/casdoor/casdoor"
      strengths={[
        "Protokoller (en geniş set) — OAuth 2.0 / 2.1 · OpenID Connect (well-known discovery) · SAML 2.0 · **CAS** (Central Authentication Service, bu listede benzersiz) · LDAP (server + client) · Kerberos · RADIUS (server) · SCIM · WebAuthn / Passkey · TOTP / MFA · **Face ID (biyometrik)** · **Web3 / MetaMask** · Dynamic Client Registration (DCR) · MCP (AI auth gateway) · A2A (Agent-to-Agent)",
        "29 Identity Provider bağlayıcısı — Sosyal: Google · GitHub · GitLab · Gitee · Facebook · Twitter · LinkedIn · Telegram · Enterprise: Okta · Azure AD B2C · ADFS · Casdoor (self-federation) · Çin odaklı: Alipay · Baidu · Bilibili · DingTalk · Douyin · QQ · WeChat (Native + Miniprogram + Mobile) · Weibo · Kwai · Lark · Infoflow · WeCom · Web3: MetaMask · Web3Onboard · Custom + Goth (çoklu-provider library)",
        "Casbin tabanlı fine-grained authorization — Casdoor, Casbin ekosisteminden geliyor (authz engine'in yaratıcıları) · Organization + Group + Role + Permission + Rule hiyerarşisi · ACL / RBAC / ABAC / RESTful authz modelleri desteklenir",
        "**SaaS billing built-in** (bu listede benzersiz) — Plan + Pricing + Subscription + Order + Payment + Product yönetimi · 14 payment provider: Stripe · PayPal · Alipay · WeChat Pay · Adyen · Airwallex · Paddle · LemonSqueezy · Polar · FastSpring · Greengage · Balance · Dummy · Customer subscription + invoice akışları hazır",
        "Entegrasyon genişliği — 12 Storage backend (AWS S3, Azure, Google Cloud, Aliyun OSS, Tencent COS, MinIO, local FS, Synology NAS, Qiniu, CUCloud, Casdoor self) · 21 Notification channel (Slack, Discord, MS Teams, Matrix, DingTalk, Telegram, Lark, Line, Google Chat, Rocket.Chat, Viber, Reddit, Bark, Pushover, Pushbullet, Web Push, WeCom, webhook, vs.) · 6 Email (SendGrid, Resend, SMTP, Azure ACS, Aliyun, HTTP) · 7 Captcha (reCAPTCHA, hCaptcha, Turnstile, Geetest, Aliyun, default) · 2 Identity Verification (Jumio, Aliyun IDV)",
        "Enterprise ekstralar — 9 password hash algoritması (Argon2id, Bcrypt, PBKDF2, PBKDF2-Django, SHA256-salt, SHA512-salt, MD5-user-salt, plain) · Prometheus metrics · Webhook events · SCIM server · Kerberos controller · Syncer (cross-system data sync) · Ticket system · Certificate management (DNS, ECC) · Tek binary deploy (Go) · Docker + Kubernetes + Helm",
        "AI-first konumlanma — MCP Server + A2A protokolleri built-in · AI agent authorization için Model Context Protocol gateway olarak çalışır · Face ID biyometrik doğrulama entegrasyonu · Identity verification (Jumio) ile KYC akışları",
      ]}
      weaknesses={[
        "Geçmiş güvenlik açıkları (CVE-2022-24124 SQL injection) — production öncesi bağımsız güvenlik denetimi önerilir; feature breadth yüksek olduğundan attack surface geniş",
        "README minimal (5-satır tagline + link'ler) — feature envanteri için casdoor.org dokümantasyonu veya repo yapısı incelemesi gerekir, dokümantasyon Batı standartlarına göre daha dağınık",
        "Ekosistem Çin odaklı — IdP bağlayıcılarının çoğu Çin sağlayıcıları (WeChat, Alipay, DingTalk, ...) · Avrupa/US kurumsal adopter referansı Keycloak/Zitadel seviyesinde değil",
        "Admin UI yoğun (dense) — çok özellik aynı arayüzde sıkışmış, yeni kullanıcı için başlangıçta steep learning curve",
        "Bağımsız güvenlik denetim raporu yayınlanmamış — Authentik'in Cure53/Cobalt/IncludeSec zinciri gibi bir audit izi yok",
      ]}
      verdict="Casbin ekosisteminden gelen özellik-yoğun IAM + SaaS platformu. OAuth/OIDC/SAML/CAS/LDAP/Kerberos/RADIUS/SCIM + MCP/A2A + Face ID + Web3 ile en geniş protokol seti (bu 6 framework içinde CAS ve Web3/Face ID yalnızca Casdoor'da var). Built-in billing/subscription, 29 social IdP (Çin + Batı), 12 storage + 21 notification entegrasyonu — benzer genişliği sunan tek framework. Go + React stack, tek binary deploy. En uygun kullanım: Çin pazarına hitap eden SaaS, biyometri gerektiren fintech / healthcare, AI-agent gateway ihtiyacı."
      warn="Production öncesi mutlaka bağımsız güvenlik denetimi yaptırılmalı — CVE geçmişi (2022) ve geniş feature yüzeyi nedeniyle. Casdoor/casbin ekosistemindeki aktif gelişmeleri takip etmek önemli."
    />
  );
}
