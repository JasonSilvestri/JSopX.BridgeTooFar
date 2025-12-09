# Checking All JSopX™ Technology Requirements

Understanding the technologies that power **JSopX™** is crucial for ensuring compatibility, performance, and stability across all projects in the ecosystem.  

By following this guide, you’ll verify that all required technologies are installed and at the correct versions—saving time and avoiding potential issues later.  

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Solutions`] ·· [`VS Templates`] ·· **[`Technologies`]**

---

**Technology**:

[`« Previous`] [`Next »`]

---

## **Table of Contents**  

- [Overview](#overview)  
- [1. Check Technologies: Using the Command Table](./CheckingAllJSopxTechnologyRequirements.md#1-check-technologies-using-the-command-table)  
- [2. Check Technologies: Step-by-Step (Back-to-Back)](./CheckingAllJSopxTechnologyRequirements.md#2-check-technologies-step-by-step-back-to-back)  
- [3. Check Technologies: Using Automated Scripts](./CheckingAllJSopxTechnologyRequirements.md#3-check-technologies-using-automated-scripts)  
  - [3.1: Bash Script for Cross-Platform Users](./CheckingAllJSopxTechnologyRequirements.md#31-bash-script-for-cross-platform-users)  
  - [3.2: PowerShell Script for Windows Users](./CheckingAllJSopxTechnologyRequirements.md#32-powershell-script-for-windows-users)  
  - [3.3: Node.js Script](./CheckingAllJSopxTechnologyRequirements.md#33-nodejs-script)  
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
| Visual Studio            | `v 17.14.21`   | _Manual check required_                | [Visual Studio](#visual-studio) |
| .NET Framework           | `v 9.2.1`     | `dotnet --list-sdks`                   | [.NET Framework](#net-framework) |
| ASP.NET Core             | `v 9.2.1`     | `dotnet --version`                     | [ASP.NET Core](#aspnet-core) |
| .NET Core Blazor         | `v 9.2.1`     | `dotnet --list-sdks`                   | [Blazor](#net-core-blazor) |
| .NET Core MAUI           | `v 9.2.1`     | `dotnet --list-sdks`                   | [.NET MAUI](#net-core-maui-hybrid) |
| Node.js                  | `v 20.14.0`   | `node -v`                              | [Node.js](#nodejs) |
| npm                      | `v 10.8.1`    | `npm -v`                               | [npm](#npm) |
| Angular CLI              | `v 18.0.3`    | `ng version`                           | [Angular CLI](#angular-cli) |
| React                    | `v 18.2.0`    | `npm list react`                       | [React](#react) |
| Vue                      | `v 3.4.21`    | `npm list vue`                         | [Vue](#vue) |
| Vite                     | `v 5.2.8`     | `npm list vite`                        | [Vite](#vite) |
| Bash                     | `v 5.x+`      | `bash --version`                       | [Bash](#bash) |
| PowerShell               | `v 7.x+`      | `$PSVersionTable.PSVersion`            | [PowerShell](#powershell) |

[`⇧ Back to Top`]  

---

## **2. Check Technologies: Step-by-Step (Back-to-Back)**  

Each technology has its own step-by-step (back-to-back) verification process. Follow the instructions below to ensure you’re using the correct versions.

As you go, use `« Previous` and `Next »` to quickly navigate to the previous or next technology version check.

---

### **Visual Studio**

**Purpose:** Checks the installed [`Visual Studio`](./VisualStudio.md) version.

- **Version:** `v 17.14.21`  
- **Verification:**
  - Open Visual Studio.
  - Navigate to **Help > About Microsoft Visual Studio**.
  - Confirm the version is correct.
  - Alternatively, check via **Visual Studio Installer** under the **Installed** tab.

[`« Previous`](#table-of-contents) [`Next »`](#net-framework) · · · [`⇧ Back to Top`]

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

[`« Previous`](#visual-studio) [`Next »`](#aspnet-core) · · · [`⇧ Back to Top`]

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

[`« Previous`](#net-framework) [`Next »`](#net-core-blazor) · · · [`⇧ Back to Top`]

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

[`« Previous`](#aspnet-core) [`Next »`](#net-core-maui-hybrid) · · · [`⇧ Back to Top`]

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

[`« Previous`](#net-core-blazor) [`Next »`](#nodejs) · · · [`⇧ Back to Top`]

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

[`« Previous`](#net-core-maui-hybrid) [`Next »`](#npm) · · · [`⇧ Back to Top`]

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


[`« Previous`](#nodejs) [`Next »`](#angular-cli) · · · [`⇧ Back to Top`]

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

[`« Previous`](#npm) [`Next »`](#react) · · · [`⇧ Back to Top`]

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


[`« Previous`](#angular-cli) [`Next »`](#vue) · · · [`⇧ Back to Top`]

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

[`« Previous`](#react) [`Next »`](#vite) · · · [`⇧ Back to Top`]

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

[`« Previous`](#vue) [`Next »`](#bash) · · · [`⇧ Back to Top`]

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

[`« Previous`](#vite) [`Next »`](#powershell) · · · [`⇧ Back to Top`]

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

[`« Previous`](#bash) · · · [`⇧ Back to Top`]

---

## 3. Check Technologies: Using Automated Scripts

If you want to check all required technologies **automatically**, I’ve created "Lazy" scripts in **Bash, PowerShell, and Node.js** that will do the work for you.  

Choose the script that fits your environment:  

- **[Bash](./CheckingAllJSopxTechnologyRequirements.md#31-bash-script-for-cross-platform-users)** → Ideal for **Linux, macOS, and Windows (WSL/Git Bash)** users.  
- **[PowerShell](./CheckingAllJSopxTechnologyRequirements.md#32-powershell-script-for-windows-users)** → Best for **Windows** users.  
- **[Node.js](./CheckingAllJSopxTechnologyRequirements.md#33-nodejs-script)** → A lightweight option for developers using **JavaScript-based workflows**.  

[`⇧ Back to Top`]  

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

[`⇧ Back to Top`]  

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

[`⇧ Back to Top`]  

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

[`⇧ Back to Top`]  

---

## **In Conclusion**
- **Convenience:** Users can check everything at once without manually typing commands.
- **Flexibility:** You can customize the script for specific projects or environments.
- **Scalability:** It’s easy to update the script as new technologies are added to the stack.

---

**Technology**:

[`« Previous`] [`Next »`] ··· [`⇧ Back to Top`]

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Solutions`] ·· [`VS Templates`] ·· **[`Technologies`]**

