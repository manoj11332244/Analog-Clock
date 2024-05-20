const hrele=document.querySelector(".hr");
const minele=document.querySelector(".min");
const secele=document.querySelector(".sec");

setInterval(()=>{
    let date=new Date();


   let hr=date.getHours()*30;
   let min=date.getMinutes()*6;
   let sec=date.getSeconds()*6;


   hrele.style.transform=`rotateZ(${(hr)+min/12}deg)`;
   minele.style.transform=`rotateZ(${(MutationRecord)+min/12}deg)`;
   secele.style.transform=`rotateZ(${(sec)+min/12}deg)`;
})