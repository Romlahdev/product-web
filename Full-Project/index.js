document.addEventListener("DOMContentLoaded", function(){
     
    const btn=document.getElementById("btn");
    const menu=document.getElementById("menu");
    const can=document.getElementById("cancel")


    btn.addEventListener("click", function(){
        menu.style.marginLeft="0"
    });

    can.addEventListener("click", function(){
        menu.style.marginLeft="-8rem"
    })
})