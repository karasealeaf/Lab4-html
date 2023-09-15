console.log("Welcome!")

function getRating () {
    let rating = prompt ('Rate my website between 1-5', '5');

    for (let i = 0; i < rating; i++) {
        document.write ("<img class='star' src='./images/star.png'/>")
    }
}
console.log("Hey");

function greet () {
    let username = prompt ("What is your name?");
    document.write("Hello " + username);
}

function askTime() {
    let time = prompt("What is the time?");
    let message;

   if (time <= 11) {
    message = "Good Morning, how are you?";
   } else if (time <= 17) {
    message = "Good Afternoon, how are you?";
   } else if (time < 23) {
    message = "Good Evening, how are you?";
   } document.write(message);  

}
