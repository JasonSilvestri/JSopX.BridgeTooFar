# JSopX™ Solution Project (v1) - Database Schema Samples

The **Jason Silvestri Open Project EXperiences (JSopX™) JSopX™** Enterprise-Level Solution is a modular SaaS architecture designed to provide comprehensive health management services. It consists of multiple interconnected projects, each serving a specific purpose within the overall JSopX™ eco system, each with one or more entities that relate to the sample database schemas included here.

> The following chat has all the resources found here: [https://chatgpt.com/c/5fe8b720-40e2-4128-9b06-f88d11d6115f](https://chatgpt.com/c/5fe8b720-40e2-4128-9b06-f88d11d6115f)

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Database`] » **[`Schema`]** ·· [`SQL Scripts`] ·· [`Services`]

---

## Table of Contents

- [1. **WorkflowsStates**](#1-workflowstates)
- [2. **AspNetUsers**](#2-aspnetusers)
- [3. **JSopXUser**](#3-jsopxuser)
- [4. **Person**](#4-person)
- [5. **JSopXUsersIdentitiesPersons**](#5-jsopxusersidentitiespersons)
- [6. **OrganizationTypes**](#6-organizationtypes)
- [7. **Organizations**](#7-organizations)
- [8. **Product**](#8-product)
- [9. **Category**](#9-category)
- [10. **ProductCategory**](#10-productcategory)
- [11. **CategoriesSubCategories**](#11-categoriessubcategories)
- [12. **Orders**](#12-orders)
- [13. **OrderItem**](#13-orderitem)
- [14. **ShoppingCart**](#14-shoppingcart)
- [15. **CartItem**](#15-cartitem)
- [16. **Wishlist**](#16-wishlist)
- [17. **WishlistItem**](#17-wishlistitem)
- [18. **CustomerReturns**](#18-customerreturns)
- [19. **CustomerReturnItem**](#19-customerreturnitem)
- [20. **FileMimeTypes**](#20-filemimetypes)
- [21. **FileUnitsOfMeasure**](#21-fileunitsofmeasure)
- [22. **FileCustomJSopXFile**](#22-filecustomjsopxfile)
- [23. **FileCustomJSopXFileValidMimeTypes**](#23-filecustomjsopxfilevalidmimetypes)
- [24. **FileRawFiles**](#24-filerawfiles)
- [25. **FileCustomJSopXFileRenditions**](#25-filecustomjsopxfilerenditions)
- [26. **FileCustomJSopXFileValidRenditions**](#26-filecustomjsopxfilevalidrenditions)
- [27. **FileCustomJSopXFilesProducts**](#27-filecustomjsopxfilesproducts)
- [28. **FileCustomJSopXFilesPersons**](#28-filecustomjsopxfilespersons)
- [29. **FileCustomJSopXFilesOrganizations**](#29-filecustomjsopxfilesorganizations)
- [30. **FileCustomJSopXFilesOrders**](#30-filecustomjsopxfilesorders)
	
---

Here is a detailed schema for a Microsoft SQL Server database. Below is a summary of the tables and their respective columns:

> The following chat has all the resources found here: [https://chatgpt.com/c/5fe8b720-40e2-4128-9b06-f88d11d6115f](https://chatgpt.com/c/5fe8b720-40e2-4128-9b06-f88d11d6115f)

## 1). **WorkflowStates:**

* **WorkflowStateId** (INT, Primary Key, DEFAULT auto increment)
* **WorkflowState** (NVARCHAR(50))
* **Description** (NVARCHAR(500))
* **Index: Unique Index:** (WorkflowState)

## 2). **AspNetUsers:**

* **Id** (NVARCHAR(450), Primary Key)
* **UserName** (NVARCHAR(256))
* **Password** (NVARCHAR(256))
* **Index: Unique Index:** (UserName)

## 3). **JSopXUser:**

* **UserId** (GUID, Primary Key)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)

## 4). **Person:**

* **PersonID** (GUID, Primary Key)
* **FirstName** (NVARCHAR(100))
* **LastName** (NVARCHAR(160))
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Composite Index:** (FirstName, LastName)

## 5). **JSopXUsersIdentitiesPersons:**

* **PersonId** (GUID, Primary Key, Foreign Key referencing Person.PersonId, One-to-One Relationship)
* **UserId** (GUID, Primary Key, Foreign Key referencing JSopXUser.UserId, One-to-One Relationship)
* **LoginUserId** (NVARCHAR(450), Primary Key, Foreign Key referencing AspNetUser.Id, One-to-One Relationship)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Composite Index:** (PersonalId, UserId, LoginUserId)

## 6). **OrganizationTypes:**

* **OrganizationTypeId** (INT, Primary Key, DEFAULT auto increment)
* **TypeName** (NVARCHAR(100))
* **Description** (NVARCHAR(500))
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (TypeName)

## 7). **Organizations:**

* **OrganizationId** (GUID, Primary Key, DEFAULT NEWID())
* **OrganizationName** (NVARCHAR(250))
* **OrganizationTypeId** (INT, Foreign Key referencing OrganizationTypes.OrganizationTypeId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (OrganizationName)

## 8). **Product:**

* **ProductId** (GUID, Primary Key, DEFAULT NEWID())
* **Name** (NVARCHAR(160))
* **Description** (NVARCHAR(500))
* **Price** (DECIMAL(8,2))
* **PriceDeal** (DECIMAL(8,2))
* **PriceDealSavings** (SMALL INT)
* **StockQuantity** (SMALL INT)
* **IsInStock** (BIT, DEFAULT 1)
* **OrganizationId** (GUID, Foreign Key referencing Organizations.OrganizationId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (Name)

## 9). **Category:**

* **CategoryId** (INT, Primary Key, DEFAULT auto increment)
* **Name** (NVARCHAR(160))
* **Description** (NVARCHAR(500))
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (Name)

## 10). **ProductCategory:**

* **ProductId** (GUID, Primary Key, Foreign Key referencing Product.ProductId)
* **CategoryId** (INT, Primary Key, Foreign Key referencing Category.CategoryId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Composite Index:** (ProductId, CategoryId)


## 11). **CategoriesSubCategories:**

* **ParentCategoryId** (INT, Primary Key, Foreign Key referencing Category.CategoryId)
* **ChildCategoryId** (INT, Primary Key, Foreign Key referencing Category.CategoryId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (ParentCategoryId, ChildCategoryId)

## 12). **Orders:**

* **OrderId** (GUID, Primary Key, DEFAULT NEWID())
* **UserId** (GUID, Foreign Key referencing JSopXUser.UserId)
* **OrganizationId** (GUID, Foreign Key referencing Organizations.OrganizationId)
* **OrderDate** (DATETIME)
* **TotalAmount** (DECIMAL(8,2))
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Composite Index:** (OrderId, UserId, OrganizationId)

## 13). **OrderItem:**

* **OrderItemId** (GUID, Primary Key, DEFAULT NEWID())
* **OrderId** (GUID, Foreign Key referencing Orders.OrderId)
* **ProductId** (GUID, Foreign Key referencing Product.ProductId)
* **Quantity** (SMALL INT)
* **Subtotal** (DECIMAL(8,2))
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Composite Index:** (OrderItemId, OrderId, ProductId)

## 14). **ShoppingCart:**

* **CartId** (GUID, Primary Key, DEFAULT NEWID())
* **UserId** (GUID, Foreign Key referencing JSopXUser.UserId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Composite Index:** (CartId, UserId)

## 15). **CartItem:**

* **CartItemId** (GUID, Primary Key, DEFAULT NEWID())
* **CartId** (GUID, Foreign Key referencing ShoppingCart.CartId)
* **ProductId** (GUID, Foreign Key referencing Product.ProductId)
* **Quantity** (SMALL INT)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Composite Index:** (CartItemId, CartId, ProductId)

## 16). **Wishlist:**

* **WishlistId** (GUID, Primary Key, DEFAULT NEWID())
* **UserId** (GUID, Foreign Key referencing JSopXUser.UserId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Composite Index:** (WishlistId, UserId)

## 17). **WishlistItem:**

* **WishlistItemId** (GUID, Primary Key, DEFAULT NEWID())
* **WishlistId** (GUID, Foreign Key referencing Wishlist.WishlistId)
* **ProductId** (GUID, Foreign Key referencing Product.ProductId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Composite Index:** (WishlistItemId, WishlistIId, ProductId)

## 18). **CustomerReturns:**

* **ReturnId** (GUID, Primary Key, DEFAULT NEWID())
* **OrderId** (GUID, Foreign Key referencing Orders.OrderId)
* **UserId** (GUID, Foreign Key referencing JSopXUser.UserId)
* **ReturnDate** (DATETIME, DEFAULT getDate())
* **TotalRefund** (DECIMAL(8,2)
* **TotalAmount** (DECIMAL(8,2))
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (ReturnId, OrderId)
* **Index: Composite Index:** (ReturnId, OrderId, UserId)

## 19). **CustomerReturnItem:**

* **CustomerReturnItemId** (GUID, Primary Key, DEFAULT NEWID())
* **ReturnId** (GUID, Foreign Key referencing CustomerReturns.ReturnId)
* **OrderItemId** (GUID, Foreign Key referencing OrderItem.OrderItemId)
* **QuantityReturned** (SMALL INT)
* **RefundAmount** (DECIMAL(8,2))
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (CustomerReturnItemId, OrderItemId)
* **Index: Composite Index:** (CustomerReturnItemId, ReturnId, OrderItemId)

## 20). **FileMimeTypes:**

* **MimeTypeId** (INT, Primary Key, DEFAULT auto increment)
* **MimeType** (NVARCHAR(250))
* **MimeExtension** (NVARCHAR(10))
* **KindOfDocument** (NVARCHAR(50), UNIQUE INDEX)
* **KindOfDocumentShort** (NVARCHAR(25), UNIQUE INDEX)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (KindOfDocument)
* **Index: Unique Index:** (KindOfDocumentShort)

## 21). **FileUnitsOfMeasure:**

* **UnitOfMeasureId** (INT, Primary Key, DEFAULT auto increment)
* **Name** (NVARCHAR(50))
* **Description** (NVARCHAR(250))
* **CodingElement** (NVARCHAR(10))
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (Name)
* **Index: Unique Index:** (CodingElement)

## 22). **FileCustomJSopXFile:**

* **FileCustomId** (GUID, Primary Key, DEFAULT NEWID())
* **Name** (NVARCHAR(50))
* **Description** (NVARCHAR(250))
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (Name)

## 23). **FileCustomJSopXFileValidMimeTypes:**

* **FileCustomId** (GUID, Primary Key, Foreign Key referencing FileCustomJSopXFile.FileCustomId)
* **MimeTypeId** (INT, Primary Key, Foreign Key referencing FileMimeTypes.MimeTypeId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (FileCustomId, MimeTypeId)

## 24). **FileRawFiles:**

* **FileId** (GUID, Primary Key, DEFAULT NEWID())
* **FileName** (NVARCHAR(1024))
* **FileDescription** (NVARCHAR(1033))
* **RawBinaryFileContent** (VARBINARY(MAX))
* **FileSize** (SMALL INT)
* **Width** (SMALLINT)
* **Height** (SMALLINT)
* **MimeType** (INT, Foreign Key referencing FileMimeTypes.MimeTypeId)
* **UnitOfMeasure** (INT, Foreign Key referencing FileUnitsOfMeasure.UnitOfMeasureId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)

## 25). **FileCustomJSopXFileRenditions:**

* **FileRenditionId** (GUID, Primary Key, DEFAULT NEWID())
* **FileRenditionName** (NVARCHAR(50))
* **FileRenditionDescription** (NVARCHAR(1000))
* **Width** (SMALLINT)
* **Height** (SMALLINT)
* **UnitOfMeasure** (INT, Foreign Key referencing FileUnitsOfMeasure.UnitOfMeasureId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (FileRenditionName)

## 26). **FileCustomJSopXFileValidRenditions:**

* **FileCustomId** (GUID, Primary Key, Foreign Key referencing FileCustomJSopXFile.FileCustomId)
* **FileRenditionId** (GUID, Primary Key, Foreign Key referencing FileCustomJSopXFileRenditions.FileRenditionId)
* **FileId** (GUID, Primary Key, Foreign Key referencing FileRawFiles.FileId)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Composite Index:** (FileCustomId, FileRenditionId, FileId)

## 27). **FileCustomJSopXFilesProducts:**

* **FileCustomId** (GUID, Primary Key, Foreign Key referencing FileCustomJSopXFile.FileCustomId, One-to-One Relationship)
* **ProductId** (GUID, Primary Key, Foreign Key referencing Products.ProductId, One-to-One Relationship)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (FileCustomId, ProductId)

## 28). **FileCustomJSopXFilesCategories:**

* **FileCustomId** (GUID, Primary Key, Foreign Key referencing FileCustomJSopXFile.FileCustomId, One-to-One Relationship)
* **CategoryId** (INT, Primary Key, Foreign Key referencing Category.CategoryId, One-to-One Relationship)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (FileCustomId, CategoryId)

## 29). **FileCustomJSopXFilesProfiles:**

* **FileCustomId** (GUID, Primary Key, Foreign Key referencing FileCustomJSopXFile.FileCustomId, One-to-One Relationship)
* **ProfileImageId** (GUID, Primary Key, Foreign Key referencing Person.PersonId, One-to-One Relationship)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (FileCustomId, ProfileImageId)

## 30). **FileCustomJSopXFilesOrganizations:**

* **FileCustomId** (GUID, Primary Key, Foreign Key referencing FileCustomJSopXFile.FileCustomId, One-to-One Relationship)
* **ProfileImageId** (GUID, Primary Key, Foreign Key referencing Organizations.OrganizationId, One-to-One Relationship)
* **CreateDate** (DATETIME, DEFAULT getDate())
* **CreatedBy** (GUID, Foreign Key referencing JSopXUser.UserId)
* **WorkflowState** (INT, Foreign Key referencing WorkflowStates.WorkflowStateId)
* **Index: Unique Index:** (FileCustomId, ProfileImageId)

This completes the overview of the provided MS SQL DB schema. If you have specific questions or need further clarification on any part of the schema, feel free to ask!

> The Database Schema is a living document and will be updated as new terms and definitions are added to the JSopX™ ecosystem. Please refer to this document for the most current terminology.

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Database`] » **[`Schema`]** ·· [`SQL Scripts`] ·· [`Services`] ··· [`⇧ Back to Top`]

---

##### [jsopx.com] | [GitHub] | [Lexicon] | [Email] | Phone : 508-851-9445

###### Copyright © 2025 – All Rights Reserved by Jason Silvestri Open Project EXperiences (JSopX™)

[jsopx.com]: http://jsopx.com "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Products, Services and SaaS Services"
[Email]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Open Project EXperiences (JSopX™) Email Contact for Mark Silvetri"
[Phone]: phoneto:508-851-9445 "Jason Silvestri Open Project EXperiences (JSopX™) Phone Contact for Mark Silvetri"
[therealjasonsilvestri@gmail.com]: mailto:therealjasonsilvestri@gmail.com "Jason Silvestri Open Project EXperiences (JSopX™) Email Contact for Mark Silvetri"
[508-851-9445]: phoneto:508-851-9445 "Jason Silvestri Open Project EXperiences (JSopX™) Phone Contact for Mark Silvetri"

[GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri Open Project EXperiences (JSopX™) GitHub Repository"

[Current Git Hub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Document Management Project Solution GitHub Repository"
[Current GitHub Home]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/README.md "Jason Silvestri Open Project EXperiences (JSopX™) JSopX™ Document Management Project GitHub Home README.md"

<!--Root Lexicon -->
[Lexicon]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/Lexicon.md "JSopX™ Project Common Lexicon.md"
[`Lexicon`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/docs/md/JSopX.Global/Common/Lexicon.md "JSopX™ Project Common Lexicon.md"

<!--Root Solution Home-->
[`Home`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management Project Home README.md"
<!--Root Solution Project -->
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/JSopX.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution example README.md"
<!--Root Solution Previous -->
[`« Previous`]: /JSopX.BridgeTooFar/docs/md/JSopX.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution README.md"
<!--Root Solution Next -->
[`Next »`]: /JSopX.BridgeTooFar/docs/md/JSopX.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution README.md"

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
[`Database`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/README.md "JSopX™ SaaS Project Database"
[`Schema`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/Schema.md "JSopX™ SaaS Project Database Schemas"
[`SQL Scripts`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/SqlScripts.md "JSopX™ SaaS Project Database SQL Scripts"
[`Services`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/Services.md "JSopX™ SaaS Project Database .NET Services"
[Database]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/README.md "JSopX™ SaaS Project Database"
[Schema]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/Schema.md "JSopX™ SaaS Project Database Schemas"
[SQL Scripts]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/SqlScripts.md "JSopX™ SaaS Project Database SQL Scripts"
[Services]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Database/Services.md "JSopX™ SaaS Project Database .NET Services"
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
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ DM consumption SaaS Example Project"
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
[JSopX.BridgeTooFar GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ DM consumption SaaS Example Project"
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
[JSopX.BridgeTooFar]: /JSopX.BridgeTooFar/docs/md/JSopX.BridgeTooFar/README.md "JSopX™ Product Lifecycle Management SaaS Project"
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`JSopX`]: /JSopX.BridgeTooFar/docs/md/JSopX/README.md "JSopX™ Enterprise-Level Solution"
[`JSopX.Core`]: /JSopX.BridgeTooFar/docs/md/JSopX.Core/README.md "JSopX™ Core SaaS Project"
[`JSopX.Data`]: /JSopX.BridgeTooFar/docs/md/JSopX.Data/README.md "JSopX™ Data SaaS Project"
[`JSopX.ML`]: /JSopX.BridgeTooFar/docs/md/JSopX.ML/README.md "JSopX™ ML SaaS Project"
[`JSopX.Halos`]: /JSopX.BridgeTooFar/docs/md/JSopX.Halos/README.md "JSopX™ Halos SaaS Project"
[`JSopX.WebApi`]: /JSopX.BridgeTooFar/docs/md/JSopX.WebApi/README.md "JSopX™ WebAPI SaaS Project"
[`JSopX.Vault`]: /JSopX.BridgeTooFar/docs/md/JSopX.Vault/README.md "JSopX™ Vault SaaS Project"
[`JSopX.Presentation`]: /JSopX.BridgeTooFar/docs/md/JSopX.Presentation/README.md "JSopX™ Presentation SaaS Project"
[`JSopX.ClassLibrary`]: /JSopX.BridgeTooFar/docs/md/JSopX.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[`JSopX.Unitx`]: /JSopX.BridgeTooFar/docs/md/JSopX.Unitx/README.md "JSopX™ Unit Testing SaaS Project"
[`JSopX.SaaS`]: /JSopX.BridgeTooFar/docs/md/JSopX.SaaS/README.md "JSopX™ SaaS Project"
[`JSopX.MauiHybridNetCore`]: /JSopX.BridgeTooFar/docs/md/JSopX.MauiHybridNetCore/README.md "JSopX™ MAUI Titrate SaaS Project"
[`JSopX.HealthTracker`]: /JSopX.BridgeTooFar/docs/md/JSopX.HealthTracker/README.md "The Original JSopX™ Maui SaaS Project by Mark"
[`JSopX.EndGame`]: /JSopX.BridgeTooFar/docs/md/JSopX.EndGame/README.md "The Original JSopX™ Maui End Game Project by Mark"
[`JSopX.Maui.MPA`]: /JSopX.BridgeTooFar/docs/md/JSopX.Maui.MPA/README.md "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/JSopX.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[`JSopX.CRM`]: /JSopX.BridgeTooFar/docs/md/JSopX.CRM/README.md "JSopX™ Customer Relationship Management SaaS Project"
[`JSopX.PLM`]: /JSopX.BridgeTooFar/docs/md/JSopX.PLM/README.md "JSopX™ Product Lifecycle Management SaaS Project"
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/JSopX.BridgeTooFar/README.md "JSopX™ Product Lifecycle Management SaaS Project"
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
[JSopX.BridgeTooFar (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxangularcore "JSopX™ Product Lifecycle Management SaaS Project"
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
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[`Windows`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[`Visual Studio`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[`.NET Framework`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[`ASP.NET Core`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[`.NET Core Blazor`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[`.Net Core Maui Hybrid`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[`Node`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[`npm`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[`Bootstrap`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[`Angular CLI`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[`React`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[`Vue`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[`Vite`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[`Python`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[`Bash`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[`Powershell`]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
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