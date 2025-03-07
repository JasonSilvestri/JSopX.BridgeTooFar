# JSopX™ Phase 1: Minimum Viable Product (MVP)


**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---


> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate** and may contain placeholder information.
>

---

[`Introduction`](../Introduction/) » [`Phases`](./ReadMe.md) » **`Phase 1`**   · · · [`« Previous`](./ReadMe.md) [`Next »`](./Phase-2.md)

---

## **Overview**

The sole purpose of Project Development Steps in **`Phase 1`** is to create a Minimum Viable Product (MVP) that needs to similuate a real-world case where stakeholders have been promised a proof-of-concept as soon as possible, that showcases a basic multi-platform, full-stack, enterprise-level project suite of all their current Client-Side & Server-Side Projects (e.g., _Asp.NET Core, Angular, Blazor, React, Vue, .NET MAUI Hybrid, NodeJS & More!_). 

[`Back to Top`](#table-of-contents)

---

## Table of Contents

  - [Overview](#overview)
  - [Phase 1: Minimum Viable Product (MVP)](#phase-1-minimum-viable-product-mvp)
    - [1. Add a Class Library](#1-add-a-class-library)
    - [2. Add a Web API Project](#2-add-a-web-api-project)
    - [3. Add a Shared Resources Project](#3-add-a-shared-resources-project)
    - [4. Add Frontend & Backend Web API Demo Projects](#4-add-frontend--backend-web-api-demo-projects)
    - [5. Add Common Projects to Frontend & Backend Web API Demo Projects](#5-add-common-projects-to-frontend--backend-web-api-demo-projects)

---

## **Phase 1: Minimum Viable Product (MVP)**

The sole purpose of Project Development Steps in **`Phase 1`** is to create a Minimum Viable Product (MVP) that needs to similuate a real-world case where stakeholders have been promised a proof-of-concept -and  as soon as possible.

---

### 1. **Add a Class Library**: 

Add a new ASP.NET Core Class Library project and solution. This project will serve as the common place where we share the most common class and interface parts we want to use across all applications, such as Constants, Enums, Helpers, etc.
   
[`Back to Top`](#table-of-contents)

---

### 2. **Add a Web API Project**: 

Add a new ASP.NET Core Web API project and solution. This project will serve as the backend API that the frontend projects will communicate with.

[`Back to Top`](#table-of-contents)

---

### 3. **Add a Shared Resources Project**: 

Add a new ASP.NET Core project and solution that will handle common, static, assets and resources, shared across all applications. This project will serve as the resource project with all HTML, CSS, JS, Images and other creative all projects will use to carry the same theme, look and feel across applications. For now, all projects will use the basic, out-of-the-box vanilla assets.

[`Back to Top`](#table-of-contents)

---

### 4. **Add Frontend & Backend Web API Demo Projects**:

   - Add separate projects and solutions for AngularJS, Vue, ReactJS, and Blazor. We will initially choose the appropriate project templates provided by Visual Studio.
   - For AngularJS, Vue, and ReactJS, we will consider creating separate ASP.NET Core Web Application projects and choosing the respective frontend frameworks (i.e., _Angular_, _Vue.js_, _React.js_) during project creation.
   - For Blazor, we will create a Blazor WebAssembly or Blazor Server project, depending on time. If I have bandwidth, I may also create a MAUI Hybrid Project, which is relatively new to the scene.

[`Back to Top`](#table-of-contents)

---

### 5. **Add Common Projects to Frontend & Backend Web API Demo Projects**:
   - Each frontend and backend project (_AngularJS_, _Vue_, _ReactJS_, _Blazor_, etc.) will make HTTP requests to the Web API project to fetch data or perform data operations, will use the Class Library containing constants, DTOs, and helper classes to perform other common operations, and will use the Shared Resources Library to share common themes, such as common CSS, JS, HTML. etc...).
   - Each frontend and backend project (_AngularJS_, _Vue_, _ReactJS_, _Blazor_, etc.) will use the Class Library containing constants, DTOs, and helper classes to perform other common operations. 
   - Each frontend and backend project (_AngularJS_, _Vue_, _ReactJS_, _Blazor_, etc.) will use the Shared Resources Library to share common themes, such as common CSS, JS, HTML. etc...).

[`Back to Top`](#table-of-contents)

---

[`Introduction`](../Introduction/) » [`Phases`](./ReadMe.md) » **`Phase 1`**  · · ·  [`Back to Top`](#table-of-contents) · · · [`« Previous`](./ReadMe.md) [`Next »`](./Phase-2.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri

