import {test} from '@playwright/test';
import { General } from '../lib/General';

test('AddEmployye', async ({ page }) =>
{
    let obj = new General(page);
    await obj.openApplication();
    await obj.login();
    await obj.waitStmt();
    await obj.addEmployee();
    await obj.waitStmt();
    await obj.logout();
    await obj.waitStmt();




});