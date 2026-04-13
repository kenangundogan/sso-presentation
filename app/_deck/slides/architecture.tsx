import { ArchitectureDiagram } from "../components/architecture-diagram";
import { SlideShell } from "../slide-shell";
import { AnalysisVerdict } from "../components/analysis-verdict";
import type { SlideProps } from "../types";

/* ---------------------------------------------------------------- *
 * Diagram plan — typed as discriminated union so adding/removing
 * steps stays type-safe and Node prop drift gets caught at build.
 * ---------------------------------------------------------------- */

type DiagramItem = {
  type: "leaf" | "hub";
  label: string;
  title: string;
  meta?: string;
  subtitle?: string;
  features?: readonly string[];
};

type TierStep = {
  id: string;
  type: "tier";
  cols: 1 | 2 | 3 | 4;
  className?: string;
  items: readonly DiagramItem[];
};

type ConnectorStep = {
  id: string;
  type: "connector";
  text?: string;
};

type NodeStep = {
  id: string;
  type: "node";
  node: DiagramItem;
};

type DiagramStep = TierStep | ConnectorStep | NodeStep;

const DIAGRAM_PLAN: readonly DiagramStep[] = [
  {
    id: "tier-1",
    type: "tier",
    cols: 3,
    items: [
      {
        type: "leaf",
        label: "Sosyal Sağlayıcılar",
        title: "29+ IdP",
        meta: "Google · Apple · GitHub · Microsoft +25",
      },
      {
        type: "leaf",
        label: "Kurumsal SSO",
        title: "OIDC · SAML",
        meta: "Microsoft Entra ID · Google Workspace · Okta",
      },
      {
        type: "leaf",
        label: "Passwordless & Biyometrik",
        title: "Passkey · WebAuthn",
        meta: "E-posta · SMS · Magic Link · TOTP",
      },
    ],
  },
  { id: "conn-1", type: "connector" },
  {
    id: "tier-2",
    type: "node",
    node: {
      type: "hub",
      label: "Identity Provider",
      title: "Logto IdP",
      subtitle: "auth.domain.com",
      features: ["OAuth 2.1", "OIDC", "JWT Issuer", "MFA · Passkey"],
    },
  },
  { id: "conn-2", type: "connector", text: "JWT Token" },
  {
    id: "tier-3",
    type: "node",
    node: {
      type: "hub",
      label: "Doğrulama Katmanı",
      title: "Token Doğrulama",
      subtitle: "Self-hosted",
      features: ["Middleware / SDK", "Veri Tabanı", "Yerel Veri Merkezi"],
    },
  },
  { id: "conn-3", type: "connector" },
  {
    id: "tier-4",
    type: "tier",
    cols: 4,
    className: "grid-cols-2 md:grid-cols-4",
    items: [
      { type: "leaf", label: "İstemci", title: "Web Portalları", meta: "İçerik & Yönetim Portalları" },
      { type: "leaf", label: "İstemci", title: "Mobil Uygulamalar", meta: "iOS ve Android App" },
      { type: "leaf", label: "İstemci", title: "Smart TV Sistemleri", meta: "Tizen, tvOS, Android TV, WebOS, vb." },
      { type: "leaf", label: "İstemci", title: "Yönetim Panelleri", meta: "CMS ve CRM Sistemleri" },
    ],
  },
];

/* ---------------------------------------------------------------- *
 * Slide
 * ---------------------------------------------------------------- */

export default function ArchitectureSlide(p: SlideProps) {
  return (
    <SlideShell
      index={p.index}
      total={p.total}
      kicker="05 · Teknik Mimari"
      title="Entegrasyon Planı"
      subtitle="Merkezi kimlik sağlayıcı üzerinden tüm uygulamaların uçtan uca entegrasyonu. Veriler kendi altyapımızda barındırılarak tam denetim sağlanır."
    >
      <ArchitectureDiagram>
        {DIAGRAM_PLAN.map((step) => {
          if (step.type === "connector") {
            return <ArchitectureDiagram.Connector key={step.id} text={step.text} />;
          }

          if (step.type === "tier") {
            return (
              <ArchitectureDiagram.Tier key={step.id} cols={step.cols} className={step.className}>
                {step.items.map((item, idx) => (
                  <ArchitectureDiagram.Node
                    key={idx}
                    type={item.type}
                    label={item.label}
                    title={item.title}
                    meta={item.meta}
                    subtitle={item.subtitle}
                    features={item.features ? [...item.features] : undefined}
                  />
                ))}
              </ArchitectureDiagram.Tier>
            );
          }

          // step.type === "node"
          return (
            <ArchitectureDiagram.Node
              key={step.id}
              type={step.node.type}
              label={step.node.label}
              title={step.node.title}
              meta={step.node.meta}
              subtitle={step.node.subtitle}
              features={step.node.features ? [...step.node.features] : undefined}
            />
          );
        })}
      </ArchitectureDiagram>

      {/* KVKK note */}
      <AnalysisVerdict className="mt-8 lg:mt-12">
        <AnalysisVerdict.Result>
          Tüm kimlik verileri operasyonel sunucularımızda, kendi güvenli veri yapılarımızda barındırılır.
          Dijital veriler hiçbir aşamada Türkiye dışına çıkmaz ve tam denetim altındadır.
        </AnalysisVerdict.Result>
      </AnalysisVerdict>
    </SlideShell>
  );
}
