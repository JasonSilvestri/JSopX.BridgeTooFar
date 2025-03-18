# JSopX™ RCL x Proper: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite.

---

> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate** and may contain placeholder information.

---

> [!CAUTION]
> **CURRENT PHASE: Phase 1: Minimum Viable Product (MVP):**
>
> This document is currently aligned with **Phase 1** of development. As a result, the content may not be fully accurate or ready for production use. Treat it as reference material while the project evolves.
> 
> For more details, see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](../../../../Phases/Phase-1.md).

---

[`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](./OpenProjects/)  · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](./OpenProjects/jsopx.OpenProjectX)

---

## Table of Contents


  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
 
---

## **Overview**  
The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from ASP.NET Core to Angular, React, Vue, Blazor, and .NET MAUI—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

[`Back to Top`](#table-of-contents)

## Prerequisites

- [Visual Studio (v 17.13.3)](./Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](./Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](./Technologies/AspNetCore.md)
- [.NET Core Blazor (v 9.0.1)](./Technologies/NetCoreBlazor.md)
- [.Net Core Maui Hybrid (v 9.0.1)](./Technologies/NetCoreMauiHybrid.md)
- [Node (v 20.14.0)](./Technologies/Node.md)
- [npm (v 10.8.1)](./Technologies/npm.md)
- [Angular CLI (v 18.0.3)](./Technologies/AngularCli.md)
- [React (v 18.2.0)](./Technologies/React.md)
- [Vue (v 10.8.1)](./Technologies/Vue.md)
- [Vite (v 3.4.21)](./Technologies/Vite.md)

[`Back to Top`](#table-of-contents)

---
# Recreating  JSopX™ RCL x Proper Razor Class Library: JSopX.RCLxProper

## Step 1: Recreate Using Razor Class Library Template

**Goal**: Lightweight, production-ready evolution of `JSopX.RCLxAssets`.

1. **Open Visual Studio 2022 (v 17.13.3)**:
   - Ensure .NET 9.0 SDK.

2. **Create the Project**:
   - File > New > Project.
   - Search for “Razor Class Library”.
   - Configure:
     - Project Name: `JSopX.RCLxProper`.
     - Location: `C:\JSopX\`.
     - Framework: .NET 9.0.
   - Click Create.

3. **Set Up Initial Assets**:
   - Add `wwwroot/css/site.css`:

     ```css
     .table { border-collapse: collapse; }
     th, td { border: 1px solid #ddd; padding: 8px; }
     ```
   - Add `Components/WeatherDisplay.razor`:

     ```razor
     @using JSopX.ClassLibrary
     <table class="table">
         <thead><tr><th>Date</th><th>Temp (°C)</th><th>Historical Temp (°C)</th><th>Summary</th></tr></thead>
         <tbody>
             @foreach (var forecast in Forecasts)
             {
                 <tr>
                     <td>@forecast.Date.ToShortDateString()</td>
                     <td>@forecast.TemperatureC</td>
                     <td>@forecast.HistoricalTempC</td>
                     <td>@WeatherUtils.GetWeatherIcon(forecast.Summary)</td>
                 </tr>
             }
         </tbody>
     </table>
     @code {
         [Parameter] public List<WeatherForecast> Forecasts { get; set; }
     }
     ```

4. **Test the Base Setup**:
   - Build—ready for production use.

## Step 2: Extend Assets

**Goal**: Already includes historical data—no further extension needed.

## Step 3: Integrate OIDC

**Goal**: N/A—UI-focused, no auth logic.

## Step 4: Decouple from Built-In API

**Goal**: N/A—no API.

## Step 5: Standardize with RCLs and Libraries

**Goal**: Final standard for UI.

1. **Reference in Projects**:
   - In `JSopX.BlazorServerCore`’s `Weather.razor`:

     ```razor
     <link href="_content/JSopX.RCLxProper/css/site.css" rel="stylesheet" />
     <WeatherDisplay Forecasts="forecasts" />
     ```
   - In `JSopX.AspNetCore`’s `Views/Weather/Index.cshtml`:

     ```cshtml
     <component type="typeof(JSopX.RCLxProper.Components.WeatherDisplay)" render-mode="ServerPrerendered" param-Forecasts="Model" />
     ```

2. **Test**: Verify consistent UI across projects.

---

## JSopX™ Class Library `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for `My First JSopX™ MAUI Hybrid App Setup`.

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board.

[`Continue Course »`](../Introduction/JSopxProjectChecksBalances.md)

---

### **2. Continue Focus on JSopX™ Class Library:**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board.

[`Continue Evolving Class Library »`](../Introduction/JSopxProjectChecksBalances.md)


---

### **3. I Want My Blanky and Bubba:**  

You can start from the beginning if you would prefer to regroup.

[`« Start From Beginning`](./Introduction/)

---
 
 [`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](./OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](./OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
