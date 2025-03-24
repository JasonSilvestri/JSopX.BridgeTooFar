# .NET Core MAUI Hybrid

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

**`.NET Core MAUI Hybrid` v `9.0.1` is `Required`**

---

[`Home`](../OpenProjects/jsopx.BridgeTooFar/README.md) » [`Introduction`](../Introduction/) »  [`Technologies`](./ReadMe.md) » **[`.NET Core MAUI Hybrid`](./NetCoreMauiHybrid.md)** · · · [`« Previous`](./NetCoreBlazor.md) [`Next »`](./Node.md)

---

## Table of Contents

- [Overview](#overview)
- [JSopX™ Project Dependencies](#net-core-maui-hybrid-jsopx-project-dependencies)
- [Check Versions](#net-core-maui-hybrid-checking-versions)
- [Installation](#net-core-maui-hybrid-installation)
- [Downloads & Documentation](#net-core-maui-hybrid-official-downloads--documentation)

---

## **Overview**  

For cross-platform applications within the JSopX™ ecosystem, the JSopX™ Open Project EXperiences _require_ `.NET Core MAUI Hybrid` v **`9.0.1`** (_or higher_). This framework allows you to build native apps for Android, iOS, macOS, and Windows with a single codebase. Ensure you have this version or newer installed to develop and run JSopX™ mobile and desktop applications.

Ensure you have this version or newer installed to develop and run JSopX™ mobile and desktop applications.

This section is dedicated to helping you ensure you have the correct `.NET Core MAUI Hybrid` setup, by describing how to check versions, perform installations if necessary, check JSopX™ dependencies, get links to official documentation, and more!


[`Back to Top`](#table-of-contents)

---

## .NET Core MAUI Hybrid: Checking Versions

Check if `.NET Core MAUI Hybrid` v **`9.0.1`** (_or higher_) is installed on your device.

### Step-by-Step Instructions:

Use **`Powershell`** Command Line dialog to ensure you have the correct version of `.NET Core MAUI Hybrid` v `9.0.1` (_or higher_) on your device.
   
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

These commands check the `version` of `.NET Core MAUI Hybrid` on your device, and then prints back your version to the `Powershell` Command Line dialog output.
   
If you have version `.NET Core MAUI Hybrid` v **`9.0.1`** (_or higher_), you are _good to go_, and no further action is needed!
   
If you do not have .NET Core MAUI Hybrid installed or you version is **`lower`** than `.NET Core MAUI Hybrid` v **`9.0.1`**, it is recommended that you install it _immediately_ to avoid unexpected results.


[`Back to Top`](#table-of-contents)

---


## .NET Core MAUI Hybrid: Installation:

Install `.NET Core MAUI Hybrid` v **`9.0.1`** (_or higher_) if it is not already installed or found on your device.

### Step-by-Step Instructions:

You can use **`Powershell`** Command Line dialog again to `install` the correct version of `.NET Core MAUI Hybrid` v `9.0.1` (_or higher_) on your device.
   
1. Open `Powershell`, type the following _command_, and hit the `Enter` button on your `keyboard`:

2. **Powershell Command:**
    ```powershell
        # Install .NET MAUI workload
        dotnet workload install maui
    ```
    
3. This command should _install_ all necessary `.NET Core MAUI Hybrid` dependencies and features, and then prints the results of the installation to the `Powershell` Command Line dialog output.

[`Back to Top`](#table-of-contents)

---

## **.NET Core MAUI Hybrid: `JSopX.` Project Dependencies**

`JSopX` projects leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability. Yeah, well, it also adds dependency.

1. **`JSopX.OpenProjectX`**:
   - The [Flagship Project](../Introduction/JSopxProjectsFamilies.md#1-flagship-projects) parent enterprise application solution.
   - **Explore GitHub**: [JSopX.OpenProjectX](../OpenProjects/jsopx.OpenProjectX)

2. **`JSopX.RCLxComponents`**:
   - Although there is not much traction is the project as of yet, don't let it fool you. This epic [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) Razor Class Library, Combines Razor components with **.NET MAUI** to create cross-platform applications.
   - **Explore GitHub**: [JSopX.RCLxComponents](../OpenProjects/jsopx.RCLxComponents)

3. **`JSopX.MauiHybridNetCore`**:
    - A **.NET MAUI Hyrbid** [Server-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) cross-platform applications, for desktop applications, native mobile applications, traditional web, while adopting our standards, API and more, and looking damn good doing it too.
    - **Explore GitHub**: [JSopX.MauiHybridNetCore](../OpenProjects/jsopx.MauiHybridNetCore)

[`Back to Top`](#table-of-contents)

---

## .NET Core MAUI Hybrid: Official Downloads & Documentation

> [!WARNING]
> Clicking links in this section will send you to the official `Microsoft` vendor site for `.NET Core MAUI Hybrid`.
> 

---

Visit the official `Microsoft` vendor site for **`.NET Core MAUI Hybrid`** if:

1. You are having trouble with installs
2. You would rather manually install **`.NET Core MAUI Hybrid`** v **`9.0.1`**
3. You prefer some official vendor documentation first
   
#### Step-by-Step Instructions:
   
1. Download: [Manual .NET Core MAUI Hybrid Installation](https://dotnet.microsoft.com/apps/maui)
2. Read: [.NET Core MAUI Hybrid Documentation](https://learn.microsoft.com/en-us/dotnet/maui/)

---

[`Home`](../OpenProjects/jsopx.BridgeTooFar/README.md) » [`Introduction`](../Introduction/) »  [`Technologies`](./ReadMe.md) » **[`.NET Core MAUI Hybrid`](./NetCoreMauiHybrid.md)** · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](./NetCoreBlazor.md) [`Next »`](./Node.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri