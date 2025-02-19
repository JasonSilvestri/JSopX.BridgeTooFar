
When you `clone` a JSopX™ GitHub Repository, you are essentially downloading a copy of the associated projects and/or solutions within that repository. I will use one of my projects as an example.

### Using JSopX.BridgeTooFar Repository as Example Clone

**`JSopX.BridgeTooFar.sln`**: The `JSopX.BridgeTooFar` Project (_JSopX™ Razor Class Library "xComponents" Project_) is a Razor Class Library focusing on reusable Blazor and MAUI components, with plans for experimental support for Vue, React, and Angular components.

In this example, we know the `JSopX.BridgeTooFar` project is a very cool and helpful Razor Class Library we want to consume. It is time to `clone` it.

#### Step by Step Instructions:
So, typically when you see people trying to be GitHub cool, they will often provide you a one-liner `clone` example, which ultimately translates to using the `Bash` command line tool. 

1. _Clone_ `JSopX.BridgeTooFar` Git Repository using `Bash` Command Line:
   
   - This typical example looks something the following:
     
       ```bash
       # Using Bash to clone JSopX.BridgeTooFar Git Repository
       $ git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git
       ```

   - However, this isn't technically accurate. You want to first go to a location on your local computer where you actually want the project to be cloned to, once it is pulled from the remote version on GitHub.
   
   - This most accurately depicts the correct example:
       ```bash
       # Navigate to local desired directory to the repository
       $ cd path\to\local\repo\JSopX.BridgeTooFar
   
       # Using Bash to clone JSopX.BridgeTooFar Git Repository
       # Navigate to remote desired directory to the repository
       
       $ git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git
       ```

2. _Clone_ `JSopX.BridgeTooFar` Git Repository using  the Command Line tool, `PowerShell`:
          
   - **PowerShell**:
       
       ```powershell
       # Navigate to the desired local directory you plan to clone the repository to on your computer
       cd path\to\local\repo\JSopX.BridgeTooFar
   
       # Using PowerShell to clone JSopX.BridgeTooFar Git Repository
       git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git
       ```


3. _Clone_ `JSopX.BridgeTooFar` Git Repository using  the Command Line tool, `Node.js Command Line`:
       
   - **npm (Using Node.js Command Line)**:
       If you want to clone a repository directly from the `Node.js` command line, you can use `npx`:
   
       ```node
       // Navigate to the desired directory
       cd path\to\local\repo\JSopX.BridgeTooFar
   
       // Using npx to clone JSopX.BridgeTooFar Git Repository
       npx degit JasonSilvestri/JSopX.BridgeTooFar
       ```
   
       **Explanation**:
       `npx degit` is a tool that allows you to clone a repository without including the `.git` folder. It's useful for creating a fresh start without any history, which can be handy for scaffolding projects.

    - **Vite (After Cloning)**:
       If you want to clone a repository directly and then use tools like `Vite` (_what we use in Vue to handle certain build aspects_), from the `Bash` command line, you can use `npx`:

   - **Vite** (After Cloning):
       ```bash
       # Navigate to the desired directory
       cd path\to\local\repo\JSopX.BridgeTooFar
   
       # Clone the repository using Bash
       git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git
   
       # Navigate to the cloned directory
       cd JSopX.BridgeTooFar
   
       # Initialize or install the project with Vite
       npm create vite@latest
       npm install
       ```
   
      ### Summary:
    - **PowerShell** and **Bash** both use `git clone` after navigating to the local directory.
    - **npm** (or `npx`) can use the `degit` command to clone a repository directly.
    - **Vite** steps show initializing or installing the project after cloning.
       
3. _Open_ the solution in `Visual Studio`:

    - **Open** `BridgeTooFar.sln` in Visual Studio 2022 or higher.

4. _Build_ the `Project`:

    - **Right-click** on the solution in `Solution Explorer` and select `Build Solution`.



[All Technology Requirements](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/Master/JSopX/Technologies.md)  »  [**Common Technologies Included**](#jsopx-github-repositories)  »  [Back to Top](#table-of-contents)
