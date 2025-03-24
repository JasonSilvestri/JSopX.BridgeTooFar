# Recreating JSopX™ MAUI Hybrid .NET Core Project: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite. Recreating the `JSopX.MauiHybridNetCore` project shows us how to simulate an existing MAUI Hybrid app with weather data, Identity, and JWT already in place.

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

Recreating the `JSopX.MauiHybridNetCore` project shows us how to simulate an existing MAUI Hybrid app with weather data, Identity, and JWT already in place.

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.4)](../../../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](../../../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](../../../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/AspNetCore.md)
- [.NET Core Blazor (v 9.0.1)](../../../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/NetCoreBlazor.md)
- [.Net Core Maui Hybrid (v 9.0.1)](../../../../OpenProjects/jsopx.MauiHybridNetCore/p1/v1/Technologies/NetCoreMauiHybrid.md)

[`Back to Top`](#table-of-contents)

---

## Step 1: Recreate Using .NET MAUI Blazor Hybrid Template

**Goal**: Simulate an existing MAUI Hybrid app with weather data, Identity, and JWT already in place.

1. **Open Visual Studio 2022 (v 17.13.4)**:
   - Ensure the .NET 9.0 SDK is installed (`dotnet --list-sdks`).

2. **Create the Project**:
   - File > New > Project.
   - Search for “.NET MAUI Blazor Hybrid App”.
   - Configure:
     - Project Name: `JSopX.MauiHybridNetCore`.
     - Location: e.g., `C:\JSopX\`.
     - Solution Name: `JSopX.MauiHybridNetCore` (we’ll add it to the main solution later).
     - .NET Framework (v 9.0.1)
   - Click Create.

3. **Set Up Initial Weather Data**:
   - In `Components/Pages/Home.razor`, replace the counter with a weather display:

     ```razor
     @page "/"
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
             forecasts = await Http.GetFromJsonAsync<WeatherForecast[]>("sample-data/weather.json");
         }
         public class WeatherForecast
         {
             public DateTime Date { get; set; }
             public int TemperatureC { get; set; }
             public string Summary { get; set; }
         }
     }
     ```
   - This uses the default `weather.json` in `wwwroot/sample-data`.

4. **Add Identity + JWT (Simulating Existing Setup)**:
   - Install NuGet packages: `Microsoft.AspNetCore.Identity.EntityFrameworkCore`, `Microsoft.EntityFrameworkCore.SqlServer`, `Microsoft.AspNetCore.Authentication.JwtBearer`.
   - Add `Models/ApplicationUser.cs`:

     ```csharp
     using Microsoft.AspNetCore.Identity;
     public class ApplicationUser : IdentityUser { }
     ```
   - Add `Data/AppDbContext.cs`:

     ```csharp
     using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
     using Microsoft.EntityFrameworkCore;
     public class AppDbContext : IdentityDbContext<ApplicationUser>
     {
         public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
     }
     ```
   - Update `MauiProgram.cs`:

     ```csharp
     builder.Services.AddDbContext<AppDbContext>(options =>
         options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
     builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
         .AddEntityFrameworkStores<AppDbContext>()
         .AddDefaultTokenProviders();
     builder.Services.AddAuthentication().AddJwtBearer(options =>
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
     ```
   - Update `appsettings.json`:

     ```json
     {
       "ConnectionStrings": { "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=JSopXMauiDb;Trusted_Connection=True;" },
       "Jwt": { "Key": "8f+2Kj9mPqL5xRtYvWnZcQwXjB3sM7hD9pN8uG4tA1o=", "Issuer": "JSopX", "Audience": "JSopX" }
     }
     ```
   - Add `Components/Pages/Login.razor`:

     ```razor
     @page "/login"
     @inject HttpClient Http
     @inject NavigationManager Navigation
     <h3>Login</h3>
     <input @bind="username" placeholder="Email" />
     <input @bind="password" type="password" placeholder="Password" />
     <button @onclick="LoginAsync">Login</button>
     <p>@message</p>
     @code {
         private string username = "", password = "", message = "";
         private async Task LoginAsync()
         {
             var response = await Http.PostAsJsonAsync("api/auth/login", new { username, password });
             if (response.IsSuccessStatusCode)
             {
                 var result = await response.Content.ReadFromJsonAsync<LoginResponse>();
                 message = "Logged in!";
                 await SecureStorage.SetAsync("jwt", result.token);
                 Navigation.NavigateTo("/");
             }
             else { message = "Login failed."; }
         }
         private class LoginResponse { public string token { get; set; } }
     }
     ```
   - Add a placeholder API in `Controllers/AuthController.cs`:

     ```csharp
     [Route("api/[controller]")]
     [ApiController]
     public class AuthController : ControllerBase
     {
         private readonly UserManager<ApplicationUser> _userManager;
         private readonly IConfiguration _config;
         public AuthController(UserManager<ApplicationUser> userManager, IConfiguration config)
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
         private string GenerateJwtToken(ApplicationUser user)
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
   - Run migrations: `Add-Migration InitialCreate`, `Update-Database`.
   - Start the app (`F5`, Windows Machine target).
   - Register a user via a tool like Postman (`POST /api/auth/register`), then log in at `/login`.


[`Back to Top`](#table-of-contents)

---

## Step 2: Extend Weather Data

**Goal**: Enhance the weather feature with historical data.

1. **Update Weather Model**:
   - In `Home.razor`, modify `WeatherForecast`:

     ```csharp
     public class WeatherForecast
     {
         public DateTime Date { get; set; }
         public int TemperatureC { get; set; }
         public string Summary { get; set; }
         public int? HistoricalTempC { get; set; } // New field
     }
     ```

2. **Add Historical Data Endpoint**:
   - In `Controllers/WeatherController.cs` (add if not present):

     ```csharp
     [Route("api/[controller]")]
     [ApiController]
     public class WeatherController : ControllerBase
     {
         [HttpGet]
         public ActionResult<IEnumerable<WeatherForecast>> Get()
         {
             var rng = new Random();
             return Enumerable.Range(1, 5).Select(index => new WeatherForecast
             {
                 Date = DateTime.Now.AddDays(index),
                 TemperatureC = rng.Next(-20, 55),
                 Summary = new[] { "Cool", "Warm", "Hot" }[rng.Next(3)],
                 HistoricalTempC = rng.Next(-25, 50)
             }).ToArray();
         }
     }
     ```

3. **Update Home Page**:
   - In `Home.razor`:

     ```razor
     <tr><th>Date</th><th>Temp (°C)</th><th>Historical Temp (°C)</th><th>Summary</th></tr>
     ...
     <td>@forecast.HistoricalTempC</td>
     ...
     @code {
         protected override async Task OnInitializedAsync()
         {
             forecasts = await Http.GetFromJsonAsync<WeatherForecast[]>("api/weather");
         }
     }
     ```

4. **Test**: Run and verify historical temps show up.


[`Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC

**Goal**: Replace custom JWT with OIDC via Duende IdentityServer (hosted in `JSopX.AspNetCore` later).

1. **Install Duende IdentityServer**:
   - For now, simulate OIDC by adding `Microsoft.AspNetCore.Authentication.OpenIdConnect` via NuGet.

2. **Configure OIDC**:
   - Update `MauiProgram.cs`:

     ```csharp
     builder.Services.AddAuthentication(options =>
     {
         options.DefaultScheme = "Cookies";
         options.DefaultChallengeScheme = "oidc";
     })
     .AddCookie("Cookies")
     .AddOpenIdConnect("oidc", options =>
     {
         options.Authority = "https://localhost:5001"; // Temp IdentityServer URL
         options.ClientId = "maui";
         options.ClientSecret = "secret";
         options.ResponseType = "code";
         options.SaveTokens = true;
         options.Scope.Add("openid");
         options.Scope.Add("profile");
         options.Scope.Add("api");
     });
     ```

3. **Secure Weather API**:
   - Add `[Authorize]` to `WeatherController`:

     ```csharp
     [Authorize]
     [HttpGet]
     public ActionResult<IEnumerable<WeatherForecast>> Get()
     ```

4. **Update Login**:
   - In `Login.razor`:

     ```razor
     @inject AuthenticationStateProvider AuthState
     @inject NavigationManager Navigation
     <button @onclick="LoginAsync">Login with OIDC</button>
     @code {
         private async Task LoginAsync()
         {
             Navigation.NavigateTo("authentication/login", true);
         }
     }
     ```
   - Add `Components/App.razor`:

     ```razor
     <CascadingAuthenticationState>
         <Router AppAssembly="@typeof(App).Assembly">
             ...
         </Router>
     </CascadingAuthenticationState>
     ```

5. **Test**: Requires IdentityServer setup (coming in `JSopX.AspNetCore`).


[`Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: Use `JSopX.WebAPI` instead.

1. **Create JSopX.WebAPI (if not already)**:
   - New Project > ASP.NET Core Web API > Name: `JSopX.WebAPI`.
   - Add `WeatherController` mirroring the above.
   - Update `Program.cs` with Identity and JWT.

2. **Point MAUI to WebAPI**:
   - In `Home.razor`:

     ```razor
     forecasts = await Http.GetFromJsonAsync<WeatherForecast[]>("https://localhost:7234/api/weather");
     ```

3. **Test**: Run both projects, ensure data pulls from `JSopX.WebAPI`.


[`Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

1. **Reference JSopX.RCLxProper**:
   - Add Project > New > Razor Class Library > `JSopX.RCLxProper`.
   - Move `Login.razor` to `JSopX.RCLxProper/Pages/Login.razor`.
   - Reference in `JSopX.MauiHybridNetCore`: Right-click > Add Project Reference.
   - Update `App.razor` to use RCL routes.

2. **Reference JSopX.SharedResources**:
   - Add Project > Class Library > `JSopX.SharedResources`.
   - Add a sample asset (e.g., `WeatherUtils.cs`):

     ```csharp
     public static class WeatherUtils
     {
         public static string GetWeatherIcon(string summary) => summary switch
         {
             "Cool" => "❄️",
             "Warm" => "☀️",
             "Hot" => "🔥",
             _ => "🌧️"
         };
     }
     ```
   - Reference and use in `Home.razor`:

     ```razor
     <td>@WeatherUtils.GetWeatherIcon(forecast.Summary)</td>
     ```

3. **Test**: Verify login from RCL and icons from shared library work.

[`Back to Top`](#table-of-contents)

---

## `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for the `JSopX.MauiHybridNetCore` JSopX™ MAUI Hybrid .NET Core Project.

You have a few options moving forward:

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board, which includes across projects.

[`Continue Course »`](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/)

---

### **2. Continue Focus on the Growth of just JSopX™ MAUI Hybrid .NET Core:**  

Although not recommended, if your pure focus is reverse engineering just the JSopX™ MAUI Hybrid .NET Core project for one reason or another, it's cool. I totally get it. It is part of why I created this series of applications, and in the ways I did. We are developers. We develop. We explore. We ask the question, "What If?".

[`Continue Evolving with JSopX™ MAUI Hybrid .NET Core »`](../../../../OpenProjects/jsopx.MauiHybridNetCore/p2/v1/)


---

### **3. I Want My Blanky and Bubba:**  

You can always go back to the version of this application that is already created for you. No one is gonna bash you for starting from the beginning and regrouping.

[`« Start From Beginning`](../../../../OpenProjects/jsopx.MauiHybridNetCore/)

---
  
[`Home`](../../../../../README.md) » [`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](../../../../OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](../../../../OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
