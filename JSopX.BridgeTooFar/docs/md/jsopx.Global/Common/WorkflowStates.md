# JSopX™ Enterprise-Level Solution — Workflow States (v1)

The **Jason Silvestri Open Project EXperiences (JSopX™) JSopX™** Enterprise-Level Solution is a modular SaaS architecture designed to provide comprehensive health management services. We use `Workflow States` to managed the state of steps, processes, actions, entities, and more, throughout the JSopX™ eco system.

We use `Junction Rules with Halos{}` to manage **deterministic** and **provenance** throughout the JSopX™ eco system.

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Common`] » **[`Workflow States`]** ··· [`Junction Rules`]

---
 
### Table of Contents

1. [Created](#created)
2. [Queued](#queued)
3. [In Progress](#in-progress)
4. [Waiting](#waiting)
5. [Passed](#passed)
6. [Failed](#failed)
7. [Rejected](#rejected)
8. [Cancelled](#cancelled)
9. [Skipped](#skipped)
10. [Timeout](#timeout)
11. [Network Error](#network-error)
12. [Validation Error](#validation-error)
13. [Retrying](#retrying)
14. [Blocked](#blocked)
15. [Completed](#completed)
16. [To Do](#to-do)
17. [Started](#started)
18. [Pending](#pending)
19. [Expired](#expired)
20. [Approved](#approved)
21. [Sent](#sent)
22. [Received](#received)
23. [Under Review](#under-review)
24. [Soft Delete](#soft-delete)
25. [Hard Delete](#hard-delete)
26. [Unknown](#unknown)
27. [Null or Empty](#null-or-empty)
28. [Active](#active)

---

## Workflow States Table

| ID  | Workflow State | Condensed Description                                                 |
|:----|:---------------|:----------------------------------------------------------------------|
| `1` | [`CREATED`] | A step, process, action or entity that has been created. |
| `2` | [`QUEUED`] | A step, process, action or entity that has begun. |
| `3` | [`IN PROGRESS`] | A step, process, action or entity that is in progress. |
| `4` | [`WAITING`] | A step, process, action or entity that has begun, but is waiting for a response. |
| `5` | [`PASSED`] | A step, process, action or entity that has passed all tests. |
| `6` | [`FAILED`] | A step, process, action or entity that ended unsuccessfully. |
| `7` | [`REJECTED`] | A step, process, action or entity that was denied or not approved. |
| `8` | [`CANCELLED`] | A step, process, action or entity that was cancelled. |
| `9` | [`SKIPPED`] | A step, process, action or entity that was bypassed. |
| `10` | [`TIMEOUT`] | A step, process, action or entity that ended unsuccessfully due to timeout. |
| `11` | [`NETWORK ERROR`] | A step, process, action or entity that ended unsuccessfully due to a network error. |
| `12` | [`VALIDATION ERROR`] | A step, process, action or entity that ended unsuccessfully due to a validation error. |
| `13` | [`RETRYING`] | A step, process, action or entity that ended unsuccessfully after retrying. |
| `14` | [`BLOCKED`] | A step, process, action or entity that was blocked. |
| `15` | [`COMPLETED`] | A step, process, action or entity that finished successfully. |
| `16` | [`TO DO`] | A step, process, action or entity that has not been started yet. |
| `17` | [`STARTED`] | A step, process, action or entity that has begun. |
| `18` | [`PENDING`] | A step, process, action or entity that is waiting for further action. |
| `19` | [`EXPIRED`] | A step, process, action or entity that timed out before completion. |
| `20` | [`APPROVED`] | A step, process, action or entity that received approval. |
| `21` | [`SENT`] | A step, process, action or entity that was transmitted outward. |
| `22` | [`RECEIVED`] | A step, process, action or entity that was accepted or delivered. |
| `23` | [`UNDER REVIEW`] | A step, process, action or entity that is being evaluated. |
| `24` | [`SOFT DELETE`] | A step, process, action or entity that was marked deleted, but retained historically. |
| `25` | [`HARD DELETE`] | A step, process, action or entity that marked deleted and can be removed permanently. |
| `26` | [`UNKNOWN`] | The outcome of a step, process or action that is undefined. |
| `27` | [`NULL OR EMPTY`] | A step, process, action or entity that returned nothing or no result. |
| `28` | [`ACTIVE`] | A step, process, action or entity that is currently active. |

> These Workflow States can change at anytime. 

[`⇧ Back to Top`]

---

### Created

This workflow state occurs when a process or action has been created.  
- **Developer Use:** Persisted in databases as an enum to indicate a task has been created; used in workflow logs to mark initial transaction entries.  
- **Business Use:** Indicates a request or action is in motion but not yet reviewed.  

**Usage Examples:**  
- Marking a customer order as `Started` once payment validation begins.  
- Recording a background job as `Started` in a task scheduler.  

[`⇧ Back to Top`]

---

### Queued

This state indicates that a step, process, or action has been submitted and is waiting for available resources to begin execution.
- **Developer Use:** Stored as an entry in a message queue (e.g., RabbitMQ, Kafka) or a task scheduler database, awaiting pickup by a worker process.
- **Business Use:** Provides visibility into the backlog of work and helps manage expectations regarding processing times; a key metric for service level agreements (SLAs).

**Usage Examples:**
- A video processing job added to a queue awaiting an available GPU server.
- An email campaign marked as `QUEUED` until the scheduled send time is reached.

[`⇧ Back to Top`]

---

### In Progress

This workflow state signifies that the process or action is actively executing and has not yet reached a final or waiting state.
- **Developer Use:** Used to lock records during processing to prevent concurrent updates; updated frequently in logs to show liveness of a long-running task.
- **Business Use:** Allows stakeholders to track which items are actively being worked on and monitor overall system throughput.

**Usage Examples:**
- A data migration script is currently `IN PROGRESS` in a server log.
- A user account status is set to `IN PROGRESS` during the multi-step onboarding flow.

[`⇧ Back to Top`]

---

### Waiting

This state occurs when an active process has paused its own execution and is waiting for an external response, input, or dependency to be met.
- **Developer Use:** Often implemented using asynchronous programming patterns, where the current thread yields until a callback or signal is received.
- **Business Use:** Helps identify external bottlenecks in a workflow, clarifying that the internal system is not at fault for delays.

**Usage Examples:**
- An API call is `WAITING` for a response from a third-party payment provider.
- A workflow step is `WAITING` for a user to upload a required document.

[`⇧ Back to Top`]

---

### Passed

This state indicates a specific check, test, or condition within a workflow has been met successfully.
- **Developer Use:** Commonly used in continuous integration/continuous deployment (CI/CD) pipelines to mark unit tests or security scans as successful, allowing the pipeline to proceed.
- **Business Use:** Provides confirmation that quality gates have been satisfied and that the process meets required standards.

**Usage Examples:**
- An automated credit check `PASSED` during a loan application process.
- All code quality tests `PASSED` in a nightly build report.

[`⇧ Back to Top`]

---

### Cancelled

This state occurs when a process or action is terminated prematurely by a user, system, or defined business rule.
- **Developer Use:** Triggers necessary cleanup operations or transaction rollbacks to return the system to a consistent state; requires robust error handling to manage mid-process termination.
- **Business Use:** Used to manage user requests for termination or to halt processes that are no longer valid, such as cancelling a fraudulent order.

**Usage Examples:**
- A customer `CANCELLED` an order before it was shipped.
- A background data sync job was `CANCELLED` by a system administrator.

[`⇧ Back to Top`]

---

### Timeout

This state signifies that a process ended unsuccessfully because it exceeded the maximum allowed time for execution or response.
- **Developer Use:** Essential for preventing indefinite resource consumption; often triggers an alert or a retry mechanism after failure.
- **Business Use:** Guarantees that system processes adhere to performance SLAs and fail gracefully rather than hanging indefinitely.

**Usage Examples:**
- An API request to an external service `TIMEOUT` after 30 seconds.
- A database query was terminated by the system because it hit a 60-second `TIMEOUT` limit.

[`⇧ Back to Top`]

---

### Network Error

This state captures a failure specifically caused by an inability to communicate over a network connection.
- **Developer Use:** Used to distinguish connectivity problems from application logic errors; often handled with specific retry logic that accounts for transient network issues.
- **Business Use:** Helps support teams diagnose issues related to connectivity or infrastructure rather than application bugs.

**Usage Examples:**
- An e-commerce checkout failed due to a `NETWORK ERROR` connecting to the payment gateway.
- A data synchronization job failed because the remote server was unreachable due to a `NETWORK ERROR`.

[`⇧ Back to Top`]

---

### Validation Error

This state occurs when data provided does not meet the required format, constraints, or business rules, preventing the process from continuing successfully.
- **Developer Use:** Returned to the client or user interface to prompt correction of input data; prevents bad data from corrupting the database or downstream systems.
- **Business Use:** Ensures data integrity and compliance with business rules; clearly defines why an input was unacceptable.

**Usage Examples:**
- A user registration form returned a `VALIDATION ERROR` because the email address format was invalid.
- An API payload failed to process because a required field was missing, resulting in a `VALIDATION ERROR`.

[`⇧ Back to Top`]

---

### Retrying

This is an intermediate state for processes that have failed transiently and are automatically attempting to run again.
- **Developer Use:** Part of a resilient system design pattern (e.g., exponential backoff) used to handle temporary failures without manual intervention.
- **Business Use:** Provides transparency that the system is actively working to resolve an intermittent issue without flagging a permanent `FAILED` status.

**Usage Examples:**
- A background job that temporarily lost a database connection is now `RETRYING`.
- An email dispatch service that failed the first attempt is currently `RETRYING` delivery.

[`⇧ Back to Top`]

---

### Blocked

This state indicates that the process cannot proceed due to an external dependency or constraint that must be resolved manually or by another system action.
- **Developer Use:** Often requires an administrator override or resolution of a dependency before the process can be manually transitioned to an active state.
- **Business Use:** Highlights items that require intervention from a human operator or resolution of a compliance issue before work can continue.

**Usage Examples:**
- A user account is `BLOCKED` pending identity verification documents.
- A software deployment pipeline is `BLOCKED` because a critical security vulnerability was detected.

[`⇧ Back to Top`]

---

### Started

This workflow state occurs when a process or action has been initiated.  
- **Developer Use:** Persisted in databases as an enum to indicate a task has begun; used in workflow logs to mark initial transaction entries.  
- **Business Use:** Indicates a request or action is in motion but not yet reviewed.  

**Usage Examples:**  
- Marking a customer order as `Started` once payment validation begins.  
- Recording a background job as `Started` in a task scheduler.  

[`⇧ Back to Top`]

---

### Skipped

A process was intentionally bypassed.  
- **Developer Use:** Logged to prevent duplicate actions in automation or short-circuit unnecessary pipeline steps.  
- **Business Use:** Documents efficiency when redundant tasks are avoided.  

**Usage Examples:**  
- Skipping a workflow step because a report is already generated.  
- Ignoring a batch job step when pre-conditions are unmet.  

[`⇧ Back to Top`]

---

### Pending

A process is waiting for external input or approval.  
- **Developer Use:** Stored as a queued job in APIs or message brokers.  
- **Business Use:** Clarifies that responsibility lies with another actor.  

**Usage Examples:**  
- Pending HR approval before onboarding a new employee.  
- API job pending completion of a third-party callback.  

[`⇧ Back to Top`]

---

### Expired
This state occurs when a process times out.  
- **Developer Use:** Captures session timeouts, SLA violations, or expired tokens.  
- **Business Use:** Highlights compliance deadlines that passed without resolution.  

**Usage Examples:**  
- A password reset link expiring after 24 hours.  
- Workflow approval request expiring after an SLA period.  

[`⇧ Back to Top`]

---

### Rejected
Indicates denial of a process after review.  
- **Developer Use:** Stored in approval engines or API response states.  
- **Business Use:** Enforces authority chains and provides audit history.  

**Usage Examples:**  
- Rejected loan application by underwriting.  
- Rejected code pull request in GitHub.  

[`⇧ Back to Top`]

---

### Failed
Captures unsuccessful process completion.  
- **Developer Use:** Logged for retries, alerts, or error escalation.  
- **Business Use:** Signals systemic or process issues to be addressed.  

**Usage Examples:**  
- Database transaction failure rolled back.  
- Payment gateway failure during checkout.  

[`⇧ Back to Top`]

---

### Approved
Marks process as validated and authorized.  
- **Developer Use:** Used in workflow gates requiring supervisory checks.  
- **Business Use:** Reflects governance and approval chains.  

**Usage Examples:**  
- Approved PTO request in HR system.  
- Approved budget allocation in finance workflows.  

[`⇧ Back to Top`]

---

### Completed
Represents successful execution.  
- **Developer Use:** Used to close workflow logs and trigger follow-ups.  
- **Business Use:** Signifies closure with no further action required.  

**Usage Examples:**  
- Order marked completed after shipment is delivered.  
- Automation pipeline marking a build completed.  

[`⇧ Back to Top`]

---

### To Do
Represents a step, process, action or entity that still needs to be started.  
- **Developer Use:** Used to keep track of what still needs to be done.  
- **Business Use:** Signifies status on items that are still required.  

**Usage Examples:**  
- Order marked to-do means someone hasn't even started yet.  
- Automation pipeline my bottleneck.  

[`⇧ Back to Top`]

---

### Sent
Signals outbound communication.  
- **Developer Use:** Stored to confirm dispatch of emails, messages, or API payloads.  
- **Business Use:** Provides proof of dispatch for compliance.  

**Usage Examples:**  
- Sent confirmation email for order processing.  
- Outbound webhook sent to a partner system.  

[`⇧ Back to Top`]

---

### Received
Captures confirmation of delivery.  
- **Developer Use:** Logged as final delivery status.  
- **Business Use:** Provides assurance of message receipt.  

**Usage Examples:**  
- Received webhook acknowledgment from partner.  
- Package delivery confirmation received in tracking system.  

[`⇧ Back to Top`]

---

### Under Review
A process is actively being evaluated.  
- **Developer Use:** Stored as intermediate state in workflows.  
- **Business Use:** Used in audits, legal checks, or staged approvals.  

**Usage Examples:**  
- Compliance review in progress for regulatory filing.  
- Pull request under review before merge.  

[`⇧ Back to Top`]

---

### Soft Delete
Marks an item deleted but not erased.  
- **Developer Use:** Record remains with `isDeleted=true` for recovery or audit.  
- **Business Use:** Meets record retention requirements while hiding from end users.  

**Usage Examples:**  
- Soft-deleted user account in SaaS app.  
- Archived invoice retained for compliance.  

[`⇧ Back to Top`]

---

### Hard Delete
Represents permanent deletion.  
- **Developer Use:** Ensures full removal from persistence layers.  
- **Business Use:** Fulfills GDPR or similar “right to be forgotten.”  

**Usage Examples:**  
- Customer data hard-deleted on account closure.  
- Test data permanently deleted after project closeout.  

[`⇧ Back to Top`]

---

### Unknown
Indicates undefined or indeterminate outcome.  
- **Developer Use:** Used for error handling or placeholder in APIs.  
- **Business Use:** Flags ambiguity until clarified.  

**Usage Examples:**  
- Unknown status returned by an unstable API.  
- Workflow state unknown due to incomplete logs.  

[`⇧ Back to Top`]

---

### Null or Empty
Represents no data result.  
- **Developer Use:** Used when queries return no records.  
- **Business Use:** Clarifies distinction between “no result” vs. “error.”  

**Usage Examples:**  
- Empty search result in database.  
- Null response from external system query.  

[`⇧ Back to Top`]

---

### Active
Represents a live or current process.  
- **Developer Use:** Tracks running sessions or jobs.  
- **Business Use:** Denotes customers, workflows, or records currently in effect.  

**Usage Examples:**  
- Active customer subscription.  
- Active job instance running in scheduler.  

[`⇧ Back to Top`]

---

[`Home`] » [`JSopX.BridgeTooFar`] » [`Common`] » **[`Workflow States`]** ··· [`Junction Rules`] ··· [`⇧ Back to Top`]

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
[`<https://github.com/JasonSilvestri/JSopX>`]: https://github.com/JasonSilvestri/JSopX "JSopX™ Enterprise-Level Solution SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Core>`]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.ML>`]: https://github.com/JasonSilvestri/JSopX.ML "JSopX™ ML SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Halos>`]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.WebApi>`]: https://github.com/JasonSilvestri/JSopX.WebApi "JSopX™ WebAPI SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Data>`]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Vault>`]: https://github.com/JasonSilvestri/JSopX.Vault "JSopX™ Vault SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Presentation>`]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Utilities>`]: https://github.com/JasonSilvestri/JSopX.Utilities "JSopX™ Utilities SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Unitx>`]: https://github.com/JasonSilvestri/JSopX.Unitx "JSopX™ Unit Testing SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.SaaS>`]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.Titrate>`]: https://github.com/JasonSilvestri/JSopX.Titrate "JSopX™ MAUI Titrate SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.EndGame>`]: https://github.com/JasonSilvestri/JSopX.EndGame "JSopX™ MAUI End Game SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.HealthTracker>`]: https://github.com/JasonSilvestri/JSopX.HealthTracker "The Original JSopX™ Maui SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.Maui.MPA>`]: https://github.com/JasonSilvestri/JSopX.Maui.MPA "The Original JSopX™ Maui Multi App SaaS Project by Mark"
[`<https://github.com/JasonSilvestri/JSopX.BridgeTooFar>`]: https://github.com/JasonSilvestri/JSopX.BridgeTooFar "JSopX™ Document Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.CRM>`]: https://github.com/JasonSilvestri/JSopX.CRM "JSopX™ Customer Relationship Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.PLM>`]: https://github.com/JasonSilvestri/JSopX.PLM "JSopX™ Product Lifecycle Management SaaS Project"
[`<https://github.com/JasonSilvestri/JSopX.AngularCore>`]: https://github.com/JasonSilvestri/JSopX.AngularCore "JSopX™ Angular Core consumption SaaS Example Project"

