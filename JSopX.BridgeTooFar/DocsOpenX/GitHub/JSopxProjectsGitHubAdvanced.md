# JSopX™ Visual Studio Projects GitHub Advanced

By delving into the advanced GitHub practices outlined in this document, you will unlock strategies for effectively managing complex project structures. This guide covers advanced topics like organizing solution and project folders, setting up Git subtrees, managing circular references, and resolving dynamic path conflicts across JSopX™ projects.


> [!WARNING]
> **Rabbit Hole Detected: Adanced JSopX™ Project File Structure**
> 
> The journey ahead is complex, unconventional, and potentially frustrating. Before proceeding, consider if this is essential to your goals. Continuing down this path means accepting increased risk, potential setbacks, and a higher investment of time and resources.
> 
> If you choose to continue, remember: you do so at your own risk..
>

---

[`Introduction`](../Introduction/Introduction/) » **`JSopX™ GitHub Advanced`**  · · · [`« Previous`](./JSopxProjectsGitHubBasics.md) [`Next »`](./JSopxProjectsGitHubGetForked.md)

---

## **Overview**

This document is designed for developers who want to elevate their GitHub skills to manage the intricacies of JSopX™ projects. By mastering the steps in this guide, you'll streamline project organization, handle complex interdependencies, and ensure your repositories remain cohesive and scalable as your enterprise solution evolves.

