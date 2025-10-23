console.log("Script loaded successfully.");

welcomeSpeech();

function welcomeSpeech() {
    //simple prompt to get user's name
    let name = prompt("Enter your name:");

    //greet the user with their name
    document.getElementById("greet-name").innerHTML = `Hello ${name}, `;
}

function validateForm() {
    //get form input value
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    ///check if any fields empty
    if (name === "" || email === "" || message === "") {
        alert("Isi dulu dong kolomnya...");
    }else {
        //show success message
        alert(`Thank you ${name}, for your message!`);
    }
}