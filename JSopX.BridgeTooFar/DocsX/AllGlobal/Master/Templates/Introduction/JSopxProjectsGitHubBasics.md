# JSopX™ Visual Studio Projects GitHub Basics

Should be an excerpt from [Overview](#overview) section. 

---

[`Introduction`](./Introduction.md) » **`JSopX™ GitHub Basics`**  · · ·  [`Back to Top`](#table-of-contents) · · · [`« Previous`](./JSopxProjectChecksBalances.md) [`Next »`](./Introduction.md)

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Corequisites](#corequisites)
- [Step 1: Create New Repository via Command Line](#step-1-create-new-repository-via-command-line)
- [Step 2: Push Existing Repository from Command Line](#step-2-push-existing-repository-from-command-line)
- [Step 3: Use Git with Bash, Node, npm, Powershell, Vite & More](#step-3-Use-git-with-bash-node-npm-powershell-Vite-more)
- [Postrequisites](#postrequisites)
- [Concomitants](#concomitants)
- [In Conclusion](#in-conclusion)


---

## **Overview**  

- Please add some content. 


[Back to Top](#table-of-contents)

---

## Prerequisites

### General:

General information.

- Please add some content.
- Git installed on your machine
- Existing Git repositories for individual projects (e.g., `JSopX.WebAPI`, `JSopX.ClassLibrary`)
- Basic knowledge of Visual Studio project references

### Technology Requirements:

If you expect all `JSopX` Projects to work as expected, it is imperative the following technologies are installed.

- [Visual Studio (v 17.12.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/VisualStudios.md)
- [.NET Framework (v 8.0.7)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 8.0.7)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/AspNetCore.md)
- [.NET Core Blazor (v 8.0.7)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetCoreBlazor.md)
- [.Net Core Maui Hybrid (v 8.0.7)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/NetCoreMauiHybrid.md)
- [Node (v 20.14.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Node.md)
- [npm (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/npm.md)
- [Angular CLI (v 18.0.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/AngularCli.md)
- [React (v 18.2.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/React.md)
- [Vue (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Vue.md)
- [Vite (v 3.4.21)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies/Vite.md)

---

## Corequisites

- Please add some content.
- Make sure that all project files (e.g., `.sln`, `.csproj`, `.esproj`) are properly structured and that you have access to your GitHub repositories for pushing and pulling changes.
- This documentation, including all other related resources, have been committed and pushed to latest `JSopX.BridgeTooFar` GitHub repository (e.g., [`https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git`](https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git)).
  
---



## Step 1: Create New Repository via Command Line

Example:

```bash
echo "# JSopX.WebAPI" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/JasonSilvestri/JSopX.WebAPI.git
git push -u origin master
```

---

## Step 2: Push Existing Repository from Command Line

For example:

```bash
git remote add origin https://github.com/JasonSilvestri/JSopX.WebAPI.git
git branch -M master
git push -u origin master
```

---

## Step 3: Use Git with Bash, Node, npm, Powershell, Vite & More


### Using `JSopX.RCLxComponents` Repository as Example Clone

**`JSopX.RCLxComponents.sln`**: The `JSopX.RCLxComponents` Project (_JSopX™ Razor Class Library "xComponents" Project_) is a Razor Class Library focusing on reusable Blazor and MAUI components, with plans for experimental support for Vue, React, and Angular components.

In this example, we know the `JSopX.RCLxComponents` project is a very cool and helpful Razor Class Library we want to consume. It is time to `clone` it.

#### Step by Step Instructions:
So, typically when you see people trying to be GitHub cool, they will often provide you a one-liner `clone` example, which ultimately translates to using the `Bash` command line tool. 

1. _Clone_ `JSopX.RCLxComponents` Git Repository using `Bash` Command Line:
   
   - This typical example looks something the following:
     
       ```bash
       # Using Bash to clone JSopX.RCLxComponents Git Repository
       $ git clone https://github.com/JasonSilvestri/JSopX.RCLxComponents.git
       ```

   - However, this isn't technically accurate. You want to first go to a location on your local computer where you actually want the project to be cloned to, once it is pulled from the remote version on GitHub.
   
   - This most accurately depicts the correct example:
       ```bash
       # Navigate to local desired directory to the repository
       $ cd path\to\local\repo\JSopX.RCLxComponents
   
       # Using Bash to clone JSopX.RCLxComponents Git Repository
       # Navigate to remote desired directory to the repository
       
       $ git clone https://github.com/JasonSilvestri/JSopX.RCLxComponents.git
       ```

2. _Clone_ `JSopX.RCLxComponents` Git Repository using  the Command Line tool, `PowerShell`:
          
   - **PowerShell**:
       
       ```powershell
       # Navigate to the desired local directory you plan to clone the repository to on your computer
       cd path\to\local\repo\JSopX.RCLxComponents
   
       # Using PowerShell to clone JSopX.RCLxComponents Git Repository
       git clone https://github.com/JasonSilvestri/JSopX.RCLxComponents.git
       ```


3. _Clone_ `JSopX.RCLxComponents` Git Repository using  the Command Line tool, `Node.js Command Line`:
       
   - **npm (Using Node.js Command Line)**:
       If you want to clone a repository directly from the `Node.js` command line, you can use `npx`:
   
       ```node
       // Navigate to the desired directory
       cd path\to\local\repo\JSopX.RCLxComponents
   
       // Using npx to clone JSopX.RCLxComponents Git Repository
       npx degit JasonSilvestri/JSopX.RCLxComponents
       ```
   
       **Explanation**:
       `npx degit` is a tool that allows you to clone a repository without including the `.git` folder. It's useful for creating a fresh start without any history, which can be handy for scaffolding projects.

       - **Vite (After CLoning)**:
       If you want to clone a repository directly and then use tools like `Vite` (_what we use in Vue to handle certain build aspects_), from the `Bash` command line, you can use `npx`:

   - **Vite** (After Cloning):
       ```bash
       # Navigate to the desired directory
       cd path\to\local\repo\JSopX.RCLxComponents
   
       # Clone the repository using Bash
       git clone https://github.com/JasonSilvestri/JSopX.RCLxComponents.git
   
       # Navigate to the cloned directory
       cd JSopX.RCLxComponents
   
       # Initialize or install the project with Vite
       npm create vite@latest
       npm install
       ```
   
      ### Summary:
       - **PowerShell** and **Bash** both use `git clone` after navigating to the local directory.
       - **npm** (or `npx`) can use the `degit` command to clone a repository directly.
       - **Vite** steps show initializing or installing the project after cloning.
       
3. _Open_ the solution in `Visual Studio`:

    - **Open** `RCLxComponents.sln` in Visual Studio 2022 or higher.

4. _Build_ the `Project`:

    - **Right-click** on the solution in `Solution Explorer` and select `Build Solution`.

---

## **Postrequisites**  

- Please add some content. 

[Back to Top](#table-of-contents) 

---

## **Concomitants**  

- Please add some content. 

[Back to Top](#table-of-contents) 

---

## **In Conclusion**  

- Please add some content. 

[Back to Top](#table-of-contents) 

---

## **Next Steps**  

1. Please add some content. 
2. Please add some content.

---

[`Introduction`](./Introduction.md) » **`JSopX™ GitHub Basics`**  · · ·  [`Back to Top`](#table-of-contents) · · · [`« Previous`](./JSopxProjectChecksBalances.md) [`Next »`](./Introduction.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri