
        const homeclick=document.getElementById("home");
        const holder=document.getElementById("middleItem");
        const click=document.getElementById("learnmorebutton");
        const shift=document.getElementById('secondfloo');
        const listener=click.addEventListener('click',function (){
            shift.style.display="block";
            shift.scrollIntoView({behavior:'smooth'});
            holder.style.display="none";
        }) ;
        const listener2=homeclick.addEventListener('click',function (){
            shift.style.display="none";
            holder.style.display="block";
        }) ;