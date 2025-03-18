# Recreating JSopX™ Class Library Project: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite. Recreating the `JSopX.ClassLibrary` project shows us how to build a shared utility library with properties and helpers (e.g., cryptography, JWT utilities).

---

> [!CAUTION]
> **Phase 1: Minimum Viable Product (MVP):**
>
> This document is currently aligned with **Phase 1** of development. As a result, the content may not be fully accurate or ready for production use. Treat it as reference material while the project evolves.
> 
> For more details, see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](../../../../Phases/Phase-1.md).

---

[`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](../../../../OpenProjects/)  · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](../../../../OpenProjects/jsopx.OpenProjectX)

---

## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)

---

## **Overview**  

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from ASP.NET Core to Angular, React, Vue, Blazor, and .NET MAUI—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

Recreating the `JSopX.ClassLibrary` project shows us how to build a shared utility library with properties and helpers (e.g., cryptography, JWT utilities).

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.3)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/AspNetCore.md)
- [.NET Core Blazor (v 9.0.1)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/NetCoreBlazor.md)
- [.Net Core Maui Hybrid (v 9.0.1)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/NetCoreMauiHybrid.md)
- [Node (v 20.14.0)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/Node.md)
- [npm (v 10.8.1)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/npm.md)
- [Angular CLI (v 18.0.3)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/AngularCli.md)
- [React (v 18.2.0)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/React.md)
- [Vue (v 10.8.1)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/Vue.md)
- [Vite (v 3.4.21)](../../../../OpenProjects/jsopx.ClassLibrary/p1/v1/Technologies/Vite.md)


[`Back to Top`](#table-of-contents)

---

## Step 1: Recreate Using Class Library Template

**Goal**: Build a shared utility library with properties and helpers (e.g., cryptography, JWT utilities).

1. **Open Visual Studio 2022 (v 17.13.3)**:
   - Ensure .NET 9.0 SDK is installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “Class Library (.NET Core)”.
   - Configure:
     - Project Name: `JSopX.ClassLibrary`.
     - Location: `C:\JSopX\`.
     - Solution Name: `JSopX.ClassLibrary`.
     - Framework: .NET 9.0.
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

## `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for the `JSopX.ClassLibrary` JSopX™ Class Library Project.

You have a few options moving forward:

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board, which includes across projects.

[`Continue Course »`](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/)

---

### **2. Continue Focus on the Growth of just JSopX™ Class Library:**  

Although not recommended, if your pure focus is reverse engineering just the JSopX™ Class Library project for one reason or another, it's cool. I totally get it. It is part of why I created this series of applications, and in the ways I did. We are developers. We develop. We explore. We ask the question, "What If?".

[`Continue Evolving with JSopX™ Class Library »`](../../../../OpenProjects/jsopx.ClassLibrary/p2/v1/)


---

### **3. I Want My Blanky and Bubba:**  

You can always go back to the version of this application that is already created for you. No one is gonna bash you for starting from the beginning and regrouping.

[`« Start From Beginning`](../../../../OpenProjects/jsopx.ClassLibrary/)

---
  
[`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](../../../../OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](../../../../OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
