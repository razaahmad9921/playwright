const { timeStamp } = require("console");
const { allowedNodeEnvironmentFlags } = require("process");

exports.Login = class Login{

    constructor(page){

        this.page = page;
        this.mainSignUp = page.getByRole('button', { name: 'User Icon Sign Up' })
        this.popLogin = page.getByRole('button', { name: 'Arrow Login' })
        this.email = page.getByPlaceholder('Enter Your Email')
        this.password = page.getByPlaceholder('Enter your password')
        this.checkRemember = page.getByText('Remember me')
        this.submit = page.getByRole('button', { name: 'Login Arrow' })

    }

    async gotoURL(){

        await this.page.goto('https://intelmarketspresale.com');
    }
    
    async getLogin(){
        
        await this.mainSignUp.click();

        await this.popLogin.click();

        await this.email.fill('g@gmail.com')

        await this.password.fill('12345')

        await this.checkRemember.check();
        
        await this.submit.click();

        console.log('ss');
    }

    
      
}
