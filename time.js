let btnstart=document.querySelector(".start")
let btnstop=document.querySelector(".stop")
let btnreset=document.querySelector(".reset")

let hrs=min=sec=ms=0,startti;
let h;


btnstart.addEventListener("click",()=>{
   
startti=setInterval(()=>{
    ms++;
    if(ms==100){
        sec++;
    ms=0;
    }
    if(sec==60){
        min++;;
    sec=0;
    }
    if(min==60){
        hrs++;;
    min=0;
    }

    updatedt();
    
},10)

})

btnstop.addEventListener("click",()=>{
    clearInterval(startti)
    updatedt()

})
btnreset.addEventListener("click",()=>{
     hrs=min=sec=ms=0; 
     clearInterval(startti)
    updatedt()
    
});
let phrs= hrs;
let pmin=min;
let psec=sec;
let pms=ms;

function updatedt(){

    phrs=hrs<10?'0'+ hrs:hrs;
    pmin=min<10?'0'+ min:min;
    psec=sec<10?'0'+ sec:sec;
    pms=ms<10?'0'+ ms:ms;

    document.getElementById('hrs').innerHTML=phrs;
    document.getElementById('min').innerHTML=pmin;
    document.getElementById('sec').innerHTML=psec;
    document.getElementById('ms').innerHTML=pms;




}