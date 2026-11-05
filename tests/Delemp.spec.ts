import { test, expect } from '@playwright/test';
import { General } from '../lib/General';

test('delemp', async ({ page }) => {
    let obj = new General(page);
    await obj.openApplication();
    await obj.login();
    await obj.deleteEmp();
    await obj.waitStmt();
    await obj.logout();
    await obj.waitStmt();
});