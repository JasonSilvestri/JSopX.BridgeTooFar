﻿﻿


# ﻿JSopX™ Open Project EXperiences : Phase 4: Implement Final Security Protocols, Deployment Strategies and More (Draft)
From the ﻿jSilvestri.com BETA v 2024 JSopX Open Project EXperiences Collection of Projects







  
> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate**. In fact, drafts will often times be for different reasons, such as testing styles, content, etc. The content itself may have only been used as a placeholder, making sections, or even the entire document contain information not relative to this project.


## Overview

﻿

The purpose of Project Development Steps in Phase 4 is to Implement Final Security Protocols, Deployment Strategies and any other major aspects of the applications you have not yet handled. This isn't a little pat on the back and lets do a good job. If you yet implemented or close to finishing Final Security Protocols you should be worried, along with any other related security design patterns and best practices you may have missed. I cannot stress enough about the importance of taking care of these things before your first release candidate.



## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Corequisites](#corequisites)
4. [Postrequisites](#postrequisites)
5. [Concomitants](#concomitants)
6. [Project Development Phase 4: Implement Final Security Protocols, Deployment Strategies and More](#project-development-phase-4-implement-final-security-protocols-deployment-strategies-and-more)
7. [In Conclusion](#in-conclusion)


## Prerequisites

- Basic understanding of `JSopX Phases`.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)


## Corequisites﻿

- Ensure you are pro-active in at least your own checklist of action items if you do not plan to follow the phases of development of Phase 2.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)


## Postrequisites
﻿

- Clean and rebuild each project after making changes to ensure all changes are working as expected before starting a new phase.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)



## Concomitants
﻿

- As you see more projects being created, pay close attention to the instructions for Git SubTree and Visual Studio Project References. Special considerations had to be made to ensure all projects can be cloned in an `all-in-one` project (e.g., `JSopX.OpenProjectX`) or by independent project isolation for a unique educational user experience not common in most projects.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)


# Project Development Phase 4: Implement Final Security Protocols, Deployment Strategies and More

The purpose of Project Development Steps in Phase 4 is to Implement Final Security Protocols, Deployment Strategies and any other major aspects of the applications you have not yet handled. This isn't a little pat on the back and lets do a good job. If you yet implemented or close to finishing Final Security Protocols you should be worried, along with any other related security design patterns and best practices you may have missed. I cannot stress enough about the importance of taking care of these things before your first release candidate.

The basic steps I am taking for this Phase is as follows:

1. **Update Final Class Library**: Update Final ASP.NET Core Class Library project and solution parts we want to use across all applications, such as Constants, Enums, Helpers, etc.
   
2. **Update Final Web API Project**: Update ASP.NET Core Web API project and solution. This project will serve as the backend API that the frontend projects will communicate with.

3. **Update Final Shared Resources Project**: Update new ASP.NET Core project and solution that will handle common, static, assets and resources, shared across all applications. This project will serve as the resource project with all HTML, CSS, JS, Images and other creative all projects will use to carry the same theme, look and feel across applications.

4. **Implement Final Security Protocols**:
   - Each frontend project (_AngularJS_, _Vue_, _ReactJS_, _Blazor_, etc.) will need several security protocols implemented before final release. 
   -- Add custom validation client-side logic
   -- Add custom validation side-side logic
   -- Add custom validators to models
   -- Secure binding objects
   -- Update any shared objects of a sensitive nature to utilized sealed and internal objects over public defaults.
   
5. **Configure Routes**:
   - We will define appropriate routes in our Web API project to handle incoming requests from the frontend projects.
   - We will implement controllers and actions to handle these routes and interact with our data layer.

6. **Shared Models and Services**:
   - We will consider creating shared models and services in their own project, as opposed to housing them in the Web API project that can be used across both the Web API project and the frontend projects. This will help in maintaining consistency and reducing duplication of code.
   - An eventual version of this approach will leverage a structure where we have specific repositories for each service along with a generic repository to handle common CRUD operations, following a design pattern like the Repository Pattern.

7. **Authentication and Authorization (Optional)**:
   - We will use JWT (_JSON Web Tokens_) for authentication and role-based authorization.

8. **Testing and Debugging**:
   - Test the communication between the frontend projects and the Web API project.
   - Debug any issues that arise during development.

9. **Deployment**:
    - Deploy the Web API project and frontend projects to the desired hosting environment. Ensure that all projects are configured correctly for production.

10. **Continuous Integration and Continuous Deployment (CI/CD)**:
    - Set up CI/CD pipelines to automate the build and deployment process for your solution.



[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)



## In Conclusion

﻿

The `Phase 4: Implement Final Security Protocols, Deployment Strategies and More` Phase is the **MOST important** aspect of all applications being developed.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)



---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2024 - All Rights Reserved by Jason Silvestri

[Back to Parent](Docs/JSopX/Master/Phases)