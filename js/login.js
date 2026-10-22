//login page
const openLogin = document.querySelector("#openLogin");
const closeLogin = document.querySelector("#close-login");


//Inside the login page

   //Make it listen to the create account button
createAccount.addEventListener("click", (e) => {
    /*show page*/
    console.log("createAccount page opened");
    e.preventDefault(); /*Prevent the page from reloading */
    openCreateAccount.showModal();
}) 

//
openCreate.addEventListener("click", (e) => {
    /*show page*/
    console.log("openCreate opened");
    e.preventDefault(); /*Prevent the page from reloading */
    grabLogin.showModal();

})  