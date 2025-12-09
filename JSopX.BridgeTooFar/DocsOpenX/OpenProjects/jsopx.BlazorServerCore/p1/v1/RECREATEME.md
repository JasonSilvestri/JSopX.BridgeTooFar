# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-blazor-server-core-logo.svg" style="width: 28px; height: auto; padding-right:12px;!important;"> JSopX™ Blazor Server Core Project

The **JSopX™ Blazor Server Core Project**, _code named_, `JSopX.BlazorServerCore` is a totally **FREE**, open-source, demonstration project showcasing how to build a web application using Blazor and ASP.NET Core Web API. 

---

## **Start From Scratch Variant:**

> [!WARNING]
> You are currently viewing the **"_Start From Scratch_" _Variant_** of the **JSopX™ Blazor Server Core Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---


```bash
# For The Cool Kids: Clone JSopX.AspNetCore Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.BlazorServerCore.git
```

---

[`Home`](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/README.md) » [`Introduction`](../../../jsopx.Global/Introduction/) » [`Projects`](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/OpenProjects/) · · [`Use Latest`](../../../../OpenProjects/jsopx.BlazorServerCore/README.md) · [`By-Phase`](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/README.md) · **`From Scratch`** · · [`« Previous`](../../../../OpenProjects/jsopx.VueCore/p1/v1/RECREATEME.md) [`Next »`](../../../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/RECREATEME.md)

---


  

