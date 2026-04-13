import { ArchitectureDiagram } from "../components/architecture-diagram";
import { SlideShell } from "../slide-shell";
import { AnalysisVerdict } from "../components/analysis-verdict";
import type { SlideProps } from "../types";

/* ---------------------------------------------------------------- *
 * Data Plan
 * ---------------------------------------------------------------- */

const DIAGRAM_PLAN = [
  {
    id: "tier-1",
    type: "tier",
    cols: 3,
    items: [
      { type: "leaf", label: "Giriş Metodu", title: "Google", meta: "OAuth 2.0" },
      { type: "leaf", label: "Giriş Metodu", title: "Apple", meta: "Sign in with Apple" },
      { type: "leaf", label: "Giriş Metodu", title: "E-posta", meta: "Magic Link / OTP" },
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
      { type: "leaf", label: "İstemci", title: "Web Portalları", meta: "Dijital Gazete & Radyo" },
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
      subtitle="Merkezi kimlik sağlayıcı üzerinden tüm mecraların uçtan uca entegrasyonu. Veriler kendi altyapımızda barındırılarak tam denetim sağlanır."
    >
      <ArchitectureDiagram>
        {DIAGRAM_PLAN.map((step: any) => {
          if (step.type === "connector") {
            return <ArchitectureDiagram.Connector key={step.id} text={step.text} />;
          }

          if (step.type === "tier") {
            return (
              <ArchitectureDiagram.Tier key={step.id} cols={step.cols} className={step.className}>
                {step.items.map((item: any, idx: number) => (
                  <ArchitectureDiagram.Node key={idx} {...item} />
                ))}
              </ArchitectureDiagram.Tier>
            );
          }

          if (step.type === "node") {
            return <ArchitectureDiagram.Node key={step.id} {...step.node} />;
          }

          return null;
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