[`Back to Top`](#table-of-contents)

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Corequisites](#corequisites)
- [Step 1: Organize Projects with Solution and Project Folders](#step-1-organize-projects-with-solution-and-project-folders)
- [Step 2: Set Up Git Subtrees](#step-2-set-up-git-subtrees)
- [Step 3: Manage Circular Project References](#step-3-manage-circular-project-references)
- [Step 4: Clone Projects into Parent Projects](#step-4-clone-projects-into-parent-projects)
- [Step 5: Resolve Dynamic Path Conflicts](#step-5-resolve-dynamic-path-conflicts)
   1. [Step 5.1: Set Up Centralized Reference Path Configuration](#step-51-set-up-centralized-reference-path-configuration)
   2. [Step 5.2: Update `.csproj` Files to Include the Configuration](#step-52-update-csproj-files-to-include-the-configuration)
   3. [Step 5.3: Add Dynamic Directory Depth Check](#step-53-add-dynamic-directory-depth-check)
   4. [Step 5.4: Test and Validate](#step-54-test-and-validate)
- [Postrequisites](#postrequisites)
- [Concomitants](#concomitants)
- [In Conclusion](#in-conclusion)
- [Next Steps](#next-steps)

---

## **Prerequisites**

### General

Ensure the following before diving into advanced GitHub practices:

- Git installed and configured on your machine.
- Advanced familiarity with Git operations (e.g., subtrees, branching, resolving conflicts).
- Knowledge of the JSopX™ ecosystem, including `.sln` and `.csproj` structures.
- Access to the relevant JSopX™ repositories.

### Technology Requirements

To ensure compatibility, install the required tools and SDKs as listed in the [Prerequisites](./JSopxProjectsGitHubBasics.md#prerequisites) of the GitHub Basics document.

[`Back to Top`](#table-of-contents)

---

## **Corequisites**

- Have the JSopX™ repository ([JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git)) cloned locally.
- Familiarize yourself with the [JSopX™ Visual Studio Projects](./JsopxProjects.md) to understand the interdependencies between projects.
- Review the [JSopX™ GitHub Basics](./JSopxProjectsGitHubBasics.md) document to ensure a solid foundation before tackling advanced topics.

[`Back to Top`](#table-of-contents)

---

## **Step 1: Organize Projects with Solution and Project Folders**

Proper organization prevents issues with references and dependencies:

1. Create a **solution folder** and a **project folder** for each project:
   ```
   ├── JSopX.ClassLibrary/
   │   ├── JSopX.ClassLibrary.sln
   │   ├── JSopX.ClassLibrary/
   │   │   └── JSopX.ClassLibrary.csproj
   ```

2. Store each solution (`.sln`) in the root of its corresponding project folder. This ensures all references resolve consistently.

[`Back to Top`](#table-of-contents)

---

## **Step 2: Set Up Git Subtrees**

### Add Subtrees for Each Project

To add a Git subtree for a project, run:
```bash
git subtree add --prefix=JSopX.ClassLibrary https://github.com/JasonSilvestri/JSopX.ClassLibrary.git master --squash
```

### Verify Subtrees

Ensure the `.sln` and `.csproj` files are intact and functional after adding subtrees. Test builds in Visual Studio to confirm references work.

[`Back to Top`](#table-of-contents)

---

## **Step 3: Manage Circular Project References**

To avoid circular dependencies:

- Place `.sln` files in separate folders from their respective `.csproj` files:
  ```
  ├── JSopX.WebAPI/
  │   ├── JSopX.WebAPI.sln
  │   ├── JSopX.WebAPI/
  │   │   └── JSopX.WebAPI.csproj
  ```

- Use `PathConfig.targets` for consistent reference management.

[`Back to Top`](#table-of-contents)

---

## **Step 4: Clone Projects into Parent Projects**

Clone child projects into parent repositories:
```bash
git clone https://github.com/JasonSilvestri/JSopX.ClassLibrary.git
```

Ensure all references are properly added to the parent solution in Visual Studio.

[`Back to Top`](#table-of-contents)

---

## **Step 5: Resolve Dynamic Path Conflicts**

Centralize path configuration using `PathConfig.targets`. Update `.csproj` files to import this configuration for dynamic resolution of references.

### **Step 5.1: Set Up Centralized Reference Path Configuration**
Create `PathConfig.targets` with shared paths:
```xml
<Project>
  <PropertyGroup>
    <ClassLibraryPath>..\..\JSopX.ClassLibrary</ClassLibraryPath>
    <WebAPIPath>..\..\JSopX.WebAPI</WebAPIPath>
  </PropertyGroup>
  <ItemGroup>
    <ProjectReference Include="$(ClassLibraryPath)\JSopX.ClassLibrary.csproj" />
  </ItemGroup>
</Project>
```

### **Step 5.2: Update `.csproj` Files**
Import `PathConfig.targets` in each `.csproj` file:
```xml
<Import Project="..\..\PathConfig.targets" Condition="Exists('..\..\PathConfig.targets')" />
```

### **Step 5.3: Add Dynamic Directory Depth Check**
Add logic to adjust paths based on nesting depth:
```xml
<PropertyGroup>
  <ProjectPathDepth>$([System.String]::Copy($(ProjectPath)).Split('\').Length)</ProjectPathDepth>
</PropertyGroup>
```

### **Step 5.4: Test and Validate**
- Build individual projects and the entire solution.
- Check that directory depth logic resolves references correctly.



## **Postrequisites**

- Validate repository integrity and dependency resolution.
- Push changes to GitHub with a clean commit history.

[`Back to Top`](#table-of-contents)

---

## **Concomitants**

- Explore related JSopX™ documents for complementary workflows, such as asset management and CI/CD pipeline setups.

[`Back to Top`](#table-of-contents)

---

## **In Conclusion**

Advanced GitHub practices empower JSopX™ developers to manage complexity with precision. By organizing folders, leveraging subtrees, and resolving dynamic paths, your projects will be more robust, maintainable, and scalable.

[`Back to Top`](#table-of-contents)

---

## **Next Steps**

1. Experiment with GitHub Actions to automate builds and tests for your JSopX™ repositories.
2. Explore documentation on integrating Docker for containerized deployments of JSopX™ projects.


---

[`Introduction`](../Introduction/Introduction/) » **`JSopX™ GitHub Advanced`**  · · ·  [`Back to Top`](#table-of-contents) · · · [`« Previous`](./JSopxProjectsGitHubBasics.md) [`Next »`](./JSopxProjectsGitHubGetForked.md)

---


##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri

