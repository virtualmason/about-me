

    
    window.onload = function(){
        let pos = 0;
        let int = setInterval(go, 2000);
        function go() { 
             document.querySelector("header").style.left = "320px";  
             pos++;
             pos === 200? clearInterval(int): pos++;
         };
    
    }
    