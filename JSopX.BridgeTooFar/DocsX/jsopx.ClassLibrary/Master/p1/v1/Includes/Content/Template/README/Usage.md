#### Adding the JSopX™ Class Library to Other Projects

1. **Add Project Reference**:

    - In the solution that requires the common library, right-click on the project in Solution Explorer.
    - Select `Add` > `Reference`.
    - Check the box for `JSopX.ClassLibrary` and click `OK`.

2. **Use the Common Code**:

    - You can now use the constants, enums, and helpers from the `JSopX.ClassLibrary` in your other projects.

#### Example Usage

**Using Constants**:

```csharp
using JSopX.ClassLibrary.JsopxConstants;

public class ExampleService
{
    public void PrintJwtSettings()
    {
        Console.WriteLine($"Issuer: {JsopxConstants.WebAppDemoSettings.JwtIssuer}");
        Console.WriteLine($"Audience: {JsopxConstants.WebAppDemoSettings.JwtAudience}");
        Console.WriteLine($"Key: {JsopxConstants.WebAppDemoSettings.JwtKey}");
    }
}
```
