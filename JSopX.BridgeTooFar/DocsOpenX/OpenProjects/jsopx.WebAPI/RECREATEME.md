# Recreating JSopX™ Web API Project: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite. Recreating the `JSopX.WebAPI` project shows us how to build a centralized API with weather data, Identity, and JWT, serving all JSopX™ apps.

---

> [!CAUTION]
> **Phase 1: Minimum Viable Product (MVP):**
>
> This document is currently aligned with **Phase 1** of development. As a result, the content may not be fully accurate or ready for production use. Treat it as reference material while the project evolves.
> 
> For more details, see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Phases/Phase-1.md).

---

[`Introduction`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Introduction/) » [**`JSopX™ Projects`**](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/)  · · · [`« Previous`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.OpenProjectX)

---

## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)

---

## **Overview**  

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from ASP.NET Core to Angular, React, Vue, Blazor, and .NET MAUI—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

Recreating the `JSopX.WebAPI` project shows us how to build a centralized API with weather data, Identity, and JWT, serving all JSopX™ apps.

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.3)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.WebAPI/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.WebAPI/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.WebAPI/p1/v1/Technologies/AspNetCore.md)

[`Back to Top`](#table-of-contents)

---

## Step 1: Recreate Using ASP.NET Core Web API Template

**Goal**: Build a centralized API with weather data, Identity, and JWT, serving all JSopX™ apps.

1. **Open Visual Studio 2022 (v 17.13.3)**:
   - Ensure .NET 9.0 SDK is installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core Web API”.
   - Configure:
     - Project Name: `JSopX.WebAPI`.
     - Location: e.g., `C:\JSopX\`.
     - Solution Name: `JSopX.WebAPI`.
     - Framework: .NET 9.0.
     - Authentication: None (we’ll add manually).
   - Click Create.

3. **Set Up Initial Weather Data**:
   - Replace `WeatherForecastController.cs`:

     ```csharp
     [Authorize]
     [Route("api/[controller]")]
     [ApiController]
     public class WeatherController : ControllerBase
     {
         private static readonly string[] Summaries = { "Cool", "Warm", "Hot" };
         [HttpGet]
         public IEnumerable<WeatherForecast> Get()
         {
             return Enumerable.Range(1, 5).Select(index => new WeatherForecast
             {
                 Date = DateTime.Now.AddDays(index),
                 TemperatureC = Random.Shared.Next(-20, 55),
                 Summary = Summaries[Random.Shared.Next(Summaries.Length)]
             });
         }
     }
     ```
   - Update `WeatherForecast.cs`:

     ```csharp
     public class WeatherForecast
     {
         public DateTime Date { get; set; }
         public int TemperatureC { get; set; }
         public string Summary { get; set; }
     }
     ```

4. **Add Identity + JWT**:
   - Install NuGet: `Microsoft.AspNetCore.Identity.EntityFrameworkCore`, `Microsoft.EntityFrameworkCore.SqlServer`, `Microsoft.AspNetCore.Authentication.JwtBearer`.
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
   - Update `Program.cs`:

     ```csharp
     builder.Services.AddDbContext<AppDbContext>(options =>
         options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
     builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
         .AddEntityFrameworkStores<AppDbContext>()
         .AddDefaultTokenProviders();
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
     var app = builder.Build();
     app.UseAuthentication();
     app.UseAuthorization();
     app.MapControllers();
     app.Run();
     ```
   - Update `appsettings.json`:

     ```json
     {
       "ConnectionStrings": { "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=JSopXWebApiDb;Trusted_Connection=True;" },
       "Jwt": { "Key": "8f+2Kj9mPqL5xRtYvWnZcQwXjB3sM7hD9pN8uG4tA1o=", "Issuer": "JSopX", "Audience": "JSopX" }
     }
     ```
   - Add `Controllers/AuthController.cs`:

     ```csharp
     [Route("api/[controller]")]
     [ApiController]
     public class AuthController : ControllerBase
     {
         private readonly UserManager<ApplicationUser> _userManager;
         private readonly SignInManager<ApplicationUser> _signInManager;
         private readonly IConfiguration _config;
         public AuthController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IConfiguration config)
         {
             _userManager = userManager; _signInManager = signInManager; _config = config;
         }
         [HttpPost("register")]
         public async Task<IActionResult> Register([FromBody] RegisterModel model)
         {
             var user = new ApplicationUser { UserName = model.Username, Email = model.Username };
             var result = await _userManager.CreateAsync(user, model.Password);
             if (result.Succeeded) return Ok();
             return BadRequest(result.Errors);
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
     public class RegisterModel { public string Username { get; set; } public string Password { get; set; } }
     public class LoginModel { public string Username { get; set; } public string Password { get; set; } }
     ```

5. **Test the Base Setup**:
   - Run `Add-Migration InitialCreate`, `Update-Database`.
   - Start the app (`F5`).
   - Use Postman: `POST /api/auth/register` (`test@test.com`, `Password123!`), then `POST /api/auth/login`, and `GET /api/weather` with the token.


[`Back to Top`](#table-of-contents)

---

## Step 2: Extend Weather Data

**Goal**: Add historical weather data.

1. **Update Weather Model**:
   - In `WeatherForecast.cs`:

     ```csharp
     public int? HistoricalTempC { get; set; }
     ```

2. **Update Weather Controller**:
   - In `WeatherController.cs`:

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
         });
     }
     ```

3. **Test**: Hit `/api/weather` with a token and verify historical data.


[`Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC

**Goal**: Support OIDC tokens from `JSopX.AspNetCore`’s IdentityServer.

1. **Update Authentication**:
   - In `Program.cs`:

     ```csharp
     builder.Services.AddAuthentication()
         .AddJwtBearer("Bearer", options =>
         {
             options.Authority = "https://localhost:7235"; // IdentityServer
             options.Audience = "api";
         });
     ```

2. **Test**: Use an OIDC token from `JSopX.AspNetCore` to access `/api/weather`.


[`Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: This is the central API—ensure it’s standalone.

1. **Verify**: No decoupling needed; it’s the source for all apps.

2. **Test**: Confirm all prior apps (`Maui`, `Blazor`, etc.) pull data from here.


[`Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

1. **Reference JSopX.SharedResources**:
   - Add reference to `JSopX.SharedResources`.
   - Use `WeatherUtils` in `WeatherController`:

     ```csharp
     Summary = WeatherUtils.GetWeatherIcon(Summaries[Random.Shared.Next(Summaries.Length)])
     ```

2. **Test**: Verify iconic summaries in API responses.

[`Back to Top`](#table-of-contents)

---

## `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for the `JSopX.WebAPI` JSopX™ Web API Project.

You have a few options moving forward:

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board, which includes across projects.

[`Continue Course »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.OpenProjectX/p1/v1/)

---

### **2. Continue Focus on the Growth of just JSopX™ Web API:**  

Although not recommended, if your pure focus is reverse engineering just the JSopX™ Web API project for one reason or another, it's cool. I totally get it. It is part of why I created this series of applications, and in the ways I did. We are developers. We develop. We explore. We ask the question, "What If?".

[`Continue Evolving JSopX™ Web API »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.WebAPI/p2/v1/)


---

### **3. I Want My Blanky and Bubba:**  

You can always go back to the version of this application that is already created for you. No one is gonna bash you for starting from the beginning and regrouping.

[`« Start From Beginning`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.WebAPI/)

---
  
[`Introduction`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Introduction/) » [**`JSopX™ Projects`**](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
