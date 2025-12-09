# JSopX™ Solution Project (v1) - Database SQL Server Scripts

Below are several SQL scripts to create Indexes, tables, Delete/Drop scripts, seeds, etc. 

> Please note that these are basic scripts, and we might need to adjust them based on specific requirements and performance considerations.

> The following chat has all the resources found here as well: [https://chatgpt.com/c/5fe8b720-40e2-4128-9b06-f88d11d6115f](https://chatgpt.com/c/5fe8b720-40e2-4128-9b06-f88d11d6115f)

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Database`] » [`Schema`] ·· **[`SQL Scripts`]** ·· [`Services`]

---

## Table of Contents

- [**SQL Scripts for Indexes**](#sql-scripts-for-indexes)
    - [1. WorkflowsStates](#1-workflowstates)
    - [2. AspNetUsers](#2-aspnetusers)
    - [3. JSopXUser](#3-jsopxuser)
    - [4. Person](#4-person)
    - [5. JSopXUsersIdentitiesPersons](#5-jsopxusersidentitiespersons)
    - [6. OrganizationTypes](#6-organizationtypes)
    - [7. Organizations](#7-organizations)
    - [8. Product](#8-product)
    - [9. Category](#9-category)
    - [10. ProductCategory](#10-productcategory)
    - [11. CategoriesSubCategories](#11-categoriessubcategories)
    - [12. Orders](#12-orders)
    - [13. OrderItem](#13-orderitem)
    - [14. ShoppingCart](#14-shoppingcart)
    - [15. CartItem](#15-cartitem)
    - [16. Wishlist](#16-wishlist)
    - [17. WishlistItem](#17-wishlistitem)
    - [18. CustomerReturns](#18-customerreturns)
    - [19. CustomerReturnItem](#19-customerreturnitem)
    - [20. FileMimeTypes](#20-filemimetypes)
    - [21. FileUnitsOfMeasure](#21-fileunitsofmeasure)
    - [22. FileCustomJSopXFile](#22-filecustomjsopxfile)
    - [23. FileCustomJSopXFileValidMimeTypes](#23-filecustomjsopxfilevalidmimetypes)
    - [24. FileRawFiles](#24-filerawfiles)
    - [25. FileCustomJSopXFileRenditions](#25-filecustomjsopxfilerenditions)
    - [26. FileCustomJSopXFileValidRenditions](#26-filecustomjsopxfilevalidrenditions)
    - [27. FileCustomJSopXFilesProducts](#27-filecustomjsopxfilesproducts)
    - [28. FileCustomJSopXFilesPersons](#28-filecustomjsopxfilespersons)
    - [29. FileCustomJSopXFilesOrganizations](#29-filecustomjsopxfilesorganizations)
    - [30. FileCustomJSopXFilesOrders](#30-filecustomjsopxfilesorders)
- [**SQL Scripts for Creating Tables**](#sql-scripts-for-creating-tables)
    - [1. WorkflowsStates](#1-workflowstates-1)
    - [2. AspNetUsers](#2-aspnetusers-1)
    - [3. JSopXUser](#3-jsopxuser-1)
    - [4. Person](#4-person-1)
    - [5. JSopXUsersIdentitiesPersons](#5-jsopxusersidentitiespersons-1)
    - [6. OrganizationTypes](#6-organizationtypes-1)
    - [7. Organizations](#7-organizations-1)
    - [8. Product](#8-product-1)
    - [9. Category](#9-category-1)
    - [10. ProductCategory](#10-productcategory-1)
    - [11. CategoriesSubCategories](#11-categoriessubcategories-1)
    - [12. Orders](#12-orders-1)
    - [13. OrderItem](#13-orderitem-1)
    - [14. ShoppingCart](#14-shoppingcart-1)
    - [15. CartItem](#15-cartitem-1)
    - [16. Wishlist](#16-wishlist-1)
    - [17. WishlistItem](#17-wishlistitem-1)
    - [18. CustomerReturns](#18-customerreturns-1)
    - [19. CustomerReturnItem](#19-customerreturnitem-1)
    - [20. FileMimeTypes](#20-filemimetypes-1)
    - [21. FileUnitsOfMeasure](#21-fileunitsofmeasure-1)
    - [22. FileCustomJSopXFile](#22-filecustomjsopxfile-1)
    - [23. FileCustomJSopXFileValidMimeTypes](#23-filecustomjsopxfilevalidmimetypes-1)
    - [24. FileRawFiles](#24-filerawfiles-1)
    - [25. FileCustomJSopXFileRenditions](#25-filecustomjsopxfilerenditions-1)
    - [26. FileCustomJSopXFileValidRenditions](#26-filecustomjsopxfilevalidrenditions-1)
    - [27. FileCustomJSopXFilesProducts](#27-filecustomjsopxfilesproducts-1)
    - [28. FileCustomJSopXFilesCategories](#28-filecustomjsopxfilescategories)
    - [29. FileCustomJSopXFilesProfiles](#29-filecustomjsopxfilesprofiles)
    - [30. FileCustomJSopXFilesOrganizations](#30-filecustomjsopxfilesorganizations)
 - [SQL Scripts for Dropping Index and Tables](#sql-scripts-for-dropping-index-and-tables)
 - [SQL Scripts for Seeding Tables](#sql-scripts-for-seeding-tables)
 
---

## SQL Scripts for Indexes

Here is a detailed set of ` SQL Scripts for Indexes` that relate to the Microsoft SQL Server database [`Schema`]. Below is a summary of the tables and their respective columns:

### 1). **WorkflowStates:**

```sql

-- Index for WorkflowStates
CREATE UNIQUE INDEX IX_WorkflowStates_WorkflowState ON WorkflowStates(WorkflowState);

```

### 2). **AspNetUsers:**

```sql

-- Index for AspNetUsers
CREATE UNIQUE INDEX IX_AspNetUsers_UserName ON AspNetUsers(UserName);

```

### 3). **JSopXUser:**

```sql

-- Index for JSopXUser
CREATE INDEX IX_JSopXUser_CreatedBy ON JSopXUser(CreatedBy);
CREATE INDEX IX_JSopXUser_WorkflowState ON JSopXUser(WorkflowState);

```

### 4). **Person:**

```sql

-- Index for Person
CREATE UNIQUE INDEX IX_Person_Name ON Person(FirstName, LastName);
CREATE INDEX IX_Person_CreatedBy ON Person(CreatedBy);
CREATE INDEX IX_Person_WorkflowState ON Person(WorkflowState);

```

### 5). **JSopXUsersIdentitiesPersons:**

```sql

-- Index for JSopXUsersIdentitiesPersons
CREATE UNIQUE INDEX IX_JSopXUsersIdentitiesPersons_Composite ON JSopXUsersIdentitiesPersons(PersonId, UserId, LoginUserId);

```

### 6). **OrganizationTypes:**

```sql

-- Index for OrganizationTypes
CREATE UNIQUE INDEX IX_OrganizationTypes_TypeName ON OrganizationTypes(TypeName);
CREATE INDEX IX_OrganizationTypes_CreatedBy ON OrganizationTypes(CreatedBy);
CREATE INDEX IX_OrganizationTypes_WorkflowState ON OrganizationTypes(WorkflowState);

```

### 7). **Organizations:**

```sql

-- Index for Organizations
CREATE UNIQUE INDEX IX_Organizations_OrganizationName ON Organizations(OrganizationName);
CREATE INDEX IX_Organizations_CreatedBy ON Organizations(CreatedBy);
CREATE INDEX IX_Organizations_WorkflowState ON Organizations(WorkflowState);
CREATE INDEX IX_Organizations_OrganizationTypeId ON Organizations(OrganizationTypeId);

```

### 8). **Product:**

```sql

-- Index for Product
CREATE UNIQUE INDEX IX_Product_Name ON Product(Name);
CREATE INDEX IX_Product_CreatedBy ON Product(CreatedBy);
CREATE INDEX IX_Product_WorkflowState ON Product(WorkflowState);
CREATE INDEX IX_Product_OrganizationId ON Product(OrganizationId);

```

### 9). **Category:**

```sql


-- Index for Category
CREATE UNIQUE INDEX IX_Category_Name ON Category(Name);
CREATE INDEX IX_Category_CreatedBy ON Category(CreatedBy);
CREATE INDEX IX_Category_WorkflowState ON Category(WorkflowState);


```

### 10). **ProductCategory:**

```sql

-- Index for ProductCategory
CREATE INDEX IX_ProductCategory_ProductId ON ProductCategory(ProductId);
CREATE INDEX IX_ProductCategory_CategoryId ON ProductCategory(CategoryId);
CREATE INDEX IX_ProductCategory_CreatedBy ON ProductCategory(CreatedBy);
CREATE INDEX IX_ProductCategory_WorkflowState ON ProductCategory(WorkflowState);

```


### 11). **CategoriesSubCategories:**

```sql

-- Index for CategoriesSubCategories
CREATE UNIQUE INDEX IX_CategoriesSubCategories_Composite ON CategoriesSubCategories(ParentCategoryId, ChildCategoryId);

```

### 12). **Orders:**

```sql

-- Index for Orders
CREATE INDEX IX_Orders_UserId ON Orders(UserId);
CREATE INDEX IX_Orders_OrganizationId ON Orders(OrganizationId);
CREATE INDEX IX_Orders_CreatedBy ON Orders(CreatedBy);
CREATE INDEX IX_Orders_WorkflowState ON Orders(WorkflowState);
CREATE UNIQUE INDEX IX_Orders_Composite ON Orders(OrderId, UserId, OrganizationId);

```

### 13). **OrderItem:**

```sql

-- Index for OrderItem
CREATE INDEX IX_OrderItem_OrderId ON OrderItem(OrderId);
CREATE INDEX IX_OrderItem_ProductId ON OrderItem(ProductId);
CREATE INDEX IX_OrderItem_CreatedBy ON OrderItem(CreatedBy);
CREATE INDEX IX_OrderItem_WorkflowState ON OrderItem(WorkflowState);
CREATE UNIQUE INDEX IX_OrderItem_Composite ON OrderItem(OrderItemId, OrderId, ProductId);

```

### 14). **ShoppingCart:**

```sql

-- Index for ShoppingCart
CREATE INDEX IX_ShoppingCart_UserId ON ShoppingCart(UserId);
CREATE INDEX IX_ShoppingCart_CreatedBy ON ShoppingCart(CreatedBy);
CREATE INDEX IX_ShoppingCart_WorkflowState ON ShoppingCart(WorkflowState);
CREATE UNIQUE INDEX IX_ShoppingCart_Composite ON ShoppingCart(CartId, UserId);

```

### 15). **CartItem:**

```sql

-- Index for CartItem
CREATE INDEX IX_CartItem_CartId ON CartItem(CartId);
CREATE INDEX IX_CartItem_ProductId ON CartItem(ProductId);
CREATE INDEX IX_CartItem_CreatedBy ON CartItem(CreatedBy);
CREATE INDEX IX_CartItem_WorkflowState ON CartItem(WorkflowState);
CREATE UNIQUE INDEX IX_CartItem_Composite ON CartItem(CartItemId, CartId, ProductId);

```

### 16). **Wishlist:**

```sql

-- Index for Wishlist
CREATE INDEX IX_Wishlist_UserId ON Wishlist(UserId);
CREATE INDEX IX_Wishlist_CreatedBy ON Wishlist(CreatedBy);
CREATE INDEX IX_Wishlist_WorkflowState ON Wishlist(WorkflowState);
CREATE UNIQUE INDEX IX_Wishlist_Composite ON Wishlist(WishlistId, UserId);

```

### 17). **WishlistItem:**

```sql

-- Index for WishlistItem
CREATE INDEX IX_WishlistItem_WishlistId ON WishlistItem(WishlistId);
CREATE INDEX IX_WishlistItem_ProductId ON WishlistItem(ProductId);
CREATE INDEX IX_WishlistItem_CreatedBy ON WishlistItem(CreatedBy);
CREATE INDEX IX_WishlistItem_WorkflowState ON WishlistItem(WorkflowState);
CREATE UNIQUE INDEX IX_WishlistItem_Composite ON WishlistItem(WishlistItemId, WishlistId, ProductId);

```

### 18). **CustomerReturns:**

```sql

-- Index for CustomerReturns
CREATE UNIQUE INDEX IX_CustomerReturns_ReturnId_OrderId ON CustomerReturns(ReturnId, OrderId);
CREATE INDEX IX_CustomerReturns_OrderId ON CustomerReturns(OrderId);
CREATE INDEX IX_CustomerReturns_UserId ON CustomerReturns(UserId);
CREATE INDEX IX_CustomerReturns_CreatedBy ON CustomerReturns(CreatedBy);
CREATE INDEX IX_CustomerReturns_WorkflowState ON CustomerReturns(WorkflowState);
CREATE UNIQUE INDEX IX_CustomerReturns_Composite ON CustomerReturns(ReturnId, OrderId, UserId);

```

### 19). **CustomerReturnItem:**

```sql

-- Index for CustomerReturnItem
CREATE UNIQUE INDEX IX_CustomerReturnItem_CustomerReturnItemId_OrderItemId ON CustomerReturnItem(CustomerReturnItemId, OrderItemId);
CREATE INDEX IX_CustomerReturnItem_ReturnId ON CustomerReturnItem(ReturnId);
CREATE INDEX IX_CustomerReturnItem_OrderItemId ON CustomerReturnItem(OrderItemId);
CREATE INDEX IX_CustomerReturnItem_CreatedBy ON CustomerReturnItem(CreatedBy);
CREATE INDEX IX_CustomerReturnItem_WorkflowState ON CustomerReturnItem(WorkflowState);

```

### 20). **FileMimeTypes:**

```sql

-- Index for FileMimeTypes
CREATE UNIQUE INDEX IX_FileMimeTypes_KindOfDocument ON FileMimeTypes(KindOfDocument);
CREATE UNIQUE INDEX IX_FileMimeTypes_KindOfDocumentShort ON FileMimeTypes(KindOfDocumentShort);
CREATE INDEX IX_FileMimeTypes_CreatedBy ON FileMimeTypes(CreatedBy);
CREATE INDEX IX_FileMimeTypes_WorkflowState ON FileMimeTypes(WorkflowState);

```

### 21). **FileUnitsOfMeasure:**

```sql

-- Index for FileUnitsOfMeasure
CREATE UNIQUE INDEX IX_FileUnitsOfMeasure_Name ON FileUnitsOfMeasure(Name);
CREATE UNIQUE INDEX IX_FileUnitsOfMeasure_CodingElement ON FileUnitsOfMeasure(CodingElement);
CREATE INDEX IX_FileUnitsOfMeasure_CreatedBy ON FileUnitsOfMeasure(CreatedBy);
CREATE INDEX IX_FileUnitsOfMeasure_WorkflowState ON FileUnitsOfMeasure(WorkflowState);

```

### 22). **FileCustomJSopXFile:**

```sql

-- Index for FileCustomJSopXFile
CREATE UNIQUE INDEX IX_FileCustomJSopXFile_Name ON FileCustomJSopXFile(Name);
CREATE INDEX IX_FileCustomJSopXFile_CreatedBy ON FileCustomJSopXFile(CreatedBy);
CREATE INDEX IX_FileCustomJSopXFile_WorkflowState ON FileCustomJSopXFile(WorkflowState);

```

### 23). **FileCustomJSopXFileValidMimeTypes:**

```sql

-- Index for FileCustomJSopXFileValidMimeTypes
CREATE UNIQUE INDEX IX_FileCustomJSopXFileValidMimeTypes_Composite ON FileCustomJSopXFileValidMimeTypes(FileCustomId, MimeTypeId);
CREATE INDEX IX_FileCustomJSopXFileValidMimeTypes_CreatedBy ON FileCustomJSopXFileValidMimeTypes(CreatedBy);
CREATE INDEX IX_FileCustomJSopXFileValidMimeTypes_WorkflowState ON FileCustomJSopXFileValidMimeTypes(WorkflowState);

```

### 24). **FileRawFiles:**

```sql

-- Index for FileRawFiles
CREATE INDEX IX_FileRawFiles_MimeType ON FileRawFiles(MimeType);
CREATE INDEX IX_FileRawFiles_UnitOfMeasure ON FileRawFiles(UnitOfMeasure);
CREATE INDEX IX_FileRawFiles_CreatedBy ON FileRawFiles(CreatedBy);
CREATE INDEX IX_FileRawFiles_WorkflowState ON FileRawFiles(WorkflowState);

```

### 25). **FileCustomJSopXFileRenditions:**

```sql

-- Index for FileCustomJSopXFileRenditions
CREATE UNIQUE INDEX IX_FileCustomJSopXFileRenditions_FileRenditionName ON FileCustomJSopXFileRenditions(FileRenditionName);
CREATE INDEX IX_FileCustomJSopXFileRenditions_UnitOfMeasure ON FileCustomJSopXFileRenditions(UnitOfMeasure);
CREATE INDEX IX_FileCustomJSopXFileRenditions_CreatedBy ON FileCustomJSopXFileRenditions(CreatedBy);
CREATE INDEX IX_FileCustomJSopXFileRenditions_WorkflowState ON FileCustomJSopXFileRenditions(WorkflowState);

```

### 26). **FileCustomJSopXFileValidRenditions:**

```sql

-- Index for FileCustomJSopXFileValidRenditions
CREATE UNIQUE INDEX IX_FileCustomJSopXFileValidRenditions_Composite ON FileCustomJSopXFileValidRenditions(FileCustomId, FileRenditionId, FileId);
CREATE INDEX IX_FileCustomJSopXFileValidRenditions_CreatedBy ON FileCustomJSopXFileValidRenditions(CreatedBy);
CREATE INDEX IX_FileCustomJSopXFileValidRenditions_WorkflowState ON FileCustomJSopXFileValidRenditions(WorkflowState);

```

### 27). **FileCustomJSopXFilesProducts:**

```sql

-- Index for FileCustomJSopXFilesProducts
CREATE UNIQUE INDEX IX_FileCustomJSopXFilesProducts_Composite ON FileCustomJSopXFilesProducts(FileCustomId, ProductId);
CREATE INDEX IX_FileCustomJSopXFilesProducts_CreatedBy ON FileCustomJSopXFilesProducts(CreatedBy);
CREATE INDEX IX_FileCustomJSopXFilesProducts_WorkflowState ON FileCustomJSopXFilesProducts(WorkflowState);

```

### 28). **FileCustomJSopXFilesCategories:**

```sql

-- Index for FileCustomJSopXFilesCategories
CREATE UNIQUE INDEX IX_FileCustomJSopXFilesCategories_Composite ON FileCustomJSopXFilesCategories(FileCustomId, CategoryId);
CREATE INDEX IX_FileCustomJSopXFilesCategories_CreatedBy ON FileCustomJSopXFilesCategories(CreatedBy);
CREATE INDEX IX_FileCustomJSopXFilesCategories_WorkflowState ON FileCustomJSopXFilesCategories(WorkflowState);

```

### 29). **FileCustomJSopXFilesProfiles:**

```sql

-- Index for FileCustomJSopXFilesProfiles
CREATE UNIQUE INDEX IX_FileCustomJSopXFilesProfiles_Composite ON FileCustomJSopXFilesProfiles(FileCustomId, ProfileImageId);
CREATE INDEX IX_FileCustomJSopXFilesProfiles_CreatedBy ON FileCustomJSopXFilesProfiles(CreatedBy);
CREATE INDEX IX_FileCustomJSopXFilesProfiles_WorkflowState ON FileCustomJSopXFilesProfiles(WorkflowState);

```

### 30). **FileCustomJSopXFilesOrganizations:**

```sql

-- Index for FileCustomJSopXFilesOrganizations
CREATE UNIQUE INDEX IX_FileCustomJSopXFilesOrganizations_Composite ON FileCustomJSopXFilesOrganizations(FileCustomId, ProfileImageId);
CREATE INDEX IX_FileCustomJSopXFilesOrganizations_CreatedBy ON FileCustomJSopXFilesOrganizations(CreatedBy);
CREATE INDEX IX_FileCustomJSopXFilesOrganizations_WorkflowState ON FileCustomJSopXFilesOrganizations(WorkflowState);

```

> This Database `SQL Scripts for Indexes` page is a living document and will be updated as new terms and definitions are added to the JSopX™ ecosystem. Please refer to this document for the most current terminology.

---

## SQL Scripts for Creating Tables

Here is a detailed set of ` SQL Scripts for Creating Tables` that relate to the Microsoft SQL Server database [`Schema`]. Below are the SQL scripts to create the tables for the provided MS SQL DB Schema. Note that these scripts include primary keys, foreign keys, indexes, and constraints.

### 1). **WorkflowStates:**


```sql
-- WorkflowStates
CREATE TABLE WorkflowStates (
    WorkflowStateId INT PRIMARY KEY IDENTITY(1,1),
    WorkflowState NVARCHAR(50) UNIQUE,
    Description NVARCHAR(500)
);

```

### 2). **AspNetUsers:**

```sql

-- AspNetUsers
CREATE TABLE AspNetUsers (
    Id NVARCHAR(450) PRIMARY KEY,
    UserName NVARCHAR(256) UNIQUE,
    Password NVARCHAR(256)
);

```

### 3). **JSopXUser:**

```sql


-- JSopXUser
CREATE TABLE JSopXUser (
    UserId UNIQUEIDENTIFIER PRIMARY KEY,
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId)
);

