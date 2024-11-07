
Install `Visual Studio` v **`17.11.5`** (_or higher_) if it is not already installed or found on your device.

#### Step-by-Step Instructions:

You can use **`Powershell`** Command Line dialog again to `install` the correct version of `Visual Studio` or `Visual Studio Code` v `17.11.5` (_or higher_) on your device.
   
1. Open `Powershell`, type the following _command_, and hit the `Enter` button on your `keyboard`:

   ```powershell   
      # Using Powershell:
      # Install Visual Studio 2022 using the Visual Studio Installer (community edition as an example)

      Invoke-WebRequest -Uri "https://aka.ms/vs/17/release/vs_community.exe" -OutFile "vs_community.exe"
      Start-Process -FilePath "vs_community.exe" -ArgumentList "--quiet --wait --norestart" -Wait
    ```
   
2. This command should _install_ all necessary `Visual Studio` or `Visual Studio Code` dependencies and features, and then prints the results of the installation to the `Powershell` Command Line dialog output.



[All Technology Requirements](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Technologies.md)  »  [**Visual Studio**](#visual-studio)  »  [Back to Top](#table-of-contents)