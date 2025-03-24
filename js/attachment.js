const navmaker = document.querySelector(".nav");
const footermaker = document.querySelector(".footer");
const sidebarmaker = document.querySelector(".sidebar");
function makeNav(){
    navmaker.innerHTML = `
      <i class="fas fa-bars navOpenBtn"></i>
    <a href="https://www.cb2learning.com/" class="logo">cb2learning</a>

    <ul class="nav-links">
      <i class="fas fa-times navCloseBtn"></i>

      <li><a href="https://www.cb2learning.com/"><i style="color: rgb(61, 161, 255); font-size: 25px; margin: 0 0;padding: 0 0;" class="fas fa-home"></i></a></li>
      <li><a href="https://tools.cb2learning.com/">Tools</a></li>
      <li><a href="https://www.cb2learning.com/p/about.html?m=1">About Us</a></li>
      <li><a href="https://www.cb2learning.com/p/contact-us_10.html?m=1">Contact Us</a></li>
      <li><a href="https://tools.cb2learning.com/wifi-qr-code-reader">QR Code Reader</a></li>
    </ul>

    <i class="fas fa-search search-icon" id="searchIcon"></i>
    <div class="search-box">
      <i class="fas fa-search search-icon"></i>
      <input type="text" placeholder="Search here..." />
    </div>
    `
}
function makesidebar(){
    sidebarmaker.innerHTML = `
                <i class="fa-solid fa-sitemap fa-2x tm-nav-icon" style="color: white; margin-bottom: 10px;"></i>
                <ul>
 
  <li><a href="https://tools.cb2learning.com/qr-code-reader">QR Code Scanner</a></li><hr>
  <li><a href="https://tools.cb2learning.com/random-color-generator-hex">Random Color Generator</a></li><hr>
  <li><a href="https://tools.cb2learning.com/privacy-policy-generator-free/">Privacy Policy Page Generator</a></li><hr>
  <li><a href="https://tools.cb2learning.com/contact-us-page-generator">Contact Us Page Generator</a></li><hr>
  <li><a href="https://tools.cb2learning.com/about-us-page-generator">About Us Page Generator</a></li><hr>
  <li><a href="https://tools.cb2learning.com/disclaimer-page-generator">Disclaimer Page Generator</a></li><hr>


                </ul>
    `
}
function makefooter(){
    footermaker.innerHTML = `
    
        <div class="row">
            <div class="col-lg-4 f-ar">
 <div class="f-arr">
    <input type="text" placeholder="Enter your email">
    <a href="https://www.cb2learning.com/p/contact-us_10.html?m=1"><i class="fa-solid fa-arrow-right"></i></a>
 </div>

            </div>
            <div class="col-lg-4">
                <ul class=" f-ar">
                    <li><a href="https://www.cb2learning.com/">Home</a></li>
                    <li><a href="https://tools.cb2learning.com/">Tools</a></li>
                    <li><a href="https://www.cb2learning.com/p/disclaimer.html?m=1">Disclaimer</a></li>
                    <li><a href="https://tools.cb2learning.com/wifi-qr-code-reader">scanner</a></li>
                  </ul>
            </div>
            <div class="col-lg-4">
                <ul class="f-ar" style="flex-direction: row;">
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
                  </ul>
            </div>
        </div>

             <div class="row">
            <div class="col-lg-4 order-lg-2 f-ar">
                 <ul class=" f-ar col-dir">
  <li><a href="https://tools.cb2learning.com/about-us-page-generator">About Us Page Generator</a></li>
  <li><a href="https://tools.cb2learning.com/contact-us-page-generator">Contact Us Page Generator</a></li>
  <li><a href="https://tools.cb2learning.com/privacy-policy-page-generator">Privacy Policy Page Generator</a></li>
  <li><a href="https://tools.cb2learning.com/disclaimer-page-generator">Disclimar Page Generator</a></li>
            </div>
            <div class="col-lg-4 order-lg-1">
                <ul class=" f-ar col-dir">
   <li><a href="https://tools.cb2learning.com/qr-code-reader">QR Code Scanner</a></li>
  <li><a href="https://tools.cb2learning.com/random-color-generator-hex">Rendom Color Generator</a></li>
  <li><a href="#">Files Downloader</a></li>
  <li><a href="#">Image Compressor</a></li>
                  </ul>
            </div>
            <div class="col-lg-4 order-lg-3">
                  <ul class=" f-ar col-dir">
                    <li><a href="https://www.cb2learning.com/p/privacy-policy.html?m=1">Privacy Policy</a></li>
                  </ul>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-4 order-lg-2 f-ar">
                <h2 style="color: white;">cb2learning</h2>
            </div>
            <div class="col-lg-4 order-lg-1">
                <ul class=" f-ar">
                    <li><a href="https://www.cb2learning.com/p/about.html?m=1">About</a></li>
                    <li><a href="https://www.cb2learning.com/p/contact-us_10.html?m=1">Contact</a></li>
                    <li><a href="https://www.cb2learning.com/p/privacy-policy.html?m=1">Privacy Policy</a></li>
                  </ul>
            </div>
            <div class="col-lg-4 order-lg-3">
                <p class="f-ar m-1 text-muted"><small>&copy; 2025. All Rights Reserved.</small></p>

            </div>
        </div>


    `
}
makeNav()
makesidebar()
makefooter()