


    const holder = ["convection.jpg", "wholeworld.jpg", "newyork.jpg", "nature.jpg"];
    const words = ["Explore cities", "Tour the world", "Explore places", "Enjoy nature"];
    let start = 0;

    function show() {
      document.getElementById("images").src = holder[start];
      document.getElementById("caption").textContent = words[start];
    }

    setInterval(() => {
      start = (start + 1) % holder.length;
      show();
    }, 3000);
  