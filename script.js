
let tag=document.getElementsByTagName("h1")
let fg=false;
tag[0].addEventListener("click",()=>{
    if(!fg){
        tag[0].innerHTML="Hello World"
        fg=true; 
    }
   else{
    tag[0].innerHTML="Hello "
        fg=false; 
   }
})
function change(){
        let a=document.getElementsByTagName("h2");
        a[0].innerHTML="welcome to prepbytes";
         
        
    }
    // let temp=document.getElementById("six")

    tag[1].addEventListener("click",()=>{
        
            tag[1].style.color="red"
        tag[1].setAttribute("id","heading")
        
    })
    let parent=document.getElementsByClassName("parent");
    let temp2=false
    function changedirection(){
       
        if(!temp2){
            parent[0].style.flexDirection="column";
            parent[0].style.gap="30px"
            temp2=true;
            let m=document.querySelectorAll('.child');
           
        }
        else{
            parent[0].style.flexDirection="row";
            temp2=false
          
        }
    }
    tag[2].addEventListener("click",()=>{
       
       
        function clock(){
            let time=new Date();
            let hour=time.getHours();
            let min=time.getMinutes();
            let sec=time.getSeconds();
            let ampm="AM";
            if(hour>=12){
                ampm="PM"
        //    hour=hour%12
            }
        
       tag[3].innerHTML= `Time  ${hour} : ${min} : ${sec}   ${ampm}`

        }
        setInterval(()=>{
            clock();
        },1000)
        
    })
// guess my nmbr game code:

let randomnumber=Math.random()*100+1
randomnumber=parseInt(randomnumber);
console.log(randomnumber)
let count=100;
let chances=document.getElementsByTagName("h3")
chances[0].innerHTML=`chances:${count}`
function check(){
let inputvl=document.querySelector("input");
// 
if(inputvl.value==randomnumber){
    console.log(`your gues is correct ${randomnumber}`)
    chances[0].innerHTML=`chances:${count}`
//    console.log(`your score is:${count}`)
}

else if(inputvl.value>randomnumber){
    console.log("gues is high");
    count--
    chances[0].innerHTML=`chances:${count}`
    // console.log(count);
}

else{
   
console.log("your gues is low")
count--
chances[0].innerHTML=`chances:${count}`
// console.log(count);
}
}
   