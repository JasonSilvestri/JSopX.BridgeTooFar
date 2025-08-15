# Checking All JSopX™ Technology Requirements

Understanding the technologies that power **JSopX™** is crucial for ensuring compatibility, performance, and stability across all projects in the ecosystem.  

By following this guide, you’ll verify that all required technologies are installed and at the correct versions—saving time and avoiding potential issues later.  

---

[`Introduction`](../../../../../Introduction/) » [`Technologies`](./ReadMe.md) » **`Check All Versions`** · · · [`« Previous`](./ReadMe.md) [`Next »`](./VisualStudio.md)

---

## **Table of Contents**  

- [Overview](#overview)  
- [1. Check Technologies: Using the Command Table](./CheckingAllJSopxTechnologyRequirements.md#1-check-technologies-using-the-command-table)  
- [2. Check Technologies: Step-by-Step (Back-to-Back)](./CheckingAllJSopxTechnologyRequirements.md#2-check-technologies-step-by-step-back-to-back)  
- [3. Check Technologies: Using Automated Scripts](./CheckingAllJSopxTechnologyRequirements.md#3-check-technologies-using-automated-scripts)  
  - [3.1: `Bash` Script for Cross-Platform Users](./CheckingAllJSopxTechnologyRequirements.md#31-bash-script-for-cross-platform-users)  
  - [3.2: `PowerShell` Script for Windows Users](./CheckingAllJSopxTechnologyRequirements.md#32-powershell-script-for-windows-users)  
  - [3.3: `Node.js` Script](./CheckingAllJSopxTechnologyRequirements.md#33-nodejs-script)  
- [In Conclusion](#in-conclusion)  
---

## **Overview**  

The **JSopX™ suite** is built on a carefully curated stack of technologies, chosen for their performance, reliability, and maintainability. Ensuring you have the **correct versions installed** is key to seamless development and collaboration.  

From backend frameworks like **ASP.NET Core** to frontend tooling such as **Angular CLI** and **Vite**, each plays an essential role in the JSopX™ ecosystem. Keeping these tools up to date eliminates friction and maximizes productivity.  

---

## **1. Check Technologies: Using the Command Table**  

If you want a quick overview of all technology versions using a command-line interface (`cmd`, `PowerShell`, `Terminal`), this **Check Command Table** provides a consolidated view of each required tool, its version, and the command to check it.  

| **Technology**           | **Version**   | **Check Command**                      | **Detailed Guide** |
|:-------------------------|:--------------|:-----------------------------------------|:--------------------|
| Visual Studio            | `v 17.14.11`   | _Manual check required_                | [Visual Studio](#visual-studio) |
| .NET Framework           | `v 9.0.1`     | `dotnet --list-sdks`                   | [.NET Framework](#net-framework) |
| ASP.NET Core             | `v 9.0.1`     | `dotnet --version`                     | [ASP.NET Core](#aspnet-core) |
| .NET Core Blazor         | `v 9.0.1`     | `dotnet --list-sdks`                   | [Blazor](#net-core-blazor) |
| .NET Core MAUI           | `v 9.0.1`     | `dotnet --list-sdks`                   | [.NET MAUI](#net-core-maui-hybrid) |
| Node.js                  | `v 20.14.0`   | `node -v`                              | [Node.js](#nodejs) |
| npm                      | `v 10.8.1`    | `npm -v`                               | [npm](#npm) |
| Angular CLI              | `v 18.0.3`    | `ng version`                           | [Angular CLI](#angular-cli) |
| React                    | `v 18.2.0`    | `npm list react`                       | [React](#react) |
| Vue                      | `v 3.4.21`    | `npm list vue`                         | [Vue](#vue) |
| Vite                     | `v 5.2.8`     | `npm list vite`                        | [Vite](#vite) |
| Bash                     | `v 5.x+`      | `bash --version`                       | [Bash](#bash) |
| PowerShell               | `v 7.x+`      | `$PSVersionTable.PSVersion`            | [PowerShell](#powershell) |

[`Back to Top`](#table-of-contents)  

---

## **2. Check Technologies: Step-by-Step (Back-to-Back)**  

Each technology has its own step-by-step (back-to-back) verification process. Follow the instructions below to ensure you’re using the correct versions.

As you go, use `« Previous` and `Next »` to quickly navigate to the previous or next technology version check.

---

### **Visual Studio**

**Purpose:** Checks the installed [`Visual Studio`](./VisualStudio.md) version.

- **Version:** `v 17.14.11`  
- **Verification:**
  - Open Visual Studio.
  - Navigate to **Help > About Microsoft Visual Studio**.
  - Confirm the version is correct.
  - Alternatively, check via **Visual Studio Installer** under the **Installed** tab.

[`« Previous`](#table-of-contents) [`Next »`](#net-framework) · · · [`Back to Top`](#table-of-contents)

---

### **.NET Framework**

**Purpose:** Lists all installed [`.NET SDKs`](./NetFrameworkSdk.md).


```bash
dotnet --list-sdks
```
**Expected Output:**
```
9.0.100 [C:\Program Files\dotnet\sdk]
```

[`« Previous`](#visual-studio) [`Next »`](#aspnet-core) · · · [`Back to Top`](#table-of-contents)

---

### **ASP.NET Core**

**Purpose:** Verifies the currently active [`ASP.NET Core SDK`](./AspNetCore.md) version.

```bash
dotnet --version
```
**Expected Output:**  
```
9.0.1
```

[`« Previous`](#net-framework) [`Next »`](#net-core-blazor) · · · [`Back to Top`](#table-of-contents)

---

### **.NET Core Blazor**

**Purpose:** Verifies the currently active [`Blazor Server Core SDK`](./NetCoreBlazor.md) version.

```bash
dotnet --list-sdks
```
**Expected Output:**  
```
9.0.100 [C:\Program Files\dotnet\sdk]
```

[`« Previous`](#aspnet-core) [`Next »`](#net-core-maui-hybrid) · · · [`Back to Top`](#table-of-contents)

---

### **.NET Core MAUI Hybrid**

**Purpose:** Verifies the currently active [`MAUI Hybrid .NET Core SDK`](./NetCoreMauiHybrid.md) version.

```bash
dotnet --list-sdks
```
**Expected Output:**  
```
9.0.100 [C:\Program Files\dotnet\sdk]
```

[`« Previous`](#net-core-blazor) [`Next »`](#nodejs) · · · [`Back to Top`](#table-of-contents)

---

### **Node.js**

**Purpose:** Checks the installed [`Node.js`](./Node.md) version.


```bash
node -v
```
**Expected Output:**  
```
v20.14.0
```

[`« Previous`](#net-core-maui-hybrid) [`Next »`](#npm) · · · [`Back to Top`](#table-of-contents)

---

### **npm**

**Purpose:** Checks the installed [`npm`](./npm.md) version.


```bash
npm -v
```
**Expected Output:**  
```
10.8.1
```


[`« Previous`](#nodejs) [`Next »`](#angular-cli) · · · [`Back to Top`](#table-of-contents)

---

### **Angular CLI**

**Purpose:** Verifies the installed [`Angular CLI`](./AngularCli.md) version.

```bash
ng version
```
**Expected Output:**  
```
Angular CLI: 18.0.3
```

[`« Previous`](#npm) [`Next »`](#react) · · · [`Back to Top`](#table-of-contents)

---

### **React**

**Purpose:** Checks the installed [`React`](./React.md) version.


```bash
npm list react
```
**Expected Output:**  
```
react@18.2.0
```


[`« Previous`](#angular-cli) [`Next »`](#vue) · · · [`Back to Top`](#table-of-contents)

---

### **Vue**

**Purpose:** Checks the installed [`Vue`](./Vue.md) version.


```bash
npm list vue
```
**Expected Output:**  
```
vue@3.4.21
```

[`« Previous`](#react) [`Next »`](#vite) · · · [`Back to Top`](#table-of-contents)

---

### **Vite**

**Purpose:** Checks the installed [`Vite`](./Vite.md) version.

```bash
npm list vite
```
**Expected Output:**  
```
vite@5.2.8
```

[`« Previous`](#vue) [`Next »`](#bash) · · · [`Back to Top`](#table-of-contents)

---

### **Bash**

**Purpose:** Verifies the installed [`Bash`](./Bash.md) version.

```bash
bash --version
```
**Expected Output:**  
```
GNU bash, version 5.x
```

[`« Previous`](#vite) [`Next »`](#powershell) · · · [`Back to Top`](#table-of-contents)

---

### **PowerShell**

**Purpose:** Checks the installed [`PowerShell`](./Powershell.md) version.

```powershell
$PSVersionTable.PSVersion
```
**Expected Output:**  
```
Major  Minor  Patch
-----  -----  -----
7      x      x
```

[`« Previous`](#bash) · · · [`Back to Top`](#table-of-contents)

---

## 3. Check Technologies: Using Automated Scripts

If you want to check all required technologies **automatically**, I’ve created "Lazy" scripts in **Bash, PowerShell, and Node.js** that will do the work for you.  

Choose the script that fits your environment:  

- **[Bash](./CheckingAllJSopxTechnologyRequirements.md#31-bash-script-for-cross-platform-users)** → Ideal for **Linux, macOS, and Windows (WSL/Git Bash)** users.  
- **[PowerShell](./CheckingAllJSopxTechnologyRequirements.md#32-powershell-script-for-windows-users)** → Best for **Windows** users.  
- **[Node.js](./CheckingAllJSopxTechnologyRequirements.md#33-nodejs-script)** → A lightweight option for developers using **JavaScript-based workflows**.  

[`Back to Top`](#table-of-contents)  

---

### **3.1: `Bash` Script for Cross-Platform Users**  

This script checks all installed technologies and displays their versions.

#### **Bash Script (`check-jsopx-versions.sh`)**
```bash
#!/bin/bash

echo "=== Checking JSopX™ Technology Versions ==="

echo "Visual Studio: (Manual Check Needed)"
echo ".NET SDKs: $(dotnet --list-sdks)"
echo "ASP.NET Core: $(dotnet --version)"
echo "Node.js: $(node -v)"
echo "npm: $(npm -v)"
echo "Angular CLI: $(ng version | grep 'Angular CLI')"
echo "Bash: $(bash --version | head -n 1)"

echo "=== Check Complete ==="
```

#### **Usage:**  
1. Save this script as `check-jsopx-versions.sh`.  
2. Run:  
   ```bash
   bash check-jsopx-versions.sh
   ```

[`Back to Top`](#table-of-contents)  

---

### **3.2: `PowerShell` Script for Windows Users**  

For Windows users, this **PowerShell script** checks all technology versions.

#### **PowerShell Script (`check-jsopx-versions.ps1`)**
```powershell
Write-Output "=== Checking JSopX™ Technology Versions ==="

Write-Output "Visual Studio: (Manual Check Needed)"
Write-Output ".NET SDKs: $(dotnet --list-sdks)"
Write-Output "ASP.NET Core: $(dotnet --version)"
Write-Output "Node.js: $(node -v)"
Write-Output "npm: $(npm -v)"
Write-Output "Angular CLI: $(ng version | Select-String 'Angular CLI')"
Write-Output "Bash: $(bash --version | Select-String 'GNU')"

Write-Output "=== Check Complete ==="
```

#### **Usage:**  
1. Save this script as `check-jsopx-versions.ps1`.  
2. Run:  
   ```powershell
   .\check-jsopx-versions.ps1
   ```

[`Back to Top`](#table-of-contents)  

---

### **3.3: `Node.js` Script**  

If you already have Node.js installed, you can use this script to check technology versions.

#### **Node.js Script (`check-jsopx-versions.js`)**
```javascript
const { execSync } = require('child_process');

console.log("=== Checking JSopX™ Technology Versions ===");

const commands = {
    "Visual Studio": "Manual Check Needed",
    ".NET SDKs": "dotnet --list-sdks",
    "ASP.NET Core": "dotnet --version",
    "Node.js": "node -v",
    "npm": "npm -v",
    "Angular CLI": "ng version | findstr CLI",
    "Bash": "bash --version"
};

for (const [name, cmd] of Object.entries(commands)) {
    try {
        console.log(`${name}:`);
        console.log(cmd === "Manual Check Needed" ? "  Please check manually." : execSync(cmd, { stdio: 'pipe' }).toString().trim());
    } catch {
        console.log(`${name}: Not Installed");
    }
}

console.log("=== Check Complete ===");
```

#### **Usage:**  
1. Save this script as `check-jsopx-versions.js`.  
2. Run:  
   ```bash
   node check-jsopx-versions.js
   ```

[`Back to Top`](#table-of-contents)  

---

## **In Conclusion**
- **Convenience:** Users can check everything at once without manually typing commands.
- **Flexibility:** You can customize the script for specific projects or environments.
- **Scalability:** It’s easy to update the script as new technologies are added to the stack.

---

[`Introduction`](../../../../../Introduction/) » [`Technologies`](./ReadMe.md) » **`Check All Versions`** · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](./ReadMe.md) [`Next »`](./VisualStudio.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri