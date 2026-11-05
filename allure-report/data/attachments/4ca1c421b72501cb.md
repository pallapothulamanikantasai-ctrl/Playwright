# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login_Logout.spec.ts >> Login Logout
- Location: tests\Login_Logout.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://sureshitacademy.in/hrms/login.php", waiting until "load"

```

# Test source

```ts
  1  | // To provide all the reusable methods
  2  | 
  3  | import { Global } from "./Global";
  4  | export class General extends Global {
  5  | async openApplication() {
> 6  | await this.page.goto(this.url);
     |                 ^ Error: page.goto: Test timeout of 30000ms exceeded.
  7  | console.log("application opened")
  8  | }
  9  | async login(){
  10 |     // await this.page.waitForLoadState("domcontentloaded");
  11 |     await this.page.locator(this.textbox_loginname).fill(this.username);
  12 |     await this.page.locator(this.textbox_password).fill(this.password);
  13 |     await this.page.locator(this.button_login).click();
  14 | console.log("Login completed");
  15 | }
  16 | async logout() {
  17 | await this.page.locator(this.link_logout).click();
  18 | console.log("Logout completed");
  19 | }
  20 | async addEmployee() {
  21 |     const frame = this.page.frameLocator(this.frame_empInfo);
  22 |     await frame.locator(this.button_add).click();
  23 |     await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
  24 |     await frame.locator(this.textbox_emplastname).fill(this.emplastname);
  25 |     await frame.locator(this.button_save).click();
  26 |     console.log("New Employee added");
  27 | }
  28 | async waitStmt(){
  29 |     await this.page.waitForTimeout(3000); // Wait for 3 seconds
  30 |     console.log("Waited for 3 seconds");
  31 | 
  32 | }
  33 | async editEmp()
  34 | {
  35 |  const frame = this.page.frameLocator(this.frame_empInfo);
  36 |  await frame.locator(this.Search_By).selectOption({ label: "Emp. ID"});
  37 |  await frame.locator(this.searchfor).fill(this.empID);
  38 |  await frame.locator(this.search_button).click();
  39 |  await frame.locator(`a[href*="id=${this.empID}&"]`).click();
  40 | await frame.locator(this.edit_button).click();
  41 | await frame.locator(this.text_middlename).fill("Kumar");
  42 | await frame.locator(this.button_save1).click();
  43 | console.log("Employee details updated");}
  44 | 
  45 | async deleteEmp(){
  46 | const frame = this.page.frameLocator(this.frame_empInfo);
  47 | await frame.locator(this.Search_By).selectOption({ label: "Emp. ID"});
  48 |  await frame.locator(this.searchfor).fill(this.empID);
  49 |  await frame.locator(this.search_button).click();
  50 |  await this.page.waitForTimeout(2000);// wait for 2 seconds to ensure the search results are loaded
  51 | await frame.locator(this.checkbox).check();  
  52 |  await frame.locator(this.delete_button).click();
  53 | console.log("Employee deleted");
  54 | }
  55 | }
```