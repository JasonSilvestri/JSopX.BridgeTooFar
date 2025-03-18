# Recreating JSopX™ Blazor Server Core Project: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite. Recreating the `JSopX.BlazorServerCore` project shows us how to simulate an existing Blazor Server app with weather data, Identity, and JWT already in place.

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

Recreating the `JSopX.BlazorServerCore` project shows us how to  project shows us how to simulate an existing Blazor Server app with weather data, Identity, and JWT already in place.

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.3)](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/Technologies/AspNetCore.md)
- [.NET Core Blazor (v 9.0.1)](../../../../OpenProjects/jsopx.BlazorServerCore/p1/v1/Technologies/NetCoreBlazor.md)

[`Back to Top`](#table-of-contents)

---

## Step 1: Recreate Using Blazor Server Template

**Goal**: Simulate an existing Blazor Server app with weather data, Identity, and JWT already in place.

1. **Open Visual Studio 2022 (v 17.13.3)**:
   - Confirm .NET 9.0 SDK is installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “Blazor Server App”.
   - Configure:
     - Project Name: `JSopX.BlazorServerCore`.
     - Location: e.g., `C:\JSopX\`.
     - Solution Name: `JSopX.BlazorServerCore`.
     - Framework: .NET 9.0.
     - Authentication: Individual Accounts (sets up Identity).
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

4. **Add JWT (Simulating Existing Setup)**:
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


[`Back to Top`](#table-of-contents)

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


[`Back to Top`](#table-of-contents)

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


[`Back to Top`](#table-of-contents)

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


[`Back to Top`](#table-of-contents)

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

[`Back to Top`](#table-of-contents)

---

## `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for the `JSopX.BlazorServerCore` JSopX™ Blazor Server Core Project.

You have a few options moving forward:

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board, which includes across projects.

[`Continue Course »`](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/)

---

### **2. Continue Focus on the Growth of just JSopX™ Blazor Server Core:**  

Although not recommended, if your pure focus is reverse engineering just the JSopX™ Blazor Server Core project for one reason or another, it's cool. I totally get it. It is part of why I created this series of applications, and in the ways I did. We are developers. We develop. We explore. We ask the question, "What If?".

[`Continue Evolving with JSopX™ Blazor Server Core »`](../../../../OpenProjects/jsopx.BlazorServerCore/p2/v1/)


---

### **3. I Want My Blanky and Bubba:**  

You can always go back to the version of this application that is already created for you. No one is gonna bash you for starting from the beginning and regrouping.

[`« Start From Beginning`](../../../../OpenProjects/jsopx.BlazorServerCore/)

---
  
[`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](../../../../OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](../../../../OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
