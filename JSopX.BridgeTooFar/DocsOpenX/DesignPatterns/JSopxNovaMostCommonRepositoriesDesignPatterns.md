# Most Common JSopX™ Repository Design Patterns

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection of Projects**

---

[`Home`](../OpenProjects/jsopx.BridgeTooFar/README.md) » [`Introduction`](../Introduction/) »  [`Design Patterns`](../DesignPatterns/) » **`Less Common Doc Section Design Patterns`**   · · · [`« Previous`](./JSopxNovaDocumentSectionDesignPatterns.md) [`Next »`](../DesignPatterns/)

---

> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate** and may contain placeholder information.

---

## Overview

This guide aims to provide Jason and Nova with insights - at a high level - with respects to the Visual Studio JSopX Projects, the GitHub Repositories that house them, and the similar details across projects important to us. creating navigational pages in documentation across projects. While specific projects handle page navigation differently, this document focuses on general best practices for consistent and effective navigation in static markdown files and dynamic generation tools like the `JSopX™ Nova Markdown Builder`.

### Problem Addressed

A common issue we encounter is broken or misdirected project links, especially in table-of-contents (TOC) situations. This problem can arise in handcrafted static markdown documents, as well as in automated tools like the `JSopX™ Nova Markdown Builder`. The root cause often lies in competing ideas and the complexity of managing resources spread across multiple projects.

---

