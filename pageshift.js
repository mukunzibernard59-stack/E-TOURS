
document.addEventListener("DOMContentLoaded", function () {
    const homeclick = document.getElementById("home");
    const holder = document.getElementById("middleItem");
    const click = document.getElementById("learnmorebutton");
    const shift = document.getElementById("secondfloo");
    const slide = document.getElementById("slide");

   
    click.addEventListener("click", function (event) {
        event.preventDefault();

        holder.style.display = "none";
        slide.style.display = "none";
        shift.style.display = "block";

        shift.scrollIntoView({
            behavior: "smooth"
        });
    });

    
    homeclick.addEventListener("click", function (event) {
        event.preventDefault();

        shift.style.display = "none";
        holder.style.display = "flex";
        slide.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
