# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-bridge-too-far-logo.svg" style="width: 28px; height: auto; margin-right:12px; margin-top:12px;!important;"> JSopX™ Bridge Too Far Project

The **JSopX™ Bridge Too Far Project**, _code named_, `JSopX.BridgeTooFar` is a totally **FREE**, open-source, Razor Class Library, and has evolved into a centralized hub for managing and sharing ALL assets and documentation, across all other JSopX™ Projects, including all Class Libraries, RCLs, server-side and client-side projects. 

---

## **From Scratch Variant:**

> [!CAUTION]
> You are currently viewing the **"_Start From Scratch_" _Variant_** of the **JSopX™ Bridge Too Far Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---

```bash
# For The Cool Kids: Clone JSopX.BridgeTooFar Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.BridgeTooFar.git
```

---

[`Home`](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/OpenProjects/) · · [`Use Latest`](../../OpenProjects/jsopx.BridgeTooFar/README.md) · [`By-Phase`](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/README.md) · **`From Scratch`** · · [`« Previous`](../../OpenProjects/jsopx.WebAPI/p1/v1/RECREATEME.md) [`Next »`](../../OpenProjects/jsopx.SharedResources/p1/v1/RECREATEME.md)

---


## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Step 1: Recreate Using Angular and ASP.NET Core Template](#step-1-recreate-using-angular-and-aspnet-core-template)
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

The **JSopX™ Bridge Too Far Project**, _code named_, `JSopX.BridgeTooFar` is a totally **FREE**, open-source, Razor Class Library, and has evolved into a centralized hub for managing and sharing ALL assets and documentation, across all other JSopX™ Projects, including all Class Libraries, RCLs, server-side and client-side projects.

We initially create the project to simulate a [Shared Assets & Resources Projects](../../Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that will need to be leveraged by the other new and existing client side and server side projects, which act as standards that conform to the initial [business requirements](../../../../Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../OpenProjects/jsopx.OpenProjectX/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../OpenProjects/jsopx.VueCore/README.md), [React](../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../Introduction/JSopxDisciplinesRequiredForEnterpriseDevelopment.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.4)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/AspNetCore.md)
- [Node (v 20.14.0)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/Node.md)
- [npm (v 10.8.1)](../../OpenProjects/jsopx.AngularCore/p1/v1/Technologies/npm.md)

