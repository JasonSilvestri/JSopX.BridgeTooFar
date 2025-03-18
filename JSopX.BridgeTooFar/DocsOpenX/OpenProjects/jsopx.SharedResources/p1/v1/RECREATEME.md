# Recreating JSopX™ Shared Resources Project: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite. Recreating the `JSopX.SharedResources` project shows us how to simulate a traditional class library for sharing static assets (Bootstrap, CSS, JS, HTML).

---

> [!CAUTION]
> **Phase 1: Minimum Viable Product (MVP):**
>
> This document is currently aligned with **Phase 1** of development. As a result, the content may not be fully accurate or ready for production use. Treat it as reference material while the project evolves.
> 
> For more details, see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](../../../../Phases/Phase-1.md).

---

[`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](../../../../OpenProjects/)  · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](../../../../OpenProjects/jsopx.OpenProjectX)

---

## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)

---

## **Overview**  

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from ASP.NET Core to Angular, React, Vue, Blazor, and .NET MAUI—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

Recreating the `JSopX.SharedResources` project shows us how to simulate a traditional class library for sharing static assets (Bootstrap, CSS, JS, HTML).

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.3)](../../../../OpenProjects/jsopx.SharedResources/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](../../../../OpenProjects/jsopx.SharedResources/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](../../../../OpenProjects/jsopx.SharedResources/p1/v1/Technologies/AspNetCore.md)

[`Back to Top`](#table-of-contents)

---

## Step 1: Recreate Using Class Library Template

**Goal**: Simulate a traditional class library for sharing static assets (Bootstrap, CSS, JS, HTML).

1. **Open Visual Studio 2022 (v 17.13.3)**:
   - Ensure .NET 9.0 SDK is installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “Class Library (.NET Core)”.
   - Configure:
     - Project Name: `JSopX.SharedResources`.
     - Location: `C:\JSopX\`.
     - Solution Name: `JSopX.SharedResources`.
     - Framework: .NET 9.0.
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

## `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for the `JSopX.SharedResources` JSopX™ Shared Resources Project.

You have a few options moving forward:

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board, which includes across projects.

[`Continue Course »`](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/)

---

### **2. Continue Focus on the Growth of just JSopX™ Shared Resources:**  

Although not recommended, if your pure focus is reverse engineering just the JSopX™ Shared Resources project for one reason or another, it's cool. I totally get it. It is part of why I created this series of applications, and in the ways I did. We are developers. We develop. We explore. We ask the question, "What If?".

[`Continue Evolving Class Library »`](../../../../OpenProjects/jsopx.SharedResources/p2/v1/)


---

### **3. I Want My Blanky and Bubba:**  

You can always go back to the version of this application that is already created for you. No one is gonna bash you for starting from the beginning and regrouping.

[`« Start From Beginning`](../../../../OpenProjects/jsopx.SharedResources/)

---
  
[`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](../../../../OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](../../../../OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
