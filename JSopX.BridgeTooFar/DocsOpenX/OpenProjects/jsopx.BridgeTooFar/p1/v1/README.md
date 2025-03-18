# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-bridge-too-far-logo.svg" style="width: 28px; height: auto; margin-right:12px; margin-top:12px;!important;"> JSopX™ Bridge Too Far Project

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

**`JSopX.BridgeTooFar` v `1.0` `"By-Phases" Edition`**

---

The **JSopX™ Bridge Too Far Project**(`JSopX.BridgeTooFar`), is evolving into a centralized hub for managing and sharing ALL assets and documentation, across all other JSopX™ Open Project EXperience Projects, including all Class Libraries, RCLs, server-side and client-side projects. 

```bash
# For Cool Kids: Clone JSopX.BridgeTooFar Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git
```

---

[`Introduction`](../../../../Introduction/) » [`JSopX Projects`](../../../../OpenProjects/p1/v1) » **`JSopX.BridgeTooFar`** · · [`From Scratch`](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md) · · · [`« Previous`](../../../../OpenProjects/jsopx.VueCore/p1/v1/) [`Next »`](../../../../OpenProjects/jsopx.SharedResources/p1/v1/)

---

## Table of Contents

  - [Current Phase](#current-phase)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)
  - [Step 2: Open the Solution](#step-2-open-the-solution)
  - [Step 3: Configure the Project](#step-3-configure-the-project)
  - [Step 4: Build and Run](#step-4-build-and-run)
  - [Step 5: Project File Structure](#step-5-project-file-structure)
  - [Step 6: JSopX™ Project References & Dependencies](#step-6-jsopx-project-references--dependencies)
  - [Step 7: Usage](#step-7-usage)
  - [Step 8: Extended Usage](#step-7-extended-usage)
  - [Next Steps](#next-steps)

---

## Current Phase

> [!NOTE]
>
>**Phases 1**: This document is currently aligned with **[Phase 1: Minimum Viable Product (MVP)](../../../../Phases/Phase-1.md)** Business Requirements. 
> 

---

## Overview

The **JSopX™ Bridge Too Far Project**, is evolving into a centralized hub for managing and sharing ALL assets and documentation, across all other JSopX™ Open Project EXperience Projects, including all Class Libraries, RCLs, server-side and client-side projects. 

We initially create the project to simulate a [Shared Assets & Resources Projects](../../../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) we began to use for documentation to conform to the basic business requirements set forth by the fictioanal stakeholders.

As the project evolved through each [Lifecycle Phase](../../../../Phases/ReadMe.md), we would extend the application by-way-of documentation creation, while anticipating we'll face a near-future, seamless migration request of the project into our `JSopX.OpenProjectX` Enterprise Application.

Conversely, the `JSopX.BridgeTooFar` Project has since inadvertently taken on the real-world responsibility of housing and distributing documentation for almost all projects.

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring just the `JSopX.BridgeTooFar` Project.

- [Visual Studio (v 17.13.3)](../../../../Technologies/#visual-studio)
- [.NET Framework (v 9.0.1)](../../../../Technologies/#net-framework)
- [ASP.NET Core (v 9.0.1)](../../../../Technologies/#aspnet-core)
- [Node (v 20.14.0)](../../../../Technologies/#node)
- [npm (v 10.8.1)](../../../../Technologies/#npm)
- [Check All Simotaniously (v 1.0)](../../../../Technologies/#check-all-requirements-simotaniously)

---

## **Getting Started**

Before we get started with the `JSopX.BridgeTooFar` Project, lets double check and make sure we are on the same page.

1. You reviewed and/or have installed the technology requirements outlined in the [Prerequisites](#prerequisites) seciton.
2. You realize you are currently working with `JSopX.BridgeTooFar` Project independently from the rest of the `JSopX.OpenProjectX` Projects.
3. You have a general sense of `GitHub` respositories, and understand source control as a whole.

[`Back to Top`](#table-of-contents)

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

[`Back to Top`](#table-of-contents)

---

### **Step: 1.2: Using `Powershell`:**

```powershell

 # Using PowerShell: Clone JSopX.BridgeTooFar Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.BridgeTooFar

 # 2. Clone JSopX.BridgeTooFar Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git

```

[`Back to Top`](#table-of-contents)

---

### **Step: 1.3: Using `Node.js` or `npm` (degit):**
 
```shell

 # Using Node.js / npm : Clone JSopX.BridgeTooFar Git Repository
 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.BridgeTooFar
    
 # 2. Using npx degit to clone without .git history
 npx degit https://github.com/JasonSilvestri/JSopX.BridgeTooFar

```

[`Back to Top`](#table-of-contents)

---

## **Step 2: Open the Solution**

Working with the `JSopX.BridgeTooFar` Project in Visual Studio is simple enough.

1. Launch **[Visual Studio (v 17.13.3)](../../../../Technologies#visual-studio)**.
2. Open the solution file: `JSopX.BridgeTooFar.sln`.

[`Back to Top`](#table-of-contents)

---

## **Step 3: Configure the Project**

> [!TIP]
>
> Latest versions of [Visual Studio](../../../../Technologies#visual-studio) performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). Still, it is good practice to at least be aware of the commands outlined in this step.
> 

---

### **Step: 3.1: Ensure Dependencies Are Restored:**

Ensure `JSopX.BridgeTooFar` Project dependencies are restored:

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

## **Step 4: Build and Run**

Running the `JSopX.BridgeTooFar` Project in Visual Studio is also another simple task.

1. Build the solution in [Visual Studio](../../../../Technologies#visual-studio).
2. Run the project:
  - Use the **IIS Express** profile for local development.

[`Back to Top`](#table-of-contents)

---

##  **Step 5: Project File Structure**

The `JSopX.BridgeTooFar` Project contains several files and directories, all with their own functionality & purpose for existing. Conversely, there are some core files and directories that have special consideration. 

I provide two options below to ingest some of the high-level details.

---

### **Step: 5.1: Structured File Tree**:

A common, plain-text file structure of the `JSopX.BridgeTooFar` Project.

```plaintext
# JSopX™ Bridge Too Far Project

JSopX.BridgeTooFar/                          # Root JSopX™ Bridge Too Far Project Visual Studio Solution folder.
├── .gitattributes                           # Git attributes file for repository metadata and configurations.
├── .gitignore                               # Specifies files and directories to ignore in version control.
├── JSopX.BridgeTooFar.sln                   # Visual Studio solution .sln file for JSopX™ Bridge Too Far Project.
├── LICENSE.txt                              # Licensing information for the project.
├── PathConfig.targets                       # Centralized MSBuild target configuration for project references.
├── README.md                                # High-level project documentation.
├── JSopX.BridgeTooFar/                      # ASP.NET Core server-side application folder.
│   ├── JSopX.BridgeTooFar.csproj            # Asp.NET Core Visual Studio Server Project configuration file.
│   ├── doc-assets/                          # JSopX™ Bridge Too Far Project folder, housing all static assets used in applications. The amount of files was limited here for brevity, but the same assets and resources shown here, are available for all JSopX Projects.
│   │   ├── jsopx-logo.png                   # Official JSopX.OpenProjectX logo in .PNG format.
│   │   ├── jsopx-logo.svg                   # Official JSopX.OpenProjectX logo in .SVG format.
│   ├── DocsOpenX/                           # Main source directory for all documentation currently available. The amount of files was limited here for brevity, but the same assets and resources shown here, are available for all JSopX Projects.
│   │   ├── OpenProjects/                    # Main source directory for all project specific documentation currently available.
│   │   │   ├── jsopx.AngularCore/           # Main source directory for all JSopX™ Angular Core Project specific documentation currently available.
│   │   │   │   ├── README.md                # Primary JSopX™ Angular Core Project README file (default root project README.md).
│   │   │   ├── jsopx.AspNetCore/            # Main source directory for all JSopX™ Asp.Net Core Project specific documentation currently available.
│   │   │   │   ├── README.md                # Primary JSopX™ Asp.Net Core Project README file (default root project README.md).
│   │   │   ├── jsopx.BridgeTooFar/          # Main source directory for all JSopX™ Bridge Too Far Project specific documentation currently available.
│   │   │   │   ├── README.md                # Primary JSopX™ Bridge Too Far Project README file (default root project README.md).
│   └── README.md                            # Primary Project README file (default root project README.md).

```

[`Back to Top`](#table-of-contents)

---

### **Step: 5.2: Structured Table**:

A table structure of the same `JSopX.BridgeTooFar` Project, files and resources.

| **File/Directory**                                     | **Description**                                                                                     |
| :----------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| 📁 **JSopX.BridgeTooFar/**                              | Parent JSopX™ Bridge Too Far Project (`JSopX.BridgeTooFar`) Visual Studio Solution folder, containing both client and server code.|
|  📝 `.gitattributes`                                  | Git attributes file for repository metadata and configurations. |
|  📝 `.gitignore `                                     | Specifies files and directories to ignore in version control. |
|  📝 `JSopX.BridgeTooFar.sln`                          | Visual Studio `.sln` solution file linking the client and server projects. |
|  📝 `LICENSE.txt`                                     | Licensing information for the project (generally `MIT` open-source license). |
|  📝 `PathConfig.targets`                              | Centralized MSBuild target configuration for project references, used in conjunction with Git Sub Trees, to retain all files and references, while dynamically resetting reference paths if necessary. |
|  📁 **JSopX.BridgeTooFar/**                              | ASP.NET Core server-side folder for back-end logic and API endpoints. |
|   📝`JSopX.BridgeTooFar.csproj`                          | Asp.NET Core server-side Visual Studio project `.csproj` configuration file. |
|   📁 **doc-assets/**                                       | `JSopX.BridgeTooFar` Project folder, housing all static assets used in applications. The amount of files was limited here for brevity, but the same assets and resources shown here, are available for all JSopX Projects. |
|    📝 `jsopx-logo.png`                                  | Official `JSopX.OpenProjectX` logo in `.PNG` format. |
|    📝 `jsopx-logo.svg`                                  | Official `JSopX.OpenProjectX` logo in `.SVG` format. |
|    📁 **DocsOpenX/**                                        | Main source directory for all documentation currently available. The amount of files was limited here for brevity, but the same assets and resources shown here, are available for all JSopX Projects. |
|     📁 **OpenProjects/**                                   | Main source directory for all project specific documentation currently available. |
|      📁 **jsopx.AngularCore/**                          | Main source directory for all `JSopX.AngularCore` Project specific documentation currently available. |
|       📝 `README.md`                                   | Primary `JSopX.AngularCore` Root Directory Read Me `.md` file (e.g., README.md). |
|      📁 **jsopx.AspNetCore/**                             | Main source directory for all `JSopX.AspNetCore` Project specific documentation currently available. |
|       📝 `README.md`                                   | Primary `JSopX.AspNetCore` Root Directory Read Me `.md` file (e.g., README.md). |
|      📁 **jsopx.BridgeTooFar/**                           | Main source directory for all `JSopX.BridgeTooFar` Project specific documentation currently available. |
|       📝 `README.md`                                   | Primary `JSopX.BridgeTooFar` Root Directory Read Me `.md` file (e.g., README.md). |
|  📝 `README.md`                                             | Primary Project Root Directory Read Me `.md` file (e.g., README.md). |
 

[`Back to Top`](#table-of-contents)

---

## **Step 6: JSopX™ Project References & Dependencies**

`JSopX` projects leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability.

However, the `JSopX.BridgeTooFar` Project is one of the highest-level resource libraries, hence, it has almost no natural dependencies.

[`Back to Top`](#table-of-contents)

---

## **Step 7: Usage**

### **Step: 7.1: Referencing the `JSopX.BridgeTooFar` Project**

1. **Add a project reference** to `JSopX.BridgeTooFar` in each client-side and/or server-side projects that want to have consume the project's assets:
   - _Right-click_ on a project, such as [`JSopX.AngularCore`](../../../../OpenProjects/jsopx.AngularCore/p1/v1), [`JSopX.ReactCore`](../../../../OpenProjects/jsopx.ReactCore/p1/v1), [`JSopX.VueCore`](../../../../OpenProjects/jsopx.VueCore/p1/v1), [`JSopX.BlazorServerCore`](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1), etc.
   - Select **Add** > **Project Reference**.
   - Check `JSopX.BridgeTooFar` and click **OK**.

[`Back to Top`](#table-of-contents)

---

## **Step 8: Extended Usage**

> [!TIP]
> These particular `Extended Usage` examples **are not** required to implement. They are just example extended usages for those of whom are new to projects like the `JSopX.BridgeTooFar` Project.
>

---

### **Step: 8.1: Using `JSopX.BridgeTooFar` Project in a Blazor Project**

**In [`JSopX.BlazorServerCore`](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1)**:

1. **Reference the JSopX™ Bridge Too Far Project**:
   - Add a reference to `JSopX.BridgeTooFar` in [`JSopX.BlazorServerCore`](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1).

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

[`Back to Top`](#table-of-contents)

---

### **Step: 8.2: Using `JSopX.BridgeTooFar` Project in an Angular Project**

**In [`JSopX.AngularCore`](../../../../OpenProjects/jsopx.AngularCore/p1/v1)**:

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

[`Back to Top`](#table-of-contents)

---

### **Step: 8.3: Using `JSopX.BridgeTooFar` Project in a Vue Project**

**In [`JSopX.VueCore`](../../../../OpenProjects/jsopx.VueCore/p1/v1)**:

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

[`Back to Top`](#table-of-contents)

---

### **Step: 8.4: Using `JSopX.BridgeTooFar` Project in a React Project**

**In [`JSopX.ReactCore`](../../../../OpenProjects/jsopx.ReactCore/p1/v1)**:

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

[`Back to Top`](#table-of-contents)

---

## **Next Steps**

1. **Continue Exploring Projects One-by-One**: If you plan to continue exploring and installing projects one-by-one, you can, and at your own pace. In this case, we will be moving on to the **JSopX™ Shared Resources Project** ([`JSopX.SharedResources`](../../../../OpenProjects/jsopx.SharedResources/p1/v1/)), where we do very similar steps. 
2. **Skip to Exploring All Projects All-in-One**: Alternatively, you can get all projects, and continue exploring and installing just that primary solution. In this case, move straight on to the **JSopX™ Open Project X ([`JSopX.OpenProjectX`](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/))**.
---

[`Introduction`](../../../../Introduction/) » [`JSopX Projects`](../../../../OpenProjects/p1/v1) » **`JSopX.BridgeTooFar`** · · [`From Scratch`](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md) · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../../../OpenProjects/jsopx.VueCore/p1/v1/) [`Next »`](../../../../OpenProjects/jsopx.SharedResources/p1/v1/)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
