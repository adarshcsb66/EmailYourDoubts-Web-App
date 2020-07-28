function sendMessage(msg) {
        Email.send({
        Host: "smtp.gmail.com",
        Username : "fakea9760@gmail.com",
        Password : "maths1234",
        To : 'xyzabcdef694@gmail.com',
        From : "fakea9760@gmail.com",
        Subject : "Doubt",
        Body : msg,
        }).then(
            message => alert("mail sent successfully")
        );
}

function show()
{
    console.log("mail sent");
}

function send()
{
    const msg=document.querySelector('.text-box');
    sendMessage(msg.value);
}