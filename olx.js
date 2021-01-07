class Olx{
    static loggoogle = ()=>{
        window.location.href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=AddSession";
    }
    static logfb=()=>{
        window.location.href="https://en-gb.facebook.com/login/"
    }
    
}



var close=document.querySelector(".close");
        close.addEventListener('click',function(){
            document.querySelector(".bg-model").style.display="none"

        } )



var box=document.querySelector(".email");
    box.addEventListener('click',function(){
        document.querySelector('.bg-model').style.display="flex"
    })
    

    function manage(txt) { 
      	let bt = document.getElementById('btSubmit');
          if (txt.value != '') {
              bt.disabled = false;
          }
       else {
           bt.disabled = true;
       }
       }



       var box=document.querySelector("#phone");
    box.addEventListener('click',function(){
        document.querySelector('.bg-model2').style.display="flex"
    })



    var close=document.querySelector(".pclose");
        close.addEventListener('click',function(){
            document.querySelector(".bg-model2").style.display="none"

        } )



        function phone(txt) { 
            let bt = document.getElementById('bSubmit');
            var res=isNaN(txt.value)
            if (txt.value != '') {
                if(res){
                    bt.disabled = true;
                }
                else{
                bt.disabled = false;
                }
            }
         else{
             bt.disabled = true;
         }
         }