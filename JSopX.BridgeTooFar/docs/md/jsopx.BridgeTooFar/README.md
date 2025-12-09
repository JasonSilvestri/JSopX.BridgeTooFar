# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-bridge-too-far-logo.svg" style="width: 28px; height: auto; margin-right:12px; margin-top:12px;!important;"> JSopX™ Bridge Too Far Project

The **JSopX™ Bridge Too Far Project**, _code named_, `JSopX.BridgeTooFar` is a totally **FREE**, open-source, Razor Class Library, and has evolved into a centralized hub for managing and sharing ALL assets and documentation, across all other JSopX™ Projects, including all Class Libraries, RCLs, server-side and client-side projects.

---

## **By-Phase Variant:**

> [!IMPORTANT]
> You are currently viewing the **"_By-Phase_" _Variant_** of the **JSopX™ Bridge Too Far Project**.
>
> For more details, see [Getting Started](#getting-started) _below_.

---

```bash
# For The Cool Kids: Clone JSopX.BridgeTooFar Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git
```

---

[`Home`](../../../jsopx.BridgeTooFar/p1/v1/README.md) » [`Introduction`](../../../jsopx.Global/Introduction/) » [`Projects`](../../../jsopx.BridgeTooFar/p1/v1/OpenProjects/) · · [`Use Latest`](../../../jsopx.BridgeTooFar/README.md) · `By-Phase` · [`From Scratch`](../../../jsopx.BridgeTooFar/p1/v1/RECREATEME.md) · · [`« Previous`](../../../jsopx.WebAPI/p1/v1/) [`Next »`](../../../jsopx.SharedResources/p1/v1/)

---

## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)
  - [Step 2: Open the Solution](#step-2-open-the-solution)
  - [Step 3: Configure the Project](#step-3-configure-the-project)
  - [Step 4: Build and Run](#step-4-be-sure-to-build-and-run)
  - [Step 5: Project File Structure](#step-5-project-file-structure)
  - [Step 6: JSopX™ Project References & Dependencies](#step-6-jsopx-project-references--dependencies)
  - [Step 7: Usage](#step-7-usage)
  - [Step 8: Extended Usage](#step-8-extended-usage)
  - [Next Steps](#next-steps)

---

## Overview

The **JSopX™ Bridge Too Far Project**, _code named_, `JSopX.BridgeTooFar` is a totally **FREE**, open-source, Razor Class Library, and has evolved into a centralized hub for managing and sharing ALL assets and documentation, across all other JSopX™ Projects, including all Class Libraries, RCLs, server-side and client-side projects.

We initially create the project to simulate a [Shared Assets & Resources Projects](../../../jsopx.Global/Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that will need to be leveraged by the other new and existing client side and server side projects, which act as standards that conform to the initial [business requirements](../../../jsopx.Global/Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../../jsopx.Global/Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../../jsopx.OpenProjectX/p1/v1/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role.

By aligning varied frameworks—ranging from [ASP.NET Core](../../../jsopx.AspNetCore/README.md) to [Angular](../../../jsopx.AngularCore/README.md), [Vue](../../../jsopx.VueCore/README.md), [React](../../../jsopx.ReactCore/README.md), [Blazor](../../../jsopx.BlazorServerCore/README.md), [MAUI](../../../jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../../jsopx.WebAPI/README.md), [assets](../../../jsopx.RCLxProper/README.md), [documentation](../../../jsopx.BridgeTooFar/README.md), and [standards](../../../jsopx.Global/Introduction/JSopxDevelopmentStandards.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly, bridging-of-the-critical-gap, between front-end dynamism and back-end security.

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring just the `JSopX.BridgeTooFar` Project.

- [Visual Studio (v 17.14.21)](../jsopx.Global/Technologies/#visual-studio)
- [.NET Framework (v 9.2.1)](../jsopx.Global/Technologies/#net-framework)
- [ASP.NET Core (v 9.2.1)](../jsopx.Global/Technologies/#aspnet-core)
- [Node (v 20.14.0)](../jsopx.Global/Technologies/#node)
- [npm (v 10.8.1)](../jsopx.Global/Technologies/#npm)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Browsing By-Phase `JSopX.`BridgeTooFar**:

- **[Continue](#step-1-clone-the-repository)** → **Continue** as **you were**, browsing **previous versions** of the application by **phases** using the `JSopX.BridgeTooFar` _By-Phase_ Variant.  

---

### 2. **Use Different Variant**:

- **[Install Using Latest](../../../jsopx.BridgeTooFar/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.BridgeTooFar` _Using Latest_ Variant.  
- **[Start From Scratch](../../../jsopx.BridgeTooFar/p1/v1/RECREATEME.md)** → **Create project** from scratch, step-by-step, using the `JSopX.BridgeTooFar` _From Scratch_ Variant.
- **[Get All Projects](../../../jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

## **Step 1: Clone the Repository**

_Clone_ the `JSopX.BridgeTooFar` GitHub Repository if you plan to explore it independently from the rest of the projects.

Choose the approach below that fits your environment:  

- **[Bash](#step-11-using-bash)** → Ideal for **Linux, macOS, and Windows (WSL/Git Bash)** users.  
- **[PowerShell](#step-12-using-powershell)** → Best for **Windows** users.  
- **[Node.js](#step-13-using-nodejs-or-npm-degit)** → A lightweight option for developers using **JavaScript-based workflows**.  

---

### **Step 1.1: Using `Bash`:**
 
```bash

 # Using Bash: Clone JSopX.BridgeTooFar Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.BridgeTooFar

 # 2. Clone JSopX.BridgeTooFar Git Repository      
 git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git
   
```

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 1.2: Using `Powershell`:**

```powershell

 # Using PowerShell: Clone JSopX.BridgeTooFar Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.BridgeTooFar

 # 2. Clone JSopX.BridgeTooFar Git Repository      
 git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git

```

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 1.3: Using `Node.js` or `npm` (degit):**
 
```shell

 # Using Node.js / npm : Clone JSopX.BridgeTooFar Git Repository
 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.BridgeTooFar
   
 # 2. Using npx degit to clone without .git history
 npx degit https://github.com/JasonSilvestri/JSopX.BridgeTooFar

```

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 2: Open the Solution**

Working with the `JSopX.BridgeTooFar` Project in Visual Studio is simple enough.

1. Launch **[Visual Studio (v 17.14.21)](../../../jsopx.BridgeTooFar/p1/v1/Technologies/#visual-studio)**.
2. Open the solution file: `JSopX.BridgeTooFar.sln`.

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 3: Configure the Project**

> [!TIP]
>
> Latest versions of [Visual Studio](../../../jsopx.BridgeTooFar/p1/v1/Technologies/#visual-studio) performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). Still, it is good practice to at least be aware of the commands outlined in this step.
>

---

### **Step: 3.1: Ensure Dependencies Are Restored:**

Ensure `JSopX.BridgeTooFar` Project dependencies are restored:

```bash
 npm install
```

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 3.2: Verify Nuget Packages:**

Verify that all NuGet packages are up to date:

```bash
 dotnet restore
```
     
[`⇧ Back to Top`](#table-of-contents)

---

## **Step 4: Be Sure to Build and Run**

Building and Running the `JSopX.BridgeTooFar` Project in Visual Studio is also another simple task.

### **Step: 4.1: Build and Run**:

1. Build the solution in [Visual Studio](../../../jsopx.BridgeTooFar/p1/v1/Technologies/#visual-studio).
2. Run the project:
   - Use the **IIS Express** profile for local development.

---

### **Step: 4.2: And Now Your Done**:

Assuming the `JSopX.BridgeTooFar` Project is running as expected, **you are now done** with the **installation** and **execution** of the project!

1. **Skip Remaining Steps**:
   - Technically, you could skip to the [Next Steps](#next-steps) section if you are on a project-by-project installation mission.
2. **Conclude Remaining Steps**:
   - **Me personally?** I would continue on to the remaining steps _below_, starting at **[Step 5: Project Structure](#step-5-project-file-structure)**. There is just very useful information related to the project that I would find helpful.

[`⇧ Back to Top`](#table-of-contents)

---


## **Step 5: Project File Structure**

The file structure shown below is a high-level overview of the main files and folders within the `JSopX.BridgeTooFar` Visual Studio Solution. Some files and folders may be omitted for brevity.


[`⇧ Back to Top`](#table-of-contents)

---


### **Step: 5.1: Visual Studio Project and Solution Structure**:

All `JSopX™ projects` follow a consistent directory structure. The most common project and solution structure for the `JSopX.BridgeTooFar` Visual Studio Solution is as follows:

| File/Folder | Description |
|:------------|:-------------|
| 📁&nbsp;**`JSopX.BridgeTooFar`** | *Root* folder for the JSopX™ Bridge Too Far Project Visual Studio Solution. |
| ├&nbsp;📝&nbsp;`JSopX.BridgeTooFar.sln` | Visual Studio solution `.sln` *file* for the JSopX™ Bridge Too Far Project. |
| ├&nbsp;📁&nbsp;**`JSopX.BridgeTooFar/`** | *Root* folder for the JSopX™ Bridge Too Far Project Visual Studio Project. |
| &nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.BridgeTooFar.csproj` | Asp.NET Core Visual Studio Server Project `.csproj` configuration file. |


[`⇧ Back to Top`](#table-of-contents)

---


## Step 5.2: Visual Studio Solution Files

The most common `JSopX.BridgeTooFar` Visual Studio Solution files are as follows:

| File/Folder | Description |
|:------------|:-------------|
| 📁&nbsp;**`JSopX.BridgeTooFar`** | *Root* folder for the JSopX™ Bridge Too Far Project Visual Studio Solution. |
| ├&nbsp;📝&nbsp;`JSopX.BridgeTooFar.sln` | Visual Studio solution `.sln` *file* for the JSopX™ Bridge Too Far Project. |
| ├&nbsp;📝&nbsp;`.gitattributes` | *Git* attributes file that defines how Git should handle certain files and directories in the repository. The first iteration of this file is created automatically when we create a new origin repository on GitHub for the corresponding project. |
| ├&nbsp;📝&nbsp;`.gitignore` | Specifies *files* and *directories* that should be ignored by Git when committing changes to the repository. The first iteration of this file is created automatically when we create a new origin repository on GitHub for the corresponding project. |
| ├&nbsp;📝&nbsp;`LICENSE.txt` | *Licensing* information for the project (generally `MIT` open-source license). |
| ├&nbsp;📝&nbsp;`PathConfig.targets` | Centralized MSBuild target configuration for project references. |
| ├&nbsp;📝&nbsp;`README.md` | The *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| ├&nbsp;📝&nbsp;`REINSTALLME.md` | The *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| ├&nbsp;📝&nbsp;`REDEBRIEFME.md` | The *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| ├&nbsp;📝&nbsp;`RECREATEME.md` | The *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| ├&nbsp;📝&nbsp;`SECURITY.md` | The *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| ├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | The *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| ├&nbsp;📝&nbsp;`CONTRIBUTING.md` | The *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| ├&nbsp;📝&nbsp;`CHANGELOG.md` | The *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |

> **Heads Up!**  
>
> Many of the preceding `.md` files shown in the *Solution Files structure*, such as `README.md`, `REINSTALLME.md`, `REDEBRIEFME.md`, `RECREATEME.md`, etc., just so happen to be the types of documentation the `JSopX.BridgeTooFar` handles for all projects.


---

### **Step: 5.3: Visual Studio Project Files**

The most common project files for the `JSopX.BridgeTooFar` Visual Studio Project is as follows:

### Project Root

| File/Folder | Description |
|:------------|:-------------|
| 📁&nbsp;**`JSopX.BridgeTooFar/`** | *Root* folder for the JSopX™ Bridge Too Far Project Visual Studio Project. |
| ├&nbsp;📝&nbsp;`JSopX.BridgeTooFar.csproj` | Asp.NET Core Visual Studio Server Project `.csproj` configuration file. |


[`⇧ Back to Top`](#table-of-contents)

---


### `doc-assets/` Folder

| File/Folder                                             | Description                                |
|:---------------------------------------------------------|:------------------------------------------|
| ├&nbsp;📁&nbsp;`doc-assets/`                      | *Assets* for docs specifically, housing all static assets used in documentation. |
| &nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`jsopx-logo.png` | Official JSopX™ `JSopX.OpenProjectX` logo in `.PNG` format. |
| &nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`jsopx-logo.svg` | Official JSopX™ `JSopX.OpenProjectX` logo in `.SVG` format. |


[`⇧ Back to Top`](#table-of-contents)

---


### `DocsOpenX/` Folder (Global Docs Categories)

| File/Folder | Description |
|:------------|:-------------|
| ├&nbsp;📁&nbsp;`DocsOpenX/` | Main source directory for all documentation currently available. |
| &nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`Introduction/` | Main source directory for the introduction to all projects. |
| &nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`DesignPatterns/` | Main source directory for the design patterns we use throughout all projects. |
| &nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`GitHub/` | Main source directory for the minimal GitHub documentation we have to use with any (or all) projects. |
| &nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`Technologies/` | Main source directory for all the technologies we support and the detailed docs we have available. |
| &nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`OpenProjects/` | Main source directory for all JSopX™ Project specific documentation currently available. |


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.OpenProjectX/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.OpenProjectX/` | **All JSopX™ Open Project X [JSopX.OpenProjectX](../jsopx-open-project-x/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.OpenProjectX` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.OpenProjectX` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.OpenProjectX` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.OpenProjectX` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.OpenProjectX` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.OpenProjectX` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.OpenProjectX` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.OpenProjectX` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.OpenProjectX` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.AngularCore/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.AngularCore/` | **All JSopX™ Angular Core [JSopX.AngularCore](../jsopx-angular-core/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.AngularCore` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.AngularCore` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.AngularCore` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.AngularCore` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.AngularCore` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.AngularCore` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.AngularCore` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.AngularCore` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.AngularCore` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.AspNetCore/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.AspNetCore/` | **All JSopX™ Asp.NET Core [JSopX.AspNetCore](../jsopx-angular-core/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.AspNetCore` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.AspNetCore` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.AspNetCore` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.AspNetCore` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.AspNetCore` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.AspNetCore` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.AspNetCore` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.AspNetCore` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.AspNetCore` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.BlazorServerCore/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.BlazorServerCore/` | **All JSopX™ Blazor Server Core [JSopX.BlazorServerCore](../jsopx-blazor-server-core/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.BlazorServerCore` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.BlazorServerCore` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.BlazorServerCore` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.BlazorServerCore` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.BlazorServerCore` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.BlazorServerCore` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.BlazorServerCore` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.BlazorServerCore` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.BlazorServerCore` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.BridgeTooFar/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.BridgeTooFar/` | **All JSopX™ Bridge Too Far [JSopX.BridgeTooFar](../jsopx-bridge-too-far/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.BridgeTooFar` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.BridgeTooFar` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.BridgeTooFar` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.BridgeTooFar` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.BridgeTooFar` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.BridgeTooFar` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.BridgeTooFar` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.BridgeTooFar` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.BridgeTooFar` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.ClassLibrary/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.ClassLibrary/` | **All JSopX™ Class Library [JSopX.ClassLibrary](../jsopx-class-library/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.ClassLibrary` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.ClassLibrary` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.ClassLibrary` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.ClassLibrary` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.ClassLibrary` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.ClassLibrary` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.ClassLibrary` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.ClassLibrary` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.ClassLibrary` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.MauiHybridNetCore/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.MauiHybridNetCore/` | **All JSopX™ Maui Hybrid Net Core [JSopX.MauiHybridNetCore](../jsopx-maui-hybrid-net-core/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.MauiHybridNetCore` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.MauiHybridNetCore` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.MauiHybridNetCore` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.MauiHybridNetCore` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.MauiHybridNetCore` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.MauiHybridNetCore` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.MauiHybridNetCore` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.MauiHybridNetCore` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.MauiHybridNetCore` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.ReactCore/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.ReactCore/` | **All JSopX™ React Core [JSopX.ReactCore](../jsopx-react-core/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.ReactCore` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.ReactCore` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.ReactCore` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.ReactCore` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.ReactCore` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.ReactCore` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.ReactCore` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.ReactCore` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.ReactCore` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.VueCore/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.VueCore/` | **All JSopX™ Vue Core [JSopX.VueCore](../jsopx-vue-core/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.VueCore` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.VueCore` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.VueCore` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.VueCore` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.VueCore` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.VueCore` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.VueCore` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.VueCore` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.VueCore` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.WebAPI/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.WebAPI/` | **All JSopX™ RCL x Assets [JSopX.WebAPI](../jsopx-web-api/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.WebAPI` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.WebAPI` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.WebAPI` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.WebAPI` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.WebAPI` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.WebAPI` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.WebAPI` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.WebAPI` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.WebAPI` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |


[`⇧ Back to Top`](#table-of-contents)

---

### `jsopx.RCLxAssets/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.RCLxAssets/` | **All JSopX™ RCL x Assets [JSopX.RCLxAssets](../jsopx-rcl-x-assets/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.RCLxAssets` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`).**Please Note:** The `JSopX.RCLxAssets` project will be phased out in future releases, in favor of it's successor, **`JSopX.Assets.RCL`**, which is a project now managed by the new **`JSopX.Presentation`** Project.|


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.RCLxProper/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.RCLxProper/` | **All JSopX™ RCL x Proper [JSopX.RCLxProper](../jsopx-rcl-x-proper/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.RCLxProper` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`).**Please Note:** The `JSopX.RCLxProper` project will be phased out in future releases, in favor of it's successor, **`JSopX.Proper.RCL`**, which is a project now managed by the new **`JSopX.Presentation`** Project.|


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.RCLxComponents/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.RCLxComponents/` | **All JSopX™ RCL x Components [JSopX.RCLxComponents](../jsopx-rcl-x-components/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.RCLxComponents` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`).**Please Note:** The `JSopX.RCLxComponents` project will be phased out in future releases, in favor of it's successor, **`JSopX.Components.RCL`**, which is a project now managed by the new **`JSopX.Presentation`** Project.|


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.Presentation/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.Presentation/` | **All JSopX™ Presentation [JSopX.Presentation](../jsopx-rcl-x-components/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.Presentation` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`).**Please Note:** The `JSopX.Presentation` project is **NEW**, still being developed, and will be where successors of previous RCLs live, such a `JSopX.Assets.RCL`, `JSopX.Proper.RCL`, `JSopX.Lazy.RCL` and `JSopX.Components.RCL`.|


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.SaaS/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.SaaS/` | **All JSopX™ SaaS [JSopX.SaaS](../jsopx-saas/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.SaaS` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`).**Please Note:** The `JSopX.SaaS` project is **NEW**, still being developed, and will be available soon.|


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.Core/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.Core/` | **All JSopX™ Core [JSopX.Core](../jsopx-core/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.Core` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`).**Please Note:** The `JSopX.Core` project is **NEW**, still being developed, and will be available soon.|


[`⇧ Back to Top`](#table-of-contents)

---


### `jsopx.Data/` Documentation

| File/Folder | Description |
|:------------|:-------------|
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;`jsopx.Data/` | **All JSopX™ Data [JSopX.Data](../jsopx-data/index.html) specific documentation currently available.** |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.Data` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`).Please Note: The `JSopX.Data` project is **NEW**, still being developed, and will be available soon.|

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 6: JSopX™ Project References & Dependencies**

`JSopX` projects leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability.

However, the `JSopX.BridgeTooFar` Project is one of the highest-level resource libraries, hence, it has almost no natural dependencies.

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 7: Usage**

### **Step: 7.1: Referencing the `JSopX.`BridgeTooFar Project**

1. **Add a project reference** to `JSopX.BridgeTooFar` in each client-side and/or server-side projects that want to have consume the project's assets:
   - _Right-click_ on a project, such as [`JSopX.AngularCore`](#step-82-using-jsopxbridgetoofar-project-in-an-angular-project), [`JSopX.ReactCore`](#step-84-using-jsopxbridgetoofar-project-in-a-react-project), [`JSopX.VueCore`](#step-83-using-jsopxbridgetoofar-project-in-a-vue-project), [`JSopX.BlazorServerCore`](#step-81-using-jsopxbridgetoofar-project-in-a-blazor-project), etc.
   - Select **Add** > **Project Reference**.
   - Check `JSopX.BridgeTooFar` and click **OK**.

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 8: Extended Usage**

> [!TIP]
> These particular `Extended Usage` examples **are not** required to implement. They are just example extended usages for those of whom are new to projects like the `JSopX.BridgeTooFar` Project.
>

---

### **Step: 8.1: Using `JSopX.`BridgeTooFar Project in a Blazor Project**

**In [`JSopX.BlazorServerCore`](../../../jsopx.BlazorServerCore/p1/v1)**:

1. **Reference the JSopX™ Bridge Too Far Project**:
   - Add a reference to `JSopX.BridgeTooFar` in [`JSopX.BlazorServerCore`](../../../jsopx.BlazorServerCore/p1/v1).

2. **Use Static Files in `Razor` Components**:
   - Create a `Razor` component that wants to use the shared static files.
   
     ```razor
      @page "/example"
      @inject IWebHostEnvironment env

      <h3>Re-Using JSopX™ Bridge Too Far Project Assets Example Page</h3>

      <img src="@($"{env.WebRootPath}/doc-assets/jsopx-logo.svg")" alt="Reusing Official JSopX™ Logo in Blazor Server Core Application">
      <script src="@($"{env.WebRootPath}/doc-assets/js/script.js")"></script>
      <link rel="stylesheet" href="@($"{env.WebRootPath}/doc-assets/css/style.css")">
     ```

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 8.2: Using `JSopX.`BridgeTooFar Project in an Angular Project**

**In [`JSopX.AngularCore`](../../../jsopx.AngularCore/p1/v1)**:

1. **Copy Files Using a `Build Script`**:
   - Create a script to copy the shared resources from `JSopX.BridgeTooFar` to the `assets` folder of the Angular project during the build process.

     ```json
     
      "scripts": {
          "postinstall": "npm run copy-bridge-too-far",
          "copy-bridge-too-far": "cp -r ../JSopX.BridgeTooFar/* ./src/assets/"
      }
     ```

2. **Use Static Files in `Angular` Components**:
   - Reference the static files in your `Angular` components.

     ```html
      <!-- app.component.html -->
      <img src="assets/doc-assets/jsopx-logo.png" alt="Reusing Official JSopX™ Logo in Angular Application">
      <script src="assets/doc-assets/js/script.js"></script>
      <link rel="stylesheet" href="assets/doc-assets/css/style.css">
     ```

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 8.3: Using `JSopX.`BridgeTooFar Project in a Vue Project**

**In [`JSopX.VueCore`](../../../jsopx.VueCore/p1/v1)**:

1. **Copy Files Using a Build Script**:
   - Create a script to copy the shared resources from `JSopX.BridgeTooFar` to the `assets` folder of the Vue project during the build process.

      ```json
     
      "scripts": {
          "postinstall": "npm run copy-bridge-too-far",
          "copy-bridge-too-far": "cp -r ../JSopX.BridgeTooFar/* ./public/assets/"
      }
      ```

2. **Use Static Files in `Vue` Components**:
   - Reference the static files in your `Vue` components.

      ```html
      <!-- App.vue -->
      <template>
          <div>
              <img src="assets/doc-assets/jsopx-logo.png" alt="Reusing Official JSopX™ Logo in Vue Application">
              <script src="assets/doc-assets/js/script.js"></script>
              <link rel="stylesheet" href="assets/doc-assets/css/style.css">
          </div>
      </template>
      ```

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 8.4: Using `JSopX.`BridgeTooFar Project in a React Project**

**In [`JSopX.ReactCore`](../../../jsopx.ReactCore/p1/v1)**:

1. **Copy Files Using a Build Script**:
   - Create a script to copy the shared resources from `JSopX.BridgeTooFar` to the `public` folder of the React project during the build process.

     ```json
     // package.json
     "scripts": {
         "postinstall": "npm run copy-bridge-too-far",
         "copy-bridge-too-far": "cp -r ../JSopX.BridgeTooFar/* ./public/assets/"
     }
     ```

2. **Use Static Files in `React` Components**:
   - Reference the static files in your `React` components.

     ```javascript
      // App.js
      import React from 'react';

      function App() {
          return (
            <div>
              <img src="assets/doc-assets/jsopx-logo.png" alt="Reusing Official JSopX™ Logo in React Application">
              <script src="assets/doc-assets/js/script.js"></script>
              <link rel="stylesheet" href="assets/doc-assets/css/style.css">
            </div>
          );
      }
 
      export default App;
     ```

[`⇧ Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../../jsopx.SharedResources/p1/v1/README.md)** → **Continue** as **you were**, exploring, installing or simply browsing **previous versions** of the application by **phases**. You'll move onto the next project, using the `JSopX.SharedResources` _By-Phase_ Variant.  

---

1. **[Install Using Latest](../../../jsopx.BridgeTooFar/p1/v1/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.BridgeTooFar` _Using Latest_ Variant.  
2. **[Start From Scratch](../../../jsopx.BridgeTooFar/p1/v1/RECREATEME.md)** → **Create Project**, **step-by-step**, using the `JSopX.BridgeTooFar` _From Scratch_ Variant.
3. **[Get All Projects](../../../jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../../jsopx.BridgeTooFar/p1/v1/README.md) » [`Introduction`](../../../jsopx.Global/Introduction/) » [`Projects`](../../../jsopx.BridgeTooFar/p1/v1/OpenProjects/) · · [`Use Latest`](../../../jsopx.BridgeTooFar/README.md) · `By-Phase` · [`From Scratch`](../../../jsopx.BridgeTooFar/p1/v1/RECREATEME.md) · · [`⇧ Back to Top`](#table-of-contents) · [`« Previous`](../../../jsopx.WebAPI/p1/v1/) [`Next »`](../../../jsopx.SharedResources/p1/v1/)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri