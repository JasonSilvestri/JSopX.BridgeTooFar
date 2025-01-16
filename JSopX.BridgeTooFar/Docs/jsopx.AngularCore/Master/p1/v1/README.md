# JSopX™ Angular Core

**Jason Silvestri Open Project EXperiences (JSopX™)** is a first-of-its-kind, open-source, multi-platform, enterprise-level suite of applications that demonstrate how to unify disparate technologies under one cohesive, scalable, and maintainable ecosystem.

The **JSopX™ Angular Core** project in specific, is intended to simulate an "Existing" Angular client-side SPA App Example, with the end goal of becoming fully integrated into our new, unified enterprise solution. 

Explore the [Overview](#overview) section for more details on the JSopX™ Angular Core project.

---

[`Introduction`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/) » [`JSopX Projects`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/JSopxProjects.md) » [`JSopX.AngularCore`](https://github.com/JasonSilvestri/JSopX.AngularCore)  » **[`Phase 1`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases/Phase-1-Minimum-Viable-Product-MVP.md)** »  · · · [`« Previous`](https://github.com/JasonSilvestri/JSopX.AspNetCore) [`Next »`](https://github.com/JasonSilvestri/JSopX.ReactCore)

---

<!--
### **Table of Contents**

 - [Overview](#overview)
 - [Prerequisites](#prerequisites)
 - [Corequisites](#corequisites)
 - [Postrequisites](#postrequisites)
 - [Concomitants](#concomitants)
 - [Getting Started](#getting-started)
 - [Installation](#installation)
 - [Project File Structure](#project-file-structure)
 - [Usage](#usage)
 - [Project Feature Highlights:](#project-feature-highlights)
   - [JSopX.AngularCore](#jsopxangularcore)
   - [jsopx.angularcore.client](#jsopxangularcoreclient)
   - [JSopX.AngularCore.Server](#jsopxangularcoreserver)
 - [JSopX™ Project References & Dependencies](#jsopx-project-references--dependencies)
 - [Technology Requirements](#technology-requirements)
 - [Start from Scratch](#start-from-scratch)
 - [In Conclusion](#in-conclusion)
 
 ---
 -->

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Corequisites﻿](#corequisites﻿)
- [Gett Started... ](#getting-started)
  - [Step-by-Step Instructions](#step-by-step-instructions)
- [Usage](#usage)
- [Extended Usage](#extended-usage)
- [Project File Structure](#project-file-structure)
- [Next Steps](#next-steps)

---

## Overview

The `JsopX.AngularCore` **JSopX™ Angular Core Open Project EXperience**  is a demonstration project showcasing how to build a web application using Angular and ASP.NET Core Web API, while anticipating it becoming part of a unified enterprise solution. 

It highlights the integration of Angular for the client-side with ASP.NET Core for the server-side, providing a comprehensive example of a modern web application stack. More importantly, it's primary use-case in the JSopX™ Enterprise-Level Application is to simulate an ["Existing" Client-side Apps Example](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples), with its own Web API, and its own existing standards. 

The end goal is seamlessly incorporating it into our collective enterprise suite, adopting its new parent's Web API, Assets, Standards, etc.

![JSopX™ Angular Core Open Project EXperience](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/documentation/jsopx-angular-core/p1/v1/JSopX-Angular-Core-Splash.PNG)

---

## **Current Phase**

> [!IMPORTANT]
> **Phase 1: Minimum Viable Product (MVP):**
>
> This document is currently aligned with **Phase 1** of development. As a result, the content may not be fully accurate or ready for production use. Treat it as reference material while the project evolves.
> 
> For more details, see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases/Phase-1-Minimum-Viable-Product-MVP.md).

---

## **Prerequisites**

**Staying on course with `JSopX.AngularCore` Independent Exploration**?

Ensure the following technologies and versions are installed, even if your only objective is to explore the `JSopX.AngularCore` project independent from all other projects:

- [Visual Studio (v 17.12.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#visual-studio-v-17123).
- [.NET Framework (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#net-framework-v-900).
- [ASP.NET Core (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#aspnet-core-v-900).
- [Node.js (v 20.14.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#node-v-20140).
- [Angular CLI (v 18.0.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#angular-cli-v-1803).


[`Back to Top`](#table-of-contents)

---

## **Corequisites﻿**

**Plan to Eventually Explore ALL `JSopX.OpenProjectX` Projects**?

Ensure the following technologies and versions are installed, if your objective is to explore ALL projects that make up the `JSopX.OpenProjectX` enterprise-application suite:

- [Visual Studio (v 17.12.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#visual-studio-v-17123)
- [.NET Framework (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#net-framework-v-900)
- [ASP.NET Core (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#aspnet-core-v-900)
- [.NET Core Blazor (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#net-core-blazor-v-900)
- [.Net Core Maui Hybrid (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#net-core-maui-hybrid-v-900)
- [Node (v 20.14.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#node-v-20140)
- [npm (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#npm-v-1081)
- [Angular CLI (v 18.0.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#angular-cli-v-1803)
- [React (v 18.2.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#react-v-1820)
- [Vue (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#vue-v-1081)
- [Vite (v 3.4.21)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#vite-v-3421)
- [Bash](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#bash)
- [Powershell](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#powershell)


[`Back to Top`](#table-of-contents)

---

## **Postrequisites**

- I am still in discovery with [Angular CLI (v 18.0.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#angular-cli-v-1803). If you find a bug, see something I may not be implementing correctly, or something else, please do not hesistate to call me out. 

[`Back to Top`](#table-of-contents)

---

## Getting Started

> [!WARNING]
> This section describes a typical cloning operation using GitHub Repositories, you can use to easily get the latest `JSopX.AngularCore` project and explore it independently! To mimic the custom configuration used in the JSopX project architecture, takes some extra effort to fully implement and is not recommened.
> 
> **To mimic the advanced cloning operations we use to serve the `JSopX.OpenProjectX` project suite, as an `all-projects-in-one` project and/or `independent-projects` project installations, please see, [JSopX™ Visual Studio Projects GitHub Advanced](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/JSopxProjectsGitHubAdvanced.md) for details.**
>

---

### **Step-by-Step Instructions**

The JSopX™ Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role.

By aligning varied frameworks—ranging from ASP.NET Core to Angular, React, Vue, Blazor, and .NET MAUI—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly.

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve, adapt, and retain their own identity.

Case in Point...

---

### Step 1: Clone the Repository

1. _Open_ a terminal and navigate to the desired directory.

2. _Clone_ the `JSopX.AngularCore` GitHub Repository:
 
    **2.1: Using `Bash`:**
    ```bash

    # Using Bash: Clone JSopX.AngularCore Git Repository

    # 1. Navigate to the desired local directory where you plan to clone the repository
    cd path\to\local\repo\JSopX.AngularCore

    # 2. Clone JSopX.AngularCore Git Repository       
    git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
    
    ```
    
    **2.2: Using `Powershell`:**
    ```powershell

    # Using PowerShell: Clone JSopX.AngularCore Git Repository

    # 1. Navigate to the desired local directory where you plan to clone the repository
    cd path\to\local\repo\JSopX.AngularCore

    # 2. Clone JSopX.AngularCore Git Repository       
    git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
    
   ```
    
    **2.3: Using `Node.js` or `npm` (degit):**
 
    ```shell
    # Using Node.js / npm : Clone JSopX.AngularCore Git Repository
    # 1. Navigate to the desired local directory where you plan to clone the repository
    cd path\to\local\repo\JSopX.AngularCore
    
    # 2. Using npx degit to clone without .git history
    npx degit JasonSilvestri/JSopX.AngularCore
    ```

3. Navigate to the project directory:

   ```bash
   cd JSopX.AngularCore
   ```

[`Back to Top`](#table-of-contents)

---

### Step 2: Open the Solution

1. Launch **Visual Studio (v 17.12.3)**.
2. Open the solution file: `JSopX.AngularCore.sln`.

[`Back to Top`](#table-of-contents)

---

### Step 3: Configure the Project

> [!TIP]
> **Project Dependencies:**
>
> If you pay close attention to versions of Visual Studio, Asp.NET Core & the .NET Framework in general, you will notice that the latest versions of Visual Studio regularly drop and restore project dependencies, nuget packages and other resources between builds (by design). 
>
> It is good practice to be able to manually perform these operations, especially since you are exploring the `JSopX.AngularCore` project separately from the other `JSopX.` projects.
> 

1. Ensure project dependencies are restored:

   ```bash
   npm install
   ```

2. Verify that all NuGet packages are up to date:

   ```bash
   dotnet restore
   ```
   
[`Back to Top`](#table-of-contents)

---

### Step 4: Build and Run

1. Build the solution in Visual Studio.
2. Run the project:
   - Use the **IIS Express** profile for local development.

[`Back to Top`](#table-of-contents)

---

## **Project File Structure**

The `JSopX.AngularCore` Project contains several files and directories, all with their own functionality & purpose for existing. Conversely, there are some core files and directories that matter most, and they are as follows: 

```plaintext
JSopX.AngularCore/
├── jsopx.angularcore.client/      # Angular client-side application folder.
│   ├── angular.json               # Angular CLI workspace configuration file.
│   ├── package.json               # NPM dependencies and project metadata.
│   ├── src/                       # Main source directory for the Angular app.
│   │   ├── app/                   # Core Angular modules, components, and routing.
│   │   ├── index.html             # Root HTML file to bootstrap the Angular app.
│   │   └── main.ts                # Main entry point for Angular application.
├── JSopX.AngularCore.Server/      # ASP.NET Core server-side application folder.
│   ├── Program.cs                 # Main entry point for the ASP.NET Core server.
│   ├── Controllers/               # API controllers exposing server endpoints.
│   ├── appsettings.json           # Application settings file for configuration.
│   └── WeatherForecast.cs         # Example model class (default template).
├── JSopX.AngularCore.sln          # Visual Studio solution file.
```

[`Back to Top`](#table-of-contents)

---

## **Usage**

### Adding `JSopX.AngularCore` to Other Projects

1. **Add Project Reference**:

   - In Visual Studio, right-click the target project in Solution Explorer.
   - Select `Add > Project Reference`.
   - Check `JSopX.AngularCore` and click `OK`.

2. **Use Shared Code**:

   - Import shared constants, enums, or helpers from `JSopX.AngularCore`.

[`Back to Top`](#table-of-contents)

---

## **Extended Usage**

> [!TIP]
> These particular `Extended Uasage` examples are not required.
>

---

### Angular Client Project

1. Modify the `proxy.conf.js` file to include the API URL.
2. Use Angular services to consume APIs exposed by the server project.

### ASP.NET Core Server Project

1. Add dependency injection for shared services in `Program.cs`:

   ```csharp
   builder.Services.AddSingleton<MySharedService>();
   ```

2. Create or modify controllers to expose new endpoints.

[`Back to Top`](#table-of-contents)


---

## **Next Steps**

- Document additional features.
- Extend the Angular app with custom modules.
- Configure CI/CD pipelines for automated builds.

[`Back to Top`](#table-of-contents)

---

## In Conclusion

The `JSopX.AngularCore` Project (i.e., _jSilvestri.com BETA v 2025 JSopX™ Angular Core Open Project EXperience_) is one of several, FREE, open-source projects, included in the first-of-its-kind, Multi-Platform, Multi-Stack, `JSopX™` Enterprise-Level Application.

By centralizing project properties, filters, and other static, constants, this approach to basic object oriented coding should be one of the first things you do when extending your projects, especially with referencing the `JSopX.AngularCore` across projects.

---

[`Introduction`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/) » [`JSopX Projects`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/JSopxProjects.md) » [`JSopX.AngularCore`](https://github.com/JasonSilvestri/JSopX.AngularCore) » **[`Phase 1`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases/Phase-1-Minimum-Viable-Product-MVP.md)** · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](https://github.com/JasonSilvestri/JSopX.AspNetCore) [`Next »`](https://github.com/JasonSilvestri/JSopX.ReactCore)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
