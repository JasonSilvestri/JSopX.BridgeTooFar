# Recreating JSopX™ Asp.NET Core Project: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite. Recreating the `JSopX.AspNetCore` project shows us how to simulate an existing ASP.NET Core app with weather data, Identity, and JWT already established.

---

> [!CAUTION]
> **Phase 1: Minimum Viable Product (MVP):**
>
> This document is currently aligned with **Phase 1** of development. As a result, the content may not be fully accurate or ready for production use. Treat it as reference material while the project evolves.
> 
> For more details, see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](../../../../Phases/Phase-1.md).

---

[`Home`](../../../../../README.md) » [`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](../../../../OpenProjects/)  · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](../../../../OpenProjects/jsopx.OpenProjectX)

---

## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)

---

## **Overview**  

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from ASP.NET Core to Angular, React, Vue, Blazor, and .NET MAUI—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

Recreating the `JSopX.AspNetCore` project shows us how to simulate an existing ASP.NET Core app with weather data, Identity, and JWT already established.

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.5)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/AspNetCore.md)
- [.NET Core Blazor (v 9.0.1)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/NetCoreBlazor.md)
- [.Net Core Maui Hybrid (v 9.0.1)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/NetCoreMauiHybrid.md)
- [Node (v 20.14.0)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/Node.md)
- [npm (v 10.8.1)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/npm.md)
- [Angular CLI (v 18.0.3)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/AngularCli.md)
- [React (v 18.2.0)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/React.md)
- [Vue (v 3.4.21)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/Vue.md)
- [Vite (v 5.2.8)](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/Technologies/Vite.md)


[`Back to Top`](#table-of-contents)

---

## Step 1: Recreate Using ASP.NET Core Template

**Goal**: Simulate an existing ASP.NET Core app with weather data, Identity, and JWT already established.

1. **Open Visual Studio 2022 (v 17.13.5)**:
   - Ensure .NET 9.0 SDK is installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core Web App (Model-View-Controller)”.
   - Configure:
     - Project Name: `JSopX.AspNetCore`.
     - Location: e.g., `C:\JSopX\`.
     - Solution Name: `JSopX.AspNetCore`.
     - .NET Framework (v 9.0.1)
     - Authentication: Individual Accounts (includes Identity).
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

4. **Add JWT (Simulating Existing Setup)**:
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


[`Back to Top`](#table-of-contents)

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


[`Back to Top`](#table-of-contents)

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


[`Back to Top`](#table-of-contents)

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


[`Back to Top`](#table-of-contents)

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

[`Back to Top`](#table-of-contents)

---

## `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for the `JSopX.AspNetCore` JSopX™ Asp.NET Core Project.

You have a few options moving forward:

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board, which includes across projects.

[`Continue Course »`](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/)

---

### **2. Continue Focus on the Growth of just JSopX™ Asp.NET Core:**  

Although not recommended, if your pure focus is reverse engineering just the JSopX™ Asp.NET Core project for one reason or another, it's cool. I totally get it. It is part of why I created this series of applications, and in the ways I did. We are developers. We develop. We explore. We ask the question, "What If?".

[`Continue Evolving with JSopX™ Asp.NET Core »`](../../../../OpenProjects/jsopx.AspNetCore/p2/v1/)


---

### **3. I Want My Blanky and Bubba:**  

You can always go back to the version of this application that is already created for you. No one is gonna bash you for starting from the beginning and regrouping.

[`« Start From Beginning`](../../../../OpenProjects/jsopx.AspNetCore/)

---
  
[`Home`](../../../../../README.md) » [`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](../../../../OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](../../../../OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
