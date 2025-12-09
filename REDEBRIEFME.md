# JSopX™ —  Core Project: Enterprise-Level Application Briefing (v1)

The **JSopX™ Core Project**, _code named_, `JSopX.Core` is a totally **FREE**, open-source, demonstration project showcasing how easy it is to build a web application using Angular CLI and ASP.NET Core Web API to consume a JSopX™ SaaS Services. 

---

```bash
# For The Cool Kids: Clone JSopX.Core Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.Core.git
```

---

[`Home`] » [`Solutions`] » [`JSopX.Core`] » [`Install`] ·· **[`Debrief`]** ·· [`Recreate`]

---

**JSopX™ Solution**:

[`« Previous`] [`Next »`]

---


## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Problem Statement — Major Concerns Addressed](#problem-statement--major-concerns-addressed)
- [Goals & Non-Goals](#goals--non-goals)
- [Architecture Summary](#architecture-summary)
- [Key Components](#key-components)
- [Platform Scope (v1)](#platform-scope-v1)
- [Repository File Structure](#repository-file-structure)
- [Clone `JSopX.Core` Git Repository](#clone-jsopx-core-git-repository)
  - [Option 1: Using `Bash`](#option-1-using-bash)
  - [Option 2: Using `Powershell`](#option-2-using-powershell)
  - [Option 3: Using `Node` or `npm` (degit)](#option-3-using-node-or-npm-degit)
  - [Open the Visual Studio Solution](#open-the-visual-studio-solution)
- [Configure the Project](#configure-the-project)
    - [Ensure Dependencies Are Restored](#ensure-dependencies-are-restored)
    - [Verify Nuget Packages](#verify-nuget-packages)
- [Be Sure to Build and Run](#be-sure-to-build-and-run)
- [License / Ownership](#license--ownership)

---

## Overview

The **Jason Silvestri Open Project EXperiences (JSopX™) JSopX™** prototype demonstrates the **core architecture for JSopX™** Apps (Web API, MAUI, background workers) reference Core (for models/contracts) and Data (for persistence).  

- Uses a **Class Library** `JSopX.Core` designed to deliver JSopX™ Apps (Web API, MAUI, background workers) reference Core (for models/contracts) and Data (for persistence).  
- Uses a **Class Library** `JSopX.Data` designed to deliver JSopX™ Apps EF Core (DbContext, entity configurations, migrations) in a dedicated class library.  
- Uses a **Web API** `JSopX.WebApi` designed to deliver JSopX™ Apps EF Core (DbContext, entity configurations, migrations) in a dedicated Web API library.  

These repositories are **strictly proprietary** and **not open for contributions**. Their purpose is internal development and controlled distribution only.  

---

🛡️ **IMPORTANT**: 

This repository **should NOT** be confused with the look and real, and/or even the _production-ready_ version(s) of the application(s) currently named, **Jason Silvestri Open Project EXperiences (JSopX™) JSopX™**. 

More importantly, we should keep it private as often as possible and `never` store sensitive information in the repository. 


[`⇧ Back to Top`](#table-of-contents)  

---

## Prerequisites

To build and run the **Jason Silvestri Open Project EXperiences (JSopX™) JSopX™**, ensure the following are installed:

- [Visual Studio (v 17.14.21)](https://visualstudio.microsoft.com/)  
- [.NET Framework (v 9.0.1)](https://dotnet.microsoft.com/)  
- [ASP.NET Core (v 9.0.1)](https://dotnet.microsoft.com/)  
- [.NET MAUI (v 9.0.1)](https://learn.microsoft.com/dotnet/maui/)  
- [Node.js (v 20.14.0)](https://nodejs.org/)  
- [npm (v 10.8.1)](https://www.npmjs.com/)  
- [Bash (v 5.x+)](https://www.gnu.org/software/bash/)  
- [PowerShell (v 7.x+)](https://learn.microsoft.com/powershell/)  

[`⇧ Back to Top`](#table-of-contents)  

---

## Platform Scope (v1)

- **Technology Stack:** .NET 9, ASP.NET Core 9, MAUI Hybrid, Blazor WebAssembly (optional).  
- **Database Layer:** EF Core (`TrackerDbContext`) using LocalDB for dev/testing, SQL Server for staging, and Azure SQL planned for production.  
- **Cross-Platform Targets:** Android, iOS, Windows, macOS, Web.  
- **Branding & Trademark:** All artifacts use **JSopX™**, owned by Jason Silvestri Open Project EXperiences (JSopX™).  
- **Repository Intent:** Internal-only; raw and compiled artifacts for Jason Silvestri engineering and deployment.  

[`⇧ Back to Top`](#table-of-contents)  

---

## Repository File Structure

```text
JSopX/
├─ README.md
├─ LICENSE
├─ CODE_OF_CONDUCT.md
├─ SECURITY.md
├─ JSopX.Core/           # Class Library: (for models/contracts) 
│  ├─ Entities.Patient/
│  ├─ Entities.Measurement/
│  ├─ ...
├─ JSopX.Data/           # Class Library: DbContext, Models and Data (for persistence)
│  ├─ DbContext/
│  ├─ ...
├─ JSopX.WebApi/         # WebApi: Controllers, Services, Program.cs
│  ├─ Controllers/
│  ├─ ...

```

[`⇧ Back to Top`](#table-of-contents)  

---

## **Clone `JSopX.Core` Git Repository**

Cloning a repository is straightforward, and it is really just a fancy way of saying, "_make a copy of the repository on your local machine._". 

**_GitHub_**, **_Microsoft_**, **_Node_** and other third-party tools make this easy with built-in commands, you can call through one of their `cmd` prompt flavors.

In fact, _you can Clone_ the **Jason Silvestri Open Project EXperiences (JSopX™) JSopX™** `JSopX.Core` GitHub Repository in serveral ways.

**Choose the approach below that fits your environment**:  

1. **[Bash](#option-1-using-bash)** → Ideal for **Linux, macOS, and Windows (WSL/Git Bash)** users.  
2. **[PowerShell](#option-2-using-powershell)** → Best for **Windows** users.  
3. **[Node.js](#option-3-using-node-or-npm-degit)** → A lightweight option for developers using **JavaScript-based workflows**.  

---

### **Option 1: Using `Bash`:**
 
Bash is a popular command-line shell and scripting language used in many operating systems, including Linux, macOS, and Windows (via WSL or Git Bash).

```bash

 # Using Bash: Clone JSopX.Core Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.Core

 # 2. Clone JSopX.Core Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.Core.git
    
```

[`Back to Top`](#clone-helix-git-repository)

---

### **Option 2: Using `Powershell`:**

Powershell is a task automation and configuration management framework from Microsoft, consisting of a command-line shell and associated scripting language.


```powershell

 # Using PowerShell: Clone JSopX.Core Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.Core

 # 2. Clone JSopX.Core Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.Core.git

```

[`Back to Top`](#clone-helix-git-repository)

---

### **Option 3: Using `Node` or `npm` (degit):**

Use Node.js and npm with `degit` to clone the repository without its `.git` history. This is useful for starting fresh without any commit history. 

```npm

 # Using Node.js / npm : Clone JSopX.Core Git Repository
 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.Core
    
 # 2. Using npx degit to clone without .git history
 npx degit https://github.com/JasonSilvestri/JSopX.Core

```

[`Back to Top`](#clone-helix-git-repository)

---

### **Open the Visual Studio Solution**

Working with the `JSopX.Core` Project in Visual Studio is simple enough.

1. Launch **Visual Studio (v 17.14.21)**.
2. Open the solution file: `JSopX.Core.sln`.

[`Back to Top`](#table-of-contents)

---

## **Configure the Project**

> [!TIP]
>
> Latest versions of Visual Studio performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). 
> 
> Still, it is good practice to be aware of the commands outlined in this step.
> 

---

### **Ensure Dependencies Are Restored:**

Ensure `JSopX.Core` Project dependencies are restored:

```bash
 npm install
```

[`Back to Top`](#table-of-contents)

---

### **Verify Nuget Packages:**

Verify that all NuGet packages are up to date:

```bash
 dotnet restore
```
   
[`Back to Top`](#table-of-contents)

---

## **Be Sure to Build and Run**

Building and Running the `JSopX.Core` Project in Visual Studio is also another simple task.

1. Build the solution in `Visual Studio`.
2. Run the project:
   - Use the **IIS Express** profile for local development.

[`Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

- **[`Debrief`]** → **You are HERE**!

---

1. **[`Intro`]** → **Introduction to the project** and its core concepts, technologies, and architecture.
2. **[`Install`]** → **Install the project** and set up your development environment for the JSopX™ Data Project.   
3. **[`Recreate`]** → **Create project** from scratch, step-by-step, using the JSopX™ Data Project _From Scratch_ Variant.

> [!NOTE]
> This section will be updated as new steps and resources become available. 
 

---

## License / Ownership

**JSopX™** is a registered trademark of Jason Silvestri Open Project EXperiences (JSopX™). Unauthorized use, modification, or distribution of this software is strictly prohibited.

---

## Default Project Files

Here are the default files that get created for every `JSopX` Visual Studio project.

### **About Project**: 
The root solution [`Intro`] → `README.md` of project repositories that explains the high-level solution and projects included.

### **Briefings**: 
The root solution [`Debrief`] → `REDEBRIEFME.md` of project repositories, which is a document we often create first before creating Step-by-Step guides. It outlines the purpose, goals, architecture, and key components of the project.

### **Step-by-Step HowTo Guides**: 
The root solution [`Recreate`] → `RECREATEME.md` of project repositories that provides detailed instructions on how to step-by-step, create each page, code, set up, configuration, and use in the project.

### **Installation**: 
Similar to _About Project_, but more of a step-by-step breakdown, the root solution [`Install`] → `REINSTALLME.md` of project repositories that explains how to install and set up the project.

### **Change Logs**: 
The [`Changelogs`] → `CHANGELOG.md` file that tracks changes, updates, and versions of the project over time.

### **Contributing Guidelines**: 
The [`Contributing`] → `CONTRIBUTING.md` file that outlines how developers can contribute to the project, including coding standards, pull request processes, and issue reporting.

### **Code of Conduct**: 
The [`Conduct`] → `CODE_OF_CONDUCT.md` file that sets the expectations for behavior within the project community.

### **Security Policy**: 
The [`Security`] → `SECURITY.md` file that provides guidelines on how to report security vulnerabilities and the project's approach to security.

### **License Information**: 
The [`License`] → `LICENSE.txt` file that specifies the licensing terms under which the project is distributed.
 
---

**JSopX™ Solution**:

[`« Previous`] [`Next »`] ··· [`⇧ Back to Top`]

---

[`Home`] » [`Solutions`] » [`JSopX.Core`] » [`Install`] ·· **[`Debrief`]** ·· [`Recreate`] ··· [`⇧ Back to Top`]

---

##### [jsopx.com] | [GitHub] | [Lexicon] | [Email] | Phone : 508-851-9445

###### Copyright © 2025 – All Rights Reserved by Jason Silvestri Open Project EXperiences (JSopX™)

[jsopx.com]: http://jsopx.com "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Products, Services and SaaS Services"
[Email]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Open Project EXperiences (JSopX™) Email Contact for Mark Silvetri"
[Phone]: phoneto:508-851-9445 "Jason Silvestri Open Project EXperiences (JSopX™) Phone Contact for Mark Silvetri"
[therealjasonsilvestri@gmail.com]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Open Project EXperiences (JSopX™) Email Contact for Mark Silvetri"
[508-851-9445]: phoneto:508-851-9445 "Jason Silvestri Open Project EXperiences (JSopX™) Phone Contact for Mark Silvetri"

[GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri Open Project EXperiences (JSopX™) GitHub Repository"

[Current Git Hub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Document Management Project Solution GitHub Repository"
[Current GitHub Home]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/README.md "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Document Management Project GitHub Home README.md"

<!--Root Lexicon -->
[Lexicon]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/Lexicon.md "JSopX™ Project Common Lexicon.md"
[`Lexicon`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/Lexicon.md "JSopX™ Project Common Lexicon.md"

<!--Root Solution Home-->
[`Home`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management Project Home README.md"
<!--Root Solution Project -->
[`JSopX.Core`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/README.md "JSopX™ SaaS JSopX™ Core Project Solution example README.md"
<!--Root Solution Previous -->
[`« Previous`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution README.md"
<!--Root Solution Next -->
[`Next »`]: /JSopX.BridgeTooFar/docs/md/JSopX.Data/README.md "JSopX™ SaaS Data Project Solution README.md"

<!--Install README.md - Often same as Root Solution-->
[`Intro`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/README.md "JSopX™ SaaS Project Solution Install README.md"
<!--Install README.md - Often same as Root Solution-->
[`Install`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/REINSTALLME.md "JSopX™ SaaS Project Solution Install README.md"
<!--Briefing REDEBRIEFME.md - The briefing of the Solution-->
[`Debrief`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/REDEBRIEFME.md "JSopX™ SaaS Document Management Project Briefing REDEBRIEFME.md"
<!--Recreate RECREATEME.md - The step by step instructions to Create Solution - often from briefing -->
[`Recreate`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/RECREATEME.md "JSopX™ SaaS Document Management Project Step by Step HowTo Re-Create RECREATEME.md"
<!--Recreate CHANGELOG.md - The Changelogs of Solution - often from briefing -->
[`Changelogs`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/CHANGELOG.md "JSopX™ SaaS Document Management Project Change Logs CHANGELOG.md"
<!--Recreate CONTRIBUTING.md - The Contributing Guidelines of Solution - often from briefing -->
[`Contributing`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/CONTRIBUTING.md "JSopX™ SaaS Contributor Guidelines CONTRIBUTING.md"
<!--Recreate CODE_OF_CONDUCT.md - The Code of Conduct of Solution - often from briefing -->
[`Conduct`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/CODE_OF_CONDUCT.md "JSopX™ SaaS Code of Conduct CODE_OF_CONDUCT.md"
<!--Recreate SECURITY.md - The Security Policy of Solution - often from briefing -->
[`Security`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/SECURITY.md "JSopX™ SaaS Security Policy SECURITY.md"
<!--Recreate LICENSE.txt - The LICENSE Policy of Solution - often from briefing -->
[`License`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/SECURITY.md "JSopX™ LICENSE Policy LICENSE.txt"

<!--Root Solution Project Solutions -->
[`Solutions`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md "JSopX™ SaaS Project Solutions README.md"
<!--Root Solution Project Visual Studio Templates -->
[`VS Templates`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md "JSopX™ SaaS Visual Studio Project Solutions Templates README.md"
<!--Root Solution Technologies -->
[`Technologies`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md "JSopX™ Project Solution Technologies README.md"

<!--Root Solution Project Solutions -->
[`Common`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/README.md "JSopX™ SaaS Project Common README.md"
[⚙️ Workflow State]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[⚙️ `Workflow State`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[Workflow States]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Workflow States`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Junction Rules`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
[Junction Rules]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
<!--Root Solution Project Solutions -->
[`Database`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/README.md "JSopX™ SaaS Project Common README.md"
[`Schema`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/Schema.md "JSopX™ SaaS Project Common Schema.md"

<!-- Back to Top links (all styles) found under most sections -->
[Back to Top]: #table-of-contents "Primary document table of contents"
[`Back to Top`]: #table-of-contents "Primary document table of contents"
[`⇧ Back to Top`]: #table-of-contents "Primary document table of contents"


<!-- Long Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`<https://github.com/JasonSilvestri/OpenProjectX>`]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Core>`]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.ML>`]: https://github.com/JasonSilvestri/JSopX.ML "JSopX™ ML SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Halos>`]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.WebApi>`]: https://github.com/JasonSilvestri/JSopX.WebApi "JSopX™ WebAPI SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Data>`]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Vault>`]: https://github.com/JasonSilvestri/JSopX.Vault "JSopX™ Vault SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Presentation>`]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.ClassLibrary>`]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Unitx>`]: https://github.com/JasonSilvestri/JSopX.Unitx "JSopX™ Unit Testing SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.SaaS>`]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore>`]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Titrate SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.HealthTracker>`]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.Maui.MPA>`]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.CRM>`]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.PLM>`]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Core>`]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core consumption SaaS Example Project"
<!-- Short Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX GitHub]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[JSopX.Core GitHub]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[JSopX.Data GitHub]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[JSopX.ML GitHub]: https://github.com/JasonSilvestri/JSopX.ML "JSopX™ ML SaaS Project"
[JSopX.Halos GitHub]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[JSopX.WebApi GitHub]: https://github.com/JasonSilvestri/JSopX.WebApi "JSopX™ Web API SaaS Project"
[JSopX.Vault GitHub]: https://github.com/JasonSilvestri/JSopX.Vault "JSopX™ Vault SaaS Project"
[JSopX.Presentation GitHub]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary GitHub]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[JSopX.Unitx GitHub]: https://github.com/JasonSilvestri/JSopX.Unitx "JSopX™ Unit Testing SaaS Project"
[JSopX.SaaS GitHub]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore GitHub]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Titrate SaaS Project"
[JSopX.HealthTracker GitHub]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA GitHub]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[JSopX.CRM GitHub]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM GitHub]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.Core GitHub]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core consumption SaaS Example Project"
<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX]: /JSopX.BridgeTooFar/docs/md/JSopX/README.md "JSopX™ Enterprise-Level Solution"
[JSopX.Core]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/README.md "JSopX™ Core SaaS Project"
[JSopX.Data]: /JSopX.BridgeTooFar/docs/md/JSopX.Data/README.md "JSopX™ Data SaaS Project"
[JSopX.ML]: /JSopX.BridgeTooFar/docs/md/JSopX.ML/README.md "JSopX™ ML SaaS Project"
[JSopX.Halos]: /JSopX.BridgeTooFar/docs/md/JSopX.Halos/README.md "JSopX™ Halos SaaS Project"
[JSopX.WebApi]: /JSopX.BridgeTooFar/docs/md/JSopX.WebApi/README.md "JSopX™ WebAPI SaaS Project"
[JSopX.Vault]: /JSopX.BridgeTooFar/docs/md/JSopX.Vault/README.md "JSopX™ Vault SaaS Project"
[JSopX.Presentation]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/README.md "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary]: /JSopX.BridgeTooFar/docs/md/JSopX.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[JSopX.Unitx]: /JSopX.BridgeTooFar/docs/md/JSopX.Unitx/README.md "JSopX™ Unit Testing SaaS Project"
[JSopX.SaaS]: /JSopX.BridgeTooFar/docs/md/JSopX.SaaS/README.md "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore]: /JSopX.BridgeTooFar/docs/md/JSopX.MauiHybridNetCore/README.md "JSopX™ MAUI Titrate SaaS Project"
[JSopX.HealthTracker]: /JSopX.BridgeTooFar/docs/md/JSopX.HealthTracker/README.md "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA]: /JSopX.BridgeTooFar/docs/md/JSopX.Maui.MPA/README.md "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[JSopX.CRM]: /JSopX.BridgeTooFar/docs/md/JSopX.CRM/README.md "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM]: /JSopX.BridgeTooFar/docs/md/JSopX.PLM/README.md "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.Core]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/README.md "JSopX™ Product Lifecycle Management SaaS Project"
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`JSopX`]: /JSopX.BridgeTooFar/docs/md/JSopX/README.md "JSopX™ Enterprise-Level Solution"
[`JSopX.Core`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/README.md "JSopX™ Core SaaS Project"
[`JSopX.Data`]: /JSopX.BridgeTooFar/docs/md/JSopX.Data/README.md "JSopX™ Data SaaS Project"
[`JSopX.ML`]: /JSopX.BridgeTooFar/docs/md/JSopX.ML/README.md "JSopX™ ML SaaS Project"
[`JSopX.Halos`]: /JSopX.BridgeTooFar/docs/md/JSopX.Halos/README.md "JSopX™ Halos SaaS Project"
[`JSopX.WebApi`]: /JSopX.BridgeTooFar/docs/md/JSopX.WebApi/README.md "JSopX™ WebAPI SaaS Project"
[`JSopX.Vault`]: /JSopX.BridgeTooFar/docs/md/JSopX.Vault/README.md "JSopX™ Vault SaaS Project"
[`JSopX.Presentation`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/README.md "JSopX™ Presentation SaaS Project"
[`JSopX.ClassLibrary`]: /JSopX.BridgeTooFar/docs/md/JSopX.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[`JSopX.Unitx`]: /JSopX.BridgeTooFar/docs/md/JSopX.Unitx/README.md "JSopX™ Unit Testing SaaS Project"
[`JSopX.SaaS`]: /JSopX.BridgeTooFar/docs/md/JSopX.SaaS/README.md "JSopX™ SaaS Project"
[`JSopX.MauiHybridNetCore`]: /JSopX.BridgeTooFar/docs/md/JSopX.MauiHybridNetCore/README.md "JSopX™ MAUI Titrate SaaS Project"
[`JSopX.HealthTracker`]: /JSopX.BridgeTooFar/docs/md/JSopX.HealthTracker/README.md "The Original JSopX™ Maui SaaS Project by Mark"
[`JSopX.Maui.MPA`]: /JSopX.BridgeTooFar/docs/md/JSopX.Maui.MPA/README.md "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[`JSopX.CRM`]: /JSopX.BridgeTooFar/docs/md/JSopX.CRM/README.md "JSopX™ Customer Relationship Management SaaS Project"
[`JSopX.PLM`]: /JSopX.BridgeTooFar/docs/md/JSopX.PLM/README.md "JSopX™ Product Lifecycle Management SaaS Project"
[`JSopX.Core`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/README.md "JSopX™ Product Lifecycle Management SaaS Project"
<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solutions & Version All SaaS Projects -->
[JSopX (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopx "JSopX™ Enterprise-Level Solution"
[JSopX.Core (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxcore "JSopX™ Core SaaS Project"
[JSopX.Data (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxdata "JSopX™ Data SaaS Project"
[JSopX.ML (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxml "JSopX™ ML SaaS Project"
[JSopX.Halos (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxhalos "JSopX™ WebAPI SaaS Project"
[JSopX.Vault (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxvault "JSopX™ Vault SaaS Project"
[JSopX.Presentation (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxpresentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxutilities "JSopX™ Utilities SaaS Project"
[JSopX.Unitx (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxunitx "JSopX™ Unit Testing SaaS Project"
[JSopX.SaaS (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxsaas "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxtitrate "JSopX™ MAUI Titrate SaaS Project"
[JSopX.HealthTracker (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxtitrate "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxmauimpa "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxbridgetoofar "JSopX™ Document Management SaaS Project"
[JSopX.CRM (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxcrm "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxplm "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.Core (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxangularcore "JSopX™ Product Lifecycle Management SaaS Project"
<!-- Short Form Local Document Management Links of all JSopX™ Visual Studio Templates-->
[Blank Solution VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#blank-solution-visual-studio-template "JSopX™ Visual Studio Blank Solution Project Template"
[ASP.NET Core Web App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#aspnet-core-web-app-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web App Project Template"
[Console App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#console-app-visual-studio-template "JSopX™ Visual Studio Console App Project Template"
[Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#class-library-visual-studio-template "JSopX™ Visual Studio Class Library Project Template"
[Razor Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#razor-class-library-visual-studio-template "JSopX™ Visual Studio Razor Class Library Project Template"
[Asp.NET Core Web API VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#aspnet-core-web-api-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web Api Project Template"
[Angular and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#angular-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Angular and ASP.NET Core Project Template"
[React and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#react-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio React and ASP.NET Core Project Template"
[Vue and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#vue-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Vue and ASP.NET Core Project Template"
[Blazor Web App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#blazor-web-app-visual-studio-template "JSopX™ Visual Studio Blazor Web App Project Template"
[.NET MAUI Blazor Hybrid and Web App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#net-maui-blazor-hybrid-and-web-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Blazor Hybrid and Web App Project Template"
[.NET MAUI Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#net-maui-class-library-visual-studio-template "JSopX™ Visual Studio .NET MAUI Class Library Project Template"
[Website VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#website-visual-studio-template "JSopX™ Visual Studio Website Project Template"
[.NET MAUI Multi-Project App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#net-maui-multi-project-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Multi-Project App Project Template"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[npm]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[Vue]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[Vite]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[Python]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[Bash]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[`Windows`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[`Visual Studio`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[`.NET Framework`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[`ASP.NET Core`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[`.NET Core Blazor`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[`.Net Core Maui Hybrid`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[`Node`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[`npm`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[`Bootstrap`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[`Angular CLI`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[`React`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[`Vue`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[`Vite`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[`Python`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[`Bash`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[`Powershell`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows (v 10+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Windows.md "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio (v 17.14.21)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/VisualStudio.md "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/NetFrameworkSdk.md "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/AspNetCore.md "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/NetCoreBlazor.md "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/NetCoreMauiHybrid.md "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node (v 20.14.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Node.md "JSopX™ SaaS Project Node Technology Requirements"
[npm (v 10.8.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/npm.md "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap (v 5.3.8)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Bootstrap.md "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI (v 18.0.3)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/AngularCli.md "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React (v 18.2.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/React.md "JSopX™ SaaS Project React Technology Requirements"
[Vue (v 3.4.21)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Vue.md "JSopX™ SaaS Project Vue Technology Requirements"
[Vite (v 5.2.8)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Vite.md "JSopX™ SaaS Project Vite Technology Requirements"
[Python (v 3.12.3x+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Python.md "JSopX™ SaaS Project Python Technology Requirements"
[Bash (v 5.x+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Bash.md "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell (v 7.x+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Powershell.md "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[Created]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#created
[Queued]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#queued
[In Progress]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#in-progress
[Waiting]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#waiting
[Passed]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#passed
[Failed]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#failed
[Rejected]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#rejected
[Cancelled]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#cancelled
[Skipped]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#skipped
[Timeout]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#timeout
[Network Error]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#network-error
[Validation Error]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#validation-error
[Retrying]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#retrying
[Blocked]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#blocked
[Completed]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#completed
[To Do]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#to-do
[Started]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#started
[Pending]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#pending
[Expired]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#expired
[Approved]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#approved
[Sent]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#sent
[Received]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#received
[Under Review]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#under-review
[Soft Delete]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#soft-delete
[Hard Delete]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#hard-delete
[Unknown]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#unknown
[Null or Empty]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#null-or-empty
[Active]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#active

<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[`CREATED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#created
[`QUEUED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#queued
[`IN PROGRESS`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#in-progress
[`WAITING`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#waiting
[`PASSED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#passed
[`FAILED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#failed
[`REJECTED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#rejected
[`CANCELLED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#cancelled
[`SKIPPED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#skipped
[`TIMEOUT`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#timeout
[`NETWORK ERROR`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#network-error
[`VALIDATION ERROR`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#validation-error
[`RETRYING`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#retrying
[`BLOCKED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#blocked
[`COMPLETED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#completed
[`TO DO`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#to-do
[`STARTED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#started
[`PENDING`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#pending
[`EXPIRED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#expired
[`APPROVED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#approved
[`SENT`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#sent
[`RECEIVED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#received
[`UNDER REVIEW`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#under-review
[`SOFT DELETE`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#soft-delete
[`HARD DELETE`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#hard-delete
[`UNKNOWN`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#unknown
[`NULL OR EMPTY`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#null-or-empty
[`ACTIVE`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#active