```

### 4). **Person:**

```sql

-- Person
CREATE TABLE Person (
    PersonID UNIQUEIDENTIFIER PRIMARY KEY,
    FirstName NVARCHAR(100),
    LastName NVARCHAR(160),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_Person_Name UNIQUE (FirstName, LastName)
);

```

### 5). **JSopXUsersIdentitiesPersons:**

```sql

-- JSopXUsersIdentitiesPersons
CREATE TABLE JSopXUsersIdentitiesPersons (
    PersonId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES Person(PersonId),
    UserId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES JSopXUser(UserId),
    LoginUserId NVARCHAR(450) PRIMARY KEY FOREIGN KEY REFERENCES AspNetUsers(Id),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_JSopXUsersIdentitiesPersons_Composite UNIQUE (PersonalId, UserId, LoginUserId)
);

```

### 6). **OrganizationTypes:**

```sql

-- OrganizationTypes
CREATE TABLE OrganizationTypes (
    OrganizationTypeId INT PRIMARY KEY IDENTITY(1,1),
    TypeName NVARCHAR(100) UNIQUE,
    Description NVARCHAR(500),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId)
);

```

### 7). **Organizations:**

```sql


-- Organizations
CREATE TABLE Organizations (
    OrganizationId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    OrganizationName NVARCHAR(250) UNIQUE,
    OrganizationTypeId INT FOREIGN KEY REFERENCES OrganizationTypes(OrganizationTypeId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId)
);

