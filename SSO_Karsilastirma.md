# SSO Çözümleri Karşılaştırma Raporu

Bu rapor, `docs` dizinindeki 6 farklı açık kaynaklı Single Sign-On (SSO) ve Identity and Access Management (IAM) çözümünün incelenmesi sonucunda oluşturulmuştur.

## Genel Bakış

| Özellik | Keycloak | Authentik | Zitadel | Logto | Casdoor | SuperTokens |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Dil / Stack** | Java | Python & Go | Go | TypeScript (Node) | Go & React | Java (Core) & Çoklu SDK |
| **Lisans** | Apache-2.0 | MIT | AGPL-3.0 | MPL-2.0 | Apache-2.0 | Apache-2.0 |
| **Öne Çıkan Özellik** | Kurumsal Olgunluk | Esneklik & Outpost | Multi-tenancy | Dev-Friendly & AI | AI-First & UI | Oturum Yönetimi |
| **Protokoller** | OIDC, SAML, LDAP | OIDC, SAML, LDAP, RADIUS | OIDC, SAML, LDAP | OIDC, OAuth 2.1, SAML | OIDC, SAML, CAS, LDAP | Özel Protokol & SDK |

## Detaylı Analiz

### 1. Keycloak
*   **Artıları:** En köklü ve olgun çözüm. CNCF projesidir. Çok geniş bir topluluk ve eklenti desteği vardır.
*   **Eksileri:** Kaynak tüketimi (Java) yüksek olabilir. Arayüzü modern alternatiflere göre daha karmaşık gelebilir.
*   **En İyi Kullanım:** Büyük ölçekli kurumsal yapılar ve karmaşık federasyon ihtiyaçları.

### 2. Authentik
*   **Artıları:** Modern bir arayüz. "Outpost" yapısı sayesinde farklı ağlarda kolayca kimlik doğrulama sağlar. Okta/Auth0 alternatifi olarak konumlanır.
*   **Eksileri:** Core yapısı Python ağırlıklıdır, performans kritik noktalarda Go kadar hızlı olmayabilir (outpostlar Go'dur).
*   **En İyi Kullanım:** Self-hosted laboratuvarlardan büyük üretim kümelerine kadar esnek kurulumlar.

### 3. Zitadel
*   **Artıları:** Çok kiracılı (multi-tenancy) yapı yerleşik olarak çok güçlüdür. Olay tabanlı (event-driven) mimarisi sayesinde tam denetim izi (audit trail) sunar. API-first (gRPC + REST).
*   **Eksileri:** AGPL lisansı bazı ticari projeler için kısıtlayıcı olabilir.
*   **En İyi Kullanım:** B2B SaaS platformları ve verinin her değişimini takip etmek isteyen mimariler.

### 4. Logto
*   **Artıları:** Geliştirici deneyimi odaklıdır. 30'dan fazla framework için hazır SDK sunar. AI ve Model Context Protocol (MCP) desteği ile günceldir.
*   **Eksileri:** Daha yeni bir projedir. Çok karmaşık legacy sistem entegrasyonları Keycloak kadar olgun olmayabilir.
*   **En İyi Kullanım:** Modern SaaS uygulamaları, AI tabanlı platformlar ve hızlı entegrasyon gerektiren projeler.

### 5. Casdoor
*   **Artıları:** Kendi içinde bir UI editörü ile gelir. AI-first yaklaşımı ve Face ID gibi modern biyometrik destekleri vardır. Çok fazla üçüncü taraf sağlayıcı (IdP) ile hazır entegrasyonu bulunur.
*   **Eksileri:** Casbin ekosistemine çok bağlıdır.
*   **En İyi Kullanım:** Görsel konfigürasyon önceliği olan ve çok sayıda sosyal login entegrasyonu gereken projeler.

### 6. SuperTokens
*   **Artıları:** Geliştiricinin OAuth protokollerinin derinliklerini bilmesine gerek kalmadan güvenli login eklemesini sağlar. Oturum yönetimi (session management) konusunda çok güçlüdür.
*   **Eksileri:** "Open-core" modelindedir (bazı özellikler ücretli olabilir). Tam bir IAM server'dan ziyade bir SDK + Core kombinasyonudur.
*   **En İyi Kullanım:** Kendi uygulamasının içine derinlemesine entegre bir auth/session yapısı kurmak isteyenler.

## Özet Tablo (Farklar)

| Kriter | En Güçlü | Not |
| :--- | :--- | :--- |
| **Kurumsal Güven** | Keycloak | En uzun süredir piyasada olan ve en çok test edilen. |
| **Geliştirme Hızı** | Logto / SuperTokens | Hazır SDK'lar ve basit API yapıları. |
| **B2B / Multi-tenancy** | Zitadel | Organizasyon hiyerarşisi en gelişmiş olan. |
| **Self-hosting Kolaylığı** | Authentik / Casdoor | Docker compose ve UI üzerinden kolay yönetim. |
| **Lisans Esnekliği** | Authentik (MIT) | En özgür kullanım izni veren lisans. |
