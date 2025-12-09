# JSopX™ Solution Project (v1) -.NET Services

Below are several .NET Services. 

> Please note that these are basic services, and we might need to adjust them based on specific requirements and performance considerations.

> The following chat has all the resources found here as well: [https://chatgpt.com/c/5fe8b720-40e2-4128-9b06-f88d11d6115f](https://chatgpt.com/c/5fe8b720-40e2-4128-9b06-f88d11d6115f)

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Database`] » [`Schema`] ·· [`SQL Scripts`] ·· **[`Services`]**

---

## Table of Contents

- [**.NET Services**](#net-services)
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

---

## .NET Services

Creating a full set of `.NET Services` CRUD repositories and services for all tables in the provided MS SQL DB Schema can be quite extensive and detailed. 

Below is a general sample for now in how we would create a general example for one table (e.g., the Person table). You can use this example as a template and extend it for other tables in your schema.

Before proceeding, ensure you have the necessary NuGet packages installed, including Entity Framework Core and the appropriate database provider (e.g., Microsoft.EntityFrameworkCore.SqlServer).

Most importantly, these services should implement a generic repository pattern to avoid code duplication, and should be handled
across the [`JSopX.Core`], [`JSopX.Data`] and [`JSopX.WebAPI`] projects.

Here's an example of a generic repository interface:

### **Generic Repository:**

Here's an example of a generic repository interface:

```csharp
public interface IRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> GetByIdAsync(Guid id);
    Task CreateAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(Guid id);
}
```

Now, let's create a repository implementation for the `Person` table:

```csharp
public class PersonRepository : IRepository<Person>
{
    private readonly ApplicationDbContext _context;

    public PersonRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Person>> GetAllAsync()
    {
        return await _context.Person.ToListAsync();
    }

    public async Task<Person> GetByIdAsync(Guid id)
    {
        return await _context.Person.FindAsync(id);
    }

    public async Task CreateAsync(Person entity)
    {
        _context.Person.Add(entity);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Person entity)
    {
        _context.Person.Update(entity);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Guid id)
    {
        var entity = await _context.Person.FindAsync(id);
        if (entity != null)
        {
            _context.Person.Remove(entity);
            await _context.SaveChangesAsync();
        }
    }
}
```

Next, create a service to interact with the repository:

```csharp
public class PersonService
{
    private readonly IRepository<Person> _repository;

    public PersonService(IRepository<Person> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<Person>> GetAllPersonsAsync()
    {
        return await _repository.GetAllAsync();
    }

    public async Task<Person> GetPersonByIdAsync(Guid id)
    {
        return await _repository.GetByIdAsync(id);
    }

    public async Task CreatePersonAsync(Person person)
    {
        await _repository.CreateAsync(person);
    }

    public async Task UpdatePersonAsync(Person person)
    {
        await _repository.UpdateAsync(person);
    }

    public async Task DeletePersonAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }
}
```

Make sure to register the repository and service in our DI containers.

We will repeat this pattern for each table in our [`Schema`] by creating a repository and service for each. 

We should consider using a generic repository for common operations.

Keep in mind that this is a basic example.

---

### 1). **WorkflowStates:**

```csharp

// We did not create this service yet.

