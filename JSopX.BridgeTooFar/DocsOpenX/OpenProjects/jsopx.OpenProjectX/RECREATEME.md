# JSopX™ RCL x Proper: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite.

---

> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate** and may contain placeholder information.

---

> [!CAUTION]
> **CURRENT PHASE: Phase 1: Minimum Viable Product (MVP):**
>
> This document is currently aligned with **Phase 1** of development. As a result, the content may not be fully accurate or ready for production use. Treat it as reference material while the project evolves.
> 
> For more details, see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](../../../../Phases/Phase-1.md).

---

[`Home`](../../../../../README.md) » [`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](./OpenProjects/)  · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](./OpenProjects/jsopx.OpenProjectX)

---

## Table of Contents


  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Step 1: Set Up Your Development Environment](#step-1-set-up-your-development-environment)
  - [Step 2: Create the .NET MAUI Blazor Hybrid Project](#step-2-create-the-net-maui-blazor-hybrid-project)
  - [Step 3: Test the Default App](#step-3-test-the-default-app)
  - [Step 4: Add Authentication with ASP.NET Core Identity](#step-4-add-authentication-with-aspnet-core-identity)
    - [Part 1: Create a Backend API Project](#part-1-create-a-backend-api-project)
    - [Part 2: Integrate Authentication in the MAUI App](#part-2-integrate-authentication-in-the-maui-app)
  - [Step 5: Test the App with Authentication](#step-5-test-the-app-with-authentication)
- [Step 6: JWT Key Generation - Your Super Secret Key](#step-6-jwt-key-generation---your-super-secret-key)
    - [Question 1: Where do I get a key like "YourSuperSecretKey1234567890"?](#question-1-where-do-i-get-a-key-like-yoursupersecretkey1234567890)
- [JWT and Identity Across JSopX™ Projects](#jwt-and-identity-across-jsopx-projects)
    - [Question 2: Is JWT with Identity the best approach across projects like in the MAUI Auth App, given the interconnectivity of reusable projects and assets?](#question-2-is-jwt-with-identity-the-best-approach-across-projects-like-in-the-maui-auth-app-given-the-interconnectivity-of-reusable-projects-and-assets)
    - [Why JWT with Identity Works Well](#why-jwt-with-identity-works-well)
    - [Potential Challenges](#potential-challenges)
    - [Alternatives to Consider](#alternatives-to-consider)
    - [Recommendation for JSopX™ Developers](#recommendation-for-jsopx-developers)
  - [JSopX™ Class Library `Phase 1` Tasks Finished! What's Next?](#jsopx-class-library-phase-1-tasks-finished-whats-next)
    - [1. Continue `Phase 1` Tasks (_Recommended_):](#1-continue-phase-1-tasks-_recommended_)
    - [2. Continue Focus on JSopX™ Class Library:](#2-continue-focus-on-jsopx-class-library)
    - [3. I Want My Blanky and Bubba:](#3-i-want-my-blanky-and-bubba)


---

## **Overview**  
The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from ASP.NET Core to Angular, React, Vue, Blazor, and .NET MAUI—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

[`Back to Top`](#table-of-contents)

## Prerequisites

- [Visual Studio (v 17.13.5)](./Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](./Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](./Technologies/AspNetCore.md)
- [.NET Core Blazor (v 9.0.1)](./Technologies/NetCoreBlazor.md)
- [.Net Core Maui Hybrid (v 9.0.1)](./Technologies/NetCoreMauiHybrid.md)
- [Node (v 20.14.0)](./Technologies/Node.md)
- [npm (v 10.8.1)](./Technologies/npm.md)
- [Angular CLI (v 18.0.3)](./Technologies/AngularCli.md)
- [React (v 18.2.0)](./Technologies/React.md)
- [Vue (v 3.4.21)](./Technologies/Vue.md)
- [Vite (v 5.2.8)](./Technologies/Vite.md)

[`Back to Top`](#table-of-contents)

---

## Step 1: Set Up Your Development Environment

1. **Verify Visual Studio 2022 Installation**:
   - Open Visual Studio Installer.
   - Ensure you have Visual Studio 2022 (17.12 or later) installed with the ".NET Multi-platform App UI development" workload. If not, modify your installation to include it.
   - Confirm .NET 9 SDK is installed (check via `dotnet --list-sdks` in a terminal; install from [dotnet.microsoft.com](https://dotnet.microsoft.com) if missing).

2. **Update Visual Studio**:
   - Go to `Help > Check for Updates` and ensure you’re on the latest version to support .NET 9 and MAUI.

3. **Enable Developer Mode (Windows)**:
   - Go to `Settings > Privacy & Security > For Developers` and enable Developer Mode if not already active.
   
[`Back to Top`](#table-of-contents)

---

## Step 2: Create the .NET MAUI Blazor Hybrid Project

1. **Launch Visual Studio 2022**:
   - Open Visual Studio and select `Create a new project`.

2. **Select the Template**:
   - In the search bar, type “MAUI Blazor”.
   - Choose **.NET MAUI Blazor Hybrid App** and click `Next`.

3. **Configure the Project**:
   - **Project Name**: `MauiAuthApp`.
   - **Location**: Choose a suitable directory (e.g., `C:\Projects`).
   - **Solution Name**: Leave as `MauiAuthApp` or adjust as preferred.
   - Click `Next`.

4. **Additional Information**:
   - **Framework**: Select `.NET 9.0` (ensure it’s available; if not, install the SDK).
   - Click `Create`.

5. **Wait for Setup**:
   - Visual Studio will generate the project and restore dependencies. Watch the status bar or Solution Explorer for completion.
   
[`Back to Top`](#table-of-contents)

---

## Step 3: Test the Default App

1. **Set Debug Target**:
   - In the toolbar, select a target (e.g., `Windows Machine` for simplicity or an Android emulator).
   - For Android, if prompted, install the Android SDK by following the on-screen instructions (accept licenses).

2. **Run the App**:
   - Press `F5` or the green “Start” button.
   - Verify the default Blazor app loads with a counter button. This confirms your setup works.
   
[`Back to Top`](#table-of-contents)

---

## Step 4: Add Authentication with ASP.NET Core Identity

### Part 1: Create a Backend API Project

1. **Add a New Project to the Solution**:
   - Right-click the solution in Solution Explorer > `Add > New Project`.
   - Search for **ASP.NET Core Web API**.
   - Name it `MauiAuthApp.Api`, click `Next`.
   - Select `.NET 9.0`, enable “Configure for HTTPS”, and click `Create`.

2. **Install NuGet Packages**:
   - In the API project, right-click > `Manage NuGet Packages`.
   - Install:
     - `Microsoft.AspNetCore.Identity.EntityFrameworkCore` (for Identity)
     - `Microsoft.EntityFrameworkCore.SqlServer` (for database)
     - `Microsoft.AspNetCore.Authentication.JwtBearer` (for JWT)

3. **Set Up Identity and Database**:
   - Add a new folder `Models` in the API project.
   - Create a class `ApplicationUser.cs`:

     ```csharp
     using Microsoft.AspNetCore.Identity;
     public class ApplicationUser : IdentityUser { }
     ```
   - Add a `Data` folder and create `AppDbContext.cs`:

     ```csharp
     using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
     using Microsoft.EntityFrameworkCore;
     public class AppDbContext : IdentityDbContext<ApplicationUser>
     {
         public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
     }
     ```

4. **Configure Services in `Program.cs`**:
   - Replace the content with:

     ```csharp
     using Microsoft.AspNetCore.Authentication.JwtBearer;
     using Microsoft.AspNetCore.Identity;
     using Microsoft.EntityFrameworkCore;
     using Microsoft.IdentityModel.Tokens;
     using System.Text;
     var builder = WebApplication.CreateBuilder(args);
     builder.Services.AddControllers();
     builder.Services.AddDbContext<AppDbContext>(options =>
         options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
     builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
         .AddEntityFrameworkStores<AppDbContext>()
         .AddDefaultTokenProviders();
     builder.Services.AddAuthentication(options =>
     {
         options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
         options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
     }).AddJwtBearer(options =>
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
     builder.Services.AddAuthorization();
     var app = builder.Build();
     app.UseHttpsRedirection();
     app.UseAuthentication();
     app.UseAuthorization();
     app.MapControllers();
     app.Run();
     ```

5. **Update `appsettings.json`**:
   - Add:

     ```json
     {
       "ConnectionStrings": {
         "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=MauiAuthDb;Trusted_Connection=True;"
       },
       "Jwt": {
         "Key": "YourSuperSecretKey1234567890", // Replace with a strong key
         "Issuer": "MauiAuthApp",
         "Audience": "MauiAuthApp"
       }
     }
     ```

6. **Create Auth Controller**:
   - Add a `Controllers` folder and create `AuthController.cs`:

     ```csharp
     using Microsoft.AspNetCore.Identity;
     using Microsoft.AspNetCore.Mvc;
     using Microsoft.IdentityModel.Tokens;
     using System.IdentityModel.Tokens.Jwt;
     using System.Security.Claims;
     using System.Text;
     [Route("api/[controller]")]
     [ApiController]
     public class AuthController : ControllerBase
     {
         private readonly UserManager<ApplicationUser> _userManager;
         private readonly SignInManager<ApplicationUser> _signInManager;
         private readonly IConfiguration _configuration;
         public AuthController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IConfiguration configuration)
         {
             _userManager = userManager;
             _signInManager = signInManager;
             _configuration = configuration;
         }
         [HttpPost("register")]
         public async Task<IActionResult> Register(string username, string password)
         {
             var user = new ApplicationUser { UserName = username, Email = username };
             var result = await _userManager.CreateAsync(user, password);
             if (result.Succeeded) return Ok();
             return BadRequest(result.Errors);
         }
         [HttpPost("login")]
         public async Task<IActionResult> Login(string username, string password)
         {
             var user = await _userManager.FindByNameAsync(username);
             if (user != null && await _userManager.CheckPasswordAsync(user, password))
             {
                 var claims = new[]
                 {
                     new Claim(ClaimTypes.Name, user.UserName)
                 };
                 var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                 var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                 var token = new JwtSecurityToken(
                     issuer: _configuration["Jwt:Issuer"],
                     audience: _configuration["Jwt:Audience"],
                     claims: claims,
                     expires: DateTime.Now.AddMinutes(30),
                     signingCredentials: creds);
                 return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
             }
             return Unauthorized();
         }
     }
     ```

7. **Run Migrations**:
   - Open Package Manager Console (Tools > NuGet Package Manager > Package Manager Console).
   - Set the API project as the default project and run:
     ```
     Add-Migration InitialCreate
     Update-Database
     ```

8. **Test the API**:
   - Set `MauiAuthApp.Api` as the startup project and run it (`F5`).
   - Use Postman or curl to test:
     - `POST https://localhost:port/api/auth/register` with `username=test@test.com` and `password=Password123!`
     - `POST https://localhost:port/api/auth/login` with the same credentials. Note the JWT token returned.

[`Back to Top`](#table-of-contents)

---

### Part 2: Integrate Authentication in the MAUI App

1. **Install HttpClient Package**:
   - In `MauiAuthApp`, install `System.Net.Http.Json` via NuGet.

2. **Add Login/Register Pages**:
   - In `Components/Pages`, create `Login.razor`:

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
         private string username = "";
         private string password = "";
         private string message = "";
         private async Task LoginAsync()
         {
             var response = await Http.PostAsJsonAsync("https://localhost:port/api/auth/login", new { username, password });
             if (response.IsSuccessStatusCode)
             {
                 var result = await response.Content.ReadFromJsonAsync<LoginResponse>();
                 message = "Logged in! Token: " + result.token;
                 // Store token (e.g., in SecureStorage) and navigate
                 Navigation.NavigateTo("/");
             }
             else
             {
                 message = "Login failed.";
             }
         }
         private class LoginResponse { public string token { get; set; } }
     }
     ```
   - Create `Register.razor`:

     ```razor
     @page "/register"
     @inject HttpClient Http
     @inject NavigationManager Navigation
     <h3>Register</h3>
     <input @bind="username" placeholder="Email" />
     <input @bind="password" type="password" placeholder="Password" />
     <button @onclick="RegisterAsync">Register</button>
     <p>@message</p>
     @code {
         private string username = "";
         private string password = "";
         private string message = "";
         private async Task RegisterAsync()
         {
             var response = await Http.PostAsJsonAsync("https://localhost:port/api/auth/register", new { username, password });
             if (response.IsSuccessStatusCode)
             {
                 message = "Registered! Please log in.";
                 Navigation.NavigateTo("/login");
             }
             else
             {
                 message = "Registration failed.";
             }
         }
     }
     ```


3. **Update Navigation**:
   - In `Components/App.razor`, add routes:

     ```razor
     <Router AppAssembly="@typeof(App).Assembly">
         <Found Context="routeData">
             <RouteView RouteData="@routeData" DefaultLayout="@typeof(Layout.MainLayout)" />
         </Found>
         <NotFound>
             <p>Page not found.</p>
         </NotFound>
     </Router>
     ```
   - In `Components/Layout/MainLayout.razor`, add nav links:

     ```razor
     <div>
         <nav>
             <a href="/">Home</a> |
             <a href="/login">Login</a> |
             <a href="/register">Register</a>
         </nav>
         <main>
             @Body
         </main>
     </div>
     ```


4. **Configure HttpClient**:
   - In `MauiProgram.cs`, add:

     ```csharp
     builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("https://localhost:port/") });
     ```

[`Back to Top`](#table-of-contents)

---

## Step 5: Test the App with Authentication

1. **Run Both Projects**:
   - Set multiple startup projects: Right-click solution > `Set Startup Projects` > Select `MauiAuthApp` and `MauiAuthApp.Api` as “Start”.
   - Press `F5`.

2. **Register a User**:
   - Navigate to `/register`, enter `test@test.com` and `Password123!`, and click Register.

3. **Login**:
   - Go to `/login`, enter the same credentials, and verify the token appears.

4. **Secure Pages (Optional)**:
   - Add `[Authorize]` to controllers in the API and use the JWT token in HttpClient requests from MAUI by setting the `Authorization` header.


[`Back to Top`](#table-of-contents)

---

# Step 6: JWT Key Generation - Your Super Secret Key

### Question 1: Where do I get a key like "YourSuperSecretKey1234567890"?

The key `"YourSuperSecretKey1234567890"` in the sample was a placeholder to illustrate the concept of a **symmetric signing key** used in JWT authentication with HMAC-SHA256 (a common algorithm). In practice, you don’t "get" this key from somewhere external—it’s something **you generate and manage securely**. Here’s how to handle it properly:

1. **Generating a Secure Key**:
   - **Length Requirement**: For HMAC-SHA256, the key should be at least 256 bits (32 bytes) long to ensure cryptographic strength. A longer key (e.g., 64 bytes) is even better.
   - **Manual Generation**: You can create a random string using a secure random generator. For example:
     - Use an online tool like [random.org](https://www.random.org/bytes/) to generate 32+ random bytes, then encode it (e.g., Base64).
     - Or, in C#, generate it programmatically:

       ```csharp
       using System.Security.Cryptography;
       byte[] key = RandomNumberGenerator.GetBytes(64); // 64 bytes = 512 bits
       string jwtKey = Convert.ToBase64String(key); // Produces a string like "8f+...=="
       Console.WriteLine(jwtKey);
       ```
       Run this once, copy the output, and store it securely.
   - **Example Output**: Something like `"8f+2Kj9mPqL5xRtYvWnZcQwXjB3sM7hD9pN8uG4tA1o="`.

2. **Storing the Key**:
   - **Development**: For now, paste it into your `appsettings.json` under `"Jwt:Key"`. Example:

     ```json
     "Jwt": {
       "Key": "8f+2Kj9mPqL5xRtYvWnZcQwXjB3sM7hD9pN8uG4tA1o=",
       "Issuer": "MauiAuthApp",
       "Audience": "MauiAuthApp"
     }
     ```
   - **Production**: Hardcoding in `appsettings.json` isn’t secure. Instead:
     - Use **Azure Key Vault**, **AWS Secrets Manager**, or similar secret management services.
     - Or, store it in an environment variable (e.g., `JWT_KEY`) and access it via `IConfiguration`:

       ```csharp
       var key = builder.Configuration["Jwt:Key"];
       ```

3. **Best Practices**:
   - **Uniqueness**: Generate a unique key per application or environment (dev, staging, prod).
   - **Security**: Never commit the key to source control (e.g., Git). Use `.gitignore` for local config files if needed.
   - **Rotation**: Plan to rotate keys periodically (e.g., every 6-12 months) and implement token expiry/refresh to handle updates gracefully.


[`Back to Top`](#table-of-contents)

---

# JWT and Identity Across JSopX™ Projects

### Question 2: Is JWT with Identity the best approach across projects like in the MAUI Auth App, given the interconnectivity of reusable projects and assets?

Given the JSopX™ ecosystem—spanning MAUI Hybrid, Angular, React, Vue, Blazor Server, and ASP.NET Core projects with shared class libraries, Razor Class Libraries (RCLs), and a Web API—JWT paired with ASP.NET Core Identity is a **strong starting point**, but its suitability depends on your goals. Let’s break it down and consider alternatives to ensure it aligns with your interconnected architecture.
[`Back to Top`](#table-of-contents)

---

### Why JWT with Identity Works Well

1. **Stateless Authentication (JWT)**:
   - JWTs are self-contained tokens, making them ideal for distributed systems like yours. Your Web API (`JSopX.WebAPI`) can issue tokens that MAUI, Angular, React, Vue, and Blazor clients can use without server-side session state.
   - This scales well across your multi-platform apps (desktop, web, mobile).

2. **Centralized User Management (Identity)**:
   - ASP.NET Core Identity provides a robust framework for user registration, login, roles, and claims, all stored in a single database (e.g., via `JSopX.WebAPI`). This centralizes auth logic, which your shared `JSopX.ClassLibrary` can extend with custom utilities.

3. **Cross-Project Compatibility**:
   - Your MAUI Hybrid (`JSopX.MauiHybridNetCore`), Angular (`JSopX.AngularCore`), React (`JSopX.ReactCore`), and Vue (`JSopX.VueCore`) apps can all make HTTP requests to `JSopX.WebAPI`, passing JWTs in the `Authorization` header. The sample MAUI app’s login/register flow can be adapted to these frameworks.
   - Blazor Server (`JSopX.BlazorServerCore`) can also use JWTs for API calls, though it might lean on server-side auth too (more on this below).

4. **Reusability**:
   - You can encapsulate JWT generation/validation logic in `JSopX.ClassLibrary` and share it across projects.
   - UI components for login/register (e.g., in `JSopX.RCLxComponents` or `JSopX.RCLxProper`) can be reused, with client-specific tweaks (Razor for Blazor/MAUI, TSX for React, etc.).

5. **Design Standards**:
   - JWT’s flexibility lets you enforce consistent auth flows (e.g., token expiry, refresh tokens) across your ecosystem, aligning with your goal of standardized assets in `JSopX.RCLxProper`.

[`Back to Top`](#table-of-contents)

---

### Potential Challenges

1. **Blazor Server Nuance**:
   - Blazor Server uses SignalR and server-side state, so JWTs are less critical for UI auth (Identity’s cookie-based auth might suffice). However, if it calls `JSopX.WebAPI`, JWTs remain relevant.

2. **Single Sign-On (SSO) Confusion**:
   - JWT alone doesn’t provide true SSO across apps unless paired with a centralized identity provider (IdP). Each app would need to authenticate separately against `JSopX.WebAPI`, potentially duplicating login prompts.

3. **Token Management**:
   - Clients (MAUI, Angular, etc.) must securely store and refresh JWTs. For MAUI, `SecureStorage` works; for web apps, you’ll need secure cookies or localStorage with CSRF protection.

4. **Scalability**:
   - If your user base grows, managing Identity’s database and token validation across all apps could strain `JSopX.WebAPI` unless load-balanced.

[`Back to Top`](#table-of-contents)

---

### Alternatives to Consider

1. **OAuth 2.0 + OpenID Connect (OIDC) with IdentityServer or External IdP**:
   - **Why**: Adds SSO and delegates auth to a dedicated service (e.g., IdentityServer4, Duende IdentityServer, or external providers like Azure AD, Auth0, Okta).
   - **How**: Replace the MAUI app’s custom JWT logic with OIDC flows (e.g., Authorization Code + PKCE). `JSopX.WebAPI` becomes an OAuth-protected resource server.
   - **Pros**: True SSO across all apps, standardized token issuance, refresh tokens out of the box.
   - **Cons**: More setup complexity; external providers may incur costs.

2. **Cookie-Based Auth for Web Apps**:
   - **Why**: For Blazor Server and ASP.NET Core (`JSopX.AspNetCore`), cookies might simplify auth within the same domain.
   - **How**: Use Identity’s default cookie auth alongside JWT for API access.
   - **Pros**: Easier for server-side apps; no client-side token management.
   - **Cons**: Less suited for SPA/mobile; no SSO unless paired with OIDC.

3. **Hybrid Approach**:
   - **Why**: Combine Identity + JWT for APIs and OIDC for SSO.
   - **How**: Keep `JSopX.WebAPI` issuing JWTs for internal use, but integrate an OIDC provider for user-facing SSO.
   - **Pros**: Balances simplicity and scalability; leverages your existing setup.
   - **Cons**: Requires maintaining two auth systems initially.

[`Back to Top`](#table-of-contents)

---

### Recommendation for JSopX™ Developers

Given your interconnectivity and reuse goals, **stick with JWT + Identity for now**, but plan for **OIDC integration** as you scale. Here’s why and how:

- **Short-Term (Current Cleanup)**:
  - JWT + Identity is already working in the MAUI sample and can be replicated across your Angular, React, Vue, and Blazor projects with minimal changes.
  - Add shared auth logic to `JSopX.ClassLibrary` (e.g., token validation, refresh token helpers).
  - Use `JSopX.RCLxProper` for standardized login/register UI components, adapting them per framework (Razor, TSX, etc.).
  - Secure `JSopX.WebAPI` endpoints with `[Authorize]` and validate JWTs as shown in the sample.

- **Long-Term (Pre-Release)**:
  - Introduce an OIDC provider (e.g., Duende IdentityServer hosted in `JSopX.AspNetCore` or an external service like Auth0).
  - Update all apps to use OIDC flows, with `JSopX.WebAPI` validating tokens from the IdP.
  - This gives you SSO across MAUI, web, and server apps, reducing login friction.

- **Why This Works**:
  - JWT + Identity is lightweight and fits your current reusable architecture.
  - Transitioning to OIDC later builds on this foundation, reusing your Identity database and shared libraries while addressing SSO needs.

---

## JSopX™ Class Library `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for `My First JSopX™ MAUI Hybrid App Setup`.

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board.

[`Continue Course »`](../Introduction/JSopxProjectChecksBalances.md)

---

### **2. Continue Focus on JSopX™ Class Library:**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board.

[`Continue Evolving Class Library »`](../Introduction/JSopxProjectChecksBalances.md)


---

### **3. I Want My Blanky and Bubba:**  

You can start from the beginning if you would prefer to regroup.

[`« Start From Beginning`](../Introduction/)

---
 
 [`Home`](../../../../../README.md) » [`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](./OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](./OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
