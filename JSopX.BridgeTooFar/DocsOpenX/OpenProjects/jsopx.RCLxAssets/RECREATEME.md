# Recreating JSopX™ RCL x Assets Project: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite. Recreating the `JSopX.RCLxAssets` project shows us the creation of a modern successor to `JSopX.SharedResources` with static assets for newer frameworks.

---

> [!CAUTION]
> **Phase 1: Minimum Viable Product (MVP):**
>
> This document is currently aligned with **Phase 1** of development. As a result, the content may not be fully accurate or ready for production use. Treat it as reference material while the project evolves.
> 
> For more details, see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Phases/Phase-1.md).

---

[`Introduction`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Introduction/) » [**`JSopX™ Projects`**](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/)  · · · [`« Previous`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.OpenProjectX)

---

## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)

---

## **Overview**  

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from ASP.NET Core to Angular, React, Vue, Blazor, and .NET MAUI—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

Recreating the `JSopX.RCLxAssets` project shows us the creation of a modern successor to `JSopX.SharedResources` with static assets for newer frameworks.

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.3)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/AspNetCore.md)
- [.NET Core Blazor (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/NetCoreBlazor.md)
- [.Net Core Maui Hybrid (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/NetCoreMauiHybrid.md)
- [Node (v 20.14.0)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/Node.md)
- [npm (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/npm.md)
- [Angular CLI (v 18.0.3)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/AngularCli.md)
- [React (v 18.2.0)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/React.md)
- [Vue (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/Vue.md)
- [Vite (v 3.4.21)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p1/v1/Technologies/Vite.md)

[`Back to Top`](#table-of-contents)

---

## Step 1: Recreate Using Razor Class Library Template

**Goal**: Modern successor to `JSopX.SharedResources` with static assets for newer frameworks.

1. **Open Visual Studio 2022 (v 17.13.3)**:
   - Ensure .NET 9.0 SDK.

2. **Create the Project**:
   - File > New > Project.
   - Search for “Razor Class Library”.
   - Configure:
     - Project Name: `JSopX.RCLxAssets`.
     - Location: `C:\JSopX\`.
     - Framework: .NET 9.0.
   - Click Create.

3. **Set Up Initial Assets**:
   - Add `wwwroot/css/bootstrap.css`: Copy from Bootstrap 5.3.3.
   - Add `wwwroot/js/weatherUtils.js`: Copy from `JSopX.SharedResources`.
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

**Goal**: Transition from `JSopX.SharedResources`.

1. **Reference in Projects**:
   - In `JSopX.MauiHybridNetCore`’s `Home.razor`:

     ```razor
     <link href="_content/JSopX.RCLxAssets/css/bootstrap.css" rel="stylesheet" />
     <WeatherTable><tr><td>...</td></tr></WeatherTable>
     ```
   - In `JSopX.AngularCore`’s `angular.json`:

     ```json
     "styles": ["../JSopX.RCLxAssets/wwwroot/css/bootstrap.css"]
     ```

2. **Test**: Verify assets and component usage.

[`Back to Top`](#table-of-contents)

---

## `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for the `JSopX.RCLxAssets` JSopX™ RCL x Assets Project.

You have a few options moving forward:

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board, which includes across projects.

[`Continue Course »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.OpenProjectX/p1/v1/)

---

### **2. Continue Focus on the Growth of just JSopX™ RCL x Assets:**  

Although not recommended, if your pure focus is reverse engineering just the JSopX™ RCL x Assets project for one reason or another, it's cool. I totally get it. It is part of why I created this series of applications, and in the ways I did. We are developers. We develop. We explore. We ask the question, "What If?".

[`Continue Evolving Class Library »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/p2/v1/)


---

### **3. I Want My Blanky and Bubba:**  

You can always go back to the version of this application that is already created for you. No one is gonna bash you for starting from the beginning and regrouping.

[`« Start From Beginning`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.RCLxAssets/)

---
  
[`Introduction`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Introduction/) » [**`JSopX™ Projects`**](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
