//scroll-down
 var mybutton = document.getElementById("scroll-down-btn");

        // When the user scrolls down 50px from the top of the document, show the button
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                mybutton.style.display = "none";
            }
            else{
                mybutton.style.display = "block";
            }
        }