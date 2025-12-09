# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-angular-core-logo.svg" style="width: 28px; height: auto; padding-right:12px;!important;"> JSopX™ Angular Core Project

The **JSopX™ Angular Core Project**, _code named_, `JSopX.AngularCore` is a totally **FREE**, open-source, demonstration project showcasing how to build a web application using Angular and ASP.NET Core Web API. 

---

## **Use Latest Variant:**

> [!TIP]
> You are currently viewing the **"_Use Latest_" _Variant_** of the **JSopX™ Angular Core Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---

```bash
# For The Cool Kids: Clone JSopX.AngularCore Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
```

---

[`Home`](../jsopx.AngularCore/README.md) » [`Introduction`](../jsopx.Global/Introduction/) » [`Projects`](../../OpenProjects/) · · **`Use Latest`** · [`By-Phase`](../jsopx.AngularCore/p1/v1/README.md) · [`From Scratch`](../jsopx.AngularCore/p1/v1/RECREATEME.md) · · [`« Previous`](../jsopx.AspNetCore/) [`Next »`](../jsopx.ReactCore/)

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
      - [Step 8: Extended Usage](#step-8-extended-usage)
  - [Next Steps](#next-steps)

---

## Current Phase

> [!NOTE]
>
>**Phases 1**: This document is currently aligned with [Phase 1: Minimum Viable Product (MVP)](../jsopx.Global/Phases/Phase-1.md) Business Requirements. 
> 

---

## Overview

The **JSopX™ Angular Core Project**, _code named_, `JSopX.AngularCore` is a totally **FREE**, open-source, demonstration project showcasing how to build a web application using Angular and ASP.NET Core Web API. As a whole, the project highlights the integration of _Angular_ for the client-side with _ASP.NET Core_ for the server-side, providing a comprehensive example of a modern web application stack. Conversely, the project has a much higher calling.


We initially create the project to simulate an ["Existing" Client-side Apps Example](../jsopx.Global/Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) Weather Forecast Angular application, with its own Web API and existing standards, to conform to the initial [business requirements](../jsopx.Global/Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../jsopx.Global/Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../jsopx.OpenProjectX/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../jsopx.AspNetCore/README.md) to [Angular](../jsopx.AngularCore/README.md), [Vue](../jsopx.VueCore/README.md), [React](../jsopx.ReactCore/README.md), [Blazor](../jsopx.BlazorServerCore/README.md), [MAUI](../jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../jsopx.WebAPI/README.md), [assets](../jsopx.RCLxProper/README.md), [documentation](../jsopx.BridgeTooFar/README.md), and [standards](../jsopx.Global/Introduction/JSopxDevelopmentStandards.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly, bridging-of-the-critical-gap, between front-end dynamism and back-end security.  

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.


---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring and/or installing just the `JSopX.AngularCore` Project.

- [Visual Studio (v 17.14.21)](../jsopx.Global/Technologies/#visual-studio)
- [.NET Framework (v 9.2.1)](../jsopx.Global/Technologies/#net-framework)
- [ASP.NET Core (v 9.2.1)](../jsopx.Global/Technologies/#aspnet-core)
- [Node.js (v 20.14.0)](../jsopx.Global/Technologies/#node)
- [npm (v 10.8.1)](../jsopx.Global/Technologies/#npm)
- [Angular CLI (v 18.0.3)](../jsopx.Global/Technologies/#angular-cli)

---

## **Project Highlights**

The **JSopX™ Angular Core Project** is designed to demonstrate best practices in building a modern web application using Angular for the front-end and ASP.NET Core for the back-end.

### **Business Concerns Addressed**

The **JSopX™ Angular Core Project** addresses **several** high-level **business concerns**, not only shown through design patterns and best practices within its own JSopX™ Project ecosystem, but ultimately as it evolves into a valuable project component of the Jason Silvestri Open Project EXperiences (JSopX™) Enterprise Application too. 

[`⇧ Back to Top`](#table-of-contents) · · [`Next »`](#1-recreate-to-simulate-an-existing-project)

---

### **1. Recreate to Simulate an Existing Project**:

We initially create the **JSopX™ React Core Project** to simulate an ["Existing" Server-side Apps Example](../jsopx.Global/Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) Weather Forecast React Core application, with its own Web API and existing standards, to conform to the initial business requirements set forth by the fictional stakeholders.

![Jason Silvestri Open Project EXperiences (JSopX™) 1. Recreate to Simulate an Existing Project](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-angular-core/in-markdown/react-splash-simulate-container-markdown-step-1.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#business-concerns-addressed) [`Next »`](#2-create-our-development-standards)

---

### **2. Create Our Development Standards**: 

JSopX™ Enterprise application development isn't just about writing code—it's about creating scalable, maintainable, and secure solutions that stand the test of time. This takes a series of disciplines that provide the framework for sustainable success, ensuring every project delivers efficiency, performance, and an exceptional developer experience.

> [!WARNING]
>
>The **biggest mistake** _businesses_ and/or their _developers_ make is not following some form of development standards.
> 

![Jason Silvestri Open Project EXperiences (JSopX™) 2. Create Our Development Standards](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-react-core/in-markdown/react-splash-simulate-container-markdown-step-2.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#1-recreate-to-simulate-an-existing-project) [`Next »`](#3-multi-platform-creative-standards)

---

### **3. Multi-Platform Creative Standards**: 

A visually inconsistent application creates confusion. Every JSopX™ project must maintain standardized UI/UX elements. We quickly design and customize multi-platform, web, desktop & native mobile applications, using Bootstrap v 5.3, which we then extend as we go by creating RCLs (_Razor Class Libraries_). 

![Jason Silvestri Open Project EXperiences (JSopX™) 3. Multi-Platform Creative Standards](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-react-core/in-markdown/react-splash-simulate-container-markdown-step-3.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#2-create-our-development-standards) [`Next »`](#4-using-object-oriented-programming)

---

### **4. Using Object-Oriented Programming**:

Enterprise applications must be **modular**, **reusable**, and **scalable** using **Object-Oriented Programming (OOP)**. 

We create Classes, RCLs, Web APIs, and other Resource Libraries, sharing resources across the JSopX™ ecosystem seamlessly. More rewarding, because we put the work in up front with developing & following standards, developers get to work on cooler things they are more passionate about too, like _Feature Highlights_.

![Jason Silvestri Open Project EXperiences (JSopX™) 4. Using Object-Oriented Programming](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-react-core/in-markdown/react-splash-simulate-container-markdown-step-4.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#3-multi-platform-creative-standards) [`Next »`](#5-we-get-to-extend-existing-project)

---

### **5. We Get to Extend Existing Project**:

As the project evolves through each Lifecycle Phase, we extend the application by creating new user interfaces, such as dashboards, logins, registration, in addition to being able to apply the standardized assets and resources we took the time to develop, implement security and writing documentation a well oiled machine and team relies on, and more!

![Jason Silvestri Open Project EXperiences (JSopX™) 5. We Get to Extend Existing Project](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-react-core/in-markdown/react-splash-simulate-container-markdown-step-5.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#4-using-object-oriented-programming) [`Next »`](#6-we-become-a-functioning-project-of-the-jsopx-enterprise-solution)

---

### **6. We Become A Functioning Project of the JSopX™ Enterprise Solution**:

The seamless integration into an enterprise-level application, adopting standardized Web API access, design patterns, and shared resources across the ecosystem.

![Jason Silvestri Open Project EXperiences (JSopX™) 6. We Become A Functioning Project of the JSopX™ Enterprise Solution](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-react-core/in-markdown/react-splash-simulate-container-markdown-step-6.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#5-we-get-to-extend-existing-project) [`Next »`](#getting-started)

---

## **Project File Structure**

The `JSopX.AngularCore` Project in particular, contains several files and directories, all with their own functionality & purpose for existing. 

For brevity, samples will not have the complete file structure you get when installing, but there are some core files and directories that have special consideration you should get to know. 

---

### **Structured Project & Solution Considerations**:

All `JSopX™ projects` follow a consistent directory structure. 

1. The `JSopX.AngularCore` Project naming conventions include capital casing for `.Server` directories and lowercase for `.client` directories.
2. I create a [Visual Studio](../jsopx.Global/Technologies/#visual-studio) Solution Folder to house the primary `.sln` solution file.
3. I create a **Client-Side** Project Folder for `.esproj` project files, and related files
4. I create a similar **Server-Side** Project Folder for `.csproj`, and related files.

A common, file folder structure of the `JSopX.AngularCore` Solution and Projects should look something like what follows:


| **File/Directory**                        | **Description**                                                                                   |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------|
| &nbsp;📁&nbsp;**JSopX.AngularCore/**&nbsp;                | Parent `JSopX.AngularCore` Visual Studio Solution folder, containing both client and server code.|
| &nbsp;├&nbsp;📝&nbsp;`JSopX.AngularCore.sln`&nbsp;            | Visual Studio `.sln` solution file linking the client and server projects. |
| &nbsp;├&nbsp;📁&nbsp;**jsopx.angularcore.client**&nbsp;         | Angular client-side application folder, housing the front-end implementation. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`jsopx.angularcore.client.esproj`&nbsp;     | Angular client-side Visual Studio project `.esproj` configuration file. |
| &nbsp;├&nbsp;📁&nbsp;**JSopX.AngularCore.Server**&nbsp;         | ASP.NET Core server-side folder for back-end logic and API endpoints. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.AngularCore.Server.csproj`&nbsp;     | Angular server-side Visual Studio project `.csproj` configuration file. |

[`⇧ Back to Top`](#table-of-contents)

---

### **Structured Table**:

A table structure of the same with no tree legs `JSopX.AngularCore` Project, files and resources.


| **File/Directory**                        | **Description**                                                                                   |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------|
| &nbsp;📁&nbsp;**JSopX.AngularCore/**&nbsp;                | Parent `JSopX.AngularCore` Visual Studio Solution folder, containing both client and server code.|
| &nbsp;├&nbsp;📝&nbsp;`.gitattributes`&nbsp;                   | Git attributes file for repository metadata and configurations. |
| &nbsp;├&nbsp;📝&nbsp;`.gitignore `&nbsp;                      | Specifies files and directories to ignore in version control. |
| &nbsp;├&nbsp;📝&nbsp;`JSopX.AngularCore.sln`&nbsp;            | Visual Studio `.sln` solution file linking the client and server projects. |
| &nbsp;├&nbsp;📝&nbsp;`PathConfig.targets`&nbsp;               | Centralized MSBuild target configuration for project references, used in conjunction with Git Sub Trees, to retain all files and references, while dynamically resetting reference paths if necessary. |
| &nbsp;├&nbsp;📝&nbsp;`LICENSE.txt` | Most current `JSopX.AngularCore` *Licensing* information for the project (generally `MIT` open-source license). |
| &nbsp;├&nbsp;📝&nbsp;`README.md` | Most current `JSopX.AngularCore` *README* `.md` file that provides an overview of the project, its purpose, and how to get started (*a.k.a.*, `Intro`). |
| &nbsp;├&nbsp;📝&nbsp;`REINSTALLME.md` | Most current `JSopX.AngularCore` *REINSTALLME* `.md` file that describes installation guide that provides step-by-step instructions on how to install and set up the project (*a.k.a.*, `Install`). |
| &nbsp;├&nbsp;📝&nbsp;`REDEBRIEFME.md` | Most current `JSopX.AngularCore` *REDEBRIEFME* `.md` file that describes the briefing document that outlines the purpose, goals, architecture, and key components of the project (*a.k.a.*, `Debrief`). |
| &nbsp;├&nbsp;📝&nbsp;`RECREATEME.md` | Most current `JSopX.AngularCore` *RECREATEME* `.md` file is the step-by-step guide that provides detailed instructions on how to create the project from scratch (*a.k.a.*, `Recreate`). |
| &nbsp;├&nbsp;📝&nbsp;`SECURITY.md` | Most current `JSopX.AngularCore` *SECURITY* `.md` file is the *security policy* that outlines how to report security vulnerabilities and the project's approach to security (*a.k.a.*, `Security`). |
| &nbsp;├&nbsp;📝&nbsp;`CODE_OF_CONDUCT.md` | Most current `JSopX.AngularCore` *CODE_OF_CONDUCT* `.md` file is the *code of conduct* that sets the expectations for behavior within the project community (*a.k.a.*, `Conduct`). |
| &nbsp;├&nbsp;📝&nbsp;`CONTRIBUTING.md` | Most current `JSopX.AngularCore` *CONTRIBUTING* `.md` file is the *contributing guidelines* that outline how developers can contribute to the project, including coding standards, pull request processes, and issue reporting (*a.k.a.*, `Contributing`). |
| &nbsp;├&nbsp;📝&nbsp;`CHANGELOG.md` | Most current `JSopX.AngularCore` *CHANGELOG* `.md` file is the *changelog* that tracks changes, updates, and versions of the project over time (*a.k.a.*, `changelogs`). |
| &nbsp;├&nbsp;📁&nbsp;**jsopx.angularcore.client**&nbsp;         | Angular client-side application folder, housing the front-end implementation. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`jsopx.angularcore.client.esproj`&nbsp;     | Angular client-side Visual Studio project `.esproj` configuration file. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`angular.json`&nbsp;                     | Angular CLI configuration file for workspace and project settings. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`package.json`&nbsp;                     | NPM metadata file listing project dependencies and scripts. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`src/`**&nbsp;                               | Main source directory for Angular, containing app components and assets. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`app/`**&nbsp;                             | Core Angular modules, components, and routing configurations. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app-routing.module.ts`&nbsp;          | Defines route configurations for Angular components. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app.component.css`&nbsp;              | Styles for the main application component. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app.component.html`&nbsp;             | HTML template for the main application component. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app.component.spec.ts`&nbsp;          | Unit test file for the main application component. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app.component.ts`&nbsp;               | TypeScript logic for the main application component. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`app.module.ts`&nbsp;                  | Root Angular module that declares components and imports dependencies. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`index.html`&nbsp;                     | Root HTML file that bootstraps the Angular application. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`main.ts`&nbsp;                        | Entry point file where Angular initializes and bootstraps the application. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`proxy.conf.js`&nbsp;                  | Configuration file for setting up API proxying in Angular. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`styles.css`&nbsp;                     | Global stylesheet for Angular application. |
| &nbsp;├&nbsp;📁&nbsp;**JSopX.AngularCore.Server**&nbsp;         | ASP.NET Core server-side folder for back-end logic and API endpoints. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.AngularCore.Server.csproj`&nbsp;     | Angular server-side Visual Studio project `.csproj` configuration file. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`Program.cs`&nbsp;                       | Main entry point for the ASP.NET Core application, initializing services. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`Controllers/`**&nbsp;                     | Contains API controllers that handle HTTP requests and responses. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`appsettings.json`&nbsp;                 | Configuration file for application settings like connection strings. |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`WeatherForecast.cs`&nbsp;               | Example Weather Forecast model class provided by ASP.NET Core templates for demonstration. |


[`⇧ Back to Top`](#table-of-contents)

---

## **JSopX™ Project References & Dependencies**

> [!TIP]
>
> The `JSopX.AngularCore` Project should already have the JSopX™ Project References & Dependencies described below included!
> 

---

Most `JSopX™ Projects` leverage shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability.

The `JSopX.AngularCore` Project has the following `JSopX` Project Dependencies:

1. **`JSopX.BridgeTooFar`**:
   - A [Shared Assets & Resources Projects](../jsopx.Global/Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets and project documentation.
   - **Explore GitHub**: [JSopX.BridgeTooFar](../jsopx.BridgeTooFar)

2. **`JSopX.ClassLibrary`**:
   - A [Shared Data, Service & Function Project](../jsopx.Global/Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) that houses shared business logic and helper methods.
   - **Explore GitHub**: [JSopX.ClassLibrary](../jsopx.ClassLibrary)

3. **`JSopX.WebAPI`**:
   - A [Shared Data, Service & Function Project](../jsopx.Global/Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) which acts as the centrialized **Web API**, used by all projects that access data endpoints in the application.
   - **Explore GitHub**: [JSopX.WebAPI](../jsopx.WebAPI)
 
4. **`JSopX.RCLxProper`**:
   - An extremely light-weight, [Shared Assets & Resources Projects](../jsopx.Global/Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) version of the `JSopX.Assets` Razor Class Library, specifically designed for Production-Ready environments.
   - **Explore GitHub**: [JSopX.RCLxProper](../jsopx.RCLxProper)


[`⇧ Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../jsopx.ReactCore/README.md)** → _Continue_ as **you were**, exploring and/or installing other projects like you did with **this project**. You'll move onto the next project, using the `JSopX.ReactCore` _Using Latest_ Variant.  

---

1. **[Browse By-Phase](../jsopx.AngularCore/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.AngularCore` _By-Phase_ Variant.   
2. **[Start From Scratch](../jsopx.AngularCore/p1/v1/RECREATEME.md)** → **Create project** from scratch, step-by-step, using the `JSopX.AngularCore` _From Scratch_ Variant.
3. **[Get All Projects](../jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../jsopx.AngularCore/README.md) » [`Introduction`](../jsopx.Global/Introduction/) » [`Projects`](../../OpenProjects/) · · **`Use Latest`** · [`By-Phase`](../jsopx.AngularCore/p1/v1/README.md) · [`From Scratch`](../jsopx.AngularCore/p1/v1/RECREATEME.md) · · [`⇧ Back to Top`](#table-of-contents) · [`« Previous`](../jsopx.AspNetCore/) [`Next »`](../jsopx.ReactCore/)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
