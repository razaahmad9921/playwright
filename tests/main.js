const { test, expect } = require('@playwright/test');
const {SignUp} = require( '../pages/signUP');
const {Login} = require( '../pages/login');
test('Mainfunction', async({page})=>{

    const home = new SignUp(page);

    await home.gotoURL();

    await home.getSignUp();

    
    
});