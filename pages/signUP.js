const { timeStamp } = require("console");
const { allowedNodeEnvironmentFlags } = require("process");

exports.SignUp = class SignUp{
  
    constructor(page){

        this.page = page;
        this.mainSignUp = page.getByRole('button', { name: 'User Icon Sign Up' })
        this.popSignUp = page.getByRole('link', { name: 'Arrow Sign Up' })
        this.name = page.getByPlaceholder('Enter Your name')
        this.email = page.getByPlaceholder('Enter Your Email')
        this.phoneNumber =  page.locator('input[type="tel"]')
        this.password = page.getByPlaceholder('Enter your password')
        this.repeatPassowrd = page.getByPlaceholder('Repeat your password');
        this.selectCurrency = page.getByLabel('Default select example');
        this.buyPrice = page.getByPlaceholder('Enter purchase amount');
        this.receiveEmail = page.getByLabel('I agree to receive email');
        this.terms = page.getByLabel('I agree to the Terms and');
        this.submit = page.getByRole('button', { name: 'Arrow Create account' })

    }

    async gotoURL(){

        await this.page.goto('https://intelmarketspresale.com');
    }
    
    async getSignUp(){
        
        await this.mainSignUp.click();

        await this.popSignUp.click();

        await this.name.fill('Hecker');

        

        await this.email.fill(createRandomString())

        console.log(createRandomString())

        await this.phoneNumber.fill('321-4928618')

        await this.password.fill('12345')

        await this.repeatPassowrd.fill('12345')

        await this.selectCurrency.selectOption('btc');

        await this.buyPrice.fill('5');

        await this.receiveEmail.check();

        await this.terms.check();
        
        await this.submit.click();
    }

    
      
}

function createRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    result  = result + '@gmail.com'
    return result;
  }