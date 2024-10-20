# JSopX™ Open Project EXperiences : Class Library

From the ﻿jSilvestri.com BETA v 2024 JSopX™ Open Project EXperiences Collection of Projects


> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate**. In fact, drafts will often times be for different reasons, such as testing styles, content, etc. The content itself may have only been used as a placeholder, making sections, or even the entire document contain information not relative to this project.


## Overview

![JSopX™ Open Project EXperiences Collection of Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/JsopX-Splash-Screen.png)

The `JSopX.ClassLibrary` Project (i.e., _jSilvestri.com BETA v 2024 JSopX™ Class Library Open Project EXperience_) is one of several, FREE, open-source projects, included in the first-of-its-kind, Multi-Platform, Multi-Stack, `JSopX™ Open Project EXperiences Collection` Enterprise-Level Application.

This homogeneous suite of JSopX™ projects, uses some of the most advanced client-side and server-side technologies of today, such as Asp.NET Core, Blazor, .NET MAUI, Angular, React, Node.JS, Vue &amp; more! All access the same server-side Web API, while using the same client-side, look-and-feel resources and assets across all projects, constructed as a centeralized, unified, enterprise-level soluiton, and available as responsive web designs for most mobile, tablet, laptop & desktop web browsers, as a Windows, Linux and Mac desktop application, and as a native mobile app for Iphone, Android, Samsung Galaxy and Windows Phone.


![JSopX™ Open Project EXperiences Assets Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/bootstrap-themes.png)



> [!CAUTION]
> **Phase 1: Minimum Viable Product (MVP)**
> 
> This project is currently in **Phase 1** of Development. It **should not** be considered **accurate** or a **release candidate**. In fact, it should be treated as simply reference material for the time being, due to the absolute bare minimum resources created, to satisfy a minimum viable product requirement in Phase 1 (by design). Conversely, Phase 2 is days away, and Phase 3 is only a week after that. Phase 3 Projects will be mature, and action-packed with features, assets, documentation and more!
> 
> Please see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases/Phase-1-Minimum-Viable-Product-MVP.md) for more details.


## Table of Contents

- [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Alerts](#alerts)
    - [Current Alerts](#current-alerts)
- [Prerequisites](#prerequisites)
- [Corequisites](#corequisites)
- [Postrequisites](#postrequisites)
- [Concomitants](#concomitants)
- [JSopX™ Class Library Structure](#jsopx-class-library-structure)
- [Getting Started](#getting-started)
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


- Visual Studio 2022 (17.11.5) or higher installed.
- Existing JSopX projects (e.g., `JSopX.BridgeTooFar`, `JSopX.ClassLibrary`, `JSopX.WebAPI`, etc.).
- Installed .NET 8.0.7 SDK.
- Installed Node.js 20.14.0
- Basic understanding of `.csproj` and `.sln` file structures.


[Back to Top](#table-of-contents)

## Corequisites

﻿
- Ensure the latest Class Library constants, enums, and other settings are up-to-date


[Back to Top](#table-of-contents)

## Postrequisites

﻿
- Clean and rebuild each project after making changes to ensure includes are properly configured.


[Back to Top](#table-of-contents)

## Concomitants

﻿
- You do not need to install technologies mentioned in the [Prerequisites](#prerequisites) section just to review the markdown files under `Docs`.


[Back to Top](#table-of-contents)

## JSopX™ Class Library Structure

The project is organized into the following structure:

### Constants

- **JsopxConstants.cs**: Contains constant values used across the application, such as JWT settings.

### Enums

- **JsopxEnums.cs**: Defines enums for user roles within the application.

### Helpers

- **JwtHelper.cs**: Provides methods for generating and validating JWT tokens.


## Getting Started

﻿
> [!WARNING]
> This section describes a typical cloning operaton. Conversely, to mimic the collective JSopX project architecture takes some extra effort to fully implement "AS-IS".
> 
> **To mimic the advanced cloning of the collective `JSopX.OpenProjectX` project suite, please see, [JSopX.OpenProjectX](https://github.com/JasonSilvestri/JSopX.OpenProjectX) for details.**

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/JasonSilvestri/JSopX.ClassLibrary.git
    ```

2. **Open the solution in Visual Studio**:

    - Open `JSopX.ClassLibrary.sln` in Visual Studio.

3. **Build the project**:

    - Right-click on the solution in Solution Explorer and select `Build Solution`.


[Back to Top](#table-of-contents)


## Usage

#### Adding the JSopX™ Class Library to Other Projects

1. **Add Project Reference**:

    - In the solution that requires the common library, right-click on the project in Solution Explorer.
    - Select `Add` > `Reference`.
    - Check the box for `JSopX.ClassLibrary` and click `OK`.

2. **Use the Common Code**:

    - You can now use the constants, enums, and helpers from the `JSopX.ClassLibrary` in your other projects.

#### Example Usage

**Using Constants**:

```csharp
using JSopX.ClassLibrary.JsopxConstants;

public class ExampleService
{
    public void PrintJwtSettings()
    {
        Console.WriteLine($"Issuer: {JsopxConstants.WebAppDemoSettings.JwtIssuer}");
        Console.WriteLine($"Audience: {JsopxConstants.WebAppDemoSettings.JwtAudience}");
        Console.WriteLine($"Key: {JsopxConstants.WebAppDemoSettings.JwtKey}");
    }
}
```


The `JSopX.ClassLibrary` Project (i.e., _jSilvestri.com BETA v 2024 JSopX™ Class Library Open Project EXperience_) is one of several, FREE, open-source projects, included in the first-of-its-kind, Multi-Platform, Multi-Stack, `JSopX™ Open Project EXperiences Collection` Enterprise-Level Application.

By centralizing project properties, filters, and other static, constants, this approach to basic object oriented coding should be one of the first things you do when extending your projects, especially with referencing the `JSopX.ClassLibrary` across projects.

[Back to Top](#table-of-contents)


---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2024 - All Rights Reserved by Jason Silvestri