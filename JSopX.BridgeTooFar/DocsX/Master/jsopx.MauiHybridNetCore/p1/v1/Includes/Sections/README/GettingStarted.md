﻿﻿

> [!WARNING]
> This section describes a typical cloning operaton. Conversely, to mimic the collective JSopX project architecture takes some extra effort to fully implement "AS-IS".
> 
> **To mimic the advanced cloning of the collective `JSopX.OpenProjectX` project suite (how it is possible to have `all-projects-in-one` and `independent-projects` installations), please see, [JSopX™ Visual Studio Projects GitHub Advanced](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/Master/JSopX/Introduction/JSopxProjectsGitHubAdvanced.md) for details.**
>



## JSopX.MauiHybridNetCore : Installation

You can install the **`JSopX.MauiHybridNetCore`** Project **independently** by cloning the Git Repository.

#### Step by Step Instructions:

1. _Clone_ **`JSopX.MauiHybridNetCore`** Git Repository:
    ```powershell
       # Using PowerShell: Clone JSopX.MauiHybridNetCore Git Repository
    
       # 1. Navigate to the desired local directory you plan to clone the repository
       # to on your computer
       cd path\to\local\repo\JasonSilvestri\JSopX.MauiHybridNetCore
    
       # 2. Clone JSopX.MauiHybridNetCore Git Repository       
       git clone https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore.git
    ```
    
2. _Open_ the solution in `Visual Studio`:

    - **Open** **`JSopX.MauiHybridNetCore.sln`** in Visual Studio 2022 or higher.

3. _Build_ the `Project`:

    - **Right-click** on the solution in `Solution Explorer` and select `Build Solution`.
      
4. _Run_ the `Project`:

    - **Click** on the `Run` button in `Visual Studio` to run the project.


## JSopX.MauiHybridNetCore : Project References

What makes the **`JSopX.MauiHybridNetCore`** Project—and the entire JSopX™ Open Project EXperiences collection—so versatile, even as an enterprise-level suite, is each project's ability to include and reuse '_Project References_.' These references are shared resources that enhance collaboration and efficiency across projects.

The _Project References_ included in the **`JSopX.MauiHybridNetCore`** Project are as follows:

1. **[`JSopX.BridgeTooFar`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.BridgeTooFar/p1/v1/)**: 
    - A new project being developed, containing base static reusable assets often derived by the primary Maui Hybrid .Net Core, Class Libraries and Razor Class Libraries.
   

2. **[`JSopX.ClassLibrary`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.ClassLibrary/p1/v1/)**
    - A shared library project containing reusable logic, utilities, or components that can be referenced by other projects. This is where you might place common business logic or helper functions.

    
3. [`JSopX.RCLxProper`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.RCLxProper/p1/v1/):
    - A lightweight, production-optimized Razor Class Library containing only essential assets and resources for live environments.
    

4. [`JSopX.WebAPI`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.WebAPI/p1/v1/):
    - A project which implements an ASP.NET Core Web API, serving as the back-end for the various web, desktop & mobile applications which exist in the JSopX™ Open Project EXperiences Collection of Projects. It provides RESTful API endpoints for data retrieval and manipulation, showcasing best practices in API development and integration.
 
## JSopX.MauiHybridNetCore : Technology Requirements

Don't forget that the **`JSopX.MauiHybridNetCore`** Project requires certain technologies installed to work as expected.


[`JSopX`](https://github.com/JasonSilvestri/JSopX.OpenProjectX) [`Bootstrap`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`HTML`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`CSS`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`JS`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`TypeScript`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/CommonTechnologiesIncluded.md) [`Visual Studio`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/VisualStudios.md) [`Asp.NET Core`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/AspNetCore.md) [`.NET Framework SDK`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/NetFrameworkSdk.md) [`C#`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/AspNetCore.md) [`.Net Core Blazor`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/NetCoreBlazor.md)  [`.Net Core Maui Hybrid`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies/NetCoreMauiHybrid.md)  » 
[`All Technology Requirements`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/Master/jsopx.MauiHybridNetCore/p1/v1/Technologies.md)  »  [`All Project Repositories`](https://github.com/JasonSilvestri/JSopX.OpenProjectX)  »  [`Back to Top`](#table-of-contents)