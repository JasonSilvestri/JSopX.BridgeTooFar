
# JSopX™ Bridge Too Far

**From Jason Silvestri’s BETA v 2025 Open Project EXperiences (JSopX™)**



> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate**. In fact, drafts will often times be for different reasons, such as testing styles, content, etc. The content itself may have only been used as a placeholder, making sections, or even the entire document contain information not relative to this project.


## Overview
﻿
The `JSopX.BridgeTooFar` Project (i.e., _jSilvestri.com BETA v 2025
 JSopX™ Bridge Too Far Open Project EXperience_) is one of several, FREE, open-source projects, included in the first-of-its-kind, Multi-Platform, Multi-Stack, `JSopX™ Open Project EXperiences Collection` Enterprise-Level Application.


![JSopX™ Open Project EXperiences Collection of Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/JsopX-Splash-Screen.png)


This homogeneous suite of **JSopX™** projects leverages cutting-edge client-side and server-side technologies, including **ASP.NET Core**, **Blazor**, **.NET MAUI**, **Angular**, **React**, **Node.js**, and **Vue**, among others. All projects share a common **Web API** backend and utilize the same centralized resources and assets, ensuring a consistent look and feel across all platforms. Designed as an enterprise-level solution, it provides a responsive web experience on mobile, tablet, laptop, and desktop browsers, while also being available as a desktop application for **Windows**, **Linux**, and **Mac**, and as a native mobile app for **iPhone**, **Android**, **Samsung Galaxy**, and **Windows Phone**.


![JSopX™ Open Project EXperiences Assets Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/bootstrap-themes.png)




> [!CAUTION]
> **CURRENT PHASE: Phase 1: Minimum Viable Product (MVP):**
>
> This document is currently aligned with **Phase 1** of development. As a result, the content may not be fully accurate or ready for production use. Treat it as reference material while the project evolves.
> 
> For more details, see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/Master/JSopX/Phases/Phase-1.md).





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
    - [Installation](#jsopxbridgetoofar--installation)
    - [Project References](#jsopxbridgetoofar--project-references)  
    - [Technology Requirements](#jsopxbridgetoofar--technology-requirements)  
  - [Usage](#usage)
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
> This document is still  **regularly being updated**. It is important to regularly check back for updates until this `Current Alert` is no longer visible.


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
﻿
> [!WARNING]
> This section describes a typical cloning operaton. Conversely, to mimic the collective JSopX project architecture takes some extra effort to fully implement "AS-IS".
> 
> **Please ensure that all test all includes on this page before release.**

### JSopX.BridgeTooFar : Installation

You can install the **`JSopX.BridgeTooFar`** Project **independently** by cloning the Git Repository.

#### Step by Step Instructions:

1. _Clone_ **`JSopX.BridgeTooFar`** Git Repository:
    ```powershell
       # Using PowerShell: Clone JSopX.BridgeTooFar Git Repository
    
       # 1. Navigate to the desired local directory you plan to clone the repository
       # to on your computer
       cd path\to\local\repo\JasonSilvestri\JSopX.BridgeTooFar
    
       # 2. Clone JSopX.BridgeTooFar Git Repository       
       git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git
    ```
    
2. _Open_ the solution in `Visual Studio`:

    - **Open** **`JSopX.BridgeTooFar.sln`** in Visual Studio 2022 or higher.

3. _Build_ the `Project`:

    - **Right-click** on the solution in `Solution Explorer` and select `Build Solution`.
      
4. _Run_ the `Project`:

    - **Click** on the `Run` button in `Visual Studio` to run the project.


### JSopX.BridgeTooFar : Project References

What makes the **`JSopX.BridgeTooFar`** Project—and the entire JSopX™ Open Project EXperiences collection—so versatile, even as an enterprise-level suite, is each project's ability to include and reuse '_Project References_.' These references are shared resources that enhance collaboration and efficiency across projects.

The _Project References_ included in the **`JSopX.BridgeTooFar`** Project are as follows:

1. [`JSopX.ClassLibrary`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.ClassLibrary/p1/v1/):
    - A shared library project containing reusable logic, utilities, or components that can be referenced by other projects. This is where you might place common business logic or helper functions.
   
## JSopX.BridgeTooFar : Technology Requirements

Don't forget that the **`JSopX.BridgeTooFar`** Project requires certain technologies installed to work as expected.

[`JSopX`](https://github.com/JasonSilvestri/JSopX.OpenProjectX) [`Bootstrap`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`HTML`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`CSS`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`JS`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`TypeScript`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`Visual Studio`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/Technologies/VisualStudio.md) [`Asp.NET Core`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/Technologies/AspNetCore.md) [`.NET Framework SDK`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/Technologies/NetFrameworkSdk.md) [`C#`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/Technologies/AspNetCore.md)  » 
[`All Technology Requirements`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/Technologies.md)  »  [`All Project Repositories`](https://github.com/JasonSilvestri/JSopX.OpenProjectX)  »  [`Back to Top`](#table-of-contents)


[Back to Top](#table-of-contents)

## Usage


### Reference the Shared Resources Project

1. **Add a project reference** to `JsopX.BridgeTooFar` in each client project:
    - Right-click on the client project (e.g., `JsopX.AngularCore`, `JsopX.ReactCore`, `JsopX.VueCore`, `JsopX.BlazorServerCore`).
    - Select **Add** > **Project Reference**.
    - Check `JsopX.BridgeTooFar` and click **OK**.

### Example: Blazor Project

**In `JsopX.BlazorServerCore`**:

1. **Reference the Shared Resources Project**:
    - Add a reference to `JsopX.BridgeTooFar` in `JsopX.BlazorServerCore`.

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
    - Create a script to copy the shared resources from `JsopX.BridgeTooFar` to the `assets` folder of the Angular project during the build process.

    ```json
    
    "scripts": {
        "postinstall": "npm run copy-bridge-too-far",
        "copy-bridge-too-far": "cp -r ../JsopX.BridgeTooFar/* ./src/assets/"
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
    - Create a script to copy the shared resources from `JsopX.BridgeTooFar` to the `assets` folder of the Vue project during the build process.

    ```json
    
    "scripts": {
        "postinstall": "npm run copy-bridge-too-far",
        "copy-bridge-too-far": "cp -r ../JsopX.BridgeTooFar/* ./public/assets/"
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
    - Create a script to copy the shared resources from `JsopX.BridgeTooFar` to the `public` folder of the React project during the build process.

    ```json
    // package.json
    "scripts": {
        "postinstall": "npm run copy-bridge-too-far",
        "copy-bridge-too-far": "cp -r ../JsopX.BridgeTooFar/* ./public/assets/"
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
The `JSopX.BridgeTooFar` Project (i.e., _jSilvestri.com BETA v 2025
 JSopX™ Bridge Too Far Open Project EXperience_) is one of several, FREE, open-source projects, included in the first-of-its-kind, Multi-Platform, Multi-Stack, `JSopX™ Open Project EXperiences Collection` Enterprise-Level Application.

By centralizing project documents with this approach to mark down will be very helpful, especially with referencing the `JSopX.BridgeTooFar` Read Me docs across projects.


[Back to Top](#table-of-contents)


---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri