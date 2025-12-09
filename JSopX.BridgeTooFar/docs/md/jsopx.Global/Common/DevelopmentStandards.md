# JSopX™ Enterprise-Level Solution — Development Standards (v1)

The **Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Disciplines & Standards for Sustainable Enterprise Product Development**

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Common`] » [`Workflow States`] ·· [`Junction Rules`]

---

## **Table of Contents**  

- [Overview](#overview)
- [1. Skeptical Analysis & Pre-Existing Project Evaluation](#skeptical-analysis--pre-existing-project-evaluation)
- [2. Documentation & Code Readability](#documentation--code-readability)
- [3. Security-First Approach](#security-first-approach)
- [4. Performance Optimization & Caching](#performance-optimization--caching)
- [5. Centralized API & Data Flow](#centralized-api--data-flow)
- [6. UI/UX Consistency & Creative Design](#uiux-consistency--creative-design)
- [7. Multi-Platform Compatibility](#multi-platform-compatibility)
- [8. Open-Source & Free Accessibility](#open-source--free-accessibility)
- [9. Source Control & Version Management](#source-control--version-management)
- [10. Project Lifecycle & Solution Architecture](#project-lifecycle--solution-architecture)
- [11. Object-Oriented Architecture & Scalability](#object-oriented-architecture--scalability)
- [12. Embracing Standards Amid Challenges](#embracing-standards-amid-challenges)
- [Postrequisites](#postrequisites)
- [Concomitants](#concomitants)
- [In Conclusion](#in-conclusion)
- [Next Steps](#next-steps)

---

## Overview

**JSopX™ Enterprise application development isn't just about writing code**—it's about creating scalable, maintainable, and secure solutions that stand the test of time. By exploring this section of the Document Management Project, you’ll start to understand that it takes a series of disciplines, design patterns, best practices and standards, specifically designed for sustainable enterprise product development.

---

## **Skeptical Analysis & Pre-Existing Project Evaluation**

Before engaging with an existing project, conduct a thorough evaluation to understand its current state and history.

- **Interpret business requirements** into carefully crafted action items, aligning them with working standards as often as possible.  
- **Assess the project's architecture and codebase** to identify potential issues and areas for improvement.
- **Engage with stakeholders** to comprehend their expectations and any previous challenges faced.
- **Determine the feasibility of integrating new features** without compromising existing functionalities.
- **Document findings and recommendations** to inform decision-making and ensure alignment with project goals.

[`⇧ Back to Top`](#table-of-contents)

---

## **Documentation & Code Readability**

Code that isn’t documented **doesn’t exist**. Every project must include **clear, structured documentation** for developers and stakeholders.  

- **Client-side**: Document **functions** in JavaScript/TypeScript using JSDoc or inline comments.  
- **Server-side**: Use `<summary></summary>` XML documentation for API controllers, services, and models.  
- **Every project must contain a `README.md`**, explaining setup, usage, and key features.  

[`⇧ Back to Top`]

---

## **Security-First Approach**  

Security isn’t **optional**—it's a **requirement**. Every project must implement **proactive security measures** at all levels.  

- **Validate and sanitize inputs** using TypeScript, Regular Expressions, and strict data-binding practices.  
- **Implement model validation** in **ASP.NET Core, Blazor, and MAUI Hybrid** to enforce data integrity.  
- **Enforce CORS policies** to regulate cross-domain API access.  
- **Utilize HTTPS encryption**, **JWT authentication**, and **OAuth** for secure transactions.  

[`⇧ Back to Top`]

---

## **Performance Optimization & Caching**  

A fast app is a usable app. **Enterprise applications must be optimized for speed and efficiency**.  

- Utilize **ASP.NET Core caching mechanisms** to store frequently accessed data.  
- Implement **lazy loading**, **deferred execution**, and **asynchronous requests** to optimize performance.  
- Use **CDN-hosted assets** and **browser caching** to reduce load times.  

[`⇧ Back to Top`]

---

## **Centralized API & Data Flow**

A **single, unified API strategy** is critical for **data consistency, maintainability, and scalability**.  

- Consolidate backend services into **one centralized Web API**.  
- Ensure **proper property binding** in Razor Pages and Blazor apps for seamless data processing.  
- Implement **client-side and server-side model validation** to prevent incorrect API calls.  

[`⇧ Back to Top`]

---

## **UI/UX Consistency & Creative Design**

A visually inconsistent application creates confusion. **Every JSopX™ project must maintain standardized UI/UX elements.**  

- Use **CSS frameworks (Bootstrap, Tailwind, etc.)** to create reusable design standards.  
- Extend branding into **Razor Class Libraries (RCLs)** for **scalable, modular UI components**.  
- Ensure **all UI components are responsive** and optimized for **desktop, tablet, and mobile experiences**.  

[`⇧ Back to Top`]

---

## **Multi-Platform Compatibility**

JSopX™ projects must work **seamlessly across multiple platforms**.  

- **Web Browsers**: Chrome, Edge, Firefox, Safari, etc.  
- **Desktop Apps**: Windows, Linux, macOS.  
- **Mobile**: iOS, Android, Samsung (via **.NET MAUI Hybrid** or **PWA**).  
- Leverage **Razor Components** to create shared UI experiences across platforms.  

[`⇧ Back to Top`]

---

## **Open-Source & Free Accessibility**

JSopX™ follows an **open-source-first philosophy**—no hidden fees, no locked features.  

- All **code, documentation, and assets** must be freely available.  
- No **proprietary dependencies** requiring paid licenses.  
- Ensure **projects are forkable, extendable, and transparent** for the community.  

[`⇧ Back to Top`]

---
## **Source Control & Version Management**

**Source control is non-negotiable**—it's the backbone of collaborative development and code integrity.

- **Utilize distributed version control systems** like **Git**, **SVN**, or **Mercurial** to manage code changes effectively.
- **Implement branching strategies** (e.g., Git Flow) to facilitate parallel development and streamline feature integration.
- **Integrate source control with CI/CD pipelines** to automate testing and deployment processes.
- **Maintain comprehensive commit histories** to ensure traceability and accountability across the development lifecycle.

[`⇧ Back to Top`]

---

## **Project Lifecycle & Solution Architecture**

A well-defined project lifecycle ensures **consistency, scalability, and maintainability** across enterprise applications.

- **Adopt standard project structures** using **Visual Studio**:
  - **`.csproj`** for server-side applications.
  - **`.esproj`** for client-side applications.
  - **`.sln`** files to manage and organize multiple related projects.
- **Separate concerns** by modularizing codebases into distinct projects for APIs, services, and UI components.
- **Implement lifecycle management practices** such as **planning**, **execution**, **monitoring**, and **closure** to align with business objectives and timelines.
- **Leverage tools** like **Azure DevOps** or **Jira** to track progress, manage tasks, and facilitate team collaboration throughout the project lifecycle.

[`⇧ Back to Top`]

---

## **Object-Oriented Architecture & Scalability**

Enterprise applications must be **modular, reusable, and scalable** using Object-Oriented Programming (**OOP**).  

- Maximize **code reusability** using **Class Libraries, Razor Class Libraries, and Web APIs**.  
- Adhere to **Clean Architecture** principles to maintain **separation of concerns**.  
- Follow **Visual Studio solution structures** that support **long-term scalability**.  

[`⇧ Back to Top`]

---

## **Embracing Standards Amid Challenges**

Adhering to established standards is crucial, even when facing unforeseen challenges. better yet, it is **imperative**—**absolutely critical** even—to stay **committed**.

- **Recognize that setbacks are part of the development process**, and maintaining standards helps navigate through them effectively.
- **Understand that strict adherence to standards** can prevent minor issues from escalating into major problems.
- **Foster a culture of accountability and continuous improvement**, encouraging team members to uphold standards consistently.
- **Reflect on past experiences** to reinforce the importance of standards in achieving long-term project success.

[`⇧ Back to Top`](#table-of-contents)

---

## **Postrequisites**  

🔹 Ensure that **all project components** are correctly configured and validated before moving to the next phase.  
🔹 **Conduct peer reviews** to validate documentation, architecture, and implementation.  

[`⇧ Back to Top`]

---

## **Concomitants**  

🔹 Ensure that **JSopX™ solutions** remain adaptable for **future enhancements and integrations**.  
🔹 Validate compatibility with **third-party integrations and dependencies**.  

[`⇧ Back to Top`]

---

## **In Conclusion**  

- **JSopX™ development disciplines ensure:**  
- **Skeptical Analysis & Pre-Existing Project Evaluation**
- **Security & Data Protection**  
- **Performance Optimization**  
- **Architecture, Scalability & Maintainability**  
- **Cross-Platform Compatibility**  
- **Multi-Platform Compatibility**  
- **Code Reusability & Documentation**  
- **Centralized API & Data Flow**  
- **UI/UX Creative Design Standards**  
- **Open-Source and/or Free Accessibility**  
- **Source Control & Version Management**
- **Project Lifecycle & Solution Architecture**
- **Embracing Standards Amid Challenges** 
- **Combatting Standards Guilt** 

> **"Discipline in coding creates discipline in application success."**  

[`⇧ Back to Top`]

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Common`] » [`Workflow States`] ··· **[`Junction Rules`]** ··· [`⇧ Back to Top`]

---

##### [jsopx.com] | [GitHub] | [Lexicon] | [Email] | Phone : 508-851-9445

###### Copyright © 2025 – All Rights Reserved by Jason Silvestri Open Project EXperiences (JSopX™)

[jsopx.com]: http://jsopx.com "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Products, Services and SaaS Services"
[Email]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Open Project EXperiences (JSopX™) Email Contact for Mark Silvetri"
[Phone]: phoneto:508-851-9445 "Jason Silvestri Open Project EXperiences (JSopX™) Phone Contact for Mark Silvetri"
[therealjasonsilvestri@gmail.com]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Open Project EXperiences (JSopX™) Email Contact for Mark Silvetri"
[508-851-9445]: phoneto:508-851-9445 "Jason Silvestri Open Project EXperiences (JSopX™) Phone Contact for Mark Silvetri"

[GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri Open Project EXperiences (JSopX™) GitHub Repository"

[Current Git Hub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Document Management Project Solution GitHub Repository"
[Current GitHub Home]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/README.md "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Document Management Project GitHub Home README.md"

<!--Root Lexicon -->
[Lexicon]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/Lexicon.md "JSopX™ Project Common Lexicon.md"
[`Lexicon`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/Lexicon.md "JSopX™ Project Common Lexicon.md"

<!--Root Solution Home-->
[`Home`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management Project Home README.md"
<!--Root Solution Project -->
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution example README.md"
<!--Root Solution Previous -->
[`« Previous`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution README.md"
<!--Root Solution Next -->
[`Next »`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution README.md"

<!--Install README.md - Often same as Root Solution-->
[`Intro`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/README.md "JSopX™ SaaS Project Solution Install README.md"
<!--Install README.md - Often same as Root Solution-->
[`Install`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/REINSTALLME.md "JSopX™ SaaS Project Solution Install README.md"
<!--Briefing REDEBRIEFME.md - The briefing of the Solution-->
[`Debrief`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/REDEBRIEFME.md "JSopX™ SaaS Document Management Project Briefing REDEBRIEFME.md"
<!--Recreate RECREATEME.md - The step by step instructions to Create Solution - often from briefing -->
[`Recreate`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/RECREATEME.md "JSopX™ SaaS Document Management Project Step by Step HowTo Re-Create RECREATEME.md"
<!--Recreate CHANGELOG.md - The Changelogs of Solution - often from briefing -->
[`Changelogs`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/CHANGELOG.md "JSopX™ SaaS Document Management Project Change Logs CHANGELOG.md"
<!--Recreate CONTRIBUTING.md - The Contributing Guidelines of Solution - often from briefing -->
[`Contributing`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/CONTRIBUTING.md "JSopX™ SaaS Contributor Guidelines CONTRIBUTING.md"
<!--Recreate CODE_OF_CONDUCT.md - The Code of Conduct of Solution - often from briefing -->
[`Conduct`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/CODE_OF_CONDUCT.md "JSopX™ SaaS Code of Conduct CODE_OF_CONDUCT.md"
<!--Recreate SECURITY.md - The Security Policy of Solution - often from briefing -->
[`Security`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/SECURITY.md "JSopX™ SaaS Security Policy SECURITY.md"
<!--Recreate LICENSE.txt - The LICENSE Policy of Solution - often from briefing -->
[`License`]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/SECURITY.md "JSopX™ LICENSE Policy LICENSE.txt"

<!--Root Solution Project Solutions -->
[`Common`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/README.md "JSopX™ SaaS Project Common README.md"
[⚙️ Workflow State]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[⚙️ `Workflow State`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[Workflow States]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Workflow States`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Junction Rules`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
[Junction Rules]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
[`Development Standards`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/DevelopmentStandards.md "JSopX™ Project Common Development Standards"
[Development Standards]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/DevelopmentStandards.md "JSopX™ Project Common Development Standards"

<!--Root Solution Project Solutions -->
[`Database`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/README.md "JSopX™ SaaS Project Common README.md"
[`Schema`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/Schema.md "JSopX™ SaaS Project Common Schema.md"

<!--Root Solution Project Solutions -->
[`Solutions`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md "JSopX™ SaaS Project Solutions README.md"
<!--Root Solution Project Visual Studio Templates -->
[`VS Templates`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md "JSopX™ SaaS Visual Studio Project Solutions Templates README.md"
<!--Root Solution Technologies -->
[`Technologies`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md "JSopX™ Project Solution Technologies README.md"

<!-- Back to Top links (all styles) found under most sections -->
[Back to Top]: #table-of-contents "Primary document table of contents"
[`Back to Top`]: #table-of-contents "Primary document table of contents"
[`⇧ Back to Top`]: #table-of-contents "Primary document table of contents"

<!-- Long Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`<https://github.com/JasonSilvestri/OpenProjectX>`]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Core>`]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.SharedResources>`]: https://github.com/JasonSilvestri/JSopX.SharedResources "JSopX™ Shared Resources SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Halos>`]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.WebAPI>`]: https://github.com/JasonSilvestri/JSopX.WebAPI "JSopX™ WebAPI SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Data>`]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.RCLxAssets>`]: https://github.com/JasonSilvestri/JSopX.RCLxAssets "JSopX™ RCL x Assets SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Presentation>`]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.ClassLibrary>`]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.RCLxComponents>`]: https://github.com/JasonSilvestri/JSopX.RCLxComponents "JSopX™ RCL x Components SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.SaaS>`]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore>`]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Titrate SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.RCLxProper>`]: https://github.com/JasonSilvestri/JSopX.RCLxProper "JSopX™ RCL x Proper SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.HealthTracker>`]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.Maui.MPA>`]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.CRM>`]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.PLM>`]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.AngularCore>`]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.AngularCore>`]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core consumption SaaS Example Project"

<!-- Short Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX GitHub]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[JSopX.Core GitHub]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[JSopX.Data GitHub]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[JSopX.SharedResources GitHub]: https://github.com/JasonSilvestri/JSopX.SharedResources "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos GitHub]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[JSopX.WebAPI GitHub]: https://github.com/JasonSilvestri/JSopX.WebAPI "JSopX™ Web API SaaS Project"
[JSopX.RCLxAssets GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxAssets "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation GitHub]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary GitHub]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[JSopX.RCLxComponents GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxComponents "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS GitHub]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore GitHub]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Titrate SaaS Project"
[JSopX.RCLxProper GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxProper "JSopX™ RCL x Proper SaaS Project"
[JSopX.HealthTracker GitHub]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA GitHub]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[JSopX.CRM GitHub]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM GitHub]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.AngularCore GitHub]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core SaaS Project"

[JSopX.AngularCore GitHub]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core consumption SaaS Example Project"

<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX]: /JSopX.BridgeTooFar/docs/md/OpenProjectX/README.md "JSopX™ Enterprise-Level Solution"
[JSopX.Core]: /JSopX.BridgeTooFar/docs/md/jsopx.Core/README.md "JSopX™ Core SaaS Project"
[JSopX.Data]: /JSopX.BridgeTooFar/docs/md/jsopx.Data/README.md "JSopX™ Data SaaS Project"
[JSopX.SharedResources]: /JSopX.BridgeTooFar/docs/md/jsopx.SharedResources/README.md "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos]: /JSopX.BridgeTooFar/docs/md/jsopx.Halos/README.md "JSopX™ Halos SaaS Project"
[JSopX.WebAPI]: /JSopX.BridgeTooFar/docs/md/jsopx.WebAPI/README.md "JSopX™ WebAPI SaaS Project"
[JSopX.RCLxAssets]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxAssets/README.md "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation]: /JSopX.BridgeTooFar/docs/md/jsopx.Presentation/README.md "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary]: /JSopX.BridgeTooFar/docs/md/jsopx.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[JSopX.RCLxComponents]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxComponents/README.md "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS]: /JSopX.BridgeTooFar/docs/md/jsopx.SaaS/README.md "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore]: /JSopX.BridgeTooFar/docs/md/jsopx.MauiHybridNetCore/README.md "JSopX™ MAUI Titrate SaaS Project"
[JSopX.RCLxProper]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxProper/README.md "JSopX™ RCL x Proper SaaS Project"
[JSopX.HealthTracker]: /JSopX.BridgeTooFar/docs/md/jsopx.HealthTracker/README.md "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA]: /JSopX.BridgeTooFar/docs/md/jsopx.Maui.MPA/README.md "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[JSopX.CRM]: /JSopX.BridgeTooFar/docs/md/jsopx.CRM/README.md "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM]: /JSopX.BridgeTooFar/docs/md/jsopx.PLM/README.md "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.AngularCore]: /JSopX.BridgeTooFar/docs/md/jsopx.AngularCore/README.md "JSopX™ Angular Core SaaS Project"

<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solutions & Version All SaaS Projects -->
[JSopX (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopx "JSopX™ Enterprise-Level Solution"
[JSopX.Core (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxcore "JSopX™ Core SaaS Project"
[JSopX.Data (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxdata "JSopX™ Data SaaS Project"
[JSopX.SharedResources (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxml "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxhalos "JSopX™ WebAPI SaaS Project"
[JSopX.RCLxAssets (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxvault "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxpresentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxutilities "JSopX™ Utilities SaaS Project"
[JSopX.RCLxComponents (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxunitx "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxsaas "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxtitrate "JSopX™ MAUI Titrate SaaS Project"
[JSopX.RCLxProper (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxendgame "JSopX™ RCL x Proper SaaS Project"
[JSopX.HealthTracker (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxtitrate "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxmauimpa "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxbridgetoofar "JSopX™ Document Management SaaS Project"
[JSopX.CRM (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxcrm "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxplm "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.AngularCore (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxangularcore "JSopX™ Product Lifecycle Management SaaS Project"


<!-- Short Form Local Document Management Links of all JSopX™ Visual Studio Templates-->
[Blank Solution VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#blank-solution-visual-studio-template "JSopX™ Visual Studio Blank Solution Project Template"
[ASP.NET Core Web App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#aspnet-core-web-app-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web App Project Template"
[Website App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#website-visual-studio-template "JSopX™ Visual Studio Website Project Template"
[Console App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#console-app-visual-studio-template "JSopX™ Visual Studio Console App Project Template"
[Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#class-library-visual-studio-template "JSopX™ Visual Studio Class Library Project Template"
[Razor Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#razor-class-library-visual-studio-template "JSopX™ Visual Studio Razor Class Library Project Template"
[Asp.NET Core Web API VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#aspnet-core-web-api-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web Api Project Template"
[Angular and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#angular-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Angular and ASP.NET Core Project Template"
[React and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#react-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio React and ASP.NET Core Project Template"
[Vue and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#vue-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Vue and ASP.NET Core Project Template"
[Blazor Web App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#blazor-web-app-visual-studio-template "JSopX™ Visual Studio Blazor Web App Project Template"
[.NET MAUI Blazor Hybrid and Web App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#net-maui-blazor-hybrid-and-web-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Blazor Hybrid and Web App Project Template"
[.NET MAUI Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#net-maui-class-library-visual-studio-template "JSopX™ Visual Studio .NET MAUI Class Library Project Template"
[Website VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#website-visual-studio-template "JSopX™ Visual Studio Website Project Template"
[.NET MAUI Multi-Project App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#net-maui-multi-project-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Multi-Project App Project Template"
<!-- Short Form Local Document Management Links of all JSopX™ Visual Studio Templates Page by Page -->
[Blank Solution Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/BlankSolution.md "JSopX™ Visual Studio Blank Solution Project Template"
[ASP.NET Core Web App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/AspNetCoreWebApp.md "JSopX™ Visual Studio ASP.NET Core Web App Project Template"
[Website App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/Website.md "JSopX™ Visual Studio Website Project Template"
[Console App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/ConsoleApp.md "JSopX™ Visual Studio Console App Project Template"
[Class Library Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/ClassLibrary.md "JSopX™ Visual Studio Class Library Project Template"
[Razor Class Library Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/RazorClassLibrary.md "JSopX™ Visual Studio Razor Class Library Project Template"
[Asp.NET Core Web API Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/AspNetCoreWebApi.md "JSopX™ Visual Studio ASP.NET Core Web Api Project Template"
[Angular and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/AngularAspNetCore.md "JSopX™ Visual Studio Angular and ASP.NET Core Project Template"
[React and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/ReactAspNetCore.md "JSopX™ Visual Studio React and ASP.NET Core Project Template"
[Vue and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/VueAspNetCore.md "JSopX™ Visual Studio Vue and ASP.NET Core Project Template"
[Blazor Web App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/BlazorWebApp.md "JSopX™ Visual Studio Blazor Web App Project Template"
[.NET MAUI Blazor Hybrid and Web App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/NetMauiBlazorHybridandWeb.md "JSopX™ Visual Studio .NET MAUI Blazor Hybrid and Web App Project Template"
[.NET MAUI Class Library Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/NetMauiClassLibrary.md "JSopX™ Visual Studio .NET MAUI Class Library Project Template"
[.NET MAUI Multi-Project App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/NetMauiMultiProjectApp.md "JSopX™ Visual Studio .NET MAUI Multi-Project App Project Template"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[npm]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[Vue]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[Vite]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[Python]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[Bash]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows (v 10+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Windows.md "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio (v 17.14.21)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/VisualStudio.md "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/NetFrameworkSdk.md "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/AspNetCore.md "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/NetCoreBlazor.md "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/NetCoreMauiHybrid.md "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node (v 20.14.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Node.md "JSopX™ SaaS Project Node Technology Requirements"
[npm (v 10.8.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/npm.md "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap (v 5.3.8)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Bootstrap.md "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI (v 18.0.3)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/AngularCli.md "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React (v 18.2.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/React.md "JSopX™ SaaS Project React Technology Requirements"
[Vue (v 3.4.21)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Vue.md "JSopX™ SaaS Project Vue Technology Requirements"
[Vite (v 5.2.8)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Vite.md "JSopX™ SaaS Project Vite Technology Requirements"
[Python (v 3.12.3x+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Python.md "JSopX™ SaaS Project Python Technology Requirements"
[Bash (v 5.x+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Bash.md "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell (v 7.x+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Powershell.md "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[Created]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#created
[Queued]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#queued
[In Progress]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#in-progress
[Waiting]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#waiting
[Passed]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#passed
[Failed]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#failed
[Rejected]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#rejected
[Cancelled]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#cancelled
[Skipped]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#skipped
[Timeout]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#timeout
[Network Error]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#network-error
[Validation Error]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#validation-error
[Retrying]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#retrying
[Blocked]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#blocked
[Completed]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#completed
[To Do]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#to-do
[Started]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#started
[Pending]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#pending
[Expired]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#expired
[Approved]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#approved
[Sent]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#sent
[Received]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#received
[Under Review]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#under-review
[Soft Delete]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#soft-delete
[Hard Delete]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#hard-delete
[Unknown]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#unknown
[Null or Empty]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#null-or-empty
[Active]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#active

<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[`CREATED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#created
[`QUEUED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#queued
[`IN PROGRESS`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#in-progress
[`WAITING`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#waiting
[`PASSED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#passed
[`FAILED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#failed
[`REJECTED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#rejected
[`CANCELLED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#cancelled
[`SKIPPED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#skipped
[`TIMEOUT`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#timeout
[`NETWORK ERROR`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#network-error
[`VALIDATION ERROR`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#validation-error
[`RETRYING`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#retrying
[`BLOCKED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#blocked
[`COMPLETED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#completed
[`TO DO`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#to-do
[`STARTED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#started
[`PENDING`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#pending
[`EXPIRED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#expired
[`APPROVED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#approved
[`SENT`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#sent
[`RECEIVED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#received
[`UNDER REVIEW`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#under-review
[`SOFT DELETE`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#soft-delete
[`HARD DELETE`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#hard-delete
[`UNKNOWN`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#unknown
[`NULL OR EMPTY`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#null-or-empty
[`ACTIVE`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#active