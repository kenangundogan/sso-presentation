Logto
Website: https://logto.io/
Repo: https://github.com/logto-io/logto
License: MPL-2.0 license
Release: v1.38.0 (2026-03-31)

Zitadel
Website: https://zitadel.com/
Repo: https://github.com/zitadel/zitadel
License: AGPL-3.0 license
Release: 4.13.1 (2026-04-01)

Keycloak
Website: https://www.keycloak.org/
Repo: https://github.com/keycloak/keycloak
License: Apache-2.0 license
Release: 26.6.0 (2026-05-05)

Authentik
Website: https://goauthentik.io/
Repo: https://github.com/goauthentik/authentik
License: Creative Commons: CC BY-SA 4.0 license
Release: 2026.2.3-rc1 (2026-02-10)

Casdoor
Website: https://casdoor.ai/
Repo: https://github.com/casdoor/casdoor
License: Apache-2.0 license
Release: v3.13.0 (2026-02-13)

SuperTokens
Website: https://supertokens.com/
Repo: https://github.com/supertokens/supertokens-core
License: Apache-2.0 license
Release: v11.4.3 (2026-02-08)


Readme dosyaları:

/Users/kenan/Documents/github/sso-presentation/docs/authentik/README.md
/Users/kenan/Documents/github/sso-presentation/docs/casdoor/README.md
/Users/kenan/Documents/github/sso-presentation/docs/keycloak/README.md
/Users/kenan/Documents/github/sso-presentation/docs/logto/README.md
/Users/kenan/Documents/github/sso-presentation/docs/supertokens-core/README.md
/Users/kenan/Documents/github/sso-presentation/docs/zitadel/README.md


# Ortak Üyelik Sistemi — SSO Altyapısı
**Teknik Araştırma & Framework Kararı & Yol Haritası**
*Habertürk · Bloomberg HT · ShowTV & Diğerleri — Nisan 2025*

> **Doküman Notu:** Bu doküman Nisan 2026 itibarıyla güncel verilerle doğrulanmıştır. Framework lisans ve sürüm bilgileri resmi GitHub depoları ve resmi duyurular ile teyit edilmiştir.

---

## İçindekiler

1. Neden SSO? — Mevcut durum ve ihtiyaç analizi
2. SSO Nasıl Çalışır? — OAuth2 / OIDC protokol mimarisi
3. Framework Araştırması — Değerlendirilen 6 open-source çözüm
4. Karşılaştırma & Karar — Logto ile neden ilerliyoruz
5. Teknik Mimari — Entegrasyon planı ve bileşenler
6. Yol Haritası — 4 aşamalı uygulama planı

---

## 01 | Neden SSO? — Mevcut Durum

| Bugün | SSO ile |
|---|---|
| Her mecra için ayrı kayıt & şifre | Tek kayıt, tüm mecralara erişim |
| Kullanıcı aynı kişi, 4 farklı hesap | Merkezi kullanıcı profili |
| Parça parça kullanıcı verileri | KVKK uyumlu veri yönetimi |
| Paket sistemi kurulamıyor | Mecra bazlı paket sistemi |
| Cross-platform analiz mümkün değil | Unified analytics & kişiselleştirme |

---

## 02 | SSO Nasıl Çalışır? — OAuth2 / OIDC

**Akış:** Kullanıcı giriş yapar → IdP'ye yönlendirilir → IdP kimlik doğrular → JWT Token döner → Tüm mecralar tokeni tanır

- **Dil Bağımsız** — Laravel, Next.js, Python, Flutter hepsi aynı protokolü konuşur. Standart HTTP tabanlı OAuth2/OIDC.
- **Self-Hosted** — Tüm kullanıcı verisi kendi sunucunuzda kalır. KVKK açısından tam uyumluluk sağlanır.
- **Mecra Ayrıştırma** — İstenen mecra sistemden bağımsız hale getirilebilir, diğerleri etkilenmez.

---

## 03 | Framework Tanıtımları

