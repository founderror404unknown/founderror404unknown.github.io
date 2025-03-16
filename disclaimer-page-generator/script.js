const allContent = [
    `
    <h1>Disclaimer Page Generator</h1>
    <input id="web-nam" type="text" placeholder="Website Name" required>
    <input id="web-url" type="url" placeholder="Website URL" required>
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
    webURL = document.getElementById("web-url").value;
    email = document.getElementById("email").value;
    formBox.innerHTML = 
    `
    <p>Website Name : ${webName}<p>
    <p>Website URL : ${webURL}</p>
    <p>Email : ${email}</p>
`
    ;
    const date = new Date();
const localDate = date.toISOString().split('T')[0];

    tamplate_result = `

</p><h1>Privacy Policy</h1>
<h1>Disclaimer for ${webName} </h1>
Dated by ${localDate}

<p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at ${email} .</p>

<h2>Disclaimers for ${webName}</h2>

<p>All the information on this website - ${webURL} - is published in good faith and for general information purpose only. ${webName} does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website ${webName}, is strictly at your own risk. ${webName} will not be liable for any losses and/or damages in connection with the use of our website.</p>

<p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>
<p>
This Disclaimer Page is Genrated with <a  target="_blank" href="https://cb2learning.com/?m=1"> cb2learning </a></p>

<p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>

<h2>Consent</h2>

<p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

<h2>Update</h2>

<p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>

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

