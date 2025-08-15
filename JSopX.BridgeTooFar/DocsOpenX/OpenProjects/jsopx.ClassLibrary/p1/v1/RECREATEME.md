# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-class-library-logo.svg" style="width: 28px; height: auto; margin-right:12px; margin-top:12px;!important;"> JSopX™ Class Library Project

The **JSopX™ Class Library Project**, _code named_, `JSopX.ClassLibrary` is a totally **FREE**, open-source, Razor Class Library, and is a shared logic and utilities repository. Placing business logic or helper functions here ensures every project can draw from a single, reliable source, reducing code duplication and complexity. 

---

## **From Scratch Variant:**

> [!CAUTION]
> You are currently viewing the **"_Start From Scratch_" _Variant_** of the **JSopX™ Class Library Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---


```bash
# For The Cool Kids: Clone JSopX.ClassLibrary Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.ClassLibrary.git
```

---

[`Home`](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/README.md) » [`Introduction`](../../../../Introduction/) » [`Projects`](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/OpenProjects/) · · [`Use Latest`](../../../../OpenProjects/jsopx.ClassLibrary/) · [`By-Phase`](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/README.md) · **`From Scratch`** · · [`« Previous`](../../../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/RECREATEME.md) [`Next »`](../../../../OpenProjects/jsopx.WebAPI/p1/v1/RECREATEME.md)

---


## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Step 1: Recreate Using Class Library and ASP.NET Core Template](#step-1-recreate-using-aspnet-core-class-library-template)
  - [Step 2: Extend Weather Data](#step-2-extend-weather-data)
  - [Step 3: Integrate OIDC](#step-3-integrate-oidc)
  - [Step 4: Decouple from Built-In API](#step-4-decouple-from-built-in-api)
  - [Step 5: Standardize with RCLs and Libraries](#step-5-standardize-with-rcls-and-libraries)
  
---

## Current Phase

> [!IMPORTANT]
>
>**Phases 1**: This document is currently aligned with [Phase 1: Minimum Viable Product (MVP)](../../../../Phases/Phase-1.md) Business Requirements. 
> 

---

> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate** and may contain placeholder information.

---

## Overview

The **JSopX™ Class Library Project**, _code named_, `JSopX.ClassLibrary` is a totally **FREE**, open-source, Razor Class Library, and is a shared logic and utilities repository. Placing business logic or helper functions here ensures every project can draw from a single, reliable source, reducing code duplication and complexity.

We initially create the project to simulate a [Shared Data, Service & Function Project](../../../../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) that will need to be leveraged by the other new and existing client side and server side projects, which act as standards that conform to the initial [business requirements](../../../../Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../../../Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../../../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../../../OpenProjects/jsopx.VueCore/README.md), [React](../../../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../../../Introduction/JSopxDevelopmentStandards.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly, bridging-of-the-critical-gap, between front-end dynamism and back-end security. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

---

## Prerequisites

- [Visual Studio (v 17.14.11)](../../../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](../../../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](../../../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/AspNetCore.md)

[`Back to Top`](#table-of-contents)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Creating `JSopX.`ClassLibrary From Scratch**:

- **[Continue](#step-1-recreate-using-aspnet-core-class-library-template)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step, using the `JSopX.ClassLibrary` _From Scratch_ Variant.   

---

### 2. **Use Different Variant**:

- **[Install Using Latest](../../../../OpenProjects/jsopx.ClassLibrary/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.ClassLibrary` _Using Latest_ Variant.  
- **[Browse By-Phase](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.ClassLibrary` _By-Phase_ Variant.   
- **[Get All Projects](../../../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

## Step 1: Recreate Using ASP.NET Core Class Library Template


**Goal**: Build a shared utility library with properties and helpers (e.g., cryptography, JWT utilities).

1. **Open Visual Studio 2022 (v 17.14.11)**:
   - Ensure the proper technologies outlined in [Prerequisites](#prerequisites) are installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core with React”.
   - Configure:
     - Project Name: `JSopX.ClassLibrary`.
     - Location: e.g., `path\to\local\repo\JasonSilvestri\JSopX.ClassLibrary`.
     - Solution Name: `JSopX.ClassLibrary`.
     - .NET Framework (v 9.0.1)
   - Click Create.

3. **Set Up Initial Utilities**:
   - Add `AuthHelper.cs`:

     ```csharp
     using Microsoft.Extensions.Configuration;
     using Microsoft.IdentityModel.Tokens;
     using System.IdentityModel.Tokens.Jwt;
     using System.Security.Claims;
     using System.Text;

     namespace JSopX.ClassLibrary
     {
         public static class AuthHelper
         {
             public static string GenerateJwtToken(string username, IConfiguration config)
             {
                 var claims = new[] { new Claim(ClaimTypes.Name, username) };
                 var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
                 var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                 var token = new JwtSecurityToken(config["Jwt:Issuer"], config["Jwt:Audience"], claims, expires: DateTime.Now.AddMinutes(30), signingCredentials: creds);
                 return new JwtSecurityTokenHandler().WriteToken(token);
             }
         }
     }
     ```
   - Add `CryptoHelper.cs`:

     ```csharp
     using System.Security.Cryptography;
     using System.Text;

     namespace JSopX.ClassLibrary
     {
         public static class CryptoHelper
         {
             public static string Encrypt(string plainText, string key)
             {
                 using var aes = Aes.Create();
                 aes.Key = Encoding.UTF8.GetBytes(key.PadRight(32, '\0')[..32]);
                 aes.GenerateIV();
                 var encryptor = aes.CreateEncryptor(aes.Key, aes.IV);
                 using var ms = new MemoryStream();
                 ms.Write(aes.IV, 0, aes.IV.Length);
                 using (var cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))
                 using (var sw = new StreamWriter(cs))
                     sw.Write(plainText);
                 return Convert.ToBase64String(ms.ToArray());
             }

             public static string Decrypt(string cipherText, string key)
             {
                 var buffer = Convert.FromBase64String(cipherText);
                 using var aes = Aes.Create();
                 aes.Key = Encoding.UTF8.GetBytes(key.PadRight(32, '\0')[..32]);
                 var iv = buffer.Take(16).ToArray();
                 aes.IV = iv;
                 var decryptor = aes.CreateDecryptor(aes.Key, aes.IV);
                 using var ms = new MemoryStream(buffer, 16, buffer.Length - 16);
                 using var cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Read);
                 using var sr = new StreamReader(cs);
                 return sr.ReadToEnd();
             }
         }
     }
     ```

4. **Test the Base Setup**:
   - Build the project (`Ctrl+Shift+B`).
   - No runtime test yet—meant for referencing.


[`Back to Top`](#table-of-contents)

---

## Step 2: Extend Utilities

**Goal**: Add project-to-project properties.

1. **Add ProjectProperties.cs**:
   - ```csharp
     namespace JSopX.ClassLibrary
     {
         public static class ProjectProperties
         {
             public static string GetProjectVersion() => "1.0.0"; // Placeholder
             public static string GetEnvironment() => Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Development";
         }
     }
     ```

2. **Test**: Build and ensure no errors.


[`Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC

**Goal**: Support OIDC token validation.

1. **Update AuthHelper**:
   - Add NuGet: `Microsoft.IdentityModel.Tokens`.
   - Extend `AuthHelper.cs`:

     ```csharp
     public static bool ValidateOidcToken(string token, string authority, string audience)
     {
         var tokenHandler = new JwtSecurityTokenHandler();
         var validationParameters = new TokenValidationParameters
         {
             ValidateIssuer = true,
             ValidateAudience = true,
             ValidAudience = audience,
             ValidIssuer = authority,
             IssuerSigningKeyResolver = (token, securityToken, kid, parameters) =>
             {
                 var client = new HttpClient();
                 var keys = client.GetFromJsonAsync<JsonWebKeySet>($"{authority}/.well-known/openid-configuration/jwks").Result.Keys;
                 return keys.Select(k => new JsonWebKey(k));
             }
         };
         try
         {
             tokenHandler.ValidateToken(token, validationParameters, out _);
             return true;
         }
         catch
         {
             return false;
         }
     }
     ```

2. **Test**: Build—runtime testing happens in referencing projects.


[`Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: N/A—pure utility library, no API dependency.


[`Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

**Goal**: Ensure compatibility with ecosystem.

1. **Reference in Other Projects**:
   - Add to `JSopX.WebAPI`’s `AuthController`:

     ```csharp
     private string GenerateJwtToken(ApplicationUser user)
     {
         return AuthHelper.GenerateJwtToken(user.UserName, _config);
     }
     ```

2. **Test**: Build solution after referencing.


[`Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../../../OpenProjects/jsopx.WebAPI/p1/v1/RECREATEME.md)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step. You'll move onto the next project, using the `JSopX.WebAPI` _From Scratch_ Variant.   

---

1. **[Install Using Latest](../../../../OpenProjects/jsopx.ClassLibrary/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.ClassLibrary` _Using Latest_ Variant.  
2. **[Browse By-Phase](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.ClassLibrary` _By-Phase_ Variant.   
3. **[Get All Projects](../../../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/README.md) » [`Introduction`](../../../../Introduction/) » [`Projects`](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/OpenProjects/) · · [`Use Latest`](../../../../OpenProjects/jsopx.ClassLibrary/README.md) · [`By-Phase`](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/README.md) · **`From Scratch`** · · [`Back to Top`](#table-of-contents) · [`« Previous`](../../../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/RECREATEME.md) [`Next »`](../../../../OpenProjects/jsopx.WebAPI/p1/v1/RECREATEME.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
