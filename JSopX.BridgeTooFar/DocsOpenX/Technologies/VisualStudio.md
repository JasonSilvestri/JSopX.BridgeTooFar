# Visual Studio

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

**`Visual Studio` or `Visual Studio Code` v `17.13.6` is `Required`**

---

[`Home`](../OpenProjects/jsopx.BridgeTooFar/README.md) » [`Introduction`](../Introduction/) »  [`Technologies`](./ReadMe.md) » **[`Visual Studio`](./VisualStudio.md)** · · · [`« Previous`](./ReadMe.md) [`Next »`](./NetFrameworkSdk.md)

---

## Table of Contents


- [Overview](#overview)
- [JSopX™ Project Dependencies](#visual-studio-jsopx-project-dependencies)
- [Check Versions](#visual-studio-checking-versions)
- [Installation](#visual-studio-installation)
- [Downloads & Documentation](#visual-studio-official-downloads--documentation)

---

## **Overview**  

Almost all JSopX™ Open Project EXperiences _require_ `Visual Studio` or `Visual Studio Code` v **`17.13.6`**, to develop and run JSopX™ projects. Installing this version ensures compatibility with the latest .NET Core frameworks and modern web development tools. 

In addition, the IDE needs to be up-to-date to also leverage advanced debugging, code analysis, and project management features.

This section is dedicated to helping you ensure you have the correct `Visual Studio` or `Visual Studio Code` setup, by describing how to check versions, perform installations if necessary, check JSopX™ dependencies, get links to official documentation, and more!

[`Back to Top`](#table-of-contents)

---

## Visual Studio: Checking Versions

Check if `Visual Studio` v **`17.13.6`** (_or higher_) is installed on your device.

### Step-by-Step Instructions: Using Powershell

Use **`Powershell`** Command Line dialog to ensure you have the correct version of `Visual Studio` v `17.13.6` (_or higher_) on your device.
   
1. Open `Powershell`, type the following command, and hit the `Enter` button on your `keyboard`:
   
2. **Powershell Command:**
 
   ```powershell
    # Using Powershell:
    # Check Visual Studio version
   
    dotnet --version 
   ```

3. **Expected Output:** 

  ```
  9.0.100 [C:\Program Files\dotnet\sdk]
  ```
     
 This command checks the `version` of `Visual Studio` on your device, and then prints back your version to the `Powershell` Command Line dialog output.
   
 If you have version `Visual Studio` v **`17.13.6`** (_or higher_), you are _good to go_, and no further action is needed!
   
 If you do not have Visual Studio installed or you version is **`lower`** than `Visual Studio` v **`17.13.6`**, it is recommended that you install it _immediately_ to avoid unexpected results.
 

[`Back to Top`](#table-of-contents)

---
   
## Visual Studio: Installation:

Install `Visual Studio` v **`17.13.6`** (_or higher_) if it is not already installed or found on your device.

#### Step-by-Step Instructions:

You can use **`Powershell`** Command Line dialog again to _install_ the correct version of `Visual Studio` or `Visual Studio Code` v `17.13.6` on your device.
   
1. Open `Powershell`, type the following _command_, and hit the `Enter` button on your `keyboard`:

   ```powershell   
      # Using Powershell:
      # Install Visual Studio 2022 using the Visual Studio Installer (community edition as an example)

      Invoke-WebRequest -Uri "https://aka.ms/vs/17/release/vs_community.exe" -OutFile "vs_community.exe"
      Start-Process -FilePath "vs_community.exe" -ArgumentList "--quiet --wait --norestart" -Wait
    ```
   
2. This command should _install_ all necessary `Visual Studio` or `Visual Studio Code` dependencies and features, and then prints the results of the installation to the `Powershell` Command Line dialog output.
   
[`Back to Top`](#table-of-contents)

---

## **Visual Studio: `JSopX.` Project Dependencies**

`JSopX` projects leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability. Yeah, well, it also adds dependency.

1. **`JSopX.OpenProjectX`**:
   - The [Flagship Project](../Introduction/JSopxProjectsFamilies.md#1-flagship-projects) parent enterprise application solution.
   - **Explore GitHub**: [JSopX.OpenProjectX](https://github.com/JasonSilvestri/JSopX.OpenProjectX)

2. **`JSopX.BridgeTooFar`**:
   - A [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets and project documentation.
   - **Explore GitHub**: [JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar)

3. **`JSopX.ClassLibrary`**:
   - A [Shared Data, Service & Function Project](../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) that houses shared business logic and helper methods.
   - **Explore GitHub**: [JSopX.ClassLibrary](https://github.com/JasonSilvestri/JSopX.ClassLibrary)

4. **`JSopX.WebAPI`**:
   - A [Shared Data, Service & Function Project](../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) which acts as the centrialized **Web API**, used by all projects that access data endpoints in the application.
   - **Explore GitHub**: [JSopX.WebAPI](https://github.com/JasonSilvestri/JSopX.WebAPI)
 
5. **`JSopX.SharedResources`**:
   - A [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets, docs, code, and all the source one would want in a development sand box environment, while using a more traditional approach to **Class Libraries**.
   - **Explore GitHub**: [JSopX.SharedResources](https://github.com/JasonSilvestri/JSopX.SharedResources)
 
6. **`JSopX.RCLxAssets`**:
   - The direct [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) successor of `JSopX.SharedResources` that contains most of the same reusable static assets, docs, code, and all the source, but now instead uses a more modern **Razor Class Library**. 
   - **Explore GitHub**: [JSopX.RCLxAssets](https://github.com/JasonSilvestri/JSopX.RCLxAssets)

7. **`JSopX.RCLxProper`**:
   - An extremely light-weight, [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) version of the `JSopX.Assets` Razor Class Library, specifically designed for Production-Ready environments.
   - **Explore GitHub**: [JSopX.RCLxProper](https://github.com/JasonSilvestri/JSopX.RCLxProper)

8. **`JSopX.RCLxComponents`**:
   - Although there is not much traction is the project as of yet, don't let it fool you. This epic [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) Razor Class Library, Combines Razor components with **.NET MAUI** to create cross-platform applications.
   - **Explore GitHub**: [JSopX.RCLxComponents](https://github.com/JasonSilvestri/JSopX.RCLxComponents)

9. **`JSopX.AspNetCore`**:
   - An **Asp.NET Core** [Server-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) project, created to simulate an existing Asp.NET Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
   - **Explore GitHub**: [JSopX.AspNetCore](https://github.com/JasonSilvestri/JSopX.AspNetCore)

10. **`JSopX.MauiHybridNetCore`**:
    - A **.NET MAUI Hyrbid** [Server-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) cross-platform applications, for desktop applications, native mobile applications, traditional web, while adopting our standards, API and more, and looking damn good doing it too.
    - **Explore GitHub**: [JSopX.MauiHybridNetCore](https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore)

11. **`JSopX.BlazorServerCore`**:
    - A **Blazor Server .NET Core**  [Server-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) project, created to simulate an existing Asp.NET Core Blazor application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.BlazorServerCore](https://github.com/JasonSilvestri/JSopX.BlazorServerCore)

12. **`JSopX.AngularCore`**:
    - An **Angular Core** [Client-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) project, created to simulate an existing Angular Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.AngularCore](https://github.com/JasonSilvestri/JSopX.AngularCore)

13. **`JSopX.ReactCore`**:
    - A **React Core** [Client-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) project, created to simulate an existing React Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.ReactCore](https://github.com/JasonSilvestri/JSopX.ReactCore)
  
14. **`JSopX.VueCore`**:
    - A **Vue Core** [Client-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) created to simulate an existing Vue Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.VueCore](https://github.com/JasonSilvestri/JSopX.VueCore)
  
[`Back to Top`](#table-of-contents)

---

## Visual Studio: Official Downloads & Documentation

> [!WARNING]
> Clicking links in this section will send you to the official `Microsoft` vendor site for `Visual Studio`.
> 

---

Visit the official `Microsoft` vendor site for **`Visual Studio`** if:

1. You are having trouble with installs
2. You would rather manually install **`Visual Studio`** or **`Visual Studio Code`** v **`17.13.6`**
3. You prefer some official vendor documentation first
   
#### Step-by-Step Instructions:
   
1. Download: [Manual Visual Studio Installation](https://visualstudio.microsoft.com/)
2. Read: [Visual Studio Documentation](https://visualstudio.microsoft.com/)

---

[`Home`](../OpenProjects/jsopx.BridgeTooFar/README.md) » [`Introduction`](../Introduction/) »  [`Technologies`](./ReadMe.md) » **[`Visual Studio`](./VisualStudio.md)** · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](./ReadMe.md) [`Next »`](./NetFrameworkSdk.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri