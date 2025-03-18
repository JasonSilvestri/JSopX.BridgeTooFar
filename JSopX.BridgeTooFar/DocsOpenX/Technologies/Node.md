# Node

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

**`Node` v `20.14.0` is `Required`**

---

[`Introduction`](../Introduction/) » [`Technologies`](./ReadMe.md) » **[`Node`](./Node.md)** · · · [`« Previous`](./NetCoreMauiHybrid.md) [`Next »`](./npm.md)

---

## Table of Contents

- [Overview](#overview)
- [JSopX™ Project Dependencies](#node-jsopx-project-dependencies)
- [Check Versions](#node-checking-versions)
- [Installation](#node-installation)
- [Downloads & Documentation](#node-official-downloads--documentation)

---

## **Overview**  

The JSopX™ Open Project EXperiences _require_ `Node` v **`20.14.0`** (_or higher_), is essential for running JavaScript-based tools, servers, and applications in JSopX™ projects. This version provides the latest performance improvements, security updates, and compatibility with modern JavaScript frameworks. 

Make sure your `Node.js` installation is up-to-date to support the development and execution of your projects.

This section is dedicated to helping you ensure you have the correct `Node` setup, by describing how to check versions, perform installations if necessary, check JSopX™ dependencies, get links to official documentation, and more!


[`Back to Top`](#table-of-contents)

---

## Node: Checking Versions

Check if `Node` v **`20.14.0`** (_or higher_) is installed on your device.

### Step-by-Step Instructions:

Use **`Node`** Command Line dialog to ensure you have the correct version of `Node` v `20.14.0` (_or higher_) on your device.
   
1. Open `Node`, type the following command, and hit the `Enter` button on your `keyboard`:
   
2. **Node Command:**
     ```bash
       node -v
     ```
3. **Expected Output:** 
      ```
       v20.14.0
      ```
4. **Purpose:** Verifies Node.js version.

These commands check the `version` of `Node` on your device, and then prints back your version to the `Node` Command Line dialog output.
   
If you have version `Node` v **`20.14.0`** (_or higher_), you are _good to go_, and no further action is needed!
   
If you do not have Node installed or you version is **`lower`** than `Node` v **`20.14.0`**, it is recommended that you install it _immediately_ to avoid unexpected results.


[`Back to Top`](#table-of-contents)

---


## Node: Installation:

Install `Node` v **`20.14.0`** (_or higher_) if it is not already installed or found on your device.

### Step-by-Step Instructions:

You can use **`Node`** Command Line dialog again to `install` the correct version of `Node` v `20.14.0` (_or higher_) on your device.
   
1. Open `Node`, type the following _command_, and hit the `Enter` button on your `keyboard`:

2. **Node Command:**
     ```node
      // Install Node.js (via nvm)
      nvm install 20.14.0
      nvm use 20.14.0
     ```
    
3. This command should _install_ all necessary `Node` dependencies and features, and then prints the results of the installation to the `Node` Command Line dialog output.

[`Back to Top`](#table-of-contents)

---

## **Node: `JSopX.` Project Dependencies**

`JSopX` projects leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability. Yeah, well, it also adds dependency.

1. **`JSopX.OpenProjectX`**:
   - The [Flagship Project](../Introduction/JSopxProjectsFamilies.md#1-flagship-projects) parent enterprise application solution.
   - **Explore GitHub**: [JSopX.OpenProjectX](../OpenProjects/jsopx.OpenProjectX)

2. **`JSopX.BridgeTooFar`**:
   - A [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets and project documentation.
   - **Explore GitHub**: [JSopX.BridgeTooFar](../OpenProjects/jsopx.BridgeTooFar)

3. **`JSopX.SharedResources`**:
   - A [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets, docs, code, and all the source one would want in a development sand box environment, while using a more traditional approach to **Class Libraries**.
   - **Explore GitHub**: [JSopX.SharedResources](../OpenProjects/jsopx.SharedResources)
 
4. **`JSopX.RCLxAssets`**:
   - The direct [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) successor of `JSopX.SharedResources` that contains most of the same reusable static assets, docs, code, and all the source, but now instead uses a more modern **Razor Class Library**. 
   - **Explore GitHub**: [JSopX.RCLxAssets](../OpenProjects/jsopx.RCLxAssets)

5. **`JSopX.RCLxProper`**:
   - An extremely light-weight, [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) version of the `JSopX.Assets` Razor Class Library, specifically designed for Production-Ready environments.
   - **Explore GitHub**: [JSopX.RCLxProper](../OpenProjects/jsopx.RCLxProper)

6. **`JSopX.RCLxComponents`**:
   - Although there is not much traction is the project as of yet, don't let it fool you. This epic [Shared Assets & Resources Projects](../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) Razor Class Library, Combines Razor components with **.NET MAUI** to create cross-platform applications.
   - **Explore GitHub**: [JSopX.RCLxComponents](../OpenProjects/jsopx.RCLxComponents)

7. **`JSopX.AngularCore`**:
    - An **Angular Core** [Client-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) project, created to simulate an existing Angular Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.AngularCore](../OpenProjects/jsopx.AngularCore)

8. **`JSopX.ReactCore`**:
    - A **React Core** [Client-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) project, created to simulate an existing React Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.ReactCore](../OpenProjects/jsopx.ReactCore)
  
9. **`JSopX.VueCore`**:
    - A **Vue Core** [Client-Side “Existing” Apps Examples](../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) created to simulate an existing Vue Core application we are now tasked with migrating into our enterprise application, adopting our standards, API and more.
    - **Explore GitHub**: [JSopX.VueCore](../OpenProjects/jsopx.VueCore)
  
[`Back to Top`](#table-of-contents)

---

## Node: Official Downloads & Documentation

> [!WARNING]
> Clicking links in this section will send you to the official `Node.js` vendor site for `Node`.
> 

---

Visit the official `Node.js` vendor site for **`Node`** if:

1. You are having trouble with installs
2. You would rather manually install **`Node`** v **`20.14.0`**
3. You prefer some official vendor documentation first
   
#### Step-by-Step Instructions:
   
1. Download: [Manual Node Installation](https://nodejs.org/)
2. Read: [Node Documentation](https://nodejs.org/en/docs/)

---

[`Introduction`](../Introduction/) » [`Technologies`](./ReadMe.md) » **[`Node`](./Node.md)** · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](./NetCoreMauiHybrid.md) [`Next »`](./npm.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri