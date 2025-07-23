let text=document.querySelector(".text");
text.addEventListener('input',function(){
    let length=text.value.length;
    document.querySelector(".counter").textContent=length;
    if(length<=50)
    {
        document.querySelector(".submit").style.backgroundColor="green";
    }
    else if(length>=51 && length <= 90)
    {
        document.querySelector(".submit").style.backgroundColor="orange";
    }
    else if(length>=91)
    {
        document.querySelector(".submit").style.backgroundColor="red";
        
    }
    else{
        document.querySelector(".submit").style.backgroundColor="green";

    }
    if(length==200){
        alert("Limit Reached");
        document.querySelector(".submit").style.backgroundColor="grey";
    }
});
