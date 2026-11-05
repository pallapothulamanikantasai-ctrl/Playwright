// To provide all the reusable methods

import { Global } from "./Global";
export class General extends Global {
async openApplication() {
await this.page.goto(this.url);
console.log("application opened")
}
async login(){
    // await this.page.waitForLoadState("domcontentloaded");
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
console.log("Login completed");
}
async logout() {
await this.page.locator(this.link_logout).click();
console.log("Logout completed");
}
async addEmployee() {
    const frame = this.page.frameLocator(this.frame_empInfo);
    await frame.locator(this.button_add).click();
    await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
    await frame.locator(this.textbox_emplastname).fill(this.emplastname);
    await frame.locator(this.button_save).click();
    console.log("New Employee added");
}
async waitStmt(){
    await this.page.waitForTimeout(3000); // Wait for 3 seconds
    console.log("Waited for 3 seconds");

}
async editEmp()
{
 const frame = this.page.frameLocator(this.frame_empInfo);
 await frame.locator(this.Search_By).selectOption({ label: "Emp. ID"});
 await frame.locator(this.searchfor).fill(this.empID);
 await frame.locator(this.search_button).click();
 await frame.locator(`a[href*="id=${this.empID}&"]`).click();
await frame.locator(this.edit_button).click();
await frame.locator(this.text_middlename).fill("Kumar");
await frame.locator(this.button_save1).click();
console.log("Employee details updated");}

async deleteEmp(){
const frame = this.page.frameLocator(this.frame_empInfo);
await frame.locator(this.Search_By).selectOption({ label: "Emp. ID"});
 await frame.locator(this.searchfor).fill(this.empID);
 await frame.locator(this.search_button).click();
 await this.page.waitForTimeout(2000);// wait for 2 seconds to ensure the search results are loaded
await frame.locator(this.checkbox).check();  
 await frame.locator(this.delete_button).click();
console.log("Employee deleted");
}
}