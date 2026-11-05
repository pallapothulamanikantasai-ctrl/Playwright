import {General} from '../lib/General';
import {test} from '@playwright/test';

test('editemp', async ({ page }) => {
    let obj = new General(page);
    await obj.openApplication();
    await obj.login();
    await obj.editEmp();
    await obj.waitStmt();
    await obj.logout();
    await obj.waitStmt();
});
