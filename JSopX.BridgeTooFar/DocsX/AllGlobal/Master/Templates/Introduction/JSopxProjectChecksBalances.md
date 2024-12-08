# JSopX™ Visual Studio Project Checks and Balances

Should be an excerpt from [Overview](#overview) section. 

---

[`Introduction`](./Introduction.md) » **`JSopX™ Project Checks & Balances`**  · · · [`« Previous`](./JSopxProjectsFamilies.md) [`Next »`](./Introduction.md)

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Corequisites](#corequisites)
- [JSopX™ Visual Studio Project & Solution File Naming Conventions](#jsopx-visual-studio-project--solution-file-naming-conventions)
- [Postrequisites](#postrequisites) 
- [Concomitants](#concomitants)
- [In Conclusion](#in-conclusion)
- [Next Steps](#next-steps)


---

## **Overview**  

- Please add some content. 


[`Back to Top`](#table-of-contents)

---

## **Prerequisites**  
- Please add some content. 

[`Back to Top`](#table-of-contents)

---

## **Corequisites**  

- Please add some content. 
 
[`Back to Top`](#table-of-contents)

---

## **JSopX™ Visual Studio Project & Solution File Naming Conventions**  

**Design Patterns & Best Practices**:  

1. **Parent Visual Studio Solution and Project Directory:**  
   - Each JSopX™ project has a parent `.sln` file and a root directory with the same name.  
   - All associated files and resources reside in this directory, including common project references and child Visual Studio projects.  
    
    **Example for `JSopX.RCLxProper`:**  
    ```
    JSopX.RCLxProper (Solution Directory)
    │   .gitattributes
    │   .gitignore
    │   JSopX.RCLxProper.sln
    │   LICENSE.txt
    │   PathConfig.targets
    │   README.md
    │
    └───JSopX.RCLxProper (Project Directory)
            JSopX.RCLxProper.csproj
    ```  

2. **Shared Data, Service & Function Projects:**  
   - Similar to Shared Assets & Resources, with `.csproj` files following the same naming convention.  
    
    **Example for `JSopX.WebAPI`:**  
    ```
    JSopX.WebAPI (Solution Directory)
    │   .gitattributes
    │   .gitignore
    │   JSopX.WebAPI.sln
    │   LICENSE.txt
    │   PathConfig.targets
    │   README.md
    │
    └───JSopX.WebAPI (Project Directory)
            JSopX.WebAPI.csproj
    ```  

3. **Server-Side “Existing” Apps Examples:**  
   - These projects also follow `.csproj` conventions.  
    
    **Example for `JSopX.AspNetCore`:**  
    ```
    JSopX.AspNetCore (Solution Directory)
    │   .gitattributes
    │   .gitignore
    │   JSopX.AspNetCore.sln
    │   LICENSE.txt
    │   PathConfig.targets
    │   README.md
    │
    └───JSopX.AspNetCore (Project Directory)
            JSopX.AspNetCore.csproj
    ```  

4. **Client-Side “Existing” Apps Examples:**  
   - These projects include a `.Server` suffix for server-side files and a `.client` suffix for client-side files.  
   - Naming conventions include capital casing for `.Server` directories and lowercasing for `.client` directories.  
    
    **Example for `JSopX.AngularCore`:**  
    ```
    JSopX.AngularCore (Solution Directory)
    │   .gitattributes
    │   .gitignore
    │   JSopX.AngularCore.sln
    │   LICENSE.txt
    │   PathConfig.targets
    │   README.md
    │
    └───JSopX.AngularCore.Server (Server Project Directory)
            JSopX.AngularCore.Server.csproj
    │
    └───jsopx.angularcore.client (Client Project Directory)
            jsopx.angularcore.client.esproj
    ```  


[`Back to Top`](#table-of-contents) 

---

## **Postrequisites**  

- Please add some content. 

[`Back to Top`](#table-of-contents) 

---

## **Concomitants**  

- Please add some content. 

[`Back to Top`](#table-of-contents) 

---

## **In Conclusion**  

- Please add some content. 

[`Back to Top`](#table-of-contents) 

---

## **Next Steps**  

1. Please add some content. 
2. Please add some content.



[`Introduction`](./Introduction.md) » **`JSopX™ Project Checks & Balances`**  · · · [`« Previous`](./JSopxProjectsFamilies.md) [`Next »`](./Introduction.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2024 - All Rights Reserved by Jason Silvestri
