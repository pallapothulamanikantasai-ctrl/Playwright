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
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@name=\'txtPassword\']')
    - locator resolved to <input tabindex="2" type="password" class="loginText" name="txtPassword"/>

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - table [ref=e2]:
    - rowgroup [ref=e3]:
      - row [ref=e4]:
        - cell [ref=e5]
        - cell [ref=e7]
  - table [ref=e8]:
    - rowgroup [ref=e9]:
      - row [ref=e10]:
        - cell [ref=e11]:
          - table [ref=e12]:
            - rowgroup [ref=e13]:
              - row [ref=e14]:
                - cell [ref=e15]
                - cell [ref=e16]
                - cell [ref=e17]
                - cell [ref=e18]
                - cell [ref=e19]
                - cell [ref=e20]
  - generic [ref=e21]:
    - table [ref=e22]:
      - rowgroup [ref=e23]:
        - row [ref=e24]:
          - cell [ref=e25]
          - cell [ref=e26]:
            - table [ref=e27]:
              - rowgroup [ref=e28]:
                - row [ref=e29]:
                  - cell [ref=e30]
                  - cell [ref=e31]:
                    - table [ref=e33]:
                      - rowgroup [ref=e34]:
                        - row [ref=e35]:
                          - cell [ref=e36]
                          - cell [ref=e37]
                        - row [ref=e38]:
                          - cell "Login Name :" [ref=e39]
                          - cell [ref=e40]:
                            - textbox [active] [ref=e41]: sureshit
                        - row [ref=e42]:
                          - cell "Password :" [ref=e43]
                          - cell [ref=e44]:
                            - textbox [ref=e45]
                        - row [ref=e46]:
                          - cell [ref=e47]:
                            - button "Login" [ref=e48]
                          - cell [ref=e49]:
                            - button "Clear" [ref=e50]
                        - row [ref=e51]:
                          - cell [ref=e52]
                          - cell [ref=e53]:
                            - strong [ref=e54]
                  - cell [ref=e55]
                  - cell [ref=e57]
                - row [ref=e58]:
                  - cell [ref=e59]
                - row [ref=e60]:
                  - cell [ref=e61]
                - row [ref=e62]:
                  - cell [ref=e63]
                  - cell [ref=e65]
                - row [ref=e66]:
                  - cell [ref=e67]
                  - cell [ref=e68]:
                    - table [ref=e69]:
                      - rowgroup [ref=e70]:
                        - row [ref=e71]:
                          - cell "Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=e72]
                - row [ref=e73]:
                  - cell [ref=e74]
                  - cell [ref=e76]
                - row [ref=e77]:
                  - cell [ref=e78]
                  - cell [ref=e79]
                - row [ref=e80]:
                  - cell [ref=e81]
                  - cell [ref=e82]
                  - cell [ref=e83]
                  - cell [ref=e84]
                  - cell [ref=e85]
                  - cell [ref=e86]
          - cell [ref=e87]
    - table [ref=e88]:
      - rowgroup [ref=e89]:
        - row [ref=e90]:
          - cell [ref=e91]:
            - link "SureshIT" [ref=e92] [cursor=pointer]:
              - /url: "#"
```

# Test source

```ts
  1  | // To provide all the reusable methods
  2  | 
  3  | import { Global } from "./Global";
  4  | export class General extends Global {
  5  | async openApplication() {
  6  | await this.page.goto(this.url);
  7  | console.log("application opened")
  8  | }
  9  | async login(){
  10 |     // await this.page.waitForLoadState("domcontentloaded");
  11 |     await this.page.locator(this.textbox_loginname).fill(this.username);
> 12 |     await this.page.locator(this.textbox_password).fill(this.password);
     |                                                    ^ Error: locator.fill: Test timeout of 30000ms exceeded.
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