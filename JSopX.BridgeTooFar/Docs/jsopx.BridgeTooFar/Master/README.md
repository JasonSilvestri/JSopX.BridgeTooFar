
# JSopX™ Open Project EXperiences : Bridge Too Far

From the ﻿jSilvestri.com BETA v 2024 JSopX™ Open Project EXperiences Collection of Projects


> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate**. In fact, drafts will often times be for different reasons, such as testing styles, content, etc. The content itself may have only been used as a placeholder, making sections, or even the entire document contain information not relative to this project.


## Overview


![JSopX™ Open Project EXperiences Collection of Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/JsopX-Splash-Screen.png)

﻿
The `JSopX.BridgeTooFar` Project (i.e., _jSilvestri.com BETA v 2024 JSopX™ Bridge Too Far Open Project EXperience_) is one of several, FREE, open-source projects, included in the first-of-its-kind, Multi-Platform, Multi-Stack, `JSopX™ Open Project EXperiences Collection` Enterprise-Level Application.

This homogeneous suite of JSopX™ projects, uses some of the most advanced client-side and server-side technologies of today, such as Asp.NET Core, Blazor, .NET MAUI, Angular, React, Node.JS, Vue &amp; more! All access the same server-side Web API, while using the same client-side, look-and-feel resources and assets across all projects, constructed as a centeralized, unified, enterprise-level soluiton, and available as responsive web design for most mobile, tablet, laptop & desktop web browsers, as a Windows, Linux and Mac desktop application, and as a native mobile app for Iphone, Android, Samsung Galaxy and Windows Phone.


![JSopX™ Open Project EXperiences Assets Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/bootstrap-themes.png)


> [!CAUTION]
> **Phase 1: Minimum Viable Product (MVP)**
> 
> This project is currently in **Phase 1** of Development. It **should not** be considered **accurate** or a **release candidate**. In fact, it should be treated as simply reference material for the time being, due to the absolute bare minimum resources created, to satisfy a minimum viable product requirement in Phase 1 (by design). Conversely, Phase 2 is days away, and Phase 3 is only a week after that. Phase 3 Projects will be mature, and action-packed with features, assets, documentation and more!
> 
> Please see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases/Phase-1-Minimum-Viable-Product-MVP.md) for more details.


