
#### Adding the JSopX™ Maui Hybrid .Net Core Projects

This is another one of those steps that I did for you, but you never know. You may need to re-create these steps in custom situations.


### Reference the Maui Hybrid .Net Core Project

1. **Add a project reference** to `JsopX.MauiHybridNetCore` in each client project:
    - Right-click on the client project (e.g., `JsopX.MauiHybridNetCore`, `JsopX.ReactCore`, `JsopX.VueCore`, `JsopX.MauiHybridNetCore`).
    - Select **Add** > **Project Reference**.
    - Check `JsopX.MauiHybridNetCore` and click **OK**.

2. **Use the Common Code**:
   - You can now use the JSopX™ Maui Hybrid .Net Core from the `JSopX.MauiHybridNetCore` project in your other projects.

### Example: Blazor Project

**In `JsopX.MauiHybridNetCore`**:

1. **Reference the Maui Hybrid .Net Core Project**:
    - Add a reference to `JsopX.MauiHybridNetCore` in `JsopX.MauiHybridNetCore`.

2. **Use Static Files in Razor Components**:
    - Create a Razor component that uses the shared static files.

    ```razor
    @page "/example"
    @inject IWebHostEnvironment env

    <h3>Example Page</h3>

    <img src="@($"{env.WebRootPath}/images/logo.png")" alt="Logo">
    <script src="@($"{env.WebRootPath}/JavaScript/script.js")"></script>
    <link rel="stylesheet" href="@($"{env.WebRootPath}/CSS/style.css")">
    ```

### Example: Angular Project

**In `JsopX.MauiHybridNetCore`**:

1. **Copy Files Using a Build Script**:
    - Create a script to copy the shared resources from `JsopX.MauiHybridNetCore` to the `assets` folder of the Angular project during the build process.

    ```json
    
    "scripts": {
        "postinstall": "npm run copy-maui-hybrid-net-core",
        "copy-maui-hybrid-net-core": "cp -r ../JsopX.MauiHybridNetCore/* ./src/full-assets/"
    }
    ```

2. **Use Static Files in Angular Components**:
    - Reference the static files in your Angular components.

    ```html
    <!-- app.component.html -->
    <img src="assets/images/logo.png" alt="Logo">
    <script src="assets/JavaScript/script.js"></script>
    <link rel="stylesheet" href="assets/CSS/style.css">
    ```

### Example: Vue Project

**In `JsopX.VueCore`**:

1. **Copy Files Using a Build Script**:
    - Create a script to copy the shared resources from `JsopX.MauiHybridNetCore` to the `assets` folder of the Vue project during the build process.

    ```json
    
    "scripts": {
        "postinstall": "npm run copy-maui-hybrid-net-core",
        "copy-maui-hybrid-net-core": "cp -r ../JsopX.MauiHybridNetCore/* ./public/full-assets/"
    }
    ```

2. **Use Static Files in Vue Components**:
    - Reference the static files in your Vue components.

    ```html
    <!-- App.vue -->
    <template>
        <div>
            <img src="assets/images/logo.png" alt="Logo">
            <script src="assets/JavaScript/script.js"></script>
            <link rel="stylesheet" href="assets/CSS/style.css">
        </div>
    </template>
    ```

### Example: React Project

**In `JsopX.ReactCore`**:

1. **Copy Files Using a Build Script**:
    - Create a script to copy the shared resources from `JsopX.MauiHybridNetCore` to the `public` folder of the React project during the build process.

    ```json
    // package.json
    "scripts": {
        "postinstall": "npm run copy-maui-hybrid-net-core",
        "copy-maui-hybrid-net-core": "cp -r ../JsopX.MauiHybridNetCore/* ./public/full-assets/"
    }
    ```

2. **Use Static Files in React Components**:
    - Reference the static files in your React components.

    ```javascript
    // App.js
    import React from 'react';

    function App() {
        return (
            <div>
                <img src="assets/images/logo.png" alt="Logo" />
                <script src="assets/JavaScript/script.js"></script>
                <link rel="stylesheet" href="assets/CSS/style.css" />
            </div>
        );
    }

    export default App;
    ```

