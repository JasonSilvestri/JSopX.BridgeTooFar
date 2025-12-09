# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-aspnet-core-logo.svg" style="width: 28px; height: auto; padding-right:12px;!important;"> JSopX™ Asp.Net Core Project

The **JSopX™ Asp.NET Core Project** is a **FREE**, open-source demonstration project built in Visual Studio, _code named_, `JSopX.AspNetCore`. It showcases the transformation of an existing ASP.NET Core application—complete with its own assets, Web APIs, and standards—into a scalable solution for optimal enterprise application migration.

---

## **Start From Scratch Variant:**

> [!WARNING]
> You are currently viewing the **"_Start From Scratch_" _Variant_** of the **JSopX™ Asp.Net Core Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---


```bash
# For The Cool Kids: Clone JSopX.AspNetCore Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.AspNetCore.git
```

---

[`Home`](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/README.md) » [`Introduction`](../../../../Introduction/) » [`Projects`](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/OpenProjects/) · · [`Use Latest`](../../../../OpenProjects/jsopx.AspNetCore/README.md) · [`By-Phase`](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/README.md) · **`From Scratch`** · · [`« Previous`](../../../../OpenProjects/jsopx.RCLxComponents/p1/v1/RECREATEME.md) [`Next »`](../../../../OpenProjects/jsopx.AngularCore/p1/v1/RECREATEME.md)

---


![Jason Silvestri Open Project EXperiences (JSopX™) 0. JSopX™ Enterprise Solution Asp.NET Core Splash](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-aspnet-core/in-markdown/aspnet-splash-simulate-container-markdown-step-0.png)

