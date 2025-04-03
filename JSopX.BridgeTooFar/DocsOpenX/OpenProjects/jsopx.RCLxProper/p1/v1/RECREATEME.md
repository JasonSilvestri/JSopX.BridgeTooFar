# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-rcl-x-proper-logo.svg" style="width: 28px; height: auto; margin-right:12px; margin-top:12px;!important;"> JSopX™ RCL x Proper Project

The **JSopX™ RCL x Proper Project**, _code named_, `JSopX.RCLxProper` is a totally **FREE**, open-source, Razor Class Library, that evolved from the `SharedResources` Project, and is now the official _production-ready successor_ (by design). This Razor Class Library manages static assets with a more modern approach. It ensures that all projects benefit from a centralized, easily maintainable asset pipeline for development environments.

---

## **From Scratch Variant:**

> [!CAUTION]
> You are currently viewing the **"_Start From Scratch_" _Variant_** of the **JSopX™ RCL x Proper Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---


```bash
# For The Cool Kids: Clone JSopX.RCLxProper Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.RCLxProper.git
```

---

[`Home`](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/README.md) » [`Introduction`](../../../../Introduction/) » [`Projects`](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/OpenProjects/) · · [`Use Latest`](../../../../OpenProjects/jsopx.RCLxProper/) · [`By-Phase`](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/README.md) · **`From Scratch`** · · [`« Previous`](../../../../OpenProjects/RCLxProper/p1/v1/RECREATEME.md) [`Next »`](../../../../OpenProjects/jsopx.RCLxComponents/p1/v1/RECREATEME.md)

---


## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Step 1: Recreate Using ASP.NET Core Razor Class Library Template](#step-1-recreate-using-aspnet-core-razor-class-library-template)
  - [Step 2: Extend Weather Data](#step-2-extend-weather-data)
  - [Step 3: Integrate OIDC](#step-3-integrate-oidc)
  - [Step 4: Decouple from Built-In API](#step-4-decouple-from-built-in-api)
  - [Step 5: Standardize with RCLs and Libraries](#step-5-standardize-with-rcls-and-libraries)
  
---

## Current Phase

> [!IMPORTANT]
>
>**Phases 1**: This document is currently aligned with [Phase 1: Minimum Viable Product (MVP)](../../../../Phases/Phase-1.md) Business Requirements. 
> 

---

> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate** and may contain placeholder information.

---

## Overview

The **JSopX™ RCL x Proper Project**, _code named_, `JSopX.RCLxProper` is a totally **FREE**, open-source, Razor Class Library, that evolved from the `SharedResources` Project, and is now the official _production-ready successor_ (by design). This Razor Class Library manages static assets with a more modern approach. It ensures that all projects benefit from a centralized, easily maintainable asset pipeline for development environments.

We initially create the project to simulate a [Shared Assets & Resources Projects](../../../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that will need to be leveraged by the other new and existing client side and server side projects, which act as standards that conform to the initial [business requirements](../../../../Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../../../Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../../../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../../../OpenProjects/jsopx.VueCore/README.md), [React](../../../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../../../Introduction/JSopxDisciplinesRequiredForEnterpriseDevelopment.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly.

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

---

## Prerequisites

- [Visual Studio (v 17.13.5)](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/Technologies/AspNetCore.md)

[`Back to Top`](#table-of-contents)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Creating `JSopX.`RCLxProper From Scratch**:

- **[Continue](#step-1-recreate-using-aspnet-core-razor-class-library-template)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step, using the `JSopX.RCLxProper` _From Scratch_ Variant.   

---

### 2. **Use Different Variant**:

- **[Install Using Latest](../../../../OpenProjects/jsopx.RCLxProper/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.RCLxProper` _Using Latest_ Variant.  
- **[Browse By-Phase](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.RCLxProper` _By-Phase_ Variant.   
- **[Get All Projects](../../../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

## Step 1: Recreate Using ASP.NET Core Razor Class Library Template

**Goal**: Modern successor to `JSopX.SharedResources` with static assets for newer frameworks.

1. **Open Visual Studio 2022 (v 17.13.5)**:
   - Ensure the proper technologies outlined in [Prerequisites](#prerequisites) are installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core with Razor Class Library”.
   - Configure:
     - Project Name: `JSopX.RCLxProper`.
     - Location: e.g., `path\to\local\repo\JasonSilvestri\JSopX.RCLxProper`.
     - Solution Name: `JSopX.RCLxProper`.
     - .NET Framework (v 9.0.1)
   - Click Create.

3. **Set Up Initial Assets**:
   - Add `wwwroot/css/bootstrap.css`: Copy from Bootstrap 5.3.3.
   - Add `wwwroot/js/weatherUtils.js`: Copy from `JSopX.RCLxProper`.
   - Add `Pages/WeatherTable.razor`:

     ```razor
     <table class="table">
         <thead><tr><th>Date</th><th>Temp (°C)</th><th>Summary</th></tr></thead>
         <tbody>@ChildContent</tbody>
     </table>
     @code {
         [Parameter] public RenderFragment ChildContent { get; set; }
     }
     ```

4. **Test the Base Setup**:
   - Build—assets and Razor component ready for reference.


[`Back to Top`](#table-of-contents)

---

## Step 2: Extend Assets

**Goal**: Add historical weather support.

1. **Update WeatherTable.razor**:
   - ```razor
     <table class="table">
         <thead><tr><th>Date</th><th>Temp (°C)</th><th>Historical Temp (°C)</th><th>Summary</th></tr></thead>
         <tbody>@ChildContent</tbody>
     </table>
     ```

2. **Test**: Build—no runtime yet.


[`Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC

**Goal**: N/A—asset-focused, no auth.


[`Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: N/A—no API.


[`Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

**Goal**: Transition from `JSopX.RCLxProper`.

1. **Reference in Projects**:
   - In `JSopX.MauiHybridNetCore`’s `Home.razor`:

     ```razor
     <link href="_content/JSopX.RCLxProper/css/bootstrap.css" rel="stylesheet" />
     <WeatherTable><tr><td>...</td></tr></WeatherTable>
     ```
   - In `JSopX.AngularCore`’s `angular.json`:

     ```json
     "styles": ["../JSopX.RCLxProper/wwwroot/css/bootstrap.css"]
     ```

2. **Test**: Verify assets and component usage.

[`Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../../../OpenProjects/jsopx.RCLxComponents/p1/v1/RECREATEME.md)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step. You'll move onto the next project, using the `JSopX.RCLxComponents` _From Scratch_ Variant.   

---

1. **[Install Using Latest](../../../../OpenProjects/jsopx.RCLxProper/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.RCLxProper` _Using Latest_ Variant.  
2. **[Browse By-Phase](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.RCLxProper` _By-Phase_ Variant.   
3. **[Get All Projects](../../../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/README.md) » [`Introduction`](../../../../Introduction/) » [`Projects`](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/OpenProjects/) · · [`Use Latest`](../../../../OpenProjects/jsopx.RCLxProper/README.md) · [`By-Phase`](../../../../OpenProjects/jsopx.RCLxProper/p1/v1/README.md) · **`From Scratch`** · · [`Back to Top`](#table-of-contents) · [`« Previous`](../../../../OpenProjects/RCLxProper/p1/v1/RECREATEME.md) [`Next »`](../../../../OpenProjects/jsopx.RCLxComponents/p1/v1/RECREATEME.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
