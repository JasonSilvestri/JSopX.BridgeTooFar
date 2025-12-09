# JSopX™ Solution Project (v1)

JSopX™ Enterprise-Level Solution is a modular SaaS architecture designed to provide comprehensive health management services. It consists of multiple interconnected projects, each serving a specific purpose within the overall system.

---

[`Home`] » [`JSopX.BridgeTooFar`] » **[`Solutions`]** ·· [`VS Templates`] ·· [`Technologies`]

---

## 🗂 JSopX.BridgeTooFar

**Purpose:** Document Management pipeline for markdown, PDF, Word conversion, Docs processing.  

**Highlights:**

- Converters, templates, mapping validators, developer and Ai assistant documentation.

**Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar)

---

## 🧩 JSopX.Core
**Purpose:** Domain models, value objects, validation logic, shared abstractions.  

**Highlights**:

- Entities for patients, providers, records.
- Standard `IResult<T>`] / `ResultFactory` patterns.
- Central constants and configuration.

**Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.Core](https://github.com/JasonSilvestri/JSopX.Core)

---

## 💾 JSopX.Data

**Purpose:** **_Code First_** EF Core 9 data access layer, DbContext, migrations.  

**Highlights**:

- DbContext per domain, fluent configuration, localdb/SQLite dev support.
- Connection factory for Azure SQL and SQLite fallback.

**Repository Locations**:

---

## 🧮 JSopX.ClassLibrary

**Purpose:** Shared tooling, scripts, guard utilities, constants, enums.  
**Highlights**

- PowerShell/Node scripts for CI, gating, and normalization.
- JSON schema validators, markdown processors.

**Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.ClassLibrary](https://github.com/JasonSilvestri/JSopX.ClassLibrary)
 
---

## 🔐 JSopX.Vault
**Purpose:** Encrypted secret management (dev filesystem provider + Azure providers).  

**Highlights**:

- `IJSopXSecretVault` and versioned secrets.
- Dev: filesystem encrypted blobs; Prod: Azure Blob + AKV key protection.
- Prefer Managed Identity for DB auth.

**Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.Vault](https://github.com/JasonSilvestri/JSopX.Vault)
 
---

## 🌐 JSopX.WebAPI

**Purpose:** Public API gateway bridging Core, Data, and Presentation.  

**Highlights**:

- ASP.NET Core 9 Minimal APIs / Controllers.
- JWT/OIDC ready, Swagger, health checks, telemetry.
- Secretless DB connections via Vault.

**Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.WebAPI](https://github.com/JasonSilvestri/JSopX.WebAPI)
 
---

## 🧠 JSopX.SharedResources
**Purpose:** Predictive analytics and ML services (pluggable).  
**Highlights**

- `IPredictionService` contract and initial stub (weight-trend forecasting).
- Phased approach: stub → ML.NET → ONNX → remote inference.

**Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.SharedResources](https://github.com/JasonSilvestri/JSopX.SharedResources)

---

## 🧬 **JSopX.Halos**

**Purpose:**

**Halo\{\} is a Universal AI Design Pattern for Dual-Partner Incremental Redesign**, a 2025 modern **LLM + Quant** backbone pattern for rapid, *reproducible* AI-powered development (_including chat “cold-starts”_). 

> **Halo\{\}** is a technology-agnostic design pattern that fuses a language partner (Partner-L) with quantitative engines (Partner-Q) under strict, machine-checkable contracts, over a predictable product lifecycle.

A `Halo{}` separates **contracts** (JSON schemas; reproducible) from **narratives** (explanations; human-readable). Adapters can change; **contracts and gates do not**.

**Highlights**:

**Halo\{\}** v1 is **ChatGPT-native by design**, authored and proven in collaboration with **Nova and Lumina (ChatGPT AI Assistants)**.  

- **Focus**: ChatGPT cold-starts, envelopes, contracts, gates, provenance—**battle-tested here first**.  
- **Portability**: `Halos{}` can be adapted to other models via adapters, **deferred intentionally** to protect the origin story and discipline.  
  
**Repository Locations**:

---

## 🎨 JSopX.Presentation
**Purpose:**  Razor Class Library (RCLs) and Maui Class Library (CLs) for shared UI components, styles, assets. 

**Highlights**:

- Shared CSS/JS, Razor, Maui, Resources, Components, `_content/` asset serving.
- **Multiple Projects**: `JSopX.Dev.RCL`, `JSopX.Prod.RCL`, `JSopX.Thor.RCL`, `JSopX.Components.RCL`, `JSopX.Maui.CL` and `JSopX.Maui.RCL`.

**Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.Presentation](https://github.com/JasonSilvestri/JSopX.Presentation)

---

## 💖 JSopX.MauiHybridNetCore 
**Purpose:** Cross-platform MAUI hybrid app for medication titration (Windows, Android, iOS, macOS, and Web).  

**Highlights**:

- **MVP for titration workflows**: offline EF Core 9 DB, BlazorWebView hybrid UI.
- **Caching and Automation**: Local caching, telemetry sync, reminders, titration generator.
- **Future**: pill-bottle camera scanning, voice-to-schedule, OpenAI integrations.
- **Multiple Projects**: `JSopX.MauiHybridNetCore.Maui`, `JSopX.MauiHybridNetCore.Maui.Shared`, `JSopX.MauiHybridNetCore.Maui.Web` and `JSopX.MauiHybridNetCore.Maui.Web.Client`.
 
**Repository Locations**

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore](https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore)

