# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-shared-resources-logo.svg" style="width: 28px; height: auto; margin-right:12px; margin-top:12px;!important;"> JSopX™ Shared Resources Project

The **JSopX™ Shared Resources Project**, _code named_, `JSopX.SharedResources` is a totally **FREE**, open-source, Class Library, and a traditional hub for common resources—images, fonts, scripts, localizations—that feed into multiple projects. Initially a central class library, it highlights the benefits of having a single source for shared assets.

---

## **From Scratch Variant:**

> [!CAUTION]
> You are currently viewing the **"_Start From Scratch_" _Variant_** of the **JSopX™ Shared Resources Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---

```bash
# For The Cool Kids: Clone JSopX.SharedResources Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.SharedResources.git
```

---

[`Home`](../../OpenProjects/jsopx.SharedResources/p1/v1/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/jsopx.SharedResources/p1/v1/OpenProjects/) · · [`Use Latest`](../../OpenProjects/jsopx.SharedResources/README.md) · [`By-Phase`](../../OpenProjects/jsopx.SharedResources/p1/v1/README.md) · **`From Scratch`** · · [`« Previous`](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md) [`Next »`](../../OpenProjects/jsopx.RCLxAssets/p1/v1/RECREATEME.md)

---


## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Step 1: Recreate Shared Resources and ASP.NET Core Template](#step-1-recreate-using-aspnet-core-shared-resources-template)
  - [Step 2: Extend Weather Data](#step-2-extend-weather-data)
  - [Step 3: Integrate OIDC](#step-3-integrate-oidc)
  - [Step 4: Decouple from Built-In API](#step-4-decouple-from-built-in-api)
  - [Step 5: Standardize with RCLs and Libraries](#step-5-standardize-with-rcls-and-libraries)
  
---

## Current Phase

> [!IMPORTANT]
>
>**Phases 1**: This document is currently aligned with [Phase 1: Minimum Viable Product (MVP)](../../Phases/Phase-1.md) Business Requirements. 
> 

---

> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate** and may contain placeholder information.

---

## Overview

The **JSopX™ Shared Resources Project**, _code named_, `JSopX.SharedResources` is a totally **FREE**, open-source, Class Library, and a traditional hub for common resources—images, fonts, scripts, localizations—that feed into multiple projects. Initially a central class library, it highlights the benefits of having a single source for shared assets.

We initially create the project to simulate a [Shared Assets & Resources Projects](../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that will need to be leveraged by the other new and existing client side and server side projects, which act as standards that conform to the initial [business requirements](../../Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../OpenProjects/jsopx.OpenProjectX/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../OpenProjects/jsopx.VueCore/README.md), [React](../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../Introduction/JSopxDisciplinesRequiredForEnterpriseDevelopment.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly.

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.4)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/AspNetCore.md)

[`Back to Top`](#table-of-contents)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Creating `JSopX.`SharedResources From Scratch**:

- **[Continue](#step-1-recreate-using-aspnet-core-shared-resources-template)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step, using the `JSopX.SharedResources` _From Scratch_ Variant.   

---

### 2. **Use Different Variant**:

- **[Install Using Latest](../../OpenProjects/jsopx.SharedResources/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.SharedResources` _Using Latest_ Variant.  
- **[Browse By-Phase](../../OpenProjects/jsopx.SharedResources/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.SharedResources` _By-Phase_ Variant.   
- **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

## Step 1: Recreate Using ASP.NET Core Shared Resources Template


**Goal**: Simulate a traditional class library for sharing static assets (Bootstrap, CSS, JS, HTML).

1. **Open Visual Studio 2022 (v 17.13.4)**:
   - Ensure the proper technologies outlined in [Prerequisites](#prerequisites) are installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core with React”.
   - Configure:
     - Project Name: `JSopX.SharedResources`.
     - Location: e.g., `path\to\local\repo\JasonSilvestri\JSopX.SharedResources`.
     - Solution Name: `JSopX.SharedResources`.
     - .NET Framework (v 9.0.1)
   - Click Create.


3. **Set Up Initial Assets**:
   - Add folders: `Assets/CSS`, `Assets/JS`, `Assets/HTML`.
   - Add `Assets/CSS/bootstrap.css`: Download Bootstrap 5.3.3 CSS from [getbootstrap.com](https://getbootstrap.com) and paste.
   - Add `Assets/JS/weatherUtils.js`:

     ```javascript
     export function getWeatherIcon(summary) {
         return summary === 'Cool' ? '❄️' : summary === 'Warm' ? '☀️' : '🔥';
     }
     ```
   - Add `Assets/HTML/weatherTable.html`:

     ```html
     <table class="table">
         <thead><tr><th>Date</th><th>Temp (°C)</th><th>Summary</th></tr></thead>
         <tbody></tbody>
     </table>
     ```

4. **Test the Base Setup**:
   - Build the project—assets are static, no runtime test yet.


[`Back to Top`](#table-of-contents)

---

## Step 2: Extend Assets

**Goal**: Add historical weather support.

1. **Update weatherTable.html**:
   - ```html
     <table class="table">
         <thead><tr><th>Date</th><th>Temp (°C)</th><th>Historical Temp (°C)</th><th>Summary</th></tr></thead>
         <tbody></tbody>
     </table>
     ```

2. **Test**: Build—no runtime impact yet.


[`Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC

**Goal**: N/A—static asset library, no auth logic.


[`Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: N/A—no API dependency.


[`Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

**Goal**: Reference in early project stages.

1. **Reference in Projects**:
   - In `JSopX.AspNetCore`’s `Views/Weather/Index.cshtml`:

     ```cshtml
     <link href="/Assets/CSS/bootstrap.css" rel="stylesheet" />
     @Html.Raw(File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Assets/HTML/weatherTable.html")))
     ```
   - In `JSopX.AngularCore`’s `index.html`:

     ```html
     <link rel="stylesheet" href="Assets/CSS/bootstrap.css">
     ```

2. **Test**: Build and verify assets load in referencing projects.

[`Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../OpenProjects/jsopx.RCLxAssets/p1/v1/RECREATEME.md)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step. You'll move onto the next project, using the `JSopX.RCLxAssets` _From Scratch_ Variant.   

---

1. **[Install Using Latest](../../OpenProjects/jsopx.SharedResources/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.SharedResources` _Using Latest_ Variant.  
2. **[Browse By-Phase](../../OpenProjects/jsopx.SharedResources/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.SharedResources` _By-Phase_ Variant.   
3. **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../OpenProjects/jsopx.SharedResources/p1/v1/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/jsopx.SharedResources/p1/v1/OpenProjects/) · · [`Use Latest`](../../OpenProjects/jsopx.SharedResources/README.md) · [`By-Phase`](../../OpenProjects/jsopx.SharedResources/p1/v1/README.md) · **`From Scratch`** · · [`Back to Top`](#table-of-contents) · [`« Previous`](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md) [`Next »`](../../OpenProjects/jsopx.RCLxAssets/p1/v1/RECREATEME.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
