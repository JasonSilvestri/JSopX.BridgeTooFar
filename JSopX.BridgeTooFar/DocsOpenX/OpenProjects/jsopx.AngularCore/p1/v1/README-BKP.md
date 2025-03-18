# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-angular-core-logo.svg" style="width: 28px; height: auto; padding-right:12px;!important;"> JSopX™ Angular Core Project

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

```bash
 # Cool Kids: Clone JSopX.AngularCore Git Repository
 $ git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
```

The **_JSopX™ Angular Core Project_** (`JSopX.AngularCore`) you are currently exploring, is a demonstration project showcasing how to build a web application using Angular and ASP.NET Core Web API.

By advancing to the [Overview](#overview), you’ll also gain insights into how the _JSopX™ Angular Core Project_ (`JSopX.AngularCore`) fits into the larger **JSopX™** ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite.

---

[`Introduction`](../../../../Introduction/) » [`JSopX Projects`](./OpenProjects/) » **[`JSopX.AngularCore`](./README.md)** · · · [`« Previous`](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/) [`Next »`](../../../../OpenProjects/jsopx.ReactCore/p1/v1/)

[`Use Latest`](../../../../OpenProjects/jsopx.AngularCore/README.md) · · · [`Start from Scratch`](../../../../OpenProjects/jsopx.AngularCore/p1/v1/RECREATEME.md) 

---

## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Corequisites﻿](#corequisites-)
  - [Postrequisites](#postrequisites)
  - [Feature Highlights](#jsopxangularcore-feature-highlights)
  - [Getting Started](#getting-started-with-the-jsopx-angularcore-project)
    - [Step 1: Clone the Repository](#step-1-clone-the-repository)
       - [Using Bash](#21-using-bash)
       - [Using Powershell](#22-using-powershell)
       - [Using Node.js or npm (degit)](#23-using-nodejs-or-npm-degit)
    - [Step 2: Open the Solution](#step-2-open-the-solution)
    - [Step 3: Configure the Project](#step-3-configure-the-project)
    - [Step 4: Build and Run](#step-4-build-and-run)
  - [Project File Structure](#project-file-structure)
  - [Usage](#usage)
  - [Extended Usage](#extended-usage)
  - [JSopX™ Project References & Dependencies](#jsopx-project-references--dependencies)
  - [Next Steps](#next-steps)

---

> [!WARNING]
> **Phase 1**
>
> This document is currently aligned with **Phase 1: Minimum Viable Product (MVP)** of development. As a result, the content may not be fully accurate or ready for production use. Treat it as reference material while the project evolves.
> 
> For more details, see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](../../../../Phases/Phase-1.md).

---

## Overview

**Jason Silvestri Open Project EXperiences (JSopX™)** is a first-of-its-kind, open-source, multi-platform, enterprise-level suite of applications that demonstrate how to unify disparate technologies under one cohesive, scalable, and maintainable ecosystem.

The **_JSopX™ Angular Core Project_** (`JSopX.AngularCore`) is a demonstration project showcasing how to build a web application using Angular and ASP.NET Core Web API. It highlights the integration of Angular for the client-side with ASP.NET Core for the server-side, providing a comprehensive example of a modern web application stack.

We initially create `JSopX.AngularCore` (*JSopX™ Angular Core Project*) to simulate an ["Existing" Client-side Apps Example](../../../../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples), with its own Web API and existing standards—anticipating a future, seamless migration into our *[JSopX.OpenProjectX](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/)* enterprise application suite!

[`Back to Top`](#table-of-contents)

---

## **Prerequisites**

Ensure the following technologies and versions are installed, even if your only objective is to explore the `JSopX.AngularCore` project independently from all other projects:

- [Visual Studio (v 17.13.3)](./Technologies#visual-studio)
- [.NET Framework (v 9.0.1)](./Technologies#net-framework)
- [ASP.NET Core (v 9.0.1)](./Technologies#aspnet-core)
- [Node.js (v 20.14.0)](./Technologies#node)
- [Angular CLI (v 18.0.3)](./Technologies#angular-cli)

[`Back to Top`](#table-of-contents)

---

## **Corequisites**

Ensure the following technologies and versions are installed, if your objective is to explore ALL projects that make up the `JSopX.OpenProjectX` enterprise-application suite:

- [Visual Studio (v 17.13.3)](./Technologies#visual-studio)
- [.NET Framework (v 9.0.1)](./Technologies#net-framework)
- [ASP.NET Core (v 9.0.1)](./Technologies#aspnet-core)
- [.NET Core Blazor (v 9.0.1)](./Technologies#net-core-blazor)
- [.Net Core Maui Hybrid (v 9.0.1)](./Technologies#net-core-maui-hybrid)
- [Node (v 20.14.0)](./Technologies#node)
- [npm (v 10.8.1)](./Technologies#npm)
- [Angular CLI (v 18.0.3)](./Technologies#angular-cli)
- [React (v 18.2.0)](./Technologies#react)
- [Vue (v 10.8.1)](./Technologies#vue)
- [Vite (v 3.4.21)](./Technologies#vite)
- [Bash (v 5.x+)](./Technologies#bash)
- [Powershell (v 7.x+)](./Technologies#powershell)

[`Back to Top`](#table-of-contents)

---

## **Postrequisites**

- I am still in discovery with [Angular CLI (v 18.0.3)](./Technologies#angular-cli). If you find a bug, see something I may not be implementing correctly, or something else, please do not hesitate to call me out. 


[`Back to Top`](#table-of-contents)

---

## **Getting Started with the `JSopX.AngularCore` Project**  

> [!WARNING]  
> **Enterprise-Level Applications** are complex by nature. To ensure all developers, regardless of experience, have maximum flexibility, I’ve structured the `JSopX™ Angular Core Project` and related `JSopX™ Projects` in a way that allows different exploration paths.  
>
> **The only real caveat** is choosing the exploration approach that aligns with your objectives and sticking with it from **start to finish** for the best results.  

---

### **1. Explore `JSopX™ Angular Core Project`**  

This option allows you to explore the `JSopX™ Angular Core Project` independently. Ideal if you're primarily interested in **Angular, ASP.NET Core**, or how `JSopX™` manages resources and standards.  

- Fewer technology dependencies and version management, but limited to Angular and related .NET Core technologies.  
- Fully functional GitHub repository with standard Git commands (`git clone`, `git commit`, `git push`), but isolated from the primary `JSopX™ Web API` (`JSopX.WebAPI`).  
- Includes all essential project components (`.sln`, `.csproj`, `.esproj`), but does not have any extra features, bells or whistles. 
- Comes with a dedicated **Web API** (sample Forecast endpoints), but does not integrate with the larger multi-project system.  
- Features **Production-Ready** `JSopX™` resources, assets, and design patterns, but lacks access to Developer-Ready `JSopX™` resources available in the `JSopX™ Enterprise Application`.

[`Continue »`](#)  

---

### **2. Explore `JSopX™ Open Project EXperiences`**  

Go all in—leverage **all `JSopX™` projects** for the full experience. This is for developers who want **maximum technology, features, and flexibility.**  

- Access to all projects within a single GitHub repository, but requires installing and managing all applicable technologies.  
- Includes **all** `JSopX™` project components (`.sln`, `.csproj`, `.esproj`), but commits you to working with multiple technologies.  
- Provides a dedicated **Web API**, but comes with a larger project scope and complexity.  
- Supports **Multi-Platform** technologies, not just Angular and .NET Core, but requires familiarity with various frameworks.  
- Includes **Production-Ready** and **Developer-Ready** `JSopX™` resources and assets, but may be overwhelming for those looking for a focused Angular-only experience.  

[`Continue »`](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/)  

---

### **3. Create `JSopX™ Angular Core Project` From Scratch**  

Want to build it all from the ground up? This path involves creating each phase, action item, and page **from scratch**.  

- Provides full control over project structure and development, but requires significant time and effort.  
- Allows you to tailor the project to your learning curve and goals, but does not include predefined structures or pre-built components.  

[`Continue »`](../../../../OpenProjects/jsopx.ReactCore/p1/v1/RECREATEME.md)  

---

## **What Can Be Learned**

The `JsopX.AngularCore` **JSopX™ Angular Core Project** provides a wealth of real-world developer scenarios:

### General Assembly

- The primary `JSopX.AngularCore` Visual Studio solution highlights the creation of Angular Client-Side SPA project and an ASP.NET Core Server-Side Web API project resources, which we use to simulate an existing application, including the support of basic, randomly generated, weather forecast sample data and end points.

### Multi-Platform Responsive Design

- We become familiar with basic user experiences for most smart phones, tablets, laptops, &amp; desktop computers.

### Extending Project Functionality

- **Creating New Feature**: As each phase comes and goes, we expand on this implementation, as we extend functionality like register and login support, and more.

### Source Code & Repositories

- **JSopX.AngularCore.git**: We work with source control, and git repositories.

### Implementing Standards

- We create, reuse, and shared common resources across all projects. 

### Multi-Platform Responsive Design

- Although extremely primative, even this version of the `JSopX.AngularCore` Visual Studio solution supports basic user experiences for most smart phones, tablets, laptops, &amp; desktop computers. Conversely, these simple implementations are nothing compared to features available to you in upcoming phases (features already developed). 

### Seamless Integration Into Enterprise Solution

- We take steps to fully migrate and integrate the `JSopX.AngularCore` Project into our enterprise `JSopX.OpenProjectX` Project, adopting the new parents Web API, Standards, and more!

[`Back to Top`](#table-of-contents)

---

## Feature Highlights

It is possible for Project Feature Highlights to be different here depending on the Phase we are currently in, so be sure to double-check documentation when newly released.

**The `JSopX.AngularCore` features worth mentioning are as follows**:

### General Assembly

- **JSopX.AngularCore.sln**: The primary `JSopX.AngularCore` Visual Studio solution already supports an Angular Client-Side SPA project and an ASP.NET Core Server-Side Web API project.

### Basic Documentation 

- **ReadMe.md**: Even in these early Phases, as you can see while reading along, there is at least basic comments in code and samples, and a detailed, Step-by-Step Instructions set of documentation.

### Basic Security 

- **Type Script**: Love it or hate it, **TypeScript** is one of the first lines of defense with respects to data normalization and security when working client-side frameworks like Angular. Some basic implementation is present in this phase and version of the application. As each phase comes and goes, we expand of this implementation, as we extend functionality like register and login support, and more.

### Source Code Repository

- **JSopX.AngularCore.git**: The primary `JSopX.AngularCore` Visual Studio solution already has a GitHub Respository.


### Multi-Platform Responsive Design

- Although extremely primative, even this version of the `JSopX.AngularCore` Visual Studio solution supports basic user experiences for most smart phones, tablets, laptops, &amp; desktop computers. Conversely, these simple implementations are nothing compared to features available to you in upcoming phases (features already developed). 


### Weather Forecast API Sample Data & End Points

- **WeatherForecastController.cs**: The primary `JSopX.AngularCore` Visual Studio solution already supports basic, randomly generated, weather forecast sample data and end points. 

[`Back to Top`](#table-of-contents)

---

## Getting Started with `JSopX.AngularCore`

> [!WARNING]
> This section describes a typical cloning operation using GitHub Repositories, you can use to easily get the latest `JSopX.AngularCore` project and explore it independently from all other projects! 
> 
> **To mimic the advanced cloning operations we use to serve the `JSopX.OpenProjectX` project suite, as both, an `all-projects-in-one` project and/or `independent-projects` project installations, please see, [JSopX™ Visual Studio Projects GitHub Advanced](../../../../Introduction/JSopxProjectsGitHubAdvanced.md) for details.**
>

---

## **Independent Project Installation & Exploration**

The [JSopX™ Visual Studio Projects](../../../../OpenProjects/) collectively form the backbone of the entire suite, each project serving a distinct yet complementary role.

By aligning varied frameworks—ranging from ASP.NET Core to Angular, React, Vue, Blazor, and .NET MAUI—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly.

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. 

As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve, adapt, and retain their own identity.


[`Back to Top`](#table-of-contents)

---

## **Step 1: Clone the Repository**

1. _Open_ a terminal and navigate to the desired directory.

2. _Clone_ the `JSopX.AngularCore` GitHub Repository:
 
   ### **2.1: Using `Bash`:**
 
    ```bash

    # Using Bash: Clone JSopX.AngularCore Git Repository

    # 1. Navigate to the desired local directory where you plan to clone the repository
    cd path\to\local\repo\JasonSilvestri\JSopX.AngularCore

    # 2. Clone JSopX.AngularCore Git Repository       
    git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
    
    ```
    
    ### **2.2: Using `Powershell`:**

    ```powershell

    # Using PowerShell: Clone JSopX.AngularCore Git Repository

    # 1. Navigate to the desired local directory where you plan to clone the repository
    cd path\to\local\repo\JasonSilvestri\JSopX.AngularCore

    # 2. Clone JSopX.AngularCore Git Repository       
    git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
    
   ```
    
    ### **2.3: Using `Node.js` or `npm` (degit):**
 
    ```shell

    # Using Node.js / npm : Clone JSopX.AngularCore Git Repository
    # 1. Navigate to the desired local directory where you plan to clone the repository
    cd path\to\local\repo\JasonSilvestri\JSopX.AngularCore
    
    # 2. Using npx degit to clone without .git history
    npx degit https://github.com/JasonSilvestri/JSopX.AngularCore

    ```

3. Navigate to the project directory:

   ```bash

   cd JSopX.AngularCore

   ```

[`Back to Top`](#table-of-contents)

---

## Step 2: Open the Solution

1. Launch **Visual Studio (v 17.13.3)**.
2. Open the solution file: `JSopX.AngularCore.sln`.

[`Back to Top`](#table-of-contents)

---

## Step 3: Configure the Project

> [!TIP]
>
> It is good practice to be able to manually perform these operations, especially since you are exploring the `JSopX.AngularCore` project separately from the other `JSopX.` projects. Conversely, latest versions of [Visual Studio](../../../../Technologies/VisualStudio.md) regularly drops and restores project dependencies, nuget packages and other resources between builds automatically (*by design*).
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

## Step 4: Build and Run

1. Build the solution in Visual Studio.
2. Run the project:
   - Use the **IIS Express** profile for local development.

[`Back to Top`](#table-of-contents)

---


## **1. `JSopX.AngularCore` Project File Structure**

The `JSopX.AngularCore` Project contains several files and directories, all with their own functionality & purpose for existing. Conversely, there are some core files and directories that have special consideration. They are as follows: 

[See how we handle Bridge Too Far file structures](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsJSopxNovaOrionDocEngine/BrandProjects/JSopX/Master/DocsDrafts/Static/Advanced/JsopxNovaOnly/JsopxNovaMarkdownBuilder/BusinessRequirements.md#7-typical-file-tree-structure).

---

### **Project File Structure**

The `JSopX.AngularCore` Project contains several files and directories, all with their own functionality & purpose for existing. Conversely, there are some core files and directories that have special consideration. 

### **File Tree**:

```plaintext
# JSopX™ Angular Core Project

JSopX.AngularCore/                        # Root JSopX.AngularCore Visual Studio Solution folder.
├── .gitattributes                        # Git attributes file for repository metadata and configurations.
├── .gitignore                            # Specifies files and directories to ignore in version control.
├── JSopX.AngularCore.sln                 # Visual Studio solution file for Angular Core.
├── LICENSE.txt                           # Licensing information for the project.
├── PathConfig.targets                    # Centralized MSBuild target configuration for project references.
├── README.md                             # High-level project documentation.
├── jsopx.angularcore.client/             # Angular client-side application folder.
│   ├── jsopx.angularcore.client.esproj   # Angular CLI Visual Studio Client Project configuration file.
│   ├── angular.json                      # Angular CLI workspace configuration file.
│   ├── package.json                      # NPM dependencies and project metadata.
│   ├── src/                              # Main source directory for the Angular app.
│   │   ├── app/                          # Core Angular modules, components, and routing.
│   │   │   ├── app-routing.module.ts     # Defines route configurations for Angular components.
│   │   │   ├── app.component.css         # Styles for the main application component.
│   │   │   ├── app.component.html        # HTML template for the main application component.
│   │   │   ├── app.component.spec.ts     # Unit test file for the main application component.
│   │   │   ├── app.component.ts          # TypeScript logic for the main application component.
│   │   │   ├── app.module.ts             # Root Angular module that declares components and imports dependencies.
│   │   ├── index.html                    # Root HTML file to bootstrap the Angular app.
│   │   ├── main.ts                       # Main entry point for Angular application.
│   │   ├── proxy.conf.js                 # Configuration file for setting up API proxying in Angular.
│   │   ├── styles.css                    # Global stylesheet for Angular application.
├── JSopX.AngularCore.Server/             # ASP.NET Core server-side application folder.
│   ├── JSopX.AngularCore.Server.csproj   # Angular CLI Visual Studio Server Project configuration file.
│   ├── Program.cs                        # Main entry point for the ASP.NET Core server.
│   ├── Controllers/                      # API controllers exposing server endpoints.
│   ├── appsettings.json                  # Application settings file for configuration.
│   └── WeatherForecast.cs                # Example model class (default template).

```


### **Structured Table**:

Here’s the same structure for `JSopX.AngularCore` expanded on in table format:

| **File/Directory**                     | **Description**                                                                                   |
|:---------------------------------------|:--------------------------------------------------------------------------------------------------|
| 📁 **JSopX.AngularCore**               | Parent `JSopX.AngularCore` Visual Studio Solution folder, containing both client and server code.|
| 📝 `.gitattributes`                    | Git attributes file for repository metadata and configurations. |
| 📝 `.gitignore `                       | Specifies files and directories to ignore in version control. |
| 📝 `JSopX.AngularCore.sln`             | Visual Studio `.sln` solution file linking the client and server projects. |
| 📝 `LICENSE.txt`                       | Licensing information for the project (generally `MIT` open-source license). |
| 📝 `PathConfig.targets`                | Centralized MSBuild target configuration for project references, used in conjunction with Git Sub Trees, to retain all files and references, while dynamically resetting reference paths if necessary. |
| 📁 **jsopx.angularcore.client**        | Angular client-side application folder, housing the front-end implementation. |
| 📝 `jsopx.angularcore.client.esproj`   | Angular client-side Visual Studio project `.esproj` configuration file, housing the front-end implementation. |
| 📝 `angular.json`                      | Angular CLI configuration file for workspace and project settings. |
| 📝 `package.json`                      | NPM metadata file listing project dependencies and scripts. |
| 📁 `src/`                              | Main source directory for Angular, containing app components and assets. |
| 📁 `src/app/`                          | Core Angular modules, components, and routing configurations. |
| 📝 `src/app/app-routing.module.ts`     | Defines route configurations for Angular components. |
| 📝 `src/app/app.component.css`         | Styles for the main application component. |
| 📝 `src/app/app.component.html`        | HTML template for the main application component. |
| 📝 `src/app/app.component.spec.ts`     | Unit test file for the main application component. |
| 📝 `src/app/app.component.ts`          | TypeScript logic for the main application component. |
| 📝 `src/app/app.module.ts`             | Root Angular module that declares components and imports dependencies. |
| 📝 `src/index.html`                    | Root HTML file that bootstraps the Angular application. |
| 📝 `src/main.ts`                       | Entry point file where Angular initializes and bootstraps the application. |
| 📝 `src/proxy.conf.js`                 | Configuration file for setting up API proxying in Angular. |
| 📝 `src/styles.css`                    | Global stylesheet for Angular application. |
| 📁 **JSopX.AngularCore.Server**        | ASP.NET Core server-side folder for back-end logic and API endpoints. |
| 📝 `JSopX.AngularCore.Server.csproj`   | Angular server-side Visual Studio project `.csproj` configuration file, housing the back-end implementation. |
| 📝 `Program.cs`                        | Main entry point for the ASP.NET Core application, initializing services. |
| 📁 `Controllers/`                      | Contains API controllers that handle HTTP requests and responses. |
| 📝 `appsettings.json`                  | Configuration file for application settings like connection strings. |
| 📝 `WeatherForecast.cs`                | Example model class provided by ASP.NET Core templates for demonstration. |

### Here is a version Nova suggestion when dealing with nested folders:

| **File/Directory**                     | **Description**                                                                                   |
|:---------------------------------------|:--------------------------------------------------------------------------------------------------|
| 📁 **JSopX.AngularCore**               | Parent `JSopX.AngularCore` Visual Studio Solution folder, containing both client and server code.|
| ├── 📝 `.gitattributes`                | Git attributes file for repository metadata and configurations. |
| ├── 📝 `.gitignore `                   | Specifies files and directories to ignore in version control. |
| ├── 📝 `JSopX.AngularCore.sln`         | Visual Studio `.sln` solution file linking the client and server projects. |
| ├── 📝 `LICENSE.txt`                   | Licensing information for the project (generally `MIT` open-source license). |
| ├── 📝 `PathConfig.targets`            | Centralized MSBuild target configuration for project references, used in conjunction with Git Sub Trees, to retain all files and references, while dynamically resetting reference paths if necessary. |
| 📁 **jsopx.angularcore.client**        | Angular client-side application folder, housing the front-end implementation. |
| ├── 📝 `jsopx.angularcore.client.esproj` | Angular client-side Visual Studio project `.esproj` configuration file. |
| ├── 📝 `angular.json`                  | Angular CLI configuration file for workspace and project settings. |
| ├── 📝 `package.json`                  | NPM metadata file listing project dependencies and scripts. |
| 📁 `src/`                              | Main source directory for Angular, containing app components and assets. |
| ├── 📁 `app/`                          | Core Angular modules, components, and routing configurations. |
| │   ├── 📝 `app-routing.module.ts`     | Defines route configurations for Angular components. |
| │   ├── 📝 `app.component.css`         | Styles for the main application component. |
| │   ├── 📝 `app.component.html`        | HTML template for the main application component. |
| │   ├── 📝 `app.component.spec.ts`     | Unit test file for the main application component. |
| │   ├── 📝 `app.component.ts`          | TypeScript logic for the main application component. |
| │   ├── 📝 `app.module.ts`             | Root Angular module that declares components and imports dependencies. |
| ├── 📝 `index.html`                    | Root HTML file that bootstraps the Angular application. |
| ├── 📝 `main.ts`                       | Entry point file where Angular initializes and bootstraps the application. |
| ├── 📝 `proxy.conf.js`                 | Configuration file for setting up API proxying in Angular. |
| ├── 📝 `styles.css`                    | Global stylesheet for Angular application. |
| 📁 **JSopX.AngularCore.Server**        | ASP.NET Core server-side folder for back-end logic and API endpoints. |
| ├── 📝 `JSopX.AngularCore.Server.csproj` | Angular server-side Visual Studio project `.csproj` configuration file. |
| ├── 📝 `Program.cs`                    | Main entry point for the ASP.NET Core application, initializing services. |
| ├── 📁 `Controllers/`                  | Contains API controllers that handle HTTP requests and responses. |
| ├── 📝 `appsettings.json`              | Configuration file for application settings like connection strings. |
| ├── 📝 `WeatherForecast.cs`            | Example model class provided by ASP.NET Core templates for demonstration. |


[`Back to Top`](#table-of-contents)

---

## **JSopX™ Project References & Dependencies**

`JSopX` projects leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability.

1. **`JSopX.OpenProjectX`**:
   - The [Flagship Project](../../../../../Introduction/JSopxProjectsFamilies.md#1-flagship-projects) parent enterprise application solution.
   - **Explore GitHub**: [JSopX.OpenProjectX](../../../../OpenProjects/jsopx.OpenProjectX)

2. **`JSopX.BridgeTooFar`**:
   - A [Shared Assets & Resources Projects](../../../../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets and project documentation.
   - **Explore GitHub**: [JSopX.BridgeTooFar](../../../../OpenProjects/jsopx.BridgeTooFar)

3. **`JSopX.ClassLibrary`**:
   - A [Shared Data, Service & Function Project](../../../../../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) that houses shared business logic and helper methods.
   - **Explore GitHub**: [JSopX.ClassLibrary](../../../../OpenProjects/jsopx.ClassLibrary)

4. **`JSopX.WebAPI`**:
   - A [Shared Data, Service & Function Project](../../../../../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) which acts as the centrialized **Web API**, used by all projects that access data endpoints in the application.
   - **Explore GitHub**: [JSopX.WebAPI](../../../../OpenProjects/jsopx.WebAPI)
 
5. **`JSopX.SharedResources`**:
   - A [Shared Assets & Resources Projects](../../../../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets, docs, code, and all the source one would want in a development sand box environment, while using a more traditional approach to **Class Libraries**.
   - **Explore GitHub**: [JSopX.SharedResources](../../../../OpenProjects/jsopx.SharedResources)
 
6. **`JSopX.RCLxAssets`**:
   - The direct [Shared Assets & Resources Projects](../../../../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) successor of `JSopX.SharedResources` that contains most of the same reusable static assets, docs, code, and all the source, but now instead uses a more modern **Razor Class Library**. 
   - **Explore GitHub**: [JSopX.RCLxAssets](../../../../OpenProjects/jsopx.RCLxAssets)

7. **`JSopX.RCLxProper`**:
   - An extremely light-weight, [Shared Assets & Resources Projects](../../../../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) version of the `JSopX.Assets` Razor Class Library, specifically designed for Production-Ready environments.
   - **Explore GitHub**: [JSopX.RCLxProper](../../../../OpenProjects/jsopx.RCLxProper)

8. **`JSopX.RCLxComponents`**:
   - Although there is not much traction is the project as of yet, don't let it fool you. This epic [Shared Assets & Resources Projects](../../../../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) Razor Class Library, Combines Razor components with **.NET MAUI** to create cross-platform applications.
   - **Explore GitHub**: [JSopX.RCLxComponents](../../../../OpenProjects/jsopx.RCLxComponents)

9. **`JSopX.AspNetCore`**:
   - An **Asp.NET Core** [Server-Side “Existing” Apps Examples](../../../../../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) project, created to simulate an existing Asp.NET Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
   - **Explore GitHub**: [JSopX.AspNetCore](../../../../OpenProjects/jsopx.AspNetCore)

10. **`JSopX.MauiHybridNetCore`**:
    - A **.NET MAUI Hyrbid** [Server-Side “Existing” Apps Examples](../../../../../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) cross-platform applications, for desktop applications, native mobile applications, traditional web, while adopting our standards, API and more, and looking damn good doing it too.
    - **Explore GitHub**: [JSopX.MauiHybridNetCore](../../../../OpenProjects/jsopx.MauiHybridNetCore)

11. **`JSopX.BlazorServerCore`**:
    - A **Blazor Server .NET Core**  [Server-Side “Existing” Apps Examples](../../../../../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) project, created to simulate an existing Asp.NET Core Blazor application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.BlazorServerCore](../../../../OpenProjects/jsopx.BlazorServerCore)

12. **`JSopX.AngularCore`**:
    - An **Angular Core** [Client-Side “Existing” Apps Examples](../../../../../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) project, created to simulate an existing Angular Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.AngularCore](../../../../OpenProjects/jsopx.AngularCore)

13. **`JSopX.ReactCore`**:
    - A **React Core** [Client-Side “Existing” Apps Examples](../../../../../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) project, created to simulate an existing React Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.ReactCore](../../../../OpenProjects/jsopx.ReactCore)
  
14. **`JSopX.VueCore`**:
    - A **Vue Core** [Client-Side “Existing” Apps Examples](../../../../../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) created to simulate an existing Vue Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.VueCore](../../../../OpenProjects/jsopx.VueCore)
  
[`Back to Top`](#table-of-contents)

---

## **Usage**

### Adding the JSopX™ Angular Core to Other Projects

Although the `JSopX.AngularCore` project is primarily designed as a self-contained demonstration project, it is fully capable of integration with other JSopX™ projects. Here's how to add it to your project:

1. **Add Project Reference**:
   - Open your solution in Visual Studio.
   - Right-click the project that will use `JSopX.AngularCore` and select `Add > Project Reference`.
   - Check the box for `JSopX.AngularCore` and click `OK`.

2. **Use Shared Code**:
   - Import shared constants, enums, or utility methods from `JSopX.AngularCore`.

   Example:

   ```csharp

   using JSopX.AngularCore.Utilities;

   var utility = new ExampleUtility();
   var result = utility.PerformTask();

   ```

[`Back to Top`](#table-of-contents)


---

## **Extended Usage**

> [!TIP]
> These particular `Extended Usage` examples **are not** required to implement. They are just example extended usages for those of whom are new to projects like the `JSopX.AngularCore` Project.
>

---

### Angular Client Project

1. Modify the `proxy.conf.js` file to configure the API URL.
2. Use Angular services to consume APIs exposed by the server project.

   Example service file in Angular:
   ```typescript
   import { HttpClient } from '@angular/common/http';
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root',
   })
   export class ExampleService {
     private apiUrl = 'https://localhost:5001/api/example';

     constructor(private http: HttpClient) {}

     getExampleData() {
       return this.http.get(`${this.apiUrl}`);
     }
   }
   ```
 
[`Back to Top`](#table-of-contents)

---

### ASP.NET Core Server Project

1. Add dependency injection for shared services in `Program.cs`:

   ```csharp
   builder.Services.AddScoped<ExampleService>();
   ```

2. Create or modify controllers to expose endpoints:

   ```csharp
   [ApiController]
   [Route("api/[controller]")]
   public class ExampleController : ControllerBase {
       private readonly ExampleService _service;

       public ExampleController(ExampleService service) {
           _service = service;
       }

       [HttpGet]
       public IActionResult GetExample() {
           var data = _service.GetExampleData();
           return Ok(data);
       }
   }
   ```

[`Back to Top`](#table-of-contents)

---

## **Next Steps**

- Document additional features for subsequent phases.
- Extend the Angular app by adding more advanced modules and reusable components.
- Configure CI/CD pipelines for automated testing and deployment.

[`Back to Top`](#table-of-contents)

---

[`Introduction`](../../../../Introduction/) » [`JSopX Projects`](../../../../OpenProjects/) » [`JSopX.AngularCore`](./ReadMe.md)  » **[`Phase 1`](../../../../OpenProjects/jsopx.AngularCore/p1/v1/)**  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/) [`Next »`](../../../../OpenProjects/jsopx.ReactCore/p1/v1/)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
