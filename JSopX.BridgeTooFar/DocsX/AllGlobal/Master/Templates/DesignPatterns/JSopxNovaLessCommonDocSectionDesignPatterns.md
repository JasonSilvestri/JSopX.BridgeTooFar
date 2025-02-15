# Less Common JSopX™ Document Section(s) Design Patterns

---

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection of Projects**

---


[`Introduction`](../Introduction/) » [`Design Patterns`](../DesignPatterns/) » **`Less Common Doc Section Design Patterns`**   · · · [`« Previous`](./JSopxNovaDocumentSectionDesignPatterns.md) [`Next »`](../DesignPatterns/)

---

## Table of Contents

- [Overview](#overview)
- [Usage Section](#usage-section)
- [Extended Usage Section](#extended-usage-section)
- [Checking Version Section](#checking-version-section)
- [Installation Section](#installation-section)
- [Documentation Section](#documentation-section)
- [`JSopX.` Dependencies Section](#jsopx-dependencies-section)
- [Common Technologies Section](#common-technologies-section)

---

## **Overview**

The following sections are less common sections found in static markdown documents and templates, like "Technology" documents, "Project" documents, etc. These design patterns include examples for these less common sections.

[`Back to Top`](#table-of-contents)

---

## **Usage Section**

Some documents have a `Usage` section, which almost always describes a **Step-by-Step Instructions** that show how to Use or Implement the primary topic of the document. 

**Example for `Usage Section`**:

Let's picture our custom `Razor Class Library`, named, `JsopX.BridgeTooFar`. Our other projects want to use it.

```markdown

## Usage

### Reference the Razor Class Library Project

1. **Add a project reference** to `JsopX.BridgeTooFar` in each client project:
    - Right-click on the client project (e.g., `JsopX.AngularCore`, `JsopX.ReactCore`, `JsopX.VueCore`, `JsopX.BlazorServerCore`).
    - Select **Add** > **Project Reference**.
    - Check `JsopX.BridgeTooFar` and click **OK**.

```

[`Back to Top`](#table-of-contents)

---

## **Extended Usage Section**

`Instruction Blocks` and other `Usage` sections will often have a bullet list of extended use cases that we need to create. 

An `Extended Usage` section, which almost always describes a **Step-by-Step Instructions** that show how to Use or Implement the primary topic of the document, using additional, extended use cases. 

**Example for `Extended Usage Section`**:

Let's picture our custom `Razor Class Library`, named, `JsopX.BridgeTooFar`. Our other projects want to use it.

````markdown

## Extended Usage

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
````

[`Back to Top`](#table-of-contents)

---

## **Checking Version Section**

Some documents have a `Checking Version` section, which almost always describes a **Step-by-Step Instructions** that show how to check version of the primary topic of the document. 

**Example for `Checking Version Section`**:

Let's picture we are checking `Visual Studio` version. 

```markdown

## Checking Version 

Check if `Visual Studio` v **`17.12.3`** (_or higher_) is installed on your device.

#### Step-by-Step Instructions:

Use **`Powershell`** Command Line dialog to ensure you have the correct version of `Visual Studio` v `17.12.3` (_or higher_) on your device.
   
1. Open `Powershell`, type the following command, and hit the `Enter` button on your `keyboard`:
   
   ```powershell
      # Using Powershell:
      # Check Visual Studio version
   
      dotnet --version
    ```
   
2. This command checks the `version` of `Visual Studio` on your device, and then prints back your version to the `Powershell` Command Line dialog output.
   
3. If you have version `Visual Studio` v **`17.12.3`** (_or higher_), you are _good to go_, and no further action is needed!
   
If you do not have Visual Studio installed or you version is **`lower`** than `Visual Studio` v **`17.12.3`**, it is recommended that you install it _immediately_ to avoid unexpected results.

```

[`Back to Top`](#table-of-contents)

---

## **Installation Section**

Some documents have a `Getting Started` or an `Installation` section, which almost always describes a **Step-by-Step Instructions** that show how to check version of the primary topic of the document. 

**Example for `Installing Section`**:

Let's picture we are installing `Visual Studio` version. 

```markdown

## Install Visual Studio

Install `Visual Studio` v **`17.12.3`** (_or higher_) if it is not already installed or found on your device.

#### Step-by-Step Instructions:

You can use **`Powershell`** Command Line dialog again to `install` the correct version of `Visual Studio` or `Visual Studio Code` v `17.12.3` (_or higher_) on your device.
   
1. Open `Powershell`, type the following _command_, and hit the `Enter` button on your `keyboard`:

   ```powershell   
      # Using Powershell:
      # Install Visual Studio 2022 using the Visual Studio Installer (community edition as an example)

      Invoke-WebRequest -Uri "https://aka.ms/vs/17/release/vs_community.exe" -OutFile "vs_community.exe"
      Start-Process -FilePath "vs_community.exe" -ArgumentList "--quiet --wait --norestart" -Wait
    ```
   
2. This command should _install_ all necessary `Visual Studio` or `Visual Studio Code` dependencies and features, and then prints the results of the installation to the `Powershell` Command Line dialog output.


```

[`Back to Top`](#table-of-contents)

---

## **Documentation Section**

Some documents have a `Documentation` section, which is generally direct vendor documentation references for things like technologies. 

**Example for `Documentation Section`**:

Let's picture we are needing more from the `Visual Studio` sections we currently have available. 

```markdown

## Documentation

Visit the offical **`Visual Studios`** _site_ and/or _documentation_ if:

1. You are having trouble with installs
2. You would rather manually install **`Visual Studio`** or **`Visual Studio Code`** v **`17.12.3`**
3. You prefer some documentation first
   
#### Step-by-Step Instructions:
   
Visit [Visual Studio v 17.13.0 Documentation](https://learn.microsoft.com/en-us/aspnet/core/) for more information about `Visual Studio` or `Visual Studio Code` v **`17.12.3`** (_or higher_).


```

[`Back to Top`](#table-of-contents)

---

## **`JSopX.` Dependencies Section**

Some documents have a `JSopX Dependencies` section, which is generally a list of JSopX Projects that depend on the primary topic discussed (i.e., a Technology, another JSopX Projects, etc). 

**Example for `JSopX Dependencies Section`**:

Let's picture we are a technology document for `Visual Studio`. 

```markdown

## `JSopX.` Dependencies

The following _JSopX™ Open Project EXperiences Collection_ Projects that depend on `Visual Studio` or `Visual Studio Code` **`17.10.3`** (_or higher_) are as follows:


- [`JSopX.OpenProjectX`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.OpenProjectX/Master/p1/v1/)
- [`JSopX.ClassLibrary`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.ClassLibrary/Master/p1/v1/)    
- [`JSopX.BridgeTooFar`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.BridgeTooFar/Master/p1/v1/)  
- [`JSopX.WebAPI`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.WebAPI/Master/p1/v1/)
- [`JSopX.SharedResources`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.SharedResources/Master/p1/v1/)
- [`JSopX.RCLxProper`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.RCLxProper/Master/p1/v1/)
- [`JSopX.RCLxAssets`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.RCLxAssets/Master/p1/v1/) 
- [`JSopX.RCLxComponets`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.RCLxComponents/Master/p1/v1/) 
- [`JSopX.AngularCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.AngularCore/Master/p1/v1/) 
- [`JSopX.ReactCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.ReactCore/Master/p1/v1/)  
- [`JSopX.VueCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.VueCore/Master/p1/v1/)  
- [`JSopX.AspNetCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.AspNetCore/Master/p1/v1/)   
- [`JSopX.BlazorServerCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.BlazorServerCore/Master/p1/v1/) 
- [`JSopX.MauiHybridNetCore`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/jsopx.MauiHybridNetCore/Master/p1/v1/)  

[`Back to Top`](#table-of-contents)

---

```

[`Back to Top`](#table-of-contents)

---

## **Common Technologies Section**

Some documents have a `Common Technologies` section, which is generally a list of one or more required technologies the primary topic discussed depends on (i.e., a Technology, one or more JSopX Projects, etc). 

**Example for `Common Technologies Section`**:

Let's picture we are a technology or project that requires one or more technologies to run as expected. 

```markdown

## Common Technologies

The following Technologies are required for _JSopX™ Open Project EXperiences Collection_ Projects to work as expected:

- [Common Technologies Included](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/CommonTechnologiesIncluded.md)
- [Visual Studio (v 17.13.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/VisualStudios.md)
- [.NET Framework (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/AspNetCore.md)
- [.NET Core Blazor (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetCoreBlazor.md)
- [.Net Core Maui Hybrid (v 9.0.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetCoreMauiHybrid.md)
- [Node (v 20.14.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Node.md)
- [npm (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/npm.md)
- [Angular CLI (v 18.0.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/AngularCli.md)
- [React (v 18.2.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/React.md)
- [Vue (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Vue.md)
- [Vite (v 3.4.21)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Vite.md)

```

---

[`Introduction`](../Introduction/) » [`Design Patterns`](../DesignPatterns/) » **`Less Common Doc Section Design Patterns`**  · · ·  [`Back to Top`](#table-of-contents) · · · [`« Previous`](./JSopxNovaDocumentSectionDesignPatterns.md) [`Next »`](../DesignPatterns/)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto\:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
