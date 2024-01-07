let count=0;
let countingH2 = document.getElementById("counting");

//adding event listener
document.getElementById("incBtn").addEventListener("click",increment);
document.getElementById("decBtn").addEventListener("click",decrement);
document.getElementById("res").addEventListener("click",reset)



function increment(){

    count++;
    countingH2.textContent = count;
   
}   

function decrement(){
    if(count<=0){
        count=0
        countingH2.textContent = count; 
    }
    else{
        
    count--;
    countingH2.textContent = count;
    }
    
}

function reset(){
    count=0;
    countingH2.textContent = count;
    
}