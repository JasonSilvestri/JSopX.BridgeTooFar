# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-web-api.svg" style="width: 28px; height: auto; margin-right:12px; margin-top:12px;!important;"> JSopX™ Web API Project

The **JSopX™ Web API Project**, _code named_, `JSopX.WebAPI` is a totally **FREE**, open-source, Web API, and is a centralized, RESTful API backend that ties the JSopX™ Web API Project ecosystem together. By providing consistent endpoints and data services, it empowers both server-side and client-side solutions to operate cohesively and securely.

---

## **From Scratch Variant:**

> [!CAUTION]
> You are currently viewing the **"_Start From Scratch_" _Variant_** of the **JSopX™ Web API Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---

```bash
# For The Cool Kids: Clone JSopX.WebAPI Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.WebAPI.git
```

---

[`Home`](../../OpenProjects/jsopx.WebAPI/p1/v1/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/jsopx.WebAPI/p1/v1/OpenProjects/) · · [`Use Latest`](../../OpenProjects/jsopx.WebAPI/README.md) · [`By-Phase`](../../OpenProjects/jsopx.WebAPI/p1/v1/README.md) · **`From Scratch`** · · [`« Previous`](../../OpenProjects/jsopx.ClassLibrary/p1/v1/RECREATEME.md) [`Next »`](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md)

---


## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Step 1: Recreate Web API and ASP.NET Core Template](#step-1-recreate-using-aspnet-core-web-api-template)
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

The **JSopX™ Web API Project**, _code named_, `JSopX.WebAPI` is a totally **FREE**, open-source, Web API, and is a centralized, RESTful API backend that ties the JSopX™ Web API Project ecosystem together. By providing consistent endpoints and data services, it empowers both server-side and client-side solutions to operate cohesively and securely.

We initially create the project to simulate a [Shared Data, Service & Function Project](../../Introduction/JSopxProjectsFamilies.md#3-shared-data-service--function-projects) that will need to be leveraged by the other new and existing client side and server side projects, which act as standards that conform to the initial [business requirements](../../Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../OpenProjects/jsopx.OpenProjectX/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../OpenProjects/jsopx.VueCore/README.md), [React](../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../Introduction/JSopxDevelopmentStandards.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly, bridging-of-the-critical-gap, between front-end dynamism and back-end security. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.


[`⇧ Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.14.19)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.2.1)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.2.1)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/AspNetCore.md)

[`⇧ Back to Top`](#table-of-contents)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Creating `JSopX.`WebAPI From Scratch**:

- **[Continue](#step-1-recreate-using-aspnet-core-web-api-template)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step, using the `JSopX.WebAPI` _From Scratch_ Variant.   

---

### 2. **Use Different Variant**:

- **[Install Using Latest](../../OpenProjects/jsopx.WebAPI/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.WebAPI` _Using Latest_ Variant.  
- **[Browse By-Phase](../../OpenProjects/jsopx.WebAPI/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.WebAPI` _By-Phase_ Variant.   
- **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

## Step 1: Recreate Using ASP.NET Core Web API Template

**Goal**: Build a centralized API with weather data, Identity, and JWT, serving all JSopX™ apps.

1. **Open Visual Studio 2022 (v 17.14.19)**:
   - Ensure the proper technologies outlined in [Prerequisites](#prerequisites) are installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core with React”.
   - Configure:
     - Project Name: `JSopX.WebAPI`.
     - Location: e.g., `path\to\local\repo\JasonSilvestri\JSopX.WebAPI`.
     - Solution Name: `JSopX.WebAPI`.
     - .NET Framework (v 9.2.1)
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


[`⇧ Back to Top`](#table-of-contents)

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


[`⇧ Back to Top`](#table-of-contents)

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


[`⇧ Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: This is the central API—ensure it’s standalone.

1. **Verify**: No decoupling needed; it’s the source for all apps.

2. **Test**: Confirm all prior apps (`Maui`, `Blazor`, etc.) pull data from here.


[`⇧ Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

1. **Reference JSopX.SharedResources**:
   - Add reference to `JSopX.SharedResources`.
   - Use `WeatherUtils` in `WeatherController`:

     ```csharp
     Summary = WeatherUtils.GetWeatherIcon(Summaries[Random.Shared.Next(Summaries.Length)])
     ```

2. **Test**: Verify iconic summaries in API responses.

[`⇧ Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step. You'll move onto the next project, using the `JSopX.BridgeTooFar` _From Scratch_ Variant.   

---

1. **[Install Using Latest](../../OpenProjects/jsopx.WebAPI/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.WebAPI` _Using Latest_ Variant.  
2. **[Browse By-Phase](../../OpenProjects/jsopx.WebAPI/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.WebAPI` _By-Phase_ Variant.   
3. **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../OpenProjects/jsopx.WebAPI/p1/v1/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/jsopx.WebAPI/p1/v1/OpenProjects/) · · [`Use Latest`](../../OpenProjects/jsopx.WebAPI/README.md) · [`By-Phase`](../../OpenProjects/jsopx.WebAPI/p1/v1/README.md) · **`From Scratch`** · · [`⇧ Back to Top`](#table-of-contents) · [`« Previous`](../../OpenProjects/jsopx.ClassLibrary/p1/v1/RECREATEME.md) [`Next »`](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
