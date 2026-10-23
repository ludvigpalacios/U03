//Create an array that saves 
//Create all 3 variables that are gonnan be stored
/* const username = "";
const email = "";
const password = ""; 

const Account = {username, email, password};  */



//const Account= []; //Create multiple accounts
//Read the JSON if there's any and save it in an Array, Account.
let Account=[];
//Get the JSON
let getAccount=null;

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

let i=0;
Account.forEach(index => {
    
    console.log(`Account ${i} username:  ${index.username}`);
    console.log(`Account ${i} email:  ${index.email}`);
    console.log(`Account ${i} password:  ${index.password}`);
    i++;
})

let AccountID = Account.length;
console.log("Accounts in store right now", AccountID);

//Add an statement if the length of Account is zero, set the Account to an array.
if(Account===!null || Account.length===0){
    AccountID = Account.length
    console.log("Read JSON, the Account: ", Account);
    console.log("AccountID:", AccountID);

}



//Listen when the Create button is clicked
const grabUser=document.querySelector("#playerUser");
const grabEmail=document.querySelector("#createEmail");
const grabPassword=document.querySelector("#createPassword");

const createAccountBtn=document.querySelector("#createAccount-button");

//When we click on the button, we want to store these values somehow 

createAccountBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //Debugging
    /*console.log(grabUser.value);
    console.log(grabEmail.value);
    console.log(grabPassword.value);*/

    //Everytime we press create account, save the account in the said Array
    //Create an condition where it checks if the input was empty 
    if(grabUser.value=== "" || grabEmail.value== "" || grabPassword.value===""){
        console.log("Empty!");
        return;
        
    }else if(grabPassword.value.length<6){
        console.log("Password is too small, it must be 6 characters minimum!");
        return;
        //If the password isn't at least 6 length throw and error 
        //Use a try catch later here 


    }else{
        const [username,email, password]= [grabUser.value, grabEmail.value, grabPassword.value];
        Account [AccountID] = {username, email, password};

    }
    
    //Log the results
    console.log(`User ${AccountID} created!`);
    logAccount(Account);    

    //We want to turn this into JSON 
    const accountAsJSON=JSON.stringify(Account);
    //Save the JSON in local storage 127.0.0.1
    localStorage.setItem("account", accountAsJSON);
    AccountID++;
    console.log("Accounts stored now:", AccountID);

})

function grabAccount(Account){


}

function logAccount(Users){
    Users.forEach(Account => {
        //Iterate through every account 
        //Now iterate through all the values of each account
        const AccountValues= Object.values(Account);

        AccountValues.forEach(data => {
            console.log("info:", data);
        })

    })

}