### Keycloak
- **Dil/Stack:** Java · Red Hat / JBoss
- **Güncel Sürüm:** 26.x serisi (aktif geliştirme) · **Lisans:** Apache 2.0 · **Puan:** ★★★★☆
- **Güçlü Yönler:** En olgun & battle-tested çözüm — 2014'ten beri production'da · SAML 2.0 + OIDC + OAuth 2.0 + LDAP/AD tam destek · Red Hat kurumsal destek seçeneği · FIPS 140-2 modu · Passkey desteği
- **Zayıf Yönler:** Yüksek RAM (minimum 512MB, production'da 1-2GB+) · XML tabanlı konfigürasyon karmaşıklığı · Öğrenme eğrisi dik · Admin UI eski nesil
- **Değerlendirme:** Büyük kurumsal ortamlar için referans çözüm. Medya holding ölçeğinde özellikler fazla — bakım yükü yüksek.

### Authentik
- **Dil/Stack:** Python · Django · Go (outpost'lar)
- **Güncel Sürüm:** 2026.2.x (yıl.ay formatı) · **Lisans:** MIT (core) + Enterprise Lisans (ileri özellikler) · **Puan:** ★★★★☆
- **Güçlü Yönler:** Modern, sezgisel admin UI · Flow editörü ile sürükle-bırak akış tasarımı · 2025.10 itibarıyla Redis bağımlılığı tamamen kaldırıldı — sadece PostgreSQL yeterli · SAML, OIDC, LDAP, RADIUS tam destek · Passkey (WebAuthn) desteği
- **Zayıf Yönler:** Python/Django stack — ekibimiz TypeScript/Node.js odaklı · Gelişmiş özellikler (RBAC, event haritası, endpoint cihazları) enterprise lisans gerektiriyor · Enterprise destek yalnızca abonelikle
- **Değerlendirme:** Görsel akış tasarımı konusunda en güçlü. Stack uyumsuzluğu ve ikili lisans yapısı dezavantaj.

> **Lisans Notu:** Core özellikler MIT ile tamamen ücretsiz. `authentik/enterprise/` dizini altındaki özellikler kurumsal abonelik gerektirir.

### Zitadel
- **Dil/Stack:** Go · PostgreSQL (CockroachDB desteği v3'te sonlandırıldı)
- **Güncel Sürüm:** v4.x (Ağustos 2025 GA) · **Lisans:** AGPL-3.0 ⚠️ · **Puan:** ★★★★☆
- **Güçlü Yönler:** Go ile minimal kaynak tüketimi (~512MB RAM) · Multi-tenancy native · Modern REST + gRPC API · Passkey + OAuth 2.1 desteği
- **Zayıf Yönler:** **Lisans Ağustos 2025'te Apache 2.0'dan AGPL-3.0'a değiştirildi** — Zitadel'i modify edip dağıtacak projeler için kaynak açma yükümlülüğü · Next.js için resmi SDK yok · CockroachDB desteği kaldırıldı
- **Değerlendirme:** Multi-tenant mimarisi güçlü. AGPL-3.0 lisans değişikliği hukuki inceleme gerektirir. TypeScript ekosistemi entegrasyonu zayıf.

> **Lisans Uyarısı:** Zitadel, Ağustos 2025'te lisansını Apache 2.0'dan AGPL-3.0'a taşıdı. Unmodified self-hosted kullanım sorunsuz olmakla birlikte, kaynak kodu modify edip dağıtacak projeler için AGPL-3.0 kapsamlı hukuki değerlendirme gerektirir.

### Logto ✅ SEÇİLEN
- **Dil/Stack:** TypeScript · Node.js · PostgreSQL
- **Güncel Sürüm:** v1.33 (aylık sürümler, aktif geliştirme) · **Lisans:** MPL 2.0 · **Puan:** ★★★★★
- **Güçlü Yönler:** Next.js App Router için resmi SDK (`@logto/next`) · 30+ framework için resmi SDK · Developer-first tasarım · OAuth 2.1 + OIDC + SAML 2.0 · MFA (TOTP, WebAuthn/Passkey) built-in · Multi-tenancy (Organizations) native · Secret Vault özelliği 2025'te eklendi
- **Zayıf Yönler:** 2022'de kuruldu — Keycloak kadar uzun geçmişi yok · MPL 2.0 — değiştirilen Logto dosyaları açık kaynak olmalı* · Büyük ölçekte referans sayısı Keycloak'a göre az
- **Değerlendirme:** ✅ Mevcut TypeScript/Next.js/Laravel stack ile en uyumlu çözüm. Seçilen framework.

> **Lisans Notu (MPL 2.0):** Yalnızca değiştirdiğiniz Logto kaynak dosyaları açık paylaşılmalıdır. Kendi uygulama kodunuz (Next.js, Laravel vb.) tamamen kapalı kaynak kalabilir.

### SuperTokens
- **Dil/Stack:** Node.js · Go (core)
- **Güncel Sürüm:** Aktif geliştirme · **Lisans:** Apache 2.0 (self-hosted core) · **Puan:** ★★★☆☆
- **Güçlü Yönler:** En hızlı kurulum ve entegrasyon · Pre-built UI ve headless mod · Self-hosted core ücretsiz · Session yönetimi özelleştirilebilir
- **Zayıf Yönler:** MFA → ücretli (self-hosted'da da ek ödeme) · Multi-tenant authentication → ücretli · SAML desteği yok · Tam IAM değil, authentication odaklı
- **Değerlendirme:** Hızlı başlangıç için iyi. Ölçeklendikçe ücretli özelliklere bağımlı hale gelme riski. SAML eksikliği kurumsal entegrasyonlarda sorun çıkarabilir.

### Casdoor
- **Dil/Stack:** Go · React
- **Güncel Sürüm:** Aktif geliştirme · **Lisans:** Apache 2.0 · **Puan:** ★★★☆☆
- **Güçlü Yönler:** 100+ identity provider desteği · UI-first yönetim · Geniş SDK (Android, iOS, Flutter dahil) · MFA, WebAuthn, RADIUS, LDAP, SCIM
- **Zayıf Yönler:** Geçmişte kritik güvenlik açıkları (CVE-2022-24124: SQL injection) — production öncesi bağımsız denetim şart · Admin UI diğerlerine kıyasla eski · Topluluk desteği zayıf
- **Değerlendirme:** Geniş provider desteği güçlü yanı. Güvenlik geçmişi ciddi ihtiyat gerektirir.

---

## 03 | Auth Ekranı — Mecra Bazlı Özelleştirme

Logto, her mecra için tamamen ayrı, markalı login deneyimi sunabilir. Kullanıcı hangi siteden giriş yapıyorsa o sitenin kimliğini görür.

| Mecra | Login Başlığı | Sosyal Giriş |
|---|---|---|
| Habertürk | Habertürk'e giriş yap | Google · Apple · E-posta |
| Bloomberg HT | Bloomberg HT'ye giriş yap | Google · Apple · E-posta |
| ShowTV | Show TV'ye giriş yap | Google · Apple · E-posta |
| HT Radyo | HT Radyo'ya giriş yap | Google · Apple · E-posta |

**Özelleştirme kapsamı:**
- Tam marka kontrolü — Logo, renk, font, arkaplan
- Özel domain — `auth.haberturk.com` gibi (Logto'da destekleniyor)
- Responsive — Web & mobil uyumlu
- Özel CSS — Admin console üzerinden tamamen özelleştirilebilir

---

## 03 | Framework Araştırması — Genel Bakış

| Framework | Dil | Lisans | Puan | Not |
|---|---|---|---|---|
| Keycloak | Java | Apache 2.0 | ★★★★☆ | En olgun. Kaynak tüketimi yüksek. |
| Authentik | Python | MIT + Enterprise | ★★★★☆ | Modern UI. İleri özellikler enterprise lisans. |
| Zitadel | Go | **AGPL-3.0** ⚠️ | ★★★★☆ | Multi-tenant güçlü. Lisans Ağustos 2025'te değişti. |
| **Logto** | **TypeScript** | **MPL 2.0** | **★★★★★** | **Next.js resmi SDK. Seçilen framework.** |
| SuperTokens | Node.js | Apache 2.0 | ★★★☆☆ | MFA ve multi-tenant ücretli. SAML yok. |
| Casdoor | Go | Apache 2.0 | ★★★☆☆ | Güvenlik geçmişine dikkat. Geniş provider. |

---

## 04 | Karşılaştırma & Karar

| Özellik | Keycloak | Authentik | Zitadel | **Logto ✓** |
|---|---|---|---|---|
| Dil / Stack | Java | Python/Go | Go | **TypeScript** |
| Güncel Sürüm | 26.x | 2026.2.x | v4.x | **v1.33** |
| Lisans | Apache 2.0 | MIT + Enterprise | **AGPL-3.0** ⚠️ | MPL 2.0 |
| Kurulum | Zor | Orta | Kolay | **Çok Kolay** |
| Next.js SDK | Yok | Yok | Var | **Resmi SDK** |
| Multi-tenant | ✓ | ✓ | ✓ native | **✓ native** |
| KVKK (self-host) | ✓ | ✓ | ✓ | **✓** |
| RAM tüketimi | 1-2GB+ | Orta | ~512MB | **Düşük** |
| Redis gereksinimi | Evet | **Hayır** (v2025.10+) | Hayır | **Hayır** |
| SAML 2.0 | ✓ | ✓ | ✓ | ✓ |
| OAuth 2.1 | ✓ | ✓ | ✓ | **✓** |
| Passkey/WebAuthn | ✓ | ✓ | ✓ | **✓** |
| Modern UI | Eski | İyi | İyi | **Çok İyi** |

> **Sonuç:** Logto, TypeScript/Next.js ekip yapımıza, mevcut Laravel ve PayloadCMS projelerine en kolay entegre olan, lisans riski en düşük ve aktif geliştirilen çözümdür.

---

## 04 | Neden Sıfırdan Yazmıyoruz?

| Sıfırdan Yazılsaydı | Logto (Self-Hosted) ile |
|---|---|
| ✗ 2-4 ay geliştirme (AI desteğiyle bile) | ✓ 3-5 gün kurulum & temel entegrasyon |
| ✗ OAuth2/OIDC edge case'leri (yüzlerce) | ✓ AI destekli geliştirme ile hızlı adaptasyon |
| ✗ Token rotation, refresh, revocation | ✓ Battle-tested, production'da kanıtlanmış |
| ✗ Brute force koruması & rate limiting | ✓ Açık kaynak — gerekirse koda girebilirsiniz |
| ✗ Bağımsız güvenlik denetimi zorunluluğu | ✓ Self-hosted — veriler kendi sunucularınızda |
| ✗ Sürekli bakım, güvenlik yamaları yükü | ✓ Ücretsiz, vendor lock-in yok |

---

## 05 | Teknik Mimari — Entegrasyon Planı

```
[Google] [Apple] [E-posta]
         ↓
   [Logto IdP]  ──→  [Token Doğrulama]  ──→  [Kullanıcı DB]
  OAuth2.1/OIDC      Middleware/SDK           PostgreSQL
  JWT Token          Her dilde çalışır        Merkezi profil
  auth.domain.com
         ↓ JWT Token ile erişim
  ┌──────────┬──────────────┬─────────┬────────────┐
  │Habertürk │ Bloomberg HT │ ShowTV  │ Mobil Apps │
  │Next.js   │ Next.js +    │ Next.js │ iOS/Android│
  │+ Laravel │ PayloadCMS   │ + CMS   │ PKCE Flow  │
  └──────────┴──────────────┴─────────┴────────────┘
```

> **KVKK:** Tüm veriler self-hosted PostgreSQL'de, kendi sunucularınızda tutulur. Veri Türkiye'den çıkmaz.

---

## 05 | Platform & SDK Desteği — Mevcut Projeler

| Platform | Projeler | Dil / Teknoloji | Logto SDK | Tahmini Süre |
|---|---|---|---|---|
| **WEB** | haberturk.com · bloomberght.com · showtv.com.tr | Laravel + Pure JS | `@logto/browser` (resmi) | 2-3 gün/site |
| **WEB** | bloomberghtradyo.com · haberturkradyo.com.tr | Next.js | `@logto/next` (resmi) | 1-2 gün/proje |
| **WEB** | CMS & Admin Paneller | Next.js | `@logto/next` (resmi) | 1-2 gün/proje |
| **MOBİL** | Habertürk · ShowTV · Bloomberg HT | React Native | `@logto/rn` (resmi) | 2-3 gün/app |
| **SMART TV** | HT · ShowTV · Bloomberg HT | Tizen · WebOS | PKCE + Device Flow | 3-5 gün/OS |
| **SMART TV** | HT · ShowTV · Bloomberg HT | AndroidTV · GoogleTV | `@logto/android` (resmi) | 2-3 gün |
| **SMART TV** | HT · ShowTV · Bloomberg HT | Apple TV (tvOS) | `@logto/swift` (resmi) | 2-3 gün |

> **Smart TV Notu:** Device Authorization Flow (RFC 8628) kullanılır. TV ekranında QR kod gösterilir, kullanıcı telefonuyla tarar ve kimlik doğrulamayı telefon üzerinden tamamlar.

> AI destekli geliştirme ile tüm platformların toplam entegrasyon süresi **~4 hafta** olarak öngörülmektedir.

---

## 05 | Mevcut Projelere Entegrasyon

### Laravel + Pure JS
- **Projeler:** haberturk.com · bloomberght.com · showtv.com.tr
- **Yöntem:** Laravel Socialite + `@logto/browser` SDK
- **Süre:** 2-3 gün / site
- Mevcut auth middleware Logto JWT doğrulama ile değiştirilir
- Google/Apple OAuth callback'leri Logto üzerinden yönetilir
- Mevcut kullanıcılar e-posta eşleşmesiyle otomatik migrate edilebilir

### Next.js
- **Projeler:** bloomberghtradyo.com · haberturkradyo.com.tr · CMS · Admin paneller
- **Yöntem:** `@logto/next` resmi SDK (App Router desteği mevcut)
- **Süre:** 1-2 gün / proje
- Next.js middleware ile route bazlı oturum koruması
- Server Component ve Client Component her ikisi için destek

### React Native
- **Projeler:** Habertürk · ShowTV · Bloomberg HT mobil
- **Yöntem:** `@logto/rn` resmi SDK + PKCE Flow
- **Süre:** 2-3 gün / uygulama
- PKCE mobil uygulamalar için güvenlik standardı (zorunlu)
- iOS ve Android için tek entegrasyon

### Smart TV
- **Projeler:** Tizen · WebOS · AndroidTV · GoogleTV · Apple TV
- **Yöntem:** Device Authorization Flow (RFC 8628)
- **Süre:** 3-5 gün / platform
- TV ekranında QR kod — kullanıcı telefonuyla tamamlar
- AndroidTV: `@logto/android`, Apple TV: `@logto/swift`
- Her TV işletim sistemi için ayrı test gerekir

---

## 06 | Yol Haritası — 4 Aşamalı Uygulama Planı

### Aşama 1 — IdP Kurulumu (Gün 1-5)
- Logto Docker Compose kurulumu (PostgreSQL dahil)
- Google OAuth ve Apple Sign In entegrasyonu
- `auth.domain.com` subdomain yapılandırması
- Temel organizasyon ve uygulama tanımları

### Aşama 2 — Frontend Entegrasyonu (Gün 6-12)
- `@logto/next` SDK ile Next.js projelerine entegrasyon
- Bloomberg HT Radyo · Habertürk Radyo
- CMS ve admin panel entegrasyonları

### Aşama 3 — Backend & Paket Sistemi (Gün 13-20)
- Laravel projelerine entegrasyon
- JWT claim bazlı paket/abonelik sistemi
- PayloadCMS OIDC senkronizasyonu
- React Native (mobil) entegrasyonu

### Aşama 4 — KVKK, Smart TV & Production (Gün 21-28)
- KVKK consent form akışı (açık rıza, metin versiyonlama)
- Kullanıcı verisi silme ve ihraç API'si
- Smart TV Device Flow entegrasyonları
- Yük testi ve production geçişi

---

## Özet & Karar

- ✓ **Logto** (self-hosted, MPL 2.0) — tamamen ücretsiz, açık kaynak, aktif geliştirme (v1.33)
- ✓ **~4 haftada tam entegrasyon** — AI destekli geliştirme ile
- ✓ **KVKK uyumlu** — tüm veriler kendi sunucularınızda, Türkiye'de kalır
- ✓ **Google, Apple, E-posta** sosyal giriş başlangıçtan itibaren
- ✓ **Web · Mobil · Smart TV** — tüm platformlar tek kimlik sistemi altında
- ✓ Herhangi bir mecra kolayca sistemden bağımsız hale getirilebilir
- ✓ MPL 2.0: Kendi uygulama kodunuz kapalı kaynak kalabilir

**Sonraki Adımlar:** PoC kurulumu → Stack ve lisans onayı → Sprint planı → Geliştirme

---

## Ek: Framework Lisans Özeti

| Framework | Lisans | Self-hosted ücretsiz? | Dikkat |
|---|---|---|---|
| Keycloak | Apache 2.0 | ✓ | Kurumsal destek ücretli |
| Authentik | MIT + Enterprise | ✓ Core ücretsiz | İleri özellikler abonelik gerektirir |
| Zitadel | **AGPL-3.0** ⚠️ | ✓ | Modify+dağıtım durumunda kaynak açma yükümlülüğü |
| **Logto** | **MPL 2.0** | **✓** | Değiştirilen Logto dosyaları açık olmalı, uygulama kodunuz değil |
| SuperTokens | Apache 2.0 (core) | ✓ Core ücretsiz | MFA ve multi-tenant ücretli |
| Casdoor | Apache 2.0 | ✓ | Güvenlik denetimi önerilir |


Logto
https://logto.io/
https://github.com/logto-io/logto

Zitadel
https://zitadel.com/
https://github.com/zitadel/zitadel

Keycloak
https://www.keycloak.org/
https://github.com/keycloak/keycloak

Authentik
https://goauthentik.io/
https://github.com/goauthentik/authentik