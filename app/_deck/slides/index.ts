
import type { SlideComponent } from "../types";
import CoverSlide from "./cover";
import WhatIsSSOSlide from "./what-is-sso";
import WhySlide from "./why";
import HowSlide from "./how";
import FrameworkOverviewSlide from "./framework-overview";
import KeycloakSlide from "./keycloak";
import AuthentikSlide from "./authentik";
import ZitadelSlide from "./zitadel";
import LogtoSlide from "./logto";
import SuperTokensSlide from "./supertokens";
import CasdoorSlide from "./casdoor";
import EnterpriseAlternativesSlide from "./enterprise-alternatives";
import DecisionSlide from "./decision";
import NotFromScratchSlide from "./not-from-scratch";
import ArchitectureSlide from "./architecture";
import BrandingSlide from "./branding";
import PlatformsSlide from "./platforms";
import RoadmapSlide from "./roadmap";
import SummarySlide from "./summary";
import GlossarySlide from "./glossary";
import ThanksSlide from "./thanks";

export type SlideEntry = {
  component: SlideComponent;
  label: string;
  group?: string;
};

export const SLIDES: SlideEntry[] = [
  { component: CoverSlide, label: "Cover", group: "Giriş" },
  { component: WhatIsSSOSlide, label: "SSO Nedir?", group: "Giriş" },
  { component: WhySlide, label: "Neden SSO?", group: "Giriş" },
  { component: HowSlide, label: "Nasıl Çalışır?", group: "Giriş" },
  { component: FrameworkOverviewSlide, label: "Genel Bakış", group: "Framework" },
  { component: KeycloakSlide, label: "Keycloak", group: "Framework" },
  { component: AuthentikSlide, label: "Authentik", group: "Framework" },
  { component: ZitadelSlide, label: "Zitadel", group: "Framework" },
  { component: LogtoSlide, label: "Logto", group: "Framework" },
  { component: SuperTokensSlide, label: "SuperTokens", group: "Framework" },
  { component: CasdoorSlide, label: "Casdoor", group: "Framework" },
  { component: EnterpriseAlternativesSlide, label: "Ticari Alternatifler", group: "Framework" },
  { component: DecisionSlide, label: "Karşılaştırma", group: "Karar" },
  { component: NotFromScratchSlide, label: "Build vs Buy", group: "Karar" },
  { component: ArchitectureSlide, label: "Mimari", group: "Mimari" },
  { component: BrandingSlide, label: "Çok Marka", group: "Mimari" },
  { component: PlatformsSlide, label: "Platform & SDK", group: "Mimari" },
  { component: RoadmapSlide, label: "Yol Haritası", group: "Plan" },
  { component: SummarySlide, label: "Sonuç", group: "Plan" },
  { component: GlossarySlide, label: "Sözlük", group: "Ek" },
  { component: ThanksSlide, label: "Teşekkürler", group: "Ek" },
];
