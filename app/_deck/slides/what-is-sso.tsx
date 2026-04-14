import { Code, Target } from "lucide-react";
import { BulletList } from "../components/bullet-list";
import { Card } from "../components/card";
import { Typography } from "../components/typography";
import { SlideShell } from "../slide-shell";
import type { SlideProps } from "../types";

const PRODUCT_POINTS = [
  "Kullanıcı tek hesap, tek şifre, tek tıkla giriş yapar.",
  "Her yeni site için ayrı kayıt yok — kayıt sürtünmesi sıfıra iner.",
  "Profil, tercihler, abonelik merkezi ve tutarlı kalır.",
  '"Google ile giriş yap" mantığının kendi markanızdaki hali.',
];

const TECHNICAL_POINTS = [
  "Merkezi bir Identity Provider (IdP) tüm kimlik doğrulamayı üstlenir.",
  "IdP imzalı JWT token üretir; uygulamalar (client) bu token'ı doğrular.",
  "Standart protokol: OAuth 2.1 + OpenID Connect (OIDC) · veya SAML 2.0.",
  "Her uygulama kendi kullanıcı veritabanını tutmaz — ortak kaynağa güvenir.",
];

const EXAMPLES: [string, string][] = [
  ["Google", "Gmail · YouTube · Drive · Maps"],
  ["Apple ID", "iCloud · App Store · iMessage"],
  ["Microsoft", "Office · Teams · OneDrive · Xbox"],
  ["Amazon", "Prime · Kindle · AWS · Alexa"],
  ["Meta", "Facebook · Instagram · WhatsApp"],
  ["Atlassian", "Jira · Confluence · Bitbucket · Trello"],
  ["Adobe", "Creative Cloud · Document Cloud · Behance"],
];

export default function WhatIsSSOSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="Temel Kavram"
      title="SSO Nedir?"
      subtitle="Single Sign-On — tek kimlik doğrulamasıyla birçok uygulamaya erişim. Kullanıcıya tek hesap deneyimi, mimarın eline merkezi kimlik kaynağı verir."
    >
      <div className="flex flex-1 flex-col gap-5 sm:gap-6">
        {/* Dual perspective — Product vs Technical */}
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* Product / Business side */}
          <Card tone="default">
            <Card.Header>
              <Card.Header.Left>Ürün / İş Tarafı</Card.Header.Left>
              <Card.Header.Right>
                <Target className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              </Card.Header.Right>
            </Card.Header>
            <Card.Body>
              <Typography size="md" emphasis="muted">
                Son kullanıcının gözünden:
              </Typography>
              <BulletList>
                {PRODUCT_POINTS.map((s, i) => (
                  <BulletList.Item key={i}>{s}</BulletList.Item>
                ))}
              </BulletList>
            </Card.Body>
          </Card>

          {/* Technical side — inverted */}
          <Card tone="invert">
            <Card.Header>
              <Card.Header.Left>Teknik Taraf</Card.Header.Left>
              <Card.Header.Right>
                <Code className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              </Card.Header.Right>
            </Card.Header>
            <Card.Body>
              <Typography size="md" emphasis="muted">
                Mimarin gözünden:
              </Typography>
              <BulletList>
                {TECHNICAL_POINTS.map((s, i) => (
                  <BulletList.Item key={i}>{s}</BulletList.Item>
                ))}
              </BulletList>
            </Card.Body>
          </Card>
        </div>

        {/* Familiar examples */}
        <Card tone="subtle">
          <Card.Header divider={false} className="mb-3 items-center sm:mb-4">
            <Card.Header.Left>
              <span aria-hidden className="h-px w-6 bg-black sm:w-10" />
              Tanıdık Örnekler
            </Card.Header.Left>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-7">
              {EXAMPLES.map(([provider, apps]) => (
                <div
                  key={provider}
                  className="flex flex-col border-l-2 border-black pl-3 sm:pl-4"
                >
                  <span className="font-mono text-sm uppercase tracking-[0.2em] text-black">
                    {provider}
                  </span>
                  <span className="mt-1 font-mono text-sm text-black/65">
                    {apps}
                  </span>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </div>
    </SlideShell>
  );
}