---

##### [jsopx.com] | [GitHub] | [Lexicon] | [Email] | Phone : 508-851-9445

###### Copyright © 2025 – All Rights Reserved by Jason Silvestri Open Project EXperiences (JSopX™)

[jsopx.com]: http://jsopx.com "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Products, Services and SaaS Services"
[Email]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Open Project EXperiences (JSopX™) Email Contact for Mark Silvetri"
[Phone]: phoneto:508-851-9445 "Jason Silvestri Open Project EXperiences (JSopX™) Phone Contact for Mark Silvetri"
[therealjasonsilvestri@gmail.com]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Open Project EXperiences (JSopX™) Email Contact for Mark Silvetri"
[508-851-9445]: phoneto:508-851-9445 "Jason Silvestri Open Project EXperiences (JSopX™) Phone Contact for Mark Silvetri"

[GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri Open Project EXperiences (JSopX™) GitHub Repository"

[Current GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Document Management Project Solution GitHub Repository"
[Current GitHub Home]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/README.md "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Document Management Project GitHub Home README.md"

<!--Root Lexicon -->
[Lexicon]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/Lexicon.md "JSopX™ Project Common Lexicon.md"
[`Lexicon`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/Lexicon.md "JSopX™ Project Common Lexicon.md"

<!--Root Solution Previous -->
[`« Previous`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Windows.md "JSopX™ SaaS Project Solution Windows Techologies"
<!--Root Solution Next -->
[`Next »`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md "JSopX™ SaaS Project Solution .NET Framework Techologies"

<!--Root Solution Project Solutions -->
[`Common`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/README.md "JSopX™ SaaS Project Common README.md"
<!--Root Solution Project Solutions -->
[`Solutions`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md "JSopX™ SaaS Project Solutions README.md"
<!--Root Solution Project Visual Studio Templates -->
[`VS Templates`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md "JSopX™ SaaS Visual Studio Project Solutions Templates README.md"
<!--Root Solution Technologies -->
[`Technologies`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md "JSopX™ Project Solution Technologies Technologies.md"

<!-- Back to Top links (all styles) found under most sections -->
[Overview]: #overview "Primary document table of contents"

<!-- Back to Top links (all styles) found under most sections -->
[Back to Top]: #table-of-contents "Primary document table of contents"
[`Back to Top`]: #table-of-contents "Primary document table of contents"
[`⇧ Back to Top`]: #table-of-contents "Primary document table of contents"

<!--Root Solution Home-->
[`Home`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management Project Home README.md"
<!--Root Solution Project -->
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/JSopX.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution example README.md"

<!--Install README.md - Often same as Root Solution-->
[`Intro`]: /JSopX.BridgeTooFar/docs/md/JSopX.AngularCore/README.md "JSopX™ SaaS Project Solution Install README.md"
<!--Install README.md - Often same as Root Solution-->
[`Install`]: /JSopX.BridgeTooFar/docs/md/JSopX.AngularCore/REINSTALLME.md "JSopX™ SaaS Project Solution Install README.md"
<!--Briefing REDEBRIEFME.md - The briefing of the Solution-->
[`Debrief`]: /JSopX.BridgeTooFar/docs/md/JSopX.AngularCore/REDEBRIEFME.md "JSopX™ SaaS Document Management Project Briefing REDEBRIEFME.md"
<!--Recreate RECREATEME.md - The step by step instructions to Create Solution - often from briefing -->
[`Recreate`]: /JSopX.BridgeTooFar/docs/md/JSopX.AngularCore/RECREATEME.md "JSopX™ SaaS Document Management Project Step by Step HowTo Re-Create RECREATEME.md"
<!--Recreate CHANGELOG.md - The Changelogs of Solution - often from briefing -->
[`Changelogs`]: /JSopX.BridgeTooFar/docs/md/JSopX.AngularCore/CHANGELOG.md "JSopX™ SaaS Document Management Project Change Logs CHANGELOG.md"
<!--Recreate CONTRIBUTING.md - The Contributing Guidelines of Solution - often from briefing -->
[`Contributing`]: /JSopX.BridgeTooFar/docs/md/JSopX.AngularCore/CONTRIBUTING.md "JSopX™ SaaS Contributor Guidelines CONTRIBUTING.md"
<!--Recreate CODE_OF_CONDUCT.md - The Code of Conduct of Solution - often from briefing -->
[`Conduct`]: /JSopX.BridgeTooFar/docs/md/JSopX.AngularCore/CODE_OF_CONDUCT.md "JSopX™ SaaS Code of Conduct CODE_OF_CONDUCT.md"
<!--Recreate SECURITY.md - The Security Policy of Solution - often from briefing -->
[`Security`]: /JSopX.BridgeTooFar/docs/md/JSopX.AngularCore/SECURITY.md "JSopX™ SaaS Security Policy SECURITY.md"
<!--Recreate LICENSE.txt - The LICENSE Policy of Solution - often from briefing -->
[`License`]: /JSopX.BridgeTooFar/docs/md/JSopX.AngularCore/SECURITY.md "JSopX™ LICENSE Policy LICENSE.txt"

<!--Root Solution Project Solutions -->
[`Common`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/README.md "JSopX™ SaaS Project Common README.md"
[⚙️ Workflow State]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[⚙️ `Workflow State`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[Workflow States]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Workflow States`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Junction Rules`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
[Junction Rules]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
[`Development Standards`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/DevelopmentStandards.md "JSopX™ Project Common Development Standards"
[Development Standards]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/DevelopmentStandards.md "JSopX™ Project Common Development Standards"

<!--Root Solution Project Solutions -->
[`Database`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/README.md "JSopX™ SaaS Project Common README.md"
[`Schema`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/Schema.md "JSopX™ SaaS Project Common Schema.md"

<!--Root Solution Project Solutions -->
[`Solutions`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md "JSopX™ SaaS Project Solutions README.md"
<!--Root Solution Project Visual Studio Templates -->
[`VS Templates`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md "JSopX™ SaaS Visual Studio Project Solutions Templates README.md"
<!--Root Solution Technologies -->
[`Technologies`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md "JSopX™ Project Solution Technologies README.md"

<!-- Back to Top links (all styles) found under most sections -->
[Back to Top]: #table-of-contents "Primary document table of contents"
[`Back to Top`]: #table-of-contents "Primary document table of contents"
[`⇧ Back to Top`]: #table-of-contents "Primary document table of contents"

<!-- Long Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`<https://github.com/JasonSilvestri/OpenProjectX>`]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Core>`]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.ML>`]: https://github.com/JasonSilvestri/JSopX.ML "JSopX™ ML SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Halos>`]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.WebApi>`]: https://github.com/JasonSilvestri/JSopX.WebApi "JSopX™ WebAPI SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Data>`]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Vault>`]: https://github.com/JasonSilvestri/JSopX.Vault "JSopX™ Vault SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Presentation>`]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.ClassLibrary>`]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Unitx>`]: https://github.com/JasonSilvestri/JSopX.Unitx "JSopX™ Unit Testing SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.SaaS>`]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore>`]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Titrate SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.EndGame>`]: https://github.com/JasonSilvestri/JSopX.EndGame "JSopX™ MAUI End Game SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.HealthTracker>`]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.Maui.MPA>`]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.CRM>`]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.PLM>`]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.AngularCore>`]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core consumption SaaS Example Project"

<!-- Short Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX GitHub]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[JSopX.Core GitHub]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[JSopX.Data GitHub]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[JSopX.ML GitHub]: https://github.com/JasonSilvestri/JSopX.ML "JSopX™ ML SaaS Project"
[JSopX.Halos GitHub]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[JSopX.WebApi GitHub]: https://github.com/JasonSilvestri/JSopX.WebApi "JSopX™ Web API SaaS Project"
[JSopX.Vault GitHub]: https://github.com/JasonSilvestri/JSopX.Vault "JSopX™ Vault SaaS Project"
[JSopX.Presentation GitHub]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary GitHub]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[JSopX.Unitx GitHub]: https://github.com/JasonSilvestri/JSopX.Unitx "JSopX™ Unit Testing SaaS Project"
[JSopX.SaaS GitHub]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore GitHub]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Titrate SaaS Project"
[JSopX.EndGame GitHub]: https://github.com/JasonSilvestri/JSopX.EndGame "JSopX™ MAUI End Game SaaS Project"
[JSopX.HealthTracker GitHub]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA GitHub]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[JSopX.CRM GitHub]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM GitHub]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.AngularCore GitHub]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core consumption SaaS Example Project"

<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX]: /JSopX.BridgeTooFar/docs/md/JSopX/README.md "JSopX™ Enterprise-Level Solution"
[JSopX.Core]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/README.md "JSopX™ Core SaaS Project"
[JSopX.Data]: /JSopX.BridgeTooFar/docs/md/JSopX.Data/README.md "JSopX™ Data SaaS Project"
[JSopX.ML]: /JSopX.BridgeTooFar/docs/md/JSopX.ML/README.md "JSopX™ ML SaaS Project"
[JSopX.Halos]: /JSopX.BridgeTooFar/docs/md/JSopX.Halos/README.md "JSopX™ Halos SaaS Project"
[JSopX.WebApi]: /JSopX.BridgeTooFar/docs/md/JSopX.WebApi/README.md "JSopX™ WebAPI SaaS Project"
[JSopX.Vault]: /JSopX.BridgeTooFar/docs/md/JSopX.Vault/README.md "JSopX™ Vault SaaS Project"
[JSopX.Presentation]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/README.md "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary]: /JSopX.BridgeTooFar/docs/md/JSopX.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[JSopX.Unitx]: /JSopX.BridgeTooFar/docs/md/JSopX.Unitx/README.md "JSopX™ Unit Testing SaaS Project"
[JSopX.SaaS]: /JSopX.BridgeTooFar/docs/md/JSopX.SaaS/README.md "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore]: /JSopX.BridgeTooFar/docs/md/JSopX.MauiHybridNetCore/README.md "JSopX™ MAUI Titrate SaaS Project"
[JSopX.EndGame]: /JSopX.BridgeTooFar/docs/md/JSopX.EndGame/README.md "JSopX™ MAUI End Game SaaS Project"
[JSopX.HealthTracker]: /JSopX.BridgeTooFar/docs/md/JSopX.HealthTracker/README.md "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA]: /JSopX.BridgeTooFar/docs/md/JSopX.Maui.MPA/README.md "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar]: /JSopX.BridgeTooFar/docs/md/JSopX.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[JSopX.CRM]: /JSopX.BridgeTooFar/docs/md/JSopX.CRM/README.md "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM]: /JSopX.BridgeTooFar/docs/md/JSopX.PLM/README.md "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.AngularCore]: /JSopX.BridgeTooFar/docs/md/JSopX.AngularCore/README.md "JSopX™ Product Lifecycle Management SaaS Project"

<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solutions & Version All SaaS Projects -->
[JSopX (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopx "JSopX™ Enterprise-Level Solution"
[JSopX.Core (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxcore "JSopX™ Core SaaS Project"
[JSopX.Data (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxdata "JSopX™ Data SaaS Project"
[JSopX.ML (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxml "JSopX™ ML SaaS Project"
[JSopX.Halos (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxhalos "JSopX™ WebAPI SaaS Project"
[JSopX.Vault (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxvault "JSopX™ Vault SaaS Project"
[JSopX.Presentation (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxpresentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxutilities "JSopX™ Utilities SaaS Project"
[JSopX.Unitx (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxunitx "JSopX™ Unit Testing SaaS Project"
[JSopX.SaaS (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxsaas "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxtitrate "JSopX™ MAUI Titrate SaaS Project"
[JSopX.EndGame (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxendgame "JSopX™ MAUI End Game SaaS Project"
[JSopX.HealthTracker (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxtitrate "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxmauimpa "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxbridgetoofar "JSopX™ Document Management SaaS Project"
[JSopX.CRM (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxcrm "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxplm "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.AngularCore (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxangularcore "JSopX™ Product Lifecycle Management SaaS Project"


<!-- Short Form Local Document Management Links of all JSopX™ Visual Studio Templates-->
[Blank Solution VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#blank-solution-visual-studio-template "JSopX™ Visual Studio Blank Solution Project Template"
[ASP.NET Core Web App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#aspnet-core-web-app-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web App Project Template"
[Website App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#website-visual-studio-template "JSopX™ Visual Studio Website Project Template"
[Console App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#console-app-visual-studio-template "JSopX™ Visual Studio Console App Project Template"
[Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#class-library-visual-studio-template "JSopX™ Visual Studio Class Library Project Template"
[Razor Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#razor-class-library-visual-studio-template "JSopX™ Visual Studio Razor Class Library Project Template"
[Asp.NET Core Web API VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#aspnet-core-web-api-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web Api Project Template"
[Angular and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#angular-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Angular and ASP.NET Core Project Template"
[React and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#react-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio React and ASP.NET Core Project Template"
[Vue and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#vue-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Vue and ASP.NET Core Project Template"
[Blazor Web App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#blazor-web-app-visual-studio-template "JSopX™ Visual Studio Blazor Web App Project Template"
[.NET MAUI Blazor Hybrid and Web App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#net-maui-blazor-hybrid-and-web-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Blazor Hybrid and Web App Project Template"
[.NET MAUI Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#net-maui-class-library-visual-studio-template "JSopX™ Visual Studio .NET MAUI Class Library Project Template"
[Website VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#website-visual-studio-template "JSopX™ Visual Studio Website Project Template"
[.NET MAUI Multi-Project App VS Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/README.md#net-maui-multi-project-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Multi-Project App Project Template"
<!-- Short Form Local Document Management Links of all JSopX™ Visual Studio Templates Page by Page -->
[Blank Solution Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/BlankSolution.md "JSopX™ Visual Studio Blank Solution Project Template"
[ASP.NET Core Web App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/AspNetCoreWebApp.md "JSopX™ Visual Studio ASP.NET Core Web App Project Template"
[Website App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/Website.md "JSopX™ Visual Studio Website Project Template"
[Console App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/ConsoleApp.md "JSopX™ Visual Studio Console App Project Template"
[Class Library Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/ClassLibrary.md "JSopX™ Visual Studio Class Library Project Template"
[Razor Class Library Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/RazorClassLibrary.md "JSopX™ Visual Studio Razor Class Library Project Template"
[Asp.NET Core Web API Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/AspNetCoreWebApi.md "JSopX™ Visual Studio ASP.NET Core Web Api Project Template"
[Angular and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/AngularAspNetCore.md "JSopX™ Visual Studio Angular and ASP.NET Core Project Template"
[React and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/ReactAspNetCore.md "JSopX™ Visual Studio React and ASP.NET Core Project Template"
[Vue and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/VueAspNetCore.md "JSopX™ Visual Studio Vue and ASP.NET Core Project Template"
[Blazor Web App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/BlazorWebApp.md "JSopX™ Visual Studio Blazor Web App Project Template"
[.NET MAUI Blazor Hybrid and Web App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/NetMauiBlazorHybridandWeb.md "JSopX™ Visual Studio .NET MAUI Blazor Hybrid and Web App Project Template"
[.NET MAUI Class Library Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/NetMauiClassLibrary.md "JSopX™ Visual Studio .NET MAUI Class Library Project Template"
[.NET MAUI Multi-Project App Template]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/VsTemplates/NetMauiMultiProjectApp.md "JSopX™ Visual Studio .NET MAUI Multi-Project App Project Template"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[npm]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[Vue]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[Vite]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[Python]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[Bash]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows (v 10+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Windows.md "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio (v 17.14.21)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/VisualStudio.md "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/NetFrameworkSdk.md "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/AspNetCore.md "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/NetCoreBlazor.md "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/NetCoreMauiHybrid.md "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node (v 20.14.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Node.md "JSopX™ SaaS Project Node Technology Requirements"
[npm (v 10.8.1)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/npm.md "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap (v 5.3.8)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Bootstrap.md "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI (v 18.0.3)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/AngularCli.md "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React (v 18.2.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/React.md "JSopX™ SaaS Project React Technology Requirements"
[Vue (v 3.4.21)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Vue.md "JSopX™ SaaS Project Vue Technology Requirements"
[Vite (v 5.2.8)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Vite.md "JSopX™ SaaS Project Vite Technology Requirements"
[Python (v 3.12.3x+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Python.md "JSopX™ SaaS Project Python Technology Requirements"
[Bash (v 5.x+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Bash.md "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell (v 7.x+)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Powershell.md "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[Created]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#created
[Queued]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#queued
[In Progress]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#in-progress
[Waiting]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#waiting
[Passed]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#passed
[Failed]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#failed
[Rejected]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#rejected
[Cancelled]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#cancelled
[Skipped]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#skipped
[Timeout]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#timeout
[Network Error]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#network-error
[Validation Error]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#validation-error
[Retrying]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#retrying
[Blocked]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#blocked
[Completed]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#completed
[To Do]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#to-do
[Started]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#started
[Pending]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#pending
[Expired]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#expired
[Approved]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#approved
[Sent]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#sent
[Received]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#received
[Under Review]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#under-review
[Soft Delete]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#soft-delete
[Hard Delete]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#hard-delete
[Unknown]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#unknown
[Null or Empty]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#null-or-empty
[Active]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#active

<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[`CREATED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#created
[`QUEUED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#queued
[`IN PROGRESS`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#in-progress
[`WAITING`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#waiting
[`PASSED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#passed
[`FAILED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#failed
[`REJECTED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#rejected
[`CANCELLED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#cancelled
[`SKIPPED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#skipped
[`TIMEOUT`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#timeout
[`NETWORK ERROR`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#network-error
[`VALIDATION ERROR`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#validation-error
[`RETRYING`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#retrying
[`BLOCKED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#blocked
[`COMPLETED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#completed
[`TO DO`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#to-do
[`STARTED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#started
[`PENDING`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#pending
[`EXPIRED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#expired
[`APPROVED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#approved
[`SENT`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#sent
[`RECEIVED`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#received
[`UNDER REVIEW`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#under-review
[`SOFT DELETE`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#soft-delete
[`HARD DELETE`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#hard-delete
[`UNKNOWN`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#unknown
[`NULL OR EMPTY`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#null-or-empty
[`ACTIVE`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/WorkflowStates.md#active