---

## 📊 **JSopX.Maui.MPA**

> This is an experimental project and is not yet production-ready.

**Purpose:** Cross-platform MAUI Hybrid App and Web Multi App Library (Windows, Android, iOS, macOS, and Web).

**Highlights**:

* WebView-hybrid embedding of MAUI Hybrid components
* Local offline caching + telemetry sync

### **Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.Maui.MPA](https://github.com/JasonSilvestri/JSopX.Maui.MPA)

---

## 🧪 JSopX.Unitx
**Purpose:** Unified tests (xUnit) for Core, Data, WebApi.

**Highlights**:

- Coverage gating, snapshot testing for materialized envelopes.

**Repository Locations**:


* **GitHub:** [https://github.com/JasonSilvestri/JSopX.Unitx](https://github.com/JasonSilvestri/JSopX.Unitx)

---

## 💻 JSopX.SaaS

**Purpose:** A multi-host **starter portal** that showcases newly manufactured **JSopX™** **_SaaS_** services, in rapid succession, across our `JSopX.SaaS` SPA (HTML), ASP.NET Core (Razor), and MAUI (Blazor Hybrid and Web) Projects.

**Highlights**:

- **SPA (pure HTML)**—`JSopX.SaaS.SPA`: for the bare-metal static start,
- **ASP.NET Core**—`JSopX.SaaS.Core`: for server-hosted Razor,
- **.NET MAUI Blazor Hybrid**—`JSopX.SaaS.Maui`, `JSopX.SaaS.Maui.Shared`, `JSopX.SaaS.Maui.Web` and `JSopX.SaaS.Maui.Web.Client`: for desktop, web, native mobile, etc.
- **All Projects**—reusing the same **JSopX.Prod.RCL** assets and components.

**Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.SaaS](https://github.com/JasonSilvestri/JSopX.SaaS)

---

## ☁️ JSopX.CRM
**Purpose:** A first-party CRM for Jason Silvestri that starts small (Contacts → Orgs → Interactions) but is **device-ubiquitous** (MAUI + Web) and leverages our **Presentation** RCL for consistent UI.

**Highlights**:
* **Entities**: Contact, Organization, Interaction (note/log), Tag.
* **Views**:
  * Contact list + detail (notes timeline)
  * Org list + detail (related contacts)
  * Quick add interaction (meeting, call, task)
* **Search/Filter**: by tag, status, org.
* **Offline (Maui)**: local SQLite cache with queued sync to WebApi.
* **Auth**: simple org-internal login (future: OIDC).
- **.NET MAUI Blazor Hybrid**—`JSopX.CRM.Maui`, `JSopX.CRM.Maui.Shared`, `JSopX.CRM.Maui.Web` and `JSopX.CRM.Maui.Web.Client`: for desktop, web, native mobile, etc.

**Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.CRM](https://github.com/JasonSilvestri/JSopX.CRM)

---

## ⚙️ JSopX.PLM
**Purpose:** A first-party PLM (Product Lifecycle Management) system for Jason Silvestri that starts small (Products → Lifecycles → Lifecycle Phases → Workflows → Decision Gates) but is **device-ubiquitous** (MAUI + Web) and leverages our **Presentation** RCL for consistent UI.

**Highlights**:

* **Entities**: Products/Models, Lifecycles, Phases, Workflows, Decision Gates, and governed by Workflow States.
* **Search/Filter**: by tag, status, org.
* **Flow (Charts)**: Be able to visualize workflows and decision gates, using the same data Entities.
* **Auth**: simple org-internal login (future: OIDC).
- **.NET MAUI Blazor Hybrid**—`JSopX.PLM.Maui`, `JSopX.PLM.Maui.Shared`, `JSopX.PLM.Maui.Web` and `JSopX.PLM.Maui.Web.Client`: for desktop, web, native mobile, etc.

**Repository Locations**:

* **GitHub:** [https://github.com/JasonSilvestri/JSopX.PLM](https://github.com/JasonSilvestri/JSopX.PLM)

---

##### [jsopx.com] | [GitHub] | [Email] | Phone : 508-851-9445

###### Copyright © 2025 – All Rights Reserved by Jason Silvestri Open Project EXperiences (JSopX™)

[jsopx.com]: http://jsopx.com "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Products, Services and SaaS Services"
[Email]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Open Project EXperiences (JSopX™) Email Contact for Mark Silvetri"
[Phone]: phoneto:508-851-9445 "Jason Silvestri Open Project EXperiences (JSopX™) Phone Contact for Mark Silvetri"
[therealjasonsilvestri@gmail.com]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Open Project EXperiences (JSopX™) Email Contact for Mark Silvetri"
[508-851-9445]: phoneto:508-851-9445 "Jason Silvestri Open Project EXperiences (JSopX™) Phone Contact for Mark Silvetri"

[GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri Open Project EXperiences (JSopX™) GitHub Repository"

[CurrentGitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Document Management Project Solution GitHub Repository"
[CurrentGitHubHome]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/README.md "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Document Management Project GitHub Home README.md"
<!--Root Solution Home-->
[`Home`]: ../../JSopX.BridgeTooFar/README.md "JSopX™ Document Management Project Home README.md"
<!--Root Solution Project -->
[`JSopX.BridgeTooFar`]: ../../JSopX.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution README.md"
<!--Root Solution Project Solutions -->
[`Solutions`]: ./../../JSopX.Global/Solutions/README.md "JSopX™ SaaS Project Solutions README.md"
<!--Root Solution Project Visual Studio Templates -->
[`VS Templates`]: ./../../JSopX.Global/VsTemplates/README.md "JSopX™ SaaS Visual Studio Project Solutions Templates README.md"
<!--Root Solution Technologies -->
[`Technologies`]: ./../../JSopX.Global/Technologies/README.md "JSopX™ Project Solution Technologies README.md"
<!--Install README.md - Often same as Root Solution-->
[`Install`]: ../../JSopX.BridgeTooFar/README.md "JSopX™ SaaS Project Solution Install README.md"
<!--Briefing README.md - The briefing of the Solution-->
[`Debrief`]: ../../JSopX.BridgeTooFar/REDEBRIEFME.md "JSopX™ SaaS Document Management Project Briefing REDEBRIEFME.md"
<!--Recreate README.md - The step by step instructions to Create Solution - often from briefing -->
[`Recreate`]: ../../JSopX.BridgeTooFar/RECREATEME.md "JSopX™ SaaS Document Management Project Step by Step HowTo Re-Create RECREATEME.md"

[Overview]: #overview
[Prerequisites]: #prerequisites

<!-- Back to Top links (all styles) found under most sections -->
[Back to Top]: #table-of-contents "Primary document table of contents"
[`Back to Top`]: #table-of-contents "Primary document table of contents"
[`⇧ Back to Top`]: #table-of-contents "Primary document table of contents"