> [!CAUTION]
> **Deprecated:**
> 
> The content before you is deprecated. Visit **[https://github.com/JasonSilvestri/JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar)** for the latest version.
>

---

## Table of Contents


  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
      - [Step 1: Recreate Using ASP.NET Core Blazor Template](#step-1-recreate-using-aspnet-core-blazor-template)
      - [Step 2: Extend Weather Data](#step-2-extend-weather-data)
      - [Step 3: Integrate OIDC](#step-3-integrate-oidc)
      - [Step 4: Decouple from Built-In API](#step-4-decouple-from-built-in-api)
      - [Step 5: Standardize with RCLs and Libraries](#step-5-standardize-with-rcls-and-libraries)
  - [Next Steps](#next-steps)
  
---

## Current Phase

> [!IMPORTANT]
>
>**Phases 1**: This document is currently aligned with [Phase 1: Minimum Viable Product (MVP)](../../../../../../Phases/Phase-1.md) Business Requirements. 
> 

---

> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate** and may contain placeholder information.

---

## Overview

The **JSopX™ Blazor Server Core Project**, _code named_, `JSopX.BlazorServerCore` is a totally **FREE**, open-source, demonstration project showcasing how interactive web UIs can be built efficiently under the JSopX™ umbrella. By integrating with shared APIs and resources, it highlights the power and flexibility of Blazor’s real-time server-side model.

Like the ["Existing" Client-side Apps Example](../../../jsopx.Global/Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) projects, we do still initially create the project to simulate an ["Existing" Server-side Apps Example](../../../jsopx.Global/Introduction/JSopxProjectsFamilies.md#4-server-side-existing-apps-examples) Weather Forecast Asp.NET Core Blazor application, with its own Web API and existing standards, to conform to the initial [business requirements](../../../jsopx.Global/Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../../../Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../../../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../../../OpenProjects/jsopx.VueCore/README.md), [React](../../../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../../jsopx.Global/Introduction/JSopxDevelopmentStandards.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly, bridging-of-the-critical-gap, between front-end dynamism and back-end security. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

[`⇧ Back to Top`](#table-of-contents)

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring and/or installing just the `JSopX.AspNetCore` Project.

- [Visual Studio (v 17.14.21)](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/Technologies/#visual-studio)
- [.NET Framework (v 9.2.1)](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/Technologies/#net-framework)
- [ASP.NET Core (v 9.2.1)](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/Technologies/#aspnet-core)
- [.NET Core Blazor (v 9.2.1)](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/Technologies/#net-core-blazor)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Creating `JSopX.`BlazorServerCore From Scratch**:

- **[Continue](#step-1-recreate-using-aspnet-core-blazor-template)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step, using the `JSopX.BlazorServerCore` _From Scratch_ Variant.   

---

### 2. **Use Different Variant**:

- **[Install Using Latest](../../../../OpenProjects/jsopx.BlazorServerCore/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.BlazorServerCore` _Using Latest_ Variant.  
- **[Browse By-Phase](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.BlazorServerCore` _By-Phase_ Variant.   
- **[Get All Projects](../../../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---


## Step 1: Recreate Using ASP.NET Core Blazor Template

**Goal**: Simulate an existing Blazor Server app with weather data, Identity, and JWT already in place.

1. **Open Visual Studio 2022 (v 17.14.21)**:
   - Confirm .NET 9.0 SDK is installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “Blazor Server App”.
   - Configure:
     - Project Name: `JSopX.BlazorServerCore`.
     - Location: e.g., `path\to\local\repo\JasonSilvestri\JSopX.BlazorServerCore`.
     - Solution Name: `JSopX.BlazorServerCore`.
     - .NET Framework (v 9.2.1)
   - Click Create.

3. **Set Up Initial Weather Data**:
   - In `Pages/Weather.razor`, update to match the MAUI look:

     ```razor
     @page "/weather"
     @inject HttpClient Http
     <h1>JSopX™ Weather</h1>
     @if (forecasts == null)
     {
         <p>Loading...</p>
     }
     else
     {
         <table>
             <thead>
                 <tr><th>Date</th><th>Temp (°C)</th><th>Summary</th></tr>
             </thead>
             <tbody>
                 @foreach (var forecast in forecasts)
                 {
                     <tr>
                         <td>@forecast.Date.ToShortDateString()</td>
                         <td>@forecast.TemperatureC</td>
                         <td>@forecast.Summary</td>
                     </tr>
                 }
             </tbody>
         </table>
     }
     @code {
         private WeatherForecast[] forecasts;
         protected override async Task OnInitializedAsync()
         {
             forecasts = await Http.GetFromJsonAsync<WeatherForecast[]>("WeatherForecast");
         }
     }
     ```
   - In `Controllers/WeatherForecastController.cs`, keep the default:

     ```csharp
     [Authorize]
     [ApiController]
     [Route("[controller]")]
     public class WeatherForecastController : ControllerBase
     {
         private static readonly string[] Summaries = new[] { "Cool", "Warm", "Hot" };
         [HttpGet]
         public IEnumerable<WeatherForecast> Get()
         {
             return Enumerable.Range(1, 5).Select(index => new WeatherForecast
             {
                 Date = DateTime.Now.AddDays(index),
                 TemperatureC = Random.Shared.Next(-20, 55),
                 Summary = Summaries[Random.Shared.Next(Summaries.Length)]
             }).ToArray();
         }
     }
     ```

4. **Add JWT (Recreate to Simulate Existing Setup)**:
   - Install NuGet: `Microsoft.AspNetCore.Authentication.JwtBearer`.
   - Update `Program.cs` (after Identity setup):

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
     builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("https://localhost:7234/") }); // Temp API URL
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
   - Run migrations: `Update-Database`.
   - Start the app (`F5`).
   - Register via `/Identity/Account/Register`, log in, and hit `/weather` to see data (requires auth).


[`⇧ Back to Top`](#table-of-contents)

---

## Step 2: Extend Weather Data

**Goal**: Add historical weather data.

1. **Update Weather Model**:
   - In `WeatherForecast.cs`:

     ```csharp
     public class WeatherForecast
     {
         public DateTime Date { get; set; }
         public int TemperatureC { get; set; }
         public string Summary { get; set; }
         public int? HistoricalTempC { get; set; }
     }
     ```

2. **Update Weather Controller**:
   - In `WeatherForecastController.cs`:

     ```csharp
     [HttpGet]
     public IEnumerable<WeatherForecast> Get()
     {
         return Enumerable.Range(1, 5).Select(index => new WeatherForecast
         {
             Date = DateTime.Now.AddDays(index),
             TemperatureC = Random.Shared.Next(-20, 55),
             Summary = Summaries[Random.Shared.Next(Summaries.Length)],
             HistoricalTempC = Random.Shared.Next(-25, 50)
         }).ToArray();
     }
     ```

3. **Update Weather Page**:
   - In `Pages/Weather.razor`:

     ```razor
     <tr><th>Date</th><th>Temp (°C)</th><th>Historical Temp (°C)</th><th>Summary</th></tr>
     ...
     <td>@forecast.HistoricalTempC</td>
     ```

4. **Test**: Reload `/weather` and verify historical data appears.


[`⇧ Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC

**Goal**: Shift to OIDC with Duende IdentityServer.

1. **Install OIDC**:
   - NuGet: `Microsoft.AspNetCore.Authentication.OpenIdConnect`.

2. **Configure OIDC**:
   - Update `Program.cs`:

     ```csharp
     builder.Services.AddAuthentication(options =>
     {
         options.DefaultScheme = "Cookies";
         options.DefaultChallengeScheme = "oidc";
     })
     .AddCookie("Cookies")
     .AddOpenIdConnect("oidc", options =>
     {
         options.Authority = "https://localhost:5001"; // IdentityServer URL
         options.ClientId = "blazorserver";
         options.ClientSecret = "secret";
         options.ResponseType = "code";
         options.SaveTokens = true;
         options.Scope.Add("openid");
         options.Scope.Add("profile");
         options.Scope.Add("api");
     });
     ```

3. **Update Layout**:
   - In `Layouts/MainLayout.razor`:

     ```razor
     <AuthorizeView>
         <Authorized>
             <a href="/weather">Weather</a>
             <a href="Identity/Account/Logout">Logout</a>
         </Authorized>
         <NotAuthorized>
             <a href="Identity/Account/Login">Login</a>
         </NotAuthorized>
     </AuthorizeView>
     ```

4. **Test**: Requires IdentityServer setup (coming in `JSopX.AspNetCore`).


[`⇧ Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: Use `JSopX.WebAPI`.

1. **Update Weather Page**:
   - In `Weather.razor`:

     ```razor
     forecasts = await Http.GetFromJsonAsync<WeatherForecast[]>("https://localhost:7234/api/weather");
     ```

2. **Ensure Auth**:
   - Add JWT token to HttpClient (for now, assume manual login via `/api/auth/login`).

3. **Test**: Run with `JSopX.WebAPI` and verify data pulls correctly.


[`⇧ Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

1. **Reference JSopX.RCLxProper**:
   - Add reference to `JSopX.RCLxProper`.
   - Move `Weather.razor` to `JSopX.RCLxProper/Pages/Weather.razor`.
   - Update `App.razor` to include RCL routes.

2. **Reference JSopX.SharedResources**:
   - Use `WeatherUtils.GetWeatherIcon` in `Weather.razor`:

     ```razor
     <td>@WeatherUtils.GetWeatherIcon(forecast.Summary)</td>
     ```

3. **Test**: Verify weather page loads with icons.

[`⇧ Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/RECREATEME.md)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step. You'll move onto the next project, using the `JSopX.MauiHybridNetCore` _From Scratch_ Variant.   

---

1. **[Install Using Latest](../../../../OpenProjects/jsopx.BlazorServerCore/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.BlazorServerCore` _Using Latest_ Variant.  
2. **[Browse By-Phase](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.BlazorServerCore` _By-Phase_ Variant.   
3. **[Get All Projects](../../../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.


---

[`Home`](../../../../OpenProjects/jsopx.AspNetCore/p1/v1/README.md) » [`Introduction`](../../../jsopx.Global/Introduction/) » [`Projects`](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/OpenProjects/) · · [`Use Latest`](../../../../OpenProjects/jsopx.BlazorServerCore/README.md) · [`By-Phase`](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/README.md) · **`From Scratch`** · · [`⇧ Back to Top`](#table-of-contents) · [`« Previous`](../../../../OpenProjects/jsopx.VueCore/p1/v1/RECREATEME.md) [`Next »`](../../../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/RECREATEME.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
