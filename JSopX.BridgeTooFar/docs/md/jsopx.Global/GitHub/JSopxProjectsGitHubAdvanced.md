# JSopX™ Visual Studio Projects GitHub Advanced

By delving into the advanced GitHub practices outlined in this document, you will unlock strategies for effectively managing complex project structures. This guide covers advanced topics like organizing solution and project folders, setting up Git subtrees, managing circular references, and resolving dynamic path conflicts across JSopX™ projects.


> [!WARNING]
> **Rabbit Hole Detected: Advanced JSopX™ Project File Structure**
> 
> The journey ahead is complex, unconventional, and potentially frustrating. Before proceeding, consider if this is essential to your goals. Continuing down this path means accepting increased risk, potential setbacks, and a higher investment of time and resources.
> 
> **If you choose to continue, remember: you do so at your own risk. Nobody is coming to save you.**
>

---

[`Introduction`](../Introduction/Introduction/) » **`JSopX™ GitHub Advanced`**  · · · [`« Previous`](./JSopxProjectsGitHubBasics.md) [`Next »`](./JSopxProjectsGitHubGetForked.md)

---

## **Overview**

This document is designed for developers who want to elevate their GitHub skills to manage the intricacies of JSopX™ projects. By mastering the steps in this guide, you'll streamline project organization, handle complex interdependencies, and ensure your repositories remain cohesive and scalable as your enterprise solution evolves.