```

---

### 2). **AspNetUsers:**

1. **AspNetUser Entity:**

    ```csharp
    public class AspNetUser
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **AspNetUserRepository:**

    ```csharp
    public class AspNetUserRepository : IRepository<AspNetUser>
    {
        private readonly ApplicationDbContext _context;

        public AspNetUserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AspNetUser>> GetAllAsync()
        {
            return await _context.AspNetUsers.Where(u => !u.DeletedConfirmed).ToListAsync();
        }

        public async Task<AspNetUser> GetByIdAsync(string id)
        {
            return await _context.AspNetUsers.FirstOrDefaultAsync(u => u.Id == id && !u.DeletedConfirmed);
        }

        public async Task CreateAsync(AspNetUser entity)
        {
            _context.AspNetUsers.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(AspNetUser entity)
        {
            _context.AspNetUsers.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(string id)
        {
            var entity = await _context.AspNetUsers.FindAsync(id);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.AspNetUsers.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **AspNetUserService:**

    ```csharp
    public class AspNetUserService
    {
        private readonly IRepository<AspNetUser> _repository;

        public AspNetUserService(IRepository<AspNetUser> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<AspNetUser>> GetAllAspNetUsersAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<AspNetUser> GetAspNetUserByIdAsync(string id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task CreateAspNetUserAsync(AspNetUser aspNetUser)
        {
            await _repository.CreateAsync(aspNetUser);
        }

        public async Task UpdateAspNetUserAsync(AspNetUser aspNetUser)
        {
            await _repository.UpdateAsync(aspNetUser);
        }

        public async Task DeleteAspNetUserAsync(string id)
        {
            await _repository.DeleteAsync(id);
        }
    }
    ```

---

### 3). **JSopXUser:**

1. **JSopXUser Entity:**

    ```csharp
    public class JSopXUser
    {
        public Guid UserId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **JSopXUserRepository:**

    ```csharp
    public class JSopXUserRepository : IRepository<JSopXUser>
    {
        private readonly ApplicationDbContext _context;

        public JSopXUserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<JSopXUser>> GetAllAsync()
        {
            return await _context.JSopXUsers.Where(u => !u.DeletedConfirmed).ToListAsync();
        }

        public async Task<JSopXUser> GetByIdAsync(Guid userId)
        {
            return await _context.JSopXUsers.FirstOrDefaultAsync(u => u.UserId == userId && !u.DeletedConfirmed);
        }

        public async Task CreateAsync(JSopXUser entity)
        {
            _context.JSopXUsers.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(JSopXUser entity)
        {
            _context.JSopXUsers.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid userId)
        {
            var entity = await _context.JSopXUsers.FindAsync(userId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.JSopXUsers.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }

    ```

3. **JSopXUserService:**

    ```csharp
    public class JSopXUserService
    {
        private readonly IRepository<JSopXUser> _repository;

        public JSopXUserService(IRepository<JSopXUser> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<JSopXUser>> GetAllJSopXUsersAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<JSopXUser> GetJSopXUserByIdAsync(Guid userId)
        {
            return await _repository.GetByIdAsync(userId);
        }

        public async Task CreateJSopXUserAsync(JSopXUser dealHopperUser)
        {
            await _repository.CreateAsync(dealHopperUser);
        }

        public async Task UpdateJSopXUserAsync(JSopXUser dealHopperUser)
        {
            await _repository.UpdateAsync(dealHopperUser);
        }

        public async Task DeleteJSopXUserAsync(Guid userId)
        {
            await _repository.DeleteAsync(userId);
        }
    }

    ```

---

### 6). **OrganizationTypes:**

1. **OrganizationType Entity:**

    ```csharp

    public class OrganizationType
    {
        public int OrganizationTypeId { get; set; }
        public string TypeName { get; set; }
        public string Description { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }

    ```

2. **OrganizationTypeRepository:**

    ```csharp

    public class OrganizationTypeRepository : IRepository<OrganizationType>
    {
        private readonly ApplicationDbContext _context;

        public OrganizationTypeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<OrganizationType>> GetAllAsync()
        {
            return await _context.OrganizationTypes.Where(b => !b.DeletedConfirmed).ToListAsync();
        }

        public async Task<OrganizationType> GetByIdAsync(int id)
        {
            return await _context.OrganizationTypes.FirstOrDefaultAsync(b => b.OrganizationTypeId == id && !b.DeletedConfirmed);
        }

        public async Task CreateAsync(OrganizationType entity)
        {
            _context.OrganizationTypes.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(OrganizationType entity)
        {
            _context.OrganizationTypes.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.OrganizationTypes.FindAsync(id);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.OrganizationTypes.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }

    ```

3. **OrganizationTypeService:**

    ```csharp

    public class OrganizationTypeService
    {
        private readonly IRepository<OrganizationType> _repository;

        public OrganizationTypeService(IRepository<OrganizationType> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<OrganizationType>> GetAllOrganizationTypesAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<OrganizationType> GetOrganizationTypeByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task CreateOrganizationTypeAsync(OrganizationType businessType)
        {
            await _repository.CreateAsync(businessType);
        }

        public async Task UpdateOrganizationTypeAsync(OrganizationType businessType)
        {
            await _repository.UpdateAsync(businessType);
        }

        public async Task DeleteOrganizationTypeAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }
    }

    ```

---

### 7). **Organizations:**

```csharp

// We did not create this service yet.

```

### 8). **Product:**

1. **Product Entity:**

    ```csharp
    public class Product
    {
        public Guid ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public decimal PriceDeal { get; set; }
        public int PriceDealSavings { get; set; }
        public int StockQuantity { get; set; }
        public bool IsInStock { get; set; }
        public Guid OrganizationId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **ProductRepository:**

    ```csharp
    public class ProductRepository : IRepository<Product>
    {
        private readonly ApplicationDbContext _context;

        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await _context.Products.Where(p => !p.DeletedConfirmed).ToListAsync();
        }

        public async Task<Product> GetByIdAsync(Guid productId)
        {
            return await _context.Products.FirstOrDefaultAsync(p => p.ProductId == productId && !p.DeletedConfirmed);
        }

        public async Task CreateAsync(Product entity)
        {
            _context.Products.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Product entity)
        {
            _context.Products.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid productId)
        {
            var entity = await _context.Products.FindAsync(productId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.Products.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **ProductService:**

    ```csharp
    public class ProductService
    {
        private readonly IRepository<Product> _repository;

        public ProductService(IRepository<Product> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Product> GetProductByIdAsync(Guid productId)
        {
            return await _repository.GetByIdAsync(productId);
        }

        public async Task CreateProductAsync(Product product)
        {
            await _repository.CreateAsync(product);
        }

        public async Task UpdateProductAsync(Product product)
        {
            await _repository.UpdateAsync(product);
        }

        public async Task DeleteProductAsync(Guid productId)
        {
            await _repository.DeleteAsync(productId);
        }
    }
    ```

---

### 9). **Category:**

1. **Category Entity:**

    ```csharp
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **CategoryRepository:**

    ```csharp
    public class CategoryRepository : IRepository<Category>
    {
        private readonly ApplicationDbContext _context;

        public CategoryRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Category>> GetAllAsync()
        {
            return await _context.Categories.Where(c => !c.DeletedConfirmed).ToListAsync();
        }

        public async Task<Category> GetByIdAsync(int categoryId)
        {
            return await _context.Categories.FirstOrDefaultAsync(c => c.CategoryId == categoryId && !c.DeletedConfirmed);
        }

        public async Task CreateAsync(Category entity)
        {
            _context.Categories.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Category entity)
        {
            _context.Categories.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int categoryId)
        {
            var entity = await _context.Categories.FindAsync(categoryId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.Categories.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **CategoryService:**

    ```csharp
    public class CategoryService
    {
        private readonly IRepository<Category> _repository;

        public CategoryService(IRepository<Category> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Category> GetCategoryByIdAsync(int categoryId)
        {
            return await _repository.GetByIdAsync(categoryId);
        }

        public async Task CreateCategoryAsync(Category category)
        {
            await _repository.CreateAsync(category);
        }

        public async Task UpdateCategoryAsync(Category category)
        {
            await _repository.UpdateAsync(category);
        }

        public async Task DeleteCategoryAsync(int categoryId)
        {
            await _repository.DeleteAsync(categoryId);
        }
    }
    ```

---

### 10). **ProductCategory:**

1. **ProductCategory Entity:**

    ```csharp
    public class ProductCategory
    {
        public Guid ProductId { get; set; }
        public int CategoryId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **ProductCategoryRepository:**

    ```csharp
    public class ProductCategoryRepository : IRepository<ProductCategory>
    {
        private readonly ApplicationDbContext _context;

        public ProductCategoryRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ProductCategory>> GetAllAsync()
        {
            return await _context.ProductCategories.Where(pc => !pc.DeletedConfirmed).ToListAsync();
        }

        public async Task<ProductCategory> GetByIdAsync(Guid productId, int categoryId)
        {
            return await _context.ProductCategories.FirstOrDefaultAsync(pc =>
                pc.ProductId == productId && pc.CategoryId == categoryId && !pc.DeletedConfirmed);
        }

        public async Task CreateAsync(ProductCategory entity)
        {
            _context.ProductCategories.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(ProductCategory entity)
        {
            _context.ProductCategories.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid productId, int categoryId)
        {
            var entity = await _context.ProductCategories.FindAsync(productId, categoryId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.ProductCategories.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **ProductCategoryService:**

    ```csharp
    public class ProductCategoryService
    {
        private readonly IRepository<ProductCategory> _repository;

        public ProductCategoryService(IRepository<ProductCategory> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<ProductCategory>> GetAllProductCategoriesAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<ProductCategory> GetProductCategoryByIdAsync(Guid productId, int categoryId)
        {
            return await _repository.GetByIdAsync(productId, categoryId);
        }

        public async Task CreateProductCategoryAsync(ProductCategory productCategory)
        {
            await _repository.CreateAsync(productCategory);
        }

        public async Task UpdateProductCategoryAsync(ProductCategory productCategory)
        {
            await _repository.UpdateAsync(productCategory);
        }

        public async Task DeleteProductCategoryAsync(Guid productId, int categoryId)
        {
            await _repository.DeleteAsync(productId, categoryId);
        }
    }
    ```

---

### 11). **CategoriesSubCategories:**

1. **CategoriesSubCategories Entity:**

    ```csharp
    public class CategoriesSubCategories
    {
        public int ParentCategoryId { get; set; }
        public int ChildCategoryId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **CategoriesSubCategoriesRepository:**

    ```csharp
    public class CategoriesSubCategoriesRepository : IRepository<CategoriesSubCategories>
    {
        private readonly ApplicationDbContext _context;

        public CategoriesSubCategoriesRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CategoriesSubCategories>> GetAllAsync()
        {
            return await _context.CategoriesSubCategories.Where(csc => !csc.DeletedConfirmed).ToListAsync();
        }

        public async Task<CategoriesSubCategories> GetByIdAsync(int parentCategoryId, int childCategoryId)
        {
            return await _context.CategoriesSubCategories.FirstOrDefaultAsync(csc =>
                csc.ParentCategoryId == parentCategoryId && csc.ChildCategoryId == childCategoryId && !csc.DeletedConfirmed);
        }

        public async Task CreateAsync(CategoriesSubCategories entity)
        {
            _context.CategoriesSubCategories.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(CategoriesSubCategories entity)
        {
            _context.CategoriesSubCategories.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int parentCategoryId, int childCategoryId)
        {
            var entity = await _context.CategoriesSubCategories.FindAsync(parentCategoryId, childCategoryId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.CategoriesSubCategories.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **CategoriesSubCategoriesService:**

    ```csharp
    public class CategoriesSubCategoriesService
    {
        private readonly IRepository<CategoriesSubCategories> _repository;

        public CategoriesSubCategoriesService(IRepository<CategoriesSubCategories> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<CategoriesSubCategories>> GetAllCategoriesSubCategoriesAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<CategoriesSubCategories> GetCategoriesSubCategoriesByIdAsync(int parentCategoryId, int childCategoryId)
        {
            return await _repository.GetByIdAsync(parentCategoryId, childCategoryId);
        }

        public async Task CreateCategoriesSubCategoriesAsync(CategoriesSubCategories categoriesSubCategories)
        {
            await _repository.CreateAsync(categoriesSubCategories);
        }

        public async Task UpdateCategoriesSubCategoriesAsync(CategoriesSubCategories categoriesSubCategories)
        {
            await _repository.UpdateAsync(categoriesSubCategories);
        }

        public async Task DeleteCategoriesSubCategoriesAsync(int parentCategoryId, int childCategoryId)
        {
            await _repository.DeleteAsync(parentCategoryId, childCategoryId);
        }
    }
    ```

---

### 12). **Orders:**

1. **Orders Entity:**

    ```csharp
    public class Orders
    {
        public Guid OrderId { get; set; }
        public Guid UserId { get; set; }
        public Guid OrganizationId { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **OrdersRepository:**

    ```csharp
    public class OrdersRepository : IRepository<Orders>
    {
        private readonly ApplicationDbContext _context;

        public OrdersRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Orders>> GetAllAsync()
        {
            return await _context.Orders.Where(o => !o.DeletedConfirmed).ToListAsync();
        }

        public async Task<Orders> GetByIdAsync(Guid orderId)
        {
            return await _context.Orders.FirstOrDefaultAsync(o => o.OrderId == orderId && !o.DeletedConfirmed);
        }

        public async Task CreateAsync(Orders entity)
        {
            _context.Orders.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Orders entity)
        {
            _context.Orders.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid orderId)
        {
            var entity = await _context.Orders.FindAsync(orderId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.Orders.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **OrdersService:**

    ```csharp
    public class OrdersService
    {
        private readonly IRepository<Orders> _repository;

        public OrdersService(IRepository<Orders> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Orders>> GetAllOrdersAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Orders> GetOrderByIdAsync(Guid orderId)
        {
            return await _repository.GetByIdAsync(orderId);
        }

        public async Task CreateOrderAsync(Orders order)
        {
            await _repository.CreateAsync(order);
        }

        public async Task UpdateOrderAsync(Orders order)
        {
            await _repository.UpdateAsync(order);
        }

        public async Task DeleteOrderAsync(Guid orderId)
        {
            await _repository.DeleteAsync(orderId);
        }
    }
    ```

---

### 13). **OrderItem:**

1. **OrderItem Entity:**

    ```csharp
    public class OrderItem
    {
        public Guid OrderItemId { get; set; }
        public Guid OrderId { get; set; }
        public Guid ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal Subtotal { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **OrderItemRepository:**

    ```csharp
    public class OrderItemRepository : IRepository<OrderItem>
    {
        private readonly ApplicationDbContext _context;

        public OrderItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<OrderItem>> GetAllAsync()
        {
            return await _context.OrderItems.Where(oi => !oi.DeletedConfirmed).ToListAsync();
        }

        public async Task<OrderItem> GetByIdAsync(Guid orderItemId)
        {
            return await _context.OrderItems.FirstOrDefaultAsync(oi => oi.OrderItemId == orderItemId && !oi.DeletedConfirmed);
        }

        public async Task CreateAsync(OrderItem entity)
        {
            _context.OrderItems.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(OrderItem entity)
        {
            _context.OrderItems.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid orderItemId)
        {
            var entity = await _context.OrderItems.FindAsync(orderItemId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.OrderItems.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **OrderItemService:**

    ```csharp
    public class OrderItemService
    {
        private readonly IRepository<OrderItem> _repository;

        public OrderItemService(IRepository<OrderItem> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<OrderItem>> GetAllOrderItemsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<OrderItem> GetOrderItemByIdAsync(Guid orderItemId)
        {
            return await _repository.GetByIdAsync(orderItemId);
        }

        public async Task CreateOrderItemAsync(OrderItem orderItem)
        {
            await _repository.CreateAsync(orderItem);
        }

        public async Task UpdateOrderItemAsync(OrderItem orderItem)
        {
            await _repository.UpdateAsync(orderItem);
        }

        public async Task DeleteOrderItemAsync(Guid orderItemId)
        {
            await _repository.DeleteAsync(orderItemId);
        }
    }
    ```

---

### 14). **ShoppingCart:**

1. **ShoppingCart Entity:**

    ```csharp
    public class ShoppingCart
    {
        public Guid CartId { get; set; }
        public Guid UserId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **ShoppingCartRepository:**

    ```csharp
    public class ShoppingCartRepository : IRepository<ShoppingCart>
    {
        private readonly ApplicationDbContext _context;

        public ShoppingCartRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ShoppingCart>> GetAllAsync()
        {
            return await _context.ShoppingCarts.Where(sc => !sc.DeletedConfirmed).ToListAsync();
        }

        public async Task<ShoppingCart> GetByIdAsync(Guid cartId)
        {
            return await _context.ShoppingCarts.FirstOrDefaultAsync(sc => sc.CartId == cartId && !sc.DeletedConfirmed);
        }

        public async Task CreateAsync(ShoppingCart entity)
        {
            _context.ShoppingCarts.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(ShoppingCart entity)
        {
            _context.ShoppingCarts.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid cartId)
        {
            var entity = await _context.ShoppingCarts.FindAsync(cartId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.ShoppingCarts.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **ShoppingCartService:**

    ```csharp
    public class ShoppingCartService
    {
        private readonly IRepository<ShoppingCart> _repository;

        public ShoppingCartService(IRepository<ShoppingCart> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<ShoppingCart>> GetAllShoppingCartsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<ShoppingCart> GetShoppingCartByIdAsync(Guid cartId)
        {
            return await _repository.GetByIdAsync(cartId);
        }

        public async Task CreateShoppingCartAsync(ShoppingCart shoppingCart)
        {
            await _repository.CreateAsync(shoppingCart);
        }

        public async Task UpdateShoppingCartAsync(ShoppingCart shoppingCart)
        {
            await _repository.UpdateAsync(shoppingCart);
        }

        public async Task DeleteShoppingCartAsync(Guid cartId)
        {
            await _repository.DeleteAsync(cartId);
        }
    }
    ```

---

### 15). **CartItem:**

1. **CartItem Entity:**

    ```csharp
    public class CartItem
    {
        public Guid CartItemId { get; set; }
        public Guid CartId { get; set; }
        public Guid ProductId { get; set; }
        public int Quantity { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **CartItemRepository:**

    ```csharp
    public class CartItemRepository : IRepository<CartItem>
    {
        private readonly ApplicationDbContext _context;

        public CartItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CartItem>> GetAllAsync()
        {
            return await _context.CartItems.Where(ci => !ci.DeletedConfirmed).ToListAsync();
        }

        public async Task<CartItem> GetByIdAsync(Guid cartItemId)
        {
            return await _context.CartItems.FirstOrDefaultAsync(ci => ci.CartItemId == cartItemId && !ci.DeletedConfirmed);
        }

        public async Task CreateAsync(CartItem entity)
        {
            _context.CartItems.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(CartItem entity)
        {
            _context.CartItems.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid cartItemId)
        {
            var entity = await _context.CartItems.FindAsync(cartItemId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.CartItems.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **CartItemService:**

    ```csharp
    public class CartItemService
    {
        private readonly IRepository<CartItem> _repository;

        public CartItemService(IRepository<CartItem> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<CartItem>> GetAllCartItemsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<CartItem> GetCartItemByIdAsync(Guid cartItemId)
        {
            return await _repository.GetByIdAsync(cartItemId);
        }

        public async Task CreateCartItemAsync(CartItem cartItem)
        {
            await _repository.CreateAsync(cartItem);
        }

        public async Task UpdateCartItemAsync(CartItem cartItem)
        {
            await _repository.UpdateAsync(cartItem);
        }

        public async Task DeleteCartItemAsync(Guid cartItemId)
        {
            await _repository.DeleteAsync(cartItemId);
        }
    }
    ```

---

### 16). **Wishlist:**

1. **Wishlist Entity:**

    ```csharp
    public class Wishlist
    {
        public Guid WishlistId { get; set; }
        public Guid UserId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **WishlistRepository:**

    ```csharp
    public class WishlistRepository : IRepository<Wishlist>
    {
        private readonly ApplicationDbContext _context;

        public WishlistRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Wishlist>> GetAllAsync()
        {
            return await _context.Wishlists.Where(wl => !wl.DeletedConfirmed).ToListAsync();
        }

        public async Task<Wishlist> GetByIdAsync(Guid wishlistId)
        {
            return await _context.Wishlists.FirstOrDefaultAsync(wl => wl.WishlistId == wishlistId && !wl.DeletedConfirmed);
        }

        public async Task CreateAsync(Wishlist entity)
        {
            _context.Wishlists.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Wishlist entity)
        {
            _context.Wishlists.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid wishlistId)
        {
            var entity = await _context.Wishlists.FindAsync(wishlistId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.Wishlists.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **WishlistService:**

    ```csharp
    public class WishlistService
    {
        private readonly IRepository<Wishlist> _repository;

        public WishlistService(IRepository<Wishlist> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Wishlist>> GetAllWishlistsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Wishlist> GetWishlistByIdAsync(Guid wishlistId)
        {
            return await _repository.GetByIdAsync(wishlistId);
        }

        public async Task CreateWishlistAsync(Wishlist wishlist)
        {
            await _repository.CreateAsync(wishlist);
        }

        public async Task UpdateWishlistAsync(Wishlist wishlist)
        {
            await _repository.UpdateAsync(wishlist);
        }

        public async Task DeleteWishlistAsync(Guid wishlistId)
        {
            await _repository.DeleteAsync(wishlistId);
        }
    }
    ```

---

### 17). **WishlistItem:**

1. **WishlistItem Entity:**

    ```csharp
    public class WishlistItem
    {
        public Guid WishlistItemId { get; set; }
        public Guid WishlistId { get; set; }
        public Guid ProductId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **WishlistItemRepository:**

    ```csharp
    public class WishlistItemRepository : IRepository<WishlistItem>
    {
        private readonly ApplicationDbContext _context;

        public WishlistItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<WishlistItem>> GetAllAsync()
        {
            return await _context.WishlistItems.Where(wli => !wli.DeletedConfirmed).ToListAsync();
        }

        public async Task<WishlistItem> GetByIdAsync(Guid wishlistItemId)
        {
            return await _context.WishlistItems.FirstOrDefaultAsync(wli => wli.WishlistItemId == wishlistItemId && !wli.DeletedConfirmed);
        }

        public async Task CreateAsync(WishlistItem entity)
        {
            _context.WishlistItems.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(WishlistItem entity)
        {
            _context.WishlistItems.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid wishlistItemId)
        {
            var entity = await _context.WishlistItems.FindAsync(wishlistItemId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.WishlistItems.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **WishlistItemService:**

    ```csharp
    public class WishlistItemService
    {
        private readonly IRepository<WishlistItem> _repository;

        public WishlistItemService(IRepository<WishlistItem> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<WishlistItem>> GetAllWishlistItemsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<WishlistItem> GetWishlistItemByIdAsync(Guid wishlistItemId)
        {
            return await _repository.GetByIdAsync(wishlistItemId);
        }

        public async Task CreateWishlistItemAsync(WishlistItem wishlistItem)
        {
            await _repository.CreateAsync(wishlistItem);
        }

        public async Task UpdateWishlistItemAsync(WishlistItem wishlistItem)
        {
            await _repository.UpdateAsync(wishlistItem);
        }

        public async Task DeleteWishlistItemAsync(Guid wishlistItemId)
        {
            await _repository.DeleteAsync(wishlistItemId);
        }
    }
    ```

---

### 18). **CustomerReturns:**

1. **CustomerReturns Entity:**

    ```csharp
    public class CustomerReturns
    {
        public Guid ReturnId { get; set; }
        public Guid OrderId { get; set; }
        public Guid UserId { get; set; }
        public DateTime ReturnDate { get; set; }
        public decimal TotalRefund { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **CustomerReturnsRepository:**

    ```csharp
    public class CustomerReturnsRepository : IRepository<CustomerReturns>
    {
        private readonly ApplicationDbContext _context;

        public CustomerReturnsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CustomerReturns>> GetAllAsync()
        {
            return await _context.CustomerReturns.Where(cr => !cr.DeletedConfirmed).ToListAsync();
        }

        public async Task<CustomerReturns> GetByIdAsync(Guid returnId)
        {
            return await _context.CustomerReturns.FirstOrDefaultAsync(cr => cr.ReturnId == returnId && !cr.DeletedConfirmed);
        }

        public async Task CreateAsync(CustomerReturns entity)
        {
            _context.CustomerReturns.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(CustomerReturns entity)
        {
            _context.CustomerReturns.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid returnId)
        {
            var entity = await _context.CustomerReturns.FindAsync(returnId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.CustomerReturns.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **CustomerReturnsService:**

    ```csharp
    public class CustomerReturnsService
    {
        private readonly IRepository<CustomerReturns> _repository;

        public CustomerReturnsService(IRepository<CustomerReturns> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<CustomerReturns>> GetAllCustomerReturnsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<CustomerReturns> GetCustomerReturnByIdAsync(Guid returnId)
        {
            return await _repository.GetByIdAsync(returnId);
        }

        public async Task CreateCustomerReturnAsync(CustomerReturns customerReturns)
        {
            await _repository.CreateAsync(customerReturns);
        }

        public async Task UpdateCustomerReturnAsync(CustomerReturns customerReturns)
        {
            await _repository.UpdateAsync(customerReturns);
        }

        public async Task DeleteCustomerReturnAsync(Guid returnId)
        {
            await _repository.DeleteAsync(returnId);
        }
    }
    ```

---

### 19). **CustomerReturnItem:**

1. **CustomerReturnItem Entity:**

    ```csharp
    public class CustomerReturnItem
    {
        public Guid CustomerReturnItemId { get; set; }
        public Guid ReturnId { get; set; }
        public Guid OrderItemId { get; set; }
        public int QuantityReturned { get; set; }
        public decimal RefundAmount { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **CustomerReturnItemRepository:**

    ```csharp
    public class CustomerReturnItemRepository : IRepository<CustomerReturnItem>
    {
        private readonly ApplicationDbContext _context;

        public CustomerReturnItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CustomerReturnItem>> GetAllAsync()
        {
            return await _context.CustomerReturnItems.Where(cri => !cri.DeletedConfirmed).ToListAsync();
        }

        public async Task<CustomerReturnItem> GetByIdAsync(Guid customerReturnItemId)
        {
            return await _context.CustomerReturnItems.FirstOrDefaultAsync(cri => cri.CustomerReturnItemId == customerReturnItemId && !cri.DeletedConfirmed);
        }

        public async Task CreateAsync(CustomerReturnItem entity)
        {
            _context.CustomerReturnItems.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(CustomerReturnItem entity)
        {
            _context.CustomerReturnItems.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid customerReturnItemId)
        {
            var entity = await _context.CustomerReturnItems.FindAsync(customerReturnItemId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.CustomerReturnItems.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **CustomerReturnItemService:**

    ```csharp
    public class CustomerReturnItemService
    {
        private readonly IRepository<CustomerReturnItem> _repository;

        public CustomerReturnItemService(IRepository<CustomerReturnItem> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<CustomerReturnItem>> GetAllCustomerReturnItemsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<CustomerReturnItem> GetCustomerReturnItemByIdAsync(Guid customerReturnItemId)
        {
            return await _repository.GetByIdAsync(customerReturnItemId);
        }

        public async Task CreateCustomerReturnItemAsync(CustomerReturnItem customerReturnItem)
        {
            await _repository.CreateAsync(customerReturnItem);
        }

        public async Task UpdateCustomerReturnItemAsync(CustomerReturnItem customerReturnItem)
        {
            await _repository.UpdateAsync(customerReturnItem);
        }

        public async Task DeleteCustomerReturnItemAsync(Guid customerReturnItemId)
        {
            await _repository.DeleteAsync(customerReturnItemId);
        }
    }
    ```

---

### 20). **FileMimeTypes:**

1. **FileMimeTypes Entity:**

    ```csharp
    public class FileMimeTypes
    {
        public int MimeTypeId { get; set; }
        public string MimeType { get; set; }
        public string MimeExtension { get; set; }
        public string KindOfDocument { get; set; }
        public string KindOfDocumentShort { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileMimeTypesRepository:**

    ```csharp
    public class FileMimeTypesRepository : IRepository<FileMimeTypes>
    {
        private readonly ApplicationDbContext _context;

        public FileMimeTypesRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileMimeTypes>> GetAllAsync()
        {
            return await _context.FileMimeTypes.Where(fmt => !fmt.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileMimeTypes> GetByIdAsync(int mimeTypeId)
        {
            return await _context.FileMimeTypes.FirstOrDefaultAsync(fmt => fmt.MimeTypeId == mimeTypeId && !fmt.DeletedConfirmed);
        }

        public async Task CreateAsync(FileMimeTypes entity)
        {
            _context.FileMimeTypes.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileMimeTypes entity)
        {
            _context.FileMimeTypes.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int mimeTypeId)
        {
            var entity = await _context.FileMimeTypes.FindAsync(mimeTypeId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileMimeTypes.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileMimeTypesService:**

    ```csharp
    public class FileMimeTypesService
    {
        private readonly IRepository<FileMimeTypes> _repository;

        public FileMimeTypesService(IRepository<FileMimeTypes> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileMimeTypes>> GetAllFileMimeTypesAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileMimeTypes> GetFileMimeTypesByIdAsync(int mimeTypeId)
        {
            return await _repository.GetByIdAsync(mimeTypeId);
        }

        public async Task CreateFileMimeTypesAsync(FileMimeTypes fileMimeTypes)
        {
            await _repository.CreateAsync(fileMimeTypes);
        }

        public async Task UpdateFileMimeTypesAsync(FileMimeTypes fileMimeTypes)
        {
            await _repository.UpdateAsync(fileMimeTypes);
        }

        public async Task DeleteFileMimeTypesAsync(int mimeTypeId)
        {
            await _repository.DeleteAsync(mimeTypeId);
        }
    }
    ```

---

### 21). **FileUnitsOfMeasure:**

1. **FileUnitsOfMeasure Entity:**

    ```csharp
    public class FileUnitsOfMeasure
    {
        public int UnitOfMeasureId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string CodingElement { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileUnitsOfMeasureRepository:**

    ```csharp
    public class FileUnitsOfMeasureRepository : IRepository<FileUnitsOfMeasure>
    {
        private readonly ApplicationDbContext _context;

        public FileUnitsOfMeasureRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileUnitsOfMeasure>> GetAllAsync()
        {
            return await _context.FileUnitsOfMeasures.Where(fuom => !fuom.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileUnitsOfMeasure> GetByIdAsync(int unitOfMeasureId)
        {
            return await _context.FileUnitsOfMeasures.FirstOrDefaultAsync(fuom => fuom.UnitOfMeasureId == unitOfMeasureId && !fuom.DeletedConfirmed);
        }

        public async Task CreateAsync(FileUnitsOfMeasure entity)
        {
            _context.FileUnitsOfMeasures.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileUnitsOfMeasure entity)
        {
            _context.FileUnitsOfMeasures.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int unitOfMeasureId)
        {
            var entity = await _context.FileUnitsOfMeasures.FindAsync(unitOfMeasureId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileUnitsOfMeasures.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileUnitsOfMeasureService:**

    ```csharp
    public class FileUnitsOfMeasureService
    {
        private readonly IRepository<FileUnitsOfMeasure> _repository;

        public FileUnitsOfMeasureService(IRepository<FileUnitsOfMeasure> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileUnitsOfMeasure>> GetAllFileUnitsOfMeasuresAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileUnitsOfMeasure> GetFileUnitsOfMeasureByIdAsync(int unitOfMeasureId)
        {
            return await _repository.GetByIdAsync(unitOfMeasureId);
        }

        public async Task CreateFileUnitsOfMeasureAsync(FileUnitsOfMeasure fileUnitsOfMeasure)
        {
            await _repository.CreateAsync(fileUnitsOfMeasure);
        }

        public async Task UpdateFileUnitsOfMeasureAsync(FileUnitsOfMeasure fileUnitsOfMeasure)
        {
            await _repository.UpdateAsync(fileUnitsOfMeasure);
        }

        public async Task DeleteFileUnitsOfMeasureAsync(int unitOfMeasureId)
        {
            await _repository.DeleteAsync(unitOfMeasureId);
        }
    }
    ```

---

### 22). **FileCustomJSopXFile:**

1. **FileCustomJSopXFile Entity:**

    ```csharp
    public class FileCustomJSopXFile
    {
        public Guid FileCustomId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileCustomJSopXFileRepository:**

    ```csharp
    public class FileCustomJSopXFileRepository : IRepository<FileCustomJSopXFile>
    {
        private readonly ApplicationDbContext _context;

        public FileCustomJSopXFileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileCustomJSopXFile>> GetAllAsync()
        {
            return await _context.FileCustomJSopXFiles.Where(fcdhf => !fcdhf.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileCustomJSopXFile> GetByIdAsync(Guid fileCustomId)
        {
            return await _context.FileCustomJSopXFiles.FirstOrDefaultAsync(fcdhf => fcdhf.FileCustomId == fileCustomId && !fcdhf.DeletedConfirmed);
        }

        public async Task CreateAsync(FileCustomJSopXFile entity)
        {
            _context.FileCustomJSopXFiles.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileCustomJSopXFile entity)
        {
            _context.FileCustomJSopXFiles.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid fileCustomId)
        {
            var entity = await _context.FileCustomJSopXFiles.FindAsync(fileCustomId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileCustomJSopXFiles.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileCustomJSopXFileService:**

    ```csharp
    public class FileCustomJSopXFileService
    {
        private readonly IRepository<FileCustomJSopXFile> _repository;

        public FileCustomJSopXFileService(IRepository<FileCustomJSopXFile> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileCustomJSopXFile>> GetAllFileCustomJSopXFilesAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileCustomJSopXFile> GetFileCustomJSopXFileByIdAsync(Guid fileCustomId)
        {
            return await _repository.GetByIdAsync(fileCustomId);
        }

        public async Task CreateFileCustomJSopXFileAsync(FileCustomJSopXFile fileCustomJSopXFile)
        {
            await _repository.CreateAsync(fileCustomJSopXFile);
        }

        public async Task UpdateFileCustomJSopXFileAsync(FileCustomJSopXFile fileCustomJSopXFile)
        {
            await _repository.UpdateAsync(fileCustomJSopXFile);
        }

        public async Task DeleteFileCustomJSopXFileAsync(Guid fileCustomId)
        {
            await _repository.DeleteAsync(fileCustomId);
        }
    }
    ```

---

### 23). **FileCustomJSopXFileValidMimeTypes:**

1. **FileCustomJSopXFileValidMimeTypes Entity:**

    ```csharp
    public class FileCustomJSopXFileValidMimeTypes
    {
        public Guid FileCustomId { get; set; }
        public int MimeTypeId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileCustomJSopXFileValidMimeTypesRepository:**

    ```csharp
    public class FileCustomJSopXFileValidMimeTypesRepository : IRepository<FileCustomJSopXFileValidMimeTypes>
    {
        private readonly ApplicationDbContext _context;

        public FileCustomJSopXFileValidMimeTypesRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileCustomJSopXFileValidMimeTypes>> GetAllAsync()
        {
            return await _context.FileCustomJSopXFileValidMimeTypes.Where(fcdhfvm => !fcdhfvm.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileCustomJSopXFileValidMimeTypes> GetByIdAsync(Guid fileCustomId, int mimeTypeId)
        {
            return await _context.FileCustomJSopXFileValidMimeTypes
                .FirstOrDefaultAsync(fcdhfvm => fcdhfvm.FileCustomId == fileCustomId && fcdhfvm.MimeTypeId == mimeTypeId && !fcdhfvm.DeletedConfirmed);
        }

        public async Task CreateAsync(FileCustomJSopXFileValidMimeTypes entity)
        {
            _context.FileCustomJSopXFileValidMimeTypes.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileCustomJSopXFileValidMimeTypes entity)
        {
            _context.FileCustomJSopXFileValidMimeTypes.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid fileCustomId, int mimeTypeId)
        {
            var entity = await _context.FileCustomJSopXFileValidMimeTypes.FindAsync(fileCustomId, mimeTypeId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileCustomJSopXFileValidMimeTypes.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileCustomJSopXFileValidMimeTypesService:**

    ```csharp
    public class FileCustomJSopXFileValidMimeTypesService
    {
        private readonly IRepository<FileCustomJSopXFileValidMimeTypes> _repository;

        public FileCustomJSopXFileValidMimeTypesService(IRepository<FileCustomJSopXFileValidMimeTypes> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileCustomJSopXFileValidMimeTypes>> GetAllFileCustomJSopXFileValidMimeTypesAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileCustomJSopXFileValidMimeTypes> GetFileCustomJSopXFileValidMimeTypesByIdAsync(Guid fileCustomId, int mimeTypeId)
        {
            return await _repository.GetByIdAsync(fileCustomId, mimeTypeId);
        }

        public async Task CreateFileCustomJSopXFileValidMimeTypesAsync(FileCustomJSopXFileValidMimeTypes fileCustomJSopXFileValidMimeTypes)
        {
            await _repository.CreateAsync(fileCustomJSopXFileValidMimeTypes);
        }

        public async Task UpdateFileCustomJSopXFileValidMimeTypesAsync(FileCustomJSopXFileValidMimeTypes fileCustomJSopXFileValidMimeTypes)
        {
            await _repository.UpdateAsync(fileCustomJSopXFileValidMimeTypes);
        }

        public async Task DeleteFileCustomJSopXFileValidMimeTypesAsync(Guid fileCustomId, int mimeTypeId)
        {
            await _repository.DeleteAsync(fileCustomId, mimeTypeId);
        }
    }
    ```

---

### 24). **FileRawFiles:**

1. **FileRawFiles Entity:**

    ```csharp
    public class FileRawFiles
    {
        public Guid FileId { get; set; }
        public string FileName { get; set; }
        public string FileDescription { get; set; }
        public byte[] RawBinaryFileContent { get; set; }
        public int FileSize { get; set; }
        public short Width { get; set; }
        public short Height { get; set; }
        public int MimeType { get; set; } // Assuming MimeType is an int representing the foreign key relationship
        public int UnitOfMeasure { get; set; } // Assuming UnitOfMeasure is an int representing the foreign key relationship
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileRawFilesRepository:**

    ```csharp
    public class FileRawFilesRepository : IRepository<FileRawFiles>
    {
        private readonly ApplicationDbContext _context;

        public FileRawFilesRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileRawFiles>> GetAllAsync()
        {
            return await _context.FileRawFiles.Where(frf => !frf.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileRawFiles> GetByIdAsync(Guid fileId)
        {
            return await _context.FileRawFiles.FirstOrDefaultAsync(frf => frf.FileId == fileId && !frf.DeletedConfirmed);
        }

        public async Task CreateAsync(FileRawFiles entity)
        {
            _context.FileRawFiles.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileRawFiles entity)
        {
            _context.FileRawFiles.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid fileId)
        {
            var entity = await _context.FileRawFiles.FindAsync(fileId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileRawFiles.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileRawFilesService:**

    ```csharp
    public class FileRawFilesService
    {
        private readonly IRepository<FileRawFiles> _repository;

        public FileRawFilesService(IRepository<FileRawFiles> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileRawFiles>> GetAllFileRawFilesAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileRawFiles> GetFileRawFilesByIdAsync(Guid fileId)
        {
            return await _repository.GetByIdAsync(fileId);
        }

        public async Task CreateFileRawFilesAsync(FileRawFiles fileRawFiles)
        {
            await _repository.CreateAsync(fileRawFiles);
        }

        public async Task UpdateFileRawFilesAsync(FileRawFiles fileRawFiles)
        {
            await _repository.UpdateAsync(fileRawFiles);
        }

        public async Task DeleteFileRawFilesAsync(Guid fileId)
        {
            await _repository.DeleteAsync(fileId);
        }
    }
    ```

---

### 25). **FileCustomJSopXFileRenditions:**

1. **FileCustomJSopXFileRenditions Entity:**

    ```csharp
    public class FileCustomJSopXFileRenditions
    {
        public Guid FileRenditionId { get; set; }
        public string FileRenditionName { get; set; }
        public string FileRenditionDescription { get; set; }
        public short Width { get; set; }
        public short Height { get; set; }
        public int UnitOfMeasure { get; set; } // Assuming UnitOfMeasure is an int representing the foreign key relationship
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileCustomJSopXFileRenditionsRepository:**

    ```csharp
    public class FileCustomJSopXFileRenditionsRepository : IRepository<FileCustomJSopXFileRenditions>
    {
        private readonly ApplicationDbContext _context;

        public FileCustomJSopXFileRenditionsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileCustomJSopXFileRenditions>> GetAllAsync()
        {
            return await _context.FileCustomJSopXFileRenditions.Where(fcdhfr => !fcdhfr.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileCustomJSopXFileRenditions> GetByIdAsync(Guid fileRenditionId)
        {
            return await _context.FileCustomJSopXFileRenditions
                .FirstOrDefaultAsync(fcdhfr => fcdhfr.FileRenditionId == fileRenditionId && !fcdhfr.DeletedConfirmed);
        }

        public async Task CreateAsync(FileCustomJSopXFileRenditions entity)
        {
            _context.FileCustomJSopXFileRenditions.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileCustomJSopXFileRenditions entity)
        {
            _context.FileCustomJSopXFileRenditions.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid fileRenditionId)
        {
            var entity = await _context.FileCustomJSopXFileRenditions.FindAsync(fileRenditionId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileCustomJSopXFileRenditions.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileCustomJSopXFileRenditionsService:**

    ```csharp
    public class FileCustomJSopXFileRenditionsService
    {
        private readonly IRepository<FileCustomJSopXFileRenditions> _repository;

        public FileCustomJSopXFileRenditionsService(IRepository<FileCustomJSopXFileRenditions> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileCustomJSopXFileRenditions>> GetAllFileCustomJSopXFileRenditionsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileCustomJSopXFileRenditions> GetFileCustomJSopXFileRenditionsByIdAsync(Guid fileRenditionId)
        {
            return await _repository.GetByIdAsync(fileRenditionId);
        }

        public async Task CreateFileCustomJSopXFileRenditionsAsync(FileCustomJSopXFileRenditions fileRenditions)
        {
            await _repository.CreateAsync(fileRenditions);
        }

        public async Task UpdateFileCustomJSopXFileRenditionsAsync(FileCustomJSopXFileRenditions fileRenditions)
        {
            await _repository.UpdateAsync(fileRenditions);
        }

        public async Task DeleteFileCustomJSopXFileRenditionsAsync(Guid fileRenditionId)
        {
            await _repository.DeleteAsync(fileRenditionId);
        }
    }
    ```

---

### 26). **FileCustomJSopXFileValidRenditions:**

1. **FileCustomJSopXFileValidRenditions Entity:**

    ```csharp
    public class FileCustomJSopXFileValidRenditions
    {
        public Guid FileCustomId { get; set; }
        public Guid FileRenditionId { get; set; }
        public Guid FileId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileCustomJSopXFileValidRenditionsRepository:**

    ```csharp
    public class FileCustomJSopXFileValidRenditionsRepository : IRepository<FileCustomJSopXFileValidRenditions>
    {
        private readonly ApplicationDbContext _context;

        public FileCustomJSopXFileValidRenditionsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileCustomJSopXFileValidRenditions>> GetAllAsync()
        {
            return await _context.FileCustomJSopXFileValidRenditions.Where(fcdhfvr => !fcdhfvr.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileCustomJSopXFileValidRenditions> GetByIdAsync(Guid fileCustomId, Guid fileRenditionId, Guid fileId)
        {
            return await _context.FileCustomJSopXFileValidRenditions
                .FirstOrDefaultAsync(fcdhfvr => fcdhfvr.FileCustomId == fileCustomId 
                                                && fcdhfvr.FileRenditionId == fileRenditionId 
                                                && fcdhfvr.FileId == fileId 
                                                && !fcdhfvr.DeletedConfirmed);
        }

        public async Task CreateAsync(FileCustomJSopXFileValidRenditions entity)
        {
            _context.FileCustomJSopXFileValidRenditions.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileCustomJSopXFileValidRenditions entity)
        {
            _context.FileCustomJSopXFileValidRenditions.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid fileCustomId, Guid fileRenditionId, Guid fileId)
        {
            var entity = await _context.FileCustomJSopXFileValidRenditions
                .FindAsync(fileCustomId, fileRenditionId, fileId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileCustomJSopXFileValidRenditions.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileCustomJSopXFileValidRenditionsService:**

    ```csharp
    public class FileCustomJSopXFileValidRenditionsService
    {
        private readonly IRepository<FileCustomJSopXFileValidRenditions> _repository;

        public FileCustomJSopXFileValidRenditionsService(IRepository<FileCustomJSopXFileValidRenditions> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileCustomJSopXFileValidRenditions>> GetAllFileCustomJSopXFileValidRenditionsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileCustomJSopXFileValidRenditions> GetFileCustomJSopXFileValidRenditionsByIdAsync(Guid fileCustomId, Guid fileRenditionId, Guid fileId)
        {
            return await _repository.GetByIdAsync(fileCustomId, fileRenditionId, fileId);
        }

        public async Task CreateFileCustomJSopXFileValidRenditionsAsync(FileCustomJSopXFileValidRenditions fileValidRenditions)
        {
            await _repository.CreateAsync(fileValidRenditions);
        }

        public async Task UpdateFileCustomJSopXFileValidRenditionsAsync(FileCustomJSopXFileValidRenditions fileValidRenditions)
        {
            await _repository.UpdateAsync(fileValidRenditions);
        }

        public async Task DeleteFileCustomJSopXFileValidRenditionsAsync(Guid fileCustomId, Guid fileRenditionId, Guid fileId)
        {
            await _repository.DeleteAsync(fileCustomId, fileRenditionId, fileId);
        }
    }
    ```

---

### 27). **FileCustomJSopXFilesProducts:**

1. **FileCustomJSopXFilesProducts Entity:**

    ```csharp
    public class FileCustomJSopXFilesProducts
    {
        public Guid FileCustomId { get; set; }
        public Guid ProductId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileCustomJSopXFilesProductsRepository:**

    ```csharp
    public class FileCustomJSopXFilesProductsRepository : IRepository<FileCustomJSopXFilesProducts>
    {
        private readonly ApplicationDbContext _context;

        public FileCustomJSopXFilesProductsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileCustomJSopXFilesProducts>> GetAllAsync()
        {
            return await _context.FileCustomJSopXFilesProducts.Where(fcdhfpr => !fcdhfpr.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileCustomJSopXFilesProducts> GetByIdAsync(Guid fileCustomId, Guid productId)
        {
            return await _context.FileCustomJSopXFilesProducts
                .FirstOrDefaultAsync(fcdhfpr => fcdhfpr.FileCustomId == fileCustomId 
                                                && fcdhfpr.ProductId == productId 
                                                && !fcdhfpr.DeletedConfirmed);
        }

        public async Task CreateAsync(FileCustomJSopXFilesProducts entity)
        {
            _context.FileCustomJSopXFilesProducts.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileCustomJSopXFilesProducts entity)
        {
            _context.FileCustomJSopXFilesProducts.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid fileCustomId, Guid productId)
        {
            var entity = await _context.FileCustomJSopXFilesProducts
                .FindAsync(fileCustomId, productId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileCustomJSopXFilesProducts.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileCustomJSopXFilesProductsService:**

    ```csharp
    public class FileCustomJSopXFilesProductsService
    {
        private readonly IRepository<FileCustomJSopXFilesProducts> _repository;

        public FileCustomJSopXFilesProductsService(IRepository<FileCustomJSopXFilesProducts> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileCustomJSopXFilesProducts>> GetAllFileCustomJSopXFilesProductsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileCustomJSopXFilesProducts> GetFileCustomJSopXFilesProductsByIdAsync(Guid fileCustomId, Guid productId)
        {
            return await _repository.GetByIdAsync(fileCustomId, productId);
        }

        public async Task CreateFileCustomJSopXFilesProductsAsync(FileCustomJSopXFilesProducts fileProducts)
        {
            await _repository.CreateAsync(fileProducts);
        }

        public async Task UpdateFileCustomJSopXFilesProductsAsync(FileCustomJSopXFilesProducts fileProducts)
        {
            await _repository.UpdateAsync(fileProducts);
        }

        public async Task DeleteFileCustomJSopXFilesProductsAsync(Guid fileCustomId, Guid productId)
        {
            await _repository.DeleteAsync(fileCustomId, productId);
        }
    }
    ```

---

### 28). **FileCustomJSopXFilesCategories:**

1. **FileCustomJSopXFilesCategories Entity:**

    ```csharp
    public class FileCustomJSopXFilesCategories
    {
        public Guid FileCustomId { get; set; }
        public int CategoryId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileCustomJSopXFilesCategoriesRepository:**

    ```csharp
    public class FileCustomJSopXFilesCategoriesRepository : IRepository<FileCustomJSopXFilesCategories>
    {
        private readonly ApplicationDbContext _context;

        public FileCustomJSopXFilesCategoriesRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileCustomJSopXFilesCategories>> GetAllAsync()
        {
            return await _context.FileCustomJSopXFilesCategories.Where(fcdhfcr => !fcdhfcr.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileCustomJSopXFilesCategories> GetByIdAsync(Guid fileCustomId, int categoryId)
        {
            return await _context.FileCustomJSopXFilesCategories
                .FirstOrDefaultAsync(fcdhfcr => fcdhfcr.FileCustomId == fileCustomId 
                                                && fcdhfcr.CategoryId == categoryId 
                                                && !fcdhfcr.DeletedConfirmed);
        }

        public async Task CreateAsync(FileCustomJSopXFilesCategories entity)
        {
            _context.FileCustomJSopXFilesCategories.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileCustomJSopXFilesCategories entity)
        {
            _context.FileCustomJSopXFilesCategories.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid fileCustomId, int categoryId)
        {
            var entity = await _context.FileCustomJSopXFilesCategories
                .FindAsync(fileCustomId, categoryId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileCustomJSopXFilesCategories.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileCustomJSopXFilesCategoriesService:**

    ```csharp
    public class FileCustomJSopXFilesCategoriesService
    {
        private readonly IRepository<FileCustomJSopXFilesCategories> _repository;

        public FileCustomJSopXFilesCategoriesService(IRepository<FileCustomJSopXFilesCategories> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileCustomJSopXFilesCategories>> GetAllFileCustomJSopXFilesCategoriesAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileCustomJSopXFilesCategories> GetFileCustomJSopXFilesCategoriesByIdAsync(Guid fileCustomId, int categoryId)
        {
            return await _repository.GetByIdAsync(fileCustomId, categoryId);
        }

        public async Task CreateFileCustomJSopXFilesCategoriesAsync(FileCustomJSopXFilesCategories fileCategories)
        {
            await _repository.CreateAsync(fileCategories);
        }

        public async Task UpdateFileCustomJSopXFilesCategoriesAsync(FileCustomJSopXFilesCategories fileCategories)
        {
            await _repository.UpdateAsync(fileCategories);
        }

        public async Task DeleteFileCustomJSopXFilesCategoriesAsync(Guid fileCustomId, int categoryId)
        {
            await _repository.DeleteAsync(fileCustomId, categoryId);
        }
    }
    ```

---

### 29). **FileCustomJSopXFilesProfiles:**

1. **FileCustomJSopXFilesProfiles Entity:**

    ```csharp
    public class FileCustomJSopXFilesProfiles
    {
        public Guid FileCustomId { get; set; }
        public Guid ProfileImageId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileCustomJSopXFilesProfilesRepository:**

    ```csharp
    public class FileCustomJSopXFilesProfilesRepository : IRepository<FileCustomJSopXFilesProfiles>
    {
        private readonly ApplicationDbContext _context;

        public FileCustomJSopXFilesProfilesRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileCustomJSopXFilesProfiles>> GetAllAsync()
        {
            return await _context.FileCustomJSopXFilesProfiles.Where(fcdhfpr => !fcdhfpr.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileCustomJSopXFilesProfiles> GetByIdAsync(Guid fileCustomId, Guid profileImageId)
        {
            return await _context.FileCustomJSopXFilesProfiles
                .FirstOrDefaultAsync(fcdhfpr => fcdhfpr.FileCustomId == fileCustomId 
                                                && fcdhfpr.ProfileImageId == profileImageId 
                                                && !fcdhfpr.DeletedConfirmed);
        }

        public async Task CreateAsync(FileCustomJSopXFilesProfiles entity)
        {
            _context.FileCustomJSopXFilesProfiles.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileCustomJSopXFilesProfiles entity)
        {
            _context.FileCustomJSopXFilesProfiles.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid fileCustomId, Guid profileImageId)
        {
            var entity = await _context.FileCustomJSopXFilesProfiles
                .FindAsync(fileCustomId, profileImageId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileCustomJSopXFilesProfiles.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileCustomJSopXFilesProfilesService:**

    ```csharp
    public class FileCustomJSopXFilesProfilesService
    {
        private readonly IRepository<FileCustomJSopXFilesProfiles> _repository;

        public FileCustomJSopXFilesProfilesService(IRepository<FileCustomJSopXFilesProfiles> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileCustomJSopXFilesProfiles>> GetAllFileCustomJSopXFilesProfilesAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileCustomJSopXFilesProfiles> GetFileCustomJSopXFilesProfilesByIdAsync(Guid fileCustomId, Guid profileImageId)
        {
            return await _repository.GetByIdAsync(fileCustomId, profileImageId);
        }

        public async Task CreateFileCustomJSopXFilesProfilesAsync(FileCustomJSopXFilesProfiles fileProfiles)
        {
            await _repository.CreateAsync(fileProfiles);
        }

        public async Task UpdateFileCustomJSopXFilesProfilesAsync(FileCustomJSopXFilesProfiles fileProfiles)
        {
            await _repository.UpdateAsync(fileProfiles);
        }

        public async Task DeleteFileCustomJSopXFilesProfilesAsync(Guid fileCustomId, Guid profileImageId)
        {
            await _repository.DeleteAsync(fileCustomId, profileImageId);
        }
    }
    ```

---

### 30). **FileCustomJSopXFilesOrganizations:**

1. **FileCustomJSopXFilesOrganizations Entity:**

    ```csharp
    public class FileCustomJSopXFilesOrganizations
    {
        public Guid FileCustomId { get; set; }
        public Guid OrganizationId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid CreatedBy { get; set; }
        public int WorkflowState { get; set; }
        public bool DeletedConfirmed { get; set; }
    }
    ```

2. **FileCustomJSopXFilesOrganizationsRepository:**

    ```csharp
    public class FileCustomJSopXFilesOrganizationsRepository : IRepository<FileCustomJSopXFilesOrganizations>
    {
        private readonly ApplicationDbContext _context;

        public FileCustomJSopXFilesOrganizationsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FileCustomJSopXFilesOrganizations>> GetAllAsync()
        {
            return await _context.FileCustomJSopXFilesOrganizations.Where(fcdhfbr => !fcdhfbr.DeletedConfirmed).ToListAsync();
        }

        public async Task<FileCustomJSopXFilesOrganizations> GetByIdAsync(Guid fileCustomId, Guid businessId)
        {
            return await _context.FileCustomJSopXFilesOrganizations
                .FirstOrDefaultAsync(fcdhfbr => fcdhfbr.FileCustomId == fileCustomId 
                                                && fcdhfbr.OrganizationId == businessId 
                                                && !fcdhfbr.DeletedConfirmed);
        }

        public async Task CreateAsync(FileCustomJSopXFilesOrganizations entity)
        {
            _context.FileCustomJSopXFilesOrganizations.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FileCustomJSopXFilesOrganizations entity)
        {
            _context.FileCustomJSopXFilesOrganizations.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid fileCustomId, Guid businessId)
        {
            var entity = await _context.FileCustomJSopXFilesOrganizations
                .FindAsync(fileCustomId, businessId);
            if (entity != null)
            {
                entity.DeletedConfirmed = true;
                _context.FileCustomJSopXFilesOrganizations.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
    ```

3. **FileCustomJSopXFilesOrganizationsService:**

    ```csharp
    public class FileCustomJSopXFilesOrganizationsService
    {
        private readonly IRepository<FileCustomJSopXFilesOrganizations> _repository;

        public FileCustomJSopXFilesOrganizationsService(IRepository<FileCustomJSopXFilesOrganizations> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<FileCustomJSopXFilesOrganizations>> GetAllFileCustomJSopXFilesOrganizationsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<FileCustomJSopXFilesOrganizations> GetFileCustomJSopXFilesOrganizationsByIdAsync(Guid fileCustomId, Guid businessId)
        {
            return await _repository.GetByIdAsync(fileCustomId, businessId);
        }

        public async Task CreateFileCustomJSopXFilesOrganizationsAsync(FileCustomJSopXFilesOrganizations fileOrganizations)
        {
            await _repository.CreateAsync(fileOrganizations);
        }

        public async Task UpdateFileCustomJSopXFilesOrganizationsAsync(FileCustomJSopXFilesOrganizations fileOrganizations)
        {
            await _repository.UpdateAsync(fileOrganizations);
        }

        public async Task DeleteFileCustomJSopXFilesOrganizationsAsync(Guid fileCustomId, Guid businessId)
        {
            await _repository.DeleteAsync(fileCustomId, businessId);
        }
    }
    ```


> This Database `.NET Services` page is a living document and will be updated as new terms and definitions are added to the JSopX™ ecosystem. Please refer to this document for the most current terminology.

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Database`] » [`Schema`] ·· [`SQL Scripts`] ·· **[`Services`]** ··· [`⇧ Back to Top`]

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
[`<https://github.com/JasonSilvestri/JSopX.ClassLibrary>`]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.RCLxComponents>`]: https://github.com/JasonSilvestri/JSopX.RCLxComponents "JSopX™ RCL x Components SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.SaaS>`]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore>`]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Titrate SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.RCLxProper>`]: https://github.com/JasonSilvestri/JSopX.RCLxProper "JSopX™ RCL x Proper SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.HealthTracker>`]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.Maui.MPA>`]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.CRM>`]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.PLM>`]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.AngularCore>`]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ DM consumption SaaS Example Project"
<!-- Short Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX GitHub]: https://github.com/JasonSilvestri/OpenProjectX "JSopX™ Enterprise-Level Solution SaaS Project"
[JSopX.Core GitHub]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[JSopX.Data GitHub]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[JSopX.SharedResources GitHub]: https://github.com/JasonSilvestri/JSopX.SharedResources "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos GitHub]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[JSopX.WebAPI GitHub]: https://github.com/JasonSilvestri/JSopX.WebAPI "JSopX™ Web API SaaS Project"
[JSopX.RCLxAssets GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxAssets "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation GitHub]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary GitHub]: https://github.com/JasonSilvestri/JSopX.ClassLibrary "JSopX™ Utilities SaaS Project"
[JSopX.RCLxComponents GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxComponents "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS GitHub]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore GitHub]: https://github.com/JasonSilvestri/JSopX.MauiHybridNetCore "JSopX™ MAUI Titrate SaaS Project"
[JSopX.RCLxProper GitHub]: https://github.com/JasonSilvestri/JSopX.RCLxProper "JSopX™ RCL x Proper SaaS Project"
[JSopX.HealthTracker GitHub]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA GitHub]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[JSopX.CRM GitHub]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM GitHub]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.AngularCore GitHub]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core SaaS Project"

[JSopX.BridgeTooFar GitHub]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ DM consumption SaaS Example Project"
<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX]: /JSopX.BridgeTooFar/docs/md/OpenProjectX/README.md "JSopX™ Enterprise-Level Solution"
[JSopX.Core]: /JSopX.BridgeTooFar/docs/md/jsopx.Core/README.md "JSopX™ Core SaaS Project"
[JSopX.Data]: /JSopX.BridgeTooFar/docs/md/jsopx.Data/README.md "JSopX™ Data SaaS Project"
[JSopX.SharedResources]: /JSopX.BridgeTooFar/docs/md/jsopx.SharedResources/README.md "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos]: /JSopX.BridgeTooFar/docs/md/jsopx.Halos/README.md "JSopX™ Halos SaaS Project"
[JSopX.WebAPI]: /JSopX.BridgeTooFar/docs/md/jsopx.WebAPI/README.md "JSopX™ WebAPI SaaS Project"
[JSopX.RCLxAssets]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxAssets/README.md "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation]: /JSopX.BridgeTooFar/docs/md/jsopx.Presentation/README.md "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary]: /JSopX.BridgeTooFar/docs/md/jsopx.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[JSopX.RCLxComponents]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxComponents/README.md "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS]: /JSopX.BridgeTooFar/docs/md/jsopx.SaaS/README.md "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore]: /JSopX.BridgeTooFar/docs/md/jsopx.MauiHybridNetCore/README.md "JSopX™ MAUI Titrate SaaS Project"
[JSopX.RCLxProper]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxProper/README.md "JSopX™ RCL x Proper SaaS Project"
[JSopX.HealthTracker]: /JSopX.BridgeTooFar/docs/md/jsopx.HealthTracker/README.md "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA]: /JSopX.BridgeTooFar/docs/md/jsopx.Maui.MPA/README.md "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[JSopX.CRM]: /JSopX.BridgeTooFar/docs/md/jsopx.CRM/README.md "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM]: /JSopX.BridgeTooFar/docs/md/jsopx.PLM/README.md "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.BridgeTooFar]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Product Lifecycle Management SaaS Project"
<!-- Short Form Decorated Local Document Management Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[`JSopX`]: /JSopX.BridgeTooFar/docs/md/OpenProjectX/README.md "JSopX™ Enterprise-Level Solution"
[`JSopX.Core`]: /JSopX.BridgeTooFar/docs/md/jsopx.Core/README.md "JSopX™ Core SaaS Project"
[`JSopX.Data`]: /JSopX.BridgeTooFar/docs/md/jsopx.Data/README.md "JSopX™ Data SaaS Project"
[`JSopX.SharedResources`]: /JSopX.BridgeTooFar/docs/md/jsopx.SharedResources/README.md "JSopX™ ML SaaS Project"
[`JSopX.Halos`]: /JSopX.BridgeTooFar/docs/md/jsopx.Halos/README.md "JSopX™ Halos SaaS Project"
[`JSopX.WebAPI`]: /JSopX.BridgeTooFar/docs/md/jsopx.WebAPI/README.md "JSopX™ WebAPI SaaS Project"
[`JSopX.RCLxAssets`]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxAssets/README.md "JSopX™ RCL x Assets SaaS Project"
[`JSopX.Presentation`]: /JSopX.BridgeTooFar/docs/md/jsopx.Presentation/README.md "JSopX™ Presentation SaaS Project"
[`JSopX.ClassLibrary`]: /JSopX.BridgeTooFar/docs/md/jsopx.ClassLibrary/README.md "JSopX™ Utilities SaaS Project"
[`JSopX.RCLxComponents`]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxComponents/README.md "JSopX™ RCL x Components SaaS Project"
[`JSopX.SaaS`]: /JSopX.BridgeTooFar/docs/md/jsopx.SaaS/README.md "JSopX™ SaaS Project"
[`JSopX.MauiHybridNetCore`]: /JSopX.BridgeTooFar/docs/md/jsopx.MauiHybridNetCore/README.md "JSopX™ MAUI Titrate SaaS Project"
[`JSopX.HealthTracker`]: /JSopX.BridgeTooFar/docs/md/jsopx.HealthTracker/README.md "The Original JSopX™ Maui SaaS Project by Mark"
[`JSopX.RCLxProper`]: /JSopX.BridgeTooFar/docs/md/jsopx.RCLxProper/README.md "The Original JSopX™ Maui End Game Project by Mark"
[`JSopX.Maui.MPA`]: /JSopX.BridgeTooFar/docs/md/jsopx.Maui.MPA/README.md "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Document Management SaaS Project"
[`JSopX.CRM`]: /JSopX.BridgeTooFar/docs/md/jsopx.CRM/README.md "JSopX™ Customer Relationship Management SaaS Project"
[`JSopX.PLM`]: /JSopX.BridgeTooFar/docs/md/jsopx.PLM/README.md "JSopX™ Product Lifecycle Management SaaS Project"
[`JSopX.BridgeTooFar`]: /JSopX.BridgeTooFar/docs/md/jsopx.BridgeTooFar/README.md "JSopX™ Product Lifecycle Management SaaS Project"
<!-- Short Form Local Document Management Links of all JSopX™ Enterprise-Level Solutions & Version All SaaS Projects -->
[JSopX (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopx "JSopX™ Enterprise-Level Solution"
[JSopX.Core (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxcore "JSopX™ Core SaaS Project"
[JSopX.Data (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxdata "JSopX™ Data SaaS Project"
[JSopX.SharedResources (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxml "JSopX™ Shared Resources SaaS Project"
[JSopX.Halos (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxhalos "JSopX™ WebAPI SaaS Project"
[JSopX.RCLxAssets (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxvault "JSopX™ RCL x Assets SaaS Project"
[JSopX.Presentation (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxpresentation "JSopX™ Presentation SaaS Project"
[JSopX.ClassLibrary (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxutilities "JSopX™ Utilities SaaS Project"
[JSopX.RCLxComponents (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxunitx "JSopX™ RCL x Components SaaS Project"
[JSopX.SaaS (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxsaas "JSopX™ SaaS Project"
[JSopX.MauiHybridNetCore (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxtitrate "JSopX™ MAUI Titrate SaaS Project"
[JSopX.RCLxProper (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxendgame "JSopX™ RCL x Proper SaaS Project"
[JSopX.HealthTracker (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxtitrate "The Original JSopX™ Maui SaaS Project by Mark"
[JSopX.Maui.MPA (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxmauimpa "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[JSopX.BridgeTooFar (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxbridgetoofar "JSopX™ Document Management SaaS Project"
[JSopX.CRM (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxcrm "JSopX™ Customer Relationship Management SaaS Project"
[JSopX.PLM (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxplm "JSopX™ Product Lifecycle Management SaaS Project"
[JSopX.BridgeTooFar (v 1.0)]: /JSopX.BridgeTooFar/docs/md/jsopx.Global/Solutions/README.md#-jsopxangularcore "JSopX™ Product Lifecycle Management SaaS Project"
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