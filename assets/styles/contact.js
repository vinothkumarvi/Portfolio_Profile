const name =document.getElementById("name");
const email =document.getElementById("email");
const phone =document.getElementById("phone");
const subject=document.getElementById("subject");
const  message=document.getElementById("message");

const submit=document.getElementsByClassName("Form-Contact")[0];

submit.addEventListener('submit',(e)=>{
e.preventDefault();
console.log("Clicked")
})

// function sendEmail(){
//     Email.send({
//         Host:"smtp.gmail.com",
//         Username: "vinothvkm135@gmail.com",
//         Password: "vinoth123",
//         To: "kingvkm135@gmail.com",
//         From: document.getElementById("email").value,
//         Subject: document.getElementById("subject").value,
//         Body: document.getElementById("message").value
//     }).then(
//         message => alert("Email sent successfully!")
//     );
// }

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Send email when the form is submitted
    sendEmail();
});