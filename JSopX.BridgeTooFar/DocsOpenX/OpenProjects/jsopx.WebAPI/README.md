# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-web-api.svg" style="width: 28px; height: auto; margin-right:12px; margin-top:12px;!important;"> JSopX™ Web API Project

The **JSopX™ Web API Project**, _code named_, `JSopX.WebAPI` is a totally **FREE**, open-source, Web API, and is a centralized, RESTful API backend that ties the JSopX™ Web API Project ecosystem together. By providing consistent endpoints and data services, it empowers both server-side and client-side solutions to operate cohesively and securely.

---

## **Use Latest Variant:**

> [!TIP]
> You are currently viewing the **"_Use Latest_" _Variant_** of the **JSopX™ Web API Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---

```bash
# For The Cool Kids: Clone JSopX.WebAPI Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.WebAPI.git
```

---

[`Home`](../../OpenProjects/jsopx.WebAPI/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/) · · **`Use Latest`** · [`By-Phase`](../../OpenProjects/jsopx.WebAPI/p1/v1/README.md) · [`From Scratch`](../../OpenProjects/jsopx.WebAPI/p1/v1/RECREATEME.md) · · [`« Previous`](../../OpenProjects/jsopx.ClassLibrary/) [`Next »`](../../OpenProjects/jsopx.BridgeTooFar/)

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

The **JSopX™ Web API Project**, _code named_, `JSopX.WebAPI` is a totally **FREE**, open-source, Web API, and is a centralized, RESTful API backend that ties the JSopX™ Web API Project ecosystem together. By providing consistent endpoints and data services, it empowers both server-side and client-side solutions to operate cohesively and securely.

