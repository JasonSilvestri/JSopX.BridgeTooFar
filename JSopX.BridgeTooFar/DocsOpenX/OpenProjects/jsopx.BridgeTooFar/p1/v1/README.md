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

[`Home`](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/README.md) » [`Introduction`](../../../../Introduction/) » [`Projects`](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/OpenProjects/) · · [`Use Latest`](../../../../OpenProjects/jsopx.BridgeTooFar/README.md) · `By-Phase` · [`From Scratch`](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md) · · [`« Previous`](../../../../OpenProjects/jsopx.WebAPI/p1/v1/) [`Next »`](../../../../OpenProjects/jsopx.SharedResources/p1/v1/)

---


> [!CAUTION]
> **Deprecated:**
> 
> The content before you is deprecated. Visit **[https://github.com/JasonSilvestri/JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar)** for the latest version.
>

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

We initially create the project to simulate a [Shared Assets & Resources Projects](../../../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that will need to be leveraged by the other new and existing client side and server side projects, which act as standards that conform to the initial [business requirements](../../../../Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../../../Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../../../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../../../OpenProjects/jsopx.VueCore/README.md), [React](../../../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../../../Introduction/JSopxDevelopmentStandards.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly, bridging-of-the-critical-gap, between front-end dynamism and back-end security. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring just the `JSopX.BridgeTooFar` Project.

- [Visual Studio (v 17.14.21)](../../../../Technologies/#visual-studio)
- [.NET Framework (v 9.2.1)](../../../../Technologies/#net-framework)
- [ASP.NET Core (v 9.2.1)](../../../../Technologies/#aspnet-core)
- [Node (v 20.14.0)](../../../../Technologies/#node)
- [npm (v 10.8.1)](../../../../Technologies/#npm)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Browsing By-Phase `JSopX.`BridgeTooFar**:

- **[Continue](#step-1-clone-the-repository)** → **Continue** as **you were**, browsing **previous versions** of the application by **phases** using the `JSopX.BridgeTooFar` _By-Phase_ Variant.  

---

### 2. **Use Different Variant**:

- **[Install Using Latest](../../../../OpenProjects/jsopx.BridgeTooFar/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.BridgeTooFar` _Using Latest_ Variant.  
- **[Start From Scratch](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md)** → **Create project** from scratch, step-by-step, using the `JSopX.BridgeTooFar` _From Scratch_ Variant.
- **[Get All Projects](../../../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

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

1. Launch **[Visual Studio (v 17.14.21)](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/Technologies/#visual-studio)**.
2. Open the solution file: `JSopX.BridgeTooFar.sln`.

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 3: Configure the Project**

> [!TIP]
>
> Latest versions of [Visual Studio](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/Technologies/#visual-studio) performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). Still, it is good practice to at least be aware of the commands outlined in this step.
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

1. Build the solution in [Visual Studio](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/Technologies/#visual-studio).
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

The `JSopX.BridgeTooFar` Project in particular, contains several files and directories, all with their own functionality & purpose for existing. 

For brevity, samples will not have the complete file structure you get when installing, but there are some core files and directories that have special consideration you should get to know. 

---

### **Step: 5.1: Structured Project & Solution Considerations**:

All `JSopX™ projects` follow a consistent directory structure. 

1. I create a [Visual Studio](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/Technologies/#visual-studio) Solution Folder to house the primary `.sln` solution file.
2. I create a similar Server-Side Project Folder for `.csproj`, and related files.

A common, plain-text file folder structure of the `JSopX.BridgeTooFar` Solution and Projects should look something like what follows:

```plaintext
# JSopX™ Bridge Too Far Solution and Projects

JSopX.BridgeTooFar/                 # Root JSopX.BridgeTooFar Visual Studio Solution folder.
├── JSopX.BridgeTooFar.sln          # Visual Studio solution file for Angular Core.
├── PathConfig.targets              # Centralized MSBuild target configuration for project references.
├── JSopX.BridgeTooFar/             # ASP.NET Core server-side application folder.
│   ├── JSopX.BridgeTooFar.csproj   # Asp.NET Core Visual Studio Server Project configuration file.

```

There are a few reasons why I do this, but the primary reason is ensuring references are managed effectively and circular dependencies are avoided.

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 5.2: Structured File Tree**:

A common, plain-text file structure of the `JSopX.BridgeTooFar` Project.

```plaintext
# JSopX™ Bridge Too Far Project

JSopX.BridgeTooFar/                          # Root JSopX™ Bridge Too Far Project Visual Studio Solution folder.
├── .gitattributes                           # Git attributes file for repository metadata and configurations.
├── .gitignore                               # Specifies files and directories to ignore in version control.
├── JSopX.BridgeTooFar.sln                   # Visual Studio solution '.sln' file for JSopX™ Bridge Too Far Project.
├── LICENSE.txt                              # Licensing information for the project.
├── PathConfig.targets                       # Centralized MSBuild target configuration for project references.
├── README.md                                # High-level project documentation.
├── JSopX.BridgeTooFar/                      # ASP.NET Core server-side application folder.
│   ├── JSopX.BridgeTooFar.csproj            # Asp.NET Core Visual Studio Server Project '.csproj' configuration file.
│   ├── doc-assets/                          # JSopX™ Bridge Too Far Project folder, housing all static assets used in documentation. The amount of files actually shown here is limited for brevity.
│   │   ├── jsopx-logo.png                   # Official Jason Silvestri Open Project EXperiences (JSopX™) Collection 'JSopX.OpenProjectX' logo in .PNG format.
│   │   ├── jsopx-logo.svg                   # Official Jason Silvestri Open Project EXperiences (JSopX™) Collection 'JSopX.OpenProjectX' logo in .SVG format.
│   ├── DocsOpenX/                           # Main source directory for all documentation currently available. The amount of files actually shown here is limited for brevity.
│   │   ├── OpenProjects/                    # Main source directory for all JSopX™ Project specific documentation currently available. The amount of files actually shown here is limited for brevity.
│   │   │   ├── jsopx.AngularCore/           # JSopX™ Angular Core Project 'JSopX.AngularCore' specific documentation currently available.
│   │   │   │   ├── README.md                # Most current JSopX™ Angular Core Project 'JSopX.AngularCore' Using Latest Variant README '.md' file, representing the current install instructions of the project.
│   │   │   │   ├── RECREATEME.md            # Most current JSopX™ Angular Core Project 'JSopX.AngularCore' Start from Scratch Variant RECREATEME '.md' file, representing the Start from Scratch instructions of the project.
│   │   │   ├── jsopx.AspNetCore/            # JSopX™ Asp.NET Core Project 'JSopX.AspNetCore' specific documentation currently available.
│   │   │   │   ├── README.md                # Most current JSopX™ Asp.NET Core Project 'JSopX.AspNetCore' Using Latest Variant README '.md' file, representing the current install instructions of the project.
│   │   │   │   ├── RECREATEME.md            # Most current JSopX™ Asp.Net Core Project 'JSopX.AspNetCore' Start from Scratch Variant RECREATEME '.md' file, representing the Start from Scratch instructions of the project.
│   │   │   ├── jsopx.BridgeTooFar/          # JSopX™ Bridge Too Far Project 'JSopX.BridgeTooFar' specific documentation currently available.
│   │   │   │   ├── README.md                # Most current JSopX™ Bridge Too Far Project 'JSopX.BridgeTooFar' Using Latest Variant README '.md' file, representing the current install instructions of the project.
│   │   │   │   ├── RECREATEME.md            # Most current JSopX™ Bridge Too Far Project 'JSopX.BridgeTooFar' Start from Scratch Variant RECREATEME '.md' file, representing the Start from Scratch instructions of the project.
│   └── README.md                            # Primary Project JSopX™ Bridge Too Far Project 'JSopX.BridgeTooFar' README '.md' file (default root project README.md).

```

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 5.3: Structured Table**:

A table structure of the same `JSopX.BridgeTooFar` Project, files and resources.

| File/Folder Name                        | Description                                                                 |
|:----------------------------------------|:-----------------------------------------------------------------------------|
| &nbsp;📁&nbsp;**JSopX.BridgeTooFar**&nbsp;            | Root folder for the JSopX™ Bridge Too Far Project Visual Studio Solution.   |
| &nbsp;├&nbsp;📝&nbsp;`.gitattributes`&nbsp;                | Git attributes file for repository metadata and configurations.            |
| &nbsp;├&nbsp;📝&nbsp;`.gitignore`&nbsp;                    | Specifies files and directories to ignore in version control.              |
| &nbsp;├&nbsp;📝&nbsp;`JSopX.BridgeTooFar.sln`&nbsp;        | Visual Studio solution `.sln` file for the JSopX™ Bridge Too Far Project.         |
| &nbsp;├&nbsp;📝&nbsp;`LICENSE.txt`&nbsp;                   | Licensing information for the project.                                     |
| &nbsp;├&nbsp;📝&nbsp;`PathConfig.targets`&nbsp;            | Centralized MSBuild target configuration for project references.           |
| &nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp;                     | High-level project documentation.                                          |
| &nbsp;├&nbsp;📁&nbsp;**JSopX.BridgeTooFar/**&nbsp;            | ASP.NET Core server-side application folder.                               |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.BridgeTooFar.csproj`&nbsp; | Asp.NET Core Visual Studio Server Project `.csproj` configuration file.                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`doc-assets/`**&nbsp;             | JSopX™ Bridge Too Far Project folder, housing all static assets used in documentation. The amount of files actually shown here is limited for brevity.   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`jsopx-logo.png`&nbsp;   | Official Jason Silvestri Open Project EXperiences (JSopX™) Collection `JSopX.OpenProjectX` logo in `.PNG` format.                            |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`jsopx-logo.svg`&nbsp;   | Official Jason Silvestri Open Project EXperiences (JSopX™) Collection `JSopX.OpenProjectX` logo in `.SVG` format.                            |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`DocsOpenX/`**&nbsp;              | Main source directory for all documentation currently available. The amount of files actually shown here is limited for brevity.                     |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`OpenProjects/`**&nbsp;     | Main source directory for all JSopX™ Project specific documentation currently available. The amount of files actually shown here is limited for brevity.                         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`jsopx.AngularCore/`**&nbsp; | JSopX™ Angular Core Project `JSopX.AngularCore` specific documentation currently available.                     |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp; | Most current JSopX™ Angular Core Project `JSopX.AngularCore` _Using Latest_ Variant README `.md` file, representing the "Using Latest" Install instructions of the project.                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEADME.md`&nbsp; | Most current JSopX™ Angular Core Project `JSopX.AngularCore` _Start from Scratch_ Variant README `.md` file, representing the "Start from Scratch" instructions of the project.                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`jsopx.AspNetCore/`**&nbsp; | JSopX™ Asp.Net Core Project `JSopX.AspNetCore` specific documentation currently available.                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp; | Most current JSopX™ Asp.NET Core Project `JSopX.AspNetCore` _Using Latest_ Variant README `.md` file, representing the "Using Latest" Install instructions of the project.                       |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md`&nbsp; | Most current JSopX™ Asp.NET Core Project `JSopX.AspNetCore` _Start from Scratch_ Variant RECREATEME `.md` file, representing the "Start from Scratch" instructions of the project.                     |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📁&nbsp;**`jsopx.BridgeTooFar/`**&nbsp; | JSopX™ Bridge Too Far Project `JSopX.BridgeTooFar` specific documentation currently available.                    |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp; | Most current JSopX™ Bridge Too Far Project `JSopX.BridgeTooFar` _Using Latest_ Variant README `.md` file, representing the "Using Latest" Install instructions of the project.  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`RECREATEME.md`&nbsp; | Most current JSopX™ Bridge Too Far Project `JSopX.BridgeTooFar` _Start from Scratch_ Variant RECREATEME `.md` file, representing the "Start from Scratch" instructions of the project.                     |
| 📝&nbsp;`README.md`&nbsp;         | Primary Project JSopX™ Bridge Too Far Project `JSopX.BridgeTooFar` README `.md` file (_default root project repository README.md_).                           |
| 📝&nbsp;`RECREATEME.md`&nbsp;     | Primary Project JSopX™ Bridge Too Far Project `JSopX.BridgeTooFar` RECREATEME `.md` file (_default root project repository RECREATEME.md_).                           |

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

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 8.2: Using `JSopX.`BridgeTooFar Project in an Angular Project**

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

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 8.3: Using `JSopX.`BridgeTooFar Project in a Vue Project**

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

[`⇧ Back to Top`](#table-of-contents)

---

### **Step: 8.4: Using `JSopX.`BridgeTooFar Project in a React Project**

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

[`⇧ Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../../../OpenProjects/jsopx.SharedResources/p1/v1/README.md)** → **Continue** as **you were**, exploring, installing or simply browsing **previous versions** of the application by **phases**. You'll move onto the next project, using the `JSopX.SharedResources` _By-Phase_ Variant.   

---

1. **[Install Using Latest](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.BridgeTooFar` _Using Latest_ Variant.  
2. **[Start From Scratch](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md)** → **Create Project**, **step-by-step**, using the `JSopX.BridgeTooFar` _From Scratch_ Variant.
3. **[Get All Projects](../../../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/README.md) » [`Introduction`](../../../../Introduction/) » [`Projects`](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/OpenProjects/) · · [`Use Latest`](../../../../OpenProjects/jsopx.BridgeTooFar/README.md) · `By-Phase` · [`From Scratch`](../../../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md) · · [`⇧ Back to Top`](#table-of-contents) · [`« Previous`](../../../../OpenProjects/jsopx.WebAPI/p1/v1/) [`Next »`](../../../../OpenProjects/jsopx.SharedResources/p1/v1/)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
