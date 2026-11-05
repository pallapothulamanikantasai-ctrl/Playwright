// to provide actual automation scripts

import { test } from '@playwright/test';
import { General } from '../lib/General';
import { Global } from '../lib/Global';
test ('Login Logout', async({ page }) =>{
    let obj = new General( page )
    await obj.openApplication();
    await obj.waitStmt();
    await obj.login();
    await obj.logout();
});