We initially create the project to simulate a [Shared Data, Service & Function Project](../../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) that will need to be leveraged by the other new and existing client side and server side projects, which act as standards that conform to the initial [business requirements](../../Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../OpenProjects/jsopx.OpenProjectX/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../OpenProjects/jsopx.VueCore/README.md), [React](../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../Introduction/JSopxDisciplinesRequiredForEnterpriseDevelopment.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly.

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.


---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring just the `JSopX.WebAPI` Project.

- [Visual Studio (v 17.13.6)](../../Technologies/#visual-studio)
- [.NET Framework (v 9.0.1)](../../Technologies/#net-framework)
- [ASP.NET Core (v 9.0.1)](../../Technologies/#aspnet-core)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Installing `JSopX.`WebAPI**:

- **[Continue](#step-1-clone-the-repository)** → **Continue** as **you were**, exploring and/or installing the `JSopX.WebAPI` _Using Latest_ Variant.  

---

### 2. **Use Different Variant**:

- **[Browse By-Phase](../../OpenProjects/jsopx.WebAPI/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.WebAPI` _By-Phase_ Variant.   
- **[Start From Scratch](../../OpenProjects/jsopx.WebAPI/p1/v1/RECREATEME.md)** → **Create project** from scratch, step-by-step, using the `JSopX.WebAPI` _From Scratch_ Variant.
- **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

## **Step 1: Clone the Repository**

_Clone_ the `JSopX.WebAPI` GitHub Repository if you plan to explore it independently from the rest of the projects.

Choose the approach below that fits your environment:  

- **[Bash](#step-11-using-bash)** → Ideal for **Linux, macOS, and Windows (WSL/Git Bash)** users.  
- **[PowerShell](#step-12-using-powershell)** → Best for **Windows** users.  
- **[Node.js](#step-13-using-nodejs-or-npm-degit)** → A lightweight option for developers using **JavaScript-based workflows**.  

---

### **Step 1.1: Using `Bash`:**
 
```bash

 # Using Bash: Clone JSopX.WebAPI Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.WebAPI

 # 2. Clone JSopX.WebAPI Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.WebAPI.git
    
```

[`Back to Top`](#table-of-contents)

---

### **Step: 1.2: Using `Powershell`:**

```powershell

 # Using PowerShell: Clone JSopX.WebAPI Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.WebAPI

 # 2. Clone JSopX.WebAPI Git Repository       
 git clone https://github.com/JasonSilvestri/JSopX.WebAPI.git

```

[`Back to Top`](#table-of-contents)

---

### **Step: 1.3: Using `Node.js` or `npm` (degit):**
 
```shell

 # Using Node.js / npm : Clone JSopX.WebAPI Git Repository
 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\JSopX.WebAPI
    
 # 2. Using npx degit to clone without .git history
 npx degit https://github.com/JasonSilvestri/JSopX.WebAPI

```

[`Back to Top`](#table-of-contents)

---

## **Step 2: Open the Solution**

Working with the `JSopX.WebAPI` Project in Visual Studio is simple enough.

1. Launch **[Visual Studio (v 17.13.6)](../../Technologies/#visual-studio)**.
2. Open the solution file: `JSopX.WebAPI.sln`.

[`Back to Top`](#table-of-contents)

---

## **Step 3: Configure the Project**

> [!TIP]
>
> Latest versions of [Visual Studio](../../Technologies/#visual-studio) performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). Still, it is good practice to at least be aware of the commands outlined in this step.
> 

---

### **Step: 3.1: Ensure Dependencies Are Restored:**

Ensure `JSopX.WebAPI` Project dependencies are restored:

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

## **Step 4: Be Sure to Build and Run**

Building and Running the `JSopX.BridgeTooFar` Project in Visual Studio is also another simple task.

### **Step: 4.1: Build and Run**:

1. Build the solution in [Visual Studio](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/Technologies/#visual-studio).
2. Run the project:
   - Use the **IIS Express** profile for local development.

---

### **Step: 4.2: And Now Your Done**:

Assuming the `JSopX.BridgeTooFar` Project is running as expected, **you are now done** with the **installation** and **execution** of the project!

1. **Skip Remaining Steps**: 
   - Technically, you could skip to the [Next Steps](#next-steps) section if you are on a project-by-project installation mission.
2. **Conclude Remaining Steps**:
   - **Me personally?** I would continue on to the remaining steps _below_, starting at **[Step 5: Project Structure](#step-5-project-file-structure)**. There is just very useful information related to the project that I would find helpful.

[`Back to Top`](#table-of-contents)

---

## **Step 5: Project File Structure**

The `JSopX.WebAPI` Project in particular, contains several files and directories, all with their own functionality & purpose for existing. 

For brevity, samples will not have the complete file structure you get when installing, but there are some core files and directories that have special consideration you should get to know. 

---

### **Step: 5.1: Structured Project & Solution Considerations**:

All `JSopX™ projects` follow a consistent directory structure. 

1. I create a [Visual Studio](../../Technologies/#visual-studio) Solution Folder to house the primary `.sln` solution file.
2. I create a similar Server-Side Project Folder for `.csproj`, and related files.

A common, plain-text file folder structure of the `JSopX.WebAPI` Solution and Projects should look something like what follows:

```plaintext
# JSopX™ Web API Solution and Projects

JSopX.WebAPI/                 # Root JSopX.WebAPI Visual Studio Solution folder.
├── JSopX.WebAPI.sln          # Visual Studio solution file for Angular Core.
├── PathConfig.targets              # Centralized MSBuild target configuration for project references.
├── JSopX.WebAPI/             # ASP.NET Core server-side application folder.
│   ├── JSopX.WebAPI.csproj   # Asp.NET Core Visual Studio Server Project configuration file.

```

There are a few reasons why I do this, but the primary reason is ensuring references are managed effectively and circular dependencies are avoided.

[`Back to Top`](#table-of-contents)

---

### **Step: 5.2: Structured File Tree**:

A common, plain-text file structure of the `JSopX.WebAPI` Project.

```plaintext
# JSopX™ Web API Project

JSopX.WebAPI/                          # Root JSopX™ Web API Project Visual Studio Solution folder.
├── .gitattributes                           # Git attributes file for repository metadata and configurations.
├── .gitignore                               # Specifies files and directories to ignore in version control.
├── JSopX.WebAPI.sln                   # Visual Studio solution '.sln' file for JSopX™ Web API Project.
├── LICENSE.txt                              # Licensing information for the project.
├── PathConfig.targets                       # Centralized MSBuild target configuration for project references.
├── README.md                                # High-level project documentation.
├── JSopX.WebAPI/                      # ASP.NET Core server-side application folder.
│   ├── JSopX.WebAPI.csproj            # Asp.NET Core Visual Studio Server Project '.csproj' configuration file.


```

[`Back to Top`](#table-of-contents)

---

### **Step: 5.3: Structured Table**:

A table structure of the same `JSopX.WebAPI` Project, files and resources.

| File/Folder Name                        | Description                                                                 |
|:----------------------------------------|:-----------------------------------------------------------------------------|
| &nbsp;📁&nbsp;**JSopX.WebAPI**&nbsp;            | Root folder for the JSopX™ Web API Project Visual Studio Solution.   |
| &nbsp;├&nbsp;📝&nbsp;`.gitattributes`&nbsp;                | Git attributes file for repository metadata and configurations.            |
| &nbsp;├&nbsp;📝&nbsp;`.gitignore`&nbsp;                    | Specifies files and directories to ignore in version control.              |
| &nbsp;├&nbsp;📝&nbsp;`JSopX.WebAPI.sln`&nbsp;        | Visual Studio solution `.sln` file for the JSopX™ Web API Project.         |
| &nbsp;├&nbsp;📝&nbsp;`LICENSE.txt`&nbsp;                   | Licensing information for the project.                                     |
| &nbsp;├&nbsp;📝&nbsp;`PathConfig.targets`&nbsp;            | Centralized MSBuild target configuration for project references.           |
| &nbsp;├&nbsp;📝&nbsp;`README.md`&nbsp;                     | High-level project documentation.                                          |
| &nbsp;├&nbsp;📁&nbsp;**JSopX.WebAPI/**&nbsp;            | ASP.NET Core server-side application folder.                               |
| &nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;📝&nbsp;`JSopX.WebAPI.csproj`&nbsp; | Asp.NET Core Visual Studio Server Project `.csproj` configuration file.                                 |

[`Back to Top`](#table-of-contents)

---

## **Step 6: JSopX™ Project References & Dependencies**

Most **JSopX™ Projects** leverage shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability.

The **`JSopX.WebAPI` Project** is one of the highest-level resource libraries, hence, it has almost no natural dependencies, but have the majority of the projects that rely on it.

1. **`JSopX.OpenProjectX`**:
   - The [Flagship Project](../../Introduction/JSopxProjectsFamilies.md#1-flagship-projects) parent enterprise application solution.
   - **Explore GitHub**: [JSopX.OpenProjectX](../../OpenProjects/jsopx.OpenProjectX)

2. **`JSopX.AspNetCore`**:
   - An **Asp.NET Core** [Server-Side “Existing” Apps Examples](../../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) project, created to simulate an existing Asp.NET Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
   - **Explore GitHub**: [JSopX.AspNetCore](../../OpenProjects/jsopx.AspNetCore)

3. **`JSopX.MauiHybridNetCore`**:
    - A **.NET MAUI Hyrbid** [Server-Side “Existing” Apps Examples](../../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) cross-platform applications, for desktop applications, native mobile applications, traditional web, while adopting our standards, API and more, and looking damn good doing it too.
    - **Explore GitHub**: [JSopX.MauiHybridNetCore](../../OpenProjects/jsopx.MauiHybridNetCore)

4. **`JSopX.BlazorServerCore`**:
    - A **Blazor Server .NET Core**  [Server-Side “Existing” Apps Examples](../../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) project, created to simulate an existing Asp.NET Core Blazor application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.BlazorServerCore](../../OpenProjects/jsopx.BlazorServerCore)

5. **`JSopX.AngularCore`**:
    - An **Angular Core** [Client-Side “Existing” Apps Examples](../../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) project, created to simulate an existing Angular Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.AngularCore](../../OpenProjects/jsopx.AngularCore)

6. **`JSopX.ReactCore`**:
    - A **React Core** [Client-Side “Existing” Apps Examples](../../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) project, created to simulate an existing React Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.ReactCore](../../OpenProjects/jsopx.ReactCore)
  
7. **`JSopX.VueCore`**:
    - A **Vue Core** [Client-Side “Existing” Apps Examples](../../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) created to simulate an existing Vue Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.VueCore](../../OpenProjects/jsopx.VueCore)
  
[`Back to Top`](#table-of-contents)

---

## **Step 7: Usage**

### **Step: 7.1: Referencing the `JSopX.`WebAPI Project**

1. **Add a project reference** to `JSopX.WebAPI` in each client-side and/or server-side projects that want to have consume the project's assets:
   - _Right-click_ on a project, such as [`JSopX.AngularCore`](#step-82-using-jsopxwebapi-project-in-an-angular-project), [`JSopX.ReactCore`](#step-84-using-jsopxwebapi-project-in-a-react-project), [`JSopX.VueCore`](#step-83-using-jsopxwebapi-project-in-a-vue-project), [`JSopX.BlazorServerCore`](#step-81-using-jsopxwebapi-project-in-a-blazor-project), etc.
   - Select **Add** > **Project Reference**.
   - Check `JSopX.WebAPI` and click **OK**.

[`Back to Top`](#table-of-contents)

---

## **Step 8: Extended Usage**

> [!TIP]
> These particular `Extended Usage` examples **are not** required to implement. They are just example extended usages for those of whom are new to projects like the `JSopX.WebAPI` Project.
>

---

### **Step: 8.1: Using `JSopX.`WebAPI Project in a Blazor Project**

**In [`JSopX.BlazorServerCore`](../../OpenProjects/jsopx.BlazorServerCore/)**:

1. **Reference the JSopX™ Web API Project**:
   - Add a reference to `JSopX.WebAPI` in [`JSopX.BlazorServerCore`](../../OpenProjects/jsopx.BlazorServerCore/p1/v1).

2. **Use Static Files in `Razor` Components**:
   - Create a `Razor` component that wants to use the shared static files.
   
     ```razor
      @page "/example"
      @inject IWebHostEnvironment env

      <h3>Re-Using JSopX™ Web API Project Assets Example Page</h3>

      <img src="@($"{env.WebRootPath}/doc-assets/jsopx-logo.svg")" alt="Reusing Official JSopX™ Logo in Blazor Server Core Application">
      <script src="@($"{env.WebRootPath}/doc-assets/js/script.js")"></script>
      <link rel="stylesheet" href="@($"{env.WebRootPath}/doc-assets/css/style.css")">
     ```

[`Back to Top`](#table-of-contents)

---

### **Step: 8.2: Using `JSopX.`WebAPI Project in an Angular Project**

**In [`JSopX.AngularCore`](../../OpenProjects/jsopx.AngularCore/)**:

1. **Copy Files Using a `Build Script`**:
   - Create a script to copy the shared resources from `JSopX.WebAPI` to the `assets` folder of the Angular project during the build process.

     ```json
      
      "scripts": {
          "postinstall": "npm run copy-web-api",
          "copy-web-api": "cp -r ../JSopX.WebAPI/* ./src/assets/"
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

### **Step: 8.3: Using `JSopX.`WebAPI Project in a Vue Project**

**In [`JSopX.VueCore`](../../OpenProjects/jsopx.VueCore/)**:

1. **Copy Files Using a Build Script**:
   - Create a script to copy the shared resources from `JSopX.WebAPI` to the `assets` folder of the Vue project during the build process.

      ```json
      
      "scripts": {
          "postinstall": "npm run copy-web-api",
          "copy-web-api": "cp -r ../JSopX.WebAPI/* ./public/assets/"
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

### **Step: 8.4: Using `JSopX.`WebAPI Project in a React Project**

**In [`JSopX.ReactCore`](../../OpenProjects/jsopx.ReactCore/)**:

1. **Copy Files Using a Build Script**:
   - Create a script to copy the shared resources from `JSopX.WebAPI` to the `public` folder of the React project during the build process.

     ```json
     // package.json
     "scripts": {
         "postinstall": "npm run copy-web-api",
         "copy-web-api": "cp -r ../JSopX.WebAPI/* ./public/assets/"
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

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../OpenProjects/jsopx.BridgeTooFar/README.md)** → _Continue_ as **you were**, exploring and/or installing other projects like you did with **this project**. You'll move onto the next project, using the `JSopX.BridgeTooFar` _Using Latest_ Variant.  

---

1. **[Browse By-Phase](../../OpenProjects/jsopx.WebAPI/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.WebAPI` _By-Phase_ Variant.   
2. **[Start From Scratch](../../OpenProjects/jsopx.WebAPI/p1/v1/RECREATEME.md)** → **Create project** from scratch, step-by-step, using the `JSopX.WebAPI` _From Scratch_ Variant.
3. **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../OpenProjects/jsopx.WebAPI/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/) · · **`Use Latest`** · [`By-Phase`](../../OpenProjects/jsopx.WebAPI/p1/v1/README.md) · [`From Scratch`](../../OpenProjects/jsopx.WebAPI/p1/v1/RECREATEME.md) · · [`Back to Top`](#table-of-contents) · [`« Previous`](../../OpenProjects/jsopx.ClassLibrary/) [`Next »`](../../OpenProjects/jsopx.BridgeTooFar/)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
