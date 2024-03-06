const form=document.querySelector("form");
const fullname =document.getElementById("name");
const email =document.getElementById("email");
const phone =document.getElementById("phone");
const subject=document.getElementById("subject");
const  message=document.getElementById("message");



// submit.addEventListener('submit',(e)=>{
// e.preventDefault();
// console.log("Clicked")
// })

function sendEmail(){
    const bodyMessage=`Name: ${fullname.Value}<br>
     Email: ${email.value}<br>
      Phone Number: ${phone.value} <br>
      Subject: ${subject.value}<br>
       Message:${message.value}`;

    Email.send({
        Host:"smtp.elasticemail.com",
        Username: "vinothvkm135@gmail.com",
        Password: "3BC2DAF71A0A33978EC5B1164F5706C78D2F",
        To: "vinothvkm135@gmail.com",
        From:"vinothvkm135@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert("Email sent successfully!")
    );
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
// })
// document.getElementById('emailForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

    // Send email when the form is submitted
    sendEmail();
});