[`Back to Top`](#table-of-contents)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Creating `JSopX.`BridgeTooFar From Scratch**:

- **[Continue](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/RECREATEME.md)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step, using the `JSopX.BridgeTooFar` _From Scratch_ Variant.   

---

### 2. **Use Different Variant**:

- **[Install Using Latest](../../OpenProjects/jsopx.BridgeTooFar/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.BridgeTooFar` _Using Latest_ Variant.  
- **[Browse By-Phase](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.BridgeTooFar` _By-Phase_ Variant.   
- **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

## Step 1: Recreate Using Angular and ASP.NET Core Template

**Goal**: Simulate an existing Angular app with weather data, Identity, and JWT already established.

1. **Open Visual Studio 2022 (v 17.13.4)**:
   - Ensure the proper technologies outlined in [Prerequisites](#prerequisites) are installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core with Angular”.
   - Configure:
     - Project Name: `JSopX.BridgeTooFar`.
     - Location: e.g., `path\to\local\repo\JasonSilvestri\JSopX.BridgeTooFar`.
     - Solution Name: `JSopX.BridgeTooFar`.
     - .NET Framework (v 9.0.1)
   - Click Create.

3. **Set Up Initial Weather Data**:
   - In `ClientApp/src/app/fetch-data/fetch-data.component.ts`:

     ```typescript
     import { Component, inject } from '@angular/core';
     import { HttpClient } from '@angular/common/http';
     @Component({
       selector: 'app-fetch-data',
       templateUrl: './fetch-data.component.html'
     })
     export class FetchDataComponent {
       public forecasts: WeatherForecast[] = [];
       private http = inject(HttpClient);
       ngOnInit() {
         this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
           this.forecasts = result;
         });
       }
     }
     interface WeatherForecast {
       date: string;
       temperatureC: number;
       summary: string;
     }
     ```
   - Update `fetch-data.component.html`:

     ```html
     <h1>JSopX™ Weather</h1>
     <table *ngIf="forecasts.length">
       <thead><tr><th>Date</th><th>Temp (°C)</th><th>Summary</th></tr></thead>
       <tbody>
         <tr *ngFor="let forecast of forecasts">
           <td>{{ forecast.date | date }}</td>
           <td>{{ forecast.temperatureC }}</td>
           <td>{{ forecast.summary }}</td>
         </tr>
       </tbody>
     </table>
     ```
   - Keep `Controllers/WeatherForecastController.cs` as default.

4. **Add Identity + JWT (Simulating Existing Setup)**:
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
     builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = "ClientApp/dist");
     var app = builder.Build();
     app.UseAuthentication();
     app.UseAuthorization();
     app.UseSpa(spa => spa.Options.SourcePath = "ClientApp");
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
         private readonly IConfiguration _config;
         public AuthController(IConfiguration config) => _config = config;
         [HttpPost("login")]
         public IActionResult Login([FromBody] LoginModel model)
         {
             if (model.Username == "test" && model.Password == "password") // Dummy check
             {
                 var token = GenerateJwtToken(model.Username);
                 return Ok(new { token });
             }
             return Unauthorized();
         }
         private string GenerateJwtToken(string username)
         {
             var claims = new[] { new Claim(ClaimTypes.Name, username) };
             var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
             var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
             var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], claims, expires: DateTime.Now.AddMinutes(30), signingCredentials: creds);
             return new JwtSecurityTokenHandler().WriteToken(token);
         }
     }
     public class LoginModel { public string Username { get; set; } public string Password { get; set; } }
     ```
   - Add `ClientApp/src/app/login/login.component.ts`:

     ```typescript
     import { Component, inject } from '@angular/core';
     import { HttpClient } from '@angular/common/http';
     @Component({
       selector: 'app-login',
       template: `<input [(ngModel)]="username" placeholder="Username" /><input [(ngModel)]="password" type="password" /><button (click)="login()">Login</button><p>{{message}}</p>`
     })
     export class LoginComponent {
       username = ''; password = ''; message = '';
       private http = inject(HttpClient);
       login() {
         this.http.post<{ token: string }>('/api/auth/login', { username: this.username, password: this.password }).subscribe({
           next: result => { localStorage.setItem('jwt', result.token); this.message = 'Logged in!'; },
           error: () => this.message = 'Login failed'
         });
       }
     }
     ```
   - Register in `app.module.ts`:

     ```typescript
     import { LoginComponent } from './login/login.component';
     @NgModule({
       declarations: [..., LoginComponent],
       imports: [..., RouterModule.forRoot([... , { path: 'login', component: LoginComponent }])],
     })
     ```

5. **Test the Base Setup**:
   - Run `npm install` in `ClientApp/`.
   - Start the app (`F5`).
   - Navigate to `/login`, use `test/password`, then hit `/fetch-data`.


[`Back to Top`](#table-of-contents)

---

## Step 2: Extend Weather Data

**Goal**: Add historical weather data.

1. **Update Weather Interface**:
   - In `fetch-data.component.ts`:

     ```typescript
     interface WeatherForecast {
       date: string;
       temperatureC: number;
       summary: string;
       historicalTempC?: number;
     }
     ```

2. **Update Weather Controller**:
   - In `WeatherForecastController.cs`:

     ```csharp
     [Authorize]
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

3. **Update Fetch Data Component**:
   - In `fetch-data.component.html`:

     ```html
     <tr><th>Date</th><th>Temp (°C)</th><th>Historical Temp (°C)</th><th>Summary</th></tr>
     <td>{{ forecast.historicalTempC }}</td>
     ```

4. **Test**: Reload `/fetch-data` and verify historical data.


