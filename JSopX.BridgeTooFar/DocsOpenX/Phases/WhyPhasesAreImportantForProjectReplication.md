# JSopX™ Why Phases Are Important for Project Replication

Should be an excerpt from [Overview](#overview) section. 

---


> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate** and may contain placeholder information.
>

---

[`Phases`](./Phases.md) » **`Why Phases Are Important`**  · · · [`« Previous`](./Phases.md) [`Next »`](./DisciplinesRequiredForSustainableEnterpriseLevelDevelopment.md)

---

## **Overview**

- Please add some content. 

[`⇧ Back to Top`](#table-of-contents)

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Corequisites](#corequisites)
- [1. Preserve Step-by-Step Instructions](#step-1-organize-projects-with-solution-and-project-folders)
- [2. Large Brush Strokes](#step-2-set-up-git-subtrees)
- [3. More Easily Handle Tasks](#step-5-resolve-dynamic-path-conflicts)
- [Postrequisites](#postrequisites)
- [Concomitants](#concomitants)
- [In Conclusion](#in-conclusion)
- [Next Steps](#next-steps)

---

## **Prerequisites**

- Please add some content. 

[`⇧ Back to Top`](#table-of-contents)

---

## **Corequisites**

- Please add some content. 

[`⇧ Back to Top`](#table-of-contents)

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

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 2: Set Up Git Subtrees**

### Add Subtrees for Each Project

To add a Git subtree for a project, run:
```bash
git subtree add --prefix=JSopX.ClassLibrary https://github.com/JasonSilvestri/JSopX.ClassLibrary.git master --squash
```

### Verify Subtrees

Ensure the `.sln` and `.csproj` files are intact and functional after adding subtrees. Test builds in Visual Studio to confirm references work.

[`⇧ Back to Top`](#table-of-contents)

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

[`⇧ Back to Top`](#table-of-contents)

---

## **Step 4: Clone Projects into Parent Projects**

Clone child projects into parent repositories:
```bash
git clone https://github.com/JasonSilvestri/JSopX.ClassLibrary.git
```

Ensure all references are properly added to the parent solution in Visual Studio.

[`⇧ Back to Top`](#table-of-contents)

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


---

[`Phases`](./Phases.md) » **`Why Phases Are Important`**  · · ·  [`⇧ Back to Top`](#table-of-contents) · · · [`« Previous`](./Phases.md) [`Next »`](./DisciplinesRequiredForSustainableEnterpriseLevelDevelopment.md)

---


## **Postrequisites**

- Please add some content. 

[`⇧ Back to Top`](#table-of-contents)

---

## **Concomitants**

- Please add some content. 

[`⇧ Back to Top`](#table-of-contents)

---

## **In Conclusion**

- Please add some content. 

[`⇧ Back to Top`](#table-of-contents)

---

## **Next Steps**

1. Please add some content. 
2. Please add some content. 


---

[`Phases`](./Phases.md) » **`Why Phases Are Important`**  · · ·  [`⇧ Back to Top`](#table-of-contents) · · · [`« Previous`](./Phases.md) [`Next »`](./DisciplinesRequiredForSustainableEnterpriseLevelDevelopment.md)

---


##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri

