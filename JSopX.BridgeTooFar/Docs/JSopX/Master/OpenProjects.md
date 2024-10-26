
# JSopX™ Open Projects

From the ﻿jSilvestri.com BETA v 2024 JSopX™ Open Project EXperiences Collection of Projects


> [!WARNING]
> The **`JSopX.OpenProjectX`** (_JSopX™ Open Project EXperiences Collection_) Project requires **over a dozen** technologies in order for all projects and features currently available to work as expected. Please try your best to do your do-dillagence in ensuring your technologies stacks are installed and up-to-date.
This section is to help in that area.




> [!CAUTION]
> **Phase 1: Minimum Viable Product (MVP)**
> 
> This project is currently in **Phase 1** of Development. It **should not** be considered **accurate** or a **release candidate**. In fact, it should be treated as simply reference material for the time being, due to the absolute bare minimum resources created, to satisfy a minimum viable product requirement in Phase 1 (by design). Conversely, Phase 2 is days away, and Phase 3 is only a week after that. Phase 3 Projects will be mature, and action-packed with features, assets, documentation and more!
> 
> Please see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases/Phase-1-Minimum-Viable-Product-MVP.md) for more details.




### Current Alerts

> [!IMPORTANT]
> This document is still  **regularly being updated**. It is important to regularly check back for updates until this `Current Alert` is no longer visible.


## Prerequisites

﻿
- Visual Studio 2022 or higher installed.
- Basic understanding of `.csproj` and `.targets` file structures.



[Back to Top](#table-of-contents)

## Corequisites

﻿
- Ensure you are pro-active in at least your own checklist of action items if you do not plan to follow the phases of development. Even setting up Jira, DevOps, or some basic ticket system is better than nothing.


[Back to Top](#table-of-contents)

## Postrequisites

﻿
- Clean and rebuild each project after making changes to ensure all changes are working as expected before starting a new phase.


[Back to Top](#table-of-contents)

## Concomitants

﻿
- You may need to update Git configurations to handle dependencies between projects. As they app grows, there will be updates to repositories and projects over all that require certain configurations you may or may not be familar with, such as using Git submodules or Git subtree, to ensure all projects can be cloned in an all-in-one project (e.g., `JSopX.OpenProjectX`) or by independent project isolation for a unique educational user experience not common in most projects.


[Back to Top](#table-of-contents)

# All JSopX™ Open Project EXperiences

﻿
## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Corequisites](#corequisites)
  - [Postrequisites](#postrequisites)
  - [Concomitants](#concomitants)
  
1.  **[`JSopX.OpenProjectX`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/)**:
    The central or parent project that oversees and coordinates the various subprojects within the JSopX™ suite. It could serve as the main entry point or orchestration layer for the entire solution.
      
2.  **[`JSopX.ClassLibrary`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.ClassLibrary/Master/p1/v1/)**:    
    This project focuses on managing static assets and their distribution across the different client-side and server-side applications. It ensures a clean separation of concerns, particularly around asset management.
      
3.  **[`JSopX.BridgeTooFar`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.BridgeTooFar/Master/p1/v1/)**:  
    A shared library project containing reusable logic, utilities, or components that can be referenced by other projects. This is where you might place common business logic or helper functions.
      
4.  **[`JSopX.WebAPI`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.WebAPI/Master/p1/v1/)**:
    A project dedicated to building RESTful APIs for the JSopX™ ecosystem. It provides endpoints for various data services and might serve as the backend for client applications.
      
5.  **[`JSopX.SharedResources`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.SharedResources/Master/p1/v1/)**:
    A traditional central repository for shared resources such as images, fonts, scripts, and localized strings. This project ensures that all other projects have consistent access to these resources in the initial phases of development, supporting both client-side applications and the server-side.
      
6.  **[`JSopX.RCLxProper`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.RCLxProper/Master/p1/v1/)**:
    A production-ready, lightweight Razor Class Library project that includes properly structured Razor components, pages, views, and more! These elements can be shared across different Blazor and Razor-based applications.
      
7.  **[`JSopX.RCLxAssets`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.RCLxAssets/Master/p1/v1/)**: 
    The successor to `JSopX.SharedResources`, incorporating more modern approaches as a Razor Class Library dedicated to managing static assets like CSS, JavaScript, and other resources. It efficiently bundles and serves these assets across projects.
      
8.  **[`JSopX.RCLxProper`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.RCLxComponents/Master/p1/v1/)**: 
    Another Razor Class Library focused on reusable UI components. These components can be utilized in various Blazor and ASP.NET Core applications to maintain consistency in the UI.
      
9.  **[`JSopX.AngularCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.AngularCore/Master/p1/v1/)**: 
    A client-side project built with Angular. This project likely focuses on creating dynamic, single-page applications with Angular, integrating seamlessly with the server-side and shared resources.
      
10. **[`JSopX.ReactCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.ReactCore/Master/p1/v1/)**:  
    A client-side project built with React. Similar to AngularCore, it is used to create dynamic, component-based single-page applications.
      
11. **[`JSopX.VueCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.VueCore/Master/p1/v1/)**:  
    A client-side project built with Vue.js, used for creating reactive, component-driven single-page applications.
      
12. **[`JSopX.AspNetCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.AspNetCore/Master/p1/v1/)**:   
    A server-side project that resembles the client-side apps, serving as the backend infrastructure for the JSopX™ ecosystem, likely handling routing, authentication, and serving APIs or pages.
      
13. **[`JSopX.BlazorServerCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.BlazorServerCore/Master/p1/v1/)**: 
    A project for creating server-side Blazor applications. This project could be focused on building interactive web UIs with Blazor's server-side rendering capabilities.
      
14. **[`JSopX.MauiHybridNetCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX.MauiHybridNetCore/Master/p1/v1/)**:  
    A project for building cross-platform applications using .NET MAUI with a hybrid approach, possibly combining native and web-based technologies for a flexible, cross-platform experience.

- [In Conclusion](#in-conclusion)

## JSopX™ Open Project EXperiences Technology Requirements

Don't forget that the **`JSopX.OpenProjectX`** Project requires several technologies installed to work as expected.

[`JSopX™ Open Project EXperiences Technology Requirements`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies.md)  »  [`JSopX™ Open Project EXperiences`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/OpenProjects.md)  »  [`Back to Top`](#table-of-contents)


## In Conclusion

﻿
This Technology Requirement List may grow, including better breakdowns of business requirements, documentation, etc.


---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2024 - All Rights Reserved by Jason Silvestri