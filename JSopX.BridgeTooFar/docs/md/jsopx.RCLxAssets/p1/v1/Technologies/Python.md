# Python

**From the ﻿BETA v 2025 Jason Silvestri Open Project EXperiences (JSopX™) Collection**

**`Python` v `3.12.3x+` is `Required`**

---

[`Home`](../../../README.md) » [`Introduction`](../../../../jsopx.Global/Introduction/) » [`Technologies`](../../../../../Technologies/) » **[`Python`](./Python.md)** · · [`« Previous`](./Powershell.md) [`Next »`](./README.md)

---

## Table of Contents

- [Overview](#overview)
- [Check Versions](#python-checking-versions)
- [Installation](#python-installation)
- [JSopX™ Project Dependencies](#python-jsopx-project-dependencies)
- [Downloads & Documentation](#python-official-downloads--documentation)

---

## **Overview**  

All JSopX™ Open Project EXperiences _can use_ `Python` v **`3.12.3x+`** (_or higher_), for command-line operations, such as cloning JSopX™ project repositories, initializing JSopX™ projects, and managing their dependencies. 

This section is dedicated to helping you ensure you have the correct `Python` setup, by describing how to check versions, perform installations if necessary, check JSopX™ dependencies, get links to official documentation, and more!

[`⇧ Back to Top`](#table-of-contents)

---

## Python: Checking Versions

Check if `Python` v **`3.12.3x+`** (_or higher_) is installed on your device.

### Step-by-Step Instructions:

Use **`Node`** Command Line dialog to ensure you have the correct version of `Python` v `3.12.3x+` (_or higher_) on your device.
   
1. Open `Node` **Command Prompt**, type the following command, and hit the `Enter` button on your `keyboard`:
   
2. **Node Command:**
     ```python
       python --version
     ```
3. **Expected Output:** 
     ```
      Python 3.12.3
     ```
4. **Purpose:** Checks the currently active Python version.

These commands check the `version` of `Python` on your device, and then prints back your version to the `Node` Command Prompt output.
   
If you have version `Python` v **`3.12.3x+`** (_or higher_), you are _good to go_, and no further action is needed!
   
If you do not have Python installed or you version is **`lower`** than `Python` v **`3.12.3x+`**, it is recommended that you install it _immediately_ to avoid unexpected results.

[`⇧ Back to Top`](#table-of-contents) · [`« Previous`](#overview) [`Next »`](#python-installation)

---

## Python: Installation:

Install `Python` v **`3.12.3x+`** (_or higher_) if it is not already installed or found on your device.

### Step-by-Step Instructions:

I’ll break this into two parts: **Windows Installer method** (recommended for most setups) and **Node.js/npm-based method** (handy if you want more automation).

---

### **Install Python 3.12.3 via Windows Installer (Recommended)**


> [!WARNING]
> Clicking links in this section will send you to the official `GNU Operating System` vendor site for `Python`.
> 

---

> This method ensures Python is available to **PowerShell**, **Node.js Command Prompt**, and **regular CMD** without extra configuration.

#### 1. Download the Correct Version

1. Go to:
   **[Python 3.12.3 Windows installer](https://www.python.org/downloads/release/python-3123/)**
2. Under **Files**, choose:

   * **Windows installer (64-bit)** → `python-3.12.3-amd64.exe`

---

#### 2. Run the Installer

When the setup screen appears:

* **Check the box:** ✅ *Add Python 3.12 to PATH*
  *(This is the key step so that PowerShell and Node.js Command Prompt can see it without manual path edits.)*
* Click **Customize installation** (optional, but recommended):

  * Keep defaults checked: *pip*, *IDLE*, *Documentation*
  * On the **Advanced Options** page:

    * ✅ Install for all users (installs to `C:\Program Files\Python312`)
    * ✅ Precompile standard library

Click **Install** and wait for completion.

---

#### 3. Verify Installation (Both Terminals)

Open **PowerShell**:

```powershell
python --version
pip --version
```

Open **Node.js Command Prompt**:

```cmd
python --version
pip --version
```

Both should show:

```
Python 3.12.3
pip <version>
```

---

### **Install Python 3.12.3 via Node.js/npm (Automation Approach)**

If you want to install Python from **Node.js Command Prompt** (especially for automation or scripting), you can use the `node` + `npm` tool **nodeenv** or **pyenv-win**.

---

### Option 1 — Using `pyenv-win` (Best for Multiple Python Versions)

1. Open **Node.js Command Prompt** or **PowerShell** and install pyenv-win:

```bash
npm install -g pyenv-win
```

2. Install Python 3.12.3:

```bash
pyenv install 3.12.3
pyenv global 3.12.3
```

3. Verify:

```bash
python --version
pip --version
```

---

### Option 2 — Using `nodeenv` (Creates an Isolated Node/Python Environment)

1. Install nodeenv:

```bash
npm install -g nodeenv
```

2. Create a combined Node + Python environment:

```bash
nodeenv --python-virtualenv --with-pip env
```

3. Activate the environment:

```bash
env\Scripts\activate
```

4. Check Python version:

```bash
python --version
```

---

✅ **Recommendation:**

* Use **Windows Installer** for system-wide availability (PowerShell + Node.js Command Prompt will both work immediately).
* Use **`pyenv-win`** if you want to **switch Python versions easily** without messing with your system installation.

[`⇧ Back to Top`](#table-of-contents) · [`« Previous`](#python-checking-versions) [`Next »`](#python-jsopx-project-dependencies)

---

## **Python: `JSopX.` Project Dependencies**

`JSopX` projects leverages shared resources and code from other projects within the JSopX™ ecosystem. This ensures modularity, maintainability, and scalability. 

1. **`JSopX.OpenProjectX`**:
   - The [Flagship Project](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Introduction/JSopxProjectsFamilies.md#1-flagship-projects) parent enterprise application solution.
   - **Explore GitHub**: [JSopX.OpenProjectX](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.OpenProjectX)

2. **`JSopX.BridgeTooFar`**:
   - A [Shared Assets & Resources Projects](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Introduction/JSopxProjectsFamilies.md#2-shared-assets--resources-projects) that contains reusable static assets and project documentation.
   - **Explore GitHub**: [JSopX.BridgeTooFar](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/OpenProjects/jsopx.BridgeTooFar)

- [Overview](#overview)
- [Check Versions](#python-checking-versions)
- [Installation](#python-installation)
- [JSopX™ Project Dependencies](#python-jsopx-project-dependencies)
- [Downloads & Documentation](#python-official-downloads--documentation)

[`⇧ Back to Top`](#table-of-contents) · [`« Previous`](#python-installation) [`Next »`](#python-official-downloads--documentation)

---

## Python: Official Downloads & Documentation

> [!WARNING]
> Clicking links in this section will send you to the official `GNU Operating System` vendor site for `Python`.
> 

---

Visit the official `GNU Operating System` vendor site for **`Python`** if:

1. You are having trouble with installs
2. You would rather manually install **`Python`** v **`3.12.3x+`**
3. You prefer some official vendor documentation first
   
#### Step-by-Step Instructions:
   
   
1. Go to:
   **[Python 3.12.3 Windows installer](https://www.python.org/downloads/release/python-3123/)**
2. Under **Files**, choose:

   * **Windows installer (64-bit)** → `python-3.12.3-amd64.exe`

---

#### 2. Run the Installer

When the setup screen appears:

* **Check the box:** ✅ *Add Python 3.12 to PATH*
  *(This is the key step so that PowerShell and Node.js Command Prompt can see it without manual path edits.)*
* Click **Customize installation** (optional, but recommended):

  * Keep defaults checked: *pip*, *IDLE*, *Documentation*
  * On the **Advanced Options** page:

    * ✅ Install for all users (installs to `C:\Program Files\Python312`)
    * ✅ Precompile standard library

Click **Install** and wait for completion.

Or 

1. Download: [Manual Python Installation](https://www.python.org/downloads/release/python-3123/)
2. Read: [Python Documentation](https://www.python.org/downloads/release/python-3123/)

---

[`Home`](../../../README.md) » [`Introduction`](../../../../jsopx.Global/Introduction/) » [`Technologies`](../../../../../Technologies/) » **[`Python`](./Python.md)** · · [`⇧ Back to Top`](#table-of-contents) · [`« Previous`](./Powershell.md) [`Next »`](./README.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri