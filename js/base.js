/* Grab element by Ids*/

const openLogin = document.querySelector("#openLogin");
const grabLogin = document.querySelector("#login-page");

openLogin.addEventListener("click", (e) => {
    /*show page*/
    console.log("Event initiated");
    e.preventDefault(); /*Prevent the page from reloading */
    grabLogin.showModal();

})