[`⇧ Back to Top`](#table-of-contents)

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

[`⇧ Back to Top`](#table-of-contents)

---

## **Corequisites**

- Have the JSopX™ repository ([JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git)) cloned locally.
- Familiarize yourself with the [JSopX™ Visual Studio Projects](./JsopxProjects.md) to understand the interdependencies between projects.
- Review the [JSopX™ GitHub Basics](./JSopxProjectsGitHubBasics.md) document to ensure a solid foundation before tackling advanced topics.

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

> [!WARNING]
> **Rabbit Hole Detected: Actions performed here can be irriversible!**
> 
> You don't have to do this to youself. You still have people that love you. However, I understand the role of a hero isn't always so cut and dry. 
> 
> **If you choose to continue, remember: you do so at your own risk.**
>

---

**Sourced Nova**:

In order to meet all business requirements with respect to how a lone admin could manage the JSopX Enterprise solution and its independent sub projects, seperately and/or altogther, special considerations had to be made with GitHub repositories I still can't believe had to be done.

We use Subtrees and dynamic reference targeting.

After implementing Git Subtree, verify that all projects can be cloned, built, and referenced correctly, both as part of the parent project (`JSopX.OpenProjectX`) and independently.

---

### Adding a Subtree

> [!IMPORTANT]
> Please note the use of the `JSopX.WebAPI` & `JSopX.OpenProjectX` Projects are intended as by example.

To add a repository as a subtree, perform the following command, where we will use `Bash` to add `JSopX.WebAPI` as the subtree to the flagship parent solution, `JSopX.OpenProjectX`:

**Using Bash**:

```bash

 # Using Bash: Add JSopX.WebAPI Git Repository As Subtree

 # 1.1. Navigate to the desired local directory where you plan to add 
 # the repository as a subtree.
 cd path\to\local\repo\JasonSilvestri\JSopX.OpenProjectX

 # 1.2. Add JSopX.WebAPI Git Repository Subtree to JSopX.OpenProjectX.       
 git subtree add --prefix=JSopX.OpenProjectX https://github.com/JasonSilvestri/JSopX.WebAPI.git master --squash
 
 # -- or --
 
 # 2. Add JSopX.WebAPI Git Repository Subtree to JSopX.OpenProjectX inline.       
 git subtree add --prefix=path/to/local/JasonSilvestri/JSopX.OpenProjectX https://github.com/JasonSilvestri/JSopX.WebAPI.git master --squash
 
 # -- For Clarity --

 # 3. If we were not using Subtrees, we would instead clone JSopX.WebAPI Git Repository as we would normally.       
 git clone https://github.com/JasonSilvestri/JSopX.WebAPI.git

```

This command adds the `JSopX.WebAPI` repository as a subtree in the `JSopX.OpenProjectX` repository, under the `path/to/local/JasonSilvestri/JSopX.OpenProjectX` directory.

[`⇧ Back to Top`](#table-of-contents)

---

### Pulling in Updates

To pull in updates from the remote subtree repository, use the following command:

```bash
git subtree pull --prefix=path/to/local/JasonSilvestri/JSopX.WebAPI https://github.com/JasonSilvestri/JSopX.WebAPI.git master --squash
```

This pulls the latest changes from the `master` branch of the `JSopX.WebAPI` repository and merges them into your local project.

[`⇧ Back to Top`](#table-of-contents)

---

### Pushing Subtree Changes

To push changes made in the subtree back to the remote repository, use:

```bash
git subtree push --prefix=path/to/local/JasonSilvestri/JSopX.WebAPI https://github.com/JasonSilvestri/JSopX.WebAPI.git master
```

This command pushes any changes made in the `path/to/local/JasonSilvestri/JSopX.WebAPI` directory back to the `master` branch of the `JSopX.WebAPI` repository.

[`⇧ Back to Top`](#table-of-contents)

---

### Removing a Subtree

If you need to remove a subtree, you can simply delete the directory and clean up the Git history:

```bash
rm -rf path/to/local/JasonSilvestri/JSopX.WebAPI
git add .
git commit -m "Removed JSopX.WebAPI subtree"
```

This will remove the subtree and commit the changes to your repository.

[`⇧ Back to Top`](#table-of-contents)


---

## **Step 2.1: Set Up Git Subtrees (When All Hope Is Lost)**

> [!WARNING]
> **Rabbit Hole Detected: Actions performed here can be irriversible!**
> 
> **BTW: I warned you. If you choose to continue, remember: you do so at your own risk.**
>

---

**Sourced deGrok**:

If the steps in the previous section have found you ill, I can give you some more details to some forceful operations, based on the operating system you may be using. 

---

## Removing a Git Subtree (Files Only)

### Remove the Subtree Files from Your Project

To remove a subtree like `JSopX.ClassLibrary` from your parent repo (`JSopX.OpenProjectX`) without altering history, follow these steps. This assumes you’re in the root directory of your local parent repo:

1. **Delete the Subtree Directory**
   Remove the subtree’s files and stage the change:
   ```bash
   git rm -r JSopX.ClassLibrary
   ```

2. **Commit the Removal**
   Commit the change to record the removal:
   ```bash
   git commit -m "Removed JSopX.ClassLibrary subtree from project"
   ```

3. **Push the Changes**
   Push the update to your remote repository:
   ```bash
   git push origin master
   ```

### Notes
- **History Remains:** If you used `--squash` when adding the subtree, only a single commit is in your history. This method removes the files but leaves that commit intact.
- **Simple Approach:** Use this if you just want the files gone without rewriting history.


[`⇧ Back to Top`](#table-of-contents)

---

## Completely Removing Git Subtrees (Including History)

### Overview
To erase all traces of multiple subtrees (e.g., `JSopX.ClassLibrary`, `JSopX.ClassLibrary`) from your repo’s history, use `git filter-repo`. This rewrites history to remove both files and commits.

### Prerequisites
1. **Install `git-filter-repo`:**
   - macOS/Linux: `brew install git-filter-repo`
   - Windows: `pip install git-filter-repo` or download from [GitHub](https://github.com/newren/git-filter-repo)
2. **Backup Your Repo:**
   Clone your repo to a safe location before rewriting history:
   ```bash
   git clone --mirror /path/to/JSopX.OpenProjectX /path/to/backup
   ```

### Steps to Remove All Subtree History

1. **Navigate to Your Local Repo**
   ```bash
   cd /path/to/JSopX.OpenProjectX
   ```

2. **Identify Subtree Prefixes**
   List all subtree directories to remove (e.g., `JSopX.ClassLibrary`, `JSopX.ClassLibrary`).

3. **Run `git filter-repo` to Remove Subtrees**
   Remove the specified subtrees and their history:
   ```bash
   git filter-repo --path JSopX.ClassLibrary --path JSopX.ClassLibrary --invert-paths --force
   ```
   - `--path`: Targets the subtree directories.
   - `--invert-paths`: Removes those paths.
   - `--force`: Overrides safety checks.

4. **Verify the Result**
   Check that the subtrees and their commits are gone:
   ```bash
   git log --oneline
   ```

5. **Update the Remote Repository**
   Force-push the rewritten history (warn collaborators!):
   ```bash
   git push origin master --force
   ```

[`⇧ Back to Top`](#table-of-contents)

---

### Important Notes
- **Collaboration Impact:** Others will need to rebase or re-clone after the force-push.
- **Multiple Subtrees:** Add all prefixes in one command (e.g., `--path JSopX.ClassLibrary --path JSopX.ClassLibrary`).
- **Undo:** Use your backup if needed.

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



## **Postrequisites**

- Validate repository integrity and dependency resolution.
- Push changes to GitHub with a clean commit history.

[`⇧ Back to Top`](#table-of-contents)

---

## **Concomitants**

- Explore related JSopX™ documents for complementary workflows, such as asset management and CI/CD pipeline setups.

[`⇧ Back to Top`](#table-of-contents)

---

## **In Conclusion**

Advanced GitHub practices empower JSopX™ developers to manage complexity with precision. By organizing folders, leveraging subtrees, and resolving dynamic paths, your projects will be more robust, maintainable, and scalable.

[`⇧ Back to Top`](#table-of-contents)

---

## **Next Steps**

1. Experiment with GitHub Actions to automate builds and tests for your JSopX™ repositories.
2. Explore documentation on integrating Docker for containerized deployments of JSopX™ projects.


---

[`Introduction`](../Introduction/Introduction/) » **`JSopX™ GitHub Advanced`**  · · ·  [`⇧ Back to Top`](#table-of-contents) · · · [`« Previous`](./JSopxProjectsGitHubBasics.md) [`Next »`](./JSopxProjectsGitHubGetForked.md)

---


##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri

