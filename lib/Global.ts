import { Page } from '@playwright/test';
export class Global {
constructor (public page: Page) {
}
//test data//
public url : string = "https://sureshitacademy.in/hrms/login.php";
public username : string = "sureshit";
public password : string = "sureshit";
public empfirstname : string = "sureshit";
public emplastname : string = "Academy";

//objects/elements//
public textbox_loginname : string = "//input[@name='txtUserName']";
public textbox_password  : string = "//input[@name='txtPassword']";
public button_login      : string = "//input[@name='Submit']";
public link_logout       : string = "//a[text()='Logout']";
public frame_empInfo     : string = "//iframe[@id='rightMenu']";
public button_add        : string = "//input[@value='Add']";
public textbox_empfirstname : string = "//input[@name='txtEmpFirstName']";
public textbox_emplastname  : string = "//input[@name='txtEmpLastName']";
public button_save          : string = "//input[@id='btnEdit']";
public Search_By            : string = "//select[@name='loc_code']";
public empID                : string = '12478';
public searchfor            : string  = "//input[@id='loc_name']";
public search_button        : string = "//input[@value='Search']";
public edit_button          : string = "//input[@id='btnEditPers']";
public text_middlename      : string = "//input[@id='txtEmpMiddleName']";
public button_save1         : string = "#btnEditPers";
public back_button          : string = "//input[@onclick='goBack()']";
public checkbox             : string = "//input[@name='chkLocID[]'][@type='checkbox']";
public delete_button         : string = "//input[@value='Delete']";


}