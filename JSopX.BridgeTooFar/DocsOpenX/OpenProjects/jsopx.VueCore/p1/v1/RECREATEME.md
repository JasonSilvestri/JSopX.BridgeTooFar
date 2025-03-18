# Recreating JSopX™ Vue Core Project: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite. Recreating the `JSopX.VueCore` project shows us how to simulate an existing Vue app with weather data, Identity, and JWT already established.

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

Recreating the `JSopX.VueCore` project shows us how to simulate an existing Vue app with weather data, Identity, and JWT already established.

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.3)](../../../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](../../../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](../../../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/AspNetCore.md)
- [npm (v 10.8.1)](../../../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/npm.md)
- [Vue (v 10.8.1)](../../../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/Vue.md)
- [Vite (v 3.4.21)](../../../../OpenProjects/jsopx.VueCore/p1/v1/Technologies/Vite.md)

[`Back to Top`](#table-of-contents)

---


## Step 1: Recreate Using Vue and ASP.NET Core Template

**Goal**: Simulate an existing Vue app with weather data, Identity, and JWT already established.

1. **Open Visual Studio 2022 (v 17.13.3)**:
   - Ensure .NET 9.0 SDK, Node 20.14.0, npm 10.8.1, and Vue (assuming Vite 3.4.21) are installed.

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core with Vue.js”.
   - Configure:
     - Project Name: `JSopX.VueCore`.
     - Location: e.g., `C:\JSopX\`.
     - Solution Name: `JSopX.VueCore`.
     - Framework: .NET 9.0.
   - Click Create.

3. **Set Up Initial Weather Data**:
   - In `ClientApp/src/components/FetchData.vue`:

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
   - Add `ClientApp/src/components/Login.vue`:

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
   - Update `ClientApp/src/router/index.js`:

     ```javascript
     import Login from '../components/Login.vue';
     const routes = [
       { path: '/', component: Home },
       { path: '/fetch-data', component: FetchData },
       { path: '/login', component: Login }
     ];
     ```

5. **Test the Base Setup**:
   - Run `npm install` in `ClientApp/`.
   - Start the app (`F5`).
   - Go to `/login`, use `test/password`, then `/fetch-data`.


[`Back to Top`](#table-of-contents)

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


[`Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC

**Goal**: Use OIDC via `JSopX.AspNetCore`’s IdentityServer.

1. **Install Vue OIDC Client**:
   - In `ClientApp/`: `npm install vue3-openid-connect`.

2. **Configure OIDC**:
   - In `ClientApp/src/main.js`:

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
   - Add `ClientApp/src/components/Callback.vue`:

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


[`Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: Use `JSopX.WebAPI`.

1. **Update Fetch Data**:
   - In `FetchData.vue`:

     ```vue
     const response = await fetch('https://localhost:7234/api/weather', { headers: { 'Authorization': `Bearer ${token}` } });
     ```

2. **Test**: Ensure data comes from `JSopX.WebAPI`.


[`Back to Top`](#table-of-contents)

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
   - Add `ClientApp/src/weatherUtils.js`:

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

[`Back to Top`](#table-of-contents)

---

## `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for the `JSopX.VueCore` JSopX™ Vue Core Project.

You have a few options moving forward:

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board, which includes across projects.

[`Continue Course »`](../../../../OpenProjects/jsopx.OpenProjectX/p1/v1/)

---

### **2. Continue Focus on the Growth of just JSopX™ Vue Core:**  

Although not recommended, if your pure focus is reverse engineering just the JSopX™ Vue Core project for one reason or another, it's cool. I totally get it. It is part of why I created this series of applications, and in the ways I did. We are developers. We develop. We explore. We ask the question, "What If?".

[`Continue Evolving with JSopX™ Vue Core »`](../../../../OpenProjects/jsopx.VueCore/p2/v1/)


---

### **3. I Want My Blanky and Bubba:**  

You can always go back to the version of this application that is already created for you. No one is gonna bash you for starting from the beginning and regrouping.

[`« Start From Beginning`](../../../../OpenProjects/jsopx.VueCore/)

---
  
[`Introduction`](../../../../Introduction/) » [**`JSopX™ Projects`**](../../../../OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](../../../../Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](../../../../OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
