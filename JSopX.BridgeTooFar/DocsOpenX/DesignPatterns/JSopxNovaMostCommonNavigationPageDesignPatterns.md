# Most Common JSopX™ Navigation Page Design Patterns

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

This guide aims to provide Jason and Nova with insights for creating navigational pages in documentation across projects. While specific projects handle page navigation differently, this document focuses on general best practices for consistent and effective navigation in static markdown files and dynamic generation tools like the `JSopX Nova Markdown Builder`.

### Problem Addressed

A common issue we encounter is broken or misdirected project links, especially in table-of-contents (TOC) situations. This problem can arise in handcrafted static markdown documents, as well as in automated tools like the `JSopX Nova Markdown Builder`. The root cause often lies in competing ideas and the complexity of managing resources spread across multiple projects.

---


> [!CAUTION]
> **Deprecated:**
> 
> The content before you is deprecated. Visit **[https://github.com/JasonSilvestri/JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar)** for the latest version.
>

---

## Table of Contents



  - [Overview](#overview)
    - [Problem Addressed](#problem-addressed)
  - [Prerequisites](#prerequisites)
  - [Corequisites](#corequisites)
  - [Competing Ideas for Markdown File & Directory Creation and Storage](#competing-ideas-for-markdown-file--directory-creation-and-storage)
    - [Competing Idea 1: Manual Markdown File & Directory Creation](#competing-idea-1-manual-markdown-file--directory-creation)
    - [Competing Idea 2: JSopX Nova Markdown Builder Dynamic Creation](#competing-idea-2-jsopx-nova-markdown-builder-dynamic-creation)
  - [Jason and Nova Competing Idea Brainstorm Exploration](#jason-and-nova-competing-idea-brainstorm-exploration)
    - [Manual Markdown Document Creation](#manual-markdown-document-creation)
  - [Jason and Nova Competing Idea Brainstorm Afterthoughts](#jason-and-nova-competing-idea-brainstorm-afterthoughts)
    - [1. Where should the Parent Template file be stored?](#1-where-should-the-parent-template-file-be-stored)
      - [Option A: Store the Parent Template inside the Parent Template Directory](#option-a-store-the-parent-template-inside-the-parent-template-directory)
      - [Option B: Store the Parent Template outside the Parent Template Directory](#option-b-store-the-parent-template-outside-the-parent-template-directory)
      - [Recommendation:](#recommendation)
    - [2. Should the root index file be Introduction.md or ReadMe.md?](#2-should-the-root-index-file-be-introductionmd-or-readmemd)
      - [Option A: Use Introduction.md as the root index file](#option-a-use-introductionmd-as-the-root-index-file)
      - [Option B: Use ReadMe.md as the root index file](#option-b-use-readmemd-as-the-root-index-file)
      - [Recommendation:](#recommendation)
    - [Summary of Recommendations](#summary-of-recommendations)
    - [Conclusion](#conclusion)
  - [Step-by-Step Instructions](#step-by-step-instructions)
    - [Method 1: Adjust the Offset Using HTML Attributes](#method-1-adjust-the-offset-using-html-attributes)
    - [Method 2: Adjust the Offset Using JavaScript](#method-2-adjust-the-offset-using-javascript)
    - [Method 3: Account for Fixed Navigation Bars](#method-3-account-for-fixed-navigation-bars)
    - [Method 4: Ensure Correct Element Targeting](#method-4-ensure-correct-element-targeting)
    - [Method 5: CSS Adjustments (If Necessary)](#method-5-css-adjustments-if-necessary)
  - [Common Technologies Section](#common-technologies-section)
  - [Common Technologies](#common-technologies)
  - [Postrequisites](#postrequisites)
  - [Concomitants](#concomitants)
  - [In Conclusion](#in-conclusion)
---

## Prerequisites

- Visual Studio 2022 (v 17.3.0) or higher installed.
- .NET SDK (v 9.2.1) or higher installed.
- Node.js (v 20.14.0) or higher installed.
- Existing JSopX projects (e.g., `JSopX.BridgeTooFar`, `JSopX.ClassLibrary`, `JSopX.WebAPI`, etc.).
- Basic understanding of `.csproj` and `.sln` file structures.
- Basic understanding of `.md` and markdown files.

[`⇧ Back to Top`](#table-of-contents)

---

## Corequisites

Although the focus of this document is not the `JSopX Nova Markdown Builder`, the core concepts discussed here align closely with its functionality.

[`⇧ Back to Top`](#table-of-contents)

---

## Competing Ideas for Markdown File & Directory Creation and Storage

Currently, we have two competing approaches for creating and storing markdown documents:

---

### Competing Idea 1: Manual Markdown File & Directory Creation

1. **Simple Brainstorming:**  
   Jason and Nova often brainstorm markdown content that could eventually become part of official documentation.

2. **Manual Markdown Creation:**  
   Some brainstormed content is stored manually and may eventually be incorporated into JSopX Projects. This content is often saved locally on my computer or in a standalone project, with private commits pushed to a generic GitHub repository (currently called `JSopX.RazorClassLibraryDraft.sln`).

---

### Competing Idea 2: JSopX Nova Markdown Builder Dynamic Creation

1. **Using the `JSopX Nova Markdown Builder`:**  
   Before we made it a habit to manually create markdown documents, we used a primitive version of the `JSopX Nova Markdown Builder` tool. While the tool needs refinement, it was originally designed to dynamically create markdown documents using features like `Includes`. However, this approach is not practical for manual markdown creation.

[`⇧ Back to Top`](#table-of-contents)

---

## **Jason and Nova Competing Idea Brainstorm Exploration**

### **Manual Markdown Document Creation**

1. **Jason created a `Parent Template Directory`:** called `Introduction`.
2. **Jason created a `Parent Template Markdown Document`:** named `Introduction.md`, which serves as the root index `.md` file for the directory.
3. **Jason organized directories and files in a similar way to the `JSopX Nova Markdown Builder`:**  
   
   Although the `JSopX Nova Markdown Builder` is not the main focus of this thread, the structure of the `Introduction` markdown document collection mirrors how we would organize `Parent Templates` and `Nested Templates` using the builder.

    **Parent and Nested Template Manual Creation:**

    ```plaintext
    Introduction (Parent Template Directory)
    │   Alerts.md (Nested Template)
    │   Introduction.md (Parent Template)
    │   JasonSilvestriOpenProjectExperiences.md (Nested Template)
    │   JSopxProjectChecksBalances.md (Nested Template)
    │   JSopxProjects.md (Nested Template)
    │   JSopxProjectsFamilies.md (Nested Template)
    │   JSopxProjectsGitHubBasics.md (Nested Template)
    │   JSopxProjectsGitHubAdvanced.md (Nested Template)
    ```

    The main difference between this manual approach and the builder’s method is how the `Introduction.md` file is stored. The `JSopX Nova Markdown Builder` places this root document outside the parent directory, whereas in the manual setup, it's placed inside the directory.

    **Parent and Nested Template Creation by `JSopX Nova Markdown Builder`:**

    ```plaintext
    Introduction (Parent Template Directory)
    │   Alerts.md (Nested Template)
    │   JasonSilvestriOpenProjectExperiences.md (Nested Template)
    │   JSopxProjectChecksBalances.md (Nested Template)
    │   JSopxProjects.md (Nested Template)
    │   JSopxProjectsFamilies.md (Nested Template)
    │   JSopxProjectsGitHubBasics.md (Nested Template)
    │   JSopxProjectsGitHubAdvanced.md (Nested Template)
    │   ReadMe.md (Nested Variant of Parent Template)
    Introduction.md (Parent Template)
    ```

---

## Jason and Nova Competing Idea Brainstorm Afterthoughts

Let's dive into the afterthoughts, focusing on clarity and alignment with our design goals.

### **1. Where should the `Parent Template` file be stored?**

The decision to store the `Parent Template` file inside or outside the parent directory depends on consistency, discoverability, and usability. Here are some options:

#### **Option A: Store the `Parent Template` inside the `Parent Template Directory`**
**Pros:**
- **Consistent grouping:** All templates are in one place, making it easy to locate related files.
- **Simplified paths:** All links can use consistent, root-relative paths.
- **Logical hierarchy:** Having `Introduction.md` inside the `Introduction` directory keeps the structure neat.

**Cons:**
- **Redundancy:** The root directory might already imply the context of the parent template.
- **Tooling adjustments:** Tools like `JSopX Nova Markdown Builder` might need to adapt.

#### **Option B: Store the `Parent Template` outside the `Parent Template Directory`**
**Pros:**
- **Cross-collection flexibility:** Storing the `Parent Template` outside makes it easier to work across multiple collections.
- **Visibility:** It's more accessible at the top level for maintainers or readers.

**Cons:**
- **Fragmentation:** Could create confusion in the directory structure.
- **Path inconsistencies:** Requires different relative paths for linking to files.

---

#### **Recommendation:**
For now, **Option A (store the `Parent Template` inside the directory)** is recommended. It simplifies file discovery and supports a cleaner structure. Tools like `JSopX Nova Markdown Builder` can be updated later to accommodate this.

---

### **2. Should the root index file be `Introduction.md` or `ReadMe.md`?**

This decision hinges on the primary role of the root file and user expectations.

#### **Option A: Use `Introduction.md` as the root index file**
**Pros:**
- **Clear intent:** The name explicitly signals the file’s purpose as an introduction.
- **Consistency:** Aligns with the rest of the documentation structure.

**Cons:**
- **Non-standard:** Deviates from the common use of `ReadMe.md`.

#### **Option B: Use `ReadMe.md` as the root index file**
**Pros:**
- **Familiarity:** `ReadMe.md` is the de facto standard for root files.
- **Cross-platform compatibility:** Platforms like GitHub automatically render `ReadMe.md` as the main file for directories.
- **Tooling compatibility:** Most tools expect `ReadMe.md`.

**Cons:**
- **Vagueness:** The name is generic and might not convey its specific role.

---

#### **Recommendation:**
To align with broader development practices, **use `ReadMe.md`** as the root index file. However, you can still generate an `Introduction.md` if you need a more detailed summary.

---

### **Summary of Recommendations**

1. Store the `Parent Template` inside the `Parent Template Directory` (e.g., `Introduction/Introduction/`) to maintain consistency and simplify discovery.
2. Use `ReadMe.md` as the root index file, but allow for `Introduction.md` as a detailed summary or separate entry if necessary.

---

### **Conclusion**

By combining both approaches, we can optimize the structure and maintain flexibility. This hybrid method helps manage the complexity of dynamic and static markdown document generation.


[`⇧ Back to Top`](#table-of-contents)

---

## JSopX Dynamic & Static Markdown Generation Lifecycle

There are several ways in which documents can be the same or similar, as a variant found in one-or-more projects.

**Let's assume we are working with the following documentation sections for sanity purposes**:

- Projects 
- Technologies

## **1. JSopX Angular Core Project File Structure**

The `JSopX.AngularCore` Project contains several files and directories, all with their own functionality & purpose for existing. Conversely, there are some core files and directories that have special consideration. 

They are as follows: 

[See how we handle Bridge Too Far file structures](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsJSopxNovaOrionDocEngine/BrandProjects/JSopX/Master/DocsDrafts/Static/Advanced/JsopxNovaOnly/JsopxNovaMarkdownBuilder/BusinessRequirements.md#7-typical-file-tree-structure).

---

[`⇧ Back to Top`](#table-of-contents)

---

### **File Tree**:

```plaintext
# JSopX Angular Core Project

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
│   │   ├── index.html                    # Root HTML file to bootstrap the Angular app.
│   │   └── main.ts                       # Main entry point for Angular application.
├── JSopX.AngularCore.Server/             # ASP.NET Core server-side application folder.
│   ├── JSopX.AngularCore.Server.csproj   # Angular CLI Visual Studio Server Project configuration file.
│   ├── Program.cs                        # Main entry point for the ASP.NET Core server.
│   ├── Controllers/                      # API controllers exposing server endpoints.
│   ├── appsettings.json                  # Application settings file for configuration.
│   └── WeatherForecast.cs                # Example model class (default template).
```

[`⇧ Back to Top`](#table-of-contents)

---

### **Table Structure**:

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
| 📝 `src/index.html`                    | Root HTML file that bootstraps the Angular application. |
| 📝 `src/main.ts`                       | Entry point file where Angular initializes and bootstraps the application. |
| 📁 **JSopX.AngularCore.Server**        | ASP.NET Core server-side folder for back-end logic and API endpoints. |
| 📝 `JSopX.AngularCore.Server.csproj`   | Angular server-side Visual Studio project `.csproj` configuration file, housing the back-end implementation. |
| 📝 `Program.cs`                        | Main entry point for the ASP.NET Core application, initializing services. |
| 📁 `Controllers/`                      | Contains API controllers that handle HTTP requests and responses. |
| 📝 `appsettings.json`                  | Configuration file for application settings like connection strings. |
| 📝 `WeatherForecast.cs`                | Example model class provided by ASP.NET Core templates for demonstration. |


[`⇧ Back to Top`](#table-of-contents)

---

## Step 1: `JSopX.`RazorClassLibraryDraft

The `JSopX.RazorClassLibraryDraft` Project, is a little known, private repository, I store sensitive code not yet finished, draft and complete markdown documents, code snippets, finished and unfinished ideas & more. 

In addition, the project has become a sandboxing location for features and resources that will often find their way into public JSopX Projects, like, `JSopX.SharedResources`, `JSopX.RCLxAssets`, `JSopX.RCLxProper`, etc.


[`⇧ Back to Top`](#table-of-contents)

---

### 1.1 **Path Examples and Contextualization**

For scenarios where paths are manipulated or adjusted dynamically, we could show path variations inline to illustrate. For instance:

#### 1. **`Base` Path:**

```
./JSopX.AngularCore/
```

2. **Server Project Path**:
```
./JSopX.AngularCore/JSopX.AngularCore.Server/
```

3. **Client Project Path**:
```
./JSopX.AngularCore/jsopx.angularcore.client/
```

4. **Relative Project Path**:
```
./JSopX.AngularCore/JSopX.AngularCore.Server/JSopX.AngularCore.Server.csproj
```

5. **Absolute Local Repository Project Path**:
```
C:\path\to\local\repo\JasonSilvestri\JSopX.AngularCore
```

6. **Absolute Public Repository Project Path**:
```
https://github.com/JasonSilvestri/JSopX.AngularCore
```

Each variation is tied to a use case:
- **Base Path**: Used when configuring global project settings.
- **Server Path**: Used when setting up server-side APIs or backend configurations.
- **Client Path**: Used for front-end development and builds.
- **Relative paths** for internal references within a repository or when collaborating on shared code.
- **Absolute public paths** when documenting system-specific configurations or providing setup instructions.

---
[`⇧ Back to Top`](#table-of-contents)

---

1. Add CSS to your drop-down menu to enable scrolling:
    ```css
    .dropdown-menu {
        max-height: 200px; /* Adjust height as needed */
        overflow-y: auto;
    }
    ```

2. Ensure that your HTML structure for the drop-down menu is correct:
    ```html
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <!-- Menu items here -->
        </ul>
    </div>
    ```
    
[`⇧ Back to Top`](#table-of-contents)

---

## Solution 2: Setting a Max-Height

Set a `max-height` for the drop-down menu to limit its height and allow scrolling.

### Step-by-Step Instructions

1. Add CSS to set a `max-height` for the drop-down menu:
    ```css
    .dropdown-menu {
        max-height: 200px; /* Adjust height as needed */
        overflow-y: auto;
    }
    ```

2. Ensure that your HTML structure for the drop-down menu is correct:
    ```html
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <!-- Menu items here -->
        </ul>
    </div>
    ```

[`⇧ Back to Top`](#table-of-contents)

---

## Solution 3: Custom Scrollbar

Use custom scrollbar styling to ensure the drop-down menu remains styled when overflow is enabled.

### Step-by-Step Instructions

1. Add custom scrollbar CSS to your drop-down menu:
    ```css
    .dropdown-menu {
        max-height: 200px; /* Adjust height as needed */
        overflow-y: auto;
    }

    .dropdown-menu::-webkit-scrollbar {
        width: 8px;
    }

    .dropdown-menu::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }

    .dropdown-menu::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
    }
    ```

2. Ensure that your HTML structure for the drop-down menu is correct:
    ```html
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <!-- Menu items here -->
        </ul>
    </div>
    ```
    
[`⇧ Back to Top`](#table-of-contents)

---

## Solution 4: Using JavaScript

Dynamically adjust the max-height of the drop-down menu based on the viewport height.

### Step-by-Step Instructions

1. Add JavaScript to adjust the max-height of the drop-down menu:
    ```html
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var dropdown = document.querySelector('.dropdown-menu');
            var navHeight = document.querySelector('.navbar').offsetHeight;

            function adjustDropdownHeight() {
                var viewportHeight = window.innerHeight;
                var maxHeight = viewportHeight - navHeight - 20; // 20px for spacing
                dropdown.style.maxHeight = maxHeight + 'px';
            }

            adjustDropdownHeight();
            window.addEventListener('resize', adjustDropdownHeight);
        });
    </script>
    ```

2. Ensure that your HTML structure for the drop-down menu is correct:
    ```html
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <!-- Menu items here -->
        </ul>
    </div>
    ```

[`⇧ Back to Top`](#table-of-contents)

---


## **Common Technologies Section**

Some documents have a `Common Technologies` section, which is generally a list of one or more required technologies the primary topic discussed depends on (i.e., a Technology, one or more JSopX Projects, etc). 

**Example for `Common Technologies Section`**:

Let's picture we are a technology or project that requires one or more technologies to run as expected. 

```markdown

## Common Technologies

The following Technologies are required for _JSopX™ Open Project EXperiences Collection_ Projects to work as expected:

- [Common Technologies Included](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/CommonTechnologiesIncluded.md)
- [Visual Studio (v 17.14.21)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/VisualStudio.md)
- [.NET Framework (v 9.2.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.2.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/AspNetCore.md)
- [.NET Core Blazor (v 9.2.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetCoreBlazor.md)
- [.Net Core Maui Hybrid (v 9.2.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetCoreMauiHybrid.md)
- [Node (v 20.14.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Node.md)
- [npm (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/npm.md)
- [Angular CLI (v 18.0.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/AngularCli.md)
- [React (v 18.2.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/React.md)
- [Vue (v 3.4.21)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Vue.md)
- [Vite (v 5.2.8)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Vite.md)

```

[`⇧ Back to Top`](#table-of-contents)

---

## Postrequisites

- Verify that Scrollspy accurately highlights the correct sections while scrolling.
- Test the layout in various screen sizes to ensure responsiveness.

[`⇧ Back to Top`](#table-of-contents)

---

## Concomitants

- You can combine Bootstrap Scrollspy with additional interactive features like tooltips or smooth scrolling for a better user experience.

[`⇧ Back to Top`](#table-of-contents)

---

## In Conclusion

- Use `data-bs-offset` or JavaScript to adjust the Scrollspy offset.
- Ensure the offset accounts for fixed elements like navbars.
- Confirm the link and section targeting is correct.
- Apply custom CSS adjustments if necessary to fix layout issues.

[`⇧ Back to Top`](#table-of-contents)

---

[`Home`](../OpenProjects/jsopx.BridgeTooFar/README.md) » [`Introduction`](../Introduction/) »  [`Design Patterns`](../DesignPatterns/) » **`Less Common Doc Section Design Patterns`**  · · ·  [`⇧ Back to Top`](#table-of-contents) · · · [`« Previous`](./JSopxNovaDocumentSectionDesignPatterns.md) [`Next »`](../DesignPatterns/)

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

#
> [!CAUTION]
> **Deprecated:**
> 
> The content before you is deprecated. Visit **[https://github.com/JasonSilvestri/JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar)** for the latest version.
>

---

## Table of Contents


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

**`Introduction`** · · · [`⇧ Back to Top`](#table-of-contents) · · · [`Get Started »`](./Alerts.md)

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

#
> [!CAUTION]
> **Deprecated:**
> 
> The content before you is deprecated. Visit **[https://github.com/JasonSilvestri/JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar)** for the latest version.
>

---

## Table of Contents


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

**`Introduction`** · · · [`⇧ Back to Top`](#table-of-contents) · · · [`Get Started »`](./Alerts.md)

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
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-logo-black"></use></svg>
                                        Open Project X
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-angular-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-angular-core-logo-black"></use></svg>
                                        Angular Core
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-aspnet-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-aspnet-core-logo-black"></use></svg>
                                        Asp.NET Core
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-blazor-server-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-blazor-server-core-logo-black"></use></svg>
                                        Blazor Server Core
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-react-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-react-core-logo-black"></use></svg>
                                        React Core
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-vue-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-vue-core-logo-black"></use></svg>
                                        Vue Core
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-maui-hybrid-net-core/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-maui-hybrid-net-core-logo-black"></use></svg>
                                        MAUI Hybrid
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-bridge-too-far/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-bridge-too-far-logo-black"></use></svg>
                                        Bridge Too Far
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-class-library/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-class-library-logo-black"></use></svg>
                                        Class Library
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-web-api/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-web-api-black"></use></svg>
                                        Web API
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-shared-resources/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-shared-resources-logo-black"></use></svg>
                                        Shared Resources
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-rcl-x-assets/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-rcl-x-assets-logo-black"></use></svg>
                                        RCL Assets
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-rcl-x-proper/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-rcl-x-proper-logo-black"></use></svg>
                                        RCL Proper
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../../assets/html/jsopx-rcl-x-components/index.html" class="nav-link link-body-emphasis">
                                        <svg class="jsopx pe-none me-2" width="16" height="16"><use xlink:href="#icon-jsopx-rcl-x-components-logo-black"></use></svg>
                                        RCL Components
                                    </a>
                                </li>
                            </ul> 

```

---

### Location in Bridge Too Far:

## `JSopX.` Dependencies

The following _JSopX™ Open Project EXperiences Collection_ Projects that depend on `Visual Studio` or `Visual Studio Code` **`17.14.21`** (_or higher_) are as follows:


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

