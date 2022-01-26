let x;
GetTimeHour();   
function GetTimeHour() {
 x = new Date().getHours()
   return(x);
  }
  
TimerightOut();
function TimerightOut(){
    let y = document.getElementById("Timeday");
   
    if (x > 7  &&  x < 12 ) {
        y.innerHTML = "God Morgon";
    }
    else if (x >= 12  &&  x < 18 ) {
        y.innerHTML = "God Eftermidag";
    }
    else if (x >=18   &&  x < 22 ) {
        y.innerHTML = "God Kväll";
    }
    else if (x >=22  || x <= 7 ) {
        y.innerHTML = "God Natt ";
    }  
    
}