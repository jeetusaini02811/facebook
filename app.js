  
        const scroll = document.getElementsByClassName("scroll")[0]
        function right(){
            scroll.scrollLeft += 120;
        }

        function showStory() {
           
            let x = document.getElementById("vijayId")
            x.classList.add("vijayStory")
            document.getElementById("closeButtonVijay").style.display="block";
          }

        function closeFun(){
            let x = document.getElementById("vijayId")
            x.classList.remove("vijayStory");
            document.getElementById("closeButtonVijay").style.display="none";
        }