```

### 8). **Product:**

```sql

-- Product
CREATE TABLE Product (
    ProductId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Name NVARCHAR(160) UNIQUE,
    Description NVARCHAR(500),
    Price DECIMAL(8,2),
    PriceDeal DECIMAL(8,2),
    PriceDealSavings SMALLINT,
    StockQuantity SMALLINT,
    IsInStock BIT DEFAULT 1,
    OrganizationId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Organizations(OrganizationId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId)
);

```

### 9). **Category:**

```sql

-- Category
CREATE TABLE Category (
    CategoryId INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(160) UNIQUE,
    Description NVARCHAR(500),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId)
);

```

### 10). **ProductCategory:**

```sql

-- ProductCategory
CREATE TABLE ProductCategory (
    ProductId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Product(ProductId),
    CategoryId INT FOREIGN KEY REFERENCES Category(CategoryId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    PRIMARY KEY (ProductId, CategoryId)
);

```


### 11). **CategoriesSubCategories:**

```sql


-- CategoriesSubCategories
CREATE TABLE CategoriesSubCategories (
    ParentCategoryId INT FOREIGN KEY REFERENCES Category(CategoryId),
    ChildCategoryId INT FOREIGN KEY REFERENCES Category(CategoryId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    PRIMARY KEY (ParentCategoryId, ChildCategoryId)
);

```

### 12). **Orders:**

```sql

-- Orders
CREATE TABLE Orders (
    OrderId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    UserId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    OrganizationId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Organizations(OrganizationId),
    OrderDate DATETIME,
    TotalAmount DECIMAL(8,2),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(Workflow
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_Orders_Composite UNIQUE (OrderId, UserId, OrganizationId)
);

```

### 13). **OrderItem:**

```sql

-- OrderItem
CREATE TABLE OrderItem (
    OrderItemId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    OrderId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Orders(OrderId),
    ProductId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Product(ProductId),
    Quantity SMALLINT,
    Subtotal DECIMAL(8,2),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_OrderItem_Composite UNIQUE (OrderItemId, OrderId, ProductId)
);

```

### 14). **ShoppingCart:**

```sql

-- ShoppingCart
CREATE TABLE ShoppingCart (
    CartId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    UserId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_ShoppingCart_Composite UNIQUE (CartId, UserId)
);

```

### 15). **CartItem:**

```sql

-- CartItem
CREATE TABLE CartItem (
    CartItemId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    CartId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES ShoppingCart(CartId),
    ProductId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Product(ProductId),
    Quantity SMALLINT,
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_CartItem_Composite UNIQUE (CartItemId, CartId, ProductId)
);

```

### 16). **Wishlist:**

```sql


-- Wishlist
CREATE TABLE Wishlist (
    WishlistId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    UserId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_Wishlist_Composite UNIQUE (WishlistId, UserId)
);

```

### 17). **WishlistItem:**

```sql

-- WishlistItem
CREATE TABLE WishlistItem (
    WishlistItemId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    WishlistId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Wishlist(WishlistId),
    ProductId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Product(ProductId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_WishlistItem_Composite UNIQUE (WishlistItemId, WishlistId, ProductId)
);

```

### 18). **CustomerReturns:**

```sql

-- CustomerReturns
CREATE TABLE CustomerReturns (
    ReturnId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    OrderId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Orders(OrderId),
    UserId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    ReturnDate DATETIME DEFAULT GETDATE(),
    TotalRefund DECIMAL(8,2),
    TotalAmount DECIMAL(8,2),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_CustomerReturns_ReturnId_OrderId UNIQUE (ReturnId, OrderId),
    CONSTRAINT UQ_CustomerReturns_Composite UNIQUE (ReturnId, OrderId, UserId)
);

```

### 19). **CustomerReturnItem:**

```sql

-- CustomerReturnItem
CREATE TABLE CustomerReturnItem (
    CustomerReturnItemId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    ReturnId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES CustomerReturns(ReturnId),
    OrderItemId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES OrderItem(OrderItemId),
    QuantityReturned SMALLINT,
    RefundAmount DECIMAL(8,2),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_CustomerReturnItem_CustomerReturnItemId_OrderItemId UNIQUE (CustomerReturnItemId, OrderItemId)
);

```

### 20). **FileMimeTypes:**

```sql


-- FileMimeTypes
CREATE TABLE FileMimeTypes (
    MimeTypeId INT PRIMARY KEY IDENTITY(1,1),
    MimeType NVARCHAR(250),
    MimeExtension NVARCHAR(10),
    KindOfDocument NVARCHAR(50) UNIQUE,
    KindOfDocumentShort NVARCHAR(25) UNIQUE,
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_FileMimeTypes_KindOfDocument UNIQUE (KindOfDocument),
    CONSTRAINT UQ_FileMimeTypes_KindOfDocumentShort UNIQUE (KindOfDocumentShort)
);

```

### 21). **FileUnitsOfMeasure:**

```sql

-- FileUnitsOfMeasure
CREATE TABLE FileUnitsOfMeasure (
    UnitOfMeasureId INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(50) UNIQUE,
    Description NVARCHAR(250),
    CodingElement NVARCHAR(10),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_FileUnitsOfMeasure_Name UNIQUE (Name),
    CONSTRAINT UQ_FileUnitsOfMeasure_CodingElement UNIQUE (CodingElement)
);

```

### 22). **FileCustomJSopXFile:**

```sql

-- FileCustomJSopXFile
CREATE TABLE FileCustomJSopXFile (
    FileCustomId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Name NVARCHAR(50) UNIQUE,
    Description NVARCHAR(250),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_FileCustomJSopXFile_Name UNIQUE (Name)
);

```

### 23). **FileCustomJSopXFileValidMimeTypes:**

```sql

-- FileCustomJSopXFileValidMimeTypes
CREATE TABLE FileCustomJSopXFileValidMimeTypes (
    FileCustomId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES FileCustomJSopXFile(FileCustomId),
    MimeTypeId INT PRIMARY KEY FOREIGN KEY REFERENCES FileMimeTypes(MimeTypeId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_FileCustomJSopXFileValidMimeTypes_Composite UNIQUE (FileCustomId, MimeTypeId)
);

```

### 24). **FileRawFiles:**

```sql

-- FileRawFiles
CREATE TABLE FileRawFiles (
    FileId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    FileName NVARCHAR(1024),
    FileDescription NVARCHAR(1033),
    RawBinaryFileContent VARBINARY(MAX),
    FileSize SMALLINT,
    Width SMALLINT,
    Height SMALLINT,
    MimeType INT FOREIGN KEY REFERENCES FileMimeTypes(MimeTypeId),
    UnitOfMeasure INT FOREIGN KEY REFERENCES FileUnitsOfMeasure(UnitOfMeasureId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId)
);

```

### 25). **FileCustomJSopXFileRenditions:**

```sql

-- FileCustomJSopXFileRenditions
CREATE TABLE FileCustomJSopXFileRenditions (
    FileRenditionId UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    FileRenditionName NVARCHAR(50) UNIQUE,
    FileRenditionDescription NVARCHAR(1000),
    Width SMALLINT,
    Height SMALLINT,
    UnitOfMeasure INT FOREIGN KEY REFERENCES FileUnitsOfMeasure(UnitOfMeasureId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_FileCustomJSopXFileRenditions_FileRenditionName UNIQUE (FileRenditionName)
);

```

### 26). **FileCustomJSopXFileValidRenditions:**

```sql


-- FileCustomJSopXFileValidRenditions
CREATE TABLE FileCustomJSopXFileValidRenditions (
    FileCustomId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES FileCustomJSopXFile(FileCustomId),
    FileRenditionId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES FileCustomJSopXFileRenditions(FileRenditionId),
    FileId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES FileRawFiles(FileId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_FileCustomJSopXFileValidRenditions_Composite UNIQUE (FileCustomId, FileRenditionId, FileId)
);

```

### 27). **FileCustomJSopXFilesProducts:**

```sql

-- FileCustomJSopXFilesProducts
CREATE TABLE FileCustomJSopXFilesProducts (
    FileCustomId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES FileCustomJSopXFile(FileCustomId),
    ProductId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES Product(ProductId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_FileCustomJSopXFilesProducts_Composite UNIQUE (FileCustomId, ProductId)
);

```

### 28). **FileCustomJSopXFilesCategories:**

```sql

-- FileCustomJSopXFilesCategories
CREATE TABLE FileCustomJSopXFilesCategories (
    FileCustomId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES FileCustomJSopXFile(FileCustomId),
    CategoryId INT PRIMARY KEY FOREIGN KEY REFERENCES Category(CategoryId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_FileCustomJSopXFilesCategories_Composite UNIQUE (FileCustomId, CategoryId)
);

```

### 29). **FileCustomJSopXFilesProfiles:**

```sql


-- FileCustomJSopXFilesProfiles
CREATE TABLE FileCustomJSopXFilesProfiles (
    FileCustomId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES FileCustomJSopXFile(FileCustomId),
    ProfileImageId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES Person(PersonId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_FileCustomJSopXFilesProfiles_Composite UNIQUE (FileCustomId, ProfileImageId)
);

```

### 30). **FileCustomJSopXFilesOrganizations:**

```sql

-- FileCustomJSopXFilesOrganizations
CREATE TABLE FileCustomJSopXFilesOrganizations (
    FileCustomId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES FileCustomJSopXFile(FileCustomId),
    ProfileImageId UNIQUEIDENTIFIER PRIMARY KEY FOREIGN KEY REFERENCES Organizations(OrganizationId),
    CreateDate DATETIME DEFAULT GETDATE(),
    CreatedBy UNIQUEIDENTIFIER FOREIGN KEY REFERENCES JSopXUser(UserId),
    WorkflowState INT FOREIGN KEY REFERENCES WorkflowStates(WorkflowStateId),
    CONSTRAINT UQ_FileCustomJSopXFilesOrganizations_Composite UNIQUE (FileCustomId, ProfileImageId)
);

```

> This Database `SQL Scripts for Creating Tables` page is a living document and will be updated as new terms and definitions are added to the JSopX™ ecosystem. Please refer to this document for the most current terminology.

## SQL Scripts for Dropping Index and Tables

Here are SQL scripts for dropping indexes and tables in the Microsoft SQL Server database [`Schema`]. These scripts ensure that the database schema can be modified or removed as needed.

```sql

-- Drop indexes

-- FileCustomJSopXFilesOrganizations
DROP INDEX IF EXISTS UQ_FileCustomJSopXFilesOrganizations_Composite;

-- FileCustomJSopXFilesProfiles
DROP INDEX IF EXISTS UQ_FileCustomJSopXFilesProfiles_Composite;

-- FileCustomJSopXFilesCategories
DROP INDEX IF EXISTS UQ_FileCustomJSopXFilesCategories_Composite;

-- FileCustomJSopXFilesProducts
DROP INDEX IF EXISTS UQ_FileCustomJSopXFilesProducts_Composite;

-- FileCustomJSopXFileValidRenditions
DROP INDEX IF EXISTS UQ_FileCustomJSopXFileValidRenditions_Composite;

-- FileCustomJSopXFileRenditions
DROP INDEX IF EXISTS UQ_FileCustomJSopXFileRenditions_FileRenditionName;

-- FileCustomJSopXFileValidMimeTypes
DROP INDEX IF EXISTS UQ_FileCustomJSopXFileValidMimeTypes_Composite;

-- FileCustomJSopXFile
DROP INDEX IF EXISTS UQ_FileCustomJSopXFile_Name;

-- FileRawFiles
DROP INDEX IF EXISTS IX_FileRawFiles_FileId;

-- FileUnitsOfMeasure
DROP INDEX IF EXISTS UQ_FileUnitsOfMeasure_Name;
DROP INDEX IF EXISTS UQ_FileUnitsOfMeasure_CodingElement;

-- FileMimeTypes
DROP INDEX IF EXISTS UQ_FileMimeTypes_KindOfDocument;
DROP INDEX IF EXISTS UQ_FileMimeTypes_KindOfDocumentShort;

-- CustomerReturnItem
DROP INDEX IF EXISTS UQ_CustomerReturnItem_CustomerReturnItemId_OrderItemId;

-- CustomerReturns
DROP INDEX IF EXISTS UQ_CustomerReturns_ReturnId_OrderId;
DROP INDEX IF EXISTS UQ_CustomerReturns_Composite;

-- WishlistItem
DROP INDEX IF EXISTS UQ_WishlistItem_Composite;

-- Wishlist
DROP INDEX IF EXISTS UQ_Wishlist_Composite;

-- CartItem
DROP INDEX IF EXISTS UQ_CartItem_Composite;

-- ShoppingCart
DROP INDEX IF EXISTS UQ_ShoppingCart_Composite;

-- OrderItem
DROP INDEX IF EXISTS UQ_OrderItem_Composite;

-- Orders
DROP INDEX IF EXISTS UQ_Orders_Composite;

-- CategoriesSubCategories
DROP INDEX IF EXISTS UQ_CategoriesSubCategories_Composite;

-- ProductCategory
DROP INDEX IF EXISTS IX_ProductCategory_ProductId_CategoryId;

-- Category
DROP INDEX IF EXISTS UQ_Category_Name;

-- Product
DROP INDEX IF EXISTS UQ_Product_Name;

-- Organizations
DROP INDEX IF EXISTS UQ_Organizations_OrganizationName;

-- OrganizationTypes
DROP INDEX IF EXISTS UQ_OrganizationTypes_TypeName;

-- JSopXUsersIdentitiesPersons
DROP INDEX IF EXISTS IX_JSopXUsersIdentitiesPersons_PersonId;
DROP INDEX IF EXISTS IX_JSopXUsersIdentitiesPersons_UserId;
DROP INDEX IF EXISTS IX_JSopXUsersIdentitiesPersons_LoginUserId;

-- Person
DROP INDEX IF EXISTS IX_Person_FirstName_LastName;

-- JSopXUser
DROP INDEX IF EXISTS UQ_JSopXUser_UserName;

-- AspNetUsers
DROP INDEX IF EXISTS UQ_AspNetUsers_UserName;

-- WorkflowStates
DROP INDEX IF EXISTS IX_WorkflowStates_WorkflowStateId;

-- Drop tables with cascading foreign key constraints

-- FileCustomJSopXFilesOrganizations
DROP TABLE IF EXISTS FileCustomJSopXFilesOrganizations;

-- FileCustomJSopXFilesProfiles
DROP TABLE IF EXISTS FileCustomJSopXFilesProfiles;

-- FileCustomJSopXFilesCategories
DROP TABLE IF EXISTS FileCustomJSopXFilesCategories;

-- FileCustomJSopXFilesProducts
DROP TABLE IF EXISTS FileCustomJSopXFilesProducts;

-- FileCustomJSopXFileValidRenditions
DROP TABLE IF EXISTS FileCustomJSopXFileValidRenditions;

-- FileCustomJSopXFileRenditions
DROP TABLE IF EXISTS FileCustomJSopXFileRenditions;

-- FileCustomJSopXFileValidMimeTypes
DROP TABLE IF EXISTS FileCustomJSopXFileValidMimeTypes;

-- FileCustomJSopXFile
DROP TABLE IF EXISTS FileCustomJSopXFile;

-- FileRawFiles
DROP TABLE IF EXISTS FileRawFiles;

-- FileUnitsOfMeasure
DROP TABLE IF EXISTS FileUnitsOfMeasure;

-- FileMimeTypes
DROP TABLE IF EXISTS FileMimeTypes;

-- CustomerReturnItem
DROP TABLE IF EXISTS CustomerReturnItem;

-- CustomerReturns
DROP TABLE IF EXISTS CustomerReturns;

-- WishlistItem
DROP TABLE IF EXISTS WishlistItem;

-- Wishlist
DROP TABLE IF EXISTS Wishlist;

-- CartItem
DROP TABLE IF EXISTS CartItem;

-- ShoppingCart
DROP TABLE IF EXISTS ShoppingCart;

-- OrderItem
DROP TABLE IF EXISTS OrderItem;

-- Orders
DROP TABLE IF EXISTS Orders;

-- CategoriesSubCategories
DROP TABLE IF EXISTS CategoriesSubCategories;

-- ProductCategory
DROP TABLE IF EXISTS ProductCategory;

-- Category
DROP TABLE IF EXISTS Category;

-- Product
DROP TABLE IF EXISTS Product;

-- Organizations
DROP TABLE IF EXISTS Organizations;

-- OrganizationTypes
DROP TABLE IF EXISTS OrganizationTypes;

-- JSopXUsersIdentitiesPersons
DROP TABLE IF EXISTS JSopXUsersIdentitiesPersons;

-- Person
DROP TABLE IF EXISTS Person;

-- JSopXUser
DROP TABLE IF EXISTS JSopXUser;

-- AspNetUsers
DROP TABLE IF EXISTS AspNetUsers;

-- WorkflowStates
DROP TABLE IF EXISTS WorkflowStates;

```

> This Database `SQL Scripts for Dropping Index and Tables` page is a living document and will be updated as new terms and definitions are added to the JSopX™ ecosystem. Please refer to this document for the most current terminology.

---

## SQL Scripts for Seeding Tables

Here are SQL scripts for seeding tables in the Microsoft SQL Server database [`Schema`]. These scripts ensure that the database has initial data for testing or default configurations.

```sql
-- WorkflowStates
INSERT INTO WorkflowStates (WorkflowStateId, WorkflowState, Description)
VALUES
  (1, 'Active', 'Active state for workflows'),
  (2, 'Inactive', 'Inactive state for workflows');

-- AspNetUsers
INSERT INTO AspNetUsers (Id, UserName, Password)
VALUES
  ('12345678-ABCD-1234-5678-123456789ABC', 'user1@example.com', 'password123'),
  ('23456789-ABCD-2345-6789-234567890ABC', 'user2@example.com', 'securepass');

-- JSopXUser
INSERT INTO JSopXUser (UserId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('12345678-ABCD-1234-5678-123456789ABC', GETDATE(), '87654321-DCBA-4321-8765-321098765432', 1),
  ('23456789-ABCD-2345-6789-234567890ABC', GETDATE(), '87654321-DCBA-4321-8765-321098765432', 1);

-- Person
INSERT INTO Person (PersonId, FirstName, LastName, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('34567890-ABCD-3456-7890-345678901ABC', 'John', 'Doe', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('45678901-ABCD-4567-8901-456789012ABC', 'Jane', 'Smith', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- OrganizationTypes
INSERT INTO OrganizationTypes (OrganizationTypeId, TypeName, Description, CreateDate, CreatedBy, WorkflowState)
VALUES
  (1, 'Retail', 'Retail business type', GETDATE(), '87654321-DCBA-4321-8765-321098765432', 1),
  (2, 'Service', 'Service business type', GETDATE(), '87654321-DCBA-4321-8765-321098765432', 1);

-- Organizations
INSERT INTO Organizations (OrganizationId, OrganizationName, OrganizationTypeId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('56789012-ABCD-5678-9012-567890123ABC', 'Store A', 1, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('67890123-ABCD-6789-0123-678901234ABC', 'Service Provider B', 2, GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- Product
INSERT INTO Product (ProductId, Name, Description, Price, PriceDeal, PriceDealSavings, StockQuantity, IsInStock, OrganizationId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('78901234-ABCD-7890-1234-789012345ABC', 'Product 1', 'Description for Product 1', 29.99, 24.99, 5, 100, 1, '56789012-ABCD-5678-9012-567890123ABC', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('89012345-ABCD-8901-2345-890123456ABC', 'Product 2', 'Description for Product 2', 39.99, 34.99, 5, 150, 1, '67890123-ABCD-6789-0123-678901234ABC', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- Category
INSERT INTO Category (CategoryId, Name, Description, CreateDate, CreatedBy, WorkflowState)
VALUES
  (1, 'Electronics', 'Electronic devices and accessories', GETDATE(), '87654321-DCBA-4321-8765-321098765432', 1),
  (2, 'Clothing', 'Clothing and apparel', GETDATE(), '87654321-DCBA-4321-8765-321098765432', 1);

-- ProductCategory
INSERT INTO ProductCategory (ProductId, CategoryId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('78901234-ABCD-7890-1234-789012345ABC', 1, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('89012345-ABCD-8901-2345-890123456ABC', 2, GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- Orders
INSERT INTO Orders (OrderId, UserId, OrganizationId, OrderDate, TotalAmount, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('90123456-ABCD-9012-3456-901234567ABC', '12345678-ABCD-1234-5678-123456789ABC', '56789012-ABCD-5678-9012-567890123ABC', GETDATE(), 59.98, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('01234567-ABCD-0123-4567-012345678ABC', '23456789-ABCD-2345-6789-234567890ABC', '67890123-ABCD-6789-0123-678901234ABC', GETDATE(), 69.98, GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- OrderItem
INSERT INTO OrderItem (OrderItemId, OrderId, ProductId, Quantity, Subtotal, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('12345678-ABCD-1234-5678-123456789ABC', '90123456-ABCD-9012-3456-901234567ABC', '78901234-ABCD-7890-1234-789012345ABC', 2, 49.98, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('23456789-ABCD-2345-6789-234567890ABC', '01234567-ABCD-0123-4567-012345678ABC', '89012345-ABCD-8901-2345-890123456ABC', 1, 34.99, GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- ShoppingCart
INSERT INTO ShoppingCart (CartId, UserId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('34567890-ABCD-3456-7890-345678901ABC', '12345678-ABCD-1234-5678-123456789ABC', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('45678901-ABCD-4567-8901-456789012ABC', '23456789-ABCD-2345-6789-234567890ABC', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- CartItem
INSERT INTO CartItem (CartItemId, CartId, ProductId, Quantity, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('56789012-ABCD-5678-9012-567890123ABC', '34567890-ABCD-3456-7890-345678901ABC', '78901234-ABCD-7890-1234-789012345ABC', 1, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('67890123-ABCD-6789-0123-678901234ABC', '45678901-ABCD-4567-8901-456789012ABC', '89012345-ABCD-8901-2345-890123456ABC', 2, GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- Wishlist
INSERT INTO Wishlist (WishlistId, UserId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('78901234-ABCD-7890-1234-789012345ABC', '12345678-ABCD-1234-5678-123456789ABC', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('89012345-ABCD-8901-2345-890123456ABC', '23456789-ABCD-2345-6789-234567890ABC', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- WishlistItem
INSERT INTO WishlistItem (WishlistItemId, WishlistId, ProductId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('90123456-ABCD-9012-3456-901234567ABC', '78901234-ABCD-7890-1234-789012345ABC', '78901234-ABCD-7890-1234-789012345ABC', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('01234567-ABCD-0123-4567-012345678ABC', '89012345-ABCD-8901-2345-890123456ABC', '89012345-ABCD-8901-2345-890123456ABC', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- CustomerReturns
INSERT INTO CustomerReturns (ReturnId, OrderId, UserId, ReturnDate, TotalRefund, TotalAmount, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('12345678-ABCD-1234-5678-123456789ABC', '90123456-ABCD-9012-3456-901234567ABC', '12345678-ABCD-1234-5678-123456789ABC', GETDATE(), 29.99, 59.98, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('23456789-ABCD-2345-6789-234567890ABC', '01234567-ABCD-0123-4567-012345678ABC', '23456789-ABCD-2345-6789-234567890ABC', GETDATE(), 39.99, 69.98, GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- CustomerReturnItem
INSERT INTO CustomerReturnItem (CustomerReturnItemId, ReturnId, OrderItemId, QuantityReturned, RefundAmount, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('34567890-ABCD-3456-7890-345678901ABC', '12345678-ABCD-1234-5678-123456789ABC', '12345678-ABCD-1234-5678-123456789ABC', 1, 24.99, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('45678901-ABCD-4567-8901-456789012ABC', '23456789-ABCD-2345-6789-234567890ABC', '23456789-ABCD-2345-6789-234567890ABC', 2, 69.98, GETDATE(), '23456789-ABCD-2345-6789

-- FileMimeTypes
INSERT INTO FileMimeTypes (MimeTypeId, MimeType, MimeExtension, KindOfDocument, KindOfDocumentShort, CreateDate, CreatedBy, WorkflowState)
VALUES
  (1, 'image/jpeg', 'jpeg', 'Image Document', 'ImageDoc', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  (2, 'application/pdf', 'pdf', 'PDF Document', 'PDFDoc', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- FileUnitsOfMeasure
INSERT INTO FileUnitsOfMeasure (UnitOfMeasureId, Name, Description, CodingElement, CreateDate, CreatedBy, WorkflowState)
VALUES
  (1, 'Pixel', 'Measurement in pixels', 'px', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  (2, 'Inch', 'Measurement in inches', 'in', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- FileCustomJSopXFile
INSERT INTO FileCustomJSopXFile (FileCustomId, Name, Description, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('12345678-ABCD-1234-5678-123456789ABC', 'File1', 'Description for File1', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('23456789-ABCD-2345-6789-234567890ABC', 'File2', 'Description for File2', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- FileCustomJSopXFileValidMimeTypes
INSERT INTO FileCustomJSopXFileValidMimeTypes (FileCustomId, MimeTypeId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('12345678-ABCD-1234-5678-123456789ABC', 1, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('23456789-ABCD-2345-6789-234567890ABC', 2, GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- FileRawFiles
INSERT INTO FileRawFiles (FileId, FileName, FileDescription, RawBinaryFileContent, FileSize, Width, Height, MimeType, UnitOfMeasure, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('34567890-ABCD-3456-7890-345678901ABC', 'RawFile1.jpg', 'Description for RawFile1', 0x546869732069732061207261772066696c652e2e2e, 1024, 800, 600, 1, 1, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('45678901-ABCD-4567-8901-456789012ABC', 'RawFile2.pdf', 'Description for RawFile2', 0x546869732069732061207261772066696c652e2e2e, 2048, 0, 0, 2, 2, GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- FileCustomJSopXFileRenditions
INSERT INTO FileCustomJSopXFileRenditions (FileRenditionId, FileRenditionName, FileRenditionDescription, Width, Height, UnitOfMeasure, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('56789012-ABCD-5678-9012-567890123ABC', 'Rendition1', 'Description for Rendition1', 800, 600, 1, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('67890123-ABCD-6789-0123-678901234ABC', 'Rendition2', 'Description for Rendition2', 1200, 900, 2, GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- FileCustomJSopXFileValidRenditions
INSERT INTO FileCustomJSopXFileValidRenditions (FileCustomId, FileRenditionId, FileId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('12345678-ABCD-1234-5678-123456789ABC', '56789012-ABCD-5678-9012-567890123ABC', '34567890-ABCD-3456-7890-345678901ABC', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('23456789-ABCD-2345-6789-234567890ABC', '67890123-ABCD-6789-0123-678901234ABC', '45678901-ABCD-4567-8901-456789012ABC', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- FileCustomJSopXFilesProducts
INSERT INTO FileCustomJSopXFilesProducts (FileCustomId, ProductId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('34567890-ABCD-3456-7890-345678901ABC', '78901234-ABCD-7890-1234-789012345ABC', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('45678901-ABCD-4567-8901-456789012ABC', '89012345-ABCD-8901-2345-890123456ABC', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- FileCustomJSopXFilesCategories
INSERT INTO FileCustomJSopXFilesCategories (FileCustomId, CategoryId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('56789012-ABCD-5678-9012-567890123ABC', 1, GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('67890123-ABCD-6789-0123-678901234ABC', 2, GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- FileCustomJSopXFilesProfiles
INSERT INTO FileCustomJSopXFilesProfiles (FileCustomId, ProfileImageId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('78901234-ABCD-7890-1234-789012345ABC', '12345678-ABCD-1234-5678-123456789ABC', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('89012345-ABCD-8901-2345-890123456ABC', '23456789-ABCD-2345-6789-234567890ABC', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);

-- FileCustomJSopXFilesOrganizations
INSERT INTO FileCustomJSopXFilesOrganizations (FileCustomId, OrganizationId, CreateDate, CreatedBy, WorkflowState)
VALUES
  ('90123456-ABCD-9012-3456-901234567ABC', '56789012-ABCD-5678-9012-567890123ABC', GETDATE(), '12345678-ABCD-1234-5678-123456789ABC', 1),
  ('01234567-ABCD-0123-4567-012345678ABC', '67890123-ABCD-6789-0123-678901234ABC', GETDATE(), '23456789-ABCD-2345-6789-234567890ABC', 1);


```


---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Database`] » [`Schema`] ·· **[`SQL Scripts`]** ·· [`Services`] ··· [`⇧ Back to Top`]

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
[Lexicon]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/Lexicon.md "JSopX™ Project Common Lexicon.md"
[`Lexicon`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/Lexicon.md "JSopX™ Project Common Lexicon.md"

<!--Root Solution Home-->
[`Home`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management Project Home README.md"
<!--Root Solution Project -->
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution example README.md"
<!--Root Solution Previous -->
[`« Previous`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution README.md"
<!--Root Solution Next -->
[`Next »`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ SaaS Document Management Project Solution README.md"

<!--Root Solution Project Solutions -->
[`Common`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/README.md "JSopX™ SaaS Project Common README.md"
[⚙️ Workflow State]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[⚙️ `Workflow State`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[Workflow States]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Workflow States`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md "JSopX™ Project Common Workflow States"
[`Junction Rules`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
[Junction Rules]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/JunctionRules.md "JSopX™ Project Common Junction Rules with Halos"
[`Development Standards`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/DevelopmentStandards.md "JSopX™ Project Common Development Standards"
[Development Standards]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/DevelopmentStandards.md "JSopX™ Project Common Development Standards"

<!--Root Solution Project Solutions -->
[`Database`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/README.md "JSopX™ SaaS Project Database"
[`Schema`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/Schema.md "JSopX™ SaaS Project Database Schemas"
[`SQL Scripts`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/SqlScripts.md "JSopX™ SaaS Project Database SQL Scripts"
[`Services`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/Services.md "JSopX™ SaaS Project Database .NET Services"
[Database]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/README.md "JSopX™ SaaS Project Database"
[Schema]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/Schema.md "JSopX™ SaaS Project Database Schemas"
[SQL Scripts]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/SqlScripts.md "JSopX™ SaaS Project Database SQL Scripts"
[Services]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Database/Services.md "JSopX™ SaaS Project Database .NET Services"
<!-- Back to Top links (all styles) found under most sections -->
[Back to Top]: #table-of-contents "Primary document table of contents"
[`Back to Top`]: #table-of-contents "Primary document table of contents"
[`⇧ Back to Top`]: #table-of-contents "Primary document table of contents"

<!-- Long Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`<https://github.com/JasonSilvestri/OpenProjectX>`]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Core>`]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.SharedResources>`]: https://github.com/JasonSilvestri/JSopX.SharedResources "JSopX™ Shared Resources SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Halos>`]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.WebAPI>`]: https://github.com/JasonSilvestri/JSopX.WebAPI "JSopX™ WebAPI SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Data>`]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.RCLxAssets>`]: https://github.com/JasonSilvestri/JSopX.RCLxAssets "JSopX™ RCL x Assets SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Presentation>`]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.ClassLibrary>`]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Class Library SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.RCLxComponents>`]: https://github.com/JasonSilvestri/JSopX.RCLxComponents "JSopX™ RCL x Components SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.SaaS>`]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore>`]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Hybrid .NET Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.RCLxProper>`]: https://github.com/JasonSilvestri/JSopX.RCLxProper "JSopX™ RCL x Proper SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.ReactCore>`]: https://github.com/JasonSilvestri/JSopX.ReactCore "JSopX™ React Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.VueCore>`]: https://github.com/JasonSilvestri/JSopX.VueCore "JSopX™ Vue Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.AngularCore>`]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ DM consumption SaaS Example Project"
<!-- Short Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX.OpenProjectX GitHub]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[JSopX.Core GitHub]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[JSopX.Data GitHub]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[JSopX.SharedResources GitHub]: https://github.com/JasonSilvestri/JSopX.SharedResources "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos GitHub]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[JSopX.WebAPI GitHub]: https://github.com/JasonSilvestri/JSopX.WebAPI "JSopX™ Web API SaaS Project"
[JSopX.RCLxAssets GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxAssets "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation GitHub]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary GitHub]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Class Library SaaS Project"
[JSopX.RCLxComponents GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxComponents "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS GitHub]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore GitHub]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Hybrid .NET Core SaaS Project"
[JSopX.RCLxProper GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxProper "JSopX™ RCL x Proper SaaS Project"
[JSopX.BridgeTooFar GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[JSopX.ReactCore GitHub]: https://github.com/JasonSilvestri/JSopX.ReactCore "JSopX™ React Core SaaS Project"
[JSopX.VueCore GitHub]: https://github.com/JasonSilvestri/JSopX.VueCore "JSopX™ Vue Core SaaS Project"
[JSopX.AngularCore GitHub]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core SaaS Project"

[JSopX.BridgeTooFar GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ DM consumption SaaS Example Project"
<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX.OpenProjectX]: /JSopX.BridgeTooFar/docs/md/OpenProjectX/README.md "JSopX™ Enterprise-Level Solution"
[JSopX.Core]: /JSopX.BridgeTooFar/docs/md/jsopx.Core/README.md "JSopX™ Core SaaS Project"
[JSopX.Data]: /JSopX.BridgeTooFar/docs/md/jsopx.Data/README.md "JSopX™ Data SaaS Project"
[JSopX.SharedResources]: /JSopX.BridgeTooFar/docs/md/jsopx.SharedResources/README.md "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos]: /JSopX.BridgeTooFar/docs/md/jsopx.Halos/README.md "JSopX™ Halos SaaS Project"
[JSopX.WebAPI]: /JSopX.BridgeTooFar/docs/md/jsopx.WebAPI/README.md "JSopX™ WebAPI SaaS Project"
[JSopX.RCLxAssets]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxAssets/README.md "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation]: /JSopX.BridgeTooFar/docs/md/jsopx.Presentation/README.md "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary]: /JSopX.BridgeTooFar/docs/md/jsopx.ClassLibrary/README.md "JSopX™ Class Library SaaS Project"
[JSopX.RCLxComponents]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxComponents/README.md "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS]: /JSopX.BridgeTooFar/docs/md/jsopx.SaaS/README.md "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore]: /JSopX.BridgeTooFar/docs/md/jsopx.MauiHybridNetCore/README.md "JSopX™ MAUI Hybrid .NET Core SaaS Project"
[JSopX.RCLxProper]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxProper/README.md "JSopX™ RCL x Proper SaaS Project"
[JSopX.BridgeTooFar]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[JSopX.ReactCore]: /JSopX.BridgeTooFar/docs/md/jsopx.ReactCore/README.md "JSopX™ React Core SaaS Project"
[JSopX.VueCore]: /JSopX.BridgeTooFar/docs/md/jsopx.VueCore/README.md "JSopX™ Vue Core SaaS Project"
[JSopX.BridgeTooFar]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Vue Core SaaS Project"
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`JSopX`]: /JSopX.BridgeTooFar/docs/md/OpenProjectX/README.md "JSopX™ Enterprise-Level Solution"
[`JSopX.Core`]: /JSopX.BridgeTooFar/docs/md/jsopx.Core/README.md "JSopX™ Core SaaS Project"
[`JSopX.Data`]: /JSopX.BridgeTooFar/docs/md/jsopx.Data/README.md "JSopX™ Data SaaS Project"
[`JSopX.SharedResources`]: /JSopX.BridgeTooFar/docs/md/jsopx.SharedResources/README.md "JSopX™ ML SaaS Project"
[`JSopX.Halos`]: /JSopX.BridgeTooFar/docs/md/jsopx.Halos/README.md "JSopX™ Halos SaaS Project"
[`JSopX.WebAPI`]: /JSopX.BridgeTooFar/docs/md/jsopx.WebAPI/README.md "JSopX™ WebAPI SaaS Project"
[`JSopX.RCLxAssets`]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxAssets/README.md "JSopX™ RCL x Assets SaaS Project"
[`JSopX.Presentation`]: /JSopX.BridgeTooFar/docs/md/jsopx.Presentation/README.md "JSopX™ Presentation SaaS Project"
[`JSopX.ClassLibrary`]: /JSopX.BridgeTooFar/docs/md/jsopx.ClassLibrary/README.md "JSopX™ Class Library SaaS Project"
[`JSopX.RCLxComponents`]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxComponents/README.md "JSopX™ RCL x Components SaaS Project"
[`JSopX.SaaS`]: /JSopX.BridgeTooFar/docs/md/jsopx.SaaS/README.md "JSopX™ SaaS Project"
[`JSopX.MauiHybridNetCore`]: /JSopX.BridgeTooFar/docs/md/jsopx.MauiHybridNetCore/README.md "JSopX™ MAUI Hybrid .NET Core SaaS Project"
[`JSopX.HealthTracker`]: /JSopX.BridgeTooFar/docs/md/jsopx.HealthTracker/README.md "The Original JSopX™ Maui SaaS Project by Mark"
[`JSopX.RCLxProper`]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxProper/README.md "The Original JSopX™ Maui End Game Project by Mark"
[`JSopX.Maui.MPA`]: /JSopX.BridgeTooFar/docs/md/jsopx.Maui.MPA/README.md "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[`JSopX.ReactCore`]: /JSopX.BridgeTooFar/docs/md/jsopx.ReactCore/README.md "JSopX™ React Core SaaS Project"
[`JSopX.VueCore`]: /JSopX.BridgeTooFar/docs/md/jsopx.VueCore/README.md "JSopX™ Vue Core SaaS Project"
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Vue Core SaaS Project"
<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solutions & Version All SaaS Projects -->
[JSopX.OpenProjectX (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopx "JSopX™ Enterprise-Level Solution"
[JSopX.Core (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxcore "JSopX™ Core SaaS Project"
[JSopX.Data (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxdata "JSopX™ Data SaaS Project"
[JSopX.SharedResources (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxsharedresources "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxhalos "JSopX™ WebAPI SaaS Project"
[JSopX.RCLxAssets (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxrclxassets "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxpresentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxclasslibrary "JSopX™ Class Library SaaS Project"
[JSopX.RCLxComponents (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxrclxcomponents "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxsaas "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxmauihybridnetcore "JSopX™ MAUI Hybrid .NET Core SaaS Project"
[JSopX.RCLxProper (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxrclxproper "JSopX™ RCL x Proper SaaS Project"
[JSopX.BridgeTooFar (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxbridgetoofar "JSopX™ Document Management SaaS Project"
[JSopX.ReactCore (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxreactcore "JSopX™ React Core SaaS Project"
[JSopX.VueCore (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxvuecore "JSopX™ Vue Core SaaS Project"
[JSopX.BridgeTooFar (v1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxangularcore "JSopX™ Vue Core SaaS Project"
<!-- Short Form Local Document Management Links of all JSopX™ Visual Studio Templates-->
[Blank Solution VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#blank-solution-visual-studio-template "JSopX™ Visual Studio Blank Solution Project Template"
[ASP.NET Core Web App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#aspnet-core-web-app-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web App Project Template"
[Website App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#website-visual-studio-template "JSopX™ Visual Studio Website Project Template"
[Console App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#console-app-visual-studio-template "JSopX™ Visual Studio Console App Project Template"
[Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#class-library-visual-studio-template "JSopX™ Visual Studio Class Library Project Template"
[Razor Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#razor-class-library-visual-studio-template "JSopX™ Visual Studio Razor Class Library Project Template"
[Asp.NET Core Web API VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#aspnet-core-web-api-visual-studio-template "JSopX™ Visual Studio ASP.NET Core Web Api Project Template"
[Angular and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#angular-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Angular and ASP.NET Core Project Template"
[React and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#react-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio React and ASP.NET Core Project Template"
[Vue and ASP.NET Core VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#vue-and-aspnet-core-visual-studio-template "JSopX™ Visual Studio Vue and ASP.NET Core Project Template"
[Blazor Web App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#blazor-web-app-visual-studio-template "JSopX™ Visual Studio Blazor Web App Project Template"
[.NET MAUI Blazor Hybrid and Web App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#net-maui-blazor-hybrid-and-web-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Blazor Hybrid and Web App Project Template"
[.NET MAUI Class Library VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#net-maui-class-library-visual-studio-template "JSopX™ Visual Studio .NET MAUI Class Library Project Template"
[Website VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#website-visual-studio-template "JSopX™ Visual Studio Website Project Template"
[.NET MAUI Multi-Project App VS Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/README.md#net-maui-multi-project-app-visual-studio-template "JSopX™ Visual Studio .NET MAUI Multi-Project App Project Template"
<!-- Short Form Local Document Management Links of all JSopX™ Visual Studio Templates Page by Page -->
[Blank Solution Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/BlankSolution.md "JSopX™ Visual Studio Blank Solution Project Template"
[ASP.NET Core Web App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/AspNetCoreWebApp.md "JSopX™ Visual Studio ASP.NET Core Web App Project Template"
[Website App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/Website.md "JSopX™ Visual Studio Website Project Template"
[Console App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/ConsoleApp.md "JSopX™ Visual Studio Console App Project Template"
[Class Library Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/ClassLibrary.md "JSopX™ Visual Studio Class Library Project Template"
[Razor Class Library Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/RazorClassLibrary.md "JSopX™ Visual Studio Razor Class Library Project Template"
[Asp.NET Core Web API Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/AspNetCoreWebApi.md "JSopX™ Visual Studio ASP.NET Core Web Api Project Template"
[Angular and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/AngularAspNetCore.md "JSopX™ Visual Studio Angular and ASP.NET Core Project Template"
[React and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/ReactAspNetCore.md "JSopX™ Visual Studio React and ASP.NET Core Project Template"
[Vue and ASP.NET Core Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/VueAspNetCore.md "JSopX™ Visual Studio Vue and ASP.NET Core Project Template"
[Blazor Web App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/BlazorWebApp.md "JSopX™ Visual Studio Blazor Web App Project Template"
[.NET MAUI Blazor Hybrid and Web App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/NetMauiBlazorHybridandWeb.md "JSopX™ Visual Studio .NET MAUI Blazor Hybrid and Web App Project Template"
[.NET MAUI Class Library Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/NetMauiClassLibrary.md "JSopX™ Visual Studio .NET MAUI Class Library Project Template"
[.NET MAUI Multi-Project App Template]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/VsTemplates/NetMauiMultiProjectApp.md "JSopX™ Visual Studio .NET MAUI Multi-Project App Project Template"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[npm]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[Vue]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[Vite]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[Python]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[Bash]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[`Windows`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#windows "JSopX™ SaaS Project Windows Technology Requirements"
[`Visual Studio`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#visual-studio "JSopX™ SaaS Project Visual Studio Technology Requirements"
[`.NET Framework`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-framework "JSopX™ SaaS Project .NET Framework Technology Requirements"
[`ASP.NET Core`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#aspnet-core "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[`.NET Core Blazor`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-core-blazor "JSopX™ SaaS Project Blazor Core Technology Requirements"
[`.Net Core Maui Hybrid`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#net-core-maui-hybrid "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[`Node`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#node "JSopX™ SaaS Project Node Technology Requirements"
[`npm`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#npm "JSopX™ SaaS Project NPM Technology Requirements"
[`Bootstrap`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#bootstrap "JSopX™ SaaS Project Bootstrap Technology Requirements"
[`Angular CLI`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#angular-cli "JSopX™ SaaS Project Angular CLI Technology Requirements"
[`React`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#react "JSopX™ SaaS Project React Technology Requirements"
[`Vue`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#vue "JSopX™ SaaS Project Vue Technology Requirements"
[`Vite`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#vite "JSopX™ SaaS Project Vite Technology Requirements"
[`Python`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#python "JSopX™ SaaS Project Python Technology Requirements"
[`Bash`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#bash "JSopX™ SaaS Project Bash Technology Requirements"
[`Powershell`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Technologies.md#powershell "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form Local Document Management Links of all JSopX™ Technology Requirements and Versions -->
[Windows (v 10+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Windows.md "JSopX™ SaaS Project Windows Technology Requirements"
[Visual Studio (v 17.14.21)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/VisualStudio.md "JSopX™ SaaS Project Visual Studio Technology Requirements"
[.NET Framework (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/NetFrameworkSdk.md "JSopX™ SaaS Project .NET Framework Technology Requirements"
[ASP.NET Core (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/AspNetCore.md "JSopX™ SaaS Project ASP.NET Core Technology Requirements"
[.NET Core Blazor (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/NetCoreBlazor.md "JSopX™ SaaS Project Blazor Core Technology Requirements"
[.Net Core Maui Hybrid (v 9.2.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/NetCoreMauiHybrid.md "JSopX™ SaaS Project .NET MAUI Hybrid Blazor and Web Technology Requirements"
[Node (v 20.14.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Node.md "JSopX™ SaaS Project Node Technology Requirements"
[npm (v 10.8.1)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/npm.md "JSopX™ SaaS Project NPM Technology Requirements"
[Bootstrap (v 5.3.8)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Bootstrap.md "JSopX™ SaaS Project Bootstrap Technology Requirements"
[Angular CLI (v 18.0.3)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/AngularCli.md "JSopX™ SaaS Project Angular CLI Technology Requirements"
[React (v 18.2.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/React.md "JSopX™ SaaS Project React Technology Requirements"
[Vue (v 3.4.21)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Vue.md "JSopX™ SaaS Project Vue Technology Requirements"
[Vite (v 5.2.8)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Vite.md "JSopX™ SaaS Project Vite Technology Requirements"
[Python (v 3.12.3x+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Python.md "JSopX™ SaaS Project Python Technology Requirements"
[Bash (v 5.x+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Bash.md "JSopX™ SaaS Project Bash Technology Requirements"
[Powershell (v 7.x+)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Technologies/Powershell.md "JSopX™ SaaS Project Powershell Technology Requirements"
<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[Created]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#created
[Queued]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#queued
[In Progress]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#in-progress
[Waiting]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#waiting
[Passed]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#passed
[Failed]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#failed
[Rejected]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#rejected
[Cancelled]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#cancelled
[Skipped]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#skipped
[Timeout]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#timeout
[Network Error]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#network-error
[Validation Error]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#validation-error
[Retrying]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#retrying
[Blocked]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#blocked
[Completed]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#completed
[To Do]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#to-do
[Started]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#started
[Pending]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#pending
[Expired]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#expired
[Approved]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#approved
[Sent]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#sent
[Received]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#received
[Under Review]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#under-review
[Soft Delete]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#soft-delete
[Hard Delete]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#hard-delete
[Unknown]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#unknown
[Null or Empty]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#null-or-empty
[Active]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#active

<!-- Short Form LocalWorkflow States Links of all JSopX™ Workflow States -->
[`CREATED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#created
[`QUEUED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#queued
[`IN PROGRESS`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#in-progress
[`WAITING`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#waiting
[`PASSED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#passed
[`FAILED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#failed
[`REJECTED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#rejected
[`CANCELLED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#cancelled
[`SKIPPED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#skipped
[`TIMEOUT`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#timeout
[`NETWORK ERROR`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#network-error
[`VALIDATION ERROR`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#validation-error
[`RETRYING`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#retrying
[`BLOCKED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#blocked
[`COMPLETED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#completed
[`TO DO`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#to-do
[`STARTED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#started
[`PENDING`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#pending
[`EXPIRED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#expired
[`APPROVED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#approved
[`SENT`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#sent
[`RECEIVED`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#received
[`UNDER REVIEW`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#under-review
[`SOFT DELETE`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#soft-delete
[`HARD DELETE`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#hard-delete
[`UNKNOWN`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#unknown
[`NULL OR EMPTY`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#null-or-empty
[`ACTIVE`]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Common/WorkflowStates.md#active