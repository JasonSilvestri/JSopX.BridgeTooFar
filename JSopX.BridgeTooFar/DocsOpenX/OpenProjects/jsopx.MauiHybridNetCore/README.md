# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-maui-hybrid-net-core-logo.svg" style="width: 28px; height: auto; padding-right:12px;!important;"> JSopX™ MAUI Hybrid .Net Core Project

The **JSopX™ MAUI Hybrid .Net Core Project**, _code named_, `JSopX.MauiHybridNetCore` is a totally **FREE**, open-source, demonstration project showcasing a multi-platform, cross-platform hybrid application blending ASP.NET Core, Blazor, and .NET MAUI to manufacture desktop, native, and web experiences.

---

## **Use Latest Variant:**

> [!TIP]
> You are currently viewing the **"_Use Latest_" _Variant_** of the **JSopX™ MAUI Hybrid .Net Core Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---

```bash
# For The Cool Kids: Clone JSopX.MauiHybridNetCore Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore.git
```

---

[`Home`](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/OpenProjects/) · · **`Use Latest`** · [`By-Phase`](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/README.md) · [`From Scratch`](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/RECREATEME.md) · · [`« Previous`](../../OpenProjects/jsopx.ClassLibrary/p1/v1/RECREATEME.md) [`Next »`](../../OpenProjects/jsopx.ClassLibrary/p1/v1/RECREATEME.md)

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
      - [Step 6: Project References & Dependencies](#step-6-jsopx-project-references--dependencies)
      - [Step 7: Usage](#step-7-usage)
   - [Next Steps](#next-steps)

---

## Current Phase

> [!NOTE]
>
>**Phases 1**: This document is currently aligned with [Phase 1: Minimum Viable Product (MVP)](../../Phases/Phase-1.md) Business Requirements. 
> 

---

## Overview

The **JSopX™ MAUI Hybrid .Net Core Project**, _code named_, `JSopX.MauiHybridNetCore` is a totally **FREE**, open-source, demonstration project showcasing a multi-platform, cross-platform hybrid application blending ASP.NET Core, Blazor, and .NET MAUI. This project reveals how Razor components can unify desktop, native, and web experiences, reinforcing JSopX™’s commitment to versatility.

Like the ["Existing" Client-side Apps Example](../../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) projects, we do still initially create the project to simulate an ["Existing" Server-side Apps Example](../../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) Weather Forecast Asp.NET Core Blazor application, with its own Web API and existing standards, to conform to the initial [business requirements](../../Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../OpenProjects/jsopx.OpenProjectX/p1/v1/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../OpenProjects/jsopx.VueCore/README.md), [React](../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../Introduction/JSopxDevelopmentStandards.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly, bridging-of-the-critical-gap, between front-end dynamism and back-end security. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

[`⇧ Back to Top`](#table-of-contents)

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring and/or installing just the `JSopX.MauiHybridNetCore` Project.

- [Visual Studio (v 17.14.20)](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/#visual-studio)
- [.NET Framework (v 9.2.1)](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/#net-framework)
- [ASP.NET Core (v 9.2.1)](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/#aspnet-core)
- [.NET Core Blazor (v 9.2.1)](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/#net-core-blazor)
- [.Net Core Maui Hybrid (v 9.2.1)](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/#net-core-maui-hybrid)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Installing `JSopX.`MauiHybridNetCore**:

- **[Continue](#step-1-clone-the-repository)** → **Continue** as **you were**, exploring and/or installing the `JSopX.MauiHybridNetCore` _Using Latest_ Variant.  

---

### 2. **Use Different Variant**:

- **[Browse By-Phase](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.MauiHybridNetCore` _By-Phase_ Variant.   
- **[Start From Scratch](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/RECREATEME.md)** → **Create project** from scratch, step-by-step, using the `JSopX.MauiHybridNetCore` _From Scratch_ Variant.
- **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

## **Step 1: Clone the Repository**

_Clone_ the `JSopX.MauiHybridNetCore` GitHub Repository if you plan to explore it independently from the rest of the projects.

Choose the approach below that fits your environment:  

- **[Bash](#step-11-using-bash)** → Ideal for **Linux, macOS, and Windows (WSL/Git Bash)** users.  
- **[PowerShell](#step-12-using-powershell)** → Best for **Windows** users.  
- **[Node.js](#step-13-using-nodejs-or-npm-degit)** → A lightweight option for developers using **JavaScript-based workflows**.  

---

### **Step 1.1: Using `Bash`:**
 
```bash

 # Using Bash: Clone JSopX.MauiHybridNetCore Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.MauiHybridNetCore

 # 2. Clone JSopX.MauiHybridNetCore Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore.git
    
```

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 1.2: Using `Powershell`:**

```powershell

 # Using PowerShell: Clone JSopX.MauiHybridNetCore Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.MauiHybridNetCore

 # 2. Clone JSopX.MauiHybridNetCore Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore.git
    
```

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 1.3: Using `Node.js` or `npm` (degit):**
 
```shell

 # Using Node.js / npm : Clone JSopX.MauiHybridNetCore Git Repository
 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.MauiHybridNetCore
    
 # 2. Using npx degit to clone without .git history
 npx degit https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore

```

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 2: Open the Solution**

Working with the `JSopX.MauiHybridNetCore` Project in Visual Studio is simple enough.

1. Launch **[Visual Studio (v 17.14.20)](../../Technologies/#visual-studio)**.
2. Open the solution file: `JSopX.MauiHybridNetCore.sln`.

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 3: Configure the Project**

> [!TIP]
>
> Latest versions of [Visual Studio](../../Technologies/#visual-studio) performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). Still, it is good practice to at least be aware of the commands outlined in this step.
> 

---

### **Step: 3.1: Ensure Dependencies Are Restored:**

Ensure `JSopX.MauiHybridNetCore` Project dependencies are restored:

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

Building and Running the `JSopX.MauiHybridNetCore` Project in Visual Studio is also another simple task.

### **Step: 4.1: Build and Run**:

1. Build the solution in [Visual Studio](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/#visual-studio).
2. Run the project:
   - Use the **IIS Express** profile for local development.

---

### **Step: 4.2: And Now Your Done**:

Assuming the `JSopX.MauiHybridNetCore` Project is running as expected, **you are now done** with the **installation** and **execution** of the project!

1. **Skip Remaining Steps**: 
   - Technically, you could skip to the [Next Steps](#next-steps) section if you are on a project-by-project installation mission.
2. **Conclude Remaining Steps**:
   - **Me personally?** I would continue on to the remaining steps _below_, starting at **[Step 5: Project Structure](#step-5-project-file-structure)**. There is just very useful information related to the project that I would find helpful.

[`⇧ Back to Top`](#table-of-contents)

---


## **Step 5: Project File Structure**

The `JSopX.MauiHybridNetCore` Project in particular, contains several files and directories, all with their own functionality & purpose for existing. 

For brevity, samples will not have the complete file structure you get when installing, but there are some core files and directories that have special consideration you should get to know. 

---

### **Step: 5.1: Structured Project & Solution Considerations**:

All `JSopX™ projects` follow a consistent directory structure, based on its [JSopX™ Project Family](../../Introduction/JSopxProjectsFamilies.md) (_relatively speaking_). 

1. The `JSopX.MauiHybridNetCore` Project naming conventions include capital casing for `.Server` directories.
2. I create a [Visual Studio](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/#visual-studio) Solution Folder to house the primary `.sln` solution file.
3. I create a Server-Side Project Folder for `.csproj`, and related files.

A common, plain-text file folder structure of the `JSopX.MauiHybridNetCore` Solution and Projects should look something like what follows:

```plaintext
# JSopX™ MAUI Hybrid .Net Core Solution and Projects

JSopX.MauiHybridNetCore/                 # Root JSopX.MauiHybridNetCore Visual Studio Solution folder.
├── JSopX.MauiHybridNetCore.sln          # Visual Studio '.sln' solution file for MAUI Hybrid .Net Core.
├── PathConfig.targets                  # Centralized MSBuild target configuration for project references.
├── JSopX.MauiHybridNetCore/             # Asp.NET Core Blazor Server server-side application folder.
│   ├── JSopX.MauiHybridNetCore.csproj   # Asp.NET Core Blazor Server Visual Studio Server Project '.csproj' configuration file.

```

There are a few reasons why I do this, but the primary reason is ensuring references are managed effectively and circular dependencies are avoided.

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 5.2: Structured File Tree**:

A common, plain-text file structure of the `JSopX.MauiHybridNetCore` Project files and directories that matter.

```plaintext
# JSopX™ MAUI Hybrid .Net Core Project

JSopX.MauiHybridNetCore/                        # Root JSopX.MauiHybridNetCore Visual Studio Solution folder.
├── .gitattributes                             # Git attributes file for repository metadata and configurations.
├── .gitignore                                 # Specifies files and directories to ignore in version control.
├── JSopX.MauiHybridNetCore.sln                 # Visual Studio '.sln' solution file for MAUI Hybrid .Net Core.
├── LICENSE.txt                                # Licensing information for the project.
├── PathConfig.targets                         # Centralized MSBuild target configuration for project references.
├── README.md                                  # High-level project documentation.
├── JSopX.MauiHybridNetCore/                    # ASP.NET Core Blazor Server-side application folder.
│   ├── JSopX.MauiHybridNetCore.csproj          # ASP.NET Core Blazor Server Visual Studio Project '.csproj' configuration file.
│   ├── Program.cs                             # Main entry point for the ASP.NET Core server.
│   ├── Controllers/                           # API controllers exposing server endpoints.
│   ├── appsettings.json                       # Application settings file for configuration.
│   └── WeatherForecast.cs                     # Example Weather Forecast model class (default template).

```

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 5.3: Structured Table**:

A table structure of the same with no tree legs `JSopX.MauiHybridNetCore` Project, files and resources.


| **File/Directory**                        | **Description**                                                                                   |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------|
| &nbsp;📁&nbsp;**JSopX.MauiHybridNetCore/**&nbsp;                | Parent `JSopX.MauiHybridNetCore` Visual Studio Solution folder, containing both client and server code.|
| &nbsp;├&nbsp;📝&nbsp;`.gitattributes`&nbsp;                   | Git attributes file for repository metadata and configurations. |
| &nbsp;├&nbsp;📝&nbsp;`.gitignore `&nbsp;                      | Specifies files and directories to ignore in version control. |
| &nbsp;├&nbsp;📝&nbsp;`JSopX.MauiHybridNetCore.sln`&nbsp;            | Visual Studio `.sln` solution file linking the client and server projects. |
| &nbsp;├&nbsp;📝&nbsp;`LICENSE.txt`&nbsp;                      | Licensing information for the project (generally `MIT` open-source license). |
| &nbsp;├&nbsp;📝&nbsp;`PathConfig.targets`&nbsp;               | Centralized MSBuild target configuration for project references, used in conjunction with Git Sub Trees, to retain all files and references, while dynamically resetting reference paths if necessary. |
| &nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp;                      | The current, most recent, primary project README `.md` file. |
| &nbsp;├&nbsp;📁&nbsp;**JSopX.MauiHybridNetCore**&nbsp;         | Asp.NET Core Blazor Server server-side folder for back-end logic and API endpoints. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.MauiHybridNetCore.csproj`&nbsp;     | Asp.NET Core Blazor Server server-side Visual Studio project `.csproj` configuration file. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`Program.cs`&nbsp;                       | Main entry point for the ASP.NET Core application, initializing services. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`Controllers/`**&nbsp;                     | Contains API controllers that handle HTTP requests and responses. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`appsettings.json`&nbsp;                 | Configuration file for application settings like connection strings. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`WeatherForecast.cs`&nbsp;               | Example Weather Forecast model class provided by ASP.NET Core templates for demonstration. |

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 6: JSopX™ Project References & Dependencies**

> [!TIP]
>
> The `JSopX.MauiHybridNetCore` Project should already have the JSopX™ Project References & Dependencies described below included!
> 

---

Most `JSopX™ Projects` leverage shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability.

The `JSopX.MauiHybridNetCore` Project has the following `JSopX` Project Dependencies:

1. **`JSopX.BridgeTooFar`**:
   - A [Shared Assets & Resources Projects](../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets and project documentation.
   - **Explore GitHub**: [JSopX.BridgeTooFar](../../OpenProjects/jsopx.BridgeTooFar)

2. **`JSopX.ClassLibrary`**:
   - A [Shared Data, Service & Function Project](../../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) that houses shared business logic and helper methods.
   - **Explore GitHub**: [JSopX.ClassLibrary](../../OpenProjects/jsopx.ClassLibrary)

3. **`JSopX.WebAPI`**:
   - A [Shared Data, Service & Function Project](../../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) which acts as the centrialized **Web API**, used by all projects that access data endpoints in the application.
   - **Explore GitHub**: [JSopX.WebAPI](../../OpenProjects/jsopx.WebAPI)
 
4. **`JSopX.RCLxProper`**:
   - An extremely light-weight, [Shared Assets & Resources Projects](../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) version of the `JSopX.Assets` Razor Class Library, specifically designed for Production-Ready environments.
   - **Explore GitHub**: [JSopX.RCLxProper](../../OpenProjects/jsopx.RCLxProper)


[`⇧ Back to Top`](#table-of-contents)

---

## **Step 7: Usage**

Although the `JSopX.MauiHybridNetCore` project is primarily designed as a self-contained demonstration project, it is fully capable of integration with other JSopX™ projects. Here's how to add it to your project:

---

### **Step 7.1: Adding the JSopX™ MAUI Hybrid .Net Core to Other Projects**

1. **Add Project Reference**:
   - Open your solution in Visual Studio.
   - Right-click the project that will use `JSopX.MauiHybridNetCore` and select `Add > Project Reference`.
   - Check the box for `JSopX.MauiHybridNetCore` and click `OK`.

[`⇧ Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../OpenProjects/jsopx.ClassLibrary/README.md)** → _Continue_ as **you were**, exploring and/or installing other projects like you did with **this project**. You'll move onto the next project, using the `JSopX.MauiHybridNetCore` _Using Latest_ Variant.  

---

1. **[Browse By-Phase](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.MauiHybridNetCore` _By-Phase_ Variant.   
2. **[Start From Scratch](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/RECREATEME.md)** → **Create project** from scratch, step-by-step, using the `JSopX.MauiHybridNetCore` _From Scratch_ Variant.
3. **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/OpenProjects/) · · **`Use Latest`** · [`By-Phase`](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/README.md) · [`From Scratch`](../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/RECREATEME.md) · · [`⇧ Back to Top`](#table-of-contents) · [`« Previous`](../../OpenProjects/jsopx.ClassLibrary/p1/v1/RECREATEME.md) [`Next »`](../../OpenProjects/jsopx.ClassLibrary/p1/v1/RECREATEME.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
