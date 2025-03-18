# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-angular-core-logo.svg" style="width: 30px; height: auto; padding-right:12px;!important;"> JSopX™ Angular Core Project

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

**`JSopX.AngularCore` v `1.0` `"Using Latest" Edition`**

---

The **JSopX™ Angular Core Project** is a demonstration project showcasing how to build a web application using Angular and ASP.NET Core Web API. 

```bash
# For Cool Kids: Clone JSopX.AngularCore Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
```

---

[`Introduction`](../../Introduction/) » [`JSopX Projects`](../../OpenProjects/) » **`JSopX.AngularCore`** · · [`From Scratch`](../../OpenProjects/jsopx.AngularCore/p1/v1/RECREATEME.md) · · · [`« Previous`](../../OpenProjects/jsopx.AspNetCore/) [`Next »`](../../OpenProjects/jsopx.ReactCore/)

---

## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Corequisites](#corequisites)
  - [Postrequisites](#postrequisites)
  - [Getting Started](#getting-started)
      - [Step 1: Clone the Repository](#step-1-clone-the-repository)
      - [Step 2: Open the Solution](#step-2-open-the-solution)
      - [Step 3: Configure the Project](#step-3-configure-the-project)
      - [Step 4: Build and Run](#step-4-build-and-run)
  - [Project File Structure](#project-file-structure)
  - [Project References & Dependencies](#jsopx-project-references--dependencies)
  - [Usage](#usage)
  - [Extended Usage](#extended-usage)
  - [Next Steps](#next-steps)

---

## Current Phase

> [!NOTE]
>
>**Phases 1**: This document is currently aligned with **[Phase 1: Minimum Viable Product (MVP)](../../Phases/Phase-1.md)** Business Requirements. 
> 

---

## Overview

The **JSopX™ Angular Core Project** (**[`JSopX.AngularCore`](#prerequisites)**) is a demonstration project showcasing how to build a web application using Angular and ASP.NET Core Web API. 

As a whole, the project highlights the integration of _Angular_ for the client-side with _ASP.NET Core_ for the server-side, providing a comprehensive example of a modern web application stack. Conversely, the project has a much higher calling.

We initially create the project to simulate an ["Existing" Client-side Apps Example](../../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) of an existing Weather Forecast Angular application, with its own Web API and existing standards, to conform to the basic business requirements set forth by the fictioanal stakeholders.

As the project evolves through each [Lifecycle Phase](../../Phases/ReadMe.md), we extend the application by-way-of the creation of new user interfaces, the integratation of standardized assets and resources commonly used across projects, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our `JSopX.OpenProjectX` Enterprise Application.

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring just the `JSopX.AngularCore` Project.

- [Visual Studio (v 17.13.3)](../../Technologies/#visual-studio)
- [.NET Framework (v 9.0.1)](../../Technologies/#net-framework)
- [ASP.NET Core (v 9.0.1)](../../Technologies/#aspnet-core)
- [Node.js (v 20.14.0)](../../Technologies/#node)
- [Angular CLI (v 18.0.3)](../../Technologies/#angular-cli)

---

## **Corequisites**

Be sure each technology is installed, with proper versioning, if your goal is to explore all `JSopX.OpenProjectX` Projects.

- [Visual Studio (v 17.13.3)](../../Technologies/#visual-studio)
- [.NET Framework (v 9.0.1)](../../Technologies/#net-framework)
- [ASP.NET Core (v 9.0.1)](../../Technologies/#aspnet-core)
- [.NET Core Blazor (v 9.0.1)](../../Technologies/#net-core-blazor)
- [.Net Core Maui Hybrid (v 9.0.1)](../../Technologies/#net-core-maui-hybrid)
- [Node (v 20.14.0)](../../Technologies/#node)
- [npm (v 10.8.1)](../../Technologies/#npm)
- [Angular CLI (v 18.0.3)](../../Technologies/#angular-cli)
- [React (v 18.2.0)](../../Technologies/#react)
- [Vue (v 10.8.1)](../../Technologies/#vue)
- [Vite (v 3.4.21)](../../Technologies/#vite)
- [Bash (v 5.x+)](../../Technologies/#bash)
- [Powershell (v 7.x+)](../../Technologies/#powershell)
- [Check All Simotaniously (v 1.0)](../../Technologies/#check-all-requirements-simotaniously)

---

## **Postrequisites**

- I'm still **in discovery** with this version of [Angular CLI (v 18.0.3)](../../Technologies#angular-cli). I generally don't change this status to **professional** or **expert** levels unless I have had at least a year or more experience with a given technology, even if the version in question does not require such time or dedication. Conversely, if you spot a bug, notice something I might not be implementing correctly, or see anything else worth mentioning, please don’t hesitate to point it out. I want to ensure developers of all skill levels can get the most out of the project(s).

[`Back to Top`](#table-of-contents)

---

## **Getting Started**

Before we get started with the `JSopX.AngularCore` Project, lets double check and make sure we are on the same page.

1. You reviewed and/or have installed the technology requirements outlined in the [Prerequisites](#prerequisites) seciton.
2. You realize you are currently working with `JSopX.AngularCore` Project independently from the rest of the `JSopX.OpenProjectX` Projects.
3. You have a general sense of `GitHub` respositories, and understand source control as a whole.

[`Back to Top`](#table-of-contents)

---

## **Step 1: Clone the Repository**

_Clone_ the `JSopX.AngularCore` GitHub Repository if you plan to explore it independently from the rest of the projects.


---

### **Step 1.1: Using `Bash`:**
 
```bash

 # Using Bash: Clone JSopX.AngularCore Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.AngularCore

 # 2. Clone JSopX.AngularCore Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
    
```

[`Back to Top`](#table-of-contents)

---

### **Step: 1.2: Using `Powershell`:**

```powershell

 # Using PowerShell: Clone JSopX.AngularCore Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.AngularCore

 # 2. Clone JSopX.AngularCore Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
    
```

[`Back to Top`](#table-of-contents)

---

### **Step: 1.3: Using `Node.js` or `npm` (degit):**
 
```shell

 # Using Node.js / npm : Clone JSopX.AngularCore Git Repository
 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.AngularCore
    
 # 2. Using npx degit to clone without .git history
 npx degit https://github.com/JasonSilvestri/JSopX.AngularCore

```

[`Back to Top`](#table-of-contents)

---

## **Step 2: Open the Solution**

Working with the `JSopX.AngularCore` Project in Visual Studio is simple enough.

1. Launch **[Visual Studio (v 17.13.3)](../../Technologies/#visual-studio)**.
2. Open the solution file: `JSopX.AngularCore.sln`.

[`Back to Top`](#table-of-contents)

---

## **Step 3: Configure the Project**

> [!TIP]
>
> Latest versions of [Visual Studio](../../Technologies/#visual-studio) performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). Still, it is good practice to at least be aware of the commands outlined in this step.
> 

---

### **Step: 3.1: Ensure Dependencies Are Restored:**

Ensure `JSopX.AngularCore` Project dependencies are restored:

   ```bash
   npm install
   ```


[`Back to Top`](#table-of-contents)

---

### **Step: 3.2: Verify Nuget Packages:**

Verify that all NuGet packages are up to date:

   ```bash
   dotnet restore
   ```
   
[`Back to Top`](#table-of-contents)

---

## Step 4: Build and Run

Running the `JSopX.AngularCore` Project in Visual Studio is also another simple task.

1. Build the solution in [Visual Studio](../../Technologies/#visual-studio).
2. Run the project:
   - Use the **IIS Express** profile for local development.

[`Back to Top`](#table-of-contents)

---

## **Project File Structure**

The `JSopX.AngularCore` Project contains several files and directories, all with their own functionality & purpose for existing. Conversely, there are some core files and directories that have special consideration. 

I provide two options below to ingest some of the high-level details.

---

### **Option 1: Structured File Tree**:

A common, plain-text file structure of the `JSopX.AngularCore` Project.

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

[`Back to Top`](#table-of-contents)

---

### **Option 2: Structured Table**:

A table structure of the same `JSopX.AngularCore` Project, files and resources.

| **File/Directory**                     | **Description**                                                                                   |
|:---------------------------------------|:--------------------------------------------------------------------------------------------------|
| 📁 **JSopX.AngularCore**               | Parent `JSopX.AngularCore` Visual Studio Solution folder, containing both client and server code.|
| ├ 📝 `.gitattributes`                | Git attributes file for repository metadata and configurations. |
| ├ 📝 `.gitignore `                   | Specifies files and directories to ignore in version control. |
| ├ 📝 `JSopX.AngularCore.sln`         | Visual Studio `.sln` solution file linking the client and server projects. |
| ├ 📝 `LICENSE.txt`                   | Licensing information for the project (generally `MIT` open-source license). |
| ├ 📝 `PathConfig.targets`            | Centralized MSBuild target configuration for project references, used in conjunction with Git Sub Trees, to retain all files and references, while dynamically resetting reference paths if necessary. |
| 📁 **jsopx.angularcore.client**        | Angular client-side application folder, housing the front-end implementation. |
| ├ 📝 `jsopx.angularcore.client.esproj`   | Angular client-side Visual Studio project `.esproj` configuration file. |
| ├ 📝 `angular.json`                      | Angular CLI configuration file for workspace and project settings. |
| ├ 📝 `package.json`                      | NPM metadata file listing project dependencies and scripts. |
| 📁 `src/`                              | Main source directory for Angular, containing app components and assets. |
| ├ 📁 `app/`                          | Core Angular modules, components, and routing configurations. |
| │ ├ 📝 `app-routing.module.ts`     | Defines route configurations for Angular components. |
| │ ├ 📝 `app.component.css`         | Styles for the main application component. |
| │ ├ 📝 `app.component.html`        | HTML template for the main application component. |
| │ ├ 📝 `app.component.spec.ts`     | Unit test file for the main application component. |
| │ ├ 📝 `app.component.ts`          | TypeScript logic for the main application component. |
| │ ├ 📝 `app.module.ts`             | Root Angular module that declares components and imports dependencies. |
| │ ├ 📝 `index.html`                    | Root HTML file that bootstraps the Angular application. |
| │ ├ 📝 `main.ts`                       | Entry point file where Angular initializes and bootstraps the application. |
| │ ├ 📝 `proxy.conf.js`                 | Configuration file for setting up API proxying in Angular. |
| │ ├ 📝 `styles.css`                    | Global stylesheet for Angular application. |
| 📁 **JSopX.AngularCore.Server**        | ASP.NET Core server-side folder for back-end logic and API endpoints. |
| ├ 📝 `JSopX.AngularCore.Server.csproj` | Angular server-side Visual Studio project `.csproj` configuration file. |
| ├ 📝 `Program.cs`                    | Main entry point for the ASP.NET Core application, initializing services. |
| ├ 📁 `Controllers/`                  | Contains API controllers that handle HTTP requests and responses. |
| ├ 📝 `appsettings.json`              | Configuration file for application settings like connection strings. |
| ├ 📝 `WeatherForecast.cs`            | Example model class provided by ASP.NET Core templates for demonstration. |


[`Back to Top`](#table-of-contents)

---

## **JSopX™ Project References & Dependencies**

`JSopX` projects leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability.

The `JSopX.AngularCore` Project has the following `JSopX` Project Dependencies:

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

---

[`Introduction`](../../Introduction/) » [`JSopX Projects`](../../OpenProjects/) » **`JSopX.AngularCore`** · · [`From Scratch`](../../OpenProjects/jsopx.AngularCore/p1/v1/RECREATEME.md) · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../OpenProjects/jsopx.AspNetCore/) [`Next »`](../../OpenProjects/jsopx.ReactCore/)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
