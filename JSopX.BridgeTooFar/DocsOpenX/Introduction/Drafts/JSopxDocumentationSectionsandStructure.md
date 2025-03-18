# JSopX™ Docs, Sections & Structure

By exploring the [Overview](#overview), you’ll understand how each JSopX™ document follows a consistent structural pattern, ensuring clarity and navigability throughout the documentation suite.

---

> [!TIP]
> 
> **JSopX™ Docs, Sections & Structure:** 
>
> This section highlights key information - in the form of documentation -  essential for achieving most goals, across most JSopX™ projects, throughout the entirety of the enterprise-level suite. That is kind of a big statement. Slowing down on the scrolling is recommended. Spend a little bit of time here.
>

---

[`Introduction`](./ReadMe.md) » **`JSopX™ Docs, Sections & Structure`** · · · [`« Previous`](./Alerts.md) [`Next »`](./JSopxDocsMostCommonMarkdown.md)

---



## Table of Contents

- [Overview](#overview)
- [1. Most JSopX™ Docs Starts Life as Static Markdown Documents](#1-most-jsopx-docs-starts-life-as-static-markdown-documents)
  - [1.1. RAW `Markdown` Format for `.md` Documents](#11-raw-markdown-markdown-format-for-md-documents-example)
  - [1.2. RAW `HTML` Format for `.html` Documents](#12-raw-html-markup-format-for-html-documents-example) 
  - [1.3. PREVIEW Output by `.md` or `.html` Documents](#13-preview-output-by-md-or-html-document-format-example)
- [Next Steps](#next-steps)

---

## **Overview**  

JSopX™ Documentation uses a standardized set of documentation formats, file and directory naming conventions, and sections across most documents to maintain consistency, simplify navigation, and enhance the learning experience. 

Rather than piecemealing information, each page (_each document_) follows a familiar blueprint—ranging from the most common includes, like `Custom Breadcrumbs`, `Table of Contents` & `Footers`, to the more direct, `Phases`, introductory `Overviews` and `Prerequisites` to `Corequisites`, `Postrequisites`, `Next Steps` and more. 

This structured approach allows you to quickly orient yourself, identify what’s expected before you begin, understand what complements the content at hand, and anticipate the logical next steps as you progress through the suite.

[`Back to Top`](#table-of-contents)

---

## **1. Most JSopX™ Docs Starts Life as Static `Markdown` Documents**  

Most JSopX™ Documentation starts out as static `Markdown` formatted `.md` Documents, but can just as easily be re-created dynamically via the `JSopX Nova Markdown Builder` (which is often done). 

If you are unfamilar with `Markdown` and/or `.md` documents in general - don't worry. Think of `Markdown` formatted `.md` Documents as the little sisters of `Markup` launguages like `.html` HTML documents. 

Simpler, text-based, documentation-ready formatted documents, `Markdown` formatted `.md` documents are used by many _document readers_ of today, in addition to IDEs like _Visual Studio_, and Source Control Managment platforms like _GitHub_. This is largely due to `Markdown` formated `.md` documents' ability to be served "AS-IS" (i.e, _like a ReadMe.md_) and/or by converting the content into document formats like `.html`, `.pdf`, and `.docx` - more easily than other documentation formats to boot.

For example, lets compare RAW `.md` and `.html` source formatted content and see how the differ, as well as the final, identical, PREVIEW output they both generate.

---

### **1.1. RAW `Markdown` format for `.md` Documents:**

Notice how the **RAW** `Markdown` source format for `.md` documents use a **single-line**, static, text approach to decorating content:


#### Step-by-Step Instructions:


1. _Create_ **`markdown`** RAW source format for sample `.md` document content:

    ```
    ### Heading 3

    I am a paragraph in the Heading 3 section.

    #### Heading 4:1

    I am a paragraph in the First Heading 4 section.

    #### Heading 4:2

    I am a paragraph in the Heading 4:2 section.

    1. Ordered list item in the Heading 4:2 section
    2. Ordered list item in the Heading 4:2 section
    3. Ordered list item in the Heading 4:2 section

    - Unordered list item in the Heading 4:2 section
    - Unordered list item in the Heading 4:2 section
    - Unordered list item in the Heading 4:2 section

    ```
    
2. _Copy_ the `markdown` from _code snippet_ **above** and then _Paste_ it into a **Note Pad**:

    - **Copy** **`markdown`** from _code snippet_ **above**.
    - **Open** **`NotePad`** from _local_ computer. 
    - **Paste** **`markdown`** into _Note Pad_. 

3.  _Save_ **`markdown`** RAW source format for sample `.md` document content:

    - **Click** on `File` and select `Save As`.
    - **Navigate** **`File Explorer`** to a location on your _local_ computer, where you want to save the document for testing. 
    - **Name** **`markdown`** document `ReadMe.md`, using the _Save As_ Dialog, via _**Filename**_ input. 
    - **Choose** **`All Files`** option, using the _Save As_ Dialog, via _**Save As Type**_ drop down. 
    - **Click** `Save`.
    
    
4. _Open_ the `ReadMe.md` in `Visual Studio` (or any form of _markdown_ reader):
    
    - **Right-click** on the `ReadMe.md` **`markdown`** `.md` document, in `Solution Explorer` and select `Visual Studio` as the application you wish to review the document.
    

The `PREVIEW` _Output_ for the `ReadMe.md` below looks like normal content you would find anywhere else in this document. That is what we want.

 
---

### **1.2. RAW `HTML` Format for `.html` Documents:**

Notice how the **RAW** `HTML` source format for `.html` documents use an open-and-close, tag elements approach to decorating content.


#### Step-by-Step Instructions:


1. _Create_ **`HTML`** RAW source format for sample `.html` document content:

    ```html
    <h3>Heading 3</h3>

    <p>I am a paragraph in the Heading 3 section.</p>

    <h4>Heading 4:1</h4>

    <p>I am a paragraph in the First Heading 4 section.</p>

    <h4>Heading 4:2</h4>

    <p>I am a paragraph for the Heading 4:1 section.</p>

    <ul>
       <ol>Ordered list item in the Heading 4:2 section</ol>
       <ol>Ordered list item in the Heading 4:2 section</ol>
       <ol>Ordered list item in the Heading 4:2 section</ol>
    </ul>

    <ul>
       <li>Unordered list item in the Heading 4:2 section</li>
       <li>Unordered list item in the Heading 4:2 section</li>
       <li>Unordered list item in the Heading 4:2 section</li>
    </ul>
    ```
    
2. _Copy_ the `HTML` from _code snippet_ **above** and then _Paste_ it into a **Note Pad**:

    - **Copy** **`HTML`** from _code snippet_ **above**.
    - **Open** **`NotePad`** from _local_ computer. 
    - **Paste** **`HTML`** into _Note Pad_. 

3.  _Save_ **`HTML`** RAW source format for sample `.html` document content:

    - **Click** on `File` and select `Save As`.
    - **Navigate** **`File Explorer`** to a location on your _local_ computer, where you want to save the document for testing. 
    - **Name** **`HTML`** document `index.html`, using the _Save As_ Dialog, via _**Filename**_ input. 
    - **Choose** **`All Files`** option, using the _Save As_ Dialog, via _**Save As Type**_ drop down. 
    - **Click** `Save`.
 
4. _Open_ the `index.html` in `Visual Studio` (or by simply double clicking it):
    
    - **Double Click** on the `index.html` **`HTML`** `.html` document, in `Solution Explorer` and the `index.html` should open organically.  
    - Alternatively, **Right-click** on the `index.html` **`HTML`** `.html` document, in `Solution Explorer` and select `Visual Studio` as the application you wish to review the document. 

---



### **1.3. PREVIEW Output by `.md` or `.html` Documents:**

Notice how the `PREVIEW` _Output_ below looks like normal content you would find anywhere else in this document. That is what we want.


---

### Heading 3

I am a paragraph in the Heading 3 section.

#### Heading 4:1

I am a paragraph in the First Heading 4 section.

#### Heading 4:2

I am a paragraph in the Heading 4:2 section.

1. Ordered list item in the Heading 4:2 section
2. Ordered list item in the Heading 4:2 section
3. Ordered list item in the Heading 4:2 section

- Unordered list item in the Heading 4:2 section
- Unordered list item in the Heading 4:2 section
- Unordered list item in the Heading 4:2 section

---


[`Back to Top`](#table-of-contents)

---

## **2. Most Common Sections (_In Order_)**

Most JSopX™ documents follow a similar pattern of sections. While not all documents use every section, you can generally expect to find the following sections in most documents (and in the order shown):

The order in which sections are created in documents does matter.  

1. [Heading](./JSopxDocsMostCommonSections.md#heading)
2. [Overview Excerpt](./JSopxDocsMostCommonSections.md#overview-excerpt)
3. [Common Alerts](./JSopxDocsMostCommonSections.md#common-alerts)
4. [Custom Document Breadcrumb](./JSopxDocsMostCommonSections.md#custom-document-breadcrumb)
5. [Table of Contents](./JSopxDocsMostCommonSections.md#table-of-contents)
6. [Overview](./JSopxDocsMostCommonSections.md#overview)
7. [Prerequisites](./JSopxDocsMostCommonSections.md#prerequisites)
8. [Corequisites](./JSopxDocsMostCommonSections.md#corequisites)
9. [Main Content Section](./JSopxDocsMostCommonSections.md#most-common-documentation-sections-and-structure)
10. [Postrequisites](./JSopxDocsMostCommonSections.md#postrequisites)
11. [Concomitants](./JSopxDocsMostCommonSections.md#concomitants)
12. [In Conclusion](./JSopxDocsMostCommonSections.md#in-conclusion)
13. [Next Steps](./JSopxDocsMostCommonSections.md#next-steps)
14. [Footer](./JSopxDocsMostCommonSections.md#footer)


[`Back to Top`](#table-of-contents)

---

## **3. Document Section Raw `Markdown`**

When push comes to shove, it is extremely likely that you are viewing **`this`** document in `Markdown` format, if you are viewing this document via `GitHub` or JSopX Visual Studio Project `Docs`. This format is used to create `ReadMe.md` documents.

Nova and I regularly use the [Most Common Sections (_In Order_)](#dsd) listed above, to quickly create & update markdown formatted content and then manufacture a final markdown `.md` document for documentation distribution purposes. 


[`Back to Top`](#table-of-contents)

---

## **4. Document Section `Markdown` Preview**

When push comes to shove, it is extremely likely that you are viewing a document in `Markdown` format, if you are viewing this document via `GitHub` or JSopX Visual Studio Project `Docs`.

Nova and I regularly use the [Most Common Sections (_In Order_)](#dsd) listed above to create & update markdown formatted content and then manufacture a final markdown `.md` document for documentation distribution. 

In fact, we start with something like the [Most Common JSopX™ Document Markdown Example](./JSopxDocsMostCommonMarkdown.md) and implement these structural principles in real-world, `raw` `markdown` format.


[`Back to Top`](#table-of-contents)

---

## **Next Steps**  
1. Proceed to [Most Common JSopX™ Document `Markdown` Example](./JSopxDocsMostCommonMarkdown.md) to see these structural principles applied in a real-world, `markdown` example format.
2. Once finished, you can move on to reviewing the output of the Most Common JSopX™ Document `Markdown` Example. 

[`Introduction`](./ReadMe.md) » **`JSopX™ Docs, Sections & Structure`** · · · [`Back to Top`](#table-of-contents) · · · [`« Previous`](./Alerts.md) [`Next »`](./JSopxDocsMostCommonMarkdown.md)

---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2025 - All Rights Reserved by Jason Silvestri
