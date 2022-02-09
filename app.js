let birthday = document.getElementById("birthday");
let  snipper = document.getElementById("image");

function ageCount (){

    let ageYear = new Date().getFullYear()-new Date(birthday.value).getFullYear();
    let ageMonth = new Date().getMonth()-new Date(birthday.value).getMonth();
    let ageDate = new Date().getDate()-new Date(birthday.value).getDate();
    let ageHour = new Date().getHours()-new Date(birthday.value).getHours();
    let ageMinutes = new Date().getMinutes()-new Date(birthday.value).getMinutes();
    let ageSeconds = new Date().getSeconds()-new Date(birthday.value).getSeconds();

    if(ageDate < 0){
        ageDate +=31;
        ageMonth -=1;
    }

    if (ageMonth < 0){
        ageMonth += 12;
        ageYear -= 1;
        }

    document.querySelector(".age__calculator--years").innerText = (ageYear + "").padStart(2,"0");
    document.querySelector(".age__calculator--months").innerText= (ageMonth +"").padStart(2,"0");
    document.querySelector(".age__calculator--days").innerText= (ageDate +"").padStart(2,"0");
    document.querySelector(".age__calculator--hours").innerText = (ageHour+"").padStart(2,"0");
    document.querySelector(".age__calculator--minutes").innerText = (ageMinutes+"").padStart(2,"0");
    document.querySelector(".age__calculator--seconds").innerText= (ageSeconds+"").padStart(2,"0"); 

    
    
}
   



birthday.addEventListener("change", ()=>{

    setInterval(ageCount,1000);
    snipper.style.display= "none";
  
    
})