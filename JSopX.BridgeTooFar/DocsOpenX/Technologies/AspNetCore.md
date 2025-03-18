# ASP.NET Core

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

**`ASP.NET Core` v `9.0.1` is `Required`**

---

[`Introduction`](../Introduction/) » [`Technologies`](./ReadMe.md) » **[`ASP.NET Core`](./AspNetCore.md)** · · · [`« Previous`](./NetFrameworkSdk.md) [`Next »`](./NetCoreBlazor.md)

---

## Table of Contents

- [Overview](#overview)
- [JSopX™ Project Dependencies](#aspnet-core-jsopx-project-dependencies)
- [Check Versions](#aspnet-core-checking-versions)
- [Installation](#aspnet-core-installation)
- [Downloads & Documentation](#aspnet-core-official-downloads--documentation)

---

## **Overview**  

Almost all JSopX™ Open Project EXperiences _require_ `ASP.NET Core` v **`9.0.1`** (_or higher_), and is required to `build`, `run`, and `deploy` the server-side components of JSopX™ projects. 

This version provides enhanced performance, security features, and support for modern development practices, ensuring that your applications are efficient and secure.

This section is dedicated to helping you ensure you have the correct `ASP.NET Core` setup, by describing how to check versions, perform installations if necessary, check JSopX™ dependencies, get links to official documentation, and more!


[`Back to Top`](#table-of-contents)

---

## ASP.NET Core: Checking Versions

Check if `ASP.NET Core` v **`9.0.1`** (_or higher_) is installed on your device.

### Step-by-Step Instructions:

Use **`Powershell`** Command Line dialog to ensure you have the correct version of `ASP.NET Core` v `9.0.1` (_or higher_) on your device.
   
1. Open `Powershell`, type the following command, and hit the `Enter` button on your `keyboard`:
   
2. **Powershell Command:**
     ```bash
       dotnet --version
     ```
3. **Expected Output:** 
     ```
      9.0.1
     ```
4. **Purpose:** Checks the currently active .NET SDK version.


These commands check the `version` of `ASP.NET Core` on your device, and then prints back your version to the `Powershell` Command Line dialog output.
   
If you have version `ASP.NET Core` v **`9.0.1`** (_or higher_), you are _good to go_, and no further action is needed!
   
If you do not have ASP.NET Core installed or you version is **`lower`** than `ASP.NET Core` v **`9.0.1`**, it is recommended that you install it _immediately_ to avoid unexpected results.


[`Back to Top`](#table-of-contents)

---


## ASP.NET Core: Installation:

Install `ASP.NET Core` v **`9.0.1`** (_or higher_) if it is not already installed or found on your device.

### Step-by-Step Instructions:

You can use **`Powershell`** Command Line dialog again to `install` the correct version of `ASP.NET Core` v `9.0.1` (_or higher_) on your device.
   
1. Open `Powershell`, type the following _command_, and hit the `Enter` button on your `keyboard`:

2. **Powershell Command:**
   ```powershell
    # Using Powershell:
    # Install Asp.NET SDK 9.0
    winget install Microsoft.DotNet.SDK.9
   ```
    
3. This command should _install_ all necessary `ASP.NET Core` dependencies and features, and then prints the results of the installation to the `Powershell` Command Line dialog output.

[`Back to Top`](#table-of-contents)

---

## **ASP.NET Core: `JSopX.` Project Dependencies**

`JSopX` projects leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability. Yeah, well, it also adds dependency.

1. **`JSopX.OpenProjectX`**:
   - The [Flagship Project](../Introduction/JSopxProjectsFamilies.md#1-flagship-projects) parent enterprise application solution.
   - **Explore GitHub**: [JSopX.OpenProjectX](../OpenProjects/jsopx.OpenProjectX)

2. **`JSopX.BridgeTooFar`**:
   - A [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets and project documentation.
   - **Explore GitHub**: [JSopX.BridgeTooFar](../OpenProjects/jsopx.BridgeTooFar)

3. **`JSopX.ClassLibrary`**:
   - A [Shared Data, Service & Function Project](../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) that houses shared business logic and helper methods.
   - **Explore GitHub**: [JSopX.ClassLibrary](../OpenProjects/jsopx.ClassLibrary)

4. **`JSopX.WebAPI`**:
   - A [Shared Data, Service & Function Project](../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) which acts as the centrialized **Web API**, used by all projects that access data endpoints in the application.
   - **Explore GitHub**: [JSopX.WebAPI](../OpenProjects/jsopx.WebAPI)
 
5. **`JSopX.SharedResources`**:
   - A [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets, docs, code, and all the source one would want in a development sand box environment, while using a more traditional approach to **Class Libraries**.
   - **Explore GitHub**: [JSopX.SharedResources](../OpenProjects/jsopx.SharedResources)
 
6. **`JSopX.RCLxAssets`**:
   - The direct [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) successor of `JSopX.SharedResources` that contains most of the same reusable static assets, docs, code, and all the source, but now instead uses a more modern **Razor Class Library**. 
   - **Explore GitHub**: [JSopX.RCLxAssets](../OpenProjects/jsopx.RCLxAssets)

7. **`JSopX.RCLxProper`**:
   - An extremely light-weight, [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) version of the `JSopX.Assets` Razor Class Library, specifically designed for Production-Ready environments.
   - **Explore GitHub**: [JSopX.RCLxProper](../OpenProjects/jsopx.RCLxProper)

8. **`JSopX.RCLxComponents`**:
   - Although there is not much traction is the project as of yet, don't let it fool you. This epic [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) Razor Class Library, Combines Razor components with **.NET MAUI** to create cross-platform applications.
   - **Explore GitHub**: [JSopX.RCLxComponents](../OpenProjects/jsopx.RCLxComponents)

9. **`JSopX.AspNetCore`**:
   - An **Asp.NET Core** [Server-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) project, created to simulate an existing Asp.NET Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
   - **Explore GitHub**: [JSopX.AspNetCore](../OpenProjects/jsopx.AspNetCore)

10. **`JSopX.MauiHybridNetCore`**:
    - A **.NET MAUI Hyrbid** [Server-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) cross-platform applications, for desktop applications, native mobile applications, traditional web, while adopting our standards, API and more, and looking damn good doing it too.
    - **Explore GitHub**: [JSopX.MauiHybridNetCore](../OpenProjects/jsopx.MauiHybridNetCore)

11. **`JSopX.BlazorServerCore`**:
    - A **Blazor Server .NET Core**  [Server-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) project, created to simulate an existing Asp.NET Core Blazor application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.BlazorServerCore](../OpenProjects/jsopx.BlazorServerCore)

12. **`JSopX.AngularCore`**:
    - An **Angular Core** [Client-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) project, created to simulate an existing Angular Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.AngularCore](../OpenProjects/jsopx.AngularCore)

13. **`JSopX.ReactCore`**:
    - A **React Core** [Client-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) project, created to simulate an existing React Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.ReactCore](../OpenProjects/jsopx.ReactCore)
  
14. **`JSopX.VueCore`**:
    - A **Vue Core** [Client-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) created to simulate an existing Vue Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.VueCore](../OpenProjects/jsopx.VueCore)
  
[`Back to Top`](#table-of-contents)

---

## ASP.NET Core: Official Downloads & Documentation

> [!WARNING]
> Clicking links in this section will send you to the official `Microsoft` vendor site for `ASP.NET Core`.
> 

---

Visit the official `Microsoft` vendor site for **`ASP.NET Core`** if:

1. You are having trouble with installs
2. You would rather manually install **`ASP.NET Core`** v **`9.0.1`**
3. You prefer some official vendor documentation first
   
#### Step-by-Step Instructions:
   
1. Download: [Manual ASP.NET Core Installation](https://dotnet.microsoft.com/download/dotnet/9.0)
2. Read: [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core/)

---

[`Introduction`](../Introduction/) » [`Technologies`](./ReadMe.md) » **[`ASP.NET Core`](./AspNetCore.md)** · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](./NetFrameworkSdk.md) [`Next »`](./NetCoreBlazor.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri