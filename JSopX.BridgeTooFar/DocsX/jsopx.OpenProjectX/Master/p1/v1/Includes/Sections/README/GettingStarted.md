﻿

> [!WARNING]
> This section describes a typical cloning operaton. Conversely, to mimic the collective JSopX project architecture takes some extra effort to fully implement "AS-IS".
> 
> **To mimic the advanced cloning of the collective `JSopX.OpenProjectX` project suite (how it is possible to have `all-projects-in-one` and `independent-projects` installations), please see, [JSopX™ Visual Studio Projects GitHub Advanced](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Introduction/JSopxProjectsGitHubAdvanced.md) for details.**
>



## Installation

1. **_Clone_ the `JSopX.OpenProjectX` repository**:

    ```powershell
    git clone https://github.com/JasonSilvestri/JSopX.OpenProjectX.git
    ```

2. **_Open_ the solution in `Visual Studio`**:

    - **Open** `JSopX.OpenProjectX.sln` in Visual Studio 2022 or higher.

3. **_Build_ the `project`**:

    - **Right-click** on the solution in `Solution Explorer` and select `Build Solution`.


## JSopX.OpenProjectX : Project References

What makes the **`JSopX.OpenProjectX`** Project—and the entire JSopX™ Open Project EXperiences collection—so versatile, even as an enterprise-level suite, is each project's ability to include and reuse '_Project References_.' These references are shared resources that enhance collaboration and efficiency across projects.

The _Project References_ included in the **`JSopX.OpenProjectX`** Project are the complete set of all projects. They are as follows:

1.  **JSopX.OpenProjectX**:  
    The central or parent project that oversees and coordinates the various subprojects within the JSopX™ suite. It could serve as the main entry point or orchestration layer for the entire solution.
      
2.  **[`JSopX.ClassLibrary`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.ClassLibrary/Master/p1/v1/)**:    
    This project focuses on managing static assets and their distribution across the different client-side and server-side applications. It ensures a clean separation of concerns, particularly around documentation & asset management.
      
3.  **[`JSopX.BridgeTooFar`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.BridgeTooFar/Master/p1/v1/)**:  
    A shared library project containing reusable logic, utilities, or components that can be referenced by other projects. This is where you might place common business logic or helper functions.
      
4.  **[`JSopX.WebAPI`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.WebAPI/Master/p1/v1/)**:
    A project dedicated to building RESTful APIs for the JSopX™ ecosystem. It provides endpoints for various data services and serves as the end-game Web API backend for all  the server-side & client-side applications.
      
5.  **[`JSopX.SharedResources`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.SharedResources/Master/p1/v1/)**:
    A traditional central Class Library repository for shared resources such as images, fonts, scripts, and localized strings. This project ensures that all other projects have consistent access to these resources in the initial phases of development you'll follow here, supporting both client-side applications and the server-side.
      
6.  **[`JSopX.RCLxProper`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.RCLxProper/Master/p1/v1/)**:
    A production-ready, lightweight Razor Class Library project that includes properly structured Razor components, pages, views, and more! These elements can be shared across different Blazor and Razor-based applications.
      
7.  **[`JSopX.RCLxAssets`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.RCLxAssets/Master/p1/v1/)**: 
    The successor to `JSopX.SharedResources`, incorporating more modern approaches as a Razor Class Library dedicated to managing static assets like CSS, JavaScript, and other resources. It efficiently bundles and serves these assets across projects.
      
8.  **[`JSopX.RCLxProper`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.RCLxComponents/Master/p1/v1/)**: 
    Another Razor Class Library focused on reusable UI components. These components can be utilized in various Blazor and ASP.NET Core applications to maintain consistency in the UI.
      
9.  **[`JSopX.AngularCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.AngularCore/Master/p1/v1/)**: 
    A client-side project built with Angular. This project focuses on creating dynamic, single-page applications with Angular, integrating seamlessly with Asp.NET Core server-side, Web API and shared resources.
      
10. **[`JSopX.ReactCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.ReactCore/Master/p1/v1/)**:  
    A client-side project built with React. Similar to `JSopX.AngularCore`, it is used to create dynamic, component-based single-page applications, also integrating seamlessly with Asp.NET Core server-side, Web API and shared resources.
      
11. **[`JSopX.VueCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.VueCore/Master/p1/v1/)**:  
    A client-side project built with Vue.js, used for creating reactive, component-driven single-page applications, and integrated seamlessly with Asp.NET Core server-side, Web API and shared resources.
      
12. **[`JSopX.AspNetCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.AspNetCore/Master/p1/v1/)**:   
    As you may have guessed by now, Asp.NET Core serves as the backend infrastructure for the JSopX™ ecosystem, handling routing, security, authentication, and serving APIs to pages. This particular project, however, is just a server-side project that resembles the client-side SPAs.
      
13. **[`JSopX.BlazorServerCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.BlazorServerCore/Master/p1/v1/)**: 
    A project for creating server-side Blazor applications. Similar to `JSopX.AspNetCore`, but only in look and function. Blazor is a game-changer. This project is focused on building interactive web UIs with Blazor's server-side rendering capabilities.
      
14. **[`JSopX.MauiHybridNetCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.MauiHybridNetCore/Master/p1/v1/)**:  
    A cross-platform hybrid application using Asp.NET Core, Blazor & .NET MAUI. When razor components are done right, you are given the ultimate desktop, native and web-based technology cross-platform experience distributor.


## JSopX.OpenProjectX : Technology Requirements

Don't forget that the **`JSopX.OpenProjectX`** Project requires several technologies installed to work as expected.

[`JSopX`](https://github.com/JasonSilvestri/JSopX.OpenProjectX) [`Bootstrap`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`HTML`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`CSS`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`JS`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`TypeScript`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`Visual Studio`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/Technologies/VisualStudios.md) [`Asp.NET Core`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/Technologies/AspNetCore.md) [`.NET Framework SDK`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/Technologies/NetFrameworkSdk.md) [`C#`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/Technologies/AspNetCore.md)  » 
[`All Technology Requirements`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/Technologies.md)  »  [`All Project Repositories`](https://github.com/JasonSilvestri/JSopX.OpenProjectX)  »  [`Back to Top`](#table-of-contents)