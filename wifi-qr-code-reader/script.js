        // console.log("hello word");
        // let str = "S:PTCL-BB;T:WPA;P:zindagi0099ga;H:false;"
        // console.log(str);
        // makeobb = new Object(str);
        // console.log(makeobb);
        


        
        
        // script.js file
        let resultz;
        function domReady(fn) {
            if (
                document.readyState === "complete" ||
                document.readyState === "interactive"
            ) {
                setTimeout(fn, 1000);
            } else {
                document.addEventListener("DOMContentLoaded", fn);
            }
        }
        
        domReady(function () {
        
            // If found you qr code
            function onScanSuccess(decodeText, decodeResult) {
                let setstring = decodeText.slice(5,-1);
                resultz = setstring.split(/[:;]/);
                console.log(resultz);
                document.getElementById("cbwork").style.display = 'block'
                document.getElementById("r-name").innerHTML = resultz[1];
                document.getElementById("r-security").innerHTML = resultz[3];
                document.getElementById("r-pass").innerHTML = resultz[5];
                document.getElementById("r-hide").innerHTML = resultz[7];
                const copytoclip = document.getElementById("copy-passz");
            copytoclip.addEventListener("click",()=>{
                copy_msg = document.getElementById("ccsss");
                navigator.clipboard.writeText(resultz[5]).then(()=>{
                     copy_msg.innerHTML = 'Copied Successfully!'
                }).catch(()=>{
        
                    copy_msg.innerHTML = 'copy failed'
        
                })
        
            })
                console.log(resultz[1]);
                console.log(resultz[3]);
                console.log(resultz[5]);
                console.log(resultz[7]);
                
                
                
            }
        
            let htmlscanner = new Html5QrcodeScanner(
                "my-qr-reader",
                { fps: 10, qrbos: 250 }
            );
            htmlscanner.render(onScanSuccess);
        });
        