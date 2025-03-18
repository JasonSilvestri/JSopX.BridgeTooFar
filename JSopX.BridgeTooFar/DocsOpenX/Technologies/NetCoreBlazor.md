# .NET Core Blazor

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

**`.NET Core Blazor` v `9.0.1` is `Required`**

---

[`Introduction`](../Introduction/) » [`Technologies`](./ReadMe.md) » **[`.NET Core Blazor`](./NetCoreBlazor.md)** · · · [`« Previous`](./AspNetCore.md) [`Next »`](./NetCoreMauiHybrid.md)

---

## Table of Contents

- [Overview](#overview)
- [JSopX™ Project Dependencies](#net-core-blazor-jsopx-project-dependencies)
- [Check Versions](#net-core-blazor-checking-versions)
- [Installation](#net-core-blazor-installation)
- [Downloads & Documentation](#net-core-blazor-official-downloads--documentation)

---

## **Overview**  

The JSopX™ Open Project EXperiences _require_ `.NET Core Blazor` v **`9.0.1`** (_or higher_) for projects that use `.NET Core Blazor`. This version supports building interactive web UIs with C# instead of JavaScript, enabling full-stack development with a unified technology stack. 

Ensure your `.NET Core Blazor` environment is updated to this version for optimal performance and compatibility.

This section is dedicated to helping you ensure you have the correct `.NET Core Blazor` setup, by describing how to check versions, perform installations if necessary, check JSopX™ dependencies, get links to official documentation, and more!


[`Back to Top`](#table-of-contents)

---

## .NET Core Blazor: Checking Versions

Check if `.NET Core Blazor` v **`9.0.1`** (_or higher_) is installed on your device.

### Step-by-Step Instructions:

Use **`Powershell`** Command Line dialog to ensure you have the correct version of `.NET Core Blazor` v `9.0.1` (_or higher_) on your device.
   
1. Open `Powershell`, type the following command, and hit the `Enter` button on your `keyboard`:
   
2. **Powershell Command:**
    ```bash
     dotnet --list-sdks
    ```
3. **Expected Output:** 
     ```
      9.0.100 [C:\Program Files\dotnet\sdk]
     ```
4. **Purpose:** Lists all installed .NET SDKs.
5. **Example Use:**
     ```powershell
      dotnet --list-sdks | Select-String "9.0.100"
     ```

These commands check the `version` of `.NET Core Blazor` on your device, and then prints back your version to the `Powershell` Command Line dialog output.
   
If you have version `.NET Core Blazor` v **`9.0.1`** (_or higher_), you are _good to go_, and no further action is needed!
   
If you do not have .NET Core Blazor installed or you version is **`lower`** than `.NET Core Blazor` v **`9.0.1`**, it is recommended that you install it _immediately_ to avoid unexpected results.


[`Back to Top`](#table-of-contents)

---


## .NET Core Blazor: Installation:

Install `.NET Core Blazor` v **`9.0.1`** (_or higher_) if it is not already installed or found on your device.

### Step-by-Step Instructions:

You can use **`Powershell`** Command Line dialog again to `install` the correct version of `.NET Core Blazor` v `9.0.1` (_or higher_) on your device.
   
1. Open `Powershell`, type the following _command_, and hit the `Enter` button on your `keyboard`:

2. **Powershell Command:**
   ```powershell
     # Using Powershell:
     # Install Blazor WebAssembly template
     dotnet new install Microsoft.AspNetCore.Components.WebAssembly.Templates::9.0.0
   ```
    
3. This command should _install_ all necessary `.NET Core Blazor` dependencies and features, and then prints the results of the installation to the `Powershell` Command Line dialog output.

[`Back to Top`](#table-of-contents)

---

## **.NET Core Blazor: `JSopX.` Project Dependencies**

`JSopX` projects leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability. Yeah, well, it also adds dependency.

1. **`JSopX.OpenProjectX`**:
   - The [Flagship Project](../Introduction/JSopxProjectsFamilies.md#1-flagship-projects) parent enterprise application solution.
   - **Explore GitHub**: [JSopX.OpenProjectX](../OpenProjects/jsopx.OpenProjectX)

2. **`JSopX.RCLxComponents`**:
   - Although there is not much traction is the project as of yet, don't let it fool you. This epic [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) Razor Class Library, Combines Razor components with **.NET MAUI** to create cross-platform applications.
   - **Explore GitHub**: [JSopX.RCLxComponents](../OpenProjects/jsopx.RCLxComponents)

3. **`JSopX.BlazorServerCore`**:
    - A **Blazor Server .NET Core** [Server-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) project, created to simulate an existing .NET Core Blazor Blazor application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.BlazorServerCore](../OpenProjects/jsopx.BlazorServerCore)
  
[`Back to Top`](#table-of-contents)

---

## .NET Core Blazor: Official Downloads & Documentation

> [!WARNING]
> Clicking links in this section will send you to the official `Microsoft` vendor site for `.NET Core Blazor`.
> 

---

Visit the official `Microsoft` vendor site for **`.NET Core Blazor`** if:

1. You are having trouble with installs
2. You would rather manually install **`.NET Core Blazor`** v **`9.0.1`**
3. You prefer some official vendor documentation first
   
#### Step-by-Step Instructions:
   
1. Download: [Manual .NET Core Blazor Installation](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
2. Read: [.NET Core Blazor Documentation](https://learn.microsoft.com/en-us/aspnet/core/blazor/)

---

[`Introduction`](../Introduction/) » [`Technologies`](./ReadMe.md) » **[`.NET Core Blazor`](./NetCoreBlazor.md)** · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](./AspNetCore.md) [`Next »`](./NetCoreMauiHybrid.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri