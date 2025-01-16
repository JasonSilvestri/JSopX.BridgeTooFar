# JSopX™ Angular Core

**Jason Silvestri Open Project EXperiences (JSopX™)** is a first-of-its-kind, open-source, multi-platform, enterprise-level suite of applications that demonstrate how to unify disparate technologies under one cohesive, scalable, and maintainable ecosystem.

The **JSopX™ Angular Core** project in specific, is intended to simulate an "Existing" Angular client-side SPA App Example, with the end goal of becoming fully integrated into our new, unified enterprise solution. 

Explore the [Overview](#overview) section for more details on the JSopX™ Angular Core project.

---

[`Introduction`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/) » [`JSopX Projects`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/JSopxProjects.md) » [`JSopX.AngularCore`](https://github.com/JasonSilvestri/JSopX.AngularCore)  » **[`Phase 1`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.AngularCore/Master/p1/v1/)**  · · · [`« Previous`](https://github.com/JasonSilvestri/JSopX.AspNetCore) [`Next »`](https://github.com/JasonSilvestri/JSopX.ReactCore)

---

## Table of Contents

  - [Overview](#overview)
  - [Current Phase](#current-phase)
  - [Prerequisites](#prerequisites)
  - [Corequisites﻿](#corequisites-)
  - [Postrequisites](#postrequisites)
  - [JSopX.AngularCore Feature Highlights](#jsopxangularcore-feature-highlights)
    - [General Assembly](#general-assembly)
    - [Basic Documentation](#basic-documentation)
    - [Basic Security](#basic-security)
    - [Source Code Repository](#source-code-repository)
    - [Multi-Platform Responsive Design](#multi-platform-responsive-design)
    - [Weather Forecast API Sample Data & End Points](#weather-forecast-api-sample-data--end-points)
  - [Getting Started](#getting-started)
    - [Step-by-Step Instructions](#step-by-step-instructions)
    - [Step 1: Clone the Repository](#step-1-clone-the-repository)
    - [Step 2: Open the Solution](#step-2-open-the-solution)
    - [Step 3: Configure the Project](#step-3-configure-the-project)
    - [Step 4: Build and Run](#step-4-build-and-run)
  - [Project File Structure](#project-file-structure)
  - [Usage](#usage)
    - [Adding JSopX.AngularCore to Other Projects](#adding-jsopxangularcore-to-other-projects)
  - [Extended Usage](#extended-usage)
  - [JSopX™ Project References & Dependencies](#jsopx-project-references--dependencies)
  - [Next Steps](#next-steps)

---

## Overview


The `JsopX.AngularCore` **JSopX™ Angular Core Open Project EXperience**  is a demonstration project showcasing how to build a web application using Angular and ASP.NET Core Web API, while anticipating it becoming part of a unified enterprise solution. 

It highlights the integration of Angular for the client-side with ASP.NET Core for the server-side, providing a comprehensive example of a modern web application stack. More importantly, its primary use case in the JSopX™ Enterprise-Level Application is to simulate an ["Existing" Client-side Apps Example](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples), with its own Web API, and its own existing standards. 

The end goal is seamlessly incorporating it into our collective enterprise suite, adopting its new parent's Web API, assets, standards, etc.

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

Ensure the following technologies and versions are installed, even if your only objective is to explore the `JSopX.AngularCore` project independently from all other projects:

- [Visual Studio (v 17.12.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#visual-studio-v-17123).
- [.NET Framework (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#net-framework-v-900).
- [ASP.NET Core (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#aspnet-core-v-900).
- [Node.js (v 20.14.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#node-v-20140).
- [Angular CLI (v 18.0.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#angular-cli-v-1803).

[`Back to Top`](#table-of-contents)

---

## **Corequisites**

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

- I am still in discovery with [Angular CLI (v 18.0.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies#angular-cli-v-1803). If you find a bug, see something I may not be implementing correctly, or something else, please do not hesitate to call me out. 

[`Back to Top`](#table-of-contents)

---

## JSopX.AngularCore Feature Highlights

It is possible for Project Feature Highlights to be different here depending on the Phase we are currently in, so be sure to double-check documentation when newly released.

**The `JSopX.AngularCore` features worth mentioning are as follows**:

### General Assembly

- **JSopX.AngularCore.sln**: The primary `JSopX.AngularCore` Visual Studio solution already supports an Angular Client-Side SPA project and an ASP.NET Core Server-Side Web API project.

### Basic Documentation 

- **ReadMe.md**: Even in these early Phases, as you can see while reading along, there is at least basic comments in code and samples, and a detailed, Step-by-Step Instructions set of documentation.

### Basic Security 

- **Type Script**: Love it or hate it, **TypeScript** is one of the first lines of defense with respects to data normalization and security when working client-side frameworks like Angular. Some basic implementation is present in this phase and version of the application. As each phase comes and goes, we expand on this implementation, as we extend functionality like register and login support, and more.

### Source Code Repository

- **JSopX.AngularCore.git**: The primary `JSopX.AngularCore` Visual Studio solution already has a GitHub Repository.


### Multi-Platform Responsive Design

- Although extremely primitive, even this version of the `JSopX.AngularCore` Visual Studio solution supports basic user experiences for most smartphones, tablets, laptops, & desktop computers. Conversely, these simple implementations are nothing compared to features available to you in upcoming phases (features already developed). 


### Weather Forecast API Sample Data & End Points

- **WeatherForecastController.cs**: The primary `JSopX.AngularCore` Visual Studio solution already supports basic, randomly generated, weather forecast sample data and endpoints. 

[`Back to Top`](#table-of-contents)

---

## JSopX.AngularCore Feature Highlights

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
> This section describes a typical cloning operation using GitHub Repositories, you can use to easily get the latest `JSopX.AngularCore` project and explore it independently! To mimic the custom configuration used in the JSopX project architecture, takes some extra effort to fully implement and is not recommened.
> 
> **To mimic the advanced cloning operations we use to serve the `JSopX.OpenProjectX` project suite, as an `all-projects-in-one` project and/or `independent-projects` project installations, please see, [JSopX™ Visual Studio Projects GitHub Advanced](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/JSopxProjectsGitHubAdvanced.md) for details.**
>

---

### **Independent Installation & Exploration**

The [JSopX™ Visual Studio Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/JSopxProjects.md) collectively form the backbone of the entire suite, each project serving a distinct yet complementary role.

By aligning varied frameworks—ranging from ASP.NET Core to Angular, React, Vue, Blazor, and .NET MAUI—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly.

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. 

As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve, adapt, and retain their own identity.


### **Step-by-Step Instructions**


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

The `JSopX.AngularCore` Project contains several files and directories, all with their own functionality & purpose for existing. Conversely, there are some core files and directories that have special consideration. They are as follows: 

### **File Tree**:

```plaintext
JSopX.AngularCore/
├── jsopx.angularcore.client/             # Angular client-side application folder.
│   ├── jsopx.angularcore.client.esproj   # Angular CLI Visual Studio Client Project configuration file.
│   ├── angular.json                      # Angular CLI workspace configuration file.
│   ├── package.json                      # NPM dependencies and project metadata.
│   ├── src/                              # Main source directory for the Angular app.
│   │   ├── app/                          # Core Angular modules, components, and routing.
│   │   ├── index.html                    # Root HTML file to bootstrap the Angular app.
│   │   └── main.ts                       # Main entry point for Angular application.
├── JSopX.AngularCore.Server/             # ASP.NET Core server-side application folder.
│   ├── JSopX.AngularCore.Server.csproj   # Angular CLI Visual Studio Server Project configuration file.
│   ├── Program.cs                        # Main entry point for the ASP.NET Core server.
│   ├── Controllers/                      # API controllers exposing server endpoints.
│   ├── appsettings.json                  # Application settings file for configuration.
│   └── WeatherForecast.cs                # Example model class (default template).
├── JSopX.AngularCore.sln                 # Visual Studio solution file.
```

### **Table Structure**:

Here’s the same structure for `JSopX.AngularCore` expanded on in table format:

| **File/Directory**                   | **Description**                                                                  |
|:-------------------------------------|:---------------------------------------------------------------------------------|
| 📁 **JSopX.AngularCore**             | Root folder for the AngularCore project, containing both client and server code. |
| 📁 **jsopx.angularcore.client**      | Angular client-side application folder, housing the front-end implementation.    |
| 📝 `jsopx.angularcore.client.esproj` | Angular client-side Visual Studio project `.esproj` configuration file, housing the front-end implementation.    |
| 📝 `angular.json`                    | Angular CLI configuration file for workspace and project settings.               |
| 📝 `package.json`                    | NPM metadata file listing project dependencies and scripts.                      |
| 📁 `src/`                            | Main source directory for Angular, containing app components and assets.         |
| 📁 `src/app/`                        | Core Angular modules, components, and routing configurations.                    |
| 📝 `src/index.html`                  | Root HTML file that bootstraps the Angular application.                          |
| 📝 `src/main.ts`                     | Entry point file where Angular initializes and bootstraps the application.       |
| 📁 **JSopX.AngularCore.Server**      | ASP.NET Core server-side folder for back-end logic and API endpoints.            |
| 📝 `JSopX.AngularCore.Server.csproj` | Angular server-side Visual Studio project `.csproj` configuration file, housing the back-end implementation.    |
| 📝 `Program.cs`                      | Main entry point for the ASP.NET Core application, initializing services.        |
| 📁 `Controllers/`                    | Contains API controllers that handle HTTP requests and responses.                |
| 📝 `appsettings.json`                | Configuration file for application settings like connection strings.             |
| 📝 `WeatherForecast.cs`              | Example model class provided by ASP.NET Core templates for demonstration.        |
| 📝 **JSopX.AngularCore.sln**         | Visual Studio solution file linking the client and server projects.              |


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

## **JSopX™ Project References & Dependencies**

The `JSopX.AngularCore` project leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability.

1. **`JSopX.BridgeTooFar`**:
   - Contains reusable static assets and project documentation.
   - Repository: [JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar)

2. **`JSopX.ClassLibrary`**:
   - Houses shared business logic and helper methods.
   - Repository: [JSopX.ClassLibrary](https://github.com/JasonSilvestri/JSopX.ClassLibrary)

[`Back to Top`](#table-of-contents)

---

## **Next Steps**

- Document additional features for subsequent phases.
- Extend the Angular app by adding more advanced modules and reusable components.
- Configure CI/CD pipelines for automated testing and deployment.

[`Back to Top`](#table-of-contents)

---

[`Introduction`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/) » [`JSopX Projects`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/JSopxProjects.md) » [`JSopX.AngularCore`](https://github.com/JasonSilvestri/JSopX.AngularCore)  » **[`Phase 1`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.AngularCore/Master/p1/v1/)**  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](https://github.com/JasonSilvestri/JSopX.AspNetCore) [`Next »`](https://github.com/JasonSilvestri/JSopX.ReactCore)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