# Table of Contents
- [JSopX™ Open Project EXperiences : Bridge Too Far](#jsopx-open-project-experiences--bridge-too-far)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Alerts](#alerts)
    - [Current Alerts](#current-alerts)
  - [Prerequisites](#prerequisites)
  - [Corequisites](#corequisites)
  - [Postrequisites](#postrequisites)
  - [Concomitants](#concomitants)
  - [Getting Started](#getting-started)
  - [Step-by-Step Instructions](#step-by-step-instructions)
    - [Step 1: Create the Parent Basic Markdown Page Template](#step-1-create-the-parent-basic-markdown-page-template)
    - [Step 2: Create the Child Basic Markdown Page Template Content Includes](#step-2-create-the-child-basic-markdown-page-template-content-includes)
    - [Step 3: Double Check the Parent Basic Markdown Page Template for all Includes](#step-3-double-check-the-parent-basic-markdown-page-template-for-all-includes)
  - [Usage](#usage)
      - [Adding the JSopX™ Bridge Too Far Docs to Other Projects](#adding-the-jsopx-bridge-too-far-docs-to-other-projects)
  - [In Conclusion](#in-conclusion)


## Alerts

**Please pay close attention to the `alerts` that appear in all documentation that look like the following:**

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.


### Current Alerts

> [!IMPORTANT]
> This document is for **advanced users only**, and this Include outlines a sample `Current Alert`.


[Back to Top](#table-of-contents)

## Prerequisites

﻿
- Visual Studio 2022 or higher installed.
- Existing JSopX projects (e.g., `JSopX.BridgeTooFar`, `JSopX.ClassLibrary`, `JSopX.WebAPI`, etc.).
- Installed .NET 8.0 SDK.
- Installed Node.js 20.14.0
- Basic understanding of `.csproj` and `.sln` file structures.
- Basic understanding of `.md` and markdown files


[Back to Top](#table-of-contents)

## Corequisites

﻿
- Ensure we can have a markdown readme like the parent markdown we are in now, and add markdown includes from the child, to see if GitHub supports includes in a way that we need them to.


[Back to Top](#table-of-contents)

## Postrequisites

﻿
- Clean and rebuild each project markdown after making changes to ensure includes are properly configured.


[Back to Top](#table-of-contents)

## Concomitants

﻿
- You do not need to install technologies mentioned in the [Prerequisites](#prerequisites) section just to review the markdown files under `Docs`. However, you will need to if you plan to work with the project in modifying and creating new markdown documents.



[Back to Top](#table-of-contents)


## Getting Started

﻿
> [!WARNING]
> This section describes a typical cloning operaton. Conversely, to mimic the collective JSopX project architecture takes some extra effort to fully implement "AS-IS".
> 
> **Please ensure that all test all includes on this page before release.**

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git
    ```

2. **Open the solution in Visual Studio**:

    - Open `JSopX.BridgeTooFar.sln` in Visual Studio.

3. **Build the project**:

    - Right-click on the solution in Solution Explorer and select `Build Solution`.




[Back to Top](#table-of-contents)

## Step-by-Step Instructions

﻿
### Step 1: Create the Parent Basic Markdown Page Template

1. 1. **Create a `BasicMarkdownPage` markdown file**, save it to `Templates`, so we can use it to embed include test markdowns into it.

### Step 2: Create the Child Basic Markdown Page Template Content Includes

2. **Create a `BasicMarkdownPage` directory**, under `Includes/Content/Template`, and create as many static markdown sections needed for this sample.

### Step 3: Double Check the Parent Basic Markdown Page Template for all Includes

1. After adding all `include` blocks in the template, double-check all resources and be sure they exist. 
   
2. If this was done correctly, you should see content added to the live Docs folder.


[Back to Top](#table-of-contents)

## Usage


### Reference the Shared Resources Project

1. **Add a project reference** to `JsopX.SharedResources` in each client project:
    - Right-click on the client project (e.g., `JsopX.AngularCore`, `JsopX.ReactCore`, `JsopX.VueCore`, `JsopX.BlazorServerCore`).
    - Select **Add** > **Project Reference**.
    - Check `JsopX.SharedResources` and click **OK**.

### Example: Blazor Project

**In `JsopX.BlazorServerCore`**:

1. **Reference the Shared Resources Project**:
    - Add a reference to `JsopX.SharedResources` in `JsopX.BlazorServerCore`.

2. **Use Static Files in Razor Components**:
    - Create a Razor component that uses the shared static files.

    ```razor
    @page "/example"
    @inject IWebHostEnvironment env

    <h3>Example Page</h3>

    <img src="@($"{env.WebRootPath}/images/logo.png")" alt="Logo">
    <script src="@($"{env.WebRootPath}/JavaScript/script.js")"></script>
    <link rel="stylesheet" href="@($"{env.WebRootPath}/CSS/style.css")">
    ```

### Example: Angular Project

**In `JsopX.AngularCore`**:

1. **Copy Files Using a Build Script**:
    - Create a script to copy the shared resources from `JsopX.SharedResources` to the `assets` folder of the Angular project during the build process.

    ```json
    
    "scripts": {
        "postinstall": "npm run copy-shared-resources",
        "copy-shared-resources": "cp -r ../JsopX.SharedResources/* ./src/full-assets/"
    }
    ```

2. **Use Static Files in Angular Components**:
    - Reference the static files in your Angular components.

    ```html
    <!-- app.component.html -->
    <img src="assets/images/logo.png" alt="Logo">
    <script src="assets/JavaScript/script.js"></script>
    <link rel="stylesheet" href="assets/CSS/style.css">
    ```

### Example: Vue Project

**In `JsopX.VueCore`**:

1. **Copy Files Using a Build Script**:
    - Create a script to copy the shared resources from `JsopX.SharedResources` to the `assets` folder of the Vue project during the build process.

    ```json
    
    "scripts": {
        "postinstall": "npm run copy-shared-resources",
        "copy-shared-resources": "cp -r ../JsopX.SharedResources/* ./public/full-assets/"
    }
    ```

2. **Use Static Files in Vue Components**:
    - Reference the static files in your Vue components.

    ```html
    <!-- App.vue -->
    <template>
        <div>
            <img src="assets/images/logo.png" alt="Logo">
            <script src="assets/JavaScript/script.js"></script>
            <link rel="stylesheet" href="assets/CSS/style.css">
        </div>
    </template>
    ```

### Example: React Project

**In `JsopX.ReactCore`**:

1. **Copy Files Using a Build Script**:
    - Create a script to copy the shared resources from `JsopX.SharedResources` to the `public` folder of the React project during the build process.

    ```json
    // package.json
    "scripts": {
        "postinstall": "npm run copy-shared-resources",
        "copy-shared-resources": "cp -r ../JsopX.SharedResources/* ./public/full-assets/"
    }
    ```

2. **Use Static Files in React Components**:
    - Reference the static files in your React components.

    ```javascript
    // App.js
    import React from 'react';

    function App() {
        return (
            <div>
                <img src="assets/images/logo.png" alt="Logo" />
                <script src="assets/JavaScript/script.js"></script>
                <link rel="stylesheet" href="assets/CSS/style.css" />
            </div>
        );
    }

    export default App;
    ```



## In Conclusion

﻿
The `JSopX.BridgeTooFar` Project (i.e., _jSilvestri.com BETA v 2024 JSopX™ Bridge Too Far Open Project EXperience_) is one of several, FREE, open-source projects, included in the first-of-its-kind, Multi-Platform, Multi-Stack, `JSopX™ Open Project EXperiences Collection` Enterprise-Level Application.

By centralizing project documents with this approach to mark down will be very helpful, especially with referencing the `JSopX.BridgeTooFar` Read Me docs across projects.


[Back to Top](#table-of-contents)


---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2024 - All Rights Reserved by Jason Silvestri