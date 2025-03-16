const allContent = [
    `
    <h1>About Us Page Generator</h1>
    <input id="aur-nam" type="text" placeholder="Aurthor Name" required>
     <input id="web-nam" type="text" placeholder="Website Name" required>
     <input id="web-url" type="text" placeholder="Your Content Topic" required>
     <input class="gen-btn" id="next-btn" onclick="nextbutton()" type="submit" value="Next">

     `,
     `
                         <h1>About Us Page Generator</h1>
                         <input  id="country" type="text" placeholder="Line About Topic" required>
                         <input  id="address" type="text" placeholder="City / Address" required>
                         <input id="email"  type="email" placeholder="Email" required>
                        <div class="btnz">
                            <input class="gen-btn" onclick="backbutton()" id="back-btn" type="submit" value="Back">
                            <input class="gen-btn" onclick="submitbutton()" id="submit-btn" type="submit" value="Next">                        </div>

     `


]

let formBox = document.getElementById("f-box");
formBox.innerHTML = allContent[0];
const result = document.getElementById("result-box");
const backBtn = document.getElementById("back-btn");
const submitBtn = document.getElementById("submit-btn");
let aurtName;
let webName;
let webURL;
let email;
let country;
let address;
let tamplate_result;
const nextbutton = function(){
    aurtName = document.getElementById("aur-nam").value;
    webName = document.getElementById("web-nam").value;
    webURL = document.getElementById("web-url").value;
    formBox.innerHTML = allContent[1];

}
const backbutton = function(){
    formBox.innerHTML = allContent[0];

}
const submitbutton = function(){
    
    email = document.getElementById("email").value;
    country = document.getElementById("country").value;
    address = document.getElementById("address").value;
    formBox.innerHTML = 
    `
    <p>Aurthor Name : ${aurtName}</p>
    <p>Website Name : ${webName}<p>
    <p>Website URL : ${webURL}</p>
    <p>Email : ${email}</p>
    <p>Country : ${country}<p>
    <p>City / Address : ${address}</p>
`
    ;
    const date = new Date();
const localDate = date.toISOString().split('T')[0];

    tamplate_result = `

      
        <div>
<h4>Website : ${webName}</h4>
<h4>Aurthor Name : ${aurtName}</h4>
<h4>Address : ${address}</h4>

    <h2>Welcome to our website <b>${webName}</b></h2> <p><b>${webName}</b>, is a professional platform where we provide informative content about ${webURL} (${country}). We hope you like all the contents provided by us.</p><p>If you have additional questions or require more information about our website, do not hesitate to Contact through email at <b>${email}</b></p> <h2>About <b>${webName}</b></h2> <p> <b>${webName}</b> This website founded in recently by [${aurtName}]. Also, <b>${webName}</b> commits to reply to all people who Follow the our website. We hope you enjoy Our services as much as we enjoy offering them to you. Sincerely, [${aurtName}]</p><h2>Aim of <b>${webName}</b></h2><p>Like any other website, <b>${webName}</b> We want viewers to enhance their skills with the help of our contents. We will continue to provide helpful content to you like this.<p>Our About-us page was created with the help of the <a href="https://www.cb2learning.com">About Us Generator Tool</a></p><p>We are a leading online learning platform, guiding viewers to identify their strengths and fill in their learning gaps.We are working to turn our passion of <b>${webName}</b> into a growing online website. If you have any question or query regarding our website, Please don't hesitate to contact us.</p><h2>Thanks For Visiting Our Site</h2>
    
    </div>
    

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

