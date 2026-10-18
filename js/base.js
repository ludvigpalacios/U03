/* Grab element by Ids*/

const openLogin = document.querySelector("#openLogin");
const grabLogin = document.querySelector("#login-page");
const closeLogin = document.querySelector("#close-login");

openLogin.addEventListener("click", (e) => {
    /*show page*/
    console.log("Event initiated");
    e.preventDefault(); /*Prevent the page from reloading */
    grabLogin.showModal();

}) 

closeLogin.addEventListener("click", ()=> {
    grabLogin.close();
    console.log("")
})
