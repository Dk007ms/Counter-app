let count=document.querySelector(".number");

function increment(){
    let newvalue=parseInt(count.textContent);
    ++newvalue;
    count.textContent=newvalue;
}
function decrement(){
    let newvalue=parseInt(count.textContent);
    --newvalue;
    count.textContent=newvalue;
}

function reset(){
    let newvalue=parseInt(count.textContent);
    newvalue=0;
    count.textContent=newvalue;
}