//Grab the login email and password 
const grabLoginEmail = document.querySelector("#loginInputEmail");
const grabhLoginPassword = document.querySelector("#loginInputPassword");

const loginButton = document.querySelector("#login-button")

//Grab paragraph 
const feedbackContainer = document.querySelector("#loginFeedbackHolder");
//We want to grab these inputs, and compare it in a foreach if it matches

//We have to fetch the data here, reusing code from createAccount

//Get the JSON

//This is not needed as it was created in the create account page already, will be removed later 
/*
try{
    getAccount= localStorage.getItem("account");
    console.log("Grabbed Account JSON: ", getAccount);
    console.log("getAccount length")
    //Check if the JSON is empty
    if(getAccount!=null){
        //Parse/Convert the JSON and assign it to Account
        console.log("Grabbed accounts");
        Account = JSON.parse(getAccount);
        console.log(Account);
    }
    console.log("Account:", Account);
}catch(error){
    //If the JSON data is not valid json format
    if(error.name===SyntaxError){
        console.log("Saved account data is not valid JSON format");

    }else{
        //If any other unknown error has occured, throw the specific error so that the user can google it
        console.log("Some other unknown error has occured!", error.message);

    }
    
}

AccountID = Account.length;
console.log("Accounts in store right now", AccountID);*/

//Debugging, finding a way to also record the button enter
/*window.addEventListener("keydown", (e)=>{
    console.log("Pressed button", e);
})
window.addEventListener("click", (e)=>{
    console.log("Clicked target", e);
})*/
//Listen when the login button is clicked or when the enter button is pressed 
window.addEventListener("keydown", (e)=>{
    if(e.key==="Enter"){
        console.log("enter key has been entered");
        //Run main function
        checkForAccount(Account, grabLoginEmail.value, grabhLoginPassword.value);

    }
})
window.addEventListener("click", (e)=> {
    if(e.target.matches("button#login-button")){
        console.log("button has been clicked");
        //Run the function, and return if an user with matching email and password is found
        checkForAccount(Account, grabLoginEmail.value, grabhLoginPassword.value);

    }
})

function checkForAccount (Account, email, password){
    //Check inside Account for each array if any user has matching email and password with the input email and password
    let i=0;
    Account.forEach(user => {
        console.log("Iterations: ", i);
        if(user.email === email && user.password === password){
            //Log out that account was not found
            //What values to return? The AccountID!
            console.log("This user has been found: ",user.email);
            feedbackContainer.textContent="Account found!";
            feedbackContainer.classList.add("comfirm");
            //return user.length;
            return;

        }else{
            //Log out that account was not found!
            console.log("Account was not found!");
            feedbackContainer.textContent="Account not found!";
            feedbackContainer.classList.add("warning");

        }
        i++;
    })
}