## Table of Contents

  - [Overview](#overview)
    - [Problem Addressed](#problem-addressed)
  - [Prerequisites](#prerequisites)
  - [Corequisites](#corequisites)
 
---

## Prerequisites

- Visual Studio 2022 (v 17.3.0) or higher installed.
- .NET SDK (v 9.0.1) or higher installed.
- Node.js (v 20.14.0) or higher installed.
- Existing JSopX™ projects (e.g., `JSopX.BridgeTooFar`, `JSopX.ClassLibrary`, `JSopX.WebAPI`, etc.).
- Basic understanding of `.csproj` and `.sln` file structures.
- Basic understanding of `.md` and markdown files.

[`Back to Top`](#table-of-contents)

---

## Corequisites

Although the focus of this document is not the `JSopX™ Visual Studio Projects`, the core concepts discussed here align closely with a 1:1 relationship between repositories and the projects they house.

[`Back to Top`](#table-of-contents)

---

## **Instructions Block**

### **1. Review the Repositories**

Review the Repositories found throughout the documentation of this page. 

 Project Name                      | Description   |
|:---------------------------------|:--------------|
| `JSopX.RazorClassLibraryDraft`   | JSopX™ Razor Class Library Draft Project, is a little known, private repository, I store sensitive code not yet finished, draft and complete markdown documents, code snippets, finished and unfinished ideas & more.    |
| `JSopX.OpenProjectX`             | The JSopX™ Open Project EXperiences Project is an unified, enterprise-level solution orchestrates a broad range of technologies—Asp.NET Core, Blazor, .NET MAUI, Angular, React, Vue, and more—into a cohesive experience.   |
| `JSopX.ClassLibrary`             | The JSopX™ Class Library Core Project is a shared logic and utilities repository. Placing business logic or helper functions here ensures every project can draw from a single, reliable source, reducing code duplication and complexity.   |
| `JSopX.BridgeTooFar`             | The JSopX™ Bridge Too Far Project that Focused on static asset management, this project ensures a consistent distribution of documentation, CSS, JavaScript, images, and other shared files. By centralizing and streamlining asset handling, it prevents fragmentation and encourages better maintainability.   |
| `JSopX.WebAPI`                   | The JSopX™ Web API Project is a RESTful API backend that ties the ecosystem together. By providing consistent endpoints and data services, it empowers both server-side and client-side solutions to operate cohesively and securely.   |
| `JSopX.SharedResources`          | The JSopX™ Shared Resources Project is a traditional hub for common resources—images, fonts, scripts, localizations—that feed into multiple projects. Initially a central class library, it highlights the benefits of having a single source for shared assets.   |
| `JSopX.RCLxAssets`               | The JSopX™ RCL x Assets Razor Class Library Project has evolved from the `SharedResources` Project, this Razor Class Library manages static assets with a more modern approach. It ensures that all projects benefit from a centralized, easily maintainable asset pipeline.   |
| `JSopX.RCLxProper`               | The JSopX™ RCL x Proper Razor Class Library Project is a production-ready Razor Class Library offering structured components, pages, and views. These can be reused across the JSopX™ environment, simplifying UI consistency and accelerating development.   |
| `JSopX.RCLxComponents`           | The JSopX™ RCL x Components Razor Class Library Project is another Razor Class Library dedicated to reusable UI elements. By standardizing UI components, it ensures a consistent look and feel throughout the suite.   |
| `JSopX.AngularCore`              | The JSopX™ Angular Core Project is a client-side Angular project aimed at building dynamic single-page applications. It aligns seamlessly with ASP.NET Core backends and shared resources, illustrating how Angular fits into the JSopX™ architectural strategy. |
| `JSopX.ReactCore`                | The JSopX™ React Core Project is a React-based client-side project that demonstrates the flexibility and component-driven approach of React, working in harmony with ASP.NET Core services and shared assets.   |
| `JSopX.VueCore`                  | The JSopX™ Vue Core Project is a Vue.js client-side project crafted for reactive, component-focused development. Its seamless integration with ASP.NET Core and shared libraries exemplifies the framework-agnostic nature of JSopX™.   |
| `JSopX.AspNetCore`               | The JSopX™ Asp.NET Core Project is a server-side version of the client-side "Existing" App Examples. While this ASP.NET Core project often looks and feels like a standard server-side solution, it underpins the security, routing, and scalability principles that define the JSopX™ environment.   |
| `JSopX.BlazorServerCore`         | The JSopX™ Blazor Server Core Project is a server-side Blazor project showcasing how interactive web UIs can be built efficiently under the JSopX™ umbrella. By integrating with shared APIs and resources, it highlights the power and flexibility of Blazor’s real-time server-side model.   |
| `JSopX.MauiHybridNetCore`        | The JSopX™ MAUI Hybrid .NET Core Project is a multi-platform, cross-platform hybrid application blending ASP.NET Core, Blazor, and .NET MAUI. This project reveals how Razor components can unify desktop, native, and web experiences, reinforcing JSopX™’s commitment to versatility.   |


[`Back to Top`](#table-of-contents)

---

### 2. **Review Path Examples & Contextualization**

Each Repository has their own custom path structure, which undoubtably change across each project. 

For scenarios where paths are manipulated or adjusted dynamically, we will want the path to show path variations inline to illustrate. 

| Path Type                                 | Description                      |
|:------------------------------------------|:---------------------------------|
| `Base Path`                               | Used when configuring global project settings.   |
| `Base Solution Path`                      | Used when setting up server-side references, project configurations, etc. |
| `Server Project Path`                     | Used when setting up server-side APIs or backend configurations. |
| `Client Project Path`                     | Used for front-end development and builds.   |
| `Relative Project Path`                   | For internal references within a repository or when collaborating on shared code.   |
| `Absolute Project Path Local Repository`  | The path to the project repository when it is private and local to my computers.   |
| `Absolute Project Path Public Repository` | The path to the project repository while public on GitHub.   |
| `Absolute Project Path Public Blob`       | The path to the project repository blob while public on GitHub.   |


---

### 3. **Review Project Structure**

Each Repository has their own custom project structure, which undoubtably change across each project. Its important to have a high-level understanding on the basic strucure and files. 

| Structures        | Description         |
|:------------------|:--------------------|
| File Tree         | Basic, `plaintext`, file and directory structure of things that matter most in the project.   |
| Structured Table  | More elaborate, `table` respresentation of the same structure.Plus, it helps looking at the structure differently.  |


---

## **JSopX™ Angular Core Project**

The `JSopX.AngularCore` JSopX™ Angular Core Project is a client-side Angular project aimed at building dynamic single-page applications. It aligns seamlessly with ASP.NET Core backends and shared resources, illustrating how Angular fits into the JSopX™ architectural strategy.

---

### **General Assembly**

- **Version**: 1
- **Lifecycle Phase**: 1
- **Technology Requirements**:
  - Visual Studio 2022 (v 17.3.0) or higher
  - .NET SDK (v 9.0.1) or higher
  - Node.js (v 20.14.0) or higher

---

### **Path Examples & Contextualization**

1. **Base Path:**
    ```
    ./JSopX.AngularCore/
    ```

2. **Base Solution Path:**
    ```
    ./JSopX.AngularCore/JSopX.AngularCore.sln
    ```

3. **Server Project Path**:
    ```
     ./JSopX.AngularCore/JSopX.AngularCore.Server/JSopX.AngularCore.Server.csproj
    ```

4. **Client Project Path**:
    ```
     ./JSopX.AngularCore/jsopx.angularcore.client/jsopx.angularcore.client.esproj
    ```

5. **Relative Project Path**:
    ```
     ./JSopX.AngularCore/
    ```

6. **Absolute Project Path Local Repository**:
    ```
     C:\path\to\local\repo\JasonSilvestri\JSopX.AngularCore
    ```

7. **Absolute Project Path Public Repository**:
    ```
     https://github.com/JasonSilvestri/JSopX.AngularCore
    ```

8. **Absolute Project Path Public Blob**:
    ```
     https://github.com/JasonSilvestri/JSopX.AngularCore/blob/master
    ```

[`Back to Top`](#table-of-contents)

---

They are as follows: 

[See how we handle Bridge Too Far file structures](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsJSopxNovaOrionDocEngine/BrandProjects/JSopX/Master/DocsDrafts/Static/Advanced/JsopxNovaOnly/JsopxNovaMarkdownBuilder/BusinessRequirements.md#7-typical-file-tree-structure).

[`Back to Top`](#table-of-contents)

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

Here is a version Nova suggestion when dealing with nested folders:

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

## JSopX™ Razor Class Library Draft

The `JSopX.RazorClassLibraryDraft` JSopX™ Razor Class Library Draft Project, is a little known, private repository, I store sensitive code not yet finished, draft and complete markdown documents, code snippets, finished and unfinished ideas & more. 

Most importantly, this project has become a sandboxing location for features and resources that will often find their way into public JSopX™ Projects, like, `JSopX.SharedResources`, `JSopX.RCLxAssets`, `JSopX.RCLxProper`, etc.

---

### 1. **General Assembly**

- **Version**: 1
- **Lifecycle Phase**: 1
- **Technology Requirements**:
  - Visual Studio 2022 (v 17.3.0) or higher
  - .NET SDK (v 9.0.1) or higher
  - Node.js (v 20.14.0) or higher

---

### 2. **Path Examples & Contextualization**

1. **Base Path:**
    ```
    ./JSopX.AngularCore/
    ```

2. **Base Solution Path:**
    ```
    ./JSopX.AngularCore/JSopX.AngularCore.sln
    ```

3. **Server Project Path**:
    ```
     ./JSopX.AngularCore/JSopX.AngularCore.Server/JSopX.AngularCore.Server.csproj
    ```

4. **Client Project Path**:
    ```
     ./JSopX.AngularCore/jsopx.angularcore.client/jsopx.angularcore.client.esproj
    ```

5. **Relative Project Path**:
    ```
     ./JSopX.AngularCore/
    ```

6. **Absolute Project Path Local Repository**:
    ```
     C:\path\to\local\repo\JasonSilvestri\JSopX.AngularCore
    ```

7. **Absolute Project Path Public Repository**:
    ```
     https://github.com/JasonSilvestri/JSopX.AngularCore
    ```

8. **Absolute Project Path Public Blob**:
    ```
     https://github.com/JasonSilvestri/JSopX.AngularCore/blob/master
    ```

[`Back to Top`](#table-of-contents)

---

### 3. **Project File Structure**

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


[`Back to Top`](#table-of-contents)

---


| Display Name                       | Project Name                     | Description   |
|:-----------------------------------|:---------------------------------|:--------------|
| `JSopX™ Razor Class Library Draft`   | `JSopX.RazorClassLibraryDraft`   | JSopX™ Razor Class Library Draft Project, is a little known, private repository, I store sensitive code not yet finished, draft and complete markdown documents, code snippets, finished and unfinished ideas & more.    |
| JSopX™ Open Project X              | `JSopX.OpenProjectX`             | The JSopX™ Open Project EXperiences Project is an unified, enterprise-level solution orchestrates a broad range of technologies—Asp.NET Core, Blazor, .NET MAUI, Angular, React, Vue, and more—into a cohesive experience.   |
| JSopX™ Class Library               | `JSopX.ClassLibrary`             | The JSopX™ Class Library Core Project is a shared logic and utilities repository. Placing business logic or helper functions here ensures every project can draw from a single, reliable source, reducing code duplication and complexity.   |
| JSopX™ Bridge Too Far              | `JSopX.BridgeTooFar`             | The JSopX™ Bridge Too Far Project that Focused on static asset management, this project ensures a consistent distribution of documentation, CSS, JavaScript, images, and other shared files. By centralizing and streamlining asset handling, it prevents fragmentation and encourages better maintainability.   |
| JSopX™ Web API                     | `JSopX.WebAPI`                   | The JSopX™ Web API Project is a RESTful API backend that ties the ecosystem together. By providing consistent endpoints and data services, it empowers both server-side and client-side solutions to operate cohesively and securely.   |
| JSopX™ Shared Resources            | `JSopX.SharedResources`          | The JSopX™ Shared Resources Project is a traditional hub for common resources—images, fonts, scripts, localizations—that feed into multiple projects. Initially a central class library, it highlights the benefits of having a single source for shared assets.   |
| JSopX™ RCL x Assets                | `JSopX.RCLxAssets`               | The JSopX™ RCL x Assets Razor Class Library Project has evolved from the `SharedResources` Project, this Razor Class Library manages static assets with a more modern approach. It ensures that all projects benefit from a centralized, easily maintainable asset pipeline.   |
| JSopX™ RCL x Proper                | `JSopX.RCLxProper`               | The JSopX™ RCL x Proper Razor Class Library Project is a production-ready Razor Class Library offering structured components, pages, and views. These can be reused across the JSopX™ environment, simplifying UI consistency and accelerating development.   |
| JSopX™ RCL x Components            | `JSopX.RCLxComponents`           | The JSopX™ RCL x Components Razor Class Library Project is another Razor Class Library dedicated to reusable UI elements. By standardizing UI components, it ensures a consistent look and feel throughout the suite.   |
| JSopX™ Angular Core                | `JSopX.AngularCore`              | The JSopX™ Angular Core Project is a client-side Angular project aimed at building dynamic single-page applications. It aligns seamlessly with ASP.NET Core backends and shared resources, illustrating how Angular fits into the JSopX™ architectural strategy. |
| JSopX™ React Core                  | `JSopX.ReactCore`                | The JSopX™ React Core Project is a React-based client-side project that demonstrates the flexibility and component-driven approach of React, working in harmony with ASP.NET Core services and shared assets.   |
| JSopX™ Vue Core                    | `JSopX.VueCore`                  | The JSopX™ Vue Core Project is a Vue.js client-side project crafted for reactive, component-focused development. Its seamless integration with ASP.NET Core and shared libraries exemplifies the framework-agnostic nature of JSopX™.   |
| JSopX™ Asp.Net Core                | `JSopX.AspNetCore`               | The JSopX™ Asp.NET Core Project is a server-side version of the client-side "Existing" App Examples. While this ASP.NET Core project often looks and feels like a standard server-side solution, it underpins the security, routing, and scalability principles that define the JSopX™ environment.   |
| JSopX™ Blazor Server Core          | `JSopX.BlazorServerCore`         | The JSopX™ Blazor Server Core Project is a server-side Blazor project showcasing how interactive web UIs can be built efficiently under the JSopX™ umbrella. By integrating with shared APIs and resources, it highlights the power and flexibility of Blazor’s real-time server-side model.   |
| JSopX™ Maui Hybrid .NET Core       | `JSopX.MauiHybridNetCore`        | The JSopX™ MAUI Hybrid .NET Core Project is a multi-platform, cross-platform hybrid application blending ASP.NET Core, Blazor, and .NET MAUI. This project reveals how Razor components can unify desktop, native, and web experiences, reinforcing JSopX™’s commitment to versatility.   |


## **Common Technologies Section**

Some documents have a `Common Technologies` section, which is generally a list of one or more required technologies the primary topic discussed depends on (i.e., a Technology, one or more JSopX™ Projects, etc). 

**Example for `Common Technologies Section`**:

Let's picture we are a technology or project that requires one or more technologies to run as expected. 

```markdown

## Common Technologies

The following Technologies are required for _JSopX™ Open Project EXperiences Collection_ Projects to work as expected:

- [Common Technologies Included](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/CommonTechnologiesIncluded.md)
- [Visual Studio (v 17.13.6)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/AspNetCore.md)
- [.NET Core Blazor (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetCoreBlazor.md)
- [.Net Core Maui Hybrid (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetCoreMauiHybrid.md)
- [Node (v 20.14.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Node.md)
- [npm (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/npm.md)
- [Angular CLI (v 18.0.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/AngularCli.md)
- [React (v 18.2.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/React.md)
- [Vue (v 3.4.21)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Vue.md)
- [Vite (v 5.2.8)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Vite.md)

```

[`Back to Top`](#table-of-contents)

---

## Postrequisites

- Verify that Scrollspy accurately highlights the correct sections while scrolling.
- Test the layout in various screen sizes to ensure responsiveness.

[`Back to Top`](#table-of-contents)

---

## Concomitants

- You can combine Bootstrap Scrollspy with additional interactive features like tooltips or smooth scrolling for a better user experience.

[`Back to Top`](#table-of-contents)

---

## In Conclusion

- Use `data-bs-offset` or JavaScript to adjust the Scrollspy offset.
- Ensure the offset accounts for fixed elements like navbars.
- Confirm the link and section targeting is correct.
- Apply custom CSS adjustments if necessary to fix layout issues.

[`Back to Top`](#table-of-contents)

---

[`Home`](../OpenProjects/jsopx.BridgeTooFar/README.md) » [`Introduction`](../Introduction/) »  [`Design Patterns`](../DesignPatterns/) » **`Less Common Doc Section Design Patterns`**  · · ·  [`Back to Top`](#table-of-contents) · · · [`« Previous`](./JSopxNovaDocumentSectionDesignPatterns.md) [`Next »`](../DesignPatterns/)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto\:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri

---

---

---

# We Have Multiple Navigation Pages Based on Resource

## Most Common

There are some more common Navigation Page types.

### **1. The Introduction : In Collection (ReadMe.md)**

When users come to an over arching, highest level, sort of documentation mode, we try to keep the page as basic as possible.

```markdown

# JSopX™ Introduction

JSopX™ acts as a blueprint for consistent, scalable, and maintainable development across multiple technologies, as outlined in the [Overview](#overview) section.

---

**`Introduction`** · · · [`Get Started »`](./Alerts.md)

---

## **Overview**

JSopX™ provides a unified framework of guidelines, organizational structures, and best practices designed to streamline project setup, enhance collaboration, and improve maintainability. By adopting these conventions, developers can more easily navigate diverse technologies, ensure consistent quality standards, and quickly understand the logic and layout of each component within the broader ecosystem. As you progress through the documentation, you’ll gain insights into how to structure projects, leverage existing patterns, and adapt them for both current and future needs.

---

### Table of Contents

- [Overview](#overview)
- [Alerts](Alerts.md)
- [JSopX™ Documentation Sections and Structure](JSopxDocumentationSectionsandStructure.md)
- [Jason Silvestri’s Open Project EXperiences (JSopX™)](JasonSilvestriOpenProjectExperiences.md)
- [JSopX™ Visual Studio Projects](JSopxProjects.md)
- [JSopX™ Visual Studio Project Families](JSopxProjectsFamilies.md)
- [JSopX™ Visual Studio Project Checks and Balances](JSopxProjectChecksBalances.md)
- [JSopX™ Technology Requirements](JSopxTechnologyRequirements.md)
- [JSopX™ Visual Studio Projects GitHub Basics](JSopxProjectsGitHubBasics.md)
- [JSopX™ Visual Studio Projects GitHub Advanced](JSopxProjectsGitHubAdvanced.md)
- [JSopX™ Document ﻿File & Directory Design Patterns](JSopxNovaFileandDirectoryDesignPatterns.md)
- [JSopX™ & Nova Code Snippet Design Patterns](JSopxNovaCodeSnippetDesignPatterns.md)
- [JSopX™ & Nova Barn Door Protocol Design Patterns](JSopxNovaBarnDoorProtocolDesignPatterns.md)
- [JSopX™ & Nova Document Section Design Patterns](JSopxNovaDocumentSectionDesignPatterns.md)
- [JSopX™ & Nova Less Common Document Section Design Patterns](JSopxNovaLessCommonDocSectionDesignPatterns.md)

---

**`Introduction`** · · · [`Back to Top`](#table-of-contents) · · · [`Get Started »`](./Alerts.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri

```



### **2. The Introduction : Outside Collection (Introduction.md)**

When users come to an over arching, highest level, sort of documentation mode, we try to keep the page as basic as possible.

```markdown

# JSopX™ Introduction

JSopX™ acts as a blueprint for consistent, scalable, and maintainable development across multiple technologies, as outlined in the [Overview](#overview) section.

---

**`Introduction`** · · · [`Get Started »`](./Alerts.md)

---

## **Overview**

JSopX™ provides a unified framework of guidelines, organizational structures, and best practices designed to streamline project setup, enhance collaboration, and improve maintainability. By adopting these conventions, developers can more easily navigate diverse technologies, ensure consistent quality standards, and quickly understand the logic and layout of each component within the broader ecosystem. As you progress through the documentation, you’ll gain insights into how to structure projects, leverage existing patterns, and adapt them for both current and future needs.

---

### Table of Contents

- [Overview](#overview)
- [Alerts](./Alerts.md)
- [JSopX™ Documentation Sections and Structure](./JSopxDocumentationSectionsandStructure.md)
- [Jason Silvestri’s Open Project EXperiences (JSopX™)](./JasonSilvestriOpenProjectExperiences.md)
- [JSopX™ Visual Studio Projects](./JSopxProjects.md)
- [JSopX™ Visual Studio Project Families](./JSopxProjectsFamilies.md)
- [JSopX™ Visual Studio Project Checks and Balances](./JSopxProjectChecksBalances.md)
- [JSopX™ Technology Requirements](./JSopxTechnologyRequirements.md)
- [JSopX™ Visual Studio Projects GitHub Basics](../GitHub/JSopxProjectsGitHubBasics.md)
- [JSopX™ Visual Studio Projects GitHub Advanced](../GitHub/JSopxProjectsGitHubAdvanced.md)
- [JSopX™ Document ﻿File & Directory Design Patterns](../DesignPatterns/JSopxNovaFileandDirectoryDesignPatterns.md)
- [JSopX™ & Nova Code Snippet Design Patterns](../DesignPatterns/JSopxNovaCodeSnippetDesignPatterns.md)
- [JSopX™ & Nova Barn Door Protocol Design Patterns](../DesignPatterns/JSopxNovaBarnDoorProtocolDesignPatterns.md)
- [JSopX™ & Nova Document Section Design Patterns](../DesignPatterns/JSopxNovaDocumentSectionDesignPatterns.md)
- [JSopX™ & Nova Less Common Document Section Design Patterns](../DesignPatterns/JSopxNovaLessCommonDocSectionDesignPatterns.md)

---

**`Introduction`** · · · [`Back to Top`](#table-of-contents) · · · [`Get Started »`](./Alerts.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri

```

---

## Exceptions 

### Location in Assets Projects:

```html

                            <ul class="nav nav-pills flex-column">
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-open-project-x/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-logo-black"></use></svg>
                                        Open Project X
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-angular-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-angular-core-logo-black"></use></svg>
                                        Angular Core
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-aspnet-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-aspnet-core-logo-black"></use></svg>
                                        Asp.NET Core
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-blazor-server-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-blazor-server-core-logo-black"></use></svg>
                                        Blazor Server Core
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-react-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-react-core-logo-black"></use></svg>
                                        React Core
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-vue-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-vue-core-logo-black"></use></svg>
                                        Vue Core
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-maui-hybrid-net-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-maui-hybrid-net-core-logo-black"></use></svg>
                                        MAUI Hybrid
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-bridge-too-far/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-bridge-too-far-logo-black"></use></svg>
                                        Bridge Too Far
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-class-library/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-class-library-logo-black"></use></svg>
                                        Class Library
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-web-api/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-web-api-black"></use></svg>
                                        Web API
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-shared-resources/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-shared-resources-logo-black"></use></svg>
                                        Shared Resources
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-rcl-x-assets/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-rcl-x-assets-logo-black"></use></svg>
                                        RCL Assets
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-rcl-x-proper/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-rcl-x-proper-logo-black"></use></svg>
                                        RCL Proper
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-rcl-x-components/index.html" class="nav-link link-body-emphasis">
                                        <svg class="JSopX™ pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-rcl-x-components-logo-black"></use></svg>
                                        RCL Components
                                    </a>
                                </li>
                            </ul> 

```

---

### Location in Bridge Too Far:

## `JSopX.` Dependencies

The following _JSopX™ Open Project EXperiences Collection_ Projects that depend on `Visual Studio` or `Visual Studio Code` **`17.13.6`** (_or higher_) are as follows:


- [`JSopX.OpenProjectX`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.OpenProjectX/p1/v1/)
- [`JSopX.ClassLibrary`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.ClassLibrary/p1/v1/)    
- [`JSopX.BridgeTooFar`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/)  
- [`JSopX.WebAPI`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.WebAPI/p1/v1/)
- [`JSopX.SharedResources`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.SharedResources/p1/v1/)
- [`JSopX.RCLxProper`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.RCLxProper/p1/v1/)
- [`JSopX.RCLxAssets`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.RCLxAssets/Master/p1/v1/) 
- [`JSopX.RCLxComponets`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.RCLxComponents/p1/v1/) 
- [`JSopX.AngularCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.AngularCore/p1/v1/) 
- [`JSopX.ReactCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.ReactCore/p1/v1/)  
- [`JSopX.VueCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.VueCore/p1/v1/)  
- [`JSopX.AspNetCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.AspNetCore/p1/v1/)   
- [`JSopX.BlazorServerCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BlazorServerCore/p1/v1/) 
- [`JSopX.MauiHybridNetCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/)  

