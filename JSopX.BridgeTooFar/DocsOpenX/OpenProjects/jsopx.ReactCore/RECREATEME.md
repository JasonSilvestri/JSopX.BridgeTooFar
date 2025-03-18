# Recreating JSopX™ React Core Project: Start from Scratch

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

---

By exploring the [Overview](#overview), you’ll gain insights into how each Visual Studio project within JSopX™ fits into the larger ecosystem, contributing to a unified, scalable, and maintainable enterprise-level application suite. Recreating the `JSopX.ReactCore` project shows us how to simulate an existing React app with weather data, Identity, and JWT already established.

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

Recreating the `JSopX.ReactCore` project shows us how to simulate an existing React app with weather data, Identity, and JWT already established.

[`Back to Top`](#table-of-contents)

---

## Prerequisites

- [Visual Studio (v 17.13.3)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/Technologies/VisualStudio.md)
- [.NET Framework (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/Technologies/NetFrameworkSdk.md)
- [ASP.NET Core (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/Technologies/AspNetCore.md)
- [npm (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/Technologies/npm.md)
- [React (v 18.2.0)](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.ReactCore/p1/v1/Technologies/React.md)

[`Back to Top`](#table-of-contents)

---

## Step 1: Recreate Using React and ASP.NET Core Template

**Goal**: Simulate an existing React app with weather data, Identity, and JWT already established.

1. **Open Visual Studio 2022 (v 17.13.3)**:
   - Ensure .NET 9.0 SDK, Node 20.14.0, and npm 10.8.1 are installed (React 18.2.0 comes with template).

2. **Create the Project**:
   - File > New > Project.
   - Search for “ASP.NET Core with React.js”.
   - Configure:
     - Project Name: `JSopX.ReactCore`.
     - Location: e.g., `C:\JSopX\`.
     - Solution Name: `JSopX.ReactCore`.
     - Framework: .NET 9.0.
   - Click Create.

3. **Set Up Initial Weather Data**:
   - In `ClientApp/src/components/FetchData.js`:

     ```javascript
     import React, { useEffect, useState } from 'react';
     export const FetchData = () => {
       const [forecasts, setForecasts] = useState([]);
       useEffect(() => {
         fetch('weatherforecast')
           .then(response => response.json())
           .then(data => setForecasts(data));
       }, []);
       return (
         <div>
           <h1>JSopX™ Weather</h1>
           <table>
             <thead><tr><th>Date</th><th>Temp (°C)</th><th>Summary</th></tr></thead>
             <tbody>
               {forecasts.map(forecast => (
                 <tr key={forecast.date}>
                   <td>{new Date(forecast.date).toLocaleDateString()}</td>
                   <td>{forecast.temperatureC}</td>
                   <td>{forecast.summary}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       );
     };
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
     builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = "ClientApp/build");
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
   - Add `ClientApp/src/components/Login.js`:

     ```javascript
     import React, { useState } from 'react';
     export const Login = () => {
       const [username, setUsername] = useState('');
       const [password, setPassword] = useState('');
       const [message, setMessage] = useState('');
       const login = () => {
         fetch('/api/auth/login', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ username, password })
         })
           .then(response => response.json())
           .then(data => {
             localStorage.setItem('jwt', data.token);
             setMessage('Logged in!');
           })
           .catch(() => setMessage('Login failed'));
       };
       return (
         <div>
           <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
           <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
           <button onClick={login}>Login</button>
           <p>{message}</p>
         </div>
       );
     };
     ```
   - Update `ClientApp/src/App.js`:

     ```javascript
     import { Login } from './components/Login';
     const App = () => (
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/fetch-data" element={<FetchData />} />
           <Route path="/login" element={<Login />} />
         </Routes>
       </Router>
     );
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
   - In `FetchData.js`, expect `historicalTempC`:

     ```javascript
     // Implicit in the fetch response
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
   - In `FetchData.js`:

     ```javascript
     <thead><tr><th>Date</th><th>Temp (°C)</th><th>Historical Temp (°C)</th><th>Summary</th></tr></thead>
     <td>{forecast.historicalTempC}</td>
     ```

4. **Test**: Reload `/fetch-data` and verify historical data.


[`Back to Top`](#table-of-contents)

---

## Step 3: Integrate OIDC

**Goal**: Use OIDC via `JSopX.AspNetCore`’s IdentityServer.

1. **Install React OIDC Client**:
   - In `ClientApp/`: `npm install oidc-client-ts`.

2. **Configure OIDC**:
   - Add `ClientApp/src/auth.js`:

     ```javascript
     import { UserManager } from 'oidc-client-ts';
     export const userManager = new UserManager({
       authority: 'https://localhost:7235',
       client_id: 'react',
       redirect_uri: window.location.origin + '/callback',
       scope: 'openid profile api',
       response_type: 'code',
       silentRenew: true
     });
     ```
   - Add `ClientApp/src/components/Callback.js`:

     ```javascript
     import { useEffect } from 'react';
     import { userManager } from '../auth';
     export const Callback = () => {
       useEffect(() => { userManager.signinRedirectCallback().then(() => window.location = '/'); }, []);
       return <div>Logging in...</div>;
     };
     ```
   - Update `App.js`:

     ```javascript
     import { userManager } from './auth';
     import { Callback } from './components/Callback';
     const App = () => {
       useEffect(() => { userManager.getUser().then(user => console.log(user)); }, []);
       return (
         <Router>
           <Routes>
             <Route path="/callback" element={<Callback />} />
             ...
           </Routes>
         </Router>
       );
     };
     ```

3. **Secure API Calls**:
   - In `FetchData.js`:

     ```javascript
     useEffect(() => {
       userManager.getUser().then(user => {
         fetch('weatherforecast', {
           headers: { 'Authorization': `Bearer ${user.access_token}` }
         })
           .then(response => response.json())
           .then(data => setForecasts(data));
       });
     }, []);
     ```

4. **Test**: Add `react` client to `Config.cs` in `JSopX.AspNetCore`, log in, verify `/fetch-data`.


[`Back to Top`](#table-of-contents)

---

## Step 4: Decouple from Built-In API

**Goal**: Use `JSopX.WebAPI`.

1. **Update Fetch Data**:
   - In `FetchData.js`:

     ```javascript
     fetch('https://localhost:7234/api/weather', { headers: { 'Authorization': `Bearer ${user.access_token}` } })
     ```

2. **Test**: Ensure data comes from `JSopX.WebAPI`.


[`Back to Top`](#table-of-contents)

---

## Step 5: Standardize with RCLs and Libraries

1. **Reference JSopX.RCLxProper**:
   - Mimic style in `FetchData.css`:

     ```css
     table { border-collapse: collapse; }
     th, td { border: 1px solid #ddd; padding: 8px; }
     ```

2. **Reference JSopX.SharedResources**:
   - Add `ClientApp/src/weatherUtils.js`:

     ```javascript
     export const getWeatherIcon = summary => summary === 'Cool' ? '❄️' : summary === 'Warm' ? '☀️' : '🔥';
     ```
   - Use in `FetchData.js`:

     ```javascript
     import { getWeatherIcon } from '../weatherUtils';
     <td>{getWeatherIcon(forecast.summary)}</td>
     ```

3. **Test**: Verify icons appear.

[`Back to Top`](#table-of-contents)

---

## `Phase 1` Tasks Finished! What's Next?

You have **completed all** `Phase 1: Start from Scratch` tasks for the `JSopX.ReactCore` JSopX™ React Core Project.

You have a few options moving forward:

---

### **1. Continue `Phase 1` Tasks (_Recommended_):**  

If you want to be sure you are able to create all projects from scratch, it is highly recommended you stay the course, and complete all `Phase 1` tasks across the board, which includes across projects.

[`Continue Course »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.OpenProjectX/p1/v1/)

---

### **2. Continue Focus on the Growth of just JSopX™ React Core:**  

Although not recommended, if your pure focus is reverse engineering just the JSopX™ React Core project for one reason or another, it's cool. I totally get it. It is part of why I created this series of applications, and in the ways I did. We are developers. We develop. We explore. We ask the question, "What If?".

[`Continue Evolving with JSopX™ React Core »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.ReactCore/p2/v1/)


---

### **3. I Want My Blanky and Bubba:**  

You can always go back to the version of this application that is already created for you. No one is gonna bash you for starting from the beginning and regrouping.

[`« Start From Beginning`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.ReactCore/)

---
  
[`Introduction`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Introduction/) » [**`JSopX™ Projects`**](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/)  · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/Introduction/JasonSilvestriOpenProjectExperiences.md) [`Next »`](https://github.com/JasonSilvestri/JSopX.RazorClassLibraryDraft/blob/master/DocsOpenX/OpenProjects/jsopx.OpenProjectX)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
