import { FrameworkCard } from "../framework-card";
import type { SlideProps } from "../types";

export default function LogtoSlide(p: SlideProps) {
  return (
    <FrameworkCard
      index={p.index}
      total={p.total}
      kicker="03 · Framework · 4/6"
      name="Logto"
      stack="TypeScript · Node.js · PostgreSQL"
      version="v1.38.0 (Mar 2026)"
      license="MPL 2.0"
      score={5}
      website="https://logto.io/"
      repo="https://github.com/logto-io/logto"
      strengths={[
        "Resmi SDK'lar — Web: Next.js (App + Pages Router), React, Vue, Angular, Nuxt, SvelteKit, Vanilla JS, Auth.js · Mobil: iOS (Swift), Android (Kotlin/Java), Flutter, FlutterFlow, Expo (React Native), Capacitor JS, Chrome Extension · Backend: Go, Python, PHP, Ruby, Java Spring Boot, Express, Passport.js, .NET Core (MVC, Razor Pages, Blazor Server, Blazor WASM) · Platform: WordPress (+ plugin), Webflow, Hasura, Supabase · Generic: Device Flow, Machine-to-Machine, Traditional Web · MCP Server ile AI-asistent entegrasyon",
        "Protokoller — OAuth 2.1 · OpenID Connect · SAML 2.0 · Logto kendisi IdP olabilir (third-party app + consent flow + SAML app)",
        "Hazır connectorlar — Sosyal (29+): Google, Apple, Microsoft, GitHub (OAuth App + GitHub App), GitLab, Facebook, LinkedIn, Discord, Slack, X (Twitter), Kakao, Naver, Line, WeChat (Native + Web), WeCom, Alipay (Native + Web), Amazon, DingTalk, Feishu, Hugging Face, KOOK, Patreon, Xiaomi + generic OAuth 2.0 / OIDC · E-posta: SendGrid, Mailgun, Postmark, AWS SES, Aliyun Direct Mail, SMTP, HTTP · SMS: Twilio, Vonage, Tencent, Aliyun, GatewayAPI, SMS Aero, YunPian, HTTP · Enterprise SSO: Microsoft Entra ID (OIDC + SAML), Google Workspace, Okta, generic OIDC / SAML · Authorization: Permit.io",
        "Feature set — MFA (Passkey/WebAuthn, TOTP, backup codes) · M2M · Personal Access Token · Impersonation · Passwordless (email/SMS) · Multi-tenancy (Organizations) native · Organization RBAC · Secret Vault · Omni sign-in experience (tek kurulum çoklu app)",
        "SOC 2 Type II certified · Argon2 password hash · TLS everywhere · Cloud: EU / US / AU / JP · 50K MAU'ya kadar ücretsiz · self-hosted tamamen serbest (MPL 2.0)",
      ]}
      weaknesses={[
        "2022'de kuruldu — Keycloak kadar uzun bir geçmişi yok",
        "MPL 2.0 — değiştirilen Logto dosyaları açık kaynak olmalı (kendi uygulama kodunuz bundan etkilenmez)",
        "Self-hosted tarafta enterprise-grade referans sayısı Keycloak'a göre daha az",
      ]}
      verdict="Modern auth infrastructure — SaaS ve AI uygulamaları için optimize, geliştirici deneyimi öncelikli. OAuth 2.1 / OIDC / SAML karmaşıklığını soyutlayıp 30+ framework için hazır entegrasyon ve Management API sunar. Token-based pay-as-you-go fiyatlandırma."
      warn="MPL 2.0: Yalnızca değiştirdiğiniz Logto dosyaları açık olmalı. Kendi uygulama kodunuz (Next.js, Laravel vs.) kapalı kaynak kalır."
    />
  );
}