<!-- Short Form External GitHub Repository Links of all JSopX™ Enterprise-Level Solution SaaS Projects -->
[JSopX GitHub]: https://github.com/JasonSilvestri/JSopX "JSopX™ Enterprise-Level Solution SaaS Project"
[JSopX.Core GitHub]: https://github.com/JasonSilvestri/JSopX.Core "JSopX™ Core SaaS Project"
[JSopX.Data GitHub]: https://github.com/JasonSilvestri/JSopX.Data "JSopX™ Data SaaS Project"
[JSopX.ML GitHub]: https://github.com/JasonSilvestri/JSopX.ML "JSopX™ ML SaaS Project"
[JSopX.Halos GitHub]: https://github.com/JasonSilvestri/JSopX.Halos "JSopX™ Halos SaaS Project"
[JSopX.WebApi GitHub]: https://github.com/JasonSilvestri/JSopX.WebApi "JSopX™ Web API SaaS Project"
[JSopX.Vault GitHub]: https://github.com/JasonSilvestri/JSopX.Vault "JSopX™ Vault SaaS Project"
[JSopX.Presentation GitHub]: https://github.com/JasonSilvestri/JSopX.Presentation "JSopX™ Presentation SaaS Project"
[JSopX.Utilities GitHub]: https://github.com/JasonSilvestri/JSopX.Utilities "JSopX™ Utilities SaaS Project"
[JSopX.Unitx GitHub]: https://github.com/JasonSilvestri/JSopX.Unitx "JSopX™ Unit Testing SaaS Project"
[JSopX.SaaS GitHub]: https://github.com/JasonSilvestri/JSopX.SaaS "JSopX™ SaaS Project"
[JSopX.Titrate GitHub]: https://github.com/JasonSilvestri/JSopX.Titrate "JSopX™ MAUI Titrate SaaS Project"
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
[JSopX.Utilities]: /JSopX.BridgeTooFar/docs/md/JSopX.Utilities/README.md "JSopX™ Utilities SaaS Project"
[JSopX.Unitx]: /JSopX.BridgeTooFar/docs/md/JSopX.Unitx/README.md "JSopX™ Unit Testing SaaS Project"
[JSopX.SaaS]: /JSopX.BridgeTooFar/docs/md/JSopX.SaaS/README.md "JSopX™ SaaS Project"
[JSopX.Titrate]: /JSopX.BridgeTooFar/docs/md/JSopX.Titrate/README.md "JSopX™ MAUI Titrate SaaS Project"
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
[JSopX.Utilities (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxutilities "JSopX™ Utilities SaaS Project"
[JSopX.Unitx (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxunitx "JSopX™ Unit Testing SaaS Project"
[JSopX.SaaS (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxsaas "JSopX™ SaaS Project"
[JSopX.Titrate (v 1.0)]: /JSopX.BridgeTooFar/docs/md/JSopX.Global/Solutions/README.md#-jsopxtitrate "JSopX™ MAUI Titrate SaaS Project"
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