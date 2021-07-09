const button=document.querySelectorAll("div.btn");
const h=document.querySelector(".display h1");
const operator=document.querySelector("h5");
const his=document.querySelector("h4");
let value="";
let history=[];
let s=""; 
operator.innerHTML="AC";
let flag1=true;
let flag2=false;
const calculate=function(btn){
     let content=btn.innerHTML;
    
    //add to calc display
    if(content==="1"||content==="2"||content==="3"||content==="4"||content==="5"||content==="6"||content==="7"||content==="8"||content==="9"||content==="0"||content===".")
            {           
                h.innerHTML+=content;
            }           
    
    switch(content){
        case "÷":{
            value+="/";
            operator.innerHTML="÷";
            h.innerHTML=" ";
        }
        
        break;
        case "×":{
            value+="*";
            operator.innerHTML="×";
            h.innerHTML=" ";
        }
        break;
        case "+":{
            value+="+";
            operator.innerHTML="+";
            h.innerHTML=" ";
        }
        break;
        case "-":{
            value+="-";
            operator.innerHTML="-";
            h.innerHTML=" ";}
        break;
        case "%":{
            value+="%";
            operator.innerHTML="%";
            h.innerHTML=" ";
        }
        break;
        case "=":{
            h.innerHTML=eval(value);
            history.push(value);
            operator.innerHTML="=";
            flag2=true;
        }
        break;
        case "AC":{
            value="";
            operator.innerHTML="AC";
            h.innerHTML=" ";
            his.innerHTML=" ";
            flag1=true;
        }
        break;
        case "C":{
            let con="";
        if(h.innerHTML!=" "&&!flag2){
            con=h.innerHTML;
            h.innerHTML=con.slice(0,(con.length)-1);
            value=value.slice(0,(value.length)-1);
             
        }
        else if (h.innerHTML!=" "&&flag2){
            con=h.innerHTML;
            h.innerHTML=con.slice(0,(con.length)-1);
            const evall=eval(value).toString();
            value=evall.slice(0,(evall.length)-1);
            flag2=false;
        }
        }
        break;
        case "HST":{  
            if (flag1){
                history.map(x=>{ 
                    s=`${x.toString()}=${eval(x)}</br>`;
                    his.innerHTML+=s;
                });
                
                flag1=false;
            }
          
            
        }
        break;
        default:
            value+=content;
        break;

    }
    //add border to buttons
    btn.classList.add("effect");
    setTimeout(function(){
        btn.classList.remove("effect");  
    },500); 

}

for (let btn of button){ 
    btn.addEventListener("click",function(){
        calculate(btn);
    });
}