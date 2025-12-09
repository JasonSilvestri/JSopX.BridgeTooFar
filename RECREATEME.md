# JSopX™ —  Core Project: Re-Create Project Step-by-Step (v1)

The **JSopX™ Angular Core Project**, _code named_, `JSopX.AngularCore` is a totally **FREE**, open-source, demonstration project showcasing how easy it is to build a web application using Angular CLI and ASP.NET Core Web API to consume a JSopX™ SaaS Services. 

---

```bash
# For The Cool Kids: Clone JSopX.AngularCore Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
```

---

[`Home`] » [`Solutions`] » [`JSopX.AngularCore`] » [`Install`] ·· [`Debrief`] ·· **[`Recreate`]**

---

**JSopX™ Solution**:

[`« Previous`] [`Next »`]

---

## Table of Contents  

 - [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Corequisites](#corequisites)
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

### JSopX™ Angular Core SaaS Services Sample

> [!NOTE]
>
>The **JSopX™ Angular Core Project**, _code named_, `JSopX.AngularCore` is a totally **FREE**, open-source, demonstration project showcasing JSopX™ SaaS Services. It is not intended for production use without further development and customization to meet specific business needs.
> 

---

## Overview

The **JSopX™ Angular Core Project**, _code named_, `JSopX.AngularCore` is a totally **FREE**, open-source, demonstration project showcasing how easy it is to build a web application using Angular CLI and ASP.NET Core Web API to consume a JSopX™ SaaS Services.

- Easily extendable and customizable for various use cases.
- Built with best practices in mind for scalability and maintainability.
- Comprehensive documentation to guide developers through setup and usage.

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring and/or installing just the `JSopX.AngularCore` Project.

- [Windows (v 10+)]
- [Visual Studio (v 17.14.21)]
- [.NET Framework (v 9.2.1)]
- [ASP.NET Core (v 9.2.1)]
- [Node (v 20.14.0)]
- [npm (v 10.8.1)]
- [Angular CLI (v 18.0.3)]
- [Bash (v 5.x+)]
- [Powershell (v 7.x+)]

---

## Corequisites

The JSopX™ [`JSopX.AngularCore`] Project, is one of over a dozen Visual Studio projects that make up the Enterprise-Level JSopX™ [`JSopX`] Solution eco-system. The [`.NET Framework`] should always be the first stack considered when developing any new project or feature unless suggested otherwise.

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

### **Step 1: Clone the Repository**

_Clone_ the `JSopX.AngularCore` GitHub Repository if you plan to explore it independently from the rest of the projects.

Choose the approach below that fits your environment:  

- **[Bash](#step-11-using-bash)** → Ideal for **Linux, macOS, and Windows (WSL/Git Bash)** users.  
- **[PowerShell](#step-12-using-powershell)** → Best for **Windows** users.  
- **[Node.js](#step-13-using-nodejs-or-npm-degit)** → A lightweight option for developers using **JavaScript-based workflows**.  

---

### **Step 1.1: Using `Bash`:**
 
```bash

 # Using Bash: Clone JSopX.AngularCore Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.AngularCore

 # 2. Clone JSopX.AngularCore Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
    
```

[`⇧ Back to Top`]

---

### **Step: 1.2: Using `Powershell`:**

```powershell

 # Using PowerShell: Clone JSopX.AngularCore Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.AngularCore

 # 2. Clone JSopX.AngularCore Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.AngularCore.git
    
```

[`⇧ Back to Top`]

---

### **Step: 1.3: Using `Node.js` or `npm` (degit):**
 
```shell

 # Using Node.js / npm : Clone JSopX.AngularCore Git Repository
 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.AngularCore
    
 # 2. Using npx degit to clone without .git history
 npx degit https://github.com/JasonSilvestri/JSopX.AngularCore

```

[`⇧ Back to Top`]

---

## **Step 2: Open the Solution**

Working with the `JSopX.AngularCore` Project in Visual Studio is simple enough.

1. Launch **[Visual Studio (v 17.14.21)]**.
2. Open the solution file: `JSopX.AngularCore.sln`.

[`⇧ Back to Top`]

---

## **Step 3: Configure the Project**

> [!TIP]
>
> Latest versions of [Visual Studio] performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). Still, it is good practice to at least be aware of the commands outlined in this step.
> 

---

### **Step: 3.1: Ensure Dependencies Are Restored:**

Ensure `JSopX.AngularCore` Project dependencies are restored:

   ```bash
   npm install
   ```


[`⇧ Back to Top`]

---

### **Step: 3.2: Verify Nuget Packages:**

Verify that all NuGet packages are up to date:

   ```bash
   dotnet restore
   ```
   
[`⇧ Back to Top`]

---

## **Step 4: Be Sure to Build and Run**

Building and Running the `JSopX.AngularCore` Project in Visual Studio is also another simple task.

### **Step: 4.1: Build and Run**:

1. Build the solution in [Visual Studio].
2. Run the project:
   - Use the **IIS Express** profile for local development.

---


## **Step 5: Project File Structure**

The `JSopX.AngularCore` Project in particular, contains several files and directories, all with their own functionality & purpose for existing. 

For brevity, samples will not have the complete file structure you get when installing, but there are some core files and directories that have special consideration you should get to know. 

---

### **Step: 5.1: Structured Project & Solution Considerations**:

All `JSopX™ projects` follow a consistent directory structure. In this case, our example aligns very well with the [Angular and ASP.NET Core VS Template] found in [Visual Studio].

1. The `JSopX.AngularCore` Project naming conventions include capital casing for `.Server` directories and lowercase for `.client` directories.
2. I create a [Visual Studio] Solution Folder to house the primary `.sln` solution file.
3. I create a **Client-Side** Project Folder for `.esproj` project files, and related files
4. I create a similar **Server-Side** Project Folder for `.csproj`, and related files.

A common, plain-text file folder structure of the `JSopX.AngularCore` Solution and Projects should look something like what follows:

```plaintext
# JSopX™ Angular Core Solution and Projects

JSopX.AngularCore/                        # Root JSopX.AngularCore Visual Studio Solution folder.
├── JSopX.AngularCore.sln                 # Visual Studio solution file for JSopX™ Angular Core.
├── PathConfig.targets                         # Centralized MSBuild target configuration for project references.
├── jsopx.angularcore.client/             # Angular client-side application folder.
│   ├── jsopx.angularcore.client.esproj   # Angular CLI Visual Studio Client Project configuration file.
├── JSopX.AngularCore.Server/             # ASP.NET Core server-side application folder.
│   ├── JSopX.AngularCore.Server.csproj   # Angular CLI Visual Studio Server Project configuration file.

```

There are a few reasons why I do this, but the primary reason is ensuring references are managed effectively and circular dependencies are avoided.

[`⇧ Back to Top`]

---

### **Step: 5.2: Structured File Tree**:

A common, plain-text file structure of the `JSopX.AngularCore` Project files and directories that matter.

```plaintext
# JSopX™ Angular Core Project

JSopX.AngularCore/                           # Root JSopX.AngularCore Visual Studio Solution folder.
├── .gitattributes                                # Git attributes file for repository metadata and configurations.
├── .gitignore                                    # Specifies files and directories to ignore in version control.
├── JSopX.AngularCore.sln                    # Visual Studio solution file for JSopX™ Angular Core.
├── LICENSE.txt                                   # Licensing information for the project.
├── PathConfig.targets                            # Centralized MSBuild target configuration for project references.
├── README.md                                     # High-level project documentation.
├── jsopx.angularcore.client/                # Angular client-side application folder.
│   ├── jsopx.angularcore.client.esproj      # Angular CLI Visual Studio Client Project configuration file.
│   ├── angular.json                              # Angular CLI workspace configuration file.
│   ├── package.json                              # NPM dependencies and project metadata.
│   ├── src/                                      # Main source directory for the Angular app.
│   │   ├── app/                                  # Core Angular modules, components, and routing.
│   │   │   ├── app-routing.module.ts             # Defines route configurations for Angular components.
│   │   │   ├── app.component.css                 # Styles for the main application component.
│   │   │   ├── app.component.html                # HTML template for the main application component.
│   │   │   ├── app.component.spec.ts             # Unit test file for the main application component.
│   │   │   ├── app.component.ts                  # TypeScript logic for the main application component.
│   │   │   ├── app.module.ts                     # Root Angular module that declares components and imports dependencies.
│   │   ├── index.html                            # Root HTML file to bootstrap the Angular app.
│   │   ├── main.ts                               # Main entry point for Angular application.
│   │   ├── proxy.conf.js                         # Configuration file for setting up API proxying in Angular.
│   │   ├── styles.css                            # Global stylesheet for Angular application.
├── JSopX.AngularCore.Server/                # ASP.NET Core server-side application folder.
│   ├── JSopX.AngularCore.Server.csproj      # Angular CLI Visual Studio Server Project configuration file.
│   ├── Program.cs                                # Main entry point for the ASP.NET Core server.
│   ├── Controllers/                              # API controllers exposing server endpoints.
│   ├── appsettings.json                          # Application settings file for configuration.
│   └── WeatherForecast.cs                        # Example Weather Forecast model class (default template).

```

[`⇧ Back to Top`]

---

### **Step: 5.3: Structured Table**:

A table structure of the same with no tree legs `JSopX.AngularCore` Project, files and resources.


| **File/Directory**                        | **Description**                                                                                   |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------|
| &nbsp;📁&nbsp;**JSopX.AngularCore/**&nbsp;                | Parent `JSopX.AngularCore` Visual Studio Solution folder, containing both client and server code.|
| &nbsp;├&nbsp;📝&nbsp;`.gitattributes`&nbsp;                   | Git attributes file for repository metadata and configurations. |
| &nbsp;├&nbsp;📝&nbsp;`.gitignore `&nbsp;                      | Specifies files and directories to ignore in version control. |
| &nbsp;├&nbsp;📝&nbsp;`JSopX.AngularCore.sln`&nbsp;            | Visual Studio `.sln` solution file linking the client and server projects. |
| &nbsp;├&nbsp;📝&nbsp;`LICENSE.txt`&nbsp;                      | Licensing information for the project (generally `MIT` open-source license). |
| &nbsp;├&nbsp;📝&nbsp;`PathConfig.targets`&nbsp;               | Centralized MSBuild target configuration for project references, used in conjunction with Git Sub Trees, to retain all files and references, while dynamically resetting reference paths if necessary. |
| &nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp;                      | The current, most recent, primary project README `.md` file. |
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


[`⇧ Back to Top`]

---

## **Step 6: JSopX™ Project References & Dependencies**

> [!TIP]
>
> The `JSopX.AngularCore` Project should already have the JSopX™ Project References & Dependencies described below included!
> 

---

Most `JSopX™ Projects` leverage shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability.

The `JSopX.AngularCore` Project has the following `JSopX` Project Dependencies:

1. **`JSopX.BridgeTooFar`**:
   - Uses one or more [Razor Class Library VS Template] that contains reusable static assets and project documentation.
   - **Explore GitHub**: [JSopX.BridgeTooFar]

2. **`JSopX.WebAPI`**:
   - Uses a [Asp.NET Core Web API VS Template] which acts as the centrialized **Web API**, used by all projects that access data endpoints in the application.
   - **Explore GitHub**: [JSopX.WebAPI]
 
3. **`JSopX.Presentation`**:
   - Uses one or more extremely light-weight, [Razor Class Library VS Template], specifically designed for Production-Ready environments.
   - **Explore GitHub**: [JSopX.Presentation]
 
3. **`JSopX.RCLxAssets`**:
   - Uses one or more [Razor Class Library VS Template], specifically designed to handle secure storage of sensitive data, secrets, and configuration settings.
   - **Explore GitHub**: [JSopX.RCLxAssets]

[`⇧ Back to Top`]

---

## **Step 7: Usage**

Although the `JSopX.AngularCore` project is primarily designed as a self-contained demonstration project, it is fully capable of integration with other JSopX™ projects. Here's how to add it to your project:

---

### **Step 7.1: Adding the JSopX™ Angular Core to Other Projects**

1. **Add Project Reference**:
   - Open your solution in Visual Studio.
   - Right-click the project that will use `JSopX.AngularCore` and select `Add > Project Reference`.
   - Check the box for `JSopX.AngularCore` and click `OK`.

[`⇧ Back to Top`]

---

## **Step 8: Extended Usage**

> [!TIP]
> These particular `Extended Usage` examples **are not** required to implement. They are just example extended usages for those of whom are new to projects like the `JSopX.AngularCore` Project.
>

---

## **Step 8:1. Extend Angular Client Project**

1. Modify the `proxy.conf.js` file to configure the API URL.
2. Use Angular services to consume APIs exposed by the server project.

   **Example service file in `Angular`**:
   ```typescript
   import { HttpClient } from '@angular/common/http';
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root',
   })
   export class ExampleService {
     private apiUrl = 'https://isci.jsopx.com/jsopxz/api/example';

     constructor(private http: HttpClient) {}

     getExampleData() {
       return this.http.get(`${this.apiUrl}`);
     }
   }
   ```
 
[`⇧ Back to Top`]

---

### **Step 8:2. ASP.NET Core Server Project**

1. Add dependency injection for shared services in `Program.cs`:

   ```csharp
   builder.Services.AddScoped<ExampleService>();
   ```

2. Create or modify controllers to expose endpoints:

> We can create a simple example controller to demonstrate how to use the `ExampleService`. We use controllers to handle HTTP requests and responses, because Controllers are more secure than just using json alone for API endpoints. 

   ```csharp
   [ApiController]
   [Route("jsopxz/api/[controller]")]
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

[`⇧ Back to Top`]

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

- **[`Recreate`]** → **You are HERE**!

---

1. **[`Intro`]** → **About the project** and high-level overview of the JSopX™ Self Health Project.  
2. **[`Install`]** → **Install the project** and set up your development environment for the JSopX™ Self Health Project.   
3. **[`Debrief`]** → **Review the briefing** for an overview of the JSopX™ Self Health Project, its purpose, and key features.

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

[`Home`] » [`Solutions`] » [`JSopX.AngularCore`] » [`Install`] ·· [`Debrief`] ·· **[`Recreate`]** ··· [`⇧ Back to Top`]

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
[`JSopX.AngularCore`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/README.md "JSopX™ SaaS JSopX™ Angular Core Project Solution example README.md"
<!--Root Solution Previous -->
[`« Previous`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution README.md"
<!--Root Solution Next -->
[`Next »`]: /JSopX.BridgeTooFar/docs/md/jsopx.Data/README.md "JSopX™ SaaS Data Project Solution README.md"

<!--Install README.md - Often same as Root Solution-->
[`Intro`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/README.md "JSopX™ SaaS Project Solution Install README.md"
<!--Install README.md - Often same as Root Solution-->
[`Install`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/REINSTALLME.md "JSopX™ SaaS Project Solution Install README.md"
<!--Briefing REDEBRIEFME.md - The briefing of the Solution-->
[`Debrief`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/REDEBRIEFME.md "JSopX™ SaaS Document Management Project Briefing REDEBRIEFME.md"
<!--Recreate RECREATEME.md - The step by step instructions to Create Solution - often from briefing -->
[`Recreate`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/RECREATEME.md "JSopX™ SaaS Document Management Project Step by Step HowTo Re-Create RECREATEME.md"
<!--Recreate CHANGELOG.md - The Changelogs of Solution - often from briefing -->
[`Changelogs`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/CHANGELOG.md "JSopX™ SaaS Document Management Project Change Logs CHANGELOG.md"
<!--Recreate CONTRIBUTING.md - The Contributing Guidelines of Solution - often from briefing -->
[`Contributing`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/CONTRIBUTING.md "JSopX™ SaaS Contributor Guidelines CONTRIBUTING.md"
<!--Recreate CODE_OF_CONDUCT.md - The Code of Conduct of Solution - often from briefing -->
[`Conduct`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/CODE_OF_CONDUCT.md "JSopX™ SaaS Code of Conduct CODE_OF_CONDUCT.md"
<!--Recreate SECURITY.md - The Security Policy of Solution - often from briefing -->
[`Security`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/SECURITY.md "JSopX™ SaaS Security Policy SECURITY.md"
<!--Recreate LICENSE.txt - The LICENSE Policy of Solution - often from briefing -->
[`License`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/SECURITY.md "JSopX™ LICENSE Policy LICENSE.txt"

<!--Root Solution Project Solutions -->
[`Solutions`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md "JSopX™ SaaS Project Solutions README.md"
<!--Root Solution Project Visual Studio Templates -->
[`VS Templates`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md "JSopX™ SaaS Visual Studio Project Solutions Templates README.md"
<!--Root Solution Technologies -->
[`Technologies`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md "JSopX™ Project Solution Technologies README.md"

<!--Root Solution Project Solutions -->
[`Common`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/README.md "JSopX™ SaaS Project Common README.md"
[⚙️ Workflow State]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[⚙️ `Workflow State`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[Workflow States]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Workflow States`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Junction Rules`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
[Junction Rules]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
<!--Root Solution Project Solutions -->
[`Database`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/README.md "JSopX™ SaaS Project Common README.md"
[`Schema`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/Schema.md "JSopX™ SaaS Project Common Schema.md"

<!-- Back to Top links (all styles) found under most sections -->
[Back to Top]: #table-of-contents "Primary document table of contents"
[`Back to Top`]: #table-of-contents "Primary document table of contents"
[`⇧ Back to Top`]: #table-of-contents "Primary document table of contents"

<!-- Long Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`<https://github.com/JasonSilvestri/OpenProjectX>`]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.AngularCore>`]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.SharedResources>`]: https://github.com/JasonSilvestri/JSopX.SharedResources "JSopX™ Shared Resources SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Halos>`]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.WebAPI>`]: https://github.com/JasonSilvestri/JSopX.WebAPI "JSopX™ WebAPI SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Data>`]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.RCLxAssets>`]: https://github.com/JasonSilvestri/JSopX.RCLxAssets "JSopX™ RCL x Assets SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Presentation>`]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.ClassLibrary>`]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.RCLxComponents>`]: https://github.com/JasonSilvestri/JSopX.RCLxComponents "JSopX™ RCL x Components SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.SaaS>`]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore>`]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Titrate SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.HealthTracker>`]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.Maui.MPA>`]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.CRM>`]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.PLM>`]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.AngularCore>`]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.AngularCore>`]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core consumption SaaS Example Project"
<!-- Short Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX GitHub]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[JSopX.AngularCore GitHub]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core SaaS Project"
[JSopX.Data GitHub]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[JSopX.SharedResources GitHub]: https://github.com/JasonSilvestri/JSopX.SharedResources "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos GitHub]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[JSopX.WebAPI GitHub]: https://github.com/JasonSilvestri/JSopX.WebAPI "JSopX™ Web API SaaS Project"
[JSopX.RCLxAssets GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxAssets "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation GitHub]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary GitHub]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[JSopX.RCLxComponents GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxComponents "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS GitHub]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore GitHub]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Titrate SaaS Project"
[JSopX.HealthTracker GitHub]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA GitHub]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[JSopX.CRM GitHub]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM GitHub]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.AngularCore GitHub]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core SaaS Project"

[JSopX.AngularCore GitHub]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core consumption SaaS Example Project"
<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX]: /JSopX.BridgeTooFar/docs/md/OpenProjectX/README.md "JSopX™ Enterprise-Level Solution"
[JSopX.AngularCore]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/README.md "JSopX™ Angular Core SaaS Project"
[JSopX.Data]: /JSopX.BridgeTooFar/docs/md/jsopx.Data/README.md "JSopX™ Data SaaS Project"
[JSopX.SharedResources]: /JSopX.BridgeTooFar/docs/md/jsopx.SharedResources/README.md "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos]: /JSopX.BridgeTooFar/docs/md/jsopx.Halos/README.md "JSopX™ Halos SaaS Project"
[JSopX.WebAPI]: /JSopX.BridgeTooFar/docs/md/jsopx.WebAPI/README.md "JSopX™ WebAPI SaaS Project"
[JSopX.RCLxAssets]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxAssets/README.md "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation]: /JSopX.BridgeTooFar/docs/md/jsopx.Presentation/README.md "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary]: /JSopX.BridgeTooFar/docs/md/jsopx.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[JSopX.RCLxComponents]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxComponents/README.md "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS]: /JSopX.BridgeTooFar/docs/md/jsopx.SaaS/README.md "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore]: /JSopX.BridgeTooFar/docs/md/jsopx.MauiHybridNetCore/README.md "JSopX™ MAUI Titrate SaaS Project"
[JSopX.HealthTracker]: /JSopX.BridgeTooFar/docs/md/jsopx.HealthTracker/README.md "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA]: /JSopX.BridgeTooFar/docs/md/jsopx.Maui.MPA/README.md "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[JSopX.CRM]: /JSopX.BridgeTooFar/docs/md/jsopx.CRM/README.md "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM]: /JSopX.BridgeTooFar/docs/md/jsopx.PLM/README.md "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.AngularCore]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/README.md "JSopX™ Angular Core SaaS Project"
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`JSopX`]: /JSopX.BridgeTooFar/docs/md/OpenProjectX/README.md "JSopX™ Enterprise-Level Solution"
[`JSopX.AngularCore`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/README.md "JSopX™ Angular Core SaaS Project"
[`JSopX.Data`]: /JSopX.BridgeTooFar/docs/md/jsopx.Data/README.md "JSopX™ Data SaaS Project"
[`JSopX.SharedResources`]: /JSopX.BridgeTooFar/docs/md/jsopx.SharedResources/README.md "JSopX™ ML SaaS Project"
[`JSopX.Halos`]: /JSopX.BridgeTooFar/docs/md/jsopx.Halos/README.md "JSopX™ Halos SaaS Project"
[`JSopX.WebAPI`]: /JSopX.BridgeTooFar/docs/md/jsopx.WebAPI/README.md "JSopX™ WebAPI SaaS Project"
[`JSopX.RCLxAssets`]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxAssets/README.md "JSopX™ RCL x Assets SaaS Project"
[`JSopX.Presentation`]: /JSopX.BridgeTooFar/docs/md/jsopx.Presentation/README.md "JSopX™ Presentation SaaS Project"
[`JSopX.ClassLibrary`]: /JSopX.BridgeTooFar/docs/md/jsopx.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[`JSopX.RCLxComponents`]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxComponents/README.md "JSopX™ RCL x Components SaaS Project"
[`JSopX.SaaS`]: /JSopX.BridgeTooFar/docs/md/jsopx.SaaS/README.md "JSopX™ SaaS Project"
[`JSopX.MauiHybridNetCore`]: /JSopX.BridgeTooFar/docs/md/jsopx.MauiHybridNetCore/README.md "JSopX™ MAUI Titrate SaaS Project"
[`JSopX.HealthTracker`]: /JSopX.BridgeTooFar/docs/md/jsopx.HealthTracker/README.md "The Original JSopX™ Maui SaaS Project by Mark"
[`JSopX.Maui.MPA`]: /JSopX.BridgeTooFar/docs/md/jsopx.Maui.MPA/README.md "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[`JSopX.CRM`]: /JSopX.BridgeTooFar/docs/md/jsopx.CRM/README.md "JSopX™ Customer Relationship Management SaaS Project"
[`JSopX.PLM`]: /JSopX.BridgeTooFar/docs/md/jsopx.PLM/README.md "JSopX™ Product Lifecycle Management SaaS Project"
[`JSopX.AngularCore`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/README.md "JSopX™ Product Lifecycle Management SaaS Project"
<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solutions & Version All SaaS Projects -->
[JSopX (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopx "JSopX™ Enterprise-Level Solution"
[JSopX.AngularCore (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxcore "JSopX™ Angular Core SaaS Project"
[JSopX.Data (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxdata "JSopX™ Data SaaS Project"
[JSopX.SharedResources (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxml "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxhalos "JSopX™ WebAPI SaaS Project"
[JSopX.RCLxAssets (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxvault "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxpresentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxutilities "JSopX™ Utilities SaaS Project"
[JSopX.RCLxComponents (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxunitx "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxsaas "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxtitrate "JSopX™ MAUI Titrate SaaS Project"
[JSopX.HealthTracker (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxtitrate "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxmauimpa "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxbridgetoofar "JSopX™ Document Management SaaS Project"
[JSopX.CRM (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxcrm "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxplm "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.AngularCore (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxangularcore "JSopX™ Product Lifecycle Management SaaS Project"
<!-- Short Form Local Document Management Links of all JSopX™ Visual Studio Templates-->
[Blank Solution VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#blank-solution-visual-studio-template "JSopX™ Visual Studio Blank Solution Project Template"
[ASP.NET Core Web App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#aspnet-core-web-app-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web App Project Template"
[Console App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#console-app-visual-studio-template "JSopX™ Visual Studio Console App Project Template"
[Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#class-library-visual-studio-template "JSopX™ Visual Studio Class Library Project Template"
[Razor Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#razor-class-library-visual-studio-template "JSopX™ Visual Studio Razor Class Library Project Template"
[Asp.NET Core Web API VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#aspnet-core-web-api-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web Api Project Template"
[Angular and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#angular-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Angular and ASP.NET Core Project Template"
[React and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#react-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio React and ASP.NET Core Project Template"
[Vue and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#vue-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Vue and ASP.NET Core Project Template"
[Blazor Web App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#blazor-web-app-visual-studio-template "JSopX™ Visual Studio Blazor Web App Project Template"
[.NET MAUI Blazor Hybrid and Web App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#net-maui-blazor-hybrid-and-web-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Blazor Hybrid and Web App Project Template"
[.NET MAUI Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#net-maui-class-library-visual-studio-template "JSopX™ Visual Studio .NET MAUI Class Library Project Template"
[Website VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#website-visual-studio-template "JSopX™ Visual Studio Website Project Template"
[.NET MAUI Multi-Project App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#net-maui-multi-project-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Multi-Project App Project Template"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[npm]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[Vue]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[Vite]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[Python]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[Bash]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[`Windows`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[`Visual Studio`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[`.NET Framework`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[`ASP.NET Core`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[`.NET Core Blazor`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[`.Net Core Maui Hybrid`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[`Node`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[`npm`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[`Bootstrap`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[`Angular CLI`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[`React`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[`Vue`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[`Vite`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[`Python`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[`Bash`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[`Powershell`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows (v 10+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Windows.md "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio (v 17.14.21)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/VisualStudio.md "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/NetFrameworkSdk.md "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/AspNetCore.md "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/NetCoreBlazor.md "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/NetCoreMauiHybrid.md "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node (v 20.14.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Node.md "JSopX™ SaaS Project Node Technology Requirements"
[npm (v 10.8.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/npm.md "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap (v 5.3.8)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Bootstrap.md "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI (v 18.0.3)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/AngularCli.md "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React (v 18.2.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/React.md "JSopX™ SaaS Project React Technology Requirements"
[Vue (v 3.4.21)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Vue.md "JSopX™ SaaS Project Vue Technology Requirements"
[Vite (v 5.2.8)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Vite.md "JSopX™ SaaS Project Vite Technology Requirements"
[Python (v 3.12.3x+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Python.md "JSopX™ SaaS Project Python Technology Requirements"
[Bash (v 5.x+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Bash.md "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell (v 7.x+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Powershell.md "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[Created]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#created
[Queued]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#queued
[In Progress]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#in-progress
[Waiting]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#waiting
[Passed]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#passed
[Failed]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#failed
[Rejected]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#rejected
[Cancelled]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#cancelled
[Skipped]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#skipped
[Timeout]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#timeout
[Network Error]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#network-error
[Validation Error]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#validation-error
[Retrying]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#retrying
[Blocked]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#blocked
[Completed]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#completed
[To Do]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#to-do
[Started]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#started
[Pending]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#pending
[Expired]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#expired
[Approved]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#approved
[Sent]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#sent
[Received]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#received
[Under Review]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#under-review
[Soft Delete]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#soft-delete
[Hard Delete]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#hard-delete
[Unknown]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#unknown
[Null or Empty]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#null-or-empty
[Active]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#active

<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[`CREATED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#created
[`QUEUED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#queued
[`IN PROGRESS`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#in-progress
[`WAITING`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#waiting
[`PASSED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#passed
[`FAILED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#failed
[`REJECTED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#rejected
[`CANCELLED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#cancelled
[`SKIPPED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#skipped
[`TIMEOUT`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#timeout
[`NETWORK ERROR`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#network-error
[`VALIDATION ERROR`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#validation-error
[`RETRYING`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#retrying
[`BLOCKED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#blocked
[`COMPLETED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#completed
[`TO DO`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#to-do
[`STARTED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#started
[`PENDING`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#pending
[`EXPIRED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#expired
[`APPROVED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#approved
[`SENT`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#sent
[`RECEIVED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#received
[`UNDER REVIEW`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#under-review
[`SOFT DELETE`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#soft-delete
[`HARD DELETE`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#hard-delete
[`UNKNOWN`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#unknown
[`NULL OR EMPTY`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#null-or-empty
[`ACTIVE`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#active