[`Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC

**Goal**: Use OIDC via `JSopX.AspNetCore`’s IdentityServer.

1. **Install Angular OIDC Client**:
   - In `ClientApp/`: `npm install angular-auth-oidc-client`.

2. **Configure OIDC**:
   - In `app.module.ts`:

     ```typescript
     import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';
     export function configureAuth(oidcConfigService: OidcConfigService) {
       return () => oidcConfigService.withConfig({
         authority: 'https://localhost:7235',
         redirectUrl: window.location.origin,
         clientId: 'angular',
         scope: 'openid profile api',
         responseType: 'code',
         silentRenew: true,
         useRefreshToken: true
       });
     }
     @NgModule({
       imports: [AuthModule.forRoot()],
       providers: [OidcConfigService, { provide: APP_INITIALIZER, useFactory: configureAuth, deps: [OidcConfigService], multi: true }],
     })
     ```
   - Update `app.component.ts`:

     ```typescript
     import { OidcSecurityService } from 'angular-auth-oidc-client';
     export class AppComponent {
       private oidc = inject(OidcSecurityService);
       ngOnInit() { this.oidc.checkAuth().subscribe(({ isAuthenticated }) => console.log('Authenticated:', isAuthenticated)); }
     }
     ```

3. **Secure API Calls**:
   - In `fetch-data.component.ts`:

     ```typescript
     import { OidcSecurityService } from 'angular-auth-oidc-client';
     export class FetchDataComponent {
       private oidc = inject(OidcSecurityService);
       ngOnInit() {
         this.oidc.getAccessToken().subscribe(token => {
           this.http.get<WeatherForecast[]>('/weatherforecast', { headers: { Authorization: `Bearer ${token}` } }).subscribe(result => {
             this.forecasts = result;
           });
         });
       }
     }
     ```

4. **Test**: Log in via OIDC, verify `/fetch-data` works.


[`Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: Use `JSopX.WebAPI`.

1. **Update Fetch Data**:
   - In `fetch-data.component.ts`:

     ```typescript
     this.http.get<WeatherForecast[]>('https://localhost:7234/api/weather', { headers: { Authorization: `Bearer ${token}` } }).subscribe(...)
     ```

2. **Test**: Ensure data comes from `JSopX.WebAPI`.


[`Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

1. **Reference JSopX.RCLxProper**:
   - Angular can’t directly use Razor RCLs, so mimic style in `fetch-data.component.scss`:

     ```scss
     table { border-collapse: collapse; }
     th, td { border: 1px solid #ddd; padding: 8px; }
     ```

2. **Reference JSopX.SharedResources**:
   - Add `weather-utils.ts` to `ClientApp/src/app/`:

     ```typescript
     export class WeatherUtils {
       static getWeatherIcon(summary: string): string {
         return summary === 'Cool' ? '❄️' : summary === 'Warm' ? '☀️' : '🔥';
       }
     }
     ```
   - Use in `fetch-data.component.html`:

     ```html
     <td>{{ WeatherUtils.getWeatherIcon(forecast.summary) }}</td>
     ```

3. **Test**: Verify icons appear.

[`Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../OpenProjects/jsopx.SharedResources/p1/v1/RECREATEME.md)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step. You'll move onto the next project, using the `JSopX.SharedResources` _From Scratch_ Variant.   

---

1. **[Install Using Latest](../../OpenProjects/jsopx.BridgeTooFar/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.BridgeTooFar` _Using Latest_ Variant.  
2. **[Browse By-Phase](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.BridgeTooFar` _By-Phase_ Variant.   
3. **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/OpenProjects/) · · [`Use Latest`](../../OpenProjects/jsopx.BridgeTooFar/README.md) · [`By-Phase`](../../OpenProjects/jsopx.BridgeTooFar/p1/v1/README.md) · **`From Scratch`** · · [`Back to Top`](#table-of-contents) · [`« Previous`](../../OpenProjects/jsopx.WebAPI/p1/v1/RECREATEME.md) [`Next »`](../../OpenProjects/jsopx.SharedResources/p1/v1/RECREATEME.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