## Table of Contents  

 - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Corequisites](#corequisites)
  - [Business Concerns Addressed](#business-concerns-addressed)
      - [Step 1: Recreate Using Angular and ASP.NET Core Template](#step-1-recreate-jsopxaspnetcore-using-angular--aspnet-core-template)
      - [Step 2: Extend Weather Data](#step-2-extend-weather-data)
      - [Step 3: Integrate OIDC](#step-3-integrate-oidc)
      - [Step 4: Decouple from Built-In API](#step-4-decouple-from-built-in-api)
      - [Step 5: Standardize with RCLs and Libraries](#step-5-standardize-with-rcls-and-libraries)
  - [Next Steps](#next-steps)
  
---

## Overview

The **JSopX™ Asp.NET Core Project** is a **FREE**, open-source demonstration project built in Visual Studio, _code named_, `JSopX.AspNetCore`. It showcases the transformation of an existing ASP.NET Core application—complete with its own assets, Web APIs, and standards—into a scalable solution for optimal enterprise application migration.

By aligning varied frameworks—ranging from [ASP.NET Core](../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../OpenProjects/jsopx.VueCore/README.md), [React](../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../Introduction/JSopxDevelopmentStandards.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly, bridging-of-the-critical-gap, between front-end dynamism and back-end security. 


[`⇧ Back to Top`](#table-of-contents) 

---

## Current Phase

> [!CAUTION]
>
>**Phases 1**: This document is currently aligned with [Phase 1: Minimum Viable Product (MVP)](../../Phases/Phase-1.md) Business Requirements. 
> 

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring and/or installing just the `JSopX.AspNetCore` Project.

- [Visual Studio (v 17.14.21)](../../../../Technologies/#visual-studio)
- [.NET Framework (v 9.2.1)](../../../../Technologies/#net-framework)
- [ASP.NET Core (v 9.2.1)](../../../../Technologies/#aspnet-core)

---

## Corequisites

These resources served as the primary references during the development of the applications and related content. I followed them closely throughout, but I recommend revisiting them periodically—especially if you need clarity on any implementation decisions. 

- [Development Standards](../../../../Introduction/JSopxDevelopmentStandards.md)
- [Business Requirements](../../../../Introduction/JSopxEnterpriseBusinessRequirements.md)

---


## Business Concerns Addressed

The **JSopX™ Asp.Net Core Project** addresses **several** high-level **business concerns**, not only shown through design patterns and best practices within its own JSopX™ Project ecosystem, but ultimately as it evolves into a valuable project component of the Jason Silvestri Open Project EXperiences (JSopX™) Enterprise Application too. 

While this ASP.NET Core project often looks and feels like a standard server-side solution, it underpins the security, routing, and scalability principles that define the JSopX™ environment.

[`⇧ Back to Top`](#table-of-contents) · · [`Next »`](#1-recreate-to-simulate-an-existing-project)

---

## **1. Recreate to Simulate an Existing Project**:

We initially create the **JSopX™ Asp.NET Core Project** to simulate an ["Existing" Server-side Apps Example](../../Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) Weather Forecast Asp.NET Core application, with its own Web API and existing standards, to conform to the initial business requirements set forth by the fictional stakeholders.

![Jason Silvestri Open Project EXperiences (JSopX™) 1. Recreate to Simulate an Existing Project](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-aspnet-core/in-markdown/aspnet-splash-simulate-container-markdown-step-1.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#business-concerns-addressed) [`Next »`](#2-create-our-development-standards)

---

## **2. Create Our Development Standards**: 

JSopX™ Enterprise application development isn't just about writing code—it's about creating scalable, maintainable, and secure solutions that stand the test of time. This takes a series of disciplines that provide the framework for sustainable success, ensuring every project delivers efficiency, performance, and an exceptional developer experience.

> [!WARNING]
>
>The **biggest mistake** _businesses_ and/or their _developers_ make is not following some form of development standards.
> 

![Jason Silvestri Open Project EXperiences (JSopX™) 2. Create Our Development Standards](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-aspnet-core/in-markdown/aspnet-splash-simulate-container-markdown-step-2.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#1-recreate-to-simulate-an-existing-project) [`Next »`](#3-multi-platform-creative-standards)

---

## **3. Multi-Platform Creative Standards**: 

A visually inconsistent application creates confusion. Every JSopX™ project must maintain standardized UI/UX elements. We quickly design and customize multi-platform, web, desktop & native mobile applications, using Bootstrap v 5.3, which we then extend as we go by creating RCLs (_Razor Class Libraries_). 

![Jason Silvestri Open Project EXperiences (JSopX™) 3. Multi-Platform Creative Standards](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-aspnet-core/in-markdown/aspnet-splash-simulate-container-markdown-step-3.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#2-create-our-development-standards) [`Next »`](#4-using-object-oriented-programming)

---

## **4. Using Object-Oriented Programming**:

Enterprise applications must be **modular**, **reusable**, and **scalable** using **Object-Oriented Programming (OOP)**. 

We create Classes, RCLs, Web APIs, and other Resource Libraries, sharing resources across the JSopX™ ecosystem seamlessly. More rewarding, because we put the work in up front with developing & following standards, developers get to work on cooler things they are more passionate about too, like _Feature Highlights_.

![Jason Silvestri Open Project EXperiences (JSopX™) 4. Using Object-Oriented Programming](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-aspnet-core/in-markdown/aspnet-splash-simulate-container-markdown-step-4.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#3-multi-platform-creative-standards) [`Next »`](#5-we-get-to-extend-existing-project)

---

## **5. We Get to Extend Existing Project**:

As the project evolves through each Lifecycle Phase, we extend the application by creating new user interfaces, such as dashboards, logins, registration, in addition to being able to apply the standardized assets and resources we took the time to develop, implement security and writing documentation a well oiled machine and team relies on, and more!

![Jason Silvestri Open Project EXperiences (JSopX™) 5. We Get to Extend Existing Project](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-aspnet-core/in-markdown/aspnet-splash-simulate-container-markdown-step-5.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#4-using-object-oriented-programming) [`Next »`](#6-we-become-a-functioning-project-of-the-jsopx-enterprise-solution)

---

## **6. We Become A Functioning Project of the JSopX™ Enterprise Solution**:

The seamless integration into an enterprise-level application, adopting standardized Web API access, design patterns, and shared resources across the ecosystem.

![Jason Silvestri Open Project EXperiences (JSopX™) 6. We Become A Functioning Project of the JSopX™ Enterprise Solution](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/for-docs/jsopx-aspnet-core/in-markdown/aspnet-splash-simulate-container-markdown-step-6.png)

[`⇧ Back to Top`](#table-of-contents) · · [`« Previous`](#5-we-get-to-extend-existing-project) [`Next »`](#getting-started)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **`Continue` Creating `JSopX.AspNetCore` Project From Scratch**:

- **[Continue](#step-1-recreate-using-aspnet-core-template)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step, using the `JSopX.AspNetCore` _From Scratch_ Variant.   

---

### 2. **Use Different Variant**:

- [Install Using Latest](../../../../OpenProjects/jsopx.AspNetCore/README.md): **Install** or **explore** the latest version of **this project**, using the `JSopX.AspNetCore` _Using Latest_ Variant.  
- [Browse By-Phase](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/README.md): **Browse** **previous versions** of the application by **phases** using the `JSopX.AspNetCore` _By-Phase_ Variant.   
- [Get All Projects](../../../../OpenProjects/jsopx.OpenProjectX/README.md): **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---


## Step 1: Recreate Using ASP.NET Core Template

**Goal**: Simulate an existing ASP.NET Core app with weather data, Identity, and JWT already established.

1. **Open Visual Studio 2022 (v 17.14.21)**:
   - Ensure .NET 9.0 SDK is installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core Web App (Model-View-Controller)”.
   - Configure:
     - Project Name: `JSopX.AspNetCore`.
     - Location: e.g., `path\to\local\repo\JasonSilvestri\JSopX.AspNetCore`.
     - Solution Name: `JSopX.AspNetCore`.
     - .NET Framework (v 9.2.1)
   - Click Create.

3. **Set Up Initial Weather Data**:
   - Add `Models/WeatherForecast.cs`:

     ```csharp
     public class WeatherForecast
     {
         public DateTime Date { get; set; }
         public int TemperatureC { get; set; }
         public string Summary { get; set; }
     }
     ```
   - Add `Controllers/WeatherController.cs`:

     ```csharp
     [Authorize]
     public class WeatherController : Controller
     {
         private static readonly string[] Summaries = new[] { "Cool", "Warm", "Hot" };
         public IActionResult Index()
         {
             var forecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
             {
                 Date = DateTime.Now.AddDays(index),
                 TemperatureC = Random.Shared.Next(-20, 55),
                 Summary = Summaries[Random.Shared.Next(Summaries.Length)]
             }).ToList();
             return View(forecasts);
         }
     }
     ```
   - Add `Views/Weather/Index.cshtml`:

     ```cshtml
     @model List<WeatherForecast>
     <h1>JSopX™ Weather</h1>
     <table class="table">
         <thead>
             <tr><th>Date</th><th>Temp (°C)</th><th>Summary</th></tr>
         </thead>
         <tbody>
             @foreach (var forecast in Model)
             {
                 <tr>
                     <td>@forecast.Date.ToShortDateString()</td>
                     <td>@forecast.TemperatureC</td>
                     <td>@forecast.Summary</td>
                 </tr>
             }
         </tbody>
     </table>
     ```

4. **Add JWT (Recreate to Simulate Existing Setup)**:
   - Install NuGet: `Microsoft.AspNetCore.Authentication.JwtBearer`.
   - Update `Program.cs`:

     ```csharp
     builder.Services.AddAuthentication()
         .AddJwtBearer(options =>
         {
             options.TokenValidationParameters = new TokenValidationParameters
             {
                 ValidateIssuer = true,
                 ValidateAudience = true,
                 ValidateLifetime = true,
                 ValidateIssuerSigningKey = true,
                 ValidIssuer = builder.Configuration["Jwt:Issuer"],
                 ValidAudience = builder.Configuration["Jwt:Audience"],
                 IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
             };
         });
     builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("https://localhost:7234/") });
     var app = builder.Build();
     app.UseAuthentication();
     app.UseAuthorization();
     ```
   - Update `appsettings.json`:

     ```json
     {
       "Jwt": { "Key": "8f+2Kj9mPqL5xRtYvWnZcQwXjB3sM7hD9pN8uG4tA1o=", "Issuer": "JSopX", "Audience": "JSopX" }
     }
     ```
   - Add `Controllers/AuthController.cs`:

     ```csharp
     [Route("api/[controller]")]
     [ApiController]
     public class AuthController : ControllerBase
     {
         private readonly UserManager<IdentityUser> _userManager;
         private readonly IConfiguration _config;
         public AuthController(UserManager<IdentityUser> userManager, IConfiguration config)
         {
             _userManager = userManager; _config = config;
         }
         [HttpPost("login")]
         public async Task<IActionResult> Login([FromBody] LoginModel model)
         {
             var user = await _userManager.FindByNameAsync(model.Username);
             if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
             {
                 var token = GenerateJwtToken(user);
                 return Ok(new { token });
             }
             return Unauthorized();
         }
         private string GenerateJwtToken(IdentityUser user)
         {
             var claims = new[] { new Claim(ClaimTypes.Name, user.UserName) };
             var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
             var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
             var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], claims, expires: DateTime.Now.AddMinutes(30), signingCredentials: creds);
             return new JwtSecurityTokenHandler().WriteToken(token);
         }
     }
     public class LoginModel { public string Username { get; set; } public string Password { get; set; } }
     ```

5. **Test the Base Setup**:
   - Run `Update-Database`.
   - Start the app (`F5`).
   - Register at `/Identity/Account/Register`, log in, and visit `/Weather`.


[`⇧ Back to Top`](#table-of-contents)

---

## Step 2: Extend Weather Data

**Goal**: Add historical weather data.

1. **Update Weather Model**:
   - In `Models/WeatherForecast.cs`:

     ```csharp
     public int? HistoricalTempC { get; set; }
     ```

2. **Update Weather Controller**:
   - In `WeatherController.cs`:

     ```csharp
     public IActionResult Index()
     {
         var forecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
         {
             Date = DateTime.Now.AddDays(index),
             TemperatureC = Random.Shared.Next(-20, 55),
             Summary = Summaries[Random.Shared.Next(Summaries.Length)],
             HistoricalTempC = Random.Shared.Next(-25, 50)
         }).ToList();
         return View(forecasts);
     }
     ```

3. **Update View**:
   - In `Views/Weather/Index.cshtml`:

     ```cshtml
     <tr><th>Date</th><th>Temp (°C)</th><th>Historical Temp (°C)</th><th>Summary</th></tr>
     ...
     <td>@forecast.HistoricalTempC</td>
     ```

4. **Test**: Visit `/Weather` and confirm historical data shows.


[`⇧ Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC with Duende IdentityServer

**Goal**: Host IdentityServer here and use OIDC.

1. **Install Duende IdentityServer**:
   - NuGet: `Duende.IdentityServer.EntityFramework`.

2. **Configure IdentityServer**:
   - Add `Config.cs`:

     ```csharp
     using Duende.IdentityServer.Models;
     public static class Config
     {
         public static IEnumerable<IdentityResource> IdentityResources =>
             new[] { new IdentityResources.OpenId(), new IdentityResources.Profile() };
         public static IEnumerable<ApiScope> ApiScopes =>
             new[] { new ApiScope("api", "JSopX API") };
         public static IEnumerable<Client> Clients =>
             new[]
             {
                 new Client
                 {
                     ClientId = "maui",
                     ClientSecrets = { new Secret("secret".Sha256()) },
                     AllowedGrantTypes = GrantTypes.Code,
                     RedirectUris = { "https://localhost:7235/authentication/login-callback" },
                     AllowedScopes = { "openid", "profile", "api" }
                 },
                 new Client
                 {
                     ClientId = "blazorserver",
                     ClientSecrets = { new Secret("secret".Sha256()) },
                     AllowedGrantTypes = GrantTypes.Code,
                     RedirectUris = { "https://localhost:7236/signin-oidc" },
                     AllowedScopes = { "openid", "profile", "api" }
                 }
             };
     }
     ```
   - Update `Program.cs`:

     ```csharp
     builder.Services.AddIdentityServer()
         .AddInMemoryIdentityResources(Config.IdentityResources)
         .AddInMemoryApiScopes(Config.ApiScopes)
         .AddInMemoryClients(Config.Clients)
         .AddAspNetIdentity<IdentityUser>();
     builder.Services.AddAuthentication()
         .AddOpenIdConnect("oidc", options =>
         {
             options.Authority = "https://localhost:7235"; // Self-hosted
             options.ClientId = "asp";
             options.ClientSecret = "secret";
             options.ResponseType = "code";
             options.SaveTokens = true;
             options.Scope.Add("openid");
             options.Scope.Add("profile");
             options.Scope.Add("api");
         });
     var app = builder.Build();
     app.UseIdentityServer();
     ```

3. **Update Layout**:
   - In `Views/Shared/_Layout.cshtml`, tweak nav:

     ```cshtml
     <li><a href="/Weather">Weather</a></li>
     <partial name="_LoginPartial" />
     ```

4. **Test**: Run and log in via IdentityServer UI (auto-generated at `/connect/authorize`).


[`⇧ Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: Use `JSopX.WebAPI`.

1. **Add API Client**:
   - Update `WeatherController.cs`:

     ```csharp
     private readonly HttpClient _httpClient;
     public WeatherController(IHttpClientFactory factory)
     {
         _httpClient = factory.CreateClient("WebAPI");
     }
     public async Task<IActionResult> Index()
     {
         var forecasts = await _httpClient.GetFromJsonAsync<List<WeatherForecast>>("api/weather");
         return View(forecasts);
     }
     ```
   - In `Program.cs`:

     ```csharp
     builder.Services.AddHttpClient("WebAPI", client =>
     {
         client.BaseAddress = new Uri("https://localhost:7234/");
     });
     ```

2. **Test**: Ensure data pulls from `JSopX.WebAPI`.


[`⇧ Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

1. **Reference JSopX.RCLxProper**:
   - Add Razor component `WeatherDisplay.razor` to `JSopX.RCLxProper`:

     ```razor
     @using JSopX.AspNetCore.Models
     @model List<WeatherForecast>
     <table class="table">
         <thead><tr><th>Date</th><th>Temp (°C)</th><th>Historical Temp (°C)</th><th>Summary</th></tr></thead>
         <tbody>
             @foreach (var forecast in Model)
             {
                 <tr><td>@forecast.Date.ToShortDateString()</td><td>@forecast.TemperatureC</td><td>@forecast.HistoricalTempC</td><td>@forecast.Summary</td></tr>
             }
         </tbody>
     </table>
     ```
   - Update `Views/Weather/Index.cshtml`:

     ```cshtml
     <component type="typeof(JSopX.RCLxProper.WeatherDisplay)" render-mode="ServerPrerendered" param-Model="@Model" />
     ```

2. **Reference JSopX.SharedResources**:
   - Use `WeatherUtils.GetWeatherIcon` in `WeatherDisplay.razor`:

     ```razor
     <td>@WeatherUtils.GetWeatherIcon(forecast.Summary)</td>
     ```

3. **Test**: Verify RCL component and icons work.

[`⇧ Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../../../OpenProjects/jsopx.AngularCore/p1/v1/RECREATEME.md)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step. You'll move onto the next project, using the `JSopX.AngularCore` _From Scratch_ Variant.   

---

1. **[Install Using Latest](../../../../OpenProjects/jsopx.AspNetCore/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.AspNetCore` _Using Latest_ Variant.  
2. **[Browse By-Phase](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.AspNetCore` _By-Phase_ Variant.   
3. **[Get All Projects](../../../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/README.md) » [`Introduction`](../../../../Introduction/) » [`Projects`](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/OpenProjects/) · · [`Use Latest`](../../../../OpenProjects/jsopx.AspNetCore/README.md) · [`By-Phase`](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/README.md) · **`From Scratch`** · · [`⇧ Back to Top`](#table-of-contents) · [`« Previous`](../../../../OpenProjects/jsopx.RCLxComponents/p1/v1/RECREATEME.md) [`Next »`](../../../../OpenProjects/jsopx.AngularCore/p1/v1/RECREATEME.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
