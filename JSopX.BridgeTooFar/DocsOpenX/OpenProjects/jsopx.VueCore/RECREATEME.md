# <img src="https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/doc-assets/jsopx-vue-core-logo.svg" style="width: 28px; height: auto; padding-right:12px;!important;"> JSopX™ Vue Core Project

The **JSopX™ Vue Core Project**, _code named_, `JSopX.VueCore` is a totally **FREE**, open-source, demonstration project showcasing is a Vue.js client-side project crafted for reactive, component-focused development. Its seamless integration with ASP.NET Core and shared libraries exemplifies the framework-agnostic nature of JSopX™.

---

## **Start From Scratch Variant:**

> [!TIP]
> You are currently viewing the **"_Start From Scratch_" _Variant_** of the **JSopX™ Vue Core Project**. 
> 
> For more details, see [Getting Started](#getting-started) _below_.

---


```bash
# For The Cool Kids: Clone JSopX.VueCore Git Repository
$ git clone https://github.com/JasonSilvestri/JSopX.VueCore.git
```

---

[`Home`](../../OpenProjects/jsopx.VueCore/p1/v1/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/jsopx.VueCore/p1/v1/OpenProjects/) · · [`Use Latest`](../../OpenProjects/jsopx.VueCore/README.md) · [`By-Phase`](../../OpenProjects/jsopx.VueCore/p1/v1/README.md) · **`From Scratch`** · · [`« Previous`](../../OpenProjects/jsopx.AspNetCore/p1/v1/RECREATEME.md) [`Next »`](../../OpenProjects/jsopx.BlazorServerCore/p1/v1/RECREATEME.md)

---

  
## Table of Contents

  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
      - [Step 1: Recreate Using Vue and ASP.NET Core Template](#step-1-recreate-jsopxvuecore-using-vue--aspnet-core-template)
      - [Step 2: Extend Weather Data](#step-2-extend-weather-data)
      - [Step 3: Integrate OIDC](#step-3-integrate-oidc)
      - [Step 4: Decouple from Built-In API](#step-4-decouple-from-built-in-api)
      - [Step 5: Standardize with RCLs and Libraries](#step-5-standardize-with-rcls-and-libraries)
  - [Next Steps](#next-steps)
  
---

## Current Phase

> [!IMPORTANT]
>
>**Phases 1**: This document is currently aligned with [Phase 1: Minimum Viable Product (MVP)](../../Phases/Phase-1.md) Business Requirements. 
> 

---

> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate** and may contain placeholder information.

---

## Overview

The **JSopX™ Vue Core Project**, _code named_, `JSopX.VueCore` is a totally **FREE**, open-source, demonstration project showcasing is a Vue.js client-side project crafted for reactive, component-focused development. Its seamless integration with ASP.NET Core and shared libraries exemplifies the framework-agnostic nature of JSopX™. Conversely, the project has a much higher calling.


We initially create the project to simulate an ["Existing" Client-side Apps Example](../../Introduction/JSopxProjectsFamilies.md#5-client-side-existing-apps-examples) Weather Forecast Vue application, with its own Web API and existing standards, to conform to the initial [business requirements](../../Introduction/JSopxEnterpriseBusinessRequirements.md) set forth by the fictional stakeholders.

As the project evolves through each [Lifecycle Phase](../../Phases/ReadMe.md), we extend the application by creating new user interfaces, the integratation of standardized assets and resources commonly used across projects that comply to the stakeholder's brand standards we are tasked with creating, perform typical increase of security and documentation, while anticipating we'll face a near-future, seamless migration request of the project into our [JSopX.OpenProjectX](../../OpenProjects/jsopx.OpenProjectX/) Enterprise Application.

The Jason Silvestri Open Project EXperiences (JSopX™) Visual Studio Projects collectively form the backbone of the entire suite, each project serving a distinct yet complementary role. 

By aligning varied frameworks—ranging from [ASP.NET Core](../../OpenProjects/jsopx.AspNetCore/README.md) to [Angular](../../OpenProjects/jsopx.AngularCore/README.md), [Vue](../../OpenProjects/jsopx.VueCore/README.md), [React](../../OpenProjects/jsopx.ReactCore/README.md), [Blazor](../../OpenProjects/jsopx.BlazorServerCore/README.md), [MAUI](../../OpenProjects/jsopx.MauiHybridNetCore/README.md) and more, all using the same [Web API](../../OpenProjects/jsopx.WebAPI/README.md), [assets](../../OpenProjects/jsopx.RCLxProper/README.md), [documentation](../../OpenProjects/jsopx.BridgeTooFar/README.md), and [standards](../../Introduction/JSopxDevelopmentStandards.md)—these projects create a consistent development landscape where code can be shared, extended, and integrated seamlessly, bridging-of-the-critical-gap, between front-end dynamism and back-end security. 

The result is an environment that transforms a patchwork of independent solutions into a cohesive enterprise ecosystem, making collaboration smoother and long-term maintenance more manageable. As you delve deeper, you’ll discover how each project type fits into this grand tapestry, ensuring uniform standards while preserving the flexibility needed to evolve and adapt.

[`⇧ Back to Top`](#table-of-contents)

---

## **Prerequisites**

Be sure each technology is installed, with proper versioning, if your goal is to continue exploring and/or installing just the `JSopX.VueCore` Project.

- [Visual Studio (v 17.14.20)](../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/#visual-studio)
- [.NET Framework (v 9.2.1)](../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/#net-framework)
- [ASP.NET Core (v 9.2.1)](../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/#aspnet-core)
- [Node.js (v 20.14.0)](../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/#node)
- [npm (v 10.8.1)](../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/#npm)
- [Vue (v 3.4.21)](../../Technologies/OpenProjects/jsopx.VueCore/p1/v1/Technologies/#vue)
- [Vite (v 5.2.8)](../../Technologies/OpenProjects/jsopx.VueCore/p1/v1/Technologies/#vite)

---

## **Getting Started**

Carefully _choose_ the variant approach below that fits your current objective:

---

### 1. **Continue Creating `JSopX.`VueCore From Scratch**:

- **[Continue](#step-1-recreate-jsopxvuecore-using-vue--aspnet-core-template)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step, using the `JSopX.VueCore` _From Scratch_ Variant.   

---

### 2. **Use Different Variant**:

- **[Install Using Latest](../../OpenProjects/jsopx.VueCore/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.VueCore` _Using Latest_ Variant.  
- **[Browse By-Phase](../../OpenProjects/jsopx.VueCore/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.VueCore` _By-Phase_ Variant.   
- **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---


## Step 1: Recreate Using Vue and ASP.NET Core Template

**Goal**: Simulate an existing Vue app with weather data, Identity, and JWT already established.

1. **Open Visual Studio 2022 (v 17.14.20)**:
   - Ensure the proper technologies outlined in [Prerequisites](#prerequisites) are installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core with Vue.js”.
   - Configure:
     - Project Name: `JSopX.VueCore`.
     - Location: e.g., `path\to\local\repo\JasonSilvestri\JSopX.VueCore`.
     - Solution Name: `JSopX.VueCore`.
     - .NET Framework (v 9.2.1)
   - Click Create.


3. **Set Up Initial Weather Data**:
   - In `JSopX.VueCore/jsopx.vuecore.client/src/components/FetchData.vue`:

     ```vue
     <template>
       <div>
         <h1>JSopX™ Weather</h1>
         <table v-if="forecasts.length">
           <thead><tr><th>Date</th><th>Temp (°C)</th><th>Summary</th></tr></thead>
           <tbody>
             <tr v-for="forecast in forecasts" :key="forecast.date">
               <td>{{ new Date(forecast.date).toLocaleDateString() }}</td>
               <td>{{ forecast.temperatureC }}</td>
               <td>{{ forecast.summary }}</td>
             </tr>
           </tbody>
         </table>
       </div>
     </template>
     <script>
     export default {
       data() {
         return { forecasts: [] };
       },
       async created() {
         const response = await fetch('weatherforecast');
         this.forecasts = await response.json();
       }
     };
     </script>
     ```
   - Keep `JSopX.VueCore/JSopX.VueCore.Server/Controllers/WeatherForecastController.cs` as default.

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
     builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = "JSopX.VueCore/jsopx.vuecore.client/dist");
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
   - Add `JSopX.VueCore/JSopX.VueCore.Server/Controllers/AuthController.cs`:

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
   - Add `JSopX.VueCore/jsopx.vuecore.client/src/components/Login.vue`:

     ```vue
     <template>
       <div>
         <input v-model="username" placeholder="Username" />
         <input v-model="password" type="password" placeholder="Password" />
         <button @click="login">Login</button>
         <p>{{ message }}</p>
       </div>
     </template>
     <script>
     export default {
       data() {
         return { username: '', password: '', message: '' };
       },
       methods: {
         async login() {
           const response = await fetch('/api/auth/login', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({ username: this.username, password: this.password })
           });
           if (response.ok) {
             const data = await response.json();
             localStorage.setItem('jwt', data.token);
             this.message = 'Logged in!';
           } else {
             this.message = 'Login failed';
           }
         }
       }
     };
     </script>
     ```
   - Update `JSopX.VueCore/jsopx.vuecore.client/src/router/index.js`:

     ```javascript
     import Login from '../components/Login.vue';
     const routes = [
       { path: '/', component: Home },
       { path: '/fetch-data', component: FetchData },
       { path: '/login', component: Login }
     ];
     ```

5. **Test the Base Setup**:
   - Run `npm install` in `JSopX.VueCore/jsopx.vuecore.client/`.
   - Start the app (`F5`).
   - Go to `/login`, use `test/password`, then `/fetch-data`.


[`⇧ Back to Top`](#table-of-contents)

---

## Step 2: Extend Weather Data

**Goal**: Add historical weather data.

1. **Update Weather Model**:
   - In `FetchData.vue`, expect `historicalTempC` (implicit in fetch).

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
   - In `FetchData.vue`:

     ```vue
     <thead><tr><th>Date</th><th>Temp (°C)</th><th>Historical Temp (°C)</th><th>Summary</th></tr></thead>
     <td>{{ forecast.historicalTempC }}</td>
     ```

4. **Test**: Reload `/fetch-data` and verify historical data.


[`⇧ Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC

**Goal**: Use OIDC via `JSopX.AspNetCore`’s IdentityServer.

1. **Install Vue OIDC Client**:
   - In `JSopX.VueCore/jsopx.vuecore.client/`: `npm install vue3-openid-connect`.

2. **Configure OIDC**:
   - In `JSopX.VueCore/jsopx.vuecore.client/src/main.js`:

     ```javascript
     import { createAuth } from 'vue3-openid-connect';
     const auth = createAuth({
       authority: 'https://localhost:7235',
       clientId: 'vue',
       redirectUri: window.location.origin + '/callback',
       scope: 'openid profile api',
       responseType: 'code',
       silentRenew: true
     });
     app.use(auth);
     ```
   - Add `JSopX.VueCore/jsopx.vuecore.client/src/components/Callback.vue`:

     ```vue
     <template><div>Logging in...</div></template>
     <script>
     export default {
       async created() {
         await this.$auth.signinRedirectCallback();
         this.$router.push('/');
       }
     };
     </script>
     ```
   - Update `router/index.js`:

     ```javascript
     import Callback from '../components/Callback.vue';
     const routes = [
       { path: '/callback', component: Callback },
       ...
     ];
     ```

3. **Secure API Calls**:
   - In `FetchData.vue`:

     ```vue
     <script>
     export default {
       data() { return { forecasts: [] }; },
       async created() {
         const token = await this.$auth.getAccessToken();
         const response = await fetch('weatherforecast', {
           headers: { 'Authorization': `Bearer ${token}` }
         });
         this.forecasts = await response.json();
       }
     };
     </script>
     ```

4. **Test**: Add `vue` client to `Config.cs` in `JSopX.AspNetCore`, log in, verify `/fetch-data`.


[`⇧ Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: Use `JSopX.WebAPI`.

1. **Update Fetch Data**:
   - In `FetchData.vue`:

     ```vue
     const response = await fetch('https://localhost:7234/api/weather', { headers: { 'Authorization': `Bearer ${token}` } });
     ```

2. **Test**: Ensure data comes from `JSopX.WebAPI`.


[`⇧ Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

1. **Reference JSopX.RCLxProper**:
   - Mimic style in `FetchData.vue`:

     ```vue
     <style>
     table { border-collapse: collapse; }
     th, td { border: 1px solid #ddd; padding: 8px; }
     </style>
     ```

2. **Reference JSopX.SharedResources**:
   - Add `JSopX.VueCore/jsopx.vuecore.client/src/weatherUtils.js`:

     ```javascript
     export const getWeatherIcon = summary => summary === 'Cool' ? '❄️' : summary === 'Warm' ? '☀️' : '🔥';
     ```
   - Use in `FetchData.vue`:

     ```vue
     <script>
     import { getWeatherIcon } from '../weatherUtils';
     export default {
       methods: { getWeatherIcon }
     };
     </script>
     <td>{{ getWeatherIcon(forecast.summary) }}</td>
     ```

3. **Test**: Verify icons appear.

[`⇧ Back to Top`](#table-of-contents)

---

## **Next Steps**

Carefully choose the approach below that fits your current objective:

---

1. **[Continue](../../OpenProjects/jsopx.BlazorServerCore/p1/v1/RECREATEME.md)** → **Continue** as **you were**, **creating projects** from scratch, step-by-step. You'll move onto the next project, using the `JSopX.ClassLibrary` _From Scratch_ Variant.   

---

1. **[Install Using Latest](../../OpenProjects/jsopx.VueCore/README.md)** → **Install** or **explore** the latest version of **this project**, using the `JSopX.VueCore` _Using Latest_ Variant.  
2. **[Browse By-Phase](../../OpenProjects/jsopx.VueCore/p1/v1/README.md)** → **Browse** **previous versions** of the application by **phases** using the `JSopX.VueCore` _By-Phase_ Variant.   
3. **[Get All Projects](../../OpenProjects/jsopx.OpenProjectX/README.md)** → **Get all projects** instead, using the `JSopX.OpenProjectX` Enterprise Application.

---

[`Home`](../../OpenProjects/jsopx.VueCore/p1/v1/README.md) » [`Introduction`](../../Introduction/) » [`Projects`](../../OpenProjects/jsopx.VueCore/p1/v1/OpenProjects/) · · [`Use Latest`](../../OpenProjects/jsopx.VueCore/README.md) · [`By-Phase`](../../OpenProjects/jsopx.VueCore/p1/v1/README.md) · **`From Scratch`** · · [`⇧ Back to Top`](#table-of-contents) · [`« Previous`](../../OpenProjects/jsopx.ReactCore/p1/v1/RECREATEME.md) [`Next »`](../../OpenProjects/jsopx.BlazorServerCore/p1/v1/RECREATEME.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
