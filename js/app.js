

    
    window.onload = function(){
        let pos = 0;
        let int = setInterval(go, 2000);
        function go() { 
             document.querySelector("header").style.left = 60 + pos +"px";  
             pos+=  20;
             pos === 200? clearInterval(int): pos++;
         };
    let ans = prompt("what is your name")
    document.querySelector("header").innerHTML=ans;
    }
    