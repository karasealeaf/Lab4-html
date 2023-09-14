console.log("Hey");

function greet () {
    let username = prompt ("What is your name?");
    document.write("Hello " + username);
}

function askTime() {
    let time = prompt("What is the time?");
    let message;

   if (time <= 11) {
    message = "Good Morning!";
   } else if (time <= 17) {
    message = "Good Afternoon!";
   } else if (time < 24); {
    message = "Good Evening!";
   } document.write(message);  

}
