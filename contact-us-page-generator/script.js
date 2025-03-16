const allContent = [
    `
    <h1>Contact Us Page Generator</h1>
    <input id="web-nam" type="url" placeholder="Facebook URL" required>
    <input id="web-url" type="url" placeholder="Instagram URL" required>
    <input id="email" type="email" placeholder="Email" required>
       <div class="btnz">
                            <input class="gen-btn" onclick="submitbutton()" id="submit-btn" type="submit" value="Submit">                        </div>

     `


]

let formBox = document.getElementById("f-box");
formBox.innerHTML = allContent[0];
const result = document.getElementById("result-box");
const backBtn = document.getElementById("back-btn");
const submitBtn = document.getElementById("submit-btn");
let webName;
let webURL;
let email;
let tamplate_result;

const submitbutton = function(){
    webName = document.getElementById("web-nam").value;
    if(webName == ''){
        webName = 'https://www.cb2learning.com'
    }
    webURL = document.getElementById("web-url").value;
    if(webURL == ''){
        webURL = 'https://www.cb2learning.com'
    }
    email = document.getElementById("email").value;
    formBox.innerHTML = 
    `
    <p>Website Name : ${webName}<p>
    <p>Website URL : ${webURL}</p>
    <p>Email : ${email}</p>
`
    ;

    tamplate_result = `
    

<div style="background-color:#eee; display: flex; justify-content: center;align-items: center;flex-direction: column; width: 100%;"><br><h1 style="text-align: center; font-family: Sans-serif ;color:black;">Contact Us</h1>
<h2 style="text-align: center; font-family: Sans-serif ; font-size: 23px;"> Let's connect with us<br><br>Get in Touch with Us - We're Here to Help!</h2><br>
<div class="iconsz">

    <a href="${webName}"><i class="fa-brands fa-facebook"></i></a>

     <a href="mailto:${email}"><i style="font-size: 2.5rem; margin-bottom: 25px;" class="fa-solid fa-envelope"></i></a>

    <a href="${webURL}"><i class="fa-brands fa-instagram"></i></a>
</div>

<br>
<h3 style="font-family: arial;">
    For any inquiries or assistance, feel free to reach out to us at <b style="color:#0e074b;">" ${email} "</b>. We're happy to help! and if you want to generate your contact us page visit <a href="https://www.cb2learning.com/" target='_blank'>cb2learning</a>
</h3>
</div><br><center><h3 style="color: #0e074b; font-family: Sans-serif ;"><b>Thank You!</b></h3>
<h3 style="color: #0e074b; font-family: Sans-serif ;">We will get back to you soon...</h3>
</center>
<br><br>

    <head>
        <!-- Link to Font Awesome CDN -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <style>
            .iconsz{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.iconsz i{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: black;
    background-color: transparent;
    font-size: 1.3rem;
    padding: 10px;
    border: 2px solid black;
    border-radius: 50%;
    transition: all .40s ease;

}
.iconsz i:hover{
    color: white;
    background-color: #0e074b;
}

        </style>
      </head>
      
      




    
    `
document.querySelector(".result-box").innerHTML = tamplate_result;







}

document.getElementById("copy-result").addEventListener("click",()=>{
    let e = document.getElementById("msg");
    navigator.clipboard.writeText(tamplate_result).then(()=>{
        e.innerHTML = "Copied Sucessfully"
    console.log("Copied to Clipboard");
    
    }).catch(()=>{
    
    console.log("Copied Failed");
    
    